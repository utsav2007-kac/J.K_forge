import os
import shutil

dir_path = r"d:\J.K_forge-main"

html_files = [
    'about.html',
    'contact.html',
    'products.html',
    'industries.html',
    'components.html',
    'capabilities.html',
    'locations.html',
    'company.html',
    'product-detail.html'
]

index_path = os.path.join(dir_path, 'index.html')

for file in html_files:
    file_path = os.path.join(dir_path, file)
    shutil.copy2(index_path, file_path)
    print(f"Updated {file} from index.html")

print("All MPA shells updated successfully!")
