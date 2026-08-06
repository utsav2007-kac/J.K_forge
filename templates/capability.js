function renderCapabilityPage(title, slug) {
    const displayTitle = title.replace(/-/g, ' ').replace(/\b\w/g, l => l.toUpperCase());
    
    return `
        <!-- Capability Header -->
        <div class="bg-[#050914] text-white pt-40 pb-20 relative overflow-hidden">
            <!-- Factory tech background -->
            <div class="absolute inset-0 opacity-20 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PHBhdGggZD0iTTAgMzBMMzAgMEw2MCAzMEwzMCA2MEwwIDMweiIgZmlsbD0ibm9uZSIgc3Ryb2tlPSJyZ2JhKDI1NSsyNTUsMjU1LDAuMSkiIHN0cm9rZS13aWR0aD0iMSIvPjwvc3ZnPg==')] pointer-events-none"></div>
            
            <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center gsap-3d-reveal">
                <div class="inline-flex items-center justify-center w-16 h-16 rounded-full bg-secondary/20 text-secondary mb-6 shadow-[0_0_20px_rgba(49,130,206,0.3)]">
                    <i class="fas fa-cogs text-2xl"></i>
                </div>
                <h1 class="text-4xl md:text-6xl font-black mb-6 tracking-tight uppercase">${displayTitle}</h1>
                <p class="text-xl text-gray-400 font-light max-w-3xl mx-auto">Advanced manufacturing capabilities designed to meet the rigorous demands of global industrial standards.</p>
            </div>
        </div>

        <!-- Workflow & Process Section -->
        <section class="py-20 bg-white dark:bg-[#0a192f] transition-colors duration-300">
            <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                
                <div class="text-center mb-16 gsap-3d-reveal">
                    <h2 class="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white uppercase tracking-wide">Infrastructure & Process</h2>
                    <div class="w-24 h-1 bg-secondary mx-auto mt-6"></div>
                </div>

                <div class="grid grid-cols-1 md:grid-cols-3 gap-8">
                    <!-- Process Step 1 -->
                    <div class="bg-gray-50 dark:bg-[#050914] rounded-2xl p-8 border border-gray-200 dark:border-white/5 hover:-translate-y-2 hover:shadow-2xl transition-all duration-300 group gsap-3d-card">
                        <div class="w-12 h-12 bg-white dark:bg-[#1b365d] rounded flex items-center justify-center text-secondary text-xl font-bold font-mono mb-6 shadow-sm">01</div>
                        <h4 class="text-xl font-bold text-gray-900 dark:text-white mb-4 uppercase tracking-wide">Capacity & Setup</h4>
                        <p class="text-gray-600 dark:text-gray-400 font-light leading-relaxed">State-of-the-art infrastructure featuring high-tonnage forging presses, automated induction heaters, and heavy-duty drop hammers.</p>
                    </div>
                    
                    <!-- Process Step 2 -->
                    <div class="bg-gray-50 dark:bg-[#050914] rounded-2xl p-8 border border-gray-200 dark:border-white/5 hover:-translate-y-2 hover:shadow-2xl transition-all duration-300 group gsap-3d-card" style="transition-delay: 100ms">
                        <div class="w-12 h-12 bg-white dark:bg-[#1b365d] rounded flex items-center justify-center text-secondary text-xl font-bold font-mono mb-6 shadow-sm">02</div>
                        <h4 class="text-xl font-bold text-gray-900 dark:text-white mb-4 uppercase tracking-wide">Precision Execution</h4>
                        <p class="text-gray-600 dark:text-gray-400 font-light leading-relaxed">Rigorous adherence to metallurgical protocols, maintaining optimal forging temperatures to ensure superior grain flow structure.</p>
                    </div>
                    
                    <!-- Process Step 3 -->
                    <div class="bg-gray-50 dark:bg-[#050914] rounded-2xl p-8 border border-gray-200 dark:border-white/5 hover:-translate-y-2 hover:shadow-2xl transition-all duration-300 group gsap-3d-card" style="transition-delay: 200ms">
                        <div class="w-12 h-12 bg-white dark:bg-[#1b365d] rounded flex items-center justify-center text-secondary text-xl font-bold font-mono mb-6 shadow-sm">03</div>
                        <h4 class="text-xl font-bold text-gray-900 dark:text-white mb-4 uppercase tracking-wide">Quality Assurance</h4>
                        <p class="text-gray-600 dark:text-gray-400 font-light leading-relaxed">Comprehensive testing including Magnaflux, Ultrasonic, and Spectrometric analysis to guarantee zero internal defects.</p>
                    </div>
                </div>
                
                <!-- ISO Certification Banner -->
                <div class="mt-20 bg-gray-900 text-white rounded-2xl p-10 flex flex-col md:flex-row items-center justify-between overflow-hidden relative gsap-heavy-drop">
                    <div class="absolute inset-0 bg-secondary/10"></div>
                    <div class="relative z-10 flex items-center mb-6 md:mb-0">
                        <i class="fas fa-certificate text-secondary text-5xl mr-6"></i>
                        <div>
                            <h4 class="text-2xl font-bold uppercase tracking-wide">Global Standards Compliant</h4>
                            <p class="text-gray-400 font-light mt-1">ISO 9001:2015 Certified Manufacturing Facility</p>
                        </div>
                    </div>
                    <div class="relative z-10">
                        <a href="?page=contact" class="inline-block bg-secondary hover:bg-white hover:text-secondary text-white px-6 py-3 rounded font-bold uppercase tracking-wide transition-colors">
                            Audit Our Facility
                        </a>
                    </div>
                </div>
                
            </div>
        </section>
    `;
}
