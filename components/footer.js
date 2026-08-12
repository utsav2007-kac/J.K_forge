function renderFooter() {
    let html = `<footer class="bg-gray-100 dark:bg-dark text-gray-800 dark:text-white pt-16 pb-8 transition-colors duration-300">
        <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div class="grid grid-cols-1 md:grid-cols-4 gap-12 mb-12">
                <div class="col-span-1 md:col-span-1">
                    <div class="flex items-center gap-3 mb-6">
                        <img src="./images/logo.png" alt="JK Forge Logo" class="h-32 w-auto object-contain bg-black/5 dark:bg-white/5 p-2 rounded-xl backdrop-blur-sm shadow-xl transition-all">
                    </div>
                    <p class="text-gray-600 dark:text-gray-400 text-sm leading-relaxed mb-6 transition-colors">
                        Leading precision forging and casting manufacturer in Rajkot, Gujarat. Engineering strength, forging precision.
                    </p>
                    <div class="flex space-x-4">
                        <a href="#" class="w-10 h-10 rounded-full bg-gray-200 flex items-center justify-center hover:bg-secondary transition-colors text-gray-600 hover:text-white">
                            <i class="fab fa-facebook-f"></i>
                        </a>
                        <a href="#" class="w-10 h-10 rounded-full bg-gray-200 flex items-center justify-center hover:bg-secondary transition-colors text-gray-600 hover:text-white">
                            <i class="fab fa-linkedin-in"></i>
                        </a>
                        <a href="#" class="w-10 h-10 rounded-full bg-gray-200 flex items-center justify-center hover:bg-secondary transition-colors text-gray-600 hover:text-white">
                            <i class="fab fa-twitter"></i>
                        </a>
                    </div>
                </div>
                
                <div>
                    <h4 class="text-lg font-bold mb-6 border-b border-gray-300 pb-2">Quick Links</h4>
                    <ul class="space-y-3">
                        <li><a href="index.html" class="text-gray-600 hover:text-secondary hover:pl-2 transition-all"><i class="fas fa-chevron-right text-xs mr-2 text-secondary"></i>Home</a></li>
                        <li><a href="about.html" class="text-gray-600 hover:text-secondary hover:pl-2 transition-all"><i class="fas fa-chevron-right text-xs mr-2 text-secondary"></i>About Us</a></li>
                        <li><a href="products.html" class="text-gray-600 hover:text-secondary hover:pl-2 transition-all"><i class="fas fa-chevron-right text-xs mr-2 text-secondary"></i>Products</a></li>
                        <li><a href="blog/index.html" class="text-gray-600 hover:text-secondary hover:pl-2 transition-all"><i class="fas fa-chevron-right text-xs mr-2 text-secondary"></i>Blog</a></li>
                        <li><a href="contact.html" class="text-gray-600 hover:text-secondary hover:pl-2 transition-all"><i class="fas fa-chevron-right text-xs mr-2 text-secondary"></i>Contact Us</a></li>
                    </ul>
                </div>
                
                <div>
                    <h4 class="text-lg font-bold mb-6 border-b border-gray-300 pb-2">Industries</h4>
                    <ul class="space-y-3">
                        <li><a href="industry.html?page=automotive-forging" class="text-gray-600 hover:text-secondary hover:pl-2 transition-all"><i class="fas fa-chevron-right text-xs mr-2 text-secondary"></i>Automotive</a></li>
                        <li><a href="industry.html?page=oil-gas-forging" class="text-gray-600 hover:text-secondary hover:pl-2 transition-all"><i class="fas fa-chevron-right text-xs mr-2 text-secondary"></i>Oil & Gas</a></li>
                        <li><a href="industry.html?page=tractor-parts-forging" class="text-gray-600 hover:text-secondary hover:pl-2 transition-all"><i class="fas fa-chevron-right text-xs mr-2 text-secondary"></i>Tractor & Farm</a></li>
                        <li><a href="industry.html?page=mining-forging" class="text-gray-600 hover:text-secondary hover:pl-2 transition-all"><i class="fas fa-chevron-right text-xs mr-2 text-secondary"></i>Mining</a></li>
                    </ul>
                </div>
                
                <div>
                    <h4 class="text-lg font-bold mb-6 border-b border-gray-300 pb-2">Contact Info</h4>
                    <ul class="space-y-4">
                        <li class="flex items-start">
                            <i class="fas fa-map-marker-alt text-secondary mt-1 mr-3"></i>
                            <span class="text-gray-600 dark:text-gray-400 text-sm">Plot No: 11, Chaitanya Industrial Area, Ganga Gate, Shapar (Veraval), Rajkot, Gujarat</span>
                        </li>
                        <li class="flex items-center">
                            <i class="fas fa-phone-alt fa-flip-horizontal text-secondary mr-3"></i>
                            <a href="tel:+917600066117" class="text-gray-600 dark:text-gray-400 hover:text-secondary text-sm">+91 7600066117</a>
                        </li>
                        <li class="flex items-center">
                            <i class="fas fa-envelope text-secondary mr-3"></i>
                            <a href="mailto:info@jkforgeindia.com" class="text-gray-600 dark:text-gray-400 hover:text-secondary text-sm">info@jkforgeindia.com</a>
                        </li>
                    </ul>
                </div>
            </div>
            
            <div class="border-t border-gray-300 dark:border-gray-800 pt-8 flex flex-col md:flex-row justify-between items-center transition-colors">
                <p class="text-gray-500 text-sm mb-4 md:mb-0">
                    &copy; 2024 JK Forge. All rights reserved.
                </p>
                <div class="flex space-x-6">
                    <a href="#" class="text-gray-500 hover:text-white text-sm">Privacy Policy</a>
                    <a href="#" class="text-gray-500 hover:text-white text-sm">Terms of Service</a>
                </div>
            </div>
        </div>
    </footer>`;

    const p = window.location.pathname.replace(/\\/g, '/');
    let prefix = './';
    if (p.includes('/pages/industries/') || p.includes('/pages/components/') || p.includes('/pages/capabilities/') || p.includes('/pages/locations/')) {
        prefix = '../../';
    } else if (p.includes('/pages/')) {
        prefix = '../';
    } else if (p.includes('/blog/') && !p.includes('/blog/admin/')) {
        prefix = '../';
    }

    if (prefix !== './') {
        html = html.replace(/src="\.\/images\//g, `src="${prefix}images/`);
        html = html.replace(/src="images\//g, `src="${prefix}images/`);
        html = html.replace(/href="index\.html"/g, `href="${prefix}index.html"`);
        html = html.replace(/href="about\.html"/g, `href="${prefix}about.html"`);
        html = html.replace(/href="products\.html"/g, `href="${prefix}products.html"`);
        html = html.replace(/href="contact\.html"/g, `href="${prefix}contact.html"`);
        html = html.replace(/href="blog\//g, `href="${prefix}blog/`);
        html = html.replace(/href="pages\//g, `href="${prefix}pages/`);
        html = html.replace(/href="industry\.html\?page=/g, `href="${prefix}industry.html?page=`);
    }

    const container = document.getElementById('main-footer-container');
    if (container) {
        container.innerHTML = html;
    }
}

if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', renderFooter);
} else {
    renderFooter();
}

