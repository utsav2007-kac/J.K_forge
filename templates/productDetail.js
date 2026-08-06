function renderProductDetail(title, slug) {
    // Check registry for specific page data, otherwise use defaults
    const data = (window.pageContent && window.pageContent[slug]) || {
        title: title.replace(/-/g, ' ').replace(/\b\w/g, l => l.toUpperCase()),
        subtitle: 'Specialized Component',
        description1: `JK Forge is an industry-leading manufacturer specializing in high-tolerance <strong>${title.replace(/-/g, ' ').replace(/\b\w/g, l => l.toUpperCase())}</strong>. Operating from our advanced facility, we leverage automated CNC/VMC machining and precision forging technologies to deliver high-performance components.`,
        description2: `By utilizing high-grade raw materials—including alloy steel, carbon steel, and aerospace-grade stainless steel—we ensure that every forged part offers exceptional tensile strength, fatigue resistance, and absolute metallurgical integrity.`,
        features: [
            { icon: 'fa-shield-alt', title: 'Maximum Durability', desc: 'Engineered to withstand extreme mechanical stress and thermal variance.' },
            { icon: 'fa-drafting-compass', title: 'OEM Specifications', desc: 'Tailored precisely to your blueprints and stringent tolerance requirements.' },
            { icon: 'fa-microscope', title: 'NDT Tested', desc: '100% Non-Destructive Testing for internal flawless integrity.' },
            { icon: 'fa-tachometer-alt', title: 'High Yield Strength', desc: 'Optimized grain flow structure for superior load bearing.' }
        ],
        processes: [
            { title: 'Material Spectrometry', desc: 'Sourcing the highest quality steel verified through laser spectroscopic analysis.' },
            { title: 'Closed-Die Forging', desc: 'Manipulating grain flow along the component contour for maximum impact strength.' },
            { title: 'Heat Treatment', desc: 'In-house normalizing, quenching, and tempering to exact hardness specifications.' },
            { title: 'Precision CNC Machining', desc: 'Final dimensional tuning using 5-axis machining centers.' }
        ]
    };

    const displayTitle = data.title;

    return `
        <!-- Dynamic Page Header -->
        <div class="bg-gray-50 dark:bg-[#050914] text-gray-900 dark:text-white pt-32 pb-16 relative overflow-hidden border-b border-gray-200 dark:border-white/10 transition-colors duration-300">
            <div class="absolute inset-0 opacity-30 bg-cover bg-center mix-blend-overlay filter blur-sm transform scale-105" style="background-image: url('${data.image || './images/page-bg.jpg'}');"></div>
            <div class="absolute inset-0 bg-gradient-to-t from-gray-50 dark:from-[#050914] to-transparent"></div>
            
            <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 gsap-3d-reveal">
                <div class="flex items-center gap-3 mb-6">
                    <span class="w-2 h-2 rounded-full bg-secondary animate-pulse"></span>
                    <span class="text-secondary dark:text-accent font-mono text-xs font-bold uppercase tracking-[0.2em]">${data.subtitle}</span>
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
                                <a href="tel:+919265772827" class="flex items-center text-gray-600 dark:text-gray-400 hover:text-secondary transition-colors mb-3">
                                    <i class="fas fa-phone-alt fa-flip-horizontal w-6"></i> +00 123 456 7890
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
                            <h2 class="text-2xl md:text-3xl font-bold text-gray-900 dark:text-white mb-6 uppercase tracking-wide border-b border-gray-200 dark:border-white/10 pb-4">Engineering Specifications</h2>
                            <p class="mb-6 font-light leading-relaxed">${data.description1}</p>
                            <p class="mb-12 font-light leading-relaxed">${data.description2}</p>
                            
                            <div class="grid grid-cols-1 md:grid-cols-2 gap-4 my-12">
                                ${data.features.map(f => `
                                <div class="bg-gray-50 dark:bg-[#050914] p-6 rounded-xl border border-gray-200 dark:border-white/5 hover:border-secondary/30 transition-colors group gsap-3d-card">
                                    <i class="fas ${f.icon} text-2xl text-secondary mb-3 group-hover:scale-110 transition-transform"></i>
                                    <h4 class="text-gray-900 dark:text-white font-bold mb-2">${f.title}</h4>
                                    <p class="text-sm font-light">${f.desc}</p>
                                </div>`).join('')}
                            </div>
                            
                            <h3 class="text-xl font-bold text-gray-900 dark:text-white mt-16 mb-6 uppercase tracking-wide border-b border-gray-200 dark:border-white/10 pb-4">Manufacturing Workflow</h3>
                            <div class="space-y-4 mt-6">
                                ${data.processes.map((p, i) => `
                                <div class="flex items-start bg-gray-50 dark:bg-[#050914] p-5 rounded-lg border border-gray-200 dark:border-white/5 hover:border-secondary/30 transition-colors gsap-3d-card">
                                    <div class="flex-shrink-0 w-8 h-8 border border-secondary text-secondary rounded flex items-center justify-center font-mono text-sm mr-4 mt-1 bg-secondary/10">0${i + 1}</div>
                                    <div>
                                        <strong class="block text-gray-900 dark:text-white mb-1 font-mono">${p.title}</strong>
                                        <span class="text-sm font-light">${p.desc}</span>
                                    </div>
                                </div>`).join('')}
                            </div>
                            
                            <!-- Inquiry Terminal Inline -->
                            <div class="mt-16 bg-gray-50 dark:bg-[#050914] p-8 rounded-xl border border-gray-200 dark:border-white/10 shadow-[0_0_30px_rgba(0,0,0,0.1)] dark:shadow-[0_0_30px_rgba(0,0,0,0.3)] gsap-3d-reveal">
                                <h3 class="text-xl font-bold text-gray-900 dark:text-white mb-2 uppercase tracking-wide">Request Manufacturing Quote</h3>
                                <p class="text-sm text-gray-600 dark:text-gray-500 mb-6 font-mono">Terminal Active // Enter specifications for ${displayTitle}</p>
                                
                                <form class="space-y-4" onsubmit="event.preventDefault(); alert('Transmission Sent.');">
                                    <div class="grid grid-cols-1 md:grid-cols-2 gap-4">
                                        <div>
                                            <input type="text" class="w-full bg-white dark:bg-[#0a192f] text-gray-900 dark:text-white px-4 py-3 rounded border border-gray-300 dark:border-white/10 focus:border-secondary outline-none font-mono text-sm placeholder-gray-400 dark:placeholder-gray-600" placeholder="Operator Name" required>
                                        </div>
                                        <div>
                                            <input type="email" class="w-full bg-white dark:bg-[#0a192f] text-gray-900 dark:text-white px-4 py-3 rounded border border-gray-300 dark:border-white/10 focus:border-secondary outline-none font-mono text-sm placeholder-gray-400 dark:placeholder-gray-600" placeholder="Return Email" required>
                                        </div>
                                    </div>
                                    <div>
                                        <textarea rows="4" class="w-full bg-white dark:bg-[#0a192f] text-gray-900 dark:text-white px-4 py-3 rounded border border-gray-300 dark:border-white/10 focus:border-secondary outline-none font-mono text-sm placeholder-gray-400 dark:placeholder-gray-600 resize-none" placeholder="Enter drawing details, material grades, or required quantities..."></textarea>
                                    </div>
                                    <button type="submit" class="w-full bg-secondary hover:bg-[#2c5282] text-white font-bold py-4 rounded transition-all font-mono tracking-widest shadow-[0_0_15px_rgba(49,130,206,0.3)] hover:shadow-[0_0_25px_rgba(49,130,206,0.6)]">
                                        TRANSMIT INQUIRY <i class="fas fa-satellite-dish ml-2"></i>
                                    </button>
                                </form>
                            </div>
                            
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
