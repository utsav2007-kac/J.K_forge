import os
import re

dir_path = r'D:\J.K_forge-main'
index_path = os.path.join(dir_path, 'index.html')

with open(index_path, 'r', encoding='utf-8') as f:
    html = f.read()

# Extract header
header_match = re.search(r'<header.*?</header>', html, re.DOTALL)
header_html = header_match.group(0)

# Extract footer
footer_match = re.search(r'<footer.*?</footer>', html, re.DOTALL)
footer_html = footer_match.group(0)

# Categories logic
industries = ['automotive', 'automobile', 'vehicle', 'truck', 'two-wheeler', 'agricultural', 'tractor', 'railway', 'defense', 'marine', 'shipbuilding', 'oil', 'gas', 'petrochemical', 'offshore', 'power', 'wind', 'solar', 'mining', 'chemical', 'water', 'food', 'pharmaceutical', 'aerospace', 'earthmoving', 'construction', 'steel', 'cement', 'sugar', 'paper', 'textile', 'industrial', 'elevator', 'crane']
components = ['gear', 'shaft', 'bevel', 'axle', 'crank', 'cam', 'rod', 'yoke', 'spindle', 'bearing', 'rocker', 'piston', 'knuckle', 'stub', 'king', 'tie', 'hub', 'flange', 'coupling', 'hydraulic', 'pump', 'valve', 'pipeline', 'fastener', 'ring', 'hook', 'clevis', 'compressor', 'disc']
capabilities = ['forging', 'machining', 'treatment', 'blasting', 'plating', 'dies', 'exporter', 'iso', 'ss316', 'en24', 'en8', 'sae', 'ms', 'alloy', 'titanium']
locations = ['rajkot', 'gujarat', 'ahmedabad', 'surat', 'vadodara', 'mumbai', 'pune', 'aurangabad', 'nagpur', 'jaipur', 'ludhiana', 'delhi', 'bangalore', 'chennai', 'coimbatore', 'hyderabad', 'kolkata', 'india', 'uae', 'europe', 'usa']
company = ['company', 'history', 'leadership', 'vision', 'mission', 'awards', 'career', 'process', 'infrastructure']

def get_category(slug):
    padded = '-' + slug + '-'
    if slug in ['about', 'contact', 'products', 'home', '']: return None
    for k in industries:
        if ('-' + k + '-') in padded: return 'industries'
    for k in components:
        if ('-' + k + '-') in padded: return 'components'
    for k in capabilities:
        if ('-' + k + '-') in padded: return 'capabilities'
    for k in locations:
        if ('-' + k + '-') in padded: return 'locations'
    for k in company:
        if ('-' + k + '-') in padded: return 'company'
    return 'product-detail' # default to product detail

def replace_link(match):
    page = match.group(1)
    
    # Check for category param e.g. products?cat=automotive
    if '?' in page:
        base, query = page.split('?', 1)
        if base == 'products':
            return 'href="products.html?' + query + '"'
    
    if page == '':
        return 'href="index.html"'
    if page in ['about', 'contact', 'products']:
        return f'href="{page}.html"'
        
    cat = get_category(page)
    if cat:
        return f'href="{cat}.html?page={page}"'
    else:
        return f'href="{page}.html"' # Fallback

new_header_html = re.sub(r'href="\?page=([^"]*)"', replace_link, header_html)

# Create components directory
components_dir = os.path.join(dir_path, 'components')
os.makedirs(components_dir, exist_ok=True)

# Write header.js
with open(os.path.join(components_dir, 'header.js'), 'w', encoding='utf-8') as f:
    f.write(f"document.getElementById('main-header-container').innerHTML = `{new_header_html}`;\n")

# Write footer.js
with open(os.path.join(components_dir, 'footer.js'), 'w', encoding='utf-8') as f:
    f.write(f"document.getElementById('main-footer-container').innerHTML = `{footer_html}`;\n")

# Create HTML shell
shell_html = html.replace(header_html, '<div id="main-header-container"></div>\n    <script src="components/header.js"></script>')
shell_html = shell_html.replace(footer_html, '<div id="main-footer-container"></div>\n    <script src="components/footer.js"></script>')

html_files = [
    'index.html',
    'about.html',
    'capabilities.html',
    'company.html',
    'components.html',
    'contact.html',
    'industries.html',
    'locations.html',
    'products.html',
    'product-detail.html'
]

for file in html_files:
    file_path = os.path.join(dir_path, file)
    with open(file_path, 'w', encoding='utf-8') as f:
        f.write(shell_html)

print("Extraction and MPA shell creation complete.")
