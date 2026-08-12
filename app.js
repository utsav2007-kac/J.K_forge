// app.js - Main Client-Side Router and Logic

// Store routes and their corresponding template rendering functions
const routes = {
    '/': renderHome,
    '/about': renderAbout,
    '/products': renderProducts,
    '/contact': renderContact,
};

// Application State
const appState = {
    currentPath: '/',
};

// Router Function
function router() {
    try {
        const pathname = window.location.pathname;
        const filename = pathname.split('/').pop() || 'index.html';
        const urlParams = new URLSearchParams(window.location.search);
        let pageParam = urlParams.get('page');

        let path = '/';
        if (pageParam) {
            path = '/' + pageParam;
        }

        appState.currentPath = path;

        const appRoot = document.getElementById('app-root');

        // Smooth scroll to top on route change
        window.scrollTo({ top: 0, behavior: 'smooth' });

        // Update active nav link
        updateNavLinks(path);

        // Close mobile menu if open
        const mobileMenu = document.getElementById('mobile-menu');
        if (mobileMenu) mobileMenu.classList.add('hidden');

        // Force close all desktop mega menus so the user sees the new content
        document.querySelectorAll('.group > div.absolute').forEach(menu => {
            menu.style.display = 'none';
            setTimeout(() => {
                menu.style.display = '';
            }, 50);
        });

        // Add enter animation class
        if (filename === 'index.html' || filename === '' || filename === 'about.html' || filename === 'company.html') {
            appRoot.className = 'min-h-screen page-enter overflow-x-hidden';
        } else {
            appRoot.className = 'min-h-screen pt-24 page-enter overflow-x-hidden';
        }

        const title = formatSlug(path);
        
        if (filename === 'index.html' || filename === '') {
            appRoot.innerHTML = typeof renderHome === 'function' ? renderHome() : '';
        } else if (filename === 'about.html') {
            appRoot.innerHTML = typeof renderAbout === 'function' ? renderAbout() : '';
        } else if (filename === 'contact.html') {
            appRoot.innerHTML = typeof renderContact === 'function' ? renderContact() : '';
        } else if (filename === 'products.html') {
            appRoot.innerHTML = pageParam ? renderProductDetail(title, path) : (typeof renderProducts === 'function' ? renderProducts() : '');
        } else if (filename === 'industries.html' || filename === 'industry.html') {
            appRoot.innerHTML = pageParam ? renderCategoryDetail(title, path) : (typeof renderIndustryPage === 'function' ? renderIndustryPage(title, path) : renderCategoryDetail(title, path));
        } else if (filename === 'components.html' || filename === 'component.html') {
            appRoot.innerHTML = pageParam ? renderCategoryDetail(title, path) : (typeof renderComponentPage === 'function' ? renderComponentPage(title, path) : renderCategoryDetail(title, path));
        } else if (filename === 'capabilities.html' || filename === 'capability.html') {
            appRoot.innerHTML = pageParam ? renderCategoryDetail(title, path) : (typeof renderCapabilityPage === 'function' ? renderCapabilityPage(title, path) : renderCategoryDetail(title, path));
        } else if (filename === 'locations.html' || filename === 'location.html') {
            appRoot.innerHTML = pageParam ? renderCategoryDetail(title, path) : (typeof renderLocationPage === 'function' ? renderLocationPage(title, path) : renderCategoryDetail(title, path));
        } else if (filename === 'company.html') {
            appRoot.innerHTML = pageParam ? renderProductDetail(title, path) : (typeof renderCompanyPage === 'function' ? renderCompanyPage(title, path) : renderProductDetail(title, path));
        } else if (filename === 'product-detail.html' || filename === 'productDetail.html') {
            appRoot.innerHTML = typeof renderProductDetail === 'function' ? renderProductDetail(title, path) : 'Page not found';
        } else {
            // Fallback
            appRoot.innerHTML = typeof renderProductDetail === 'function' ? renderProductDetail(title, path) : 'Page not found';
        }

        // Re-initialize animations after DOM update
        setTimeout(() => {
            initRevealAnimations();
            init3DScrollAnimations();
            if (path === '/' || path === '') {
                initHeroSlider();
            }
            // Auto filter products by category query param if on products.html
            if (filename === 'products.html' && !pageParam) {
                const urlParams = new URLSearchParams(window.location.search);
                const catParam = urlParams.get('cat');
                if (catParam) {
                    // Find the matching filter button and activate it
                    const targetBtn = Array.from(document.querySelectorAll('.filter-btn')).find(btn => {
                        const onclickAttr = btn.getAttribute('onclick') || '';
                        return onclickAttr.includes(`'${catParam}'`) || onclickAttr.includes(`"${catParam}"`);
                    });
                    if (targetBtn && typeof window.filterProducts === 'function') {
                        window.filterProducts(catParam, targetBtn);
                    }
                }
            }
            updateNavbarStyle();
        }, 100);
    } catch (error) {
        document.getElementById('app-root').innerHTML = `
            <div class="p-10 bg-red-100 text-red-800 rounded mt-20 mx-10">
                <h2 class="text-2xl font-bold mb-4">Error Rendering Page</h2>
                <pre class="bg-red-50 p-4 rounded text-sm overflow-auto">${error.stack || error.toString()}</pre>
            </div>
        `;
    }
}

