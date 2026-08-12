function renderProducts() {
    // Asynchronously update products list from PHP backend if needed
    setTimeout(loadProductsFromPHPBackend, 100);

    return `
        <!-- Page Header -->
        <div class="bg-gray-50 dark:bg-[#050914] text-gray-900 dark:text-white pt-32 pb-20 relative overflow-hidden border-b border-gray-200 dark:border-white/5 transition-colors duration-300">
            <div class="absolute inset-0 opacity-20" style="background-image: radial-gradient(circle at 50% 0%, #1b365d 0%, transparent 70%);"></div>
            <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center reveal active">
                <div class="inline-block mb-6 px-4 py-1 rounded-full border border-secondary/30 bg-white dark:bg-[#0a192f] text-secondary dark:text-accent font-mono text-xs tracking-[0.2em] uppercase">
                    Arsenal Inventory
                </div>
                <h1 class="text-5xl md:text-7xl font-black mb-6 tracking-tighter">OUR <span class="text-transparent bg-clip-text bg-gradient-to-r from-secondary to-primary dark:from-secondary dark:to-accent">PRODUCTS</span></h1>
                <p class="text-xl text-gray-600 dark:text-gray-400 max-w-2xl mx-auto font-light">High-performance forged and machined components engineered for mission-critical applications.</p>
            </div>
        </div>

        <section class="py-24 bg-white dark:bg-[#0a192f] transition-colors duration-300">
            <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <!-- High-Tech Filters -->
                <div class="flex flex-wrap justify-center gap-4 mb-16 gsap-heavy-drop">
                    <button onclick="filterProducts('all', this)" class="filter-btn filter-active px-6 py-2 rounded-md bg-gray-100 dark:bg-[#050914] text-gray-600 dark:text-gray-400 border border-gray-200 dark:border-white/10 hover:border-secondary hover:text-primary dark:hover:text-white font-mono text-sm tracking-wide shadow-[0_0_15px_rgba(49,130,206,0.4)] transition-all">ALL_SYSTEMS</button>
                    <button onclick="filterProducts('automotive', this)" class="filter-btn px-6 py-2 rounded-md bg-gray-100 dark:bg-[#050914] text-gray-600 dark:text-gray-400 border border-gray-200 dark:border-white/10 hover:border-secondary hover:text-primary dark:hover:text-white font-mono text-sm tracking-wide transition-all">AUTOMOTIVE</button>
                    <button onclick="filterProducts('oil-gas-industry', this)" class="filter-btn px-6 py-2 rounded-md bg-gray-100 dark:bg-[#050914] text-gray-600 dark:text-gray-400 border border-gray-200 dark:border-white/10 hover:border-secondary hover:text-primary dark:hover:text-white font-mono text-sm tracking-wide transition-all">OIL_&_GAS</button>
                    <button onclick="filterProducts('tractor-farm-equipment', this)" class="filter-btn px-6 py-2 rounded-md bg-gray-100 dark:bg-[#050914] text-gray-600 dark:text-gray-400 border border-gray-200 dark:border-white/10 hover:border-secondary hover:text-primary dark:hover:text-white font-mono text-sm tracking-wide transition-all">TRACTOR_&_FARM</button>
                    <button onclick="filterProducts('mining', this)" class="filter-btn px-6 py-2 rounded-md bg-gray-100 dark:bg-[#050914] text-gray-600 dark:text-gray-400 border border-gray-200 dark:border-white/10 hover:border-secondary hover:text-primary dark:hover:text-white font-mono text-sm tracking-wide transition-all">MINING</button>
                    <button onclick="filterProducts('hydraulic-fitting', this)" class="filter-btn px-6 py-2 rounded-md bg-gray-100 dark:bg-[#050914] text-gray-600 dark:text-gray-400 border border-gray-200 dark:border-white/10 hover:border-secondary hover:text-primary dark:hover:text-white font-mono text-sm tracking-wide transition-all">HYDRAULIC_FITTINGS</button>
                    <button onclick="filterProducts('industrial', this)" class="filter-btn px-6 py-2 rounded-md bg-gray-100 dark:bg-[#050914] text-gray-600 dark:text-gray-400 border border-gray-200 dark:border-white/10 hover:border-secondary hover:text-primary dark:hover:text-white font-mono text-sm tracking-wide transition-all">INDUSTRIAL</button>
                </div>
                
                <!-- Products Grid Container -->
                <div id="products-grid-container" class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8" style="perspective: 1500px;">
                    ${renderProductsGridHTML()}
                </div>
            </div>
        </section>

        <style>
            @keyframes slideUpFade {
                0% { opacity: 0; transform: translateY(30px); }
                100% { opacity: 1; transform: translateY(0); }
            }
            .slide-up-card {
                opacity: 0;
                animation: slideUpFade 0.6s ease-out forwards;
            }
            .filter-active {
                background-color: #1363a6 !important;
                color: white !important;
                border-color: #1363a6 !important;
            }
        </style>
    `;
}

