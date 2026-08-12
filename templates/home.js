function renderHome() {
    return `
        <!-- Dynamic Hero Section -->
        <section class="relative min-h-[90vh] py-28 flex items-center justify-center overflow-hidden bg-gray-50 dark:bg-[#050914] transition-colors duration-300">
            <!-- Animated Background Grid -->
            <div class="absolute inset-0 z-0 opacity-20" style="background-image: linear-gradient(#1b365d 1px, transparent 1px), linear-gradient(90deg, #1b365d 1px, transparent 1px); background-size: 50px 50px; transform: perspective(500px) rotateX(60deg) translateY(-100px) translateZ(-200px); animation: gridMove 20s linear infinite;"></div>
            
            <div class="absolute inset-0 z-0 bg-[#050914]">
                <!-- Slide 1 -->
                <div class="hero-bg-slide absolute inset-0 z-10">
                    <div class="absolute inset-0 bg-gradient-to-b from-[#050914]/10 via-transparent to-[#050914] z-10"></div>
                    <img src="./images/hero-bg.jpg" alt="JK Forge Background" class="w-full h-full object-cover object-center opacity-100">
                </div>
                <!-- Slide 2 -->
                <div class="hero-bg-slide absolute inset-0 z-0 opacity-0">
                    <div class="absolute inset-0 bg-gradient-to-b from-[#050914]/10 via-transparent to-[#050914] z-10"></div>
                    <img src="./images/facility.jpg" alt="JK Forge Facility" class="w-full h-full object-cover object-center opacity-100">
                </div>
                <!-- Slide 3 -->
                <div class="hero-bg-slide absolute inset-0 z-0 opacity-0">
                    <div class="absolute inset-0 bg-gradient-to-b from-[#050914]/10 via-transparent to-[#050914] z-10"></div>
                    <img src="./images/gear.jpg" alt="JK Forge Gear" class="w-full h-full object-cover object-center opacity-100">
                </div>
                <!-- Slide 4 -->
                <div class="hero-bg-slide absolute inset-0 z-0 opacity-0">
                    <div class="absolute inset-0 bg-gradient-to-b from-[#050914]/10 via-transparent to-[#050914] z-10"></div>
                    <img src="./images/automotive.jpg" alt="Automotive Parts" class="w-full h-full object-cover object-center opacity-100">
                </div>
            </div>
            
            <!-- Hero Content -->
            <div class="relative z-10 text-center px-4 max-w-6xl mx-auto mt-12">
                <div class="reveal active mb-8">
                    <span class="inline-flex items-center px-4 py-2 rounded-full border border-secondary/50 bg-white/80 dark:bg-[#0a192f]/80 backdrop-blur-md text-secondary dark:text-accent text-xs font-mono font-bold tracking-[0.2em] uppercase shadow-[0_0_15px_rgba(49,130,206,0.3)] transition-colors">
                        <span class="w-2 h-2 rounded-full bg-secondary mr-3 animate-pulse"></span>
                        Next-Gen Forging Technology
                    </span>
                </div>
                
                <h1 class="text-5xl md:text-7xl lg:text-8xl font-black text-transparent bg-clip-text bg-gradient-to-r from-white via-blue-100 to-white mb-6 leading-tight tracking-tighter reveal active drop-shadow-[0_4px_4px_rgba(0,0,0,1)]" style="transition-delay: 100ms">
                    <span class="block hover:scale-105 transition-transform duration-500 cursor-default">ENGINEERING</span>
                    <span class="block text-gradient-animated mt-2">ABSOLUTE PRECISION.</span>
                </h1>
                
                <p class="text-lg md:text-2xl text-gray-200 mb-12 max-w-4xl mx-auto font-medium leading-relaxed reveal active drop-shadow-[0_2px_4px_rgba(0,0,0,1)]" style="transition-delay: 200ms">
                    We forge the core components that power global industries. From automotive drivetrains to heavy-duty mining equipment, JK Forge delivers uncompromising strength.
                </p>
                
                <div class="flex flex-col sm:flex-row items-center justify-center gap-6 reveal active" style="transition-delay: 300ms">
                    <a href="products.html" class="group relative w-full sm:w-auto bg-secondary text-white px-10 py-5 rounded-lg font-bold text-lg tracking-wide transition-all shadow-[0_0_20px_rgba(49,130,206,0.4)] hover:shadow-[0_0_30px_rgba(49,130,206,0.8)] hover:-translate-y-1 overflow-hidden">
                        <div class="absolute inset-0 w-full h-full bg-gradient-to-r from-transparent via-white/20 to-transparent -translate-x-full group-hover:animate-[shimmer_1.5s_infinite]"></div>
                        Explore Arsenal <i class="fas fa-arrow-right ml-2 group-hover:translate-x-2 transition-transform"></i>
                    </a>
                    <a href="contact.html" class="w-full sm:w-auto bg-transparent border-2 border-white text-white hover:bg-white/10 px-10 py-5 rounded-lg font-bold text-lg tracking-wide transition-all hover:-translate-y-1">
                        Initiate Contact
                    </a>
                </div>
                
                <!-- Stats Bar -->
                <div class="mt-24 grid grid-cols-2 md:grid-cols-4 gap-8 border-t border-white/10 pt-12 reveal active" style="transition-delay: 400ms">
                    <div>
                        <div class="text-4xl font-black text-white mb-2">50+</div>
                        <div class="text-xs text-accent font-mono uppercase tracking-widest">Global Clients</div>
                    </div>
                    <div>
                        <div class="text-4xl font-black text-white mb-2">1M+</div>
                        <div class="text-xs text-accent font-mono uppercase tracking-widest">Parts Forged</div>
                    </div>
                    <div>
                        <div class="text-4xl font-black text-white mb-2">ISO</div>
                        <div class="text-xs text-accent font-mono uppercase tracking-widest">9001 Certified</div>
                    </div>
                    <div>
                        <div class="text-4xl font-black text-white mb-2">24/7</div>
                        <div class="text-xs text-accent font-mono uppercase tracking-widest">Operation</div>
                    </div>
                </div>
            </div>
        </section>

        <!-- What We Forge Section (Dark High-Tech Layout) -->
        <section class="py-32 bg-white dark:bg-[#050914] relative border-t border-gray-200 dark:border-white/5 transition-colors duration-300 overflow-hidden">
            <div class="absolute right-0 top-0 w-1/2 h-full bg-gradient-to-l from-secondary/5 to-transparent pointer-events-none"></div>
            
            <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
                <div class="flex flex-col md:flex-row justify-between items-end mb-20 gsap-heavy-drop">
                    <div class="max-w-3xl">
                        <div class="flex items-center gap-4 mb-6">
                            <div class="w-12 h-1 bg-secondary"></div>
                            <span class="text-secondary font-bold font-mono text-sm tracking-[0.2em] uppercase">What We Forge</span>
                        </div>
                        <h2 class="text-4xl md:text-6xl font-black text-gray-900 dark:text-white leading-tight">SIX INDUSTRIES.<br><span class="text-transparent bg-clip-text bg-gradient-to-r from-secondary to-primary dark:from-secondary dark:to-accent">ONE FORGING STANDARD.</span></h2>
                    </div>
                    <p class="text-gray-600 dark:text-gray-400 max-w-lg text-lg mt-8 md:mt-0 font-light border-l-2 border-secondary/30 pl-6">
                        From driveline components to hydraulic fittings, every part that leaves our floor is held to the same exacting benchmark.
                    </p>
                </div>

                <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6" style="perspective: 1500px;">
                    <!-- Industry Card 1 -->
                    <a href="industry.html?page=automotive-forging" class="group block bg-white p-10 rounded-2xl border border-gray-200 hover-metallic transition-all hover:-translate-y-2 hover:shadow-[0_10px_40px_rgba(49,130,206,0.15)] gsap-3d-card relative overflow-hidden">
                        <div class="absolute top-0 right-0 p-6 opacity-5 group-hover:opacity-20 transition-opacity">
                            <i class="fas fa-car text-8xl text-secondary"></i>
                        </div>
                        <div class="w-16 h-16 bg-gray-100 dark:bg-[#1b365d] rounded-xl flex items-center justify-center text-3xl text-secondary mb-8 group-hover:scale-110 transition-transform">
                            <i class="fas fa-car"></i>
                        </div>
                        <h3 class="text-2xl font-bold text-gray-900 dark:text-white mb-4 group-hover:text-secondary transition-colors">Automotive</h3>
                        <p class="text-gray-600 dark:text-gray-400 mb-8 font-light leading-relaxed">Driveline and chassis components engineered for performance and long-service durability under continuous load.</p>
                        <div class="flex items-center text-secondary dark:text-accent font-mono text-sm tracking-wider group-hover:text-primary dark:group-hover:text-white transition-colors">
                            Explore category <i class="fas fa-arrow-right ml-3 group-hover:translate-x-2 transition-transform"></i>
                        </div>
                    </a>
                    
                    <!-- Industry Card 2 -->
                    <a href="industry.html?page=oil-gas-forging" class="group block bg-white p-10 rounded-2xl border border-gray-200 hover-metallic transition-all hover:-translate-y-2 hover:shadow-[0_10px_40px_rgba(49,130,206,0.15)] gsap-3d-card relative overflow-hidden">
                        <div class="absolute top-0 right-0 p-6 opacity-5 group-hover:opacity-20 transition-opacity">
                            <i class="fas fa-oil-well text-8xl text-secondary"></i>
                        </div>
                        <div class="w-16 h-16 bg-gray-100 dark:bg-[#1b365d] rounded-xl flex items-center justify-center text-3xl text-secondary mb-8 group-hover:scale-110 transition-transform">
                            <i class="fas fa-oil-well"></i>
                        </div>
                        <h3 class="text-2xl font-bold text-gray-900 dark:text-white mb-4 group-hover:text-secondary transition-colors">Oil & Gas Industry</h3>
                        <p class="text-gray-600 dark:text-gray-400 mb-8 font-light leading-relaxed">Corrosion-resistant fittings and structural parts built for high-pressure, high-temperature environments.</p>
                        <div class="flex items-center text-secondary dark:text-accent font-mono text-sm tracking-wider group-hover:text-primary dark:group-hover:text-white transition-colors">
                            Explore category <i class="fas fa-arrow-right ml-3 group-hover:translate-x-2 transition-transform"></i>
                        </div>
                    </a>

                    <!-- Industry Card 3 -->
                    <a href="industry.html?page=tractor-parts-forging" class="group block bg-white p-10 rounded-2xl border border-gray-200 hover-metallic transition-all hover:-translate-y-2 hover:shadow-[0_10px_40px_rgba(49,130,206,0.15)] gsap-3d-card relative overflow-hidden">
                        <div class="absolute top-0 right-0 p-6 opacity-5 group-hover:opacity-20 transition-opacity">
                            <i class="fas fa-tractor text-8xl text-secondary"></i>
                        </div>
                        <div class="w-16 h-16 bg-gray-100 dark:bg-[#1b365d] rounded-xl flex items-center justify-center text-3xl text-secondary mb-8 group-hover:scale-110 transition-transform">
                            <i class="fas fa-tractor"></i>
                        </div>
                        <h3 class="text-2xl font-bold text-gray-900 dark:text-white mb-4 group-hover:text-secondary transition-colors">Tractor & Farm Equipment</h3>
                        <p class="text-gray-600 dark:text-gray-400 mb-8 font-light leading-relaxed">Heavy-duty linkage and drive parts that keep farm machinery running through the toughest seasons.</p>
                        <div class="flex items-center text-secondary dark:text-accent font-mono text-sm tracking-wider group-hover:text-primary dark:group-hover:text-white transition-colors">
                            Explore category <i class="fas fa-arrow-right ml-3 group-hover:translate-x-2 transition-transform"></i>
                        </div>
                    </a>

                    <!-- Industry Card 4 -->
                    <a href="industry.html?page=mining-forging" class="group block bg-white p-10 rounded-2xl border border-gray-200 hover-metallic transition-all hover:-translate-y-2 hover:shadow-[0_10px_40px_rgba(49,130,206,0.15)] gsap-3d-card relative overflow-hidden">
                        <div class="absolute top-0 right-0 p-6 opacity-5 group-hover:opacity-20 transition-opacity">
                            <i class="fas fa-hammer text-8xl text-secondary"></i>
                        </div>
                        <div class="w-16 h-16 bg-gray-100 dark:bg-[#1b365d] rounded-xl flex items-center justify-center text-3xl text-secondary mb-8 group-hover:scale-110 transition-transform">
                            <i class="fas fa-hammer"></i>
                        </div>
                        <h3 class="text-2xl font-bold text-gray-900 dark:text-white mb-4 group-hover:text-secondary transition-colors">Mining</h3>
                        <p class="text-gray-600 dark:text-gray-400 mb-8 font-light leading-relaxed">Tungsten-carbide and hardened-steel components engineered for abrasion resistance in rugged extraction sites.</p>
                        <div class="flex items-center text-secondary dark:text-accent font-mono text-sm tracking-wider group-hover:text-primary dark:group-hover:text-white transition-colors">
                            Explore category <i class="fas fa-arrow-right ml-3 group-hover:translate-x-2 transition-transform"></i>
                        </div>
                    </a>

                    <!-- Industry Card 5 -->
                    <a href="industry.html?page=industrial-forging" class="group block bg-white p-10 rounded-2xl border border-gray-200 hover-metallic transition-all hover:-translate-y-2 hover:shadow-[0_10px_40px_rgba(49,130,206,0.15)] gsap-3d-card relative overflow-hidden">
                        <div class="absolute top-0 right-0 p-6 opacity-5 group-hover:opacity-20 transition-opacity">
                            <i class="fas fa-industry text-8xl text-secondary"></i>
                        </div>
                        <div class="w-16 h-16 bg-gray-100 dark:bg-[#1b365d] rounded-xl flex items-center justify-center text-3xl text-secondary mb-8 group-hover:scale-110 transition-transform">
                            <i class="fas fa-industry"></i>
                        </div>
                        <h3 class="text-2xl font-bold text-gray-900 dark:text-white mb-4 group-hover:text-secondary transition-colors">Industrial</h3>
                        <p class="text-gray-600 dark:text-gray-400 mb-8 font-light leading-relaxed">Precision-machined components for demanding industrial applications, made from premium corrosion-resistant alloys.</p>
                        <div class="flex items-center text-secondary dark:text-accent font-mono text-sm tracking-wider group-hover:text-primary dark:group-hover:text-white transition-colors">
                            Explore category <i class="fas fa-arrow-right ml-3 group-hover:translate-x-2 transition-transform"></i>
                        </div>
                    </a>

                    <!-- Industry Card 6 -->
                    <a href="components.html?page=hydraulic-fittings-manufacturer" class="group block bg-white p-10 rounded-2xl border border-gray-200 hover-metallic transition-all hover:-translate-y-2 hover:shadow-[0_10px_40px_rgba(49,130,206,0.15)] gsap-3d-card relative overflow-hidden">
                        <div class="absolute top-0 right-0 p-6 opacity-5 group-hover:opacity-20 transition-opacity">
                            <i class="fas fa-cogs text-8xl text-secondary"></i>
                        </div>
                        <div class="w-16 h-16 bg-gray-100 dark:bg-[#1b365d] rounded-xl flex items-center justify-center text-3xl text-secondary mb-8 group-hover:scale-110 transition-transform">
                            <i class="fas fa-cogs"></i>
                        </div>
                        <h3 class="text-2xl font-bold text-gray-900 dark:text-white mb-4 group-hover:text-secondary transition-colors">Hydraulic Fitting</h3>
                        <p class="text-gray-600 dark:text-gray-400 mb-8 font-light leading-relaxed">Engineered seals and fittings that ensure leak-free performance in demanding hydraulic systems.</p>
                        <div class="flex items-center text-secondary dark:text-accent font-mono text-sm tracking-wider group-hover:text-primary dark:group-hover:text-white transition-colors">
                            Explore category <i class="fas fa-arrow-right ml-3 group-hover:translate-x-2 transition-transform"></i>
                        </div>
                    </a>
                </div>
            </div>
        </section>

        <!-- The JK Forge Edge Section -->
        <section class="py-32 bg-[#0a192f] relative border-t border-white/5 transition-colors duration-300 overflow-hidden">
            <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
                <div class="text-center mb-20 gsap-heavy-drop">
                    <h2 class="text-4xl md:text-5xl font-black text-white mb-6 uppercase tracking-tight">The JK Forge Edge</h2>
                    <p class="text-xl text-accent font-mono mb-8">Built on precision. Driven by trust.</p>
                    <p class="text-gray-400 max-w-3xl mx-auto font-light leading-relaxed mb-6">
                        From design to delivery, we pair experienced engineering talent with modern forging technology to deliver consistent, high-value outcomes at every scale.
                    </p>
                    <p class="text-gray-400 max-w-3xl mx-auto font-light leading-relaxed">
                        We hold ourselves to one standard: excellence at every stage. Our processes are continuously refined to meet benchmarks that hold up nationally and globally.
                    </p>
                </div>
                
                <div class="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16" style="perspective: 1500px;">
                    <div class="bg-[#050914] p-10 rounded-xl border border-white/10 text-center hover:border-secondary/50 transition-colors gsap-3d-card group">
                        <i class="fas fa-users-cog text-5xl text-secondary mb-6 group-hover:scale-110 transition-transform"></i>
                        <h4 class="text-xl font-bold text-white">Experienced and dynamic management team</h4>
                    </div>
                    <div class="bg-[#050914] p-10 rounded-xl border border-white/10 text-center hover:border-secondary/50 transition-colors gsap-3d-card group">
                        <i class="fas fa-industry text-5xl text-secondary mb-6 group-hover:scale-110 transition-transform"></i>
                        <h4 class="text-xl font-bold text-white">World-class infrastructure and technology</h4>
                    </div>
                    <div class="bg-[#050914] p-10 rounded-xl border border-white/10 text-center hover:border-secondary/50 transition-colors gsap-3d-card group">
                        <i class="fas fa-globe text-5xl text-secondary mb-6 group-hover:scale-110 transition-transform"></i>
                        <h4 class="text-xl font-bold text-white">Globally benchmarked production processes</h4>
                    </div>
                </div>
                
                <div class="text-center gsap-3d-reveal">
                    <a href="about.html" class="inline-flex items-center justify-center bg-transparent border-2 border-white text-white hover:bg-white/10 px-10 py-5 rounded-lg font-bold tracking-wide transition-all hover:-translate-y-1">
                        Learn More About Us <i class="fas fa-arrow-right ml-2"></i>
                    </a>
                </div>
            </div>
        </section>

        <!-- CTA Section -->
        <section class="py-32 bg-gray-100 dark:bg-[#1b365d] relative overflow-hidden transition-colors duration-300">
            <div class="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMjAiIGhlaWdodD0iMjAiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PGNpcmNsZSBjeD0iMiIgY3k9IjIiIHI9IjEiIGZpbGw9InJnYmEoMjU1LDI1NSwyNTUsMC4xKSIvPjwvc3ZnPg==')] opacity-10 dark:opacity-100"></div>
            
            <div class="max-w-4xl mx-auto px-4 relative z-10 text-center gsap-3d-reveal" style="perspective: 1000px;">
                <h2 class="text-4xl md:text-6xl font-black text-gray-900 dark:text-white mb-6">READY TO FORGE A PARTNERSHIP?</h2>
                <p class="text-xl text-gray-600 dark:text-accent mb-12 font-light">Transmit your engineering blueprints to our secure terminal for an immediate manufacturing assessment.</p>
                <a href="contact.html" class="inline-flex items-center justify-center bg-primary dark:bg-white text-white dark:text-[#1b365d] px-12 py-6 rounded-lg font-bold text-xl tracking-wide transition-all shadow-[0_0_30px_rgba(49,130,206,0.2)] hover:shadow-[0_0_50px_rgba(49,130,206,0.4)] hover:-translate-y-2 group">
                    ACCESS INQUIRY TERMINAL <i class="fas fa-terminal ml-4 group-hover:animate-pulse"></i>
                </a>
            </div>
        </section>
        
        <style>
            @keyframes gridMove {
                0% { transform: perspective(500px) rotateX(60deg) translateY(-100px) translateZ(-200px); }
                100% { transform: perspective(500px) rotateX(60deg) translateY(0px) translateZ(-200px); }
            }
            @keyframes shimmer {
                100% { transform: translateX(100%); }
            }
        </style>
    `;
}
