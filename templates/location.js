function renderLocationPage(title, slug) {
    const displayTitle = title && title !== 'locations' ? title.replace(/-/g, ' ').replace(/\b\w/g, l => l.toUpperCase()) : 'Locations';
    const allLocations = window.pageContent?.locationsData || {};
    
    let cardsHtml = '';
    
    for (const [path, data] of Object.entries(allLocations)) {
        if (!data) continue;
        const pageSlug = path.replace(/^\//, '');
        
        let cleanDesc = data.description1 || '';
        const quoteIdx = cleanDesc.indexOf('Get a Quote');
        if (quoteIdx !== -1) {
            cleanDesc = cleanDesc.substring(quoteIdx + 11);
            const jkIdx = cleanDesc.indexOf('JK Forge');
            if (jkIdx !== -1 && jkIdx < 250) cleanDesc = cleanDesc.substring(jkIdx);
        }

        cardsHtml += `
        <a href="location.html?page=${pageSlug}" class="group bg-white dark:bg-[#050914] rounded-2xl border border-gray-200 dark:border-white/10 hover:border-secondary transition-all duration-300 hover:-translate-y-2 hover:shadow-xl overflow-hidden block">
            <div class="aspect-w-16 aspect-h-9 bg-gray-100 dark:bg-[#0c2b5e] relative overflow-hidden h-48 border-b border-gray-200 dark:border-white/10">
                <img src="${data.image || './images/facility.jpg'}" alt="${data.title}" class="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 ease-in-out">
                <div class="absolute inset-0 bg-gradient-to-t from-[#0b1426]/80 via-transparent to-transparent z-10"></div>
                <div class="absolute bottom-3 left-4 z-20">
                    <span class="px-3 py-1 rounded-full text-[10px] font-bold text-white bg-secondary/80 backdrop-blur-md uppercase tracking-wider font-mono">${data.subtitle || 'Global Location'}</span>
                </div>
            </div>
            <div class="p-6">
                <h3 class="text-xl font-bold text-gray-900 dark:text-white mb-2 group-hover:text-secondary transition-colors duration-300">${data.title}</h3>
                <p class="text-gray-600 dark:text-gray-400 text-sm font-light line-clamp-2 leading-relaxed">${cleanDesc || 'Global forging supply and manufacturing hub.'}</p>
                <div class="mt-4 pt-4 border-t border-gray-100 dark:border-white/5 flex items-center justify-between text-xs font-mono text-secondary font-bold group-hover:translate-x-1 transition-transform">
                    <span>VIEW LOCATION</span>
                    <i class="fas fa-arrow-right"></i>
                </div>
            </div>
        </a>
        `;
    }

    if (!cardsHtml) {
        cardsHtml = `<div class="col-span-full text-center text-gray-500 py-10 font-mono">No location data available.</div>`;
    }

    return `
        <!-- Hero Header -->
        <div class="bg-[#0b1426] dark:bg-[#050914] text-white pt-32 pb-20 relative overflow-hidden transition-colors duration-300">
            <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
                <div class="flex items-center gap-3 mb-4">
                    <div class="w-8 h-[2px] bg-[#f97316]"></div>
                    <span class="text-[#f97316] font-mono text-xs font-bold uppercase tracking-widest">GLOBAL DISTRIBUTION & MANUFACTURING</span>
                </div>
                <h1 class="text-4xl md:text-6xl font-black mb-6 tracking-tight text-white uppercase">OUR <span class="text-transparent bg-clip-text bg-gradient-to-r from-secondary to-accent">${displayTitle}</span></h1>
                <p class="text-gray-300 text-lg max-w-2xl font-light leading-relaxed">Strategically serving OEMs and EPC contractors across Rajkot, India, North America, Europe, and Asia-Pacific.</p>
            </div>
        </div>

        <section class="py-20 bg-gray-50 dark:bg-[#0a192f] transition-colors duration-300">
            <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    ${cardsHtml}
                </div>
            </div>
        </section>
    `;
}
