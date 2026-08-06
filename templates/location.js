function renderLocationPage(title, slug) {
    const displayTitle = title.replace(/-/g, ' ').replace(/\b\w/g, l => l.toUpperCase());
    
    return `
        <!-- Location Header -->
        <div class="bg-gray-50 dark:bg-[#050914] text-gray-900 dark:text-white pt-40 pb-20 relative overflow-hidden border-b border-gray-200 dark:border-white/10 transition-colors duration-300">
            <!-- Global Map Graphic Background -->
            <div class="absolute inset-0 opacity-5 dark:opacity-10 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PGNpcmNsZSBjeD0iMzAiIGN5PSIzMCIgcj0iMjkiIGZpbGw9Im5vbmUiIHN0cm9rZT0icmdiYSgyNTUsMjU1LDI1NSwwLjMpIi8+PHBhdGggZD0iTTAgMzBMNjAgMzAiIHN0cm9rZT0icmdiYSgyNTUsMjU1LDI1NSwwLjMpIi8+PHBhdGggZD0iTTMwIDBMMzAgNjAiIHN0cm9rZT0icmdiYSgyNTUsMjU1LDI1NSwwLjMpIi8+PC9zdmc+')] bg-center pointer-events-none"></div>
            
            <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center gsap-3d-reveal">
                <div class="inline-flex items-center gap-2 mb-4 px-3 py-1 bg-white dark:bg-[#1b365d] border border-gray-200 dark:border-white/10 rounded-full text-secondary shadow-sm">
                    <i class="fas fa-globe-asia"></i>
                    <span class="font-mono text-[10px] font-bold uppercase tracking-widest">Global Reach / Local Presence</span>
                </div>
                <h1 class="text-4xl md:text-6xl font-black mb-6 tracking-tight uppercase">${displayTitle}</h1>
                <p class="text-lg text-gray-600 dark:text-gray-400 font-light max-w-2xl mx-auto">Strategic logistical positioning to ensure rapid dispatch and delivery of forged components to this sector.</p>
            </div>
        </div>

        <!-- Regional Data Section -->
        <section class="py-16 bg-white dark:bg-[#0a192f] transition-colors duration-300">
            <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div class="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
                    
                    <!-- Map/Visual Area -->
                    <div class="relative gsap-heavy-drop">
                        <div class="aspect-w-4 aspect-h-4 rounded-full border-4 border-dashed border-gray-200 dark:border-white/10 p-4 relative animate-[spin_60s_linear_infinite]">
                            <div class="w-full h-full rounded-full bg-gray-50 dark:bg-[#050914] flex items-center justify-center relative overflow-hidden">
                                <i class="fas fa-map-marker-alt text-6xl text-gray-200 dark:text-white/5 animate-pulse"></i>
                            </div>
                        </div>
                        <!-- Absolute center pin -->
                        <div class="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2">
                            <i class="fas fa-map-pin text-4xl text-secondary drop-shadow-xl"></i>
                        </div>
                    </div>
                    
                    <!-- Logistical Specs -->
                    <div class="gsap-3d-reveal">
                        <h2 class="text-2xl md:text-3xl font-bold text-gray-900 dark:text-white mb-6 uppercase tracking-wide border-b border-gray-200 dark:border-white/10 pb-4">Logistics & Distribution</h2>
                        
                        <p class="text-gray-600 dark:text-gray-400 font-light leading-relaxed mb-8">
                            Serving the <strong>${displayTitle}</strong> market requires precision logistics. Operating from our hub in Rajkot, Gujarat, JK Forge leverages excellent connectivity via major seaports and national highways to ensure your supply chain remains uninterrupted.
                        </p>
                        
                        <ul class="space-y-6">
                            <li class="flex items-start">
                                <div class="w-10 h-10 bg-secondary/10 rounded-full flex items-center justify-center text-secondary shrink-0 mr-4">
                                    <i class="fas fa-truck-loading"></i>
                                </div>
                                <div>
                                    <h4 class="text-gray-900 dark:text-white font-bold tracking-wide uppercase text-sm">Domestic Dispatch</h4>
                                    <p class="text-gray-600 dark:text-gray-400 text-sm font-light mt-1">Direct trucking routes to all major industrial zones across India.</p>
                                </div>
                            </li>
                            <li class="flex items-start">
                                <div class="w-10 h-10 bg-secondary/10 rounded-full flex items-center justify-center text-secondary shrink-0 mr-4">
                                    <i class="fas fa-ship"></i>
                                </div>
                                <div>
                                    <h4 class="text-gray-900 dark:text-white font-bold tracking-wide uppercase text-sm">Export Proximity</h4>
                                    <p class="text-gray-600 dark:text-gray-400 text-sm font-light mt-1">Close proximity to Mundra and Kandla ports for rapid international shipping.</p>
                                </div>
                            </li>
                            <li class="flex items-start">
                                <div class="w-10 h-10 bg-secondary/10 rounded-full flex items-center justify-center text-secondary shrink-0 mr-4">
                                    <i class="fas fa-box-open"></i>
                                </div>
                                <div>
                                    <h4 class="text-gray-900 dark:text-white font-bold tracking-wide uppercase text-sm">Export Packaging</h4>
                                    <p class="text-gray-600 dark:text-gray-400 text-sm font-light mt-1">Seaworthy, rust-preventative packaging complying with international transit norms.</p>
                                </div>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        </section>
    `;
}
