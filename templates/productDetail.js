function renderProductDetail(title, slug) {
    if (slug) {
        setTimeout(() => loadProductDetailFromPHPBackend(slug), 50);
    }
    let data = window.pageContent && (window.pageContent[slug] || window.pageContent['/' + slug]);
    
    // Default fallback features and processes
    const defaultFeatures = [
        { icon: 'fa-shield-alt', title: 'Maximum Durability', desc: 'Engineered to withstand extreme mechanical stress and thermal variance.' },
        { icon: 'fa-drafting-compass', title: 'OEM Specifications', desc: 'Tailored precisely to your blueprints and stringent tolerance requirements.' },
        { icon: 'fa-microscope', title: 'NDT Tested', desc: '100% Non-Destructive Testing for internal flawless integrity.' },
        { icon: 'fa-tachometer-alt', title: 'High Yield Strength', desc: 'Optimized grain flow structure for superior load bearing.' }
    ];
    
    const defaultProcesses = [
        { title: 'Material Spectrometry', desc: 'Sourcing the highest quality steel verified through laser spectroscopic analysis.' },
        { title: 'Closed-Die Forging', desc: 'Manipulating grain flow along the component contour for maximum impact strength.' },
        { title: 'Heat Treatment', desc: 'In-house normalizing, quenching, and tempering to exact hardness specifications.' },
        { title: 'Precision CNC Machining', desc: 'Final dimensional tuning using 5-axis machining centers.' }
    ];

    if (!data) {
        data = {
            title: title.replace(/-/g, ' ').replace(/\b\w/g, l => l.toUpperCase()),
            subtitle: 'Specialized Component',
            description1: `JK Forge is an industry-leading manufacturer specializing in high-tolerance <strong>${title.replace(/-/g, ' ').replace(/\b\w/g, l => l.toUpperCase())}</strong>. Operating from our advanced facility, we leverage automated CNC/VMC machining and precision forging technologies to deliver high-performance components.`,
            description2: `By utilizing high-grade raw materials—including alloy steel, carbon steel, and aerospace-grade stainless steel—we ensure that every forged part offers exceptional tensile strength, fatigue resistance, and absolute metallurgical integrity.`,
            features: defaultFeatures,
            processes: defaultProcesses,
            faqs: []
        };
    } else {
        // Ensure features and processes exist
        if (!data.features) data.features = defaultFeatures;
        if (!data.processes) data.processes = defaultProcesses;
    }
    
    // Also run the description cleaner just in case it's scraped data with "Get a Quote"
    let cleanDesc1 = data.description1 || '';
    const quoteIdx = cleanDesc1.indexOf('Get a Quote');
    if (quoteIdx !== -1) {
        cleanDesc1 = cleanDesc1.substring(quoteIdx + 11);
        const jkIdx = cleanDesc1.indexOf('JK Forge');
        if (jkIdx !== -1 && jkIdx < 250) {
            cleanDesc1 = cleanDesc1.substring(jkIdx);
        }
    }
    
    let cleanDesc2 = data.description2 || '';

    const displayTitle = data.title;

    return `
        <!-- Dynamic Page Header -->
        <div class="bg-gray-50 dark:bg-[#050914] text-gray-900 dark:text-white pt-32 pb-16 relative overflow-hidden border-b border-gray-200 dark:border-white/10 transition-colors duration-300">
            <div class="absolute inset-0 opacity-30 bg-cover bg-center mix-blend-overlay filter blur-sm transform scale-105" style="background-image: url('${data.image || './images/page-bg.jpg'}');"></div>
            <div class="absolute inset-0 bg-gradient-to-t from-gray-50 dark:from-[#050914] to-transparent"></div>
            
            <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 gsap-3d-reveal">
                <div class="flex items-center gap-3 mb-6">
                    <span class="w-2 h-2 rounded-full bg-secondary animate-pulse"></span>
                    <span class="text-secondary dark:text-accent font-mono text-xs font-bold uppercase tracking-[0.2em]">${data.subtitle || 'Specialized Component'}</span>
                </div>
                <h1 class="text-4xl md:text-5xl lg:text-7xl font-black mb-4 tracking-tighter uppercase text-transparent bg-clip-text bg-gradient-to-r from-gray-900 to-gray-600 dark:from-white dark:to-gray-400">${displayTitle}</h1>
            </div>
        </div>

        <!-- Main Content Section -->
        <section class="py-16 bg-white dark:bg-[#0a192f] relative transition-colors duration-300">
            <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div class="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16">
                    
                    <!-- Left Sidebar (Sticky Gallery) -->
                    <div class="lg:col-span-5 relative">
                        <div class="sticky top-24 gsap-heavy-drop">
                            <div class="bg-gray-50 dark:bg-[#050914] rounded-2xl border border-gray-200 dark:border-white/10 p-2 overflow-hidden group">
                                <div class="aspect-w-1 aspect-h-1 relative rounded-xl overflow-hidden bg-gray-200 dark:bg-[#1b365d]">
                                    <img src="${data.image || './images/hero-bg.jpg'}" alt="${displayTitle}" class="w-full h-full object-cover opacity-80 mix-blend-luminosity group-hover:mix-blend-normal group-hover:scale-105 transition-all duration-700">
                                    <div class="absolute inset-0 border border-white/5 rounded-xl pointer-events-none"></div>
                                    <!-- Scanning line animation overlay -->
                                    <div class="absolute top-0 left-0 w-full h-1 bg-secondary/30 shadow-[0_0_15px_rgba(49,130,206,0.5)] animate-[scanLine_4s_linear_infinite]"></div>
                                </div>
                            </div>
                            
                            <div class="grid grid-cols-3 gap-4 mt-4">
                                <div class="aspect-w-1 aspect-h-1 bg-gray-50 dark:bg-[#050914] border border-gray-200 dark:border-white/10 rounded-lg cursor-pointer hover:border-secondary/50 transition-colors"></div>
                                <div class="aspect-w-1 aspect-h-1 bg-gray-50 dark:bg-[#050914] border border-gray-200 dark:border-white/10 rounded-lg cursor-pointer hover:border-secondary/50 transition-colors"></div>
                                <div class="aspect-w-1 aspect-h-1 bg-gray-50 dark:bg-[#050914] border border-gray-200 dark:border-white/10 rounded-lg flex items-center justify-center text-gray-500 font-mono text-xs hover:text-secondary hover:border-secondary/50 transition-colors cursor-pointer">
                                    <i class="fas fa-cube mr-2"></i> 3D CAD
                                </div>
                            </div>
                            
                            <div class="mt-8 p-6 bg-gray-50 dark:bg-[#050914] border border-gray-200 dark:border-white/10 rounded-xl">
                                <h4 class="text-gray-900 dark:text-white font-bold mb-4 font-mono tracking-wide">DIRECT COMMS</h4>
                                <a href="tel:+917600066117" class="flex items-center text-gray-600 dark:text-gray-400 hover:text-secondary transition-colors mb-3">
                                    <i class="fas fa-phone-alt fa-flip-horizontal w-6"></i> +91 7600066117
                                </a>
                                <a href="mailto:info@jkforge.com" class="flex items-center text-gray-600 dark:text-gray-400 hover:text-secondary transition-colors">
                                    <i class="fas fa-envelope w-6"></i> info@jkforge.com
                                </a>
                            </div>
                        </div>
                    </div>
                    
                    <!-- Right Content (Scrolling Specs) -->
                    <div class="lg:col-span-7 gsap-3d-reveal" style="transition-delay: 100ms">
                        <div class="prose prose-lg text-gray-600 dark:text-gray-400 max-w-none">
                            <h2 class="text-2xl md:text-3xl font-bold text-gray-900 dark:text-white mb-6 uppercase tracking-wide border-b border-gray-200 dark:border-white/10 pb-4">${displayTitle}</h2>
                            <p class="mb-6 font-light leading-relaxed">${cleanDesc1}</p>
                            <p class="mb-12 font-light leading-relaxed">${cleanDesc2}</p>
                            
                            <!-- Inquiry Terminal Inline -->
                            <div class="mt-16 bg-gray-50 dark:bg-[#050914] p-8 rounded-xl border border-gray-200 dark:border-white/10 shadow-[0_0_30px_rgba(0,0,0,0.1)] dark:shadow-[0_0_30px_rgba(0,0,0,0.3)] gsap-3d-reveal">
                                <a href="contact.html" class="block text-center w-full bg-secondary hover:bg-[#2c5282] text-white font-bold py-4 rounded transition-all font-mono tracking-widest shadow-[0_0_15px_rgba(49,130,206,0.3)] hover:shadow-[0_0_25px_rgba(49,130,206,0.6)]">
                                    TRANSMIT INQUIRY <i class="fas fa-satellite-dish ml-2"></i>
                                </a>
                            </div>
                            ${data.faqs && data.faqs.length > 0 ? `
                            <div class="mt-12 mb-8">
                                <h3 class="text-xl font-bold text-gray-900 dark:text-white mb-6 font-mono tracking-widest border-l-4 border-secondary pl-4">TECHNICAL SPECIFICATIONS & FAQS</h3>
                                <div class="space-y-4">
                                    ${data.faqs.map((faq) => `
                                    <details class="group bg-white dark:bg-[#0a192f] border border-gray-200 dark:border-white/10 rounded-lg overflow-hidden transition-all hover:border-secondary hover:shadow-[0_0_15px_rgba(49,130,206,0.2)]">
                                        <summary class="flex justify-between items-center font-medium cursor-pointer list-none p-5 text-gray-800 dark:text-gray-200 hover:text-secondary dark:hover:text-secondary transition-colors">
                                            <span class="pr-6">${faq.question}</span>
                                            <span class="transition-transform duration-300 group-open:rotate-180 text-secondary flex-shrink-0">
                                                <i class="fas fa-chevron-down"></i>
                                            </span>
                                        </summary>
                                        <div class="text-gray-600 dark:text-gray-400 px-5 pb-5 pt-0 font-light leading-relaxed border-t border-gray-100 dark:border-white/5 mt-2 pt-4">
                                            ${faq.answer}
                                        </div>
                                    </details>
                                    `).join('')}
                                </div>
                            </div>
                            ` : ''}
                            
                           
                        </div>
                    </div>
                    
                </div>
            </div>
        </section>
        
        <style>
            @keyframes scanLine {
                0% { top: 0%; }
                100% { top: 100%; }
            }
        </style>
    `;
}