// Helper to format slug to Title (e.g., /automotive-forging-manufacturer -> Automotive Forging Manufacturer)
function formatSlug(slug) {
    let cleanSlug = slug.replace(/^\//, ''); // remove leading slash
    return cleanSlug.split('-').map(word => word.charAt(0).toUpperCase() + word.slice(1)).join(' ');
}

function getCategoryForSlug(slug) {
    const cleanPath = slug.replace(/^\//, '');
    
    // Explicit exception for top-level static routes to prevent them from matching categories
    if (['products', 'contact', 'about', 'home'].includes(cleanPath)) {
        return null;
    }

    const paddedPath = '-' + cleanPath + '-';

    if (['automotive', 'automobile', 'vehicle', 'truck', 'two-wheeler', 'agricultural', 'tractor', 'railway', 'defense', 'marine', 'shipbuilding', 'oil', 'gas', 'petrochemical', 'offshore', 'power', 'wind', 'solar', 'mining', 'chemical', 'water', 'food', 'pharmaceutical', 'aerospace', 'earthmoving', 'construction', 'steel', 'cement', 'sugar', 'paper', 'textile', 'industrial', 'elevator', 'crane'].some(k => paddedPath.includes('-' + k + '-'))) {
        return 'industries';
    } else if (['gear', 'shaft', 'bevel', 'axle', 'crank', 'cam', 'rod', 'yoke', 'spindle', 'bearing', 'rocker', 'piston', 'knuckle', 'stub', 'king', 'tie', 'hub', 'flange', 'coupling', 'hydraulic', 'pump', 'valve', 'pipeline', 'fastener', 'ring', 'hook', 'clevis', 'compressor', 'disc'].some(k => paddedPath.includes('-' + k + '-'))) {
        return 'components';
    } else if (['forging', 'machining', 'treatment', 'blasting', 'plating', 'dies', 'exporter', 'iso', 'ss316', 'en24', 'en8', 'sae', 'ms', 'alloy', 'titanium'].some(k => paddedPath.includes('-' + k + '-'))) {
        return 'capabilities';
    } else if (['rajkot', 'gujarat', 'ahmedabad', 'surat', 'vadodara', 'mumbai', 'pune', 'aurangabad', 'nagpur', 'jaipur', 'ludhiana', 'delhi', 'bangalore', 'chennai', 'coimbatore', 'hyderabad', 'kolkata', 'india', 'uae', 'europe', 'usa'].some(k => paddedPath.includes('-' + k + '-'))) {
        return 'locations';
    } else if (['company', 'history', 'leadership', 'vision', 'mission', 'awards', 'career', 'process', 'infrastructure'].some(k => paddedPath.includes('-' + k + '-'))) {
        return 'company';
    }
    return null;
}

// Helper to update active navigation links
function updateNavLinks(currentPath) {
    const pathname = window.location.pathname;
    const filename = pathname.split('/').pop() || 'index.html';
    const urlParams = new URLSearchParams(window.location.search);
    const pageParam = urlParams.get('page');
    
    let activeRoute = '/';
    
    // Determine base active route from filename
    if (filename === 'index.html' || filename === '') {
        activeRoute = '/';
    } else if (filename === 'about.html' || filename === 'company.html') {
        activeRoute = '/about';
    } else if (filename === 'products.html' || filename === 'product-detail.html' || filename === 'productDetail.html') {
        activeRoute = '/products';
    } else if (filename === 'contact.html') {
        activeRoute = '/contact';
    } else if (filename === 'industries.html') {
        activeRoute = 'industries';
    } else if (filename === 'components.html') {
        activeRoute = 'components';
    } else if (filename === 'capabilities.html') {
        activeRoute = 'capabilities';
    } else if (filename === 'locations.html') {
        activeRoute = 'locations';
    }

    // Override with category logic if there is a page parameter, UNLESS we are on the products page
    if (pageParam && filename !== 'products.html') {
        const category = getCategoryForSlug(pageParam);
        if (category) {
            if (category === 'company') activeRoute = '/about';
            else activeRoute = category;
        }
    }

    const navItems = document.querySelectorAll('.nav-item');
    
    navItems.forEach(item => {
        const route = item.getAttribute('data-route');
        if (!route) return;

        if (route === activeRoute) {
            item.classList.add('nav-active');
        } else {
            item.classList.remove('nav-active');
        }
    });
}

// Reveal Animations Logic
function initRevealAnimations() {
    const reveals = document.querySelectorAll('.reveal');

    function checkReveal() {
        const windowHeight = window.innerHeight;
        const elementVisible = 100;

        reveals.forEach(reveal => {
            const elementTop = reveal.getBoundingClientRect().top;
            if (elementTop < windowHeight - elementVisible) {
                reveal.classList.add('active');
            }
        });
    }

    window.addEventListener('scroll', checkReveal);
    checkReveal(); // Trigger once on load
}

// Function to update navbar style based on route and scroll
function updateNavbarStyle() {
    const navbar = document.getElementById('navbar');
    if (!navbar) return;

    const pathname = window.location.pathname;
    const filename = pathname.split('/').pop() || 'index.html';
    const isHome = (filename === 'index.html' || filename === '');
    const navItems = document.querySelectorAll('.nav-item');
    const logoText = document.querySelector('#navbar .font-bold.text-xl');

    // Transparent only on home page when at top
    if (isHome && window.scrollY < 50) {
        navbar.classList.add('nav-transparent', 'bg-transparent');
        navbar.classList.remove('shadow-lg', 'bg-white', 'border-b', 'border-gray-200');
        
        // Make text white for transparent background
        navItems.forEach(item => {
            item.classList.remove('text-gray-800');
            item.classList.add('text-white');
        });
        if(logoText) logoText.classList.add('text-white');
    } else {
        navbar.classList.remove('nav-transparent', 'bg-transparent');
        navbar.classList.add('bg-white', 'border-b', 'border-gray-200');
        
        // Revert text to dark
        navItems.forEach(item => {
            item.classList.remove('text-white');
            item.classList.add('text-gray-800');
        });
        if(logoText) logoText.classList.remove('text-white');

        if (window.scrollY > 10) {
            navbar.classList.add('shadow-lg');
        } else {
            navbar.classList.remove('shadow-lg');
        }
    }
}

// Navbar Scroll Effect
window.addEventListener('scroll', updateNavbarStyle);
// Call once to set initial state
setTimeout(updateNavbarStyle, 100);

// Mobile Menu Toggle
const mobileBtn = document.getElementById('mobile-menu-btn');
if (mobileBtn) {
    mobileBtn.addEventListener('click', () => {
        const menu = document.getElementById('mobile-menu');
        if (menu) menu.classList.toggle('hidden');
    });
}

// Initialize
if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', () => {
        router();
    });
} else {
    router();
}

