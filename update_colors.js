const fs = require('fs');

let html = fs.readFileSync('d:/J.K/index.html', 'utf8');

// Replace mega menu backgrounds
html = html.replace(/bg-white shadow-2xl/g, 'bg-dark shadow-2xl border-t-2 border-secondary');

// Replace heading colors
html = html.replace(/text-\[\#c52b20\] font-bold text-xs uppercase tracking-widest/g, 'text-accent font-mono font-bold text-xs uppercase tracking-widest');

// Replace border colors
html = html.replace(/border-gray-100/g, 'border-gray-800');

// Replace link colors
html = html.replace(/text-gray-700 hover:text-secondary/g, 'text-gray-400 hover:text-accent hover:pl-2 transition-all');

// Mobile menu container
html = html.replace(/bg-white border-t border-gray-100 absolute w-full shadow-lg/g, 'bg-dark border-t border-gray-800 absolute w-full shadow-lg');

// Footer adjustments
html = html.replace(/bg-dark text-white pt-16 pb-8/g, 'bg-dark border-t border-gray-800 text-white pt-16 pb-8');

fs.writeFileSync('d:/J.K/index.html', html);
console.log('Successfully updated index.html colors!');