async function loadProductDetailFromPHPBackend(slug) {
    if (!slug) return;
    const cleanSlug = slug.replace(/^\//, '');
    try {
        const response = await fetch(`admin/products.php?slug=${encodeURIComponent(cleanSlug)}`);
        if (response.ok) {
            const item = await response.json();
            if (item && item.title) {
                const productObj = {
                    title: item.title,
                    subtitle: item.subtitle,
                    image: item.image,
                    description1: item.description1,
                    description2: item.description2,
                    category_slug: item.category_slug,
                    faqs: item.faqs ? (typeof item.faqs === 'string' ? JSON.parse(item.faqs) : item.faqs) : []
                };
                window.pageContent = window.pageContent || {};
                window.pageContent['/' + cleanSlug] = productObj;
                window.pageContent[cleanSlug] = productObj;
                
                const titleElem = document.querySelector('h1');
                if (titleElem && titleElem.textContent !== item.title) {
                    const appRoot = document.getElementById('app-root');
                    if (appRoot) {
                        appRoot.innerHTML = renderProductDetail(item.title, cleanSlug);
                    }
                }
            }
        }
    } catch (e) {
        console.warn("Could not fetch product detail from PHP backend:", e);
    }
}

function renderCategoryDetail(title, slug) {
    let data = window.pageContent && window.pageContent[slug];
    
    if (!data) {
        data = {
            title: title.replace(/-/g, ' ').replace(/\b\w/g, l => l.toUpperCase()),
            subtitle: 'Specialized Category',
            description1: `JK Forge is an industry-leading manufacturer specializing in high-tolerance ${title.replace(/-/g, ' ').replace(/\b\w/g, l => l.toUpperCase())}.`,
            description2: `By utilizing high-grade raw materials—including alloy steel, carbon steel, and aerospace-grade stainless steel—we ensure that every forged part offers exceptional tensile strength, fatigue resistance, and absolute metallurgical integrity.`,
            faqs: []
        };
    }
    
    // Clean descriptions
    let cleanDesc1 = data.description1 || '';
    const quoteIdx = cleanDesc1.indexOf('Get a Quote');
    if (quoteIdx !== -1) {
        cleanDesc1 = cleanDesc1.substring(quoteIdx + 11);
        const jkIdx = cleanDesc1.indexOf('JK Forge');
        if (jkIdx !== -1 && jkIdx < 250) {
            cleanDesc1 = cleanDesc1.substring(jkIdx);
        }
    }
    let cleanDesc2 = data.description2 || '';

    const displayTitle = data.title;
    const subtitle = data.subtitle || 'PRECISION FORGING MANUFACTURING';
    
    // Generic checkmarks
    const checkmarks = [
        "Mill certified alloy steel, carbon steel, stainless steel billets",
        "Closed-die hot forging for dense, defect-free microstructure",
        "Heat treatment (normalizing, hardening, tempering) in-house",
        "Spectroscopy and hardness testing in quality lab",
        "CMM dimensional inspection — 100% batch",
        "Tensile and impact testing available",
        "Material traceability from billet to finished part"
    ];

    // Generic product range cards (derived from keywords or defaults)
    const genericCards = [
        { title: "Custom Forgings", desc: "Engineered forgings from customer drawings. All materials: carbon steel, alloy steel, stainless, duplex." },
        { title: "High-Pressure Components", desc: "Forged components designed to withstand extreme pressure and thermal applications." },
        { title: "Structural Parts", desc: "High yield strength parts optimized for heavy-load bearing and structural integrity." },
        { title: "Precision Machined Parts", desc: "CNC turned and milled forged blanks delivered to strict tolerance requirements." },
        { title: "Shafts & Hubs", desc: "Drive shafts, axle components, and wheel hubs forged with optimal grain flow." },
        { title: "Valves & Fittings", desc: "Valve bodies, flanges, and high-pressure fluid control components." }
    ];

    return `
        <!-- Hero Section -->
        <div class="bg-[#0b1426] text-white pt-32 pb-24 relative overflow-hidden transition-colors duration-300" style="background-image: linear-gradient(rgba(11, 20, 38, 0.95), rgba(11, 20, 38, 0.95)), url('${data.image || './images/page-bg.jpg'}'); background-size: cover; background-position: center; border-bottom: 1px solid rgba(255,255,255,0.05);">
            <!-- Subtle grid overlay -->
            <div class="absolute inset-0 pointer-events-none" style="background-image: linear-gradient(rgba(255,255,255,0.03) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.03) 1px, transparent 1px); background-size: 50px 50px;"></div>
            
            <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
                <!-- Breadcrumbs -->
                <div class="text-gray-400 text-sm mb-8 font-light flex items-center gap-2">
                    <a href="index.html" class="hover:text-white transition-colors">Home</a>
                    <span>/</span>
                    <a href="#" class="hover:text-white transition-colors">Category</a>
                    <span>/</span>
                    <span class="text-white">${displayTitle}</span>
                </div>
                
                <!-- Tagline -->
                <div class="flex items-center gap-4 mb-4">
                    <div class="w-8 h-[2px] bg-[#f97316]"></div>
                    <span class="text-[#f97316] font-mono text-xs font-bold uppercase tracking-widest">${subtitle}</span>
                </div>
                
                <!-- Title & Description -->
                <h1 class="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 tracking-tight leading-tight max-w-4xl">${displayTitle}</h1>
                <p class="text-gray-300 text-lg md:text-xl font-light leading-relaxed max-w-3xl mb-10">${cleanDesc1}</p>
                
                <!-- Buttons -->
                <div class="flex flex-wrap gap-4">
                    <a href="contact.html" class="bg-[#d94f1c] hover:bg-[#c04314] text-white font-bold py-3 px-8 rounded-full transition-all shadow-[0_4px_14px_rgba(217,79,28,0.4)]">Request a Quote</a>
                    <a href="products.html" class="bg-transparent border border-white/20 hover:border-white/50 hover:bg-white/5 text-white font-medium py-3 px-8 rounded-full transition-all">View Products</a>
                </div>
            </div>
        </div>

        <!-- White Grid Section -->
        <section class="py-20 bg-gray-50 relative">
            <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div class="text-center mb-12">
                    <div class="flex items-center justify-center gap-4 mb-4">
                        <div class="w-8 h-[2px] bg-[#f97316]"></div>
                        <span class="text-[#f97316] font-mono text-xs font-bold uppercase tracking-widest">PRODUCT RANGE</span>
                        <div class="w-8 h-[2px] bg-[#f97316]"></div>
                    </div>
                    <h2 class="text-3xl md:text-4xl font-bold text-[#0b1426]">Forged Components</h2>
                    <p class="text-gray-600 mt-4 max-w-2xl mx-auto">${cleanDesc2.substring(0, 150)}...</p>
                </div>
                
                <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                    ${genericCards.map(card => `
                    <div class="bg-white rounded-xl p-8 border border-gray-200 hover:border-[#f97316]/30 hover:shadow-lg transition-all duration-300 group">
                        <h3 class="text-lg font-bold text-[#0b1426] mb-3 group-hover:text-[#f97316] transition-colors">${card.title}</h3>
                        <p class="text-sm text-gray-600 leading-relaxed">${card.desc}</p>
                    </div>
                    `).join('')}
                </div>
            </div>
        </section>

        <!-- Dark Features/Stats Section -->
        <section class="py-24 bg-[#0b1426] text-white relative">
            <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div class="flex items-center gap-4 mb-8">
                    <div class="w-8 h-[2px] bg-[#f97316]"></div>
                    <span class="text-[#f97316] font-mono text-xs font-bold uppercase tracking-widest">WHY SHIVAM FORGE</span>
                </div>
                
                <div class="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
                    <!-- Left: Checkmarks -->
                    <div>
                        <h2 class="text-3xl md:text-5xl font-bold mb-6 leading-tight">High-pressure forging from Rajkot</h2>
                        <p class="text-gray-400 mb-8 leading-relaxed">${cleanDesc2}</p>
                        
                        <ul class="space-y-4 mb-10">
                            ${checkmarks.map(check => `
                            <li class="flex items-start gap-3">
                                <div class="mt-1 w-5 h-5 rounded-full bg-[#d94f1c] flex items-center justify-center flex-shrink-0">
                                    <i class="fas fa-check text-white text-[10px]"></i>
                                </div>
                                <span class="text-gray-300 font-medium text-sm md:text-base">${check}</span>
                            </li>
                            `).join('')}
                        </ul>
                        
                        <div class="flex gap-4">
                            <a href="tel:+917600066117" class="bg-[#d94f1c] hover:bg-[#c04314] text-white font-bold py-3 px-6 rounded-full transition-all shadow-[0_4px_14px_rgba(217,79,28,0.4)]">Call +91 7600066117</a>
                            <a href="mailto:info@jkforge.com" class="bg-transparent border border-white/20 hover:bg-white/10 text-white font-medium py-3 px-6 rounded-full transition-all">Email Us</a>
                        </div>
                    </div>
                    
                    <!-- Right: Stats Grid -->
                    <div class="grid grid-cols-2 gap-4 md:gap-6">
                        <div class="border border-white/10 rounded-xl p-8 bg-white/5 backdrop-blur-sm hover:border-[#f97316]/50 transition-colors group">
                            <div class="text-3xl md:text-4xl font-bold text-[#f97316] mb-2 font-mono">API</div>
                            <div class="text-white font-medium">Forging to Spec</div>
                        </div>
                        <div class="border border-white/10 rounded-xl p-8 bg-white/5 backdrop-blur-sm hover:border-[#f97316]/50 transition-colors group">
                            <div class="text-3xl md:text-4xl font-bold text-[#f97316] mb-2 font-mono">MTC</div>
                            <div class="text-white font-medium">Mill Cert. Steel</div>
                        </div>
                        <div class="border border-white/10 rounded-xl p-8 bg-white/5 backdrop-blur-sm hover:border-[#f97316]/50 transition-colors group">
                            <div class="text-3xl md:text-4xl font-bold text-[#f97316] mb-2 font-mono">100%</div>
                            <div class="text-white font-medium">Batch Inspected</div>
                        </div>
                        <div class="border border-white/10 rounded-xl p-8 bg-white/5 backdrop-blur-sm hover:border-[#f97316]/50 transition-colors group">
                            <div class="text-3xl md:text-4xl font-bold text-[#f97316] mb-2 font-mono">24hr</div>
                            <div class="text-white font-medium">Quote Turnaround</div>
                        </div>
                    </div>
                </div>
            </div>
        </section>

        <!-- White FAQ Section -->
        ${data.faqs && data.faqs.length > 0 ? `
        <section class="py-24 bg-[#f8fafc]">
            <div class="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
                <h2 class="text-3xl md:text-4xl font-bold text-[#0b1426] text-center mb-16">FAQ – ${displayTitle.replace(' Manufacturer in Rajkot', '').replace(' Manufacturer', '')}</h2>
                
                <div class="space-y-0 border-t border-gray-200">
                    ${data.faqs.map(faq => `
                    <details class="group bg-transparent border-b border-gray-200 overflow-hidden cursor-pointer">
                        <summary class="flex justify-between items-center font-bold text-lg list-none py-6 text-[#0b1426] hover:text-[#f97316] transition-colors pr-4">
                            <span>${faq.question}</span>
                            <span class="text-2xl font-light text-gray-400 group-open:rotate-45 transition-transform duration-300 group-open:text-[#f97316]">+</span>
                        </summary>
                        <div class="text-gray-600 pb-8 pt-0 font-light leading-relaxed pr-8">
                            ${faq.answer}
                        </div>
                    </details>
                    `).join('')}
                </div>
            </div>
        </section>
        ` : ''}
    `;
}

