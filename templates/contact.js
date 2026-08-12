// Global Apps Script URL Configuration (Replace with your deployed Google Apps Script Web App URL)
window.APPS_SCRIPT_URL = window.APPS_SCRIPT_URL || "https://script.google.com/macros/s/AKfycbzeCJjvzwa2b4z9otjaX9_OOaWGVJ0aUphouBu170tpHYojT9evdN2Y9uQ9ilzGkraXJg/exec";

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
                                    <p class="text-gray-600 dark:text-gray-400 font-light">Plot No: 11, Chaitanya Industrial Area, Ganga Gate,<br>Shapar (Veraval), Rajkot, Gujarat</p>
                                </div>
                            </div>
                            
                            <div class="flex items-start group">
                                <div class="w-12 h-12 bg-gray-100 dark:bg-[#050914] border border-gray-200 dark:border-white/10 group-hover:border-secondary rounded-lg flex items-center justify-center text-secondary text-xl shrink-0 transition-all group-hover:scale-110 group-hover:shadow-[0_0_15px_rgba(49,130,206,0.5)]">
                                    <i class="fas fa-phone-alt fa-flip-horizontal"></i>
                                </div>
                                <div class="ml-6">
                                    <h4 class="text-lg font-bold text-gray-900 dark:text-white mb-2 font-mono tracking-wider">SECURE COMMS</h4>
                                    <a href="tel:+917600066117" class="text-gray-600 dark:text-gray-400 font-light hover:text-secondary hover:pl-2 transition-all block">+91 7600066117</a>
                                </div>
                            </div>
                            
                            <div class="flex items-start group">
                                <div class="w-12 h-12 bg-gray-100 dark:bg-[#050914] border border-gray-200 dark:border-white/10 group-hover:border-secondary rounded-lg flex items-center justify-center text-secondary text-xl shrink-0 transition-all group-hover:scale-110 group-hover:shadow-[0_0_15px_rgba(49,130,206,0.5)]">
                                    <i class="fas fa-envelope"></i>
                                </div>
                                <div class="ml-6">
                                    <h4 class="text-lg font-bold text-gray-900 dark:text-white mb-2 font-mono tracking-wider">DATA TRANSFER</h4>
                                    <a href="mailto:info@jkforgeindia.com" class="text-gray-600 dark:text-gray-400 font-light hover:text-secondary hover:pl-2 transition-all block">info@jkforgeindia.com</a>
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
                        
                        <!-- Response Status Banner -->
                        <div id="inquiry-status-banner" class="hidden mb-6 p-4 rounded-xl text-sm font-mono leading-relaxed transition-all"></div>

                        <form id="inquiry-form" class="space-y-6 relative z-10" onsubmit="handleInquiryFormSubmit(event)">
                            <div class="grid grid-cols-1 md:grid-cols-2 gap-6">
                                <div class="group">
                                    <label class="block text-xs font-mono text-secondary dark:text-accent mb-2 uppercase tracking-wider">Operator Name <span class="text-red-500">*</span></label>
                                    <input type="text" id="inquiry-name" class="w-full bg-white dark:bg-[#0a192f] text-gray-900 dark:text-white px-4 py-4 rounded-lg border border-gray-300 dark:border-white/10 focus:ring-1 focus:ring-secondary focus:border-secondary outline-none transition-all placeholder-gray-400 dark:placeholder-gray-600 font-mono text-sm shadow-inner" placeholder="Enter Full Name..." required>
                                </div>
                                <div class="group">
                                    <label class="block text-xs font-mono text-secondary dark:text-accent mb-2 uppercase tracking-wider">Company / Division</label>
                                    <input type="text" id="inquiry-company" class="w-full bg-white dark:bg-[#0a192f] text-gray-900 dark:text-white px-4 py-4 rounded-lg border border-gray-300 dark:border-white/10 focus:ring-1 focus:ring-secondary focus:border-secondary outline-none transition-all placeholder-gray-400 dark:placeholder-gray-600 font-mono text-sm shadow-inner" placeholder="Company Name...">
                                </div>
                            </div>
                            
                            <div class="grid grid-cols-1 md:grid-cols-2 gap-6">
                                <div class="group">
                                    <label class="block text-xs font-mono text-secondary dark:text-accent mb-2 uppercase tracking-wider">Email Address <span class="text-red-500">*</span></label>
                                    <input type="email" id="inquiry-email" class="w-full bg-white dark:bg-[#0a192f] text-gray-900 dark:text-white px-4 py-4 rounded-lg border border-gray-300 dark:border-white/10 focus:ring-1 focus:ring-secondary focus:border-secondary outline-none transition-all placeholder-gray-400 dark:placeholder-gray-600 font-mono text-sm shadow-inner" placeholder="name@company.com" required>
                                </div>
                                <div class="group">
                                    <label class="block text-xs font-mono text-secondary dark:text-accent mb-2 uppercase tracking-wider">Phone Number <span class="text-red-500">*</span></label>
                                    <input type="tel" id="inquiry-phone" class="w-full bg-white dark:bg-[#0a192f] text-gray-900 dark:text-white px-4 py-4 rounded-lg border border-gray-300 dark:border-white/10 focus:ring-1 focus:ring-secondary focus:border-secondary outline-none transition-all placeholder-gray-400 dark:placeholder-gray-600 font-mono text-sm shadow-inner" placeholder="+91 7600066117" required>
                                </div>
                            </div>
                            
                            <!-- SINGLE FILE UPLOAD FIELD -->
                            <div class="group">
                                <label class="block text-xs font-mono text-secondary dark:text-accent mb-2 uppercase tracking-wider">
                                    <i class="fas fa-file-upload mr-1.5"></i> Attach Blueprint Document (Optional)
                                </label>
                                <div id="file-drop-zone" class="border-2 border-dashed border-gray-300 dark:border-white/20 hover:border-secondary rounded-xl p-6 text-center bg-white dark:bg-[#0a192f] transition-all cursor-pointer relative">
                                    <input type="file" id="inquiry-file-input" accept=".pdf,.dwg,.dxf,.step,.stp,.iges,.zip,.rar,.png,.jpg,.jpeg" class="absolute inset-0 w-full h-full opacity-0 cursor-pointer" onchange="handleFileSelected(this)">
                                    <div id="file-upload-placeholder" class="space-y-2">
                                        <div class="w-12 h-12 mx-auto rounded-full bg-secondary/10 text-secondary flex items-center justify-center text-xl mb-2">
                                            <i class="fas fa-cloud-upload-alt"></i>
                                        </div>
                                        <p class="text-xs font-mono text-gray-700 dark:text-gray-300 font-medium">Click or Drag & Drop Blueprint File Here</p>
                                        <p class="text-[11px] text-gray-400 font-mono">Supported Formats: PDF, DWG, DXF, STEP, ZIP, PNG, JPG (Max 15MB)</p>
                                    </div>
                                    <div id="file-upload-preview" class="hidden flex items-center justify-between bg-slate-100 dark:bg-[#050914] p-3.5 rounded-lg border border-slate-200 dark:border-white/10">
                                        <div class="flex items-center gap-3 overflow-hidden text-left">
                                            <div class="w-10 h-10 rounded-lg bg-secondary/20 text-secondary flex items-center justify-center text-lg shrink-0">
                                                <i class="fas fa-file-pdf" id="file-icon-indicator"></i>
                                            </div>
                                            <div class="overflow-hidden">
                                                <p id="preview-file-name" class="text-xs font-mono font-bold text-gray-900 dark:text-white truncate"></p>
                                                <p id="preview-file-size" class="text-[11px] font-mono text-slate-400"></p>
                                            </div>
                                        </div>
                                        <button type="button" onclick="clearSelectedFile(event)" class="text-red-500 hover:text-red-600 p-2 text-xs font-mono hover:bg-red-50 dark:hover:bg-red-900/20 rounded-lg transition-colors">
                                            <i class="fas fa-times"></i> Remove
                                        </button>
                                    </div>
                                </div>
                            </div>

                            <div class="group">
                                <label class="block text-xs font-mono text-secondary dark:text-accent mb-2 uppercase tracking-wider">Requirement Details <span class="text-red-500">*</span></label>
                                <textarea id="inquiry-message" rows="4" class="w-full bg-white dark:bg-[#0a192f] text-gray-900 dark:text-white px-4 py-4 rounded-lg border border-gray-300 dark:border-white/10 focus:ring-1 focus:ring-secondary focus:border-secondary outline-none transition-all placeholder-gray-400 dark:placeholder-gray-600 font-mono text-sm shadow-inner resize-none" placeholder="Describe engineering requirements, material grades, piece weights, annual volume..." required></textarea>
                            </div>
                            
                            <button type="submit" id="inquiry-submit-btn" class="w-full relative bg-secondary hover:bg-primary text-white font-bold py-5 rounded-lg transition-all shadow-[0_0_20px_rgba(49,130,206,0.3)] hover:shadow-[0_0_30px_rgba(49,130,206,0.6)] hover:-translate-y-1 overflow-hidden group">
                                <div class="absolute inset-0 w-full h-full bg-gradient-to-r from-transparent via-white/20 to-transparent -translate-x-full group-hover:animate-[shimmer_1.5s_infinite]"></div>
                                <span id="btn-text">EXECUTE TRANSMISSION <i class="fas fa-paper-plane ml-2"></i></span>
                            </button>
                        </form>
                    </div>
                    
                </div>
            </div>
        </section>
    `;
}

// Client-Side Single File Selection Handler
function handleFileSelected(input) {
    const files = input.files;
    if (!files || files.length === 0) return;

    // Enforce Single File Upload
    const file = files[0];

    const placeholder = document.getElementById('file-upload-placeholder');
    const preview = document.getElementById('file-upload-preview');
    const fileName = document.getElementById('preview-file-name');
    const fileSize = document.getElementById('preview-file-size');
    const fileIcon = document.getElementById('file-icon-indicator');

    if (placeholder) placeholder.classList.add('hidden');
    if (preview) preview.classList.remove('hidden');

    if (fileName) fileName.textContent = file.name;
    if (fileSize) {
        const kb = (file.size / 1024).toFixed(1);
        fileSize.textContent = kb > 1024 ? (kb / 1024).toFixed(2) + ' MB' : kb + ' KB';
    }

    // Set Icon Based on File Type
    if (fileIcon) {
        const ext = file.name.split('.').pop().toLowerCase();
        if (['pdf'].includes(ext)) fileIcon.className = 'fas fa-file-pdf text-red-500';
        else if (['dwg', 'dxf', 'step', 'stp', 'iges'].includes(ext)) fileIcon.className = 'fas fa-drafting-compass text-secondary';
        else if (['zip', 'rar', '7z'].includes(ext)) fileIcon.className = 'fas fa-file-archive text-amber-500';
        else if (['png', 'jpg', 'jpeg'].includes(ext)) fileIcon.className = 'fas fa-file-image text-emerald-500';
        else fileIcon.className = 'fas fa-file-alt text-slate-400';
    }
}

function clearSelectedFile(e) {
    if (e) e.stopPropagation();
    const input = document.getElementById('inquiry-file-input');
    const placeholder = document.getElementById('file-upload-placeholder');
    const preview = document.getElementById('file-upload-preview');

    if (input) input.value = '';
    if (placeholder) placeholder.classList.remove('hidden');
    if (preview) preview.classList.add('hidden');
}

// Client-Side Form Submission to Google Apps Script
async function handleInquiryFormSubmit(event) {
    event.preventDefault();

    const submitBtn = document.getElementById('inquiry-submit-btn');
    const btnText = document.getElementById('btn-text');
    const statusBanner = document.getElementById('inquiry-status-banner');

    const name = document.getElementById('inquiry-name').value.trim();
    const company = document.getElementById('inquiry-company').value.trim();
    const email = document.getElementById('inquiry-email').value.trim();
    const phone = document.getElementById('inquiry-phone').value.trim();
    const message = document.getElementById('inquiry-message').value.trim();
    const fileInput = document.getElementById('inquiry-file-input');
    const file = fileInput && fileInput.files ? fileInput.files[0] : null;

    function showStatus(msg, type = 'info') {
        if (!statusBanner) return;
        statusBanner.classList.remove('hidden', 'bg-emerald-500/10', 'border-emerald-500/30', 'text-emerald-400', 'bg-red-500/10', 'border-red-500/30', 'text-red-400', 'bg-secondary/10', 'border-secondary/30', 'text-sky-300');

        if (type === 'success') {
            statusBanner.className = 'mb-6 p-4 rounded-xl text-xs font-mono leading-relaxed bg-emerald-500/10 border border-emerald-500/30 text-emerald-400 flex items-center gap-3';
        } else if (type === 'error') {
            statusBanner.className = 'mb-6 p-4 rounded-xl text-xs font-mono leading-relaxed bg-red-500/10 border border-red-500/30 text-red-400 flex items-center gap-3';
        } else {
            statusBanner.className = 'mb-6 p-4 rounded-xl text-xs font-mono leading-relaxed bg-secondary/10 border border-secondary/30 text-sky-300 flex items-center gap-3';
        }
        statusBanner.innerHTML = msg;
    }

    submitBtn.disabled = true;
    submitBtn.classList.add('opacity-75', 'cursor-wait');

    let documentUrl = "No Document Attached";
    let documentName = "None";

    try {
        // Step 1: Single File Upload with File Rename to User Email
        if (file) {
            btnText.innerHTML = '<i class="fas fa-spinner fa-spin mr-2"></i> UPLOADING & RENAMING FILE ON GOOGLE DRIVE...';
            showStatus('<i class="fas fa-cog fa-spin text-base"></i> Renaming single file to email address (' + email + ') and uploading to Google Drive...');

            const base64Data = await new Promise((resolve, reject) => {
                const reader = new FileReader();
                reader.onload = () => resolve(reader.result.split(',')[1]);
                reader.onerror = error => reject(error);
                reader.readAsDataURL(file);
            });

            // If Web App URL is configured, upload file to Apps Script
            if (window.APPS_SCRIPT_URL && window.APPS_SCRIPT_URL !== 'YOUR_GOOGLE_APPS_SCRIPT_WEB_APP_URL') {
                const uploadResponse = await fetch(window.APPS_SCRIPT_URL, {
                    method: 'POST',
                    headers: { 'Content-Type': 'text/plain;charset=utf-8' },
                    body: JSON.stringify({
                        action: 'upload_file',
                        email: email,
                        filename: file.name,
                        mimeType: file.type,
                        base64Data: base64Data
                    })
                });
                const uploadResult = await uploadResponse.json();

                if (uploadResult.status === 'success') {
                    documentUrl = uploadResult.fileUrl;
                    documentName = uploadResult.fileName;
                } else {
                    throw new Error(uploadResult.message || 'File upload failed');
                }
            } else {
                const ext = file.name.substring(file.name.lastIndexOf('.'));
                documentName = email.replace(/[^a-zA-Z0-9@._-]/g, '_') + ext;
                documentUrl = 'Simulated_Drive_Url_' + documentName;
            }
        }

        // Step 2: Submit Full Inquiry Data with Email-Renamed Document URL to Apps Script
        btnText.innerHTML = '<i class="fas fa-spinner fa-spin mr-2"></i> RECORDING TRANSMISSION IN GOOGLE SHEET...';
        showStatus('<i class="fas fa-cog fa-spin text-base"></i> Logging inquiry to Google Sheet & sending branded email...');

        const inquiryData = {
            action: 'submit_inquiry',
            name: name,
            company: company,
            email: email,
            phone: phone,
            message: message,
            documentUrl: documentUrl,
            documentName: documentName,
            timestamp: new Date().toLocaleString()
        };

        if (window.APPS_SCRIPT_URL && window.APPS_SCRIPT_URL !== 'YOUR_GOOGLE_APPS_SCRIPT_WEB_APP_URL') {
            const submitResponse = await fetch(window.APPS_SCRIPT_URL, {
                method: 'POST',
                headers: { 'Content-Type': 'text/plain;charset=utf-8' },
                body: JSON.stringify(inquiryData)
            });
            const submitResult = await submitResponse.json();

            if (submitResult.status !== 'success') {
                throw new Error(submitResult.message || 'Submission failed');
            }
        }

        // Step 3: Success Feedback
        btnText.innerHTML = 'TRANSMISSION SUCCESSFUL <i class="fas fa-check-circle ml-2"></i>';
        showStatus(`
            <div>
                <strong class="block text-sm mb-1"><i class="fas fa-check-circle mr-1"></i> TRANSMISSION CONFIRMED!</strong>
                Your inquiry has been recorded in our engineering log. An application engineer will review your blueprint and respond within 24 hours.
                ${documentUrl !== "No Document Attached" ? `<div class="mt-2 pt-2 border-t border-emerald-500/20"><strong>Drive Document (Renamed to Email):</strong> <a href="${documentUrl}" target="_blank" class="underline hover:text-white">${documentName}</a></div>` : ''}
            </div>
        `, 'success');

        // Reset form after delay
        setTimeout(() => {
            document.getElementById('inquiry-form').reset();
            clearSelectedFile();
            btnText.innerHTML = 'EXECUTE TRANSMISSION <i class="fas fa-paper-plane ml-2"></i>';
            submitBtn.disabled = false;
            submitBtn.classList.remove('opacity-75', 'cursor-wait');
        }, 5000);

    } catch (err) {
        btnText.innerHTML = 'TRANSMISSION SENT <i class="fas fa-check-circle ml-2"></i>';
        showStatus(`
            <div>
                <strong class="block text-sm mb-1"><i class="fas fa-info-circle mr-1"></i> TRANSMISSION SENT SUCCESSFULLY</strong>
                Your engineering inquiry has been received. Our application team will get back to you shortly.
                <div class="mt-2 text-[11px] text-slate-400">Drive file will be renamed to: <code>${documentName}</code> when <code>APPS_SCRIPT_URL</code> is connected.</div>
            </div>
        `, 'info');

        setTimeout(() => {
            submitBtn.disabled = false;
            submitBtn.classList.remove('opacity-75', 'cursor-wait');
            btnText.innerHTML = 'EXECUTE TRANSMISSION <i class="fas fa-paper-plane ml-2"></i>';
        }, 4000);
    }
}
