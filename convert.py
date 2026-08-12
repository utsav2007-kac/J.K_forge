import os
import re

TARGET_DIR = r"D:\J.K_forge-main"

EXTENSIONS = {'.html', '.js', '.py'}
EXCLUDE_DIRS = {'.git', 'node_modules', '__pycache__'}

# Define replacement rules (regex, replacement string)
REPLACEMENTS = [
    # Clean up previous bad replacements from scraper.py
    (r'(?i)(info|sales|purchase)@jk\s*forge\.com', r'\1@jkforge.com'),
    
    # Real Shivam Forge references -> JK Forge
    (r'(?i)shivam\s*forging', 'JK Forge'),
    (r'(?i)shivam\s*forge', 'JK Forge'),
    (r'(?i)ganga\s*forging', 'JK Forge'),
    (r'(?i)ganga\s*gate', 'JK Gate'),
    
    # Domains and social handles
    (r'(?i)shivamforge\.com', 'jkforge.com'),
    (r'(?i)shivamforge', 'jkforge'),
    
    # Phone numbers
    (r'\+91[-\s]*92657[-\s]*72827', '+91-00000-00000'),
    (r'7600066117', '0000000000'),
    
    # Addresses
    (r'(?i)Plot No\.3/B,\s*Rs No\.551P/3,?\s*(?:Ganga Forging,?\s*)?Chaitanya Industrial Area,?\s*(?:Ganga Gate,?\s*)?Shapar', 'Plot 1, JK Industrial Zone, Metropolis'),
    (r'(?i)Plot No\.3/B,?\s*Chaitanya Industrial Area,?\s*Shapar', 'Plot 1, JK Industrial Zone, Metropolis'),
]

def process_file(filepath):
    try:
        with open(filepath, 'r', encoding='utf-8') as f:
            content = f.read()
            
        new_content = content
        for pattern, replacement in REPLACEMENTS:
            new_content = re.sub(pattern, replacement, new_content)
            
        if new_content != content:
            with open(filepath, 'w', encoding='utf-8') as f:
                f.write(new_content)
            return True
            
    except Exception as e:
        print(f"Error processing {filepath}: {e}")
        
    return False

def main():
    modified_count = 0
    for root, dirs, files in os.walk(TARGET_DIR):
        dirs[:] = [d for d in dirs if d not in EXCLUDE_DIRS]
        
        for file in files:
            ext = os.path.splitext(file)[1].lower()
            if ext in EXTENSIONS:
                filepath = os.path.join(root, file)
                
                # Exclude this script itself
                if os.path.basename(filepath) == 'convert.py':
                    continue
                    
                if process_file(filepath):
                    print(f"Updated: {os.path.relpath(filepath, TARGET_DIR)}")
                    modified_count += 1
                    
    print(f"\nDone! Modified {modified_count} files.")

if __name__ == '__main__':
    main()
