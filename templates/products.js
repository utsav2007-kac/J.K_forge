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
                    <button class="px-6 py-2 rounded-md bg-secondary text-white font-mono text-sm tracking-wide shadow-[0_0_15px_rgba(49,130,206,0.4)] transition-all">ALL_SYSTEMS</button>
                    <button class="px-6 py-2 rounded-md bg-gray-100 dark:bg-[#050914] text-gray-600 dark:text-gray-400 border border-gray-200 dark:border-white/10 hover:border-secondary hover:text-primary dark:hover:text-white font-mono text-sm tracking-wide transition-all">AUTOMOTIVE</button>
                    <button class="px-6 py-2 rounded-md bg-gray-100 dark:bg-[#050914] text-gray-600 dark:text-gray-400 border border-gray-200 dark:border-white/10 hover:border-secondary hover:text-primary dark:hover:text-white font-mono text-sm tracking-wide transition-all">OIL_GAS</button>
                    <button class="px-6 py-2 rounded-md bg-gray-100 dark:bg-[#050914] text-gray-600 dark:text-gray-400 border border-gray-200 dark:border-white/10 hover:border-secondary hover:text-primary dark:hover:text-white font-mono text-sm tracking-wide transition-all">HEAVY_MACHINERY</button>
                </div>
                
                <!-- Products Grid -->
                <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8" style="perspective: 1500px;">
                    
                    <!-- Product 1 -->
                    <a href="?page=gear-forging" class="group bg-gray-50 dark:bg-[#050914] rounded-xl border border-gray-200 dark:border-white/10 hover-metallic transition-all hover:-translate-y-2 hover:shadow-[0_10px_30px_rgba(49,130,206,0.15)] gsap-3d-card overflow-hidden block">
                        <div class="aspect-w-4 aspect-h-3 bg-gray-200 dark:bg-[#1b365d] relative overflow-hidden h-48 border-b border-gray-200 dark:border-white/10">
                            <div class="absolute inset-0 bg-gradient-to-t from-gray-50 dark:from-[#050914] to-transparent opacity-80 z-10"></div>
                            <div class="absolute inset-0 flex items-center justify-center text-secondary opacity-30 group-hover:scale-110 transition-transform duration-700">
                                <i class="fas fa-cog text-7xl"></i>
                            </div>
                        </div>
                        <div class="p-6 relative z-20">
                            <div class="flex items-center gap-2 mb-3">
                                <div class="w-2 h-2 rounded-full bg-secondary animate-pulse"></div>
                                <div class="text-[10px] font-bold text-secondary dark:text-accent font-mono uppercase tracking-widest">Drivetrain</div>
                            </div>
                            <h3 class="text-xl font-bold text-gray-900 dark:text-white mb-2 group-hover:text-secondary transition-colors">Gear Forgings</h3>
                            <p class="text-gray-600 dark:text-gray-400 text-sm font-light">High-strength gear blanks and precision forged gears.</p>
                        </div>
                    </a>

                    <!-- Product 2 -->
                    <a href="?page=flange-forging" class="group bg-gray-50 dark:bg-[#050914] rounded-xl border border-gray-200 dark:border-white/10 hover-metallic transition-all hover:-translate-y-2 hover:shadow-[0_10px_30px_rgba(49,130,206,0.15)] gsap-3d-card overflow-hidden block" style="transition-delay: 100ms">
                        <div class="aspect-w-4 aspect-h-3 bg-gray-200 dark:bg-[#1b365d] relative overflow-hidden h-48 border-b border-gray-200 dark:border-white/10">
                            <div class="absolute inset-0 bg-gradient-to-t from-gray-50 dark:from-[#050914] to-transparent opacity-80 z-10"></div>
                            <div class="absolute inset-0 flex items-center justify-center text-secondary opacity-30 group-hover:scale-110 transition-transform duration-700">
                                <i class="fas fa-circle-notch text-7xl"></i>
                            </div>
                        </div>
                        <div class="p-6 relative z-20">
                            <div class="flex items-center gap-2 mb-3">
                                <div class="w-2 h-2 rounded-full bg-secondary animate-pulse"></div>
                                <div class="text-[10px] font-bold text-secondary dark:text-accent font-mono uppercase tracking-widest">Fluid & Flow</div>
                            </div>
                            <h3 class="text-xl font-bold text-gray-900 dark:text-white mb-2 group-hover:text-secondary transition-colors">Industrial Flanges</h3>
                            <p class="text-gray-600 dark:text-gray-400 text-sm font-light">Pressure-tested flanges for oil, gas, and chemical pipelines.</p>
                        </div>
                    </a>
                    
                    <!-- Product 3 -->
                    <a href="?page=shaft-forging" class="group bg-gray-50 dark:bg-[#050914] rounded-xl border border-gray-200 dark:border-white/10 hover-metallic transition-all hover:-translate-y-2 hover:shadow-[0_10px_30px_rgba(49,130,206,0.15)] gsap-3d-card overflow-hidden block" style="transition-delay: 200ms">
                        <div class="aspect-w-4 aspect-h-3 bg-gray-200 dark:bg-[#1b365d] relative overflow-hidden h-48 border-b border-gray-200 dark:border-white/10">
                            <div class="absolute inset-0 bg-gradient-to-t from-gray-50 dark:from-[#050914] to-transparent opacity-80 z-10"></div>
                            <div class="absolute inset-0 flex items-center justify-center text-secondary opacity-30 group-hover:scale-110 transition-transform duration-700">
                                <i class="fas fa-grip-lines-vertical text-7xl"></i>
                            </div>
                        </div>
                        <div class="p-6 relative z-20">
                            <div class="flex items-center gap-2 mb-3">
                                <div class="w-2 h-2 rounded-full bg-secondary animate-pulse"></div>
                                <div class="text-[10px] font-bold text-secondary dark:text-accent font-mono uppercase tracking-widest">Rotating Components</div>
                            </div>
                            <h3 class="text-xl font-bold text-gray-900 dark:text-white mb-2 group-hover:text-secondary transition-colors">Forged Shafts</h3>
                            <p class="text-gray-600 dark:text-gray-400 text-sm font-light">Axle and drive shafts for heavy machinery and automotive.</p>
                        </div>
                    </a>

                    <!-- Product 4 -->
                    <a href="?page=steering-knuckle" class="group bg-gray-50 dark:bg-[#050914] rounded-xl border border-gray-200 dark:border-white/10 hover-metallic transition-all hover:-translate-y-2 hover:shadow-[0_10px_30px_rgba(49,130,206,0.15)] gsap-3d-card overflow-hidden block" style="transition-delay: 300ms">
                        <div class="aspect-w-4 aspect-h-3 bg-gray-200 dark:bg-[#1b365d] relative overflow-hidden h-48 border-b border-gray-200 dark:border-white/10">
                            <div class="absolute inset-0 bg-gradient-to-t from-gray-50 dark:from-[#050914] to-transparent opacity-80 z-10"></div>
                            <div class="absolute inset-0 flex items-center justify-center text-secondary opacity-30 group-hover:scale-110 transition-transform duration-700">
                                <i class="fas fa-bezier-curve text-7xl"></i>
                            </div>
                        </div>
                        <div class="p-6 relative z-20">
                            <div class="flex items-center gap-2 mb-3">
                                <div class="w-2 h-2 rounded-full bg-secondary animate-pulse"></div>
                                <div class="text-[10px] font-bold text-secondary dark:text-accent font-mono uppercase tracking-widest">Suspension</div>
                            </div>
                            <h3 class="text-xl font-bold text-gray-900 dark:text-white mb-2 group-hover:text-secondary transition-colors">Steering Knuckles</h3>
                            <p class="text-gray-600 dark:text-gray-400 text-sm font-light">Critical safety components forged for maximum durability.</p>
                        </div>
                    </a>

                </div>
            </div>
        </section>
    `;
}
