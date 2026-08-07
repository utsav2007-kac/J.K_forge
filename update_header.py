import os
import re

file_path = r'D:\J.K_forge-main\components\header.js'

with open(file_path, 'r', encoding='utf-8') as f:
    content = f.read()

# Split by the mega menus
# We can find the start of each section by the button data-route
# <button data-route="industries"
# <button data-route="components"
# <button data-route="capabilities"
# <button data-route="locations"

sections = re.split(r'(<button data-route=".*?">)', content)

new_content = ""
current_section = None

for part in sections:
    if part.startswith('<button data-route="industries"'):
        current_section = 'industries'
        new_content += part
    elif part.startswith('<button data-route="components"'):
        current_section = 'components'
        new_content += part
    elif part.startswith('<button data-route="capabilities"'):
        current_section = 'capabilities'
        new_content += part
    elif part.startswith('<button data-route="locations"'):
        current_section = 'locations'
        new_content += part
    else:
        if current_section == 'industries':
            part = part.replace('product-detail.html?page=', 'industry.html?page=')
        elif current_section == 'components':
            part = part.replace('product-detail.html?page=', 'components.html?page=')
        elif current_section == 'capabilities':
            part = part.replace('product-detail.html?page=', 'capabilities.html?page=')
        elif current_section == 'locations':
            part = part.replace('product-detail.html?page=', 'location.html?page=')
        
        # Reset current section if we reach the end of the mega menu div (rough heuristic, or just let it replace until the next button)
        # Actually it's fine to just replace all until the next button, but what about the mobile menu at the bottom?
        # The mobile menu has links too!
        # The mobile menu also groups them by Industries, Components, Capabilities, Locations.
        
        # Let's handle the mobile menu as well.
        # It's better to just use a regular expression on the hrefs, but how do we know which category it belongs to?
        new_content += part

with open(file_path, 'w', encoding='utf-8') as f:
    f.write(new_content)

print("Done part 1")