function renderProductsGridHTML() {
    let allProducts = {};
    if (window.pageContent && window.pageContent.dbProductsData) {
        allProducts = window.pageContent.dbProductsData;
    }

    let html = '';
    let delay = 0;
    const renderedSlugs = new Set();

    for (const [path, data] of Object.entries(allProducts)) {
        if (!data) continue;
        const pageSlug = path.replace(/^\//, '');
        if (renderedSlugs.has(pageSlug)) continue;
        renderedSlugs.add(pageSlug);

        let cleanDesc = data.description1 || '';
        const quoteIdx = cleanDesc.indexOf('Get a Quote');
        if (quoteIdx !== -1) {
            cleanDesc = cleanDesc.substring(quoteIdx + 11);
            const jkIdx = cleanDesc.indexOf('JK Forge');
            if (jkIdx !== -1 && jkIdx < 250) cleanDesc = cleanDesc.substring(jkIdx);
        }

        html += `
        <a href="product-detail.html?page=${pageSlug}" data-category="${data.category_slug || ''}" data-keywords="${data.title.toLowerCase()} ${cleanDesc.toLowerCase()} ${data.subtitle ? data.subtitle.toLowerCase() : ''}" class="product-card group bg-gray-50 dark:bg-[#050914] rounded-xl border border-gray-200 dark:border-white/10 hover-metallic transition-all duration-500 hover:-translate-y-3 hover:shadow-[0_15px_40px_rgba(49,130,206,0.2)] overflow-hidden block slide-up-card" style="animation-delay: ${delay}ms;">
            <div class="aspect-w-4 aspect-h-3 bg-gray-200 dark:bg-[#1b365d] relative overflow-hidden h-48 border-b border-gray-200 dark:border-white/10">
                <img src="${data.image || './images/facility.jpg'}" alt="${data.title}" class="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 ease-in-out">
                <div class="absolute inset-0 bg-gradient-to-t from-gray-50 dark:from-[#050914] to-transparent opacity-60 z-10"></div>
            </div>
            <div class="p-6 relative z-20">
                <div class="flex items-center gap-2 mb-3">
                    <div class="w-2 h-2 rounded-full bg-secondary animate-pulse"></div>
                    <div class="text-[10px] font-bold text-secondary dark:text-accent font-mono uppercase tracking-widest">${data.subtitle || 'Precision Component'}</div>
                </div>
                <h3 class="text-xl font-bold text-gray-900 dark:text-white mb-2 group-hover:text-secondary transition-colors duration-300">${data.title}</h3>
                <p class="text-gray-600 dark:text-gray-400 text-sm font-light line-clamp-2">${cleanDesc || 'High-performance forged components.'}</p>
            </div>
        </a>
        `;
        delay += 50;
        if (delay > 500) delay = 0;
    }
    return html || '<div class="col-span-full text-center text-gray-500 py-10 font-mono">No backend products available. Add products via Admin Terminal.</div>';
}

async function loadProductsFromPHPBackend() {
    try {
        const response = await fetch('admin/products.php');
        if (response.ok) {
            const dbList = await response.json();
            if (Array.isArray(dbList) && dbList.length > 0) {
                window.pageContent = window.pageContent || {};
                const prevCount = Object.keys(window.pageContent.dbProductsData || {}).length;
                window.pageContent.dbProductsData = {};
                
                dbList.forEach(item => {
                    const cleanSlug = item.slug.replace(/^\//, '');
                    const productObj = {
                        title: item.title,
                        subtitle: item.subtitle,
                        image: item.image,
                        description1: item.description1,
                        description2: item.description2,
                        category_slug: item.category_slug,
                        faqs: item.faqs ? (typeof item.faqs === 'string' ? JSON.parse(item.faqs) : item.faqs) : []
                    };
                    window.pageContent.dbProductsData['/' + cleanSlug] = productObj;
                    window.pageContent.dbProductsData[cleanSlug] = productObj;
                    window.pageContent['/' + cleanSlug] = productObj;
                    window.pageContent[cleanSlug] = productObj;
                });

                // Only update DOM if count changed to prevent double animation flickering
                const newCount = Object.keys(window.pageContent.dbProductsData).length;
                const gridContainer = document.getElementById('products-grid-container');
                if (gridContainer && newCount !== prevCount) {
                    gridContainer.innerHTML = renderProductsGridHTML();
                }
            }
        }
    } catch (e) {
        console.warn("Could not fetch products from PHP backend:", e);
    }
}

window.filterProducts = function(category, btnElement) {
    const buttons = document.querySelectorAll('.filter-btn');
    buttons.forEach(btn => btn.classList.remove('filter-active'));
    if (btnElement) {
        btnElement.classList.add('filter-active');
    }

    const cards = document.querySelectorAll('.product-card');
    let delay = 0;
    
    cards.forEach(card => {
        const cardCat = card.getAttribute('data-category');
        let show = (category === 'all' || cardCat === category);
        
        if (show) {
            card.style.display = 'block';
            card.style.animation = 'none';
            card.offsetHeight;
            card.style.animation = 'slideUpFade 0.6s ease-out forwards';
            card.style.animationDelay = delay + 'ms';
            delay += 50;
        } else {
            card.style.display = 'none';
        }
    });
};