// Hero Background Slider Logic
function initHeroSlider() {
    if (typeof gsap === 'undefined') return;
    const slides = document.querySelectorAll('.hero-bg-slide');
    if (slides.length < 2) return;

    let current = 0;

    // Set initial states
    gsap.set(slides, { opacity: 0, scale: 1 });
    gsap.set(slides[0], { opacity: 1, scale: 1.05 });

    function nextSlide() {
        const next = (current + 1) % slides.length;

        const tl = gsap.timeline();

        // Bring next slide above and fade it in
        tl.set(slides[next], { zIndex: 1, scale: 1 })
            .to(slides[next], { opacity: 1, duration: 2, ease: "power2.inOut" }, 0)
            .to(slides[next], { scale: 1.05, duration: 6, ease: "none" }, 0)

            // Fade out current slide underneath and reset
            .set(slides[current], { zIndex: 0 }, 0)
            .to(slides[current], { opacity: 0, duration: 2, ease: "power2.inOut" }, 0)
            .set(slides[current], { scale: 1 }, 2);

        current = next;
    }

    // Start interval
    setInterval(nextSlide, 5000);
}

// 3D GSAP Scroll Animations Initialization
function init3DScrollAnimations() {
    if (typeof gsap === 'undefined' || typeof ScrollTrigger === 'undefined') return;

    gsap.registerPlugin(ScrollTrigger);

    // Kill existing ScrollTriggers to prevent overlaps when routing
    ScrollTrigger.getAll().forEach(trigger => trigger.kill());

    // 1. 3D Parallax Reveal
    gsap.utils.toArray('.gsap-3d-reveal').forEach(elem => {
        gsap.fromTo(elem,
            { opacity: 0, rotationX: -45, y: 100, z: -100 },
            {
                opacity: 1, rotationX: 0, y: 0, z: 0, duration: 1.5, ease: "power3.out",
                scrollTrigger: { trigger: elem, start: "top 85%", toggleActions: "play none none reverse" }
            }
        );
    });

    // 2. Heavy Machinery Stomp
    gsap.utils.toArray('.gsap-heavy-drop').forEach(elem => {
        gsap.fromTo(elem,
            { scale: 1.5, opacity: 0, y: -50 },
            {
                scale: 1, opacity: 1, y: 0, duration: 1, ease: "bounce.out",
                scrollTrigger: { trigger: elem, start: "top 80%" }
            }
        );
    });

    // 3. 3D Rotating Cards
    gsap.utils.toArray('.gsap-3d-card').forEach((card, index) => {
        gsap.fromTo(card,
            { opacity: 0, rotationY: 45, x: 50 },
            {
                opacity: 1, rotationY: 0, x: 0, duration: 1, ease: "back.out(1.7)",
                scrollTrigger: { trigger: card, start: "top 90%" }
            }
        );
    });

    // Refresh ScrollTrigger to ensure calculations are correct after DOM updates
    ScrollTrigger.refresh();
}
