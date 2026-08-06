function renderComponentPage(title, slug) {
    const displayTitle = title.replace(/-/g, ' ').replace(/\b\w/g, l => l.toUpperCase());
    
    return `
        <!-- Component Header -->
        <div class="bg-gray-50 dark:bg-[#050914] text-gray-900 dark:text-white pt-40 pb-20 relative overflow-hidden border-b border-gray-200 dark:border-white/10 transition-colors duration-300">
            <!-- Blueprint grid background -->
            <div class="absolute inset-0 opacity-10 dark:opacity-20" style="background-image: linear-gradient(#3182ce 1px, transparent 1px), linear-gradient(90deg, #3182ce 1px, transparent 1px); background-size: 40px 40px;"></div>
            
            <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 gsap-3d-reveal">
                <div class="flex items-center gap-3 mb-4">
                    <i class="fas fa-cog text-secondary animate-spin-slow"></i>
                    <span class="text-secondary font-mono text-xs font-bold uppercase tracking-[0.3em]">Technical Component</span>
                </div>
                <h1 class="text-4xl md:text-6xl font-black mb-6 tracking-tighter uppercase font-mono">${displayTitle}</h1>
                <p class="text-lg text-gray-600 dark:text-gray-400 font-light max-w-2xl">High-precision manufactured part built to exact OEM specifications, tolerances, and material grades.</p>
            </div>
        </div>

        <!-- Specifications & Blueprint Section -->
        <section class="py-16 bg-white dark:bg-[#0a192f] transition-colors duration-300">
            <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div class="grid grid-cols-1 lg:grid-cols-12 gap-12">
                    
                    <!-- Tech Specs Table -->
                    <div class="lg:col-span-7 gsap-3d-reveal">
                        <h3 class="text-2xl font-bold text-gray-900 dark:text-white mb-8 uppercase tracking-wide flex items-center">
                            <span class="w-8 h-1 bg-secondary mr-4 block"></span>
                            Engineering Specs
                        </h3>
                        
                        <div class="bg-gray-50 dark:bg-[#050914] border border-gray-200 dark:border-white/10 rounded-xl overflow-hidden font-mono text-sm">
                            <table class="w-full text-left border-collapse">
                                <tbody>
                                    <tr class="border-b border-gray-200 dark:border-white/5 hover:bg-white dark:hover:bg-white/5 transition-colors">
                                        <th class="py-4 px-6 text-gray-500 dark:text-gray-400 font-normal w-1/3">Manufacturing Process</th>
                                        <td class="py-4 px-6 text-gray-900 dark:text-white font-bold">Closed-Die / Open-Die Forging</td>
                                    </tr>
                                    <tr class="border-b border-gray-200 dark:border-white/5 hover:bg-white dark:hover:bg-white/5 transition-colors">
                                        <th class="py-4 px-6 text-gray-500 dark:text-gray-400 font-normal">Material Grades</th>
                                        <td class="py-4 px-6 text-gray-900 dark:text-white font-bold">Carbon Steel, Alloy Steel, Stainless Steel</td>
                                    </tr>
                                    <tr class="border-b border-gray-200 dark:border-white/5 hover:bg-white dark:hover:bg-white/5 transition-colors">
                                        <th class="py-4 px-6 text-gray-500 dark:text-gray-400 font-normal">Weight Range</th>
                                        <td class="py-4 px-6 text-gray-900 dark:text-white font-bold">0.5 kg to 150 kg</td>
                                    </tr>
                                    <tr class="border-b border-gray-200 dark:border-white/5 hover:bg-white dark:hover:bg-white/5 transition-colors">
                                        <th class="py-4 px-6 text-gray-500 dark:text-gray-400 font-normal">Heat Treatment</th>
                                        <td class="py-4 px-6 text-gray-900 dark:text-white font-bold">Normalizing, Hardening, Tempering</td>
                                    </tr>
                                    <tr class="border-b border-gray-200 dark:border-white/5 hover:bg-white dark:hover:bg-white/5 transition-colors">
                                        <th class="py-4 px-6 text-gray-500 dark:text-gray-400 font-normal">Surface Finish</th>
                                        <td class="py-4 px-6 text-gray-900 dark:text-white font-bold">Shot Blasting, Plating, Anti-rust</td>
                                    </tr>
                                    <tr class="hover:bg-white dark:hover:bg-white/5 transition-colors">
                                        <th class="py-4 px-6 text-gray-500 dark:text-gray-400 font-normal">Testing & QA</th>
                                        <td class="py-4 px-6 text-gray-900 dark:text-white font-bold">Magnaflux, Ultrasonic, Spectro, CMM</td>
                                    </tr>
                                </tbody>
                            </table>
                        </div>
                    </div>
                    
                    <!-- Blueprint Image -->
                    <div class="lg:col-span-5 gsap-heavy-drop">
                        <div class="bg-gray-100 dark:bg-[#050914] rounded-xl border border-gray-200 dark:border-white/10 p-6 relative group overflow-hidden h-full flex flex-col justify-center">
                            <div class="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMjAiIGhlaWdodD0iMjAiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PGNpcmNsZSBjeD0iMiIgY3k9IjIiIHI9IjEiIGZpbGw9InJnYmEoMjU1LDI1NSwyNTUsMC4wNSkiLz48L3N2Zz4=')]"></div>
                            
                            <div class="relative z-10 text-center mb-6">
                                <span class="inline-block px-3 py-1 bg-secondary text-white font-mono text-[10px] rounded uppercase tracking-widest">CAD Render</span>
                            </div>
                            
                            <div class="relative z-10 aspect-w-1 aspect-h-1 flex items-center justify-center">
                                <img src="./images/logo.png" alt="CAD Render" class="w-1/2 h-auto opacity-50 grayscale mix-blend-multiply dark:mix-blend-screen group-hover:scale-110 transition-transform duration-500">
                            </div>
                            
                            <!-- Scanner line -->
                            <div class="absolute top-0 left-0 w-full h-0.5 bg-secondary/50 shadow-[0_0_10px_rgba(49,130,206,0.8)] animate-[scanLine_3s_linear_infinite] z-20"></div>
                        </div>
                    </div>
                    
                </div>
            </div>
        </section>
        
        <style>
            @keyframes scanLine {
                0% { top: 0%; opacity: 0; }
                10% { opacity: 1; }
                90% { opacity: 1; }
                100% { top: 100%; opacity: 0; }
            }
        </style>
    `;
}
