/**
 * Shivam Forge Reference Design - Category Detail Template
 * Supports structured sub-heading data with "nav sub-heading", "links", and "main-info cards".
 * Renders Components, Capabilities, Industry, and Location detail pages.
 */

function getPageDataBySlug(slug, title) {
    if (!slug) slug = '';
    const cleanSlug = slug.startsWith('/') ? slug.substring(1) : slug;
    
    let pageData = null;

    function searchInObj(obj) {
        if (!obj) return null;
        
        // Direct key lookup
        if (obj[cleanSlug]) return obj[cleanSlug];
        if (obj['/' + cleanSlug]) return obj['/' + cleanSlug];

        // Search inside sub-headings structure with "links"
        for (const key in obj) {
            const group = obj[key];
            if (group && Array.isArray(group.links)) {
                const found = group.links.find(link => 
                    link.slug === cleanSlug || 
                    link.slug === '/' + cleanSlug || 
                    link.url === cleanSlug ||
                    link.url === 'components.html?page=' + cleanSlug ||
                    link.url === 'industry.html?page=' + cleanSlug ||
                    link.url === 'capabilities.html?page=' + cleanSlug ||
                    link.url === 'location.html?page=' + cleanSlug
                );
                if (found) return found;
            }
        }
        return null;
    }

    if (window.pageContent) {
        pageData = searchInObj(window.pageContent) ||
                   searchInObj(window.pageContent['componentsData']) ||
                   searchInObj(window.pageContent['capabilitiesData']) ||
                   searchInObj(window.pageContent['mobilityData']) ||
                   searchInObj(window.pageContent['industriesOtherData']) ||
                   searchInObj(window.pageContent['locationsData']);
    }

    const formattedTitle = title ? title.replace(/-/g, ' ').replace(/\b\w/g, l => l.toUpperCase()) : 'Forged Solutions';

    if (!pageData) {
        pageData = {
            title: formattedTitle,
            subtitle: 'Precision Forging Solutions',
            'main-info cards': [
                { title: "2000+", sub: "Sq. Meter Manufacturing Facility" },
                { title: "50+", sub: "Skilled Workforce" },
                { title: "100%", sub: "Quality Inspection" },
                { title: "24hr", sub: "Fast Quote Response" }
            ],
            description1: `JK Forge is a leading forging manufacturer in India specializing in precision forged components for passenger vehicles, commercial vehicles, agricultural machinery, and industrial applications. We manufacture high-strength forged parts engineered for durability, safety, and long service life.`,
            description2: `Our integrated manufacturing facility combines forging, heat treatment, machining, and inspection capabilities under one roof. This enables us to maintain strict quality standards while reducing production lead times and ensuring consistent product quality.`,
            faqs: []
        };
    }

    return pageData;
}

function cleanTextContent(text) {
    if (!text) return '';
    let clean = text;
    const quoteIdx = clean.indexOf('Get a Quote');
    if (quoteIdx !== -1) {
        clean = clean.substring(quoteIdx + 11);
        const jkIdx = clean.indexOf('JK Forge');
        if (jkIdx !== -1 && jkIdx < 250) clean = clean.substring(jkIdx);
    }
    return clean.trim();
}

