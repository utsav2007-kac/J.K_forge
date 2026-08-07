function renderProducts() {
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
                    <button onclick="filterProducts('oil_gas', this)" class="filter-btn px-6 py-2 rounded-md bg-gray-100 dark:bg-[#050914] text-gray-600 dark:text-gray-400 border border-gray-200 dark:border-white/10 hover:border-secondary hover:text-primary dark:hover:text-white font-mono text-sm tracking-wide transition-all">OIL_GAS</button>
                    <button onclick="filterProducts('heavy_machinery', this)" class="filter-btn px-6 py-2 rounded-md bg-gray-100 dark:bg-[#050914] text-gray-600 dark:text-gray-400 border border-gray-200 dark:border-white/10 hover:border-secondary hover:text-primary dark:hover:text-white font-mono text-sm tracking-wide transition-all">HEAVY_MACHINERY</button>
                </div>
                
                <!-- Products Grid -->
                <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8" style="perspective: 1500px;">
                    ${(function() {
                        let allProducts = {};
                        if (window.pageContent) {
                            Object.assign(allProducts, window.pageContent.mobilityData || {});
                            Object.assign(allProducts, window.pageContent.componentsData || {});
                            Object.assign(allProducts, window.pageContent.industriesOtherData || {});
                            // Removed capabilitiesData so we only show genuine products
                        }

                        if (Object.keys(allProducts).length === 0) {
                            allProducts = {
                                '/gear-forging': { title: 'Gear Forgings', subtitle: 'Drivetrain', description1: 'High-strength gear blanks and precision forged gears.' },
                                '/flange-forging': { title: 'Industrial Flanges', subtitle: 'Fluid & Flow', description1: 'Pressure-tested flanges for oil, gas, and chemical pipelines.' },
                                '/shaft-forging': { title: 'Forged Shafts', subtitle: 'Rotating Components', description1: 'Axle and drive shafts for heavy machinery and automotive.' },
                                '/steering-knuckle': { title: 'Steering Knuckles', subtitle: 'Suspension', description1: 'Critical safety components forged for maximum durability.' }
                            };
                        }

                        let html = '';
                        let delay = 0;
                        for (const [path, data] of Object.entries(allProducts)) {
                            if (!data) continue;
                            const pageSlug = path.replace(/^\//, '');
                            // Clean the description for the card snippet
                            let cleanDesc = data.description1 || '';
                            const quoteIdx = cleanDesc.indexOf('Get a Quote');
                            if (quoteIdx !== -1) {
                                cleanDesc = cleanDesc.substring(quoteIdx + 11);
                                const jkIdx = cleanDesc.indexOf('JK Forge');
                                if (jkIdx !== -1 && jkIdx < 250) cleanDesc = cleanDesc.substring(jkIdx);
                            }

                            html += `
                            <a href="product-detail.html?page=${pageSlug}" data-keywords="${data.title.toLowerCase()} ${cleanDesc.toLowerCase()} ${data.subtitle ? data.subtitle.toLowerCase() : ''}" class="product-card group bg-gray-50 dark:bg-[#050914] rounded-xl border border-gray-200 dark:border-white/10 hover-metallic transition-all duration-500 hover:-translate-y-3 hover:shadow-[0_15px_40px_rgba(49,130,206,0.2)] overflow-hidden block slide-up-card" style="animation-delay: ${delay}ms;">
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
                        return html;
                    })()}
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
                background-color: #1363a6 !important; /* Secondary */
                color: white !important;
                border-color: #1363a6 !important;
            }
        </style>

        <script>
            function filterProducts(category, btnElement) {
                // Update active button styling
                const buttons = document.querySelectorAll('.filter-btn');
                buttons.forEach(btn => btn.classList.remove('filter-active'));
                if (btnElement) {
                    btnElement.classList.add('filter-active');
                }

                const cards = document.querySelectorAll('.product-card');
                let delay = 0;
                
                cards.forEach(card => {
                    const keywords = card.getAttribute('data-keywords');
                    let show = false;
                    
                    if (category === 'all') {
                        show = true;
                    } else if (category === 'automotive') {
                        if (keywords.includes('auto') || keywords.includes('car') || keywords.includes('vehicle') || keywords.includes('gear') || keywords.includes('shaft') || keywords.includes('steering') || keywords.includes('mobility')) show = true;
                    } else if (category === 'oil_gas') {
                        if (keywords.includes('oil') || keywords.includes('gas') || keywords.includes('valve') || keywords.includes('flange') || keywords.includes('pipe') || keywords.includes('pressure')) show = true;
                    } else if (category === 'heavy_machinery') {
                        if (keywords.includes('heavy') || keywords.includes('machine') || keywords.includes('tractor') || keywords.includes('farm') || keywords.includes('mining') || keywords.includes('excavat')) show = true;
                    }
                    
                    if (show) {
                        card.style.display = 'block';
                        // Re-trigger animation
                        card.style.animation = 'none';
                        card.offsetHeight; // Trigger reflow
                        card.style.animation = 'slideUpFade 0.6s ease-out forwards';
                        card.style.animationDelay = delay + 'ms';
                        delay += 50;
                    } else {
                        card.style.display = 'none';
                    }
                });
            }
        </script>
    `;
}
