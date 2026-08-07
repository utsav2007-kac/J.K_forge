function renderComponentPage(title, slug) {
    const displayTitle = title && title !== 'components' ? title.replace(/-/g, ' ').replace(/\b\w/g, l => l.toUpperCase()) : 'Components';
    
    const allComponents = window.pageContent?.componentsData || {};
    
    let html = '';
    let delay = 0;
    
    for (const [path, data] of Object.entries(allComponents)) {
        if (!data) continue;
        const pageSlug = path.replace(/^\//, '');
        
        let cleanDesc = data.description1 || '';
        const quoteIdx = cleanDesc.indexOf('Get a Quote');
        if (quoteIdx !== -1) {
            cleanDesc = cleanDesc.substring(quoteIdx + 11);
            const jkIdx = cleanDesc.indexOf('JK Forge');
            if (jkIdx !== -1 && jkIdx < 250) cleanDesc = cleanDesc.substring(jkIdx);
        }

        html += `
        <a href="components.html?page=${pageSlug}" class="group bg-gray-50 dark:bg-[#050914] rounded-xl border border-gray-200 dark:border-white/10 hover-metallic transition-all duration-500 hover:-translate-y-3 hover:shadow-[0_15px_40px_rgba(49,130,206,0.2)] overflow-hidden block slide-up-card" style="animation-delay: ${delay}ms;">
            <div class="aspect-w-4 aspect-h-3 bg-gray-200 dark:bg-[#1b365d] relative overflow-hidden h-48 border-b border-gray-200 dark:border-white/10">
                <img src="${data.image || './images/facility.jpg'}" alt="${data.title}" class="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 ease-in-out">
                <div class="absolute inset-0 bg-gradient-to-t from-gray-50 dark:from-[#050914] to-transparent opacity-60 z-10"></div>
            </div>
            <div class="p-6 relative z-20">
                <div class="flex items-center gap-2 mb-3">
                    <div class="w-2 h-2 rounded-full bg-secondary animate-pulse"></div>
                    <div class="text-[10px] font-bold text-secondary dark:text-accent font-mono uppercase tracking-widest">${data.subtitle || 'Forged Component'}</div>
                </div>
                <h3 class="text-xl font-bold text-gray-900 dark:text-white mb-2 group-hover:text-secondary transition-colors duration-300">${data.title}</h3>
                <p class="text-gray-600 dark:text-gray-400 text-sm font-light line-clamp-2">${cleanDesc || 'Precision engineered forged components.'}</p>
            </div>
        </a>
        `;
        delay += 50;
        if (delay > 500) delay = 0;
    }

    if (!html) {
        html = `<div class="col-span-full text-center text-gray-500 py-10 font-mono">No component data available yet. Please run the scraper.</div>`;
    }

    return `
        <!-- Page Header -->
        <div class="bg-gray-50 dark:bg-[#050914] text-gray-900 dark:text-white pt-32 pb-20 relative overflow-hidden border-b border-gray-200 dark:border-white/5 transition-colors duration-300">
            <div class="absolute inset-0 opacity-20" style="background-image: radial-gradient(circle at 50% 0%, #1b365d 0%, transparent 70%);"></div>
            <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center reveal active">
                <div class="inline-block mb-6 px-4 py-1 rounded-full border border-secondary/30 bg-white dark:bg-[#0a192f] text-secondary dark:text-accent font-mono text-xs tracking-[0.2em] uppercase">
                    Precision Engineering
                </div>
                <h1 class="text-5xl md:text-7xl font-black mb-6 tracking-tighter uppercase">FORGED <span class="text-transparent bg-clip-text bg-gradient-to-r from-secondary to-primary dark:from-secondary dark:to-accent">${displayTitle}</span></h1>
                <p class="text-xl text-gray-600 dark:text-gray-400 max-w-2xl mx-auto font-light">Custom engineered and precision forged components designed to withstand extreme mechanical stress.</p>
            </div>
        </div>

        <section class="py-24 bg-white dark:bg-[#0a192f] transition-colors duration-300">
            <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <!-- Grid -->
                <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8" style="perspective: 1500px;">
                    ${html}
                </div>
            </div>
        </section>

        <style>
            @keyframes slideUpFade {
                0% { opacity: 0; transform: translateY(30px); }
                100% { opacity: 1; transform: translateY(0); }
            }
            .slide-up-card {
                opacity: 0;
                animation: slideUpFade 0.6s ease-out forwards;
            }
        </style>
    `;
}