function renderCategoryDetail(title, slug) {
    const data = getPageDataBySlug(slug, title);
    const displayTitle = data.title || (title ? title.replace(/-/g, ' ').replace(/\b\w/g, l => l.toUpperCase()) : 'Forged Component');
    const subtitle = (data.subtitle || 'FORGING & MANUFACTURING SOLUTIONS').toUpperCase();
    const desc1 = cleanTextContent(data.description1 || '');
    const desc2 = cleanTextContent(data.description2 || '');

    // Extract main-info cards or stats
    const stats = data['main-info cards'] || data.mainInfoCards || data.stats || [
        { title: "2000+", sub: "Sq. Meter Manufacturing Facility" },
        { title: "50+", sub: "Skilled Workforce" },
        { title: "100%", sub: "Quality Inspection" },
        { title: "24hr", sub: "Fast Quote Response" }
    ];

    const componentsList = data.components || [
        { title: "Wheel Hubs", desc: "Precision forged wheel hubs designed for superior load carrying capacity and long-term durability." },
        { title: "Axle Shafts", desc: "High-strength forged axle shafts engineered for maximum torque transmission and fatigue resistance." },
        { title: "Steering Knuckles", desc: "Safety-critical forged steering components manufactured with strict dimensional accuracy." },
        { title: "Gear Blanks", desc: "Near-net forged gear blanks reducing machining time and material waste." },
        { title: "Yokes & Couplings", desc: "Forged transmission and drivetrain components designed for demanding applications." },
        { title: "Suspension Components", desc: "Reliable forged suspension parts for passenger and commercial vehicles." }
    ];

    const materialsList = data.materials || [
        { name: "EN8 / C45 Steel", desc: "Widely used for automotive components requiring strength, toughness and machinability." },
        { name: "EN19 / 42CrMo4", desc: "Premium alloy steel suitable for shafts, transmission parts and high-stress applications." },
        { name: "EN24", desc: "High-performance alloy steel used in heavy-duty automotive and industrial applications." },
        { name: "20MnCr5", desc: "Case-hardening steel commonly used for gears and wear-resistant components." },
        { name: "SAE 4140", desc: "Alloy steel known for excellent strength and fatigue resistance." },
        { name: "Custom Material Grades", desc: "Manufacturing according to customer specifications and engineering requirements." }
    ];

    const whyChooseList = data.whyChoose || [
        { title: "Advanced Manufacturing Infrastructure", desc: "Modern forging and machining facilities equipped for precision component production." },
        { title: "Strict Quality Control", desc: "Comprehensive inspection processes ensure consistency, reliability and compliance." },
        { title: "OEM Development Support", desc: "Custom forging solutions developed according to customer drawings and specifications." },
        { title: "In-House Machining", desc: "Complete machining capabilities including CNC and VMC operations." },
        { title: "Heat Treatment Facilities", desc: "Controlled heat treatment processes for enhanced mechanical properties." },
        { title: "Reliable Delivery", desc: "Efficient production planning and supply chain management for on-time delivery." }
    ];

    const faqsList = (data.faqs && data.faqs.length > 0) ? data.faqs : [
        { question: `What ${displayTitle.toLowerCase()} components does JK Forge manufacture?`, answer: `JK Forge manufactures precision forged components including shafts, hubs, gears, flanges, and custom OEM forgings engineered to strict tolerances.` },
        { question: "Why are forged components preferred for high-stress applications?", answer: "Forging aligns the grain flow along the contour of the component, resulting in superior impact resistance, higher fatigue strength, and zero internal porosity compared to casting or bar machining." },
        { question: "Do you manufacture custom forged components from customer drawings?", answer: "Yes, 100% of our production is customized. We review your 2D drawings or 3D STEP/IGES models, provide DFM feedback, and produce first-article samples before mass production." },
        { question: "What materials are available for forging?", answer: "We forge carbon steels (C45, A105, EN8), alloy steels (EN19, 42CrMo4, EN24, 8620, 20MnCr5, 4140), stainless steel (304, 316, 410, F316L), and specialized high-temperature grades." },
        { question: "Do you provide CNC machining and heat treatment services?", answer: "Yes, we offer complete end-to-end manufacturing under one roof including normalizing, hardening, tempering, induction hardening, and 5-axis CNC/VMC precision machining." },
        { question: "How fast can I get a quotation for my forging requirement?", answer: "Our engineering sales team provides detailed technical and commercial quotations within 24 hours of receiving your drawing and quantity specifications." }
    ];

    return `
        <!-- 1. Hero Header Section -->
        <div class="bg-[#0b1426] dark:bg-[#050914] text-white pt-32 pb-24 relative overflow-hidden transition-colors duration-300">
            <div class="absolute inset-0 opacity-10 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMjAiIGhlaWdodD0iMjAiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PGNpcmNsZSBjeD0iMiIgY3k9IjIiIHI9IjEiIGZpbGw9InJnYmEoMjU1LDI1NSwyNTUsMC4yKSIvPjwvc3ZnPg==')]"></div>
            <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
                <div class="flex items-center gap-3 mb-6">
                    <div class="w-8 h-[2px] bg-[#f97316]"></div>
                    <span class="text-[#f97316] font-mono text-xs font-bold uppercase tracking-widest">${subtitle}</span>
                </div>
                <h1 class="text-4xl md:text-5xl lg:text-6xl font-black mb-6 tracking-tight leading-tight max-w-4xl text-white">${displayTitle}</h1>
                <p class="text-gray-300 text-lg md:text-xl font-light leading-relaxed max-w-3xl mb-10">${desc1}</p>
                <div class="flex flex-wrap gap-4">
                    <a href="contact.html" class="bg-[#d94f1c] hover:bg-[#c04314] text-white font-bold py-3.5 px-8 rounded-lg transition-all shadow-[0_4px_14px_rgba(217,79,28,0.4)] flex items-center gap-2">
                        Request Quote <i class="fas fa-arrow-right text-xs"></i>
                    </a>
                    <a href="products.html" class="bg-transparent border border-white/20 hover:border-white/50 hover:bg-white/5 text-white font-medium py-3.5 px-8 rounded-lg transition-all">
                        View Products
                    </a>
                </div>
            </div>
        </div>

        <!-- 2. Key Info Cards Grid (4 Stat Cards from main-info cards) -->
        <div class="bg-white dark:bg-[#0a192f] py-8 border-b border-gray-200 dark:border-white/5">
            <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div class="grid grid-cols-2 lg:grid-cols-4 gap-6 -mt-16 relative z-20">
                    ${stats.map(s => `
                        <div class="bg-[#0c2b5e] border border-white/10 p-6 rounded-2xl shadow-xl hover:border-secondary/50 transition-all">
                            <div class="text-3xl md:text-4xl font-black text-[#f97316] mb-2 font-mono">${s.title || s.value}</div>
                            <div class="text-xs text-gray-300 font-medium leading-snug uppercase tracking-wider font-mono">${s.sub || s.label}</div>
                        </div>
                    `).join('')}
                </div>
            </div>
        </div>

        <!-- 3. Centered Intro / Sub-Heading Section -->
        <section class="py-16 bg-white dark:bg-[#0a192f] transition-colors duration-300">
            <div class="max-w-4xl mx-auto px-4 text-center">
                <h2 class="text-3xl md:text-4xl font-extrabold text-gray-900 dark:text-white mb-6 tracking-wide">Precision ${displayTitle}</h2>
                <p class="text-gray-600 dark:text-gray-400 text-lg leading-relaxed font-light">${desc2 || desc1}</p>
            </div>
        </section>

        <!-- 4. Components We Manufacture Grid -->
        <section class="py-20 bg-gray-50 dark:bg-[#050914] border-t border-b border-gray-200 dark:border-white/5 transition-colors duration-300">
            <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <h2 class="text-3xl md:text-4xl font-extrabold text-gray-900 dark:text-white mb-12 tracking-wide">Components We Manufacture</h2>
                <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                    ${componentsList.map(comp => `
                        <div class="bg-white dark:bg-[#0a192f] p-8 rounded-2xl border border-gray-200 dark:border-white/10 hover:border-secondary transition-all shadow-sm hover:shadow-md group">
                            <h3 class="text-lg font-bold text-gray-900 dark:text-white mb-3 group-hover:text-secondary transition-colors">${comp.title}</h3>
                            <p class="text-sm text-gray-600 dark:text-gray-400 font-light leading-relaxed">${comp.desc}</p>
                        </div>
                    `).join('')}
                </div>
            </div>
        </section>

        <!-- 5. Materials Used Section (Dark Navy Background) -->
        <section class="py-20 bg-[#0c2b5e] text-white">
            <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <h2 class="text-3xl md:text-4xl font-extrabold mb-12 tracking-wide text-white">Materials Used For ${displayTitle}</h2>
                <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                    ${materialsList.map(mat => `
                        <div class="bg-white text-gray-900 p-8 rounded-2xl shadow-lg border border-gray-100">
                            <h3 class="text-lg font-bold mb-2 text-[#0c2b5e] font-mono">${mat.name}</h3>
                            <p class="text-xs text-gray-600 leading-relaxed font-light">${mat.desc}</p>
                        </div>
                    `).join('')}
                </div>
            </div>
        </section>

        <!-- 6. Why Choose Us Section -->
        <section class="py-20 bg-gray-50 dark:bg-[#050914] transition-colors duration-300">
            <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <h2 class="text-3xl md:text-4xl font-extrabold text-gray-900 dark:text-white mb-12 tracking-wide">Why Choose JK Forge</h2>
                <div class="grid grid-cols-1 md:grid-cols-3 gap-6">
                    ${whyChooseList.map(item => `
                        <div class="bg-white dark:bg-[#0a192f] p-8 rounded-2xl border border-gray-200 dark:border-white/10">
                            <h3 class="text-base font-bold text-gray-900 dark:text-white mb-2">${item.title}</h3>
                            <p class="text-xs text-gray-600 dark:text-gray-400 leading-relaxed font-light">${item.desc}</p>
                        </div>
                    `).join('')}
                </div>
            </div>
        </section>

        <!-- 7. Detailed Technical Application Paragraphs -->
        <section class="py-20 bg-white dark:bg-[#0a192f] transition-colors duration-300">
            <div class="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
                <h2 class="text-3xl md:text-4xl font-extrabold text-gray-900 dark:text-white mb-8 tracking-wide">Engineering Specifications</h2>
                <div class="prose prose-lg text-gray-600 dark:text-gray-300 max-w-none space-y-6 font-light leading-relaxed">
                    <p>${desc1}</p>
                    ${desc2 ? `<p>${desc2}</p>` : ''}
                </div>
            </div>
        </section>

        <!-- 8. Frequently Asked Questions Section (Accordions) -->
        <section class="py-20 bg-gray-50 dark:bg-[#050914] border-t border-b border-gray-200 dark:border-white/5 transition-colors duration-300">
            <div class="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
                <h2 class="text-3xl md:text-4xl font-extrabold text-gray-900 dark:text-white text-center mb-12 tracking-wide">Frequently Asked Questions</h2>
                <div class="space-y-4">
                    ${faqsList.map((faq, idx) => `
                        <details class="group bg-white dark:bg-[#0a192f] border border-gray-200 dark:border-white/10 rounded-xl p-6 [&_summary::-webkit-details-marker]:hidden cursor-pointer shadow-sm">
                            <summary class="flex items-center justify-between font-bold text-gray-900 dark:text-white text-base">
                                <span><i class="fas fa-caret-right text-[#f97316] mr-3 group-open:rotate-90 transition-transform"></i> ${faq.question}</span>
                            </summary>
                            <p class="mt-4 text-sm text-gray-600 dark:text-gray-300 font-light leading-relaxed pl-7 border-t border-gray-100 dark:border-white/5 pt-4">
                                ${faq.answer}
                            </p>
                        </details>
                    `).join('')}
                </div>

                <!-- 9. Related Services Tags -->
                <div class="mt-16 pt-8 border-t border-gray-200 dark:border-white/10">
                    <div class="text-xs font-mono text-gray-500 dark:text-gray-400 uppercase tracking-widest mb-4">Related Forging Services</div>
                    <div class="flex flex-wrap gap-2">
                        ${[
                            "Tier 1 Automotive Forging Supplier India",
                            "Forging Manufacturer Supplying North America & Europe",
                            "High Precision Forging India",
                            "Forging Manufacturer Rajkot Shapar",
                            "ISO 9001:2015 Certified Forging Plant",
                            "Custom OEM Forging Cost Comparison"
                        ].map(tag => `
                            <span class="px-3.5 py-1.5 rounded-full text-xs font-mono bg-white dark:bg-[#0a192f] text-gray-600 dark:text-gray-400 border border-gray-200 dark:border-white/10 hover:border-secondary transition-colors cursor-pointer">${tag}</span>
                        `).join('')}
                    </div>
                </div>
            </div>
        </section>

        <!-- 10. Bottom Quote & Contact Card Section -->
        <section class="py-20 bg-[#0c2b5e] text-white">
            <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div class="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
                    <div class="lg:col-span-7">
                        <div class="text-[#f97316] font-mono text-xs font-bold uppercase tracking-widest mb-3">WHY CHOOSE JK FORGE</div>
                        <h2 class="text-3xl md:text-4xl font-extrabold mb-6 tracking-wide text-white">Trusted Forging Manufacturer — Rajkot, Gujarat</h2>
                        <p class="text-gray-300 text-base font-light leading-relaxed mb-8">
                            JK Forge delivers precision hot-forged components from our integrated Shapar, Rajkot facility — covering forging, CNC machining, heat treatment, and quality inspection under one roof.
                        </p>
                        <div class="space-y-3">
                            <div class="flex items-center gap-3 text-sm font-light text-gray-200">
                                <i class="fas fa-check-circle text-[#f97316]"></i> Hot forging from quality alloy steel billets (42CrMo4, C45, EN8, SS316L)
                            </div>
                            <div class="flex items-center gap-3 text-sm font-light text-gray-200">
                                <i class="fas fa-check-circle text-[#f97316]"></i> In-house CNC/VMC machining to drawing — ±0.05mm tolerances
                            </div>
                            <div class="flex items-center gap-3 text-sm font-light text-gray-200">
                                <i class="fas fa-check-circle text-[#f97316]"></i> Heat treatment — normalizing, hardening, tempering, annealing
                            </div>
                            <div class="flex items-center gap-3 text-sm font-light text-gray-200">
                                <i class="fas fa-check-circle text-[#f97316]"></i> CMM inspection & full EN 10204 3.1 material certification
                            </div>
                            <div class="flex items-center gap-3 text-sm font-light text-gray-200">
                                <i class="fas fa-check-circle text-[#f97316]"></i> Fast export from Mundra Port — CIF Worldwide, FOB India
                            </div>
                        </div>
                    </div>

                    <div class="lg:col-span-5 bg-[#050914] p-8 rounded-2xl border border-white/10 shadow-2xl">
                        <h3 class="text-xl font-bold mb-6 font-mono tracking-wide text-white">REQUEST A QUOTE</h3>
                        <div class="space-y-6 mb-8">
                            <div class="flex items-start gap-4">
                                <i class="fas fa-phone-alt text-[#f97316] text-lg mt-1"></i>
                                <div>
                                    <div class="text-xs text-gray-400 font-mono uppercase">Call / WhatsApp</div>
                                    <a href="tel:+917600066117" class="text-white font-bold hover:text-[#f97316] transition-colors">+91 7600066117</a>
                                </div>
                            </div>
                            <div class="flex items-start gap-4">
                                <i class="fas fa-envelope text-[#f97316] text-lg mt-1"></i>
                                <div>
                                    <div class="text-xs text-gray-400 font-mono uppercase">Email Inquiry</div>
                                    <a href="mailto:info@jkforgeindia.com" class="text-white font-bold hover:text-[#f97316] transition-colors">info@jkforgeindia.com</a>
                                </div>
                            </div>
                            <div class="flex items-start gap-4">
                                <i class="fas fa-map-marker-alt text-[#f97316] text-lg mt-1"></i>
                                <div>
                                    <div class="text-xs text-gray-400 font-mono uppercase">Factory Address</div>
                                    <p class="text-xs text-gray-300 font-light">Plot No: 11, Chaitanya Industrial Area, Ganga Gate, Shapar (Veraval), Rajkot, Gujarat</p>
                                </div>
                            </div>
                        </div>
                        <a href="contact.html" class="block w-full text-center bg-[#d94f1c] hover:bg-[#c04314] text-white font-bold py-4 rounded-xl transition-all shadow-[0_4px_14px_rgba(217,79,28,0.4)]">
                            Send Inquiry <i class="fas fa-paper-plane ml-2"></i>
                        </a>
                    </div>
                </div>
            </div>
        </section>
    `;
}
