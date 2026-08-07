    document.getElementById('main-header-container').innerHTML = `<header class="fixed w-full top-0 z-50 bg-white transition-colors duration-300 border-b border-gray-200" id="navbar">
        <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div class="flex justify-between items-center h-24">
                <!-- Logo -->
                <div class="flex-shrink-0 flex items-center group">
                    <a href="index.html" class="flex items-center gap-3 relative">
                        <!-- Glow Effect -->
                        <div class="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-full bg-white/20 blur-2xl rounded-full scale-[2.0] animate-pulse pointer-events-none"></div>
                        <img src="./images/logo.png" alt="JK Forge Logo" class="relative z-10 h-24 w-auto object-contain drop-shadow-[0_0_15px_rgba(255,255,255,0.4)] group-hover:drop-shadow-[0_0_25px_rgba(255,255,255,0.7)] group-hover:scale-105 transition-all duration-300">
                        <span class="font-bold text-xl tracking-tight text-white group-hover:text-gray-300 transition-colors duration-300"></span>
                    </a>
                </div>

                <!-- Desktop Menu -->
                <nav class="hidden lg:flex items-center space-x-1 lg:space-x-4 h-full">
                    <a href="index.html" data-route="/" class="nav-item text-gray-800 hover:text-secondary text-sm font-medium transition-colors px-2 py-6 relative h-full flex items-center">Home</a>
                    
                    <!-- Industries Mega Menu -->
                    <div class="group h-full">
                        <button data-route="industries" class="nav-item text-gray-800 group-hover:text-secondary text-sm font-medium transition-colors inline-flex items-center px-2 h-full relative">
                            Industries <i class="fas fa-chevron-down ml-1 text-[10px] opacity-70 transition-transform group-hover:rotate-180"></i>
                        </button>
                        <div class="absolute left-0 top-24 w-full bg-white shadow-2xl opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200 border-t-2 border-secondary">
                            <div class="max-w-screen-2xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
                                <div class="grid grid-cols-4 gap-8">
                                <div>
                                    <h4 class="text-secondary font-mono font-bold text-xs uppercase tracking-widest mb-6 border-b border-gray-200 pb-2">MOBILITY</h4>
                                    <ul class="space-y-4">
                                        <li><a href="industry.html?page=automotive-forging" class="text-sm text-gray-700 hover:text-secondary transition-colors">Automotive Forging</a></li>
                                        <li><a href="industry.html?page=automobile-parts" class="text-sm text-gray-700 hover:text-secondary transition-colors">Automobile Parts</a></li>
                                        <li><a href="industry.html?page=automotive-forging-rajkot" class="text-sm text-gray-700 hover:text-secondary transition-colors">Automotive Forging Rajkot</a></li>
                                        <li><a href="industry.html?page=commercial-vehicle" class="text-sm text-gray-700 hover:text-secondary transition-colors">Commercial Vehicle</a></li>
                                        <li><a href="industry.html?page=truck-parts-forging" class="text-sm text-gray-700 hover:text-secondary transition-colors">Truck Parts Forging</a></li>
                                        <li><a href="industry.html?page=two-wheeler-parts" class="text-sm text-gray-700 hover:text-secondary transition-colors">Two-Wheeler Parts</a></li>
                                        <li><a href="industry.html?page=agricultural-equipment" class="text-sm text-gray-700 hover:text-secondary transition-colors">Agricultural Equipment</a></li>
                                        <li><a href="industry.html?page=tractor-parts" class="text-sm text-gray-700 hover:text-secondary transition-colors">Tractor Parts</a></li>
                                        <li><a href="industry.html?page=railway-forging" class="text-sm text-gray-700 hover:text-secondary transition-colors">Railway Forging</a></li>
                                        <li><a href="industry.html?page=defense-forging" class="text-sm text-gray-700 hover:text-secondary transition-colors">Defense Forging</a></li>
                                        <li><a href="industry.html?page=marine-forging" class="text-sm text-gray-700 hover:text-secondary transition-colors">Marine Forging</a></li>
                                        <li><a href="industry.html?page=shipbuilding-forging" class="text-sm text-gray-700 hover:text-secondary transition-colors">Shipbuilding Forging</a></li>
                                    </ul>
                                </div>
                                <div>
                                    <h4 class="text-secondary font-mono font-bold text-xs uppercase tracking-widest mb-6 border-b border-gray-200 pb-2">ENERGY & MINING</h4>
                                    <ul class="space-y-4">
                                        <li><a href="industry.html?page=oil-gas-forging" class="text-sm text-gray-700 hover:text-secondary transition-colors">Oil & Gas Forging</a></li>
                                        <li><a href="industry.html?page=oil-gas-equipment" class="text-sm text-gray-700 hover:text-secondary transition-colors">Oil & Gas Equipment</a></li>
                                        <li><a href="industry.html?page=petrochemical-forging" class="text-sm text-gray-700 hover:text-secondary transition-colors">Petrochemical Forging</a></li>
                                        <li><a href="industry.html?page=offshore-forging" class="text-sm text-gray-700 hover:text-secondary transition-colors">Offshore Forging</a></li>
                                        <li><a href="industry.html?page=power-generation" class="text-sm text-gray-700 hover:text-secondary transition-colors">Power Generation</a></li>
                                        <li><a href="industry.html?page=wind-energy-forging" class="text-sm text-gray-700 hover:text-secondary transition-colors">Wind Energy Forging</a></li>
                                        <li><a href="industry.html?page=solar-energy-forging" class="text-sm text-gray-700 hover:text-secondary transition-colors">Solar Energy Forging</a></li>
                                        <li><a href="industry.html?page=mining-forging" class="text-sm text-gray-700 hover:text-secondary transition-colors">Mining Forging</a></li>
                                    </ul>
                                </div>
                                <div>
                                    <h4 class="text-secondary font-mono font-bold text-xs uppercase tracking-widest mb-6 border-b border-gray-200 pb-2">PROCESS INDUSTRY</h4>
                                    <ul class="space-y-4">
                                        <li><a href="industry.html?page=chemical-plant-forging" class="text-sm text-gray-700 hover:text-secondary transition-colors">Chemical Plant Forging</a></li>
                                        <li><a href="industry.html?page=water-treatment" class="text-sm text-gray-700 hover:text-secondary transition-colors">Water Treatment</a></li>
                                        <li><a href="industry.html?page=food-processing" class="text-sm text-gray-700 hover:text-secondary transition-colors">Food Processing</a></li>
                                        <li><a href="industry.html?page=pharmaceutical-equipment" class="text-sm text-gray-700 hover:text-secondary transition-colors">Pharmaceutical Equipment</a></li>
                                        <li><a href="industry.html?page=aerospace-grade" class="text-sm text-gray-700 hover:text-secondary transition-colors">Aerospace Grade</a></li>
                                        <li><a href="industry.html?page=earthmoving-equipment" class="text-sm text-gray-700 hover:text-secondary transition-colors">Earthmoving Equipment</a></li>
                                        <li><a href="industry.html?page=construction-equipment" class="text-sm text-gray-700 hover:text-secondary transition-colors">Construction Equipment</a></li>
                                    </ul>
                                </div>
                                <div>
                                    <h4 class="text-secondary font-mono font-bold text-xs uppercase tracking-widest mb-6 border-b border-gray-200 pb-2">HEAVY INDUSTRY</h4>
                                    <ul class="space-y-4">
                                        <li><a href="industry.html?page=steel-plant-forging" class="text-sm text-gray-700 hover:text-secondary transition-colors">Steel Plant Forging</a></li>
                                        <li><a href="industry.html?page=cement-plant-forging" class="text-sm text-gray-700 hover:text-secondary transition-colors">Cement Plant Forging</a></li>
                                        <li><a href="industry.html?page=sugar-mill-forging" class="text-sm text-gray-700 hover:text-secondary transition-colors">Sugar Mill Forging</a></li>
                                        <li><a href="industry.html?page=paper-mill-forging" class="text-sm text-gray-700 hover:text-secondary transition-colors">Paper Mill Forging</a></li>
                                        <li><a href="industry.html?page=textile-machinery" class="text-sm text-gray-700 hover:text-secondary transition-colors">Textile Machinery</a></li>
                                        <li><a href="industry.html?page=industrial-forging" class="text-sm text-gray-700 hover:text-secondary transition-colors">Industrial Forging</a></li>
                                        <li><a href="industry.html?page=elevator-forging" class="text-sm text-gray-700 hover:text-secondary transition-colors">Elevator Forging</a></li>
                                        <li><a href="industry.html?page=crane-forging" class="text-sm text-gray-700 hover:text-secondary transition-colors">Crane Forging</a></li>
                                    </ul>
                                </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    <!-- Components Mega Menu -->
                    <div class="group h-full">
                        <button data-route="components" class="nav-item text-gray-800 group-hover:text-secondary text-sm font-medium transition-colors inline-flex items-center px-2 h-full relative">
                            Components <i class="fas fa-chevron-down ml-1 text-[10px] opacity-70 transition-transform group-hover:rotate-180"></i>
                        </button>
                        <div class="absolute left-0 top-24 w-full bg-white shadow-2xl opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200 border-t-2 border-secondary">
                            <div class="max-w-screen-2xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
                                <div class="grid grid-cols-3 gap-8">
                                <div>
                                    <h4 class="text-secondary font-mono font-bold text-xs uppercase tracking-widest mb-6 border-b border-gray-200 pb-2">DRIVETRAIN & ROTATING</h4>
                                    <ul class="space-y-4">
                                        <li><a href="components.html?page=gear-forging" class="text-sm text-gray-700 hover:text-secondary transition-colors">Gear Forging</a></li>
                                        <li><a href="components.html?page=gear-blank-forging" class="text-sm text-gray-700 hover:text-secondary transition-colors">Gear Blank Forging</a></li>
                                        <li><a href="components.html?page=bevel-gear-forging" class="text-sm text-gray-700 hover:text-secondary transition-colors">Bevel Gear Forging</a></li>
                                        <li><a href="components.html?page=shaft-forging" class="text-sm text-gray-700 hover:text-secondary transition-colors">Shaft Forging</a></li>
                                        <li><a href="components.html?page=drive-shaft-forging" class="text-sm text-gray-700 hover:text-secondary transition-colors">Drive Shaft Forging</a></li>
                                        <li><a href="components.html?page=axle-shaft-forging" class="text-sm text-gray-700 hover:text-secondary transition-colors">Axle Shaft Forging</a></li>
                                        <li><a href="components.html?page=crankshaft-forging" class="text-sm text-gray-700 hover:text-secondary transition-colors">Crankshaft Forging</a></li>
                                        <li><a href="components.html?page=camshaft-forging" class="text-sm text-gray-700 hover:text-secondary transition-colors">Camshaft Forging</a></li>
                                        <li><a href="components.html?page=connecting-rod" class="text-sm text-gray-700 hover:text-secondary transition-colors">Connecting Rod</a></li>
                                        <li><a href="components.html?page=gearbox-forging" class="text-sm text-gray-700 hover:text-secondary transition-colors">Gearbox Forging</a></li>
                                        <li><a href="components.html?page=yoke-forging" class="text-sm text-gray-700 hover:text-secondary transition-colors">Yoke Forging</a></li>
                                        <li><a href="components.html?page=spindle-forging" class="text-sm text-gray-700 hover:text-secondary transition-colors">Spindle Forging</a></li>
                                        <li><a href="components.html?page=wheel-spindle-forging" class="text-sm text-gray-700 hover:text-secondary transition-colors">Wheel Spindle Forging</a></li>
                                        <li><a href="components.html?page=bearing-components" class="text-sm text-gray-700 hover:text-secondary transition-colors">Bearing Components</a></li>
                                        <li><a href="components.html?page=rocker-arm-forging" class="text-sm text-gray-700 hover:text-secondary transition-colors">Rocker Arm Forging</a></li>
                                        <li><a href="components.html?page=piston-rod-forging" class="text-sm text-gray-700 hover:text-secondary transition-colors">Piston Rod Forging</a></li>
                                        <li><a href="components.html?page=steel-shaft" class="text-sm text-gray-700 hover:text-secondary transition-colors">Steel Shaft</a></li>
                                    </ul>
                                </div>
                                <div>
                                    <h4 class="text-secondary font-mono font-bold text-xs uppercase tracking-widest mb-6 border-b border-gray-200 pb-2">STEERING & SUSPENSION</h4>
                                    <ul class="space-y-4">
                                        <li><a href="components.html?page=steering-knuckle" class="text-sm text-gray-700 hover:text-secondary transition-colors">Steering Knuckle</a></li>
                                        <li><a href="components.html?page=stub-axle-forging" class="text-sm text-gray-700 hover:text-secondary transition-colors">Stub Axle Forging</a></li>
                                        <li><a href="components.html?page=king-pin-forging" class="text-sm text-gray-700 hover:text-secondary transition-colors">King Pin Forging</a></li>
                                        <li><a href="components.html?page=tie-rod-forging" class="text-sm text-gray-700 hover:text-secondary transition-colors">Tie Rod Forging</a></li>
                                        <li><a href="components.html?page=wheel-hub-forging" class="text-sm text-gray-700 hover:text-secondary transition-colors">Wheel Hub Forging</a></li>
                                        <li><a href="components.html?page=front-axle-forging" class="text-sm text-gray-700 hover:text-secondary transition-colors">Front Axle Forging</a></li>
                                    </ul>
                                </div>
                                <div>
                                    <h4 class="text-secondary font-mono font-bold text-xs uppercase tracking-widest mb-6 border-b border-gray-200 pb-2">FLUID, FLOW & FASTENING</h4>
                                    <ul class="space-y-4">
                                        <li><a href="components.html?page=flange-forging" class="text-sm text-gray-700 hover:text-secondary transition-colors">Flange Forging</a></li>
                                        <li><a href="components.html?page=coupling-forging" class="text-sm text-gray-700 hover:text-secondary transition-colors">Coupling Forging</a></li>
                                        <li><a href="components.html?page=hydraulic-cylinder" class="text-sm text-gray-700 hover:text-secondary transition-colors">Hydraulic Cylinder</a></li>
                                        <li><a href="components.html?page=hydraulic-fittings" class="text-sm text-gray-700 hover:text-secondary transition-colors">Hydraulic Fittings</a></li>
                                        <li><a href="components.html?page=pump-valve-forging" class="text-sm text-gray-700 hover:text-secondary transition-colors">Pump & Valve Forging</a></li>
                                        <li><a href="components.html?page=valve-body-forging" class="text-sm text-gray-700 hover:text-secondary transition-colors">Valve Body Forging</a></li>
                                        <li><a href="components.html?page=pipeline-fitting" class="text-sm text-gray-700 hover:text-secondary transition-colors">Pipeline Fitting</a></li>
                                        <li><a href="components.html?page=forged-fasteners" class="text-sm text-gray-700 hover:text-secondary transition-colors">Forged Fasteners</a></li>
                                        <li><a href="components.html?page=ring-forging" class="text-sm text-gray-700 hover:text-secondary transition-colors">Ring Forging</a></li>
                                        <li><a href="components.html?page=hook-forging" class="text-sm text-gray-700 hover:text-secondary transition-colors">Hook Forging</a></li>
                                        <li><a href="components.html?page=clevis-forging" class="text-sm text-gray-700 hover:text-secondary transition-colors">Clevis Forging</a></li>
                                        <li><a href="components.html?page=compressor-forging" class="text-sm text-gray-700 hover:text-secondary transition-colors">Compressor Forging</a></li>
                                        <li><a href="components.html?page=disc-forging" class="text-sm text-gray-700 hover:text-secondary transition-colors">Disc Forging</a></li>
                                    </ul>
                                </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    <!-- Capabilities Mega Menu -->
                    <div class="group h-full">
                        <button data-route="capabilities" class="nav-item text-gray-800 group-hover:text-secondary text-sm font-medium transition-colors inline-flex items-center px-2 h-full relative">
                            Capabilities <i class="fas fa-chevron-down ml-1 text-[10px] opacity-70 transition-transform group-hover:rotate-180"></i>
                        </button>
                        <div class="absolute left-0 top-24 w-full bg-white shadow-2xl opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200 border-t-2 border-secondary">
                            <div class="max-w-screen-2xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
                                <div class="grid grid-cols-3 gap-8">
                                <div>
                                    <h4 class="text-secondary font-mono font-bold text-xs uppercase tracking-widest mb-6 border-b border-gray-200 pb-2">FORGING PROCESSES</h4>
                                    <ul class="space-y-4">
                                        <li><a href="capabilities.html?page=hot-forging" class="text-sm text-gray-700 hover:text-secondary transition-colors">Hot Forging</a></li>
                                        <li><a href="capabilities.html?page=closed-die-forging" class="text-sm text-gray-700 hover:text-secondary transition-colors">Closed Die Forging</a></li>
                                        <li><a href="capabilities.html?page=closed-die-manufacturer" class="text-sm text-gray-700 hover:text-secondary transition-colors">Closed Die Manufacturer</a></li>
                                        <li><a href="capabilities.html?page=open-die-forging" class="text-sm text-gray-700 hover:text-secondary transition-colors">Open Die Forging</a></li>
                                        <li><a href="capabilities.html?page=drop-forging" class="text-sm text-gray-700 hover:text-secondary transition-colors">Drop Forging</a></li>
                                        <li><a href="capabilities.html?page=press-forging" class="text-sm text-gray-700 hover:text-secondary transition-colors">Press Forging</a></li>
                                        <li><a href="capabilities.html?page=precision-forging" class="text-sm text-gray-700 hover:text-secondary transition-colors">Precision Forging</a></li>
                                        <li><a href="capabilities.html?page=bulk-forging" class="text-sm text-gray-700 hover:text-secondary transition-colors">Bulk Forging</a></li>
                                        <li><a href="capabilities.html?page=custom-oem-forging" class="text-sm text-gray-700 hover:text-secondary transition-colors">Custom OEM Forging</a></li>
                                        <li><a href="capabilities.html?page=custom-forging-india" class="text-sm text-gray-700 hover:text-secondary transition-colors">Custom Forging India</a></li>
                                        <li><a href="capabilities.html?page=prototype-forging" class="text-sm text-gray-700 hover:text-secondary transition-colors">Prototype Forging</a></li>
                                    </ul>
                                </div>
                                <div>
                                    <h4 class="text-secondary font-mono font-bold text-xs uppercase tracking-widest mb-6 border-b border-gray-200 pb-2">VALUE-ADD SERVICES</h4>
                                    <ul class="space-y-4">
                                        <li><a href="capabilities.html?page=cnc-machining" class="text-sm text-gray-700 hover:text-secondary transition-colors">CNC Machining</a></li>
                                        <li><a href="capabilities.html?page=forging-machining" class="text-sm text-gray-700 hover:text-secondary transition-colors">Forging Machining</a></li>
                                        <li><a href="capabilities.html?page=heat-treatment" class="text-sm text-gray-700 hover:text-secondary transition-colors">Heat Treatment</a></li>
                                        <li><a href="capabilities.html?page=shot-blasting" class="text-sm text-gray-700 hover:text-secondary transition-colors">Shot Blasting</a></li>
                                        <li><a href="capabilities.html?page=surface-treatment" class="text-sm text-gray-700 hover:text-secondary transition-colors">Surface Treatment</a></li>
                                        <li><a href="capabilities.html?page=zinc-plating" class="text-sm text-gray-700 hover:text-secondary transition-colors">Zinc Plating</a></li>
                                        <li><a href="capabilities.html?page=forging-dies" class="text-sm text-gray-700 hover:text-secondary transition-colors">Forging Dies</a></li>
                                        <li><a href="capabilities.html?page=forging-exporter" class="text-sm text-gray-700 hover:text-secondary transition-colors">Forging Exporter</a></li>
                                        <li><a href="capabilities.html?page=iso-certified-forging" class="text-sm text-gray-700 hover:text-secondary transition-colors">ISO Certified Forging</a></li>
                                        <li><a href="capabilities.html?page=forging-vs-casting" class="text-sm text-gray-700 hover:text-secondary transition-colors">Forging vs Casting</a></li>
                                    </ul>
                                </div>
                                <div>
                                    <h4 class="text-secondary font-mono font-bold text-xs uppercase tracking-widest mb-6 border-b border-gray-200 pb-2">MATERIAL GRADES</h4>
                                    <ul class="space-y-4">
                                        <li><a href="capabilities.html?page=alloy-steel-forging" class="text-sm text-gray-700 hover:text-secondary transition-colors">Alloy Steel Forging</a></li>
                                        <li><a href="capabilities.html?page=carbon-steel-forging" class="text-sm text-gray-700 hover:text-secondary transition-colors">Carbon Steel Forging</a></li>
                                        <li><a href="capabilities.html?page=stainless-steel" class="text-sm text-gray-700 hover:text-secondary transition-colors">Stainless Steel</a></li>
                                        <li><a href="capabilities.html?page=ss316-forging" class="text-sm text-gray-700 hover:text-secondary transition-colors">SS316 Forging</a></li>
                                        <li><a href="capabilities.html?page=en24-steel" class="text-sm text-gray-700 hover:text-secondary transition-colors">EN24 Steel</a></li>
                                        <li><a href="capabilities.html?page=en8-steel" class="text-sm text-gray-700 hover:text-secondary transition-colors">EN8 Steel</a></li>
                                        <li><a href="capabilities.html?page=sae-4140-steel" class="text-sm text-gray-700 hover:text-secondary transition-colors">SAE 4140 Steel</a></li>
                                        <li><a href="capabilities.html?page=ms-forging" class="text-sm text-gray-700 hover:text-secondary transition-colors">MS Forging</a></li>
                                        <li><a href="capabilities.html?page=spring-steel" class="text-sm text-gray-700 hover:text-secondary transition-colors">Spring Steel</a></li>
                                        <li><a href="capabilities.html?page=tool-steel" class="text-sm text-gray-700 hover:text-secondary transition-colors">Tool Steel</a></li>
                                        <li><a href="capabilities.html?page=duplex-steel" class="text-sm text-gray-700 hover:text-secondary transition-colors">Duplex Steel</a></li>
                                        <li><a href="capabilities.html?page=nickel-alloy" class="text-sm text-gray-700 hover:text-secondary transition-colors">Nickel Alloy</a></li>
                                        <li><a href="capabilities.html?page=copper-alloy" class="text-sm text-gray-700 hover:text-secondary transition-colors">Copper Alloy</a></li>
                                        <li><a href="capabilities.html?page=titanium-forging" class="text-sm text-gray-700 hover:text-secondary transition-colors">Titanium Forging</a></li>
                                    </ul>
                                </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    <!-- Locations Mega Menu -->
                    <div class="group h-full">
                        <button data-route="locations" class="nav-item text-gray-800 group-hover:text-secondary text-sm font-medium transition-colors inline-flex items-center px-2 h-full relative">
                            Locations <i class="fas fa-chevron-down ml-1 text-[10px] opacity-70 transition-transform group-hover:rotate-180"></i>
                        </button>
                        <div class="absolute left-0 top-24 w-full bg-white shadow-2xl opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200 border-t-2 border-secondary">
                            <div class="max-w-screen-2xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
                                <div class="grid grid-cols-4 gap-8">
                                <div>
                                    <h4 class="text-secondary font-mono font-bold text-xs uppercase tracking-widest mb-6 border-b border-gray-200 pb-2">RAJKOT & GUJARAT</h4>
                                    <ul class="space-y-4">
                                        <li><a href="location.html?page=forging-rajkot" class="text-sm text-gray-700 hover:text-secondary transition-colors">Forging Rajkot</a></li>
                                        <li><a href="location.html?page=steel-forging-rajkot" class="text-sm text-gray-700 hover:text-secondary transition-colors">Steel Forging Rajkot</a></li>
                                        <li><a href="location.html?page=forging-shapar-rajkot" class="text-sm text-gray-700 hover:text-secondary transition-colors">Forging Shapar Rajkot</a></li>
                                        <li><a href="location.html?page=forging-company-gujarat" class="text-sm text-gray-700 hover:text-secondary transition-colors">Forging Company Gujarat</a></li>
                                        <li><a href="location.html?page=ahmedabad" class="text-sm text-gray-700 hover:text-secondary transition-colors">Ahmedabad</a></li>
                                        <li><a href="location.html?page=surat" class="text-sm text-gray-700 hover:text-secondary transition-colors">Surat</a></li>
                                        <li><a href="location.html?page=vadodara" class="text-sm text-gray-700 hover:text-secondary transition-colors">Vadodara</a></li>
                                    </ul>
                                </div>
                                <div>
                                    <h4 class="text-secondary font-mono font-bold text-xs uppercase tracking-widest mb-6 border-b border-gray-200 pb-2">WEST & NORTH INDIA</h4>
                                    <ul class="space-y-4">
                                        <li><a href="location.html?page=mumbai" class="text-sm text-gray-700 hover:text-secondary transition-colors">Mumbai</a></li>
                                        <li><a href="location.html?page=pune" class="text-sm text-gray-700 hover:text-secondary transition-colors">Pune</a></li>
                                        <li><a href="location.html?page=aurangabad" class="text-sm text-gray-700 hover:text-secondary transition-colors">Aurangabad</a></li>
                                        <li><a href="location.html?page=nagpur" class="text-sm text-gray-700 hover:text-secondary transition-colors">Nagpur</a></li>
                                        <li><a href="location.html?page=jaipur" class="text-sm text-gray-700 hover:text-secondary transition-colors">Jaipur</a></li>
                                        <li><a href="location.html?page=ludhiana" class="text-sm text-gray-700 hover:text-secondary transition-colors">Ludhiana</a></li>
                                        <li><a href="location.html?page=delhi" class="text-sm text-gray-700 hover:text-secondary transition-colors">Delhi</a></li>
                                    </ul>
                                </div>
                                <div>
                                    <h4 class="text-secondary font-mono font-bold text-xs uppercase tracking-widest mb-6 border-b border-gray-200 pb-2">SOUTH & EAST INDIA</h4>
                                    <ul class="space-y-4">
                                        <li><a href="location.html?page=bangalore" class="text-sm text-gray-700 hover:text-secondary transition-colors">Bangalore</a></li>
                                        <li><a href="location.html?page=chennai" class="text-sm text-gray-700 hover:text-secondary transition-colors">Chennai</a></li>
                                        <li><a href="location.html?page=coimbatore" class="text-sm text-gray-700 hover:text-secondary transition-colors">Coimbatore</a></li>
                                        <li><a href="location.html?page=hyderabad" class="text-sm text-gray-700 hover:text-secondary transition-colors">Hyderabad</a></li>
                                        <li><a href="location.html?page=kolkata" class="text-sm text-gray-700 hover:text-secondary transition-colors">Kolkata</a></li>
                                        <li><a href="location.html?page=pan-india-forging" class="text-sm text-gray-700 hover:text-secondary transition-colors">Pan India Forging</a></li>
                                    </ul>
                                </div>
                                <div>
                                    <h4 class="text-secondary font-mono font-bold text-xs uppercase tracking-widest mb-6 border-b border-gray-200 pb-2">EXPORT MARKETS</h4>
                                    <ul class="space-y-4">
                                        <li><a href="location.html?page=exporter-gujarat" class="text-sm text-gray-700 hover:text-secondary transition-colors">Exporter Gujarat</a></li>
                                        <li><a href="location.html?page=exporter-india" class="text-sm text-gray-700 hover:text-secondary transition-colors">Exporter India</a></li>
                                        <li><a href="location.html?page=supplier-india" class="text-sm text-gray-700 hover:text-secondary transition-colors">Supplier India</a></li>
                                        <li><a href="location.html?page=supplier-uae" class="text-sm text-gray-700 hover:text-secondary transition-colors">Supplier UAE</a></li>
                                        <li><a href="location.html?page=supplier-europe" class="text-sm text-gray-700 hover:text-secondary transition-colors">Supplier Europe</a></li>
                                    </ul>
                                </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    
                    <!-- Products Dropdown (Simple) -->
                    <div class="relative group h-full">
                        <button data-route="/products" class="nav-item text-gray-800 group-hover:text-secondary text-sm font-medium transition-colors inline-flex items-center px-2 h-full relative">
                            Products <i class="fas fa-chevron-down ml-1 text-[10px] opacity-70 transition-transform group-hover:rotate-180"></i>
                        </button>
                        <div class="absolute left-0 top-24 w-56 bg-white shadow-xl rounded-b-md opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200 border-t-2 border-secondary overflow-hidden py-2">
                            <a href="products.html" class="block px-6 py-3 text-sm text-gray-700 hover:text-secondary font-medium">All Products</a>
                            <a href="products.html?cat=automotive" class="block px-6 py-3 text-sm text-gray-700 hover:text-secondary font-medium">Automotive Parts</a>
                            <a href="products.html?cat=tractor-farm" class="block px-6 py-3 text-sm text-gray-700 hover:text-secondary font-medium">Tractor & Farm</a>
                            <a href="products.html?cat=oil-gas" class="block px-6 py-3 text-sm text-gray-700 hover:text-secondary font-medium">Oil & Gas Parts</a>
                            <a href="products.html?cat=mining" class="block px-6 py-3 text-sm text-gray-700 hover:text-secondary font-medium">Mining Parts</a>
                            <a href="products.html?cat=industrial" class="block px-6 py-3 text-sm text-gray-700 hover:text-secondary font-medium">Industrial Parts</a>
                        </div>
                    </div>

                    <!-- Company Dropdown (Simple) -->
                    <div class="relative group h-full">
                        <button data-route="/about" class="nav-item text-gray-800 group-hover:text-secondary text-sm font-medium transition-colors inline-flex items-center px-2 h-full relative">
                            Company <i class="fas fa-chevron-down ml-1 text-[10px] opacity-70 transition-transform group-hover:rotate-180"></i>
                        </button>
                        <div class="absolute left-0 top-24 w-56 bg-white shadow-xl rounded-b-md opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200 border-t-2 border-secondary overflow-hidden py-2">
                            <a href="about.html" class="block px-6 py-3 text-sm text-gray-700 hover:text-secondary font-medium">About JK Forge</a>
                            <a href="company.html?page=process" class="block px-6 py-3 text-sm text-gray-700 hover:text-secondary font-medium">Manufacturing Process</a>
                            <a href="company.html?page=infrastructure" class="block px-6 py-3 text-sm text-gray-700 hover:text-secondary font-medium">Infrastructure</a>
                        </div>
                    </div>
                    
                    <a href="contact.html" data-route="/contact" class="nav-item text-gray-800 hover:text-secondary text-sm font-medium transition-colors px-2 py-6 relative h-full flex items-center">Contact</a>
                </nav>

                <!-- CTA -->
                <div class="hidden lg:flex items-center h-full gap-4">
                    <a href="contact.html" class="bg-gradient-to-r from-secondary to-primary hover:from-primary hover:to-secondary text-white px-6 py-2.5 rounded-full text-sm font-bold tracking-wide transition-all shadow-md hover:shadow-lg hover:-translate-y-0.5 inline-flex items-center">
                        Get a Quote <i class="fas fa-arrow-right ml-2 text-xs"></i>
                    </a>
                </div>

                <!-- Mobile Menu Button -->
                <div class="lg:hidden flex items-center h-full">
                    <button type="button" id="mobile-menu-btn" class="text-gray-800 hover:text-secondary focus:outline-none p-2" aria-label="Toggle menu">
                        <i class="fas fa-bars text-2xl"></i>
                    </button>
                </div>
            </div>
        </div>

        <!-- Mobile Menu (Hidden by default) -->
        <div id="mobile-menu" class="hidden lg:hidden bg-white border-t border-gray-100 absolute w-full shadow-lg max-h-[calc(100vh-96px)] overflow-y-auto">
            <div class="px-4 pt-2 pb-6 space-y-1" id="mobile-menu-container">
                <a href="index.html" class="block px-3 py-3 rounded-md text-base font-medium text-gray-700 hover:text-secondary hover:bg-gray-50">Home</a>
                <a href="about.html" class="block px-3 py-3 rounded-md text-base font-medium text-gray-700 hover:text-secondary hover:bg-gray-50">Company</a>
                <!-- Industries Accordion -->
                <details class="group border-b border-gray-100 last:border-0">
                    <summary class="flex justify-between items-center font-medium cursor-pointer list-none px-3 py-3 text-base text-gray-700 hover:text-secondary hover:bg-gray-50 rounded-md">
                        <span>Industries</span>
                        <span class="transition group-open:rotate-180">
                            <i class="fas fa-chevron-down"></i>
                        </span>
                    </summary>
                    <div class="text-neutral-600 px-4 pb-4">
                        <h4 class="text-[#c8321e] font-bold text-xs uppercase tracking-widest mt-4 mb-2">MOBILITY</h4>
                        <a href="industry.html?page=automotive-forging" class="block py-2 text-sm text-gray-600 hover:text-secondary">Automotive Forging</a>
                        <a href="industry.html?page=automobile-parts" class="block py-2 text-sm text-gray-600 hover:text-secondary">Automobile Parts</a>
                        <a href="industry.html?page=automotive-forging-rajkot" class="block py-2 text-sm text-gray-600 hover:text-secondary">Automotive Forging Rajkot</a>
                        <a href="industry.html?page=commercial-vehicle" class="block py-2 text-sm text-gray-600 hover:text-secondary">Commercial Vehicle</a>
                        <a href="industry.html?page=truck-parts-forging" class="block py-2 text-sm text-gray-600 hover:text-secondary">Truck Parts Forging</a>
                        <a href="industry.html?page=two-wheeler-parts" class="block py-2 text-sm text-gray-600 hover:text-secondary">Two-Wheeler Parts</a>
                        <a href="industry.html?page=agricultural-equipment" class="block py-2 text-sm text-gray-600 hover:text-secondary">Agricultural Equipment</a>
                        <a href="industry.html?page=tractor-parts" class="block py-2 text-sm text-gray-600 hover:text-secondary">Tractor Parts</a>
                        <a href="industry.html?page=railway-forging" class="block py-2 text-sm text-gray-600 hover:text-secondary">Railway Forging</a>
                        <a href="industry.html?page=defense-forging" class="block py-2 text-sm text-gray-600 hover:text-secondary">Defense Forging</a>
                        <a href="industry.html?page=marine-forging" class="block py-2 text-sm text-gray-600 hover:text-secondary">Marine Forging</a>
                        <a href="industry.html?page=shipbuilding-forging" class="block py-2 text-sm text-gray-600 hover:text-secondary">Shipbuilding Forging</a>
                        
                        <h4 class="text-[#c8321e] font-bold text-xs uppercase tracking-widest mt-6 mb-2">ENERGY & MINING</h4>
                        <a href="industry.html?page=oil-gas-forging" class="block py-2 text-sm text-gray-600 hover:text-secondary">Oil & Gas Forging</a>
                        <a href="industry.html?page=oil-gas-equipment" class="block py-2 text-sm text-gray-600 hover:text-secondary">Oil & Gas Equipment</a>
                        <a href="industry.html?page=petrochemical-forging" class="block py-2 text-sm text-gray-600 hover:text-secondary">Petrochemical Forging</a>
                        <a href="industry.html?page=offshore-forging" class="block py-2 text-sm text-gray-600 hover:text-secondary">Offshore Forging</a>
                        <a href="industry.html?page=power-generation" class="block py-2 text-sm text-gray-600 hover:text-secondary">Power Generation</a>
                        <a href="industry.html?page=wind-energy-forging" class="block py-2 text-sm text-gray-600 hover:text-secondary">Wind Energy Forging</a>
                        <a href="industry.html?page=solar-energy-forging" class="block py-2 text-sm text-gray-600 hover:text-secondary">Solar Energy Forging</a>
                        <a href="industry.html?page=mining-forging" class="block py-2 text-sm text-gray-600 hover:text-secondary">Mining Forging</a>
                        
                        <h4 class="text-[#c8321e] font-bold text-xs uppercase tracking-widest mt-6 mb-2">PROCESS INDUSTRY</h4>
                        <a href="industry.html?page=chemical-plant-forging" class="block py-2 text-sm text-gray-600 hover:text-secondary">Chemical Plant Forging</a>
                        <a href="industry.html?page=water-treatment" class="block py-2 text-sm text-gray-600 hover:text-secondary">Water Treatment</a>
                        <a href="industry.html?page=food-processing" class="block py-2 text-sm text-gray-600 hover:text-secondary">Food Processing</a>
                        <a href="industry.html?page=pharmaceutical-equipment" class="block py-2 text-sm text-gray-600 hover:text-secondary">Pharmaceutical Equipment</a>
                        <a href="industry.html?page=aerospace-grade" class="block py-2 text-sm text-gray-600 hover:text-secondary">Aerospace Grade</a>
                        <a href="industry.html?page=earthmoving-equipment" class="block py-2 text-sm text-gray-600 hover:text-secondary">Earthmoving Equipment</a>
                        <a href="industry.html?page=construction-equipment" class="block py-2 text-sm text-gray-600 hover:text-secondary">Construction Equipment</a>
                        
                        <h4 class="text-[#c8321e] font-bold text-xs uppercase tracking-widest mt-6 mb-2">HEAVY INDUSTRY</h4>
                        <a href="industry.html?page=steel-plant-forging" class="block py-2 text-sm text-gray-600 hover:text-secondary">Steel Plant Forging</a>
                        <a href="industry.html?page=cement-plant-forging" class="block py-2 text-sm text-gray-600 hover:text-secondary">Cement Plant Forging</a>
                        <a href="industry.html?page=sugar-mill-forging" class="block py-2 text-sm text-gray-600 hover:text-secondary">Sugar Mill Forging</a>
                        <a href="industry.html?page=paper-mill-forging" class="block py-2 text-sm text-gray-600 hover:text-secondary">Paper Mill Forging</a>
                        <a href="industry.html?page=textile-machinery" class="block py-2 text-sm text-gray-600 hover:text-secondary">Textile Machinery</a>
                        <a href="industry.html?page=industrial-forging" class="block py-2 text-sm text-gray-600 hover:text-secondary">Industrial Forging</a>
                        <a href="industry.html?page=elevator-forging" class="block py-2 text-sm text-gray-600 hover:text-secondary">Elevator Forging</a>
                        <a href="industry.html?page=crane-forging" class="block py-2 text-sm text-gray-600 hover:text-secondary">Crane Forging</a>
                    </div>
                </details>
                
                <!-- Components Accordion -->
                <details class="group border-b border-gray-100 last:border-0">
                    <summary class="flex justify-between items-center font-medium cursor-pointer list-none px-3 py-3 text-base text-gray-700 hover:text-secondary hover:bg-gray-50 rounded-md">
                        <span>Components</span>
                        <span class="transition group-open:rotate-180">
                            <i class="fas fa-chevron-down"></i>
                        </span>
                    </summary>
                    <div class="text-neutral-600 px-4 pb-4">
                        <h4 class="text-[#c8321e] font-bold text-xs uppercase tracking-widest mt-4 mb-2">DRIVETRAIN & ROTATING</h4>
                        <a href="components.html?page=gear-forging" class="block py-2 text-sm text-gray-600 hover:text-secondary">Gear Forging</a>
                        <a href="components.html?page=shaft-forging" class="block py-2 text-sm text-gray-600 hover:text-secondary">Shaft Forging</a>
                        <a href="components.html?page=crankshaft-forging" class="block py-2 text-sm text-gray-600 hover:text-secondary">Crankshaft Forging</a>
                        <a href="components.html?page=spindle-forging" class="block py-2 text-sm text-gray-600 hover:text-secondary">Spindle Forging</a>
                        <h4 class="text-[#c8321e] font-bold text-xs uppercase tracking-widest mt-4 mb-2">STEERING & SUSPENSION</h4>
                        <a href="components.html?page=steering-knuckle" class="block py-2 text-sm text-gray-600 hover:text-secondary">Steering Knuckle</a>
                        <a href="components.html?page=stub-axle-forging" class="block py-2 text-sm text-gray-600 hover:text-secondary">Stub Axle Forging</a>
                        <a href="components.html?page=tie-rod-forging" class="block py-2 text-sm text-gray-600 hover:text-secondary">Tie Rod Forging</a>
                        <h4 class="text-[#c8321e] font-bold text-xs uppercase tracking-widest mt-4 mb-2">FLUID, FLOW & FASTENING</h4>
                        <a href="components.html?page=flange-forging" class="block py-2 text-sm text-gray-600 hover:text-secondary">Flange Forging</a>
                        <a href="components.html?page=valve-body-forging" class="block py-2 text-sm text-gray-600 hover:text-secondary">Valve Body Forging</a>
                        <a href="components.html?page=hydraulic-cylinder" class="block py-2 text-sm text-gray-600 hover:text-secondary">Hydraulic Cylinder</a>
                    </div>
                </details>

                <!-- Capabilities Accordion -->
                <details class="group border-b border-gray-100 last:border-0">
                    <summary class="flex justify-between items-center font-medium cursor-pointer list-none px-3 py-3 text-base text-gray-700 hover:text-secondary hover:bg-gray-50 rounded-md">
                        <span>Capabilities</span>
                        <span class="transition group-open:rotate-180">
                            <i class="fas fa-chevron-down"></i>
                        </span>
                    </summary>
                    <div class="text-neutral-600 px-4 pb-4">
                        <h4 class="text-[#c8321e] font-bold text-xs uppercase tracking-widest mt-4 mb-2">FORGING PROCESSES</h4>
                        <a href="capabilities.html?page=hot-forging" class="block py-2 text-sm text-gray-600 hover:text-secondary">Hot Forging</a>
                        <a href="capabilities.html?page=closed-die-forging" class="block py-2 text-sm text-gray-600 hover:text-secondary">Closed Die Forging</a>
                        <a href="capabilities.html?page=open-die-forging" class="block py-2 text-sm text-gray-600 hover:text-secondary">Open Die Forging</a>
                        <h4 class="text-[#c8321e] font-bold text-xs uppercase tracking-widest mt-4 mb-2">VALUE-ADD SERVICES</h4>
                        <a href="capabilities.html?page=cnc-machining" class="block py-2 text-sm text-gray-600 hover:text-secondary">CNC Machining</a>
                        <a href="capabilities.html?page=heat-treatment" class="block py-2 text-sm text-gray-600 hover:text-secondary">Heat Treatment</a>
                        <a href="capabilities.html?page=surface-treatment" class="block py-2 text-sm text-gray-600 hover:text-secondary">Surface Treatment</a>
                        <h4 class="text-[#c8321e] font-bold text-xs uppercase tracking-widest mt-4 mb-2">MATERIAL GRADES</h4>
                        <a href="capabilities.html?page=alloy-steel-forging" class="block py-2 text-sm text-gray-600 hover:text-secondary">Alloy Steel Forging</a>
                        <a href="capabilities.html?page=carbon-steel-forging" class="block py-2 text-sm text-gray-600 hover:text-secondary">Carbon Steel Forging</a>
                        <a href="capabilities.html?page=stainless-steel" class="block py-2 text-sm text-gray-600 hover:text-secondary">Stainless Steel</a>
                    </div>
                </details>
                
                <!-- Locations Accordion -->
                <details class="group border-b border-gray-100 last:border-0">
                    <summary class="flex justify-between items-center font-medium cursor-pointer list-none px-3 py-3 text-base text-gray-700 hover:text-secondary hover:bg-gray-50 rounded-md">
                        <span>Locations</span>
                        <span class="transition group-open:rotate-180">
                            <i class="fas fa-chevron-down"></i>
                        </span>
                    </summary>
                    <div class="text-neutral-600 px-4 pb-4">
                        <h4 class="text-[#c8321e] font-bold text-xs uppercase tracking-widest mt-4 mb-2">RAJKOT & GUJARAT</h4>
                        <a href="location.html?page=forging-rajkot" class="block py-2 text-sm text-gray-600 hover:text-secondary">Rajkot</a>
                        <a href="location.html?page=ahmedabad" class="block py-2 text-sm text-gray-600 hover:text-secondary">Ahmedabad</a>
                        <a href="location.html?page=surat" class="block py-2 text-sm text-gray-600 hover:text-secondary">Surat</a>
                        <h4 class="text-[#c8321e] font-bold text-xs uppercase tracking-widest mt-4 mb-2">WEST & NORTH INDIA</h4>
                        <a href="location.html?page=mumbai" class="block py-2 text-sm text-gray-600 hover:text-secondary">Mumbai</a>
                        <a href="location.html?page=pune" class="block py-2 text-sm text-gray-600 hover:text-secondary">Pune</a>
                        <a href="location.html?page=delhi" class="block py-2 text-sm text-gray-600 hover:text-secondary">Delhi</a>
                        <h4 class="text-[#c8321e] font-bold text-xs uppercase tracking-widest mt-4 mb-2">SOUTH & EAST INDIA</h4>
                        <a href="location.html?page=bangalore" class="block py-2 text-sm text-gray-600 hover:text-secondary">Bangalore</a>
                        <a href="location.html?page=chennai" class="block py-2 text-sm text-gray-600 hover:text-secondary">Chennai</a>
                        <h4 class="text-[#c8321e] font-bold text-xs uppercase tracking-widest mt-4 mb-2">EXPORT MARKETS</h4>
                        <a href="location.html?page=exporter-india" class="block py-2 text-sm text-gray-600 hover:text-secondary">Exporter India</a>
                        <a href="location.html?page=supplier-uae" class="block py-2 text-sm text-gray-600 hover:text-secondary">Supplier UAE</a>
                    </div>
                </details>
                <a href="products.html" class="block px-3 py-3 rounded-md text-base font-medium text-gray-700 hover:text-secondary hover:bg-gray-50">Products</a>
                <a href="contact.html" class="block px-3 py-3 rounded-md text-base font-medium text-gray-700 hover:text-secondary hover:bg-gray-50">Contact</a>
                <a href="contact.html" class="block w-full text-center mt-4 bg-secondary text-white px-5 py-3 rounded-md font-medium">Get a Quote</a>
            </div>
        </div>
    </header>`;
