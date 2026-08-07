import os

file_path = r'D:\J.K_forge-main\components\header.js'
with open(file_path, 'r', encoding='utf-8') as f:
    lines = f.readlines()

new_lines = []
current_section = None

for line in lines:
    if 'data-route="industries"' in line:
        current_section = 'industries'
    elif 'data-route="components"' in line:
        current_section = 'components'
    elif 'data-route="capabilities"' in line:
        current_section = 'capabilities'
    elif 'data-route="locations"' in line:
        current_section = 'locations'
    elif 'id="mobile-menu"' in line:
        current_section = 'mobile_menu'
        
    if current_section == 'industries':
        line = line.replace('product-detail.html?page=', 'industry.html?page=')
    elif current_section == 'components':
        line = line.replace('product-detail.html?page=', 'components.html?page=')
    elif current_section == 'capabilities':
        line = line.replace('product-detail.html?page=', 'capabilities.html?page=')
    elif current_section == 'locations':
        line = line.replace('product-detail.html?page=', 'location.html?page=')
    elif current_section == 'mobile_menu':
        # Mobile menu doesn't have data-route but has nested sections
        # To be safe, we will just use the python script to also find the headers
        pass
        
    new_lines.append(line)

with open(file_path, 'w', encoding='utf-8') as f:
    f.writelines(new_lines)
