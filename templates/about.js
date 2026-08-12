function renderAbout() {
    return `
        <!-- HERO SECTION -->
        <section class="relative bg-[#050914] text-white pt-32 pb-24 overflow-hidden border-b border-white/10">
            <!-- Background Watermark Text -->
            <div class="absolute inset-0 flex items-center justify-center pointer-events-none select-none overflow-hidden opacity-5">
                <span class="text-[14vw] font-black uppercase tracking-tighter text-white whitespace-nowrap">The Brand</span>
            </div>
            <!-- Glow Accents -->
            <div class="absolute top-0 left-1/4 w-96 h-96 bg-secondary/20 rounded-full filter blur-[120px] pointer-events-none"></div>
            <div class="absolute bottom-0 right-1/4 w-96 h-96 bg-primary/40 rounded-full filter blur-[120px] pointer-events-none"></div>

            <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
                <div class="max-w-4xl">
                    <span class="text-secondary font-mono text-xs font-bold uppercase tracking-[0.3em] mb-4 block">OUR CAPABILITY</span>
                    <h1 class="text-5xl md:text-7xl lg:text-8xl font-black tracking-tight leading-[1.05] mb-8">
                        The Brand <br>
                        <span class="text-transparent bg-clip-text bg-gradient-to-r from-secondary via-blue-400 to-accent">Behind the Brand.</span>
                    </h1>
                    <p class="text-xl md:text-2xl text-slate-300 font-light leading-relaxed mb-12 max-w-3xl">
                        Global OEMs don't just need a manufacturer. They need a partner who takes full ownership — from drawing review to doorstep delivery. For 40 years, JK Forge has been that partner. The name OEMs never say. The capability their products depend on.
                    </p>
                </div>

                <!-- 4 Stat Counters -->
                <div class="grid grid-cols-2 lg:grid-cols-4 gap-6 pt-12 border-t border-white/10">
                    <div class="border-l-2 border-secondary pl-6 py-2">
                        <div class="text-4xl md:text-5xl font-black text-white font-mono tracking-tight mb-1">1986</div>
                        <div class="text-[11px] font-mono text-slate-400 uppercase tracking-widest leading-tight">EST. RAJKOT, GUJARAT, INDIA</div>
                    </div>
                    <div class="border-l-2 border-secondary pl-6 py-2">
                        <div class="text-4xl md:text-5xl font-black text-white font-mono tracking-tight mb-1">40+</div>
                        <div class="text-[11px] font-mono text-slate-400 uppercase tracking-widest leading-tight">YEARS MANUFACTURING</div>
                    </div>
                    <div class="border-l-2 border-secondary pl-6 py-2">
                        <div class="text-4xl md:text-5xl font-black text-white font-mono tracking-tight mb-1">13</div>
                        <div class="text-[11px] font-mono text-slate-400 uppercase tracking-widest leading-tight">PROCESSES ONE PARTNER</div>
                    </div>
                    <div class="border-l-2 border-secondary pl-6 py-2">
                        <div class="text-4xl md:text-5xl font-black text-white font-mono tracking-tight mb-1">10+</div>
                        <div class="text-[11px] font-mono text-slate-400 uppercase tracking-widest leading-tight">EXPORT COUNTRIES</div>
                    </div>
                </div>

                <!-- Scroll Down Indicator -->
                <div class="flex flex-col items-center justify-center mt-16 text-slate-500 text-xs font-mono tracking-widest uppercase gap-2 animate-bounce">
                    <span>SCROLL</span>
                    <i class="fas fa-arrow-down text-secondary"></i>
                </div>
            </div>
        </section>

        <!-- OUR STORY SECTION -->
        <section class="py-24 bg-white text-slate-900 relative overflow-hidden">
            <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
                <div class="grid grid-cols-1 lg:grid-cols-12 gap-16 items-start">
                    
                    <!-- Left Column: Image with Overlays -->
                    <div class="lg:col-span-6 relative">
                        <div class="relative rounded-2xl overflow-hidden shadow-2xl border border-slate-200">
                            <img src="./images/facility.jpg" alt="JK Forge History Facility" class="w-full h-[450px] object-cover">
                            <div class="absolute inset-0 bg-gradient-to-t from-[#0c2b5e]/90 via-transparent to-transparent"></div>
                            
                            <!-- Year Badge Overlay -->
                            <div class="absolute bottom-6 left-6 text-white">
                                <div class="text-4xl font-black font-mono text-secondary">1986</div>
                                <div class="text-xs font-mono tracking-wider uppercase text-slate-300">WHERE IT STARTED — RAJKOT, GUJARAT</div>
                            </div>
                        </div>

                        <!-- Timeline Summary Dots below image -->
                        <div class="mt-6 flex flex-wrap items-center gap-x-4 gap-y-2 text-xs font-mono text-slate-500">
                            <span><i class="fas fa-circle text-secondary text-[8px] mr-1"></i> 1986 : Founded</span>
                            <span><i class="fas fa-circle text-secondary text-[8px] mr-1"></i> 1990s : First Exports</span>
                            <span><i class="fas fa-circle text-secondary text-[8px] mr-1"></i> 2010 : ISO 9001</span>
                            <span><i class="fas fa-circle text-secondary text-[8px] mr-1"></i> 2018 : ZED Silver</span>
                            <span><i class="fas fa-circle text-secondary text-[8px] mr-1"></i> 2024 : USA Supply</span>
                        </div>
                    </div>

                    <!-- Right Column: Story Text -->
                    <div class="lg:col-span-6 space-y-8">
                        <div>
                            <span class="text-secondary font-mono text-xs font-bold uppercase tracking-[0.25em] block mb-3">OUR STORY</span>
                            <h2 class="text-3xl md:text-5xl font-extrabold text-slate-900 tracking-tight leading-tight">
                                Four Decades. <br>
                                One Unchanging Standard.
                            </h2>
                        </div>

                        <p class="text-slate-600 text-base md:text-lg leading-relaxed font-light">
                            In 1986, Vrajlal Thumar started a foundry in Rajkot with a belief that would define everything that followed: that an Indian manufacturer could meet the quality standards of the world's most demanding OEMs — not by cutting corners, but by refusing to.
                        </p>

                        <p class="text-slate-600 text-base md:text-lg leading-relaxed font-light">
                            That foundry became JK Forge Industries. Over four decades it grew from a single casting operation into a controlled manufacturing network spanning 13 processes — not because growth was the goal, but because every time a customer needed something more, JK Forge found a way to provide it.
                        </p>

                        <!-- Quote Box -->
                        <div class="p-6 md:p-8 bg-secondary/10 border-l-4 border-secondary rounded-r-xl">
                            <blockquote class="text-slate-800 font-medium text-lg leading-relaxed italic">
                                “We are not a trading company. We are not a buying house. We are manufacturers — and we take personal responsibility for every component that leaves Rajkot with our name on the paperwork.”
                            </blockquote>
                        </div>

                        <!-- Penrose Triangle / Logo Box -->
                        <div class="p-6 bg-slate-50 border border-slate-200 rounded-xl flex items-start gap-5">
                            <div class="w-14 h-14 bg-primary text-secondary rounded-lg flex-shrink-0 flex items-center justify-center text-2xl shadow-md border border-secondary/30">
                                <i class="fas fa-shapes"></i>
                            </div>
                            <div>
                                <h4 class="font-bold text-slate-900 text-sm mb-1">The Penrose Triangle Logo Standard</h4>
                                <p class="text-slate-600 text-xs leading-relaxed font-light">
                                    Our logo is an impossible object that exists only when all three sides are in perfect balance: <strong>Engineering Intelligence</strong>. <strong>Manufacturing Control</strong>. <strong>Quality Ownership</strong>. Remove any one, the triangle collapses.
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>

        <!-- THE JOURNEY / VERTICAL TIMELINE -->
        <section class="py-24 bg-slate-50 text-slate-900 border-t border-b border-slate-200 relative">
            <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <!-- Section Header -->
                <div class="grid grid-cols-1 lg:grid-cols-12 gap-8 items-end mb-16">
                    <div class="lg:col-span-7">
                        <span class="text-secondary font-mono text-xs font-bold uppercase tracking-[0.25em] block mb-3">THE JOURNEY</span>
                        <h2 class="text-3xl md:text-5xl font-extrabold text-slate-900 tracking-tight leading-tight">
                            40 Years of Building the Brand Behind the Brand.
                        </h2>
                    </div>
                    <div class="lg:col-span-5">
                        <p class="text-slate-600 text-sm md:text-base leading-relaxed font-light">
                            From a single foundry in 1986 to an active OEM supply network serving 10+ countries — this is how JK Forge grew. Not by acquisition. Not by funding rounds. By delivering on every commitment, one order at a time.
                        </p>
                    </div>
                </div>

                <!-- Timeline Nodes -->
                <div class="relative max-w-4xl mx-auto">
                    <!-- Vertical Center Line -->
                    <div class="absolute left-1/2 -translate-x-1/2 top-0 bottom-0 w-0.5 bg-slate-300 hidden md:block"></div>

                    <div class="space-y-12 relative">
                        <!-- 1986 -->
                        <div class="flex flex-col md:flex-row items-center gap-8">
                            <div class="w-full md:w-1/2 md:text-right pr-0 md:pr-12">
                                <span class="inline-block px-3 py-1 bg-secondary text-white font-mono text-xs font-bold rounded-full mb-2">1986</span>
                                <h3 class="text-lg font-bold text-slate-900">Vrajlal Thumar finds the foundry</h3>
                                <p class="text-slate-600 text-xs leading-relaxed mt-1">Single ferrous casting operation, Rajkot, Gujarat. Built on one principle: make it right the first time.</p>
                            </div>
                            <div class="w-6 h-6 rounded-full bg-secondary border-4 border-white shadow-md z-10 hidden md:block flex-shrink-0"></div>
                            <div class="w-full md:w-1/2 pl-0 md:pl-12"></div>
                        </div>

                        <!-- 1990s -->
                        <div class="flex flex-col md:flex-row items-center gap-8">
                            <div class="w-full md:w-1/2 pr-0 md:pr-12"></div>
                            <div class="w-6 h-6 rounded-full bg-secondary border-4 border-white shadow-md z-10 hidden md:block flex-shrink-0"></div>
                            <div class="w-full md:w-1/2 pl-0 md:pl-12">
                                <span class="inline-block px-3 py-1 bg-secondary text-white font-mono text-xs font-bold rounded-full mb-2">1990s</span>
                                <h3 class="text-lg font-bold text-slate-900">Shell mould & investment casting added</h3>
                                <p class="text-slate-600 text-xs leading-relaxed mt-1">Process expansion driven by customer demand. First export enquiries from international OEMs arrive.</p>
                            </div>
                        </div>

                        <!-- 2000s -->
                        <div class="flex flex-col md:flex-row items-center gap-8">
                            <div class="w-full md:w-1/2 md:text-right pr-0 md:pr-12">
                                <span class="inline-block px-3 py-1 bg-secondary text-white font-mono text-xs font-bold rounded-full mb-2">2000s</span>
                                <h3 class="text-lg font-bold text-slate-900">CNC machining + in-house inspection</h3>
                                <p class="text-slate-600 text-xs leading-relaxed mt-1">CMM, spectrometer, hardness testing — all in-house. Quality system formalised. First European OEM supply established.</p>
                            </div>
                            <div class="w-6 h-6 rounded-full bg-secondary border-4 border-white shadow-md z-10 hidden md:block flex-shrink-0"></div>
                            <div class="w-full md:w-1/2 pl-0 md:pl-12"></div>
                        </div>

                        <!-- 2010 -->
                        <div class="flex flex-col md:flex-row items-center gap-8">
                            <div class="w-full md:w-1/2 pr-0 md:pr-12"></div>
                            <div class="w-6 h-6 rounded-full bg-secondary border-4 border-white shadow-md z-10 hidden md:block flex-shrink-0"></div>
                            <div class="w-full md:w-1/2 pl-0 md:pl-12">
                                <span class="inline-block px-3 py-1 bg-secondary text-white font-mono text-xs font-bold rounded-full mb-2">2010</span>
                                <h3 class="text-lg font-bold text-slate-900">ISO 9001 certified</h3>
                                <p class="text-slate-600 text-xs leading-relaxed mt-1">Third-party quality certification. Export programme formalised. Active supply to OEMs in Europe and Middle East.</p>
                            </div>
                        </div>

                        <!-- 2015 -->
                        <div class="flex flex-col md:flex-row items-center gap-8">
                            <div class="w-full md:w-1/2 md:text-right pr-0 md:pr-12">
                                <span class="inline-block px-3 py-1 bg-secondary text-white font-mono text-xs font-bold rounded-full mb-2">2015</span>
                                <h3 class="text-lg font-bold text-slate-900">Keyur Thumar joins — second generation</h3>
                                <p class="text-slate-600 text-xs leading-relaxed mt-1">Engineering-led business development begins. JK Forge Industries formally established as the global OEM partnership brand.</p>
                            </div>
                            <div class="w-6 h-6 rounded-full bg-secondary border-4 border-white shadow-md z-10 hidden md:block flex-shrink-0"></div>
                            <div class="w-full md:w-1/2 pl-0 md:pl-12"></div>
                        </div>

                        <!-- 2018 -->
                        <div class="flex flex-col md:flex-row items-center gap-8">
                            <div class="w-full md:w-1/2 pr-0 md:pr-12"></div>
                            <div class="w-6 h-6 rounded-full bg-secondary border-4 border-white shadow-md z-10 hidden md:block flex-shrink-0"></div>
                            <div class="w-full md:w-1/2 pl-0 md:pl-12">
                                <span class="inline-block px-3 py-1 bg-secondary text-white font-mono text-xs font-bold rounded-full mb-2">2018</span>
                                <h3 class="text-lg font-bold text-slate-900">ZED Silver certification + DUNS registration</h3>
                                <p class="text-slate-600 text-xs leading-relaxed mt-1">Government of India's Zero Defect Zero Effect programme. Global trade identity formalised.</p>
                            </div>
                        </div>

                        <!-- 2026 -->
                        <div class="flex flex-col md:flex-row items-center gap-8">
                            <div class="w-full md:w-1/2 md:text-right pr-0 md:pr-12">
                                <span class="inline-block px-3 py-1 bg-secondary text-white font-mono text-xs font-bold rounded-full mb-2">2026</span>
                                <h3 class="text-lg font-bold text-slate-900">13 processes - 10+ countries - Active USA supply</h3>
                                <p class="text-slate-600 text-xs leading-relaxed mt-1">Active OEM supply to USA, Germany, Italy, France, Austria, Canada, Israel. The standard has not changed since 1986.</p>
                            </div>
                            <div class="w-6 h-6 rounded-full bg-secondary border-4 border-white shadow-md z-10 hidden md:block flex-shrink-0"></div>
                            <div class="w-full md:w-1/2 pl-0 md:pl-12"></div>
                        </div>
                    </div>
                </div>
            </div>
        </section>

        <!-- THE PHILOSOPHY SECTION (Dark Navy Background) -->
        <section class="py-24 bg-[#050914] text-white relative overflow-hidden">
            <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
                <div class="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center mb-16">
                    <div class="lg:col-span-8">
                        <span class="text-secondary font-mono text-xs font-bold uppercase tracking-[0.3em] block mb-3">THE PHILOSOPHY</span>
                        <h2 class="text-3xl md:text-5xl font-extrabold text-white tracking-tight leading-tight mb-4">
                            The Penrose Triangle. Three Sides. One Standard.
                        </h2>
                        <p class="text-slate-300 text-base md:text-lg leading-relaxed font-light max-w-3xl">
                            Our logo is an impossible object — it only exists when all three sides hold perfectly: Engineering Intelligence. Manufacturing Control. Quality Ownership. This is how we operate on every order, for every customer, every time.
                        </p>
                    </div>
                    <div class="lg:col-span-4 flex justify-center lg:justify-end">
                        <div class="w-36 h-36 border-2 border-secondary/40 rounded-2xl flex items-center justify-center text-6xl text-secondary bg-secondary/10 shadow-[0_0_50px_rgba(19,99,166,0.25)]">
                            <i class="fas fa-shapes"></i>
                        </div>
                    </div>
                </div>

                <!-- 3 Dark Cards -->
                <div class="grid grid-cols-1 md:grid-cols-3 gap-8">
                    <!-- Card 1 -->
                    <div class="bg-[#0b1329] p-8 rounded-2xl border border-white/10 flex flex-col justify-between hover:border-secondary/60 transition-all group">
                        <div>
                            <div class="flex items-center justify-between mb-6">
                                <span class="text-xs font-mono text-slate-400">01 / 03</span>
                                <i class="fas fa-cogs text-secondary text-xl"></i>
                            </div>
                            <h3 class="text-xl font-bold text-white mb-3">Engineering Intelligence</h3>
                            <p class="text-slate-300 text-xs leading-relaxed font-light mb-6">
                                We review every drawing before we quote. DFM feedback, process selection rationale, material grade recommendation — all provided before any commercial commitment.
                            </p>
                        </div>
                        <div class="p-3 bg-secondary/15 border border-secondary/30 rounded-lg text-[11px] font-mono text-sky-300">
                            <i class="fas fa-check-circle mr-1 text-secondary"></i> 35-40% cost reductions through engineering-led process conversion
                        </div>
                    </div>

                    <!-- Card 2 -->
                    <div class="bg-[#0b1329] p-8 rounded-2xl border border-white/10 flex flex-col justify-between hover:border-secondary/60 transition-all group">
                        <div>
                            <div class="flex items-center justify-between mb-6">
                                <span class="text-xs font-mono text-slate-400">02 / 03</span>
                                <i class="fas fa-industry text-secondary text-xl"></i>
                            </div>
                            <h3 class="text-xl font-bold text-white mb-3">Manufacturing Control</h3>
                            <p class="text-slate-300 text-xs leading-relaxed font-light mb-6">
                                In-house CNC/VMC/HMC machining, die casting, forging, CMM inspection. In-house spectrometer. In-house hardness and surface finish testing.
                            </p>
                        </div>
                        <div class="p-3 bg-secondary/15 border border-secondary/30 rounded-lg text-[11px] font-mono text-sky-300">
                            <i class="fas fa-check-circle mr-1 text-secondary"></i> Every critical dimension measured at Rajkot before dispatch
                        </div>
                    </div>

                    <!-- Card 3 -->
                    <div class="bg-[#0b1329] p-8 rounded-2xl border border-white/10 flex flex-col justify-between hover:border-secondary/60 transition-all group">
                        <div>
                            <div class="flex items-center justify-between mb-6">
                                <span class="text-xs font-mono text-slate-400">03 / 03</span>
                                <i class="fas fa-shield-alt text-secondary text-xl"></i>
                            </div>
                            <h3 class="text-xl font-bold text-white mb-3">Quality Ownership</h3>
                            <p class="text-slate-300 text-xs leading-relaxed font-light mb-6">
                                We do not pass problems to sub-suppliers. We do not ship knowing a component is non-conforming. 17 POs - Zero rejections - 3 years.
                            </p>
                        </div>
                        <div class="p-3 bg-secondary/15 border border-secondary/30 rounded-lg text-[11px] font-mono text-sky-300">
                            <i class="fas fa-check-circle mr-1 text-secondary"></i> 17 POs - Zero rejections - 3 years - Active USA freight railroad OEM
                        </div>
                    </div>
                </div>
            </div>
        </section>

        <!-- CERTIFICATIONS SECTION -->
        <section class="py-24 bg-white text-slate-900 border-b border-slate-200">
            <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div class="text-center mb-16">
                    <span class="text-secondary font-mono text-xs font-bold uppercase tracking-[0.3em] block mb-3">CERTIFIED. AUDITED. VERIFIED.</span>
                    <h2 class="text-3xl md:text-5xl font-extrabold text-slate-900 tracking-tight">
                        Certifications Are Evidence. Not Decoration.
                    </h2>
                </div>

                <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
                    <!-- ISO -->
                    <div class="bg-slate-50 p-8 rounded-2xl border border-slate-200 text-center flex flex-col items-center justify-between hover:shadow-lg hover:border-secondary/40 transition-all">
                        <div>
                            <div class="w-16 h-16 bg-secondary/10 text-secondary rounded-full flex items-center justify-center text-2xl mx-auto mb-6">
                                <i class="fas fa-award"></i>
                            </div>
                            <h3 class="text-lg font-bold text-slate-900 mb-2">ISO 9001:2015</h3>
                            <p class="text-slate-600 text-xs leading-relaxed font-light mb-6">
                                International quality management standard. Annual third-party surveillance audit. Full QMS documentation maintained and accessible.
                            </p>
                        </div>
                        <span class="px-3 py-1 bg-slate-200 text-slate-700 text-[11px] font-mono font-bold rounded-full">Certified - Annual Audit</span>
                    </div>

                    <!-- ZED -->
                    <div class="bg-slate-50 p-8 rounded-2xl border border-slate-200 text-center flex flex-col items-center justify-between hover:shadow-lg hover:border-secondary/40 transition-all">
                        <div>
                            <div class="w-16 h-16 bg-secondary/10 text-secondary rounded-full flex items-center justify-center text-2xl mx-auto mb-6">
                                <i class="fas fa-medal"></i>
                            </div>
                            <h3 class="text-lg font-bold text-slate-900 mb-2">ZED Silver</h3>
                            <p class="text-slate-600 text-xs leading-relaxed font-light mb-6">
                                Government of India's Zero Defect Zero Effect scheme. Recognises manufacturing quality excellence and sustainable production practices.
                            </p>
                        </div>
                        <span class="px-3 py-1 bg-slate-200 text-slate-700 text-[11px] font-mono font-bold rounded-full">Govt. of India - 2018</span>
                    </div>

                    <!-- DUNS -->
                    <div class="bg-slate-50 p-8 rounded-2xl border border-slate-200 text-center flex flex-col items-center justify-between hover:shadow-lg hover:border-secondary/40 transition-all">
                        <div>
                            <div class="w-16 h-16 bg-secondary/10 text-secondary rounded-full flex items-center justify-center text-2xl mx-auto mb-6">
                                <i class="fas fa-globe"></i>
                            </div>
                            <h3 class="text-lg font-bold text-slate-900 mb-2">DUNS Registered</h3>
                            <p class="text-slate-600 text-xs leading-relaxed font-light mb-6">
                                Dun & Bradstreet registered business identity. Globally recognised for international trade verification and OEM supplier qualification.
                            </p>
                        </div>
                        <span class="px-3 py-1 bg-slate-200 text-slate-700 text-[11px] font-mono font-bold rounded-full">D&B - Global Trade</span>
                    </div>

                    <!-- NABL -->
                    <div class="bg-slate-50 p-8 rounded-2xl border border-slate-200 text-center flex flex-col items-center justify-between hover:shadow-lg hover:border-secondary/40 transition-all">
                        <div>
                            <div class="w-16 h-16 bg-secondary/10 text-secondary rounded-full flex items-center justify-center text-2xl mx-auto mb-6">
                                <i class="fas fa-vial"></i>
                            </div>
                            <h3 class="text-lg font-bold text-slate-900 mb-2">NABL-Aligned Lab</h3>
                            <p class="text-slate-600 text-xs leading-relaxed font-light mb-6">
                                In-house testing laboratory aligned with NABL standards. Spectrometer, CMM, hardness tester, and profilometer — all calibrated.
                            </p>
                        </div>
                        <span class="px-3 py-1 bg-slate-200 text-slate-700 text-[11px] font-mono font-bold rounded-full">In-House - Calibrated</span>
                    </div>
                </div>
            </div>
        </section>

        <!-- THE TEAM SECTION -->
        <section class="py-24 bg-slate-50 text-slate-900 border-b border-slate-200">
            <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div class="text-center mb-16">
                    <span class="text-secondary font-mono text-xs font-bold uppercase tracking-[0.3em] block mb-3">THE TEAM</span>
                    <h2 class="text-3xl md:text-5xl font-extrabold text-slate-900 tracking-tight">
                        The People Behind the Brand Behind the Brand.
                    </h2>
                </div>

                <!-- Team Grid (9 Leadership Cards) -->
                <div class="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-8">
                    <!-- Member 1 -->
                    <div class="text-center group">
                        <div class="w-28 h-28 mx-auto rounded-full overflow-hidden mb-4 border-2 border-slate-200 group-hover:border-secondary transition-colors shadow-md">
                            <img src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=300&q=80" alt="Vrajlal Thumar" class="w-full h-full object-cover filter grayscale group-hover:grayscale-0 transition-all duration-300">
                        </div>
                        <h4 class="font-bold text-slate-900 text-sm">Vrajlal Thumar</h4>
                        <p class="text-slate-500 text-xs font-light">Managing Director</p>
                        <a href="https://linkedin.com" target="_blank" class="inline-flex items-center gap-1 text-[10px] font-mono text-secondary hover:underline mt-1">
                            <i class="fab fa-linkedin"></i> LinkedIn
                        </a>
                    </div>

                    <!-- Member 2 -->
                    <div class="text-center group">
                        <div class="w-28 h-28 mx-auto rounded-full overflow-hidden mb-4 border-2 border-slate-200 group-hover:border-secondary transition-colors shadow-md">
                            <img src="https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=300&q=80" alt="Keyur Thumar" class="w-full h-full object-cover filter grayscale group-hover:grayscale-0 transition-all duration-300">
                        </div>
                        <h4 class="font-bold text-slate-900 text-sm">Keyur Thumar</h4>
                        <p class="text-slate-500 text-xs font-light">Director - Business Dev</p>
                        <a href="https://linkedin.com" target="_blank" class="inline-flex items-center gap-1 text-[10px] font-mono text-secondary hover:underline mt-1">
                            <i class="fab fa-linkedin"></i> LinkedIn
                        </a>
                    </div>

                    <!-- Member 3 -->
                    <div class="text-center group">
                        <div class="w-28 h-28 mx-auto rounded-full overflow-hidden mb-4 border-2 border-slate-200 group-hover:border-secondary transition-colors shadow-md">
                            <img src="https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&w=300&q=80" alt="Ankita Gajera" class="w-full h-full object-cover filter grayscale group-hover:grayscale-0 transition-all duration-300">
                        </div>
                        <h4 class="font-bold text-slate-900 text-sm">Ankita Gajera</h4>
                        <p class="text-slate-500 text-xs font-light">Director - Finance</p>
                        <a href="https://linkedin.com" target="_blank" class="inline-flex items-center gap-1 text-[10px] font-mono text-secondary hover:underline mt-1">
                            <i class="fab fa-linkedin"></i> LinkedIn
                        </a>
                    </div>

                    <!-- Member 4 -->
                    <div class="text-center group">
                        <div class="w-28 h-28 mx-auto rounded-full overflow-hidden mb-4 border-2 border-slate-200 group-hover:border-secondary transition-colors shadow-md">
                            <img src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?auto=format&fit=crop&w=300&q=80" alt="Manoj Satkar" class="w-full h-full object-cover filter grayscale group-hover:grayscale-0 transition-all duration-300">
                        </div>
                        <h4 class="font-bold text-slate-900 text-sm">Manoj Satkar</h4>
                        <p class="text-slate-500 text-xs font-light">Chief Operating Officer</p>
                        <a href="https://linkedin.com" target="_blank" class="inline-flex items-center gap-1 text-[10px] font-mono text-secondary hover:underline mt-1">
                            <i class="fab fa-linkedin"></i> LinkedIn
                        </a>
                    </div>

                    <!-- Member 5 -->
                    <div class="text-center group">
                        <div class="w-28 h-28 mx-auto rounded-full overflow-hidden mb-4 border-2 border-slate-200 group-hover:border-secondary transition-colors shadow-md">
                            <img src="https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?auto=format&fit=crop&w=300&q=80" alt="Paresh Asodariya" class="w-full h-full object-cover filter grayscale group-hover:grayscale-0 transition-all duration-300">
                        </div>
                        <h4 class="font-bold text-slate-900 text-sm">Paresh Asodariya</h4>
                        <p class="text-slate-500 text-xs font-light">Export & Logistics Manager</p>
                        <a href="https://linkedin.com" target="_blank" class="inline-flex items-center gap-1 text-[10px] font-mono text-secondary hover:underline mt-1">
                            <i class="fab fa-linkedin"></i> LinkedIn
                        </a>
                    </div>
                </div>
            </div>
        </section>

        <!-- SIX REASONS SECTION (Dark Navy Background) -->
        <section class="py-24 bg-[#050914] text-white relative overflow-hidden">
            <!-- Background Watermark Text -->
            <div class="absolute inset-0 flex items-center justify-center pointer-events-none select-none overflow-hidden opacity-5">
                <span class="text-[12vw] font-black uppercase tracking-tighter text-white whitespace-nowrap">JK FORGE</span>
            </div>

            <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
                <div class="max-w-3xl mb-16">
                    <h2 class="text-3xl md:text-5xl font-extrabold text-white tracking-tight leading-tight mb-4">
                        Six Reasons Global OEMs Choose JK Forge.
                    </h2>
                    <p class="text-slate-400 text-sm md:text-base font-light">
                        Not generic capability claims. Six specific, evidenced reasons — each backed by a real programme or a real measurement taken at JK Forge's facility in Rajkot.
                    </p>
                </div>

                <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    <!-- Reason 1 -->
                    <div class="bg-[#0b1329] p-8 rounded-2xl border border-white/10 flex flex-col justify-between hover:border-secondary/60 transition-all group">
                        <div>
                            <div class="flex items-center justify-between mb-6">
                                <i class="fas fa-drafting-compass text-secondary text-2xl"></i>
                                <span class="text-3xl font-black font-mono text-white/20 group-hover:text-secondary/40 transition-colors">01</span>
                            </div>
                            <h3 class="text-lg font-bold text-white mb-2">Engineering Before Production</h3>
                            <p class="text-slate-400 text-xs leading-relaxed font-light mb-6">
                                DFM review on every drawing before quoting. Process selection rationale. Material grade recommendation.
                            </p>
                        </div>
                        <div class="p-3 bg-secondary/15 border border-secondary/30 rounded-lg text-[11px] font-mono text-sky-300">
                            <i class="fas fa-check mr-1 text-secondary"></i> 35-40% cost reductions through engineering-led process conversion
                        </div>
                    </div>

                    <!-- Reason 2 -->
                    <div class="bg-[#0b1329] p-8 rounded-2xl border border-white/10 flex flex-col justify-between hover:border-secondary/60 transition-all group">
                        <div>
                            <div class="flex items-center justify-between mb-6">
                                <i class="fas fa-project-diagram text-secondary text-2xl"></i>
                                <span class="text-3xl font-black font-mono text-white/20 group-hover:text-secondary/40 transition-colors">02</span>
                            </div>
                            <h3 class="text-lg font-bold text-white mb-2">13 Processes. One Quality System.</h3>
                            <p class="text-slate-400 text-xs leading-relaxed font-light mb-6">
                                Sand casting, investment casting, die casting, forging, CNC machining, gears, sheet metal, MIM, 3D printing, and assembly — under one ISO 9001 system.
                            </p>
                        </div>
                        <div class="p-3 bg-secondary/15 border border-secondary/30 rounded-lg text-[11px] font-mono text-sky-300">
                            <i class="fas fa-check mr-1 text-secondary"></i> Single-source accountability for 13-process active OEM programme
                        </div>
                    </div>

                    <!-- Reason 3 -->
                    <div class="bg-[#0b1329] p-8 rounded-2xl border border-white/10 flex flex-col justify-between hover:border-secondary/60 transition-all group">
                        <div>
                            <div class="flex items-center justify-between mb-6">
                                <i class="fas fa-search-plus text-secondary text-2xl"></i>
                                <span class="text-3xl font-black font-mono text-white/20 group-hover:text-secondary/40 transition-colors">03</span>
                            </div>
                            <h3 class="text-lg font-bold text-white mb-2">In-House Inspection. No Exceptions.</h3>
                            <p class="text-slate-400 text-xs leading-relaxed font-light mb-6">
                                CMM, spectrometer, hardness tester, profilometer — all in-house. Every critical feature measured before dispatch. Verified by JK Forge's own equipment.
                            </p>
                        </div>
                        <div class="p-3 bg-secondary/15 border border-secondary/30 rounded-lg text-[11px] font-mono text-sky-300">
                            <i class="fas fa-check mr-1 text-secondary"></i> CMM inspection reports provided on a batch-by-batch basis
                        </div>
                    </div>

                    <!-- Reason 4 -->
                    <div class="bg-[#0b1329] p-8 rounded-2xl border border-white/10 flex flex-col justify-between hover:border-secondary/60 transition-all group">
                        <div>
                            <div class="flex items-center justify-between mb-6">
                                <i class="fas fa-globe-americas text-secondary text-2xl"></i>
                                <span class="text-3xl font-black font-mono text-white/20 group-hover:text-secondary/40 transition-colors">04</span>
                            </div>
                            <h3 class="text-lg font-bold text-white mb-2">Proven Export Track Record</h3>
                            <p class="text-slate-400 text-xs leading-relaxed font-light mb-6">
                                Active OEM supply to USA, Germany, Italy, France, Austria, Canada, Israel, and the Middle East. 10+ export countries with full customs compliance.
                            </p>
                        </div>
                        <div class="p-3 bg-secondary/15 border border-secondary/30 rounded-lg text-[11px] font-mono text-sky-300">
                            <i class="fas fa-check mr-1 text-secondary"></i> Active OEM supply across 10+ countries — documented, ongoing
                        </div>
                    </div>

                    <!-- Reason 5 -->
                    <div class="bg-[#0b1329] p-8 rounded-2xl border border-white/10 flex flex-col justify-between hover:border-secondary/60 transition-all group">
                        <div>
                            <div class="flex items-center justify-between mb-6">
                                <i class="fas fa-file-contract text-secondary text-2xl"></i>
                                <span class="text-3xl font-black font-mono text-white/20 group-hover:text-secondary/40 transition-colors">05</span>
                            </div>
                            <h3 class="text-lg font-bold text-white mb-2">PPAP, Material Certs, CMM Reports.</h3>
                            <p class="text-slate-400 text-xs leading-relaxed font-light mb-6">
                                PPAP Level 3 packages, CMM dimensional reports, material test certificates from in-house spectrometer — all generated from real data.
                            </p>
                        </div>
                        <div class="p-3 bg-secondary/15 border border-secondary/30 rounded-lg text-[11px] font-mono text-sky-300">
                            <i class="fas fa-check mr-1 text-secondary"></i> PPAP Level 3 accepted — automotive OEM, 5-year contract
                        </div>
                    </div>

                    <!-- Reason 6 -->
                    <div class="bg-[#0b1329] p-8 rounded-2xl border border-white/10 flex flex-col justify-between hover:border-secondary/60 transition-all group">
                        <div>
                            <div class="flex items-center justify-between mb-6">
                                <i class="fas fa-user-shield text-secondary text-2xl"></i>
                                <span class="text-3xl font-black font-mono text-white/20 group-hover:text-secondary/40 transition-colors">06</span>
                            </div>
                            <h3 class="text-lg font-bold text-white mb-2">The MD Knows Your Name.</h3>
                            <p class="text-slate-400 text-xs leading-relaxed font-light mb-6">
                                Keyur Thumar personally manages key OEM relationships and is directly reachable on WhatsApp. When a decision needs making, you reach the person who can make it.
                            </p>
                        </div>
                        <div class="p-3 bg-secondary/15 border border-secondary/30 rounded-lg text-[11px] font-mono text-sky-300">
                            <i class="fas fa-check mr-1 text-secondary"></i> Direct MD contact for all active customers — +91 7600066117
                        </div>
                    </div>
                </div>
            </div>
        </section>

        <!-- FLOATING CTA CARD SECTION -->
        <section class="py-20 bg-slate-100 relative">
            <div class="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
                <div class="bg-white rounded-3xl border border-slate-200 shadow-2xl p-8 md:p-14 text-center relative overflow-hidden">
                    <span class="text-secondary font-mono text-xs font-bold uppercase tracking-[0.3em] block mb-3">START A PARTNERSHIP</span>
                    <h2 class="text-3xl md:text-5xl font-extrabold text-slate-900 tracking-tight mb-4">
                        Ready to Build Something Together?
                    </h2>
                    <p class="text-slate-600 text-base md:text-lg font-light max-w-2xl mx-auto mb-8">
                        Share your drawing. Tell us your requirement. An engineer responds with engineering feedback — not a sales pitch — within 24 hours.
                    </p>

                    <div class="flex flex-col sm:flex-row items-center justify-center gap-4 mb-8">
                        <a href="contact.html" class="w-full sm:w-auto px-8 py-4 bg-gradient-to-r from-primary via-secondary to-blue-600 hover:from-secondary hover:to-primary text-white font-bold rounded-xl shadow-lg hover:shadow-xl transition-all text-sm uppercase tracking-wider flex items-center justify-center gap-2">
                            Share Your Drawing <i class="fas fa-arrow-right"></i>
                        </a>
                    </div>

                    <div class="flex flex-wrap items-center justify-center gap-x-8 gap-y-2 text-xs font-mono text-slate-500 pt-6 border-t border-slate-100">
                        <span><i class="fab fa-whatsapp text-emerald-500 text-sm mr-1"></i> +91 7600066117</span>
                        <span><i class="fas fa-envelope text-secondary text-sm mr-1"></i> info@jkforgeindia.com</span>
                    </div>
                </div>
            </div>
        </section>
    `;
}
