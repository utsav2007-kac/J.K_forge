function renderCompanyPage(title, slug) {
    const displayTitle = title.replace(/-/g, ' ').replace(/\b\w/g, l => l.toUpperCase());
    
    return `
        <!-- Company Header -->
        <div class="bg-gray-50 dark:bg-[#050914] text-gray-900 dark:text-white pt-40 pb-20 relative overflow-hidden border-b border-gray-200 dark:border-white/10 transition-colors duration-300">
            <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center gsap-3d-reveal">
                <div class="inline-block mb-4">
                    <div class="w-16 h-1 bg-secondary mx-auto mb-4"></div>
                    <span class="text-secondary font-mono text-xs font-bold uppercase tracking-[0.2em]">Corporate Profile</span>
                </div>
                <h1 class="text-4xl md:text-6xl font-black mb-6 tracking-tight uppercase text-transparent bg-clip-text bg-gradient-to-r from-gray-900 to-gray-500 dark:from-white dark:to-gray-400">${displayTitle}</h1>
                <p class="text-lg text-gray-600 dark:text-gray-400 font-light max-w-2xl mx-auto">Committed to engineering excellence, sustainable practices, and building a legacy of trust in the forging industry.</p>
            </div>
        </div>

        <!-- Corporate Content -->
        <section class="py-16 bg-white dark:bg-[#0a192f] transition-colors duration-300">
            <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                
                <div class="grid grid-cols-1 lg:grid-cols-12 gap-12">
                    <!-- Text Content -->
                    <div class="lg:col-span-8 gsap-3d-reveal">
                        <div class="prose prose-lg text-gray-600 dark:text-gray-400 max-w-none font-light leading-relaxed">
                            <p class="mb-6"><strong class="text-gray-900 dark:text-white">JK Forge</strong> is built on a foundation of precision and trust. When you look at our <strong>${displayTitle}</strong> operations, you see the culmination of years of metallurgical expertise and a relentless drive for perfection.</p>
                            
                            <p class="mb-6">Our mission is not merely to manufacture parts, but to forge partnerships. We invest heavily in our people, our technology, and our processes to ensure that every component that leaves our facility is a testament to our dedication.</p>
                            
                            <h3 class="text-2xl font-bold text-gray-900 dark:text-white mt-12 mb-6 uppercase tracking-wide border-b border-gray-200 dark:border-white/10 pb-4">Core Values</h3>
                            <ul class="space-y-4 list-none pl-0">
                                <li class="flex items-start">
                                    <i class="fas fa-check text-secondary mt-1.5 mr-3"></i>
                                    <span><strong>Integrity:</strong> Uncompromising ethical standards in all business dealings.</span>
                                </li>
                                <li class="flex items-start">
                                    <i class="fas fa-check text-secondary mt-1.5 mr-3"></i>
                                    <span><strong>Precision:</strong> Exacting tolerances and stringent quality control.</span>
                                </li>
                                <li class="flex items-start">
                                    <i class="fas fa-check text-secondary mt-1.5 mr-3"></i>
                                    <span><strong>Innovation:</strong> Continuously adopting modern technologies to improve efficiency.</span>
                                </li>
                            </ul>
                        </div>
                    </div>
                    
                    <!-- Sidebar Cards -->
                    <div class="lg:col-span-4 space-y-6 gsap-heavy-drop">
                        <div class="bg-gray-50 dark:bg-[#050914] p-8 rounded-xl border border-gray-200 dark:border-white/5 relative overflow-hidden group">
                            <div class="absolute top-0 left-0 w-1 h-full bg-secondary"></div>
                            <h4 class="text-xl font-bold text-gray-900 dark:text-white mb-2 uppercase">Vision</h4>
                            <p class="text-sm text-gray-600 dark:text-gray-400 font-light">To be the globally preferred partner for highly critical forged and machined components.</p>
                        </div>
                        
                        <div class="bg-gray-50 dark:bg-[#050914] p-8 rounded-xl border border-gray-200 dark:border-white/5 relative overflow-hidden group">
                            <div class="absolute top-0 left-0 w-1 h-full bg-secondary"></div>
                            <h4 class="text-xl font-bold text-gray-900 dark:text-white mb-2 uppercase">Mission</h4>
                            <p class="text-sm text-gray-600 dark:text-gray-400 font-light">To deliver zero-defect products on time, every time, while fostering a culture of continuous improvement.</p>
                        </div>
                    </div>
                </div>
                
            </div>
        </section>
    `;
}
