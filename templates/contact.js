function renderContact() {
    return `
        <!-- Page Header -->
        <div class="bg-gray-50 dark:bg-[#050914] text-gray-900 dark:text-white pt-32 pb-20 relative overflow-hidden border-b border-gray-200 dark:border-white/5 transition-colors duration-300">
            <div class="absolute inset-0 opacity-5 dark:opacity-10 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMjAiIGhlaWdodD0iMjAiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PGNpcmNsZSBjeD0iMiIgY3k9IjIiIHI9IjEiIGZpbGw9InJnYmEoMjU1LDI1NSwyNTUsMC4yKSIvPjwvc3ZnPg==')]"></div>
            <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center reveal active">
                <div class="inline-block mb-6 px-4 py-1 rounded-full border border-secondary/30 bg-white dark:bg-[#0a192f] text-secondary dark:text-accent font-mono text-xs tracking-[0.2em] uppercase">
                    Transmission Interface
                </div>
                <h1 class="text-5xl md:text-7xl font-black mb-6 tracking-tighter">INITIATE <span class="text-transparent bg-clip-text bg-gradient-to-r from-secondary to-primary dark:from-secondary dark:to-accent">CONTACT</span></h1>
                <p class="text-xl text-gray-600 dark:text-gray-400 max-w-2xl mx-auto font-light">Establish a secure connection with our engineering and sales divisions.</p>
            </div>
        </div>

        <section class="py-24 bg-white dark:bg-[#0a192f] transition-colors duration-300">
            <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div class="grid grid-cols-1 lg:grid-cols-2 gap-16">
                    
                    <!-- Contact Info -->
                    <div class="gsap-3d-reveal">
                        <div class="flex items-center gap-4 mb-8">
                            <div class="w-12 h-1 bg-secondary"></div>
                            <h2 class="text-3xl font-bold text-gray-900 dark:text-white tracking-wide">COMMAND CENTER</h2>
                        </div>
                        
                        <div class="space-y-8">
                            <div class="flex items-start group">
                                <div class="w-12 h-12 bg-gray-100 dark:bg-[#050914] border border-gray-200 dark:border-white/10 group-hover:border-secondary rounded-lg flex items-center justify-center text-secondary text-xl shrink-0 transition-all group-hover:scale-110 group-hover:shadow-[0_0_15px_rgba(49,130,206,0.5)]">
                                    <i class="fas fa-map-marker-alt"></i>
                                </div>
                                <div class="ml-6">
                                    <h4 class="text-lg font-bold text-gray-900 dark:text-white mb-2 font-mono tracking-wider">PRIMARY FACILITY</h4>
                                    <p class="text-gray-600 dark:text-gray-400 font-light">123 Industrial Estate, Tech Zone,<br>Metropolis, State - 123456, Country</p>
                                </div>
                            </div>
                            
                            <div class="flex items-start group">
                                <div class="w-12 h-12 bg-gray-100 dark:bg-[#050914] border border-gray-200 dark:border-white/10 group-hover:border-secondary rounded-lg flex items-center justify-center text-secondary text-xl shrink-0 transition-all group-hover:scale-110 group-hover:shadow-[0_0_15px_rgba(49,130,206,0.5)]">
                                    <i class="fas fa-phone-alt fa-flip-horizontal"></i>
                                </div>
                                <div class="ml-6">
                                    <h4 class="text-lg font-bold text-gray-900 dark:text-white mb-2 font-mono tracking-wider">SECURE COMMS</h4>
                                    <a href="tel:+001234567890" class="text-gray-600 dark:text-gray-400 font-light hover:text-secondary hover:pl-2 transition-all block">+00 123 456 7890</a>
                                </div>
                            </div>
                            
                            <div class="flex items-start group">
                                <div class="w-12 h-12 bg-gray-100 dark:bg-[#050914] border border-gray-200 dark:border-white/10 group-hover:border-secondary rounded-lg flex items-center justify-center text-secondary text-xl shrink-0 transition-all group-hover:scale-110 group-hover:shadow-[0_0_15px_rgba(49,130,206,0.5)]">
                                    <i class="fas fa-envelope"></i>
                                </div>
                                <div class="ml-6">
                                    <h4 class="text-lg font-bold text-gray-900 dark:text-white mb-2 font-mono tracking-wider">DATA TRANSFER</h4>
                                    <a href="mailto:info@jkforge.com" class="text-gray-600 dark:text-gray-400 font-light hover:text-secondary hover:pl-2 transition-all block">info@jkforge.com</a>
                                    <a href="mailto:sales@jkforge.com" class="text-gray-600 dark:text-gray-400 font-light hover:text-secondary hover:pl-2 transition-all block mt-1">sales@jkforge.com</a>
                                </div>
                            </div>
                        </div>
                        
                        <div class="mt-16 p-8 border border-gray-200 dark:border-white/10 bg-gray-50 dark:bg-[#050914] rounded-xl relative overflow-hidden">
                            <div class="absolute top-0 left-0 w-1 h-full bg-secondary"></div>
                            <h4 class="text-secondary dark:text-accent font-mono text-sm tracking-[0.2em] uppercase mb-6">Operational Status</h4>
                            <div class="space-y-4">
                                <div class="flex justify-between items-center border-b border-gray-200 dark:border-white/5 pb-3">
                                    <span class="text-gray-600 dark:text-gray-400 font-light">Monday - Friday</span>
                                    <span class="font-mono text-secondary">09:00 - 18:00</span>
                                </div>
                                <div class="flex justify-between items-center border-b border-gray-200 dark:border-white/5 pb-3">
                                    <span class="text-gray-600 dark:text-gray-400 font-light">Saturday</span>
                                    <span class="font-mono text-secondary">10:00 - 14:00</span>
                                </div>
                                <div class="flex justify-between items-center">
                                    <span class="text-gray-600 dark:text-gray-400 font-light">Sunday</span>
                                    <span class="font-mono text-red-500">OFFLINE</span>
                                </div>
                            </div>
                        </div>
                    </div>
                    
                    <!-- Contact Form (Inquiry Terminal) -->
                    <div class="bg-gray-50 dark:bg-[#050914] p-10 rounded-2xl border border-gray-200 dark:border-white/10 shadow-[0_0_40px_rgba(0,0,0,0.1)] dark:shadow-[0_0_40px_rgba(0,0,0,0.5)] gsap-3d-card relative overflow-hidden" style="transition-delay: 200ms">
                        <div class="absolute top-0 right-0 p-4 opacity-10 dark:opacity-20">
                            <i class="fas fa-terminal text-6xl text-secondary"></i>
                        </div>
                        <h3 class="text-2xl font-black text-gray-900 dark:text-white mb-8 tracking-wide">INQUIRY TERMINAL</h3>
                        
                        <form class="space-y-6 relative z-10" onsubmit="event.preventDefault(); alert('Transmission Sent Successfully.');">
                            <div class="group">
                                <label class="block text-xs font-mono text-secondary dark:text-accent mb-2 uppercase tracking-widest">Operator Designation (Name)</label>
                                <input type="text" class="w-full bg-white dark:bg-[#0a192f] text-gray-900 dark:text-white px-4 py-4 rounded-lg border border-gray-300 dark:border-white/10 focus:ring-1 focus:ring-secondary focus:border-secondary outline-none transition-all placeholder-gray-400 dark:placeholder-gray-600 font-mono text-sm shadow-inner" placeholder="Enter Full Name..." required>
                            </div>
                            
                            <div class="grid grid-cols-1 md:grid-cols-2 gap-6">
                                <div class="group">
                                    <label class="block text-xs font-mono text-secondary dark:text-accent mb-2 uppercase tracking-widest">Return Vector (Email)</label>
                                    <input type="email" class="w-full bg-white dark:bg-[#0a192f] text-gray-900 dark:text-white px-4 py-4 rounded-lg border border-gray-300 dark:border-white/10 focus:ring-1 focus:ring-secondary focus:border-secondary outline-none transition-all placeholder-gray-400 dark:placeholder-gray-600 font-mono text-sm shadow-inner" placeholder="name@company.com" required>
                                </div>
                                <div class="group">
                                    <label class="block text-xs font-mono text-secondary dark:text-accent mb-2 uppercase tracking-widest">Comm Frequency (Phone)</label>
                                    <input type="tel" class="w-full bg-white dark:bg-[#0a192f] text-gray-900 dark:text-white px-4 py-4 rounded-lg border border-gray-300 dark:border-white/10 focus:ring-1 focus:ring-secondary focus:border-secondary outline-none transition-all placeholder-gray-400 dark:placeholder-gray-600 font-mono text-sm shadow-inner" placeholder="+00-000000000">
                                </div>
                            </div>
                            
                            <div class="group">
                                <label class="block text-xs font-mono text-secondary dark:text-accent mb-2 uppercase tracking-widest">Transmission Payload (Message)</label>
                                <textarea rows="5" class="w-full bg-white dark:bg-[#0a192f] text-gray-900 dark:text-white px-4 py-4 rounded-lg border border-gray-300 dark:border-white/10 focus:ring-1 focus:ring-secondary focus:border-secondary outline-none transition-all placeholder-gray-400 dark:placeholder-gray-600 font-mono text-sm shadow-inner resize-none" placeholder="Describe engineering requirements, material grades, or attach specifications..." required></textarea>
                            </div>
                            
                            <button type="submit" class="w-full relative bg-secondary hover:bg-[#2c5282] text-white font-bold py-5 rounded-lg transition-all shadow-[0_0_20px_rgba(49,130,206,0.3)] hover:shadow-[0_0_30px_rgba(49,130,206,0.6)] hover:-translate-y-1 overflow-hidden group">
                                <div class="absolute inset-0 w-full h-full bg-gradient-to-r from-transparent via-white/20 to-transparent -translate-x-full group-hover:animate-[shimmer_1.5s_infinite]"></div>
                                EXECUTE TRANSMISSION <i class="fas fa-paper-plane ml-2"></i>
                            </button>
                        </form>
                    </div>
                    
                </div>
            </div>
        </section>
    `;
}
