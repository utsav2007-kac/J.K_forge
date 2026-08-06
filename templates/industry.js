function renderIndustryPage(title, slug) {
    const displayTitle = title.replace(/-/g, ' ').replace(/\b\w/g, l => l.toUpperCase());
    
    return `
        <!-- Industry Header -->
        <div class="bg-[#050914] text-white pt-40 pb-24 relative overflow-hidden">
            <div class="absolute inset-0 opacity-40 mix-blend-luminosity bg-cover bg-center transform scale-105" style="background-image: url('./images/hero-bg.jpg'); filter: grayscale(100%) sepia(20%) hue-rotate(180deg);"></div>
            <div class="absolute inset-0 bg-gradient-to-t from-[#050914] via-[#050914]/80 to-transparent"></div>
            
            <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center gsap-3d-reveal">
                <div class="inline-flex items-center gap-3 mb-6 px-4 py-2 border border-secondary/30 rounded-full bg-secondary/10 backdrop-blur-sm">
                    <i class="fas fa-industry text-secondary text-sm"></i>
                    <span class="text-secondary font-mono text-xs font-bold uppercase tracking-[0.2em]">Industry Application</span>
                </div>
                <h1 class="text-5xl md:text-7xl font-black mb-6 tracking-tight uppercase drop-shadow-[0_0_15px_rgba(49,130,206,0.3)]">${displayTitle}</h1>
                <p class="text-xl text-gray-400 font-light max-w-3xl mx-auto">Providing mission-critical forged components engineered for maximum reliability in extreme operational environments.</p>
            </div>
        </div>

        <!-- Heavy Machinery & Application Section -->
        <section class="py-20 bg-white dark:bg-[#0a192f] relative transition-colors duration-300">
            <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div class="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
                    <div class="gsap-3d-reveal">
                        <h2 class="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-6 uppercase tracking-wide border-l-4 border-secondary pl-4">Operational Scale</h2>
                        <p class="text-lg text-gray-600 dark:text-gray-400 leading-relaxed mb-6">The ${displayTitle} sector demands absolute precision and zero-failure tolerance. JK Forge supports this industry by manufacturing heavy-duty components capable of withstanding immense mechanical stress, thermal shock, and continuous wear.</p>
                        <p class="text-lg text-gray-600 dark:text-gray-400 leading-relaxed mb-8">Our ISO-certified manufacturing facilities utilize closed-die and open-die forging techniques to produce high-integrity structural parts, ensuring your machinery operates at peak efficiency.</p>
                        
                        <div class="grid grid-cols-2 gap-6">
                            <div class="bg-gray-50 dark:bg-[#050914] p-6 rounded-xl border border-gray-200 dark:border-white/5 shadow-sm">
                                <div class="text-secondary text-3xl font-black mb-2 font-mono">100%</div>
                                <div class="text-sm text-gray-900 dark:text-white font-bold uppercase tracking-widest">Traceability</div>
                            </div>
                            <div class="bg-gray-50 dark:bg-[#050914] p-6 rounded-xl border border-gray-200 dark:border-white/5 shadow-sm">
                                <div class="text-secondary text-3xl font-black mb-2 font-mono">0%</div>
                                <div class="text-sm text-gray-900 dark:text-white font-bold uppercase tracking-widest">Tolerance for Error</div>
                            </div>
                        </div>
                    </div>
                    
                    <div class="relative gsap-heavy-drop">
                        <div class="aspect-w-4 aspect-h-3 rounded-2xl overflow-hidden shadow-2xl relative">
                            <img src="./images/page-bg.jpg" alt="${displayTitle} Application" class="w-full h-full object-cover">
                            <div class="absolute inset-0 bg-secondary/20 mix-blend-multiply"></div>
                            
                            <!-- Tactical Overlay Elements -->
                            <div class="absolute top-4 left-4 w-12 h-12 border-t-2 border-l-2 border-white/50"></div>
                            <div class="absolute bottom-4 right-4 w-12 h-12 border-b-2 border-r-2 border-white/50"></div>
                            <div class="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMjAiIGhlaWdodD0iMjAiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PGNpcmNsZSBjeD0iMiIgY3k9IjIiIHI9IjEiIGZpbGw9InJnYmEoMjU1LDI1NSwyNTUsMC4xKSIvPjwvc3ZnPg==')] pointer-events-none"></div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
        
        <!-- Application Capabilities Banner -->
        <section class="py-16 bg-secondary text-white relative overflow-hidden">
            <div class="absolute inset-0 opacity-10 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMjAiIGhlaWdodD0iMjAiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PGNpcmNsZSBjeD0iMiIgY3k9IjIiIHI9IjEiIGZpbGw9InJnYmEoMjU1LDI1NSwyNTUsMC41KSIvPjwvc3ZnPg==')]"></div>
            <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
                <div class="text-center mb-12 gsap-3d-reveal">
                    <h3 class="text-3xl font-bold uppercase tracking-wide">Ready for Deployment</h3>
                    <p class="mt-4 font-light max-w-2xl mx-auto text-blue-100">Partner with us for rapid prototyping and high-volume production runs.</p>
                </div>
                <div class="flex justify-center gsap-3d-reveal" style="transition-delay: 200ms">
                    <a href="?page=contact" class="bg-white text-secondary hover:bg-gray-100 px-8 py-4 rounded font-bold uppercase tracking-widest transition-all shadow-[0_0_20px_rgba(255,255,255,0.3)] hover:-translate-y-1">
                        Request Procurement Details
                    </a>
                </div>
            </div>
        </section>
    `;
}
