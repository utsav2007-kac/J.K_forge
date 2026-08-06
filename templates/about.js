function renderAbout() {
    return `
        <!-- Page Header -->
        <div class="bg-gray-50 dark:bg-[#050914] text-gray-900 dark:text-white pt-32 pb-20 relative overflow-hidden border-b border-gray-200 dark:border-white/5 transition-colors duration-300">
            <div class="absolute inset-0 opacity-20" style="background-image: radial-gradient(circle at 50% 0%, #1b365d 0%, transparent 70%);"></div>
            <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center reveal active">
                <div class="inline-block mb-6 px-4 py-1 rounded-full border border-secondary/30 bg-white dark:bg-[#0a192f] text-secondary dark:text-accent font-mono text-xs tracking-[0.2em] uppercase">
                    Corporate Profile
                </div>
                <h1 class="text-5xl md:text-7xl font-black mb-6 tracking-tighter">ABOUT <span class="text-transparent bg-clip-text bg-gradient-to-r from-secondary to-primary dark:from-secondary dark:to-accent">JK FORGE</span></h1>
                <p class="text-xl text-gray-600 dark:text-gray-400 max-w-2xl mx-auto font-light">A legacy of precision, built on trust, engineering excellence, and molecular integrity.</p>
            </div>
        </div>

        <!-- Content Section -->
        <section class="py-24 bg-white dark:bg-[#0a192f] transition-colors duration-300">
            <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div class="grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
                    <div class="gsap-3d-reveal">
                        <div class="flex items-center gap-4 mb-6">
                            <div class="w-12 h-1 bg-secondary"></div>
                            <h2 class="text-3xl font-bold text-gray-900 dark:text-white tracking-wide">OUR STORY</h2>
                        </div>
                        <p class="text-gray-600 dark:text-gray-400 mb-6 leading-relaxed text-lg font-light">
                            JK Forge was established with a vision to deliver world-class forging and casting solutions. Located in the industrial hub of Rajkot, Gujarat, we have grown into a premier manufacturing facility serving global industries.
                        </p>
                        <p class="text-gray-600 dark:text-gray-400 mb-10 leading-relaxed text-lg font-light">
                            Our commitment to quality, timely delivery, and continuous technological advancement has made us the preferred partner for automotive, agricultural, and heavy industrial sectors worldwide.
                        </p>
                        
                        <div class="grid grid-cols-2 gap-8">
                            <div class="border-l-2 border-secondary/50 pl-6">
                                <div class="text-4xl font-black text-gray-900 dark:text-white mb-2">2019</div>
                                <div class="text-xs text-secondary dark:text-accent font-mono uppercase tracking-widest">Established</div>
                            </div>
                            <div class="border-l-2 border-secondary/50 pl-6">
                                <div class="text-4xl font-black text-gray-900 dark:text-white mb-2">ISO 9001</div>
                                <div class="text-xs text-secondary dark:text-accent font-mono uppercase tracking-widest">Certified Quality</div>
                            </div>
                        </div>
                    </div>
                    
                    <div class="relative gsap-heavy-drop" style="transition-delay: 200ms">
                        <div class="absolute inset-0 bg-gradient-to-tr from-secondary to-primary dark:to-accent rounded-2xl transform translate-x-4 translate-y-4 opacity-30"></div>
                        <div class="absolute inset-0 bg-gray-100 dark:bg-[#050914] rounded-2xl border border-gray-200 dark:border-white/10 z-0"></div>
                        <img src="./images/facility.jpg" alt="JK Forge Facility" class="relative z-10 rounded-2xl shadow-[0_20px_50px_rgba(0,0,0,0.5)] w-full h-auto object-cover opacity-90 mix-blend-luminosity hover:mix-blend-normal transition-all duration-700 cursor-pointer">
                    </div>
                </div>
            </div>
        </section>
        
        <!-- Core Values -->
        <section class="py-24 bg-gray-50 dark:bg-[#050914] border-t border-gray-200 dark:border-white/5 relative overflow-hidden transition-colors duration-300">
            <div class="absolute inset-0 opacity-10 dark:opacity-100 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMjAiIGhlaWdodD0iMjAiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PGNpcmNsZSBjeD0iMiIgY3k9IjIiIHI9IjEiIGZpbGw9InJnYmEoMjU1LDI1NSwyNTUsMC4wNSkiLz48L3N2Zz4=')]"></div>
            <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
                <div class="text-center mb-16 gsap-3d-reveal">
                    <h2 class="text-4xl font-black text-gray-900 dark:text-white tracking-widest uppercase">Operational Protocols</h2>
                </div>
                <div class="grid grid-cols-1 md:grid-cols-3 gap-8" style="perspective: 1500px;">
                    <div class="bg-white dark:bg-[#0a192f] p-10 rounded-xl border border-gray-200 dark:border-white/10 hover:border-secondary/50 transition-all hover:-translate-y-2 gsap-3d-card group relative overflow-hidden">
                        <div class="absolute top-0 right-0 p-6 opacity-5 group-hover:opacity-10 transition-opacity text-8xl text-secondary"><i class="fas fa-gem"></i></div>
                        <div class="text-secondary text-4xl mb-6 group-hover:scale-110 transition-transform origin-left"><i class="fas fa-gem"></i></div>
                        <h3 class="text-xl font-bold text-gray-900 dark:text-white mb-4">Uncompromising Quality</h3>
                        <p class="text-gray-600 dark:text-gray-400 font-light leading-relaxed">Every component is subjected to rigorous metrological testing to ensure absolute precision and metallurgical integrity.</p>
                    </div>
                    <div class="bg-white dark:bg-[#0a192f] p-10 rounded-xl border border-gray-200 dark:border-white/10 hover:border-secondary/50 transition-all hover:-translate-y-2 gsap-3d-card group relative overflow-hidden" style="transition-delay: 100ms">
                        <div class="absolute top-0 right-0 p-6 opacity-5 group-hover:opacity-10 transition-opacity text-8xl text-secondary"><i class="fas fa-microchip"></i></div>
                        <div class="text-secondary text-4xl mb-6 group-hover:scale-110 transition-transform origin-left"><i class="fas fa-microchip"></i></div>
                        <h3 class="text-xl font-bold text-gray-900 dark:text-white mb-4">Engineering Innovation</h3>
                        <p class="text-gray-600 dark:text-gray-400 font-light leading-relaxed">We constantly upgrade our CNC/VMC infrastructure and automated forging lines to stay ahead of industry demands.</p>
                    </div>
                    <div class="bg-white dark:bg-[#0a192f] p-10 rounded-xl border border-gray-200 dark:border-white/10 hover:border-secondary/50 transition-all hover:-translate-y-2 gsap-3d-card group relative overflow-hidden" style="transition-delay: 200ms">
                        <div class="absolute top-0 right-0 p-6 opacity-5 group-hover:opacity-10 transition-opacity text-8xl text-secondary"><i class="fas fa-handshake"></i></div>
                        <div class="text-secondary text-4xl mb-6 group-hover:scale-110 transition-transform origin-left"><i class="fas fa-handshake"></i></div>
                        <h3 class="text-xl font-bold text-gray-900 dark:text-white mb-4">Strategic Partnership</h3>
                        <p class="text-gray-600 dark:text-gray-400 font-light leading-relaxed">We don't just supply parts; we integrate with your supply chain to build long-term relationships based on reliability.</p>
                    </div>
                </div>
            </div>
        </section>
    `;
}
