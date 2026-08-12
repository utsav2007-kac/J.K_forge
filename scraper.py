import urllib.request
import re
import json
import os
import concurrent.futures
import time

BASE_URL = "https://www.JK Forge.com"
OUTPUT_DIR = r"D:\J.K_forge-main\content"

os.makedirs(OUTPUT_DIR, exist_ok=True)

def fetch_html(url):
    try:
        req = urllib.request.Request(url, headers={'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64)'})
        with urllib.request.urlopen(req, timeout=10) as response:
            return response.read().decode('utf-8')
    except Exception as e:
        print(f"Error fetching {url}: {e}")
        return ""

print("Fetching homepage to discover links...")
html = fetch_html(BASE_URL)

mega_panels = re.findall(r'<div class="nav__mega-panel">.*?</div></div></div>', html, re.DOTALL)
url_to_category = {}
links = set()

for i, panel in enumerate(mega_panels):
    hrefs = re.findall(r'<a[^>]*href="([^"]+)"', panel)
    for href in hrefs:
        if href.startswith('/'):
            links.add(href)
            # Map index to category
            if i == 0:
                url_to_category[href] = 'industries-other' # All industries go to industries-other
            elif i == 1:
                url_to_category[href] = 'components'
            elif i == 2:
                url_to_category[href] = 'capabilities'
            elif i == 3 or i == 4:
                url_to_category[href] = 'locations'

# Also add company pages manually
company_links = ['/about', '/process', '/infrastructure']
for link in company_links:
    links.add(link)
    url_to_category[link] = 'company'

print(f"Found {len(links)} subpages to scrape.")

def get_category(slug):
    return url_to_category.get(slug, 'other')

def clean_text(text):
    text = re.sub(r'<[^>]+>', ' ', text)  # replace tags with space to prevent glued words
    text = re.sub(r'\s+', ' ', text)
    text = text.replace('&amp;', '&').replace('&quot;', '"').replace('&#x27;', "'").replace('&nbsp;', ' ')
    # Replace branding
    text = re.sub(r'Shivam\s*Forge', 'JK Forge', text, flags=re.IGNORECASE)
    text = re.sub(r'JK Forge', 'jkforge', text, flags=re.IGNORECASE)
    text = re.sub(r'Ganga\s*Forging', 'JK Forge', text, flags=re.IGNORECASE)
    return text.strip()

scraped_data = {}

def process_link(link):
    url = BASE_URL + link
    print(f"Scraping {url}...")
    page_html = fetch_html(url)
    if not page_html:
        return None
    
    # Extract Title
    title_match = re.search(r'<h1[^>]*>(.*?)</h1>', page_html, re.DOTALL | re.IGNORECASE)
    title = clean_text(title_match.group(1)) if title_match else link.replace('/', '').replace('-', ' ').title()
    
    # Extract Subtitle (eyebrow)
    subtitle_match = re.search(r'<div class="eyebrow[^>]*>(.*?)</div>', page_html, re.DOTALL | re.IGNORECASE)
    subtitle = clean_text(subtitle_match.group(1)) if subtitle_match else "Precision Component"
    
    # Extract FAQs from JSON-LD
    faqs = []
    script_matches = re.findall(r'<script type="application/ld\+json">(.*?)</script>', page_html, re.DOTALL | re.IGNORECASE)
    for script_content in script_matches:
        try:
            data = json.loads(script_content)
            if data.get('@type') == 'FAQPage' and 'mainEntity' in data:
                for item in data['mainEntity']:
                    if item.get('@type') == 'Question':
                        question = clean_text(item.get('name', ''))
                        answer = clean_text(item.get('acceptedAnswer', {}).get('text', ''))
                        faqs.append({'question': question, 'answer': answer})
        except:
            pass

    # Clean HTML for paragraph extraction
    clean_html = re.sub(r'<script.*?>.*?</script>', '', page_html, flags=re.DOTALL | re.IGNORECASE)
    clean_html = re.sub(r'<style.*?>.*?</style>', '', clean_html, flags=re.DOTALL | re.IGNORECASE)
    clean_html = re.sub(r'<header.*?>.*?</header>', '', clean_html, flags=re.DOTALL | re.IGNORECASE)
    clean_html = re.sub(r'<footer.*?>.*?</footer>', '', clean_html, flags=re.DOTALL | re.IGNORECASE)
    clean_html = re.sub(r'<nav.*?>.*?</nav>', '', clean_html, flags=re.DOTALL | re.IGNORECASE)
    clean_html = re.sub(r'<div class="nav__mega-panel">.*?</div>', '', clean_html, flags=re.DOTALL | re.IGNORECASE)

    # Extract descriptions
    paragraphs = re.findall(r'<p[^>]*>(.*?)</p>', clean_html, re.DOTALL | re.IGNORECASE)
    cleaned_paragraphs = []
    for p in paragraphs:
        ct = clean_text(p)
        # Hack to remove header garbage if it slipped through
        if "Get a Quote" in ct:
            ct = ct.split("Get a Quote")[-1].strip()
        # Only keep paragraphs that look like actual sentences (contain a period and are long enough)
        if len(ct) > 50 and ". " in ct:
            cleaned_paragraphs.append(ct)
    
    description1 = cleaned_paragraphs[0] if len(cleaned_paragraphs) > 0 else f"JK Forge is a premier manufacturer specializing in {title}."
    description2 = cleaned_paragraphs[1] if len(cleaned_paragraphs) > 1 else "We deliver exceptional quality components forged to stringent tolerances."

    
    return {
        'slug': link,
        'category': get_category(link),
        'data': {
            'title': title,
            'subtitle': subtitle,
            'image': './images/facility.jpg', # Generic image fallback
            'description1': description1,
            'description2': description2,
            'faqs': faqs
        }
    }

print("Starting scraping process (this might take a minute)...")
with concurrent.futures.ThreadPoolExecutor(max_workers=10) as executor:
    results = list(executor.map(process_link, list(links)))

# Group results by category
categories = {
    'mobility': {},
    'industries-other': {},
    'components': {},
    'capabilities': {},
    'locations': {},
    'company': {},
    'other': {}
}

for res in results:
    if res:
        cat = res['category']
        slug = res['slug']
        if cat in categories:
            categories[cat][slug] = res['data']

# Write JS files for each category
for cat, data in categories.items():
    if not data:
        # Don't skip empty ones entirely, write an empty object so the script tags don't throw ReferenceErrors
        pass
    
    file_path = os.path.join(OUTPUT_DIR, f"{cat}.js")
    
    var_name = cat.replace('-', '')
    # Convert something like 'industriesother' to 'industriesOther' if needed, or just use what we used in templates
    if cat == 'industries-other':
        var_name = 'industriesOtherData'
    else:
        var_name = cat + 'Data'
    
    js_content = f"window.pageContent = window.pageContent || {{}};\n\n"
    js_content += f"window.pageContent['{var_name}'] = " + json.dumps(data, indent=4) + ";\n\n"
    js_content += f"Object.assign(window.pageContent, window.pageContent['{var_name}']);\n"
    
    with open(file_path, 'w', encoding='utf-8') as f:
        f.write(js_content)

print("Scraping completed! Data saved to content/ directory.")

print("All done!")
