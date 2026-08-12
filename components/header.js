function renderHeader() {
    let headerHTML = `<header class="fixed w-full top-0 z-50 bg-white transition-colors duration-300 border-b border-gray-200" id="navbar">
        <div class="w-full max-w-[96%] mx-auto px-4 sm:px-6 lg:px-8">
            <div class="flex justify-between items-center h-24">
                <!-- Logo -->
                <div class="flex-shrink-0 flex items-center group">
                    <a href="index.html" class="flex items-center gap-3 relative">
                        <div class="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-full bg-white/20 blur-2xl rounded-full scale-[2.0] animate-pulse pointer-events-none"></div>
                        <img src="./images/logo.png" alt="JK Forge Logo" class="relative z-10 h-24 w-auto object-contain drop-shadow-[0_0_15px_rgba(255,255,255,0.4)] group-hover:drop-shadow-[0_0_25px_rgba(255,255,255,0.7)] group-hover:scale-105 transition-all duration-300">
                    </a>
                </div>

                <!-- Desktop Menu -->
                <nav class="hidden lg:flex items-center space-x-1 lg:space-x-3 h-full">
                    <a href="index.html" data-route="/" class="nav-item text-gray-800 hover:text-secondary text-sm font-medium transition-colors px-2 py-6 relative h-full flex items-center">Home</a>
                    
                    <!-- Industries Mega Menu -->
                    <div class="group h-full">
                        <button data-route="industries" class="nav-item text-gray-800 group-hover:text-secondary text-sm font-medium transition-colors inline-flex items-center px-2 h-full relative">
                            Industries <i class="fas fa-chevron-down ml-1 text-[10px] opacity-70 transition-transform group-hover:rotate-180"></i>
                        </button>
                        <div class="absolute left-0 top-24 w-full bg-white shadow-2xl opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200 border-t-4 border-secondary max-h-[85vh] overflow-y-auto">
                            <div class="max-w-screen-2xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
                                <div class="grid grid-cols-4 gap-8">
                                    <div>
                                        <h4 class="text-secondary font-mono font-bold text-xs uppercase tracking-widest mb-4 border-b border-gray-200 pb-2">MOBILITY & EV</h4>
                                        <ul class="space-y-2 text-xs">
                                            <li><a href="pages/industries/automotive-forging-manufacturer.html" class="text-gray-700 hover:text-secondary transition-colors">Automotive Forging</a></li>
                                            <li><a href="pages/industries/automobile-parts-forging-manufacturer.html" class="text-gray-700 hover:text-secondary transition-colors">Automobile Parts</a></li>
                                            <li><a href="pages/industries/automotive-forging-rajkot.html" class="text-gray-700 hover:text-secondary transition-colors">Automotive Forging Rajkot</a></li>
                                            <li><a href="pages/industries/ev-forging-manufacturer.html" class="text-gray-700 hover:text-secondary transition-colors">EV Forging Manufacturer</a></li>
                                            <li><a href="pages/industries/ev-charging-infrastructure-forging-manufacturer.html" class="text-gray-700 hover:text-secondary transition-colors">EV Charging Infrastructure</a></li>
                                            <li><a href="pages/industries/commercial-vehicle-forging.html" class="text-gray-700 hover:text-secondary transition-colors">Commercial Vehicle</a></li>
                                            <li><a href="pages/industries/truck-parts-forging.html" class="text-gray-700 hover:text-secondary transition-colors">Truck Parts Forging</a></li>
                                            <li><a href="pages/industries/two-wheeler-parts-forging.html" class="text-gray-700 hover:text-secondary transition-colors">Two-Wheeler Parts</a></li>
                                            <li><a href="pages/industries/forging-supplier-tier1-automotive-india.html" class="text-gray-700 hover:text-secondary transition-colors">Tier 1 Automotive Supplier</a></li>
                                            <li><a href="pages/industries/agricultural-equipment-forging.html" class="text-gray-700 hover:text-secondary transition-colors">Agricultural Equipment</a></li>
                                            <li><a href="pages/industries/tractor-parts-forging.html" class="text-gray-700 hover:text-secondary transition-colors">Tractor Parts</a></li>
                                            <li><a href="pages/industries/railway-forging-manufacturer.html" class="text-gray-700 hover:text-secondary transition-colors">Railway Forging</a></li>
                                            <li><a href="pages/industries/defense-forging-manufacturer.html" class="text-gray-700 hover:text-secondary transition-colors">Defense Forging</a></li>
                                            <li><a href="pages/industries/defence-forging-manufacturer.html" class="text-gray-700 hover:text-secondary transition-colors">Defence Forging</a></li>
                                            <li><a href="pages/industries/marine-forging-manufacturer.html" class="text-gray-700 hover:text-secondary transition-colors">Marine Forging</a></li>
                                            <li><a href="pages/industries/shipbuilding-forging-manufacturer.html" class="text-gray-700 hover:text-secondary transition-colors">Shipbuilding Forging</a></li>
                                            <li><a href="pages/industries/metro-rail-transit-forging-manufacturer.html" class="text-gray-700 hover:text-secondary transition-colors">Metro Rail Transit</a></li>
                                            <li><a href="pages/industries/motorsport-racing-forging-manufacturer.html" class="text-gray-700 hover:text-secondary transition-colors">Motorsport Racing</a></li>
                                            <li><a href="pages/industries/ropeway-cable-car-forging-manufacturer.html" class="text-gray-700 hover:text-secondary transition-colors">Ropeway & Cable Car</a></li>
                                        </ul>
                                    </div>
                                    <div>
                                        <h4 class="text-secondary font-mono font-bold text-xs uppercase tracking-widest mb-4 border-b border-gray-200 pb-2">ENERGY & MINING</h4>
                                        <ul class="space-y-2 text-xs">
                                            <li><a href="pages/industries/offshore-oil-gas-forging-manufacturer.html" class="text-gray-700 hover:text-secondary transition-colors">Oil & Gas Forging</a></li>
                                            <li><a href="pages/industries/oil-gas-equipment-forging.html" class="text-gray-700 hover:text-secondary transition-colors">Oil & Gas Equipment</a></li>
                                            <li><a href="pages/industries/petrochemical-forging-manufacturer.html" class="text-gray-700 hover:text-secondary transition-colors">Petrochemical Forging</a></li>
                                            <li><a href="pages/industries/offshore-forging-manufacturer.html" class="text-gray-700 hover:text-secondary transition-colors">Offshore Forging</a></li>
                                            <li><a href="pages/industries/offshore-oil-gas-forging-manufacturer.html" class="text-gray-700 hover:text-secondary transition-colors">Offshore Oil & Gas</a></li>
                                            <li><a href="pages/industries/power-generation-forging.html" class="text-gray-700 hover:text-secondary transition-colors">Power Generation</a></li>
                                            <li><a href="pages/industries/wind-energy-forging.html" class="text-gray-700 hover:text-secondary transition-colors">Wind Energy Forging</a></li>
                                            <li><a href="pages/industries/vertical-axis-wind-turbine-forging-manufacturer.html" class="text-gray-700 hover:text-secondary transition-colors">Wind Turbine Forging</a></li>
                                            <li><a href="pages/industries/floating-offshore-wind-forging-manufacturer.html" class="text-gray-700 hover:text-secondary transition-colors">Offshore Wind Forging</a></li>
                                            <li><a href="pages/industries/solar-energy-forging.html" class="text-gray-700 hover:text-secondary transition-colors">Solar Energy Forging</a></li>
                                            <li><a href="pages/industries/nuclear-forging-manufacturer.html" class="text-gray-700 hover:text-secondary transition-colors">Nuclear Forging</a></li>
                                            <li><a href="pages/industries/nuclear-fusion-forging-manufacturer.html" class="text-gray-700 hover:text-secondary transition-colors">Nuclear Fusion</a></li>
                                            <li><a href="pages/industries/hydropower-forging-manufacturer.html" class="text-gray-700 hover:text-secondary transition-colors">Hydropower Forging</a></li>
                                            <li><a href="pages/industries/geothermal-energy-forging-manufacturer.html" class="text-gray-700 hover:text-secondary transition-colors">Geothermal Energy</a></li>
                                            <li><a href="pages/industries/mining-forging-manufacturer.html" class="text-gray-700 hover:text-secondary transition-colors">Mining Forging</a></li>
                                            <li><a href="pages/industries/deep-sea-mining-equipment-forging-manufacturer.html" class="text-gray-700 hover:text-secondary transition-colors">Mining Equipment</a></li>
                                            <li><a href="pages/industries/hydrogen-energy-forging-manufacturer.html" class="text-gray-700 hover:text-secondary transition-colors">Hydrogen Energy</a></li>
                                            <li><a href="pages/industries/lng-terminal-forging-manufacturer.html" class="text-gray-700 hover:text-secondary transition-colors">LNG Terminal</a></li>
                                            <li><a href="pages/industries/carbon-capture-storage-forging-manufacturer.html" class="text-gray-700 hover:text-secondary transition-colors">Carbon Capture & Storage</a></li>
                                        </ul>
                                    </div>
                                    <div>
                                        <h4 class="text-secondary font-mono font-bold text-xs uppercase tracking-widest mb-4 border-b border-gray-200 pb-2">PROCESS & AEROSPACE</h4>
                                        <ul class="space-y-2 text-xs">
                                            <li><a href="pages/industries/aerospace-forging-manufacturer.html" class="text-gray-700 hover:text-secondary transition-colors">Aerospace Forging</a></li>
                                            <li><a href="pages/industries/aerospace-grade-forging.html" class="text-gray-700 hover:text-secondary transition-colors">Aerospace Grade</a></li>
                                            <li><a href="pages/industries/space-launch-forging-manufacturer.html" class="text-gray-700 hover:text-secondary transition-colors">Space Launch</a></li>
                                            <li><a href="pages/industries/chemical-plant-forging.html" class="text-gray-700 hover:text-secondary transition-colors">Chemical Plant Forging</a></li>
                                            <li><a href="pages/industries/petrochemical-forging-manufacturer.html" class="text-gray-700 hover:text-secondary transition-colors">Petrochemical Manufacturer</a></li>
                                            <li><a href="pages/industries/pressure-vessel-forging-manufacturer.html" class="text-gray-700 hover:text-secondary transition-colors">Pressure Vessel Forging</a></li>
                                            <li><a href="pages/components/pump-valve-forging.html" class="text-gray-700 hover:text-secondary transition-colors">Pump & Valve Forging</a></li>
                                            <li><a href="pages/industries/water-treatment-forging.html" class="text-gray-700 hover:text-secondary transition-colors">Water Treatment</a></li>
                                            <li><a href="pages/industries/food-processing-forging.html" class="text-gray-700 hover:text-secondary transition-colors">Food Processing</a></li>
                                            <li><a href="pages/industries/cold-chain-logistics-equipment-forging-manufacturer.html" class="text-gray-700 hover:text-secondary transition-colors">Cold Chain Logistics Equipment</a></li>
                                            <li><a href="pages/industries/pharmaceutical-equipment-forging.html" class="text-gray-700 hover:text-secondary transition-colors">Pharmaceutical Equipment</a></li>
                                            <li><a href="pages/industries/earthmoving-equipment-forging.html" class="text-gray-700 hover:text-secondary transition-colors">Earthmoving Equipment</a></li>
                                            <li><a href="pages/industries/construction-equipment-forging.html" class="text-gray-700 hover:text-secondary transition-colors">Construction Equipment</a></li>
                                            <li><a href="pages/industries/semiconductor-equipment-forging-manufacturer.html" class="text-gray-700 hover:text-secondary transition-colors">Semiconductor Equipment</a></li>
                                            <li><a href="pages/industries/data-center-cooling-equipment-forging-manufacturer.html" class="text-gray-700 hover:text-secondary transition-colors">Data Center Cooling Equipment</a></li>
                                            <li><a href="pages/industries/desalination-forging-manufacturer.html" class="text-gray-700 hover:text-secondary transition-colors">Desalination Plants</a></li>
                                            <li><a href="pages/industries/biofuel-refinery-forging-manufacturer.html" class="text-gray-700 hover:text-secondary transition-colors">Biofuel Refinery</a></li>
                                            <li><a href="pages/industries/e-fuels-synthesis-plant-forging-manufacturer.html" class="text-gray-700 hover:text-secondary transition-colors">E-Fuels Synthesis Plant</a></li>
                                            <li><a href="pages/industries/brewery-distillery-equipment-forging-manufacturer.html" class="text-gray-700 hover:text-secondary transition-colors">Brewery & Distillery Equipment</a></li>
                                        </ul>
                                    </div>
                                    <div>
                                        <h4 class="text-secondary font-mono font-bold text-xs uppercase tracking-widest mb-4 border-b border-gray-200 pb-2">HEAVY INDUSTRY</h4>
                                        <ul class="space-y-2 text-xs">
                                            <li><a href="pages/industries/steel-plant-forging-manufacturer.html" class="text-gray-700 hover:text-secondary transition-colors">Steel Plant Forging</a></li>
                                            <li><a href="pages/industries/steel-plant-forging-manufacturer.html" class="text-gray-700 hover:text-secondary transition-colors">Steel Plant Manufacturer</a></li>
                                            <li><a href="pages/industries/cement-plant-forging-manufacturer.html" class="text-gray-700 hover:text-secondary transition-colors">Cement Plant Forging</a></li>
                                            <li><a href="pages/industries/cement-plant-forging-manufacturer.html" class="text-gray-700 hover:text-secondary transition-colors">Cement Plant Manufacturer</a></li>
                                            <li><a href="pages/industries/fertilizer-plant-forging-manufacturer.html" class="text-gray-700 hover:text-secondary transition-colors">Fertilizer Plant Forging</a></li>
                                            <li><a href="pages/industries/sugar-mill-forging.html" class="text-gray-700 hover:text-secondary transition-colors">Sugar Mill Forging</a></li>
                                            <li><a href="pages/industries/sugar-ethanol-forging-manufacturer.html" class="text-gray-700 hover:text-secondary transition-colors">Sugar & Ethanol Forging</a></li>
                                            <li><a href="pages/industries/paper-mill-forging.html" class="text-gray-700 hover:text-secondary transition-colors">Paper Mill Forging</a></li>
                                            <li><a href="pages/industries/textile-machinery-forging.html" class="text-gray-700 hover:text-secondary transition-colors">Textile Machinery</a></li>
                                            <li><a href="pages/industries/industrial-forging-manufacturer.html" class="text-gray-700 hover:text-secondary transition-colors">Industrial Forging</a></li>
                                            <li><a href="pages/industries/heavy-forging-manufacturer-india.html" class="text-gray-700 hover:text-secondary transition-colors">Heavy Forging India</a></li>
                                            <li><a href="pages/industries/elevator-forging-manufacturer.html" class="text-gray-700 hover:text-secondary transition-colors">Elevator Forging</a></li>
                                            <li><a href="pages/industries/crane-forging-manufacturer.html" class="text-gray-700 hover:text-secondary transition-colors">Crane Forging</a></li>
                                            <li><a href="pages/industries/crane-forging-manufacturer.html" class="text-gray-700 hover:text-secondary transition-colors">Port Crane Equipment</a></li>
                                            <li><a href="pages/industries/glass-manufacturing-forging-manufacturer.html" class="text-gray-700 hover:text-secondary transition-colors">Glass Manufacturing</a></li>
                                            <li><a href="pages/industries/aerospace-forging-manufacturer.html" class="text-gray-700 hover:text-secondary transition-colors">Robotics & Automation</a></li>
                                            <li><a href="pages/industries/bridge-construction-forging-manufacturer.html" class="text-gray-700 hover:text-secondary transition-colors">Bridge Construction</a></li>
                                            <li><a href="pages/industries/ev-battery-recycling-equipment-forging-manufacturer.html" class="text-gray-700 hover:text-secondary transition-colors">Recycling Equipment</a></li>
                                            <li><a href="pages/industries/packaging-machinery-forging-manufacturer.html" class="text-gray-700 hover:text-secondary transition-colors">Packaging Machinery</a></li>
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
                        <div class="absolute left-0 top-24 w-full bg-white shadow-2xl opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200 border-t-4 border-secondary max-h-[85vh] overflow-y-auto">
                            <div class="max-w-screen-2xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
                                <div class="grid grid-cols-3 gap-8">
                                    <div>
                                        <h4 class="text-secondary font-mono font-bold text-xs uppercase tracking-widest mb-4 border-b border-gray-200 pb-2">DRIVETRAIN & ROTATING</h4>
                                        <ul class="space-y-2 text-xs">
                                            <li><a href="pages/components/bevel-gear-forging-manufacturer.html" class="text-gray-700 hover:text-secondary transition-colors">Gear Forging</a></li>
                                            <li><a href="pages/components/gear-blank-forging-manufacturer.html" class="text-gray-700 hover:text-secondary transition-colors">Gear Blank Forging</a></li>
                                            <li><a href="pages/components/bevel-gear-forging-manufacturer.html" class="text-gray-700 hover:text-secondary transition-colors">Bevel Gear Forging</a></li>
                                            <li><a href="pages/components/axle-shaft-forging-manufacturer.html" class="text-gray-700 hover:text-secondary transition-colors">Shaft Forging</a></li>
                                            <li><a href="pages/components/drive-shaft-forging.html" class="text-gray-700 hover:text-secondary transition-colors">Drive Shaft Forging</a></li>
                                            <li><a href="pages/components/axle-shaft-forging-manufacturer.html" class="text-gray-700 hover:text-secondary transition-colors">Axle Shaft Forging</a></li>
                                            <li><a href="pages/components/crankshaft-forging-manufacturer.html" class="text-gray-700 hover:text-secondary transition-colors">Crankshaft Forging</a></li>
                                            <li><a href="pages/components/camshaft-forging.html" class="text-gray-700 hover:text-secondary transition-colors">Camshaft Forging</a></li>
                                            <li><a href="pages/components/connecting-rod-forging.html" class="text-gray-700 hover:text-secondary transition-colors">Connecting Rod</a></li>
                                            <li><a href="pages/components/gearbox-forging-manufacturer.html" class="text-gray-700 hover:text-secondary transition-colors">Gearbox Forging</a></li>
                                            <li><a href="pages/components/differential-pinion-yoke-forging-manufacturer.html" class="text-gray-700 hover:text-secondary transition-colors">Yoke Forging</a></li>
                                            <li><a href="pages/components/spindle-forging-manufacturer.html" class="text-gray-700 hover:text-secondary transition-colors">Spindle Forging</a></li>
                                            <li><a href="pages/components/wheel-spindle-forging.html" class="text-gray-700 hover:text-secondary transition-colors">Wheel Spindle Forging</a></li>
                                            <li><a href="pages/components/bearing-component-forging.html" class="text-gray-700 hover:text-secondary transition-colors">Bearing Components</a></li>
                                            <li><a href="pages/components/rocker-arm-forging.html" class="text-gray-700 hover:text-secondary transition-colors">Rocker Arm Forging</a></li>
                                            <li><a href="pages/components/piston-rod-forging.html" class="text-gray-700 hover:text-secondary transition-colors">Piston Rod Forging</a></li>
                                            <li><a href="pages/components/steel-shaft-manufacturer-india.html" class="text-gray-700 hover:text-secondary transition-colors">Steel Shaft</a></li>
                                            <li><a href="pages/components/differential-case-forging-manufacturer.html" class="text-gray-700 hover:text-secondary transition-colors">Differential Case</a></li>
                                            <li><a href="pages/components/camshaft-sprocket-forging-manufacturer.html" class="text-gray-700 hover:text-secondary transition-colors">Sprocket Forging</a></li>
                                        </ul>
                                    </div>
                                    <div>
                                        <h4 class="text-secondary font-mono font-bold text-xs uppercase tracking-widest mb-4 border-b border-gray-200 pb-2">STEERING & SUSPENSION</h4>
                                        <ul class="space-y-2 text-xs">
                                            <li><a href="pages/components/steering-knuckle-forging.html" class="text-gray-700 hover:text-secondary transition-colors">Steering Knuckle</a></li>
                                            <li><a href="pages/components/stub-axle-forging.html" class="text-gray-700 hover:text-secondary transition-colors">Stub Axle Forging</a></li>
                                            <li><a href="pages/components/king-pin-forging.html" class="text-gray-700 hover:text-secondary transition-colors">King Pin Forging</a></li>
                                            <li><a href="pages/components/tie-rod-forging.html" class="text-gray-700 hover:text-secondary transition-colors">Tie Rod Forging</a></li>
                                            <li><a href="pages/components/wheel-hub-forging-manufacturer.html" class="text-gray-700 hover:text-secondary transition-colors">Wheel Hub Forging</a></li>
                                            <li><a href="pages/components/front-axle-forging.html" class="text-gray-700 hover:text-secondary transition-colors">Front Axle Forging</a></li>
                                            <li><a href="pages/components/brake-caliper-bracket-forging-manufacturer.html" class="text-gray-700 hover:text-secondary transition-colors">Brake Caliper Bracket</a></li>
                                            <li><a href="pages/components/ball-joint-forging-manufacturer.html" class="text-gray-700 hover:text-secondary transition-colors">Ball Joint Forging</a></li>
                                            <li><a href="pages/components/u-bolt-forging-manufacturer.html" class="text-gray-700 hover:text-secondary transition-colors">U-Bolt Forging</a></li>
                                            <li><a href="pages/components/pitman-arm-forging-manufacturer.html" class="text-gray-700 hover:text-secondary transition-colors">Pitman Arm Forging</a></li>
                                            <li><a href="pages/components/drag-link-forging-manufacturer.html" class="text-gray-700 hover:text-secondary transition-colors">Drag Link Forging</a></li>
                                            <li><a href="pages/components/idler-arm-forging-manufacturer.html" class="text-gray-700 hover:text-secondary transition-colors">Idler Arm Forging</a></li>
                                            <li><a href="pages/components/leaf-spring-shackle-forging-manufacturer.html" class="text-gray-700 hover:text-secondary transition-colors">Leaf Spring Shackle</a></li>
                                            <li><a href="pages/components/stabilizer-link-forging-manufacturer.html" class="text-gray-700 hover:text-secondary transition-colors">Stabilizer Link Forging</a></li>
                                            <li><a href="pages/components/control-arm-forging-manufacturer.html" class="text-gray-700 hover:text-secondary transition-colors">Control Arm Forging</a></li>
                                            <li><a href="pages/components/brake-drum-forging-manufacturer.html" class="text-gray-700 hover:text-secondary transition-colors">Brake Drum Forging</a></li>
                                            <li><a href="pages/components/steering-rack-housing-forging-manufacturer.html" class="text-gray-700 hover:text-secondary transition-colors">Steering Rack Housing</a></li>
                                            <li><a href="pages/components/torsion-bar-forging-manufacturer.html" class="text-gray-700 hover:text-secondary transition-colors">Torsion Bar Forging</a></li>
                                            <li><a href="pages/components/anti-roll-bar-forging-manufacturer.html" class="text-gray-700 hover:text-secondary transition-colors">Anti-Roll Bar Forging</a></li>
                                        </ul>
                                    </div>
                                    <div>
                                        <h4 class="text-secondary font-mono font-bold text-xs uppercase tracking-widest mb-4 border-b border-gray-200 pb-2">FLUID, FLOW & FASTENING</h4>
                                        <ul class="space-y-2 text-xs">
                                            <li><a href="pages/components/axle-flange-forging-manufacturer.html" class="text-gray-700 hover:text-secondary transition-colors">Flange Forging</a></li>
                                            <li><a href="pages/components/coupling-forging-manufacturer.html" class="text-gray-700 hover:text-secondary transition-colors">Coupling Forging</a></li>
                                            <li><a href="pages/components/hydraulic-cylinder-forging.html" class="text-gray-700 hover:text-secondary transition-colors">Hydraulic Cylinder</a></li>
                                            <li><a href="pages/components/hydraulic-fittings-manufacturer.html" class="text-gray-700 hover:text-secondary transition-colors">Hydraulic Fittings</a></li>
                                            <li><a href="pages/components/pump-valve-forging.html" class="text-gray-700 hover:text-secondary transition-colors">Pump & Valve Forging</a></li>
                                            <li><a href="pages/components/valve-body-forging.html" class="text-gray-700 hover:text-secondary transition-colors">Valve Body Forging</a></li>
                                            <li><a href="pages/components/pipeline-fitting-forging.html" class="text-gray-700 hover:text-secondary transition-colors">Pipeline Fitting</a></li>
                                            <li><a href="pages/components/forged-fasteners-manufacturer.html" class="text-gray-700 hover:text-secondary transition-colors">Forged Fasteners</a></li>
                                            <li><a href="pages/components/generator-retaining-ring-forging-manufacturer.html" class="text-gray-700 hover:text-secondary transition-colors">Ring Forging</a></li>
                                            <li><a href="pages/components/hook-forging-manufacturer.html" class="text-gray-700 hover:text-secondary transition-colors">Hook Forging</a></li>
                                            <li><a href="pages/components/clevis-forging-manufacturer.html" class="text-gray-700 hover:text-secondary transition-colors">Clevis Forging</a></li>
                                            <li><a href="pages/components/compressor-forging-manufacturer.html" class="text-gray-700 hover:text-secondary transition-colors">Compressor Forging</a></li>
                                            <li><a href="pages/components/disc-forging-manufacturer.html" class="text-gray-700 hover:text-secondary transition-colors">Disc Forging</a></li>
                                            <li><a href="pages/components/leaf-spring-shackle-forging-manufacturer.html" class="text-gray-700 hover:text-secondary transition-colors">Shackle Forging</a></li>
                                            <li><a href="pages/components/eyebolt-forging-manufacturer.html" class="text-gray-700 hover:text-secondary transition-colors">Eyebolt Forging</a></li>
                                            <li><a href="pages/components/swivel-forging-manufacturer.html" class="text-gray-700 hover:text-secondary transition-colors">Swivel Forging</a></li>
                                            <li><a href="pages/components/turnbuckle-forging-manufacturer.html" class="text-gray-700 hover:text-secondary transition-colors">Turnbuckle Forging</a></li>
                                            <li><a href="pages/components/anchor-chain-forging-manufacturer.html" class="text-gray-700 hover:text-secondary transition-colors">Anchor Chain Forging</a></li>
                                            <li><a href="pages/components/pulley-sheave-forging-manufacturer.html" class="text-gray-700 hover:text-secondary transition-colors">Pulley & Sheave</a></li>
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
                        <div class="absolute left-0 top-24 w-full bg-white shadow-2xl opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200 border-t-4 border-secondary max-h-[85vh] overflow-y-auto">
                            <div class="max-w-screen-2xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
                                <div class="grid grid-cols-3 gap-8">
                                    <div>
                                        <h4 class="text-secondary font-mono font-bold text-xs uppercase tracking-widest mb-4 border-b border-gray-200 pb-2">FORGING PROCESSES</h4>
                                        <ul class="space-y-2 text-xs">
                                            <li><a href="pages/capabilities/cold-forging-vs-hot-forging-comparison.html" class="text-gray-700 hover:text-secondary transition-colors">Hot Forging</a></li>
                                            <li><a href="pages/capabilities/closed-die-forging-manufacturer.html" class="text-gray-700 hover:text-secondary transition-colors">Closed Die Forging</a></li>
                                            <li><a href="pages/capabilities/closed-die-forging-manufacturer.html" class="text-gray-700 hover:text-secondary transition-colors">Closed Die Manufacturer</a></li>
                                            <li><a href="pages/capabilities/open-die-forging-manufacturer.html" class="text-gray-700 hover:text-secondary transition-colors">Open Die Forging</a></li>
                                            <li><a href="pages/capabilities/drop-forging-manufacturer.html" class="text-gray-700 hover:text-secondary transition-colors">Drop Forging</a></li>
                                            <li><a href="pages/capabilities/hammer-forging-vs-press-forging-comparison.html" class="text-gray-700 hover:text-secondary transition-colors">Press Forging</a></li>
                                            <li><a href="pages/capabilities/precision-forging-manufacturer.html" class="text-gray-700 hover:text-secondary transition-colors">Precision Forging</a></li>
                                            <li><a href="pages/capabilities/bulk-forging-manufacturer.html" class="text-gray-700 hover:text-secondary transition-colors">Bulk Forging</a></li>
                                            <li><a href="pages/capabilities/custom-oem-forging.html" class="text-gray-700 hover:text-secondary transition-colors">Custom OEM Forging</a></li>
                                            <li><a href="pages/capabilities/custom-forging-india.html" class="text-gray-700 hover:text-secondary transition-colors">Custom Forging India</a></li>
                                            <li><a href="pages/capabilities/prototype-forging-manufacturer.html" class="text-gray-700 hover:text-secondary transition-colors">Prototype Forging</a></li>
                                            <li><a href="pages/capabilities/warm-forging-manufacturer.html" class="text-gray-700 hover:text-secondary transition-colors">Warm Forging</a></li>
                                            <li><a href="pages/capabilities/open-die-vs-closed-die-forging-comparison.html" class="text-gray-700 hover:text-secondary transition-colors">Open-Die vs. Closed-Die</a></li>
                                            <li><a href="pages/capabilities/custom-forging-india.html" class="text-gray-700 hover:text-secondary transition-colors">How to Order a Custom Forging</a></li>
                                            <li><a href="pages/capabilities/forging-vs-bar-stock-machining-comparison.html" class="text-gray-700 hover:text-secondary transition-colors">Forging vs. Bar Stock Machining</a></li>
                                            <li><a href="pages/capabilities/cold-forging-vs-hot-forging-comparison.html" class="text-gray-700 hover:text-secondary transition-colors">Cold vs. Hot Forging</a></li>
                                            <li><a href="pages/capabilities/china-plus-one-forging-sourcing-strategy.html" class="text-gray-700 hover:text-secondary transition-colors">China Plus One Sourcing</a></li>
                                            <li><a href="pages/capabilities/cad-drawing-conversion-services.html" class="text-gray-700 hover:text-secondary transition-colors">How to Read a Forging Drawing</a></li>
                                            <li><a href="pages/capabilities/forging-defect-types-guide.html" class="text-gray-700 hover:text-secondary transition-colors">Forging Defect Types</a></li>
                                        </ul>
                                    </div>
                                    <div>
                                        <h4 class="text-secondary font-mono font-bold text-xs uppercase tracking-widest mb-4 border-b border-gray-200 pb-2">VALUE-ADD SERVICES</h4>
                                        <ul class="space-y-2 text-xs">
                                            <li><a href="pages/capabilities/cnc-machining-rajkot.html" class="text-gray-700 hover:text-secondary transition-colors">CNC Machining</a></li>
                                            <li><a href="pages/capabilities/forging-machining-services.html" class="text-gray-700 hover:text-secondary transition-colors">Forging Machining</a></li>
                                            <li><a href="pages/capabilities/glossary-of-heat-treatment-terms-guide.html" class="text-gray-700 hover:text-secondary transition-colors">Heat Treatment</a></li>
                                            <li><a href="pages/capabilities/shot-blasting-services.html" class="text-gray-700 hover:text-secondary transition-colors">Shot Blasting</a></li>
                                            <li><a href="pages/capabilities/forging-surface-treatment.html" class="text-gray-700 hover:text-secondary transition-colors">Surface Treatment</a></li>
                                            <li><a href="pages/capabilities/zinc-plating-services.html" class="text-gray-700 hover:text-secondary transition-colors">Zinc Plating</a></li>
                                            <li><a href="pages/capabilities/forging-die-manufacturer.html" class="text-gray-700 hover:text-secondary transition-colors">Forging Dies</a></li>
                                            <li><a href="pages/locations/forging-exporter-gujarat.html" class="text-gray-700 hover:text-secondary transition-colors">Forging Exporter</a></li>
                                            <li><a href="pages/capabilities/iso-certified-forging-manufacturer.html" class="text-gray-700 hover:text-secondary transition-colors">ISO Certified Forging</a></li>
                                            <li><a href="pages/capabilities/forging-vs-casting.html" class="text-gray-700 hover:text-secondary transition-colors">Forging vs Casting</a></li>
                                            <li><a href="pages/capabilities/shot-peening-services.html" class="text-gray-700 hover:text-secondary transition-colors">Shot Peening</a></li>
                                            <li><a href="pages/capabilities/induction-hardening-services.html" class="text-gray-700 hover:text-secondary transition-colors">Induction Hardening</a></li>
                                            <li><a href="pages/capabilities/forging-simulation-services.html" class="text-gray-700 hover:text-secondary transition-colors">Forging Simulation</a></li>
                                            <li><a href="pages/capabilities/forging-reverse-engineering-services.html" class="text-gray-700 hover:text-secondary transition-colors">Reverse Engineering</a></li>
                                            <li><a href="pages/capabilities/passivation-services-stainless-steel.html" class="text-gray-700 hover:text-secondary transition-colors">Passivation Services</a></li>
                                            <li><a href="pages/capabilities/black-oxide-coating-services.html" class="text-gray-700 hover:text-secondary transition-colors">Black Oxide Coating</a></li>
                                            <li><a href="pages/capabilities/forging-dimensional-inspection-services.html" class="text-gray-700 hover:text-secondary transition-colors">Dimensional Inspection</a></li>
                                            <li><a href="pages/capabilities/forging-aftermarket-replacement-parts-manufacturer.html" class="text-gray-700 hover:text-secondary transition-colors">Aftermarket Replacement Parts</a></li>
                                            <li><a href="pages/capabilities/magnetic-particle-inspection-services.html" class="text-gray-700 hover:text-secondary transition-colors">Magnetic Particle Inspection</a></li>
                                        </ul>
                                    </div>
                                    <div>
                                        <h4 class="text-secondary font-mono font-bold text-xs uppercase tracking-widest mb-4 border-b border-gray-200 pb-2">MATERIAL GRADES</h4>
                                        <ul class="space-y-2 text-xs">
                                            <li><a href="pages/capabilities/alloysteel-forging-manufacturer.html" class="text-gray-700 hover:text-secondary transition-colors">Alloy Steel Forging</a></li>
                                            <li><a href="pages/capabilities/carbon-steel-forging.html" class="text-gray-700 hover:text-secondary transition-colors">Carbon Steel Forging</a></li>
                                            <li><a href="pages/capabilities/passivation-services-stainless-steel.html" class="text-gray-700 hover:text-secondary transition-colors">Stainless Steel</a></li>
                                            <li><a href="pages/capabilities/ss316-forging.html" class="text-gray-700 hover:text-secondary transition-colors">SS316 Forging</a></li>
                                            <li><a href="pages/capabilities/en24-steel-forging.html" class="text-gray-700 hover:text-secondary transition-colors">EN24 Steel</a></li>
                                            <li><a href="pages/capabilities/en8-steel-forging.html" class="text-gray-700 hover:text-secondary transition-colors">EN8 Steel</a></li>
                                            <li><a href="pages/capabilities/sae-4140-steel-forging.html" class="text-gray-700 hover:text-secondary transition-colors">SAE 4140 Steel</a></li>
                                            <li><a href="pages/capabilities/ms-forging-manufacturer.html" class="text-gray-700 hover:text-secondary transition-colors">MS Forging</a></li>
                                            <li><a href="pages/capabilities/spring-steel-forging-manufacturer.html" class="text-gray-700 hover:text-secondary transition-colors">Spring Steel</a></li>
                                            <li><a href="pages/capabilities/tool-steel-forging-manufacturer.html" class="text-gray-700 hover:text-secondary transition-colors">Tool Steel</a></li>
                                            <li><a href="pages/capabilities/duplex-steel-forging-manufacturer.html" class="text-gray-700 hover:text-secondary transition-colors">Duplex Steel</a></li>
                                            <li><a href="pages/capabilities/nickel-alloy-forging-manufacturer.html" class="text-gray-700 hover:text-secondary transition-colors">Nickel Alloy</a></li>
                                            <li><a href="pages/capabilities/copper-alloy-forging-manufacturer.html" class="text-gray-700 hover:text-secondary transition-colors">Copper Alloy</a></li>
                                            <li><a href="pages/capabilities/titanium-forging-manufacturer.html" class="text-gray-700 hover:text-secondary transition-colors">Titanium Forging</a></li>
                                            <li><a href="pages/capabilities/inconel-forging-manufacturer.html" class="text-gray-700 hover:text-secondary transition-colors">Inconel Forging</a></li>
                                            <li><a href="pages/capabilities/astm-a105-forging-manufacturer.html" class="text-gray-700 hover:text-secondary transition-colors">ASTM A105</a></li>
                                            <li><a href="pages/capabilities/astm-a182-forging-manufacturer.html" class="text-gray-700 hover:text-secondary transition-colors">ASTM A182</a></li>
                                            <li><a href="pages/capabilities/17-4ph-stainless-forging-manufacturer.html" class="text-gray-700 hover:text-secondary transition-colors">17-4PH Stainless</a></li>
                                            <li><a href="pages/capabilities/maraging-steel-forging-manufacturer.html" class="text-gray-700 hover:text-secondary transition-colors">Maraging Steel</a></li>
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
                        <div class="absolute left-0 top-24 w-full bg-white shadow-2xl opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200 border-t-4 border-secondary max-h-[85vh] overflow-y-auto">
                            <div class="max-w-screen-2xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
                                <div class="grid grid-cols-4 gap-8">
                                    <div>
                                        <h4 class="text-secondary font-mono font-bold text-xs uppercase tracking-widest mb-4 border-b border-gray-200 pb-2">RAJKOT & GUJARAT</h4>
                                        <ul class="space-y-2 text-xs">
                                            <li><a href="pages/capabilities/closed-die-forging-rajkot.html" class="text-gray-700 hover:text-secondary transition-colors">Forging Rajkot</a></li>
                                            <li><a href="pages/locations/steel-forging-rajkot.html" class="text-gray-700 hover:text-secondary transition-colors">Steel Forging Rajkot</a></li>
                                            <li><a href="pages/locations/forging-shapar-rajkot.html" class="text-gray-700 hover:text-secondary transition-colors">Forging Shapar Rajkot</a></li>
                                            <li><a href="pages/locations/forging-company-gujarat.html" class="text-gray-700 hover:text-secondary transition-colors">Forging Company Gujarat</a></li>
                                            <li><a href="pages/locations/forging-manufacturer-ahmedabad.html" class="text-gray-700 hover:text-secondary transition-colors">Ahmedabad</a></li>
                                            <li><a href="pages/locations/forging-manufacturer-surat.html" class="text-gray-700 hover:text-secondary transition-colors">Surat</a></li>
                                            <li><a href="pages/locations/forging-manufacturer-vadodara.html" class="text-gray-700 hover:text-secondary transition-colors">Vadodara</a></li>
                                            <li><a href="pages/locations/forging-manufacturer-bhavnagar.html" class="text-gray-700 hover:text-secondary transition-colors">Bhavnagar</a></li>
                                        </ul>
                                    </div>
                                    <div>
                                        <h4 class="text-secondary font-mono font-bold text-xs uppercase tracking-widest mb-4 border-b border-gray-200 pb-2">WEST & NORTH INDIA</h4>
                                        <ul class="space-y-2 text-xs">
                                            <li><a href="pages/locations/forging-manufacturer-mumbai.html" class="text-gray-700 hover:text-secondary transition-colors">Mumbai</a></li>
                                            <li><a href="pages/locations/forging-manufacturer-pune.html" class="text-gray-700 hover:text-secondary transition-colors">Pune</a></li>
                                            <li><a href="pages/locations/forging-manufacturer-aurangabad.html" class="text-gray-700 hover:text-secondary transition-colors">Aurangabad</a></li>
                                            <li><a href="pages/locations/forging-manufacturer-nagpur.html" class="text-gray-700 hover:text-secondary transition-colors">Nagpur</a></li>
                                            <li><a href="pages/locations/forging-manufacturer-jaipur.html" class="text-gray-700 hover:text-secondary transition-colors">Jaipur</a></li>
                                            <li><a href="pages/locations/forging-manufacturer-ludhiana.html" class="text-gray-700 hover:text-secondary transition-colors">Ludhiana</a></li>
                                            <li><a href="pages/locations/forging-manufacturer-delhi.html" class="text-gray-700 hover:text-secondary transition-colors">Delhi</a></li>
                                            <li><a href="pages/locations/forging-manufacturer-faridabad.html" class="text-gray-700 hover:text-secondary transition-colors">Faridabad</a></li>
                                            <li><a href="pages/locations/forging-manufacturer-noida.html" class="text-gray-700 hover:text-secondary transition-colors">Noida</a></li>
                                            <li><a href="pages/locations/forging-manufacturer-kanpur.html" class="text-gray-700 hover:text-secondary transition-colors">Kanpur</a></li>
                                            <li><a href="pages/locations/forging-manufacturer-bhopal.html" class="text-gray-700 hover:text-secondary transition-colors">Bhopal</a></li>
                                            <li><a href="pages/locations/forging-manufacturer-manesar.html" class="text-gray-700 hover:text-secondary transition-colors">Manesar</a></li>
                                            <li><a href="pages/locations/forging-manufacturer-sonepat.html" class="text-gray-700 hover:text-secondary transition-colors">Sonepat</a></li>
                                            <li><a href="pages/locations/forging-manufacturer-nashik.html" class="text-gray-700 hover:text-secondary transition-colors">Nashik</a></li>
                                        </ul>
                                    </div>
                                    <div>
                                        <h4 class="text-secondary font-mono font-bold text-xs uppercase tracking-widest mb-4 border-b border-gray-200 pb-2">SOUTH & EAST INDIA</h4>
                                        <ul class="space-y-2 text-xs">
                                            <li><a href="pages/locations/forging-manufacturer-bangalore.html" class="text-gray-700 hover:text-secondary transition-colors">Bangalore</a></li>
                                            <li><a href="pages/locations/forging-manufacturer-chennai.html" class="text-gray-700 hover:text-secondary transition-colors">Chennai</a></li>
                                            <li><a href="pages/locations/forging-manufacturer-coimbatore.html" class="text-gray-700 hover:text-secondary transition-colors">Coimbatore</a></li>
                                            <li><a href="pages/locations/forging-manufacturer-hyderabad.html" class="text-gray-700 hover:text-secondary transition-colors">Hyderabad</a></li>
                                            <li><a href="pages/locations/forging-manufacturer-kolkata.html" class="text-gray-700 hover:text-secondary transition-colors">Kolkata</a></li>
                                            <li><a href="pages/locations/forging-exporter-india.html" class="text-gray-700 hover:text-secondary transition-colors">Pan India Forging</a></li>
                                            <li><a href="pages/locations/forging-manufacturer-jamshedpur.html" class="text-gray-700 hover:text-secondary transition-colors">Jamshedpur</a></li>
                                            <li><a href="pages/locations/forging-manufacturer-visakhapatnam.html" class="text-gray-700 hover:text-secondary transition-colors">Visakhapatnam</a></li>
                                            <li><a href="pages/locations/forging-manufacturer-ranchi.html" class="text-gray-700 hover:text-secondary transition-colors">Ranchi</a></li>
                                            <li><a href="pages/locations/forging-manufacturer-durgapur.html" class="text-gray-700 hover:text-secondary transition-colors">Durgapur</a></li>
                                            <li><a href="pages/locations/forging-manufacturer-hosur.html" class="text-gray-700 hover:text-secondary transition-colors">Hosur</a></li>
                                        </ul>
                                    </div>
                                    <div>
                                        <h4 class="text-secondary font-mono font-bold text-xs uppercase tracking-widest mb-4 border-b border-gray-200 pb-2">EXPORT & GLOBAL</h4>
                                        <ul class="space-y-2 text-xs">
                                            <li><a href="pages/locations/forging-exporter-gujarat.html" class="text-gray-700 hover:text-secondary transition-colors">Exporter Gujarat</a></li>
                                            <li><a href="pages/locations/forging-exporter-india.html" class="text-gray-700 hover:text-secondary transition-colors">Exporter India</a></li>
                                            <li><a href="pages/locations/forging-supplier-india.html" class="text-gray-700 hover:text-secondary transition-colors">Supplier India</a></li>
                                            <li><a href="pages/locations/forging-supplier-uae.html" class="text-gray-700 hover:text-secondary transition-colors">UAE</a></li>
                                            <li><a href="pages/locations/forging-supplier-europe.html" class="text-gray-700 hover:text-secondary transition-colors">Europe</a></li>
                                            <li><a href="pages/locations/forging-supplier-germany.html" class="text-gray-700 hover:text-secondary transition-colors">Germany</a></li>
                                            <li><a href="pages/locations/forging-manufacturer-usa.html" class="text-gray-700 hover:text-secondary transition-colors">USA</a></li>
                                            <li><a href="pages/locations/forging-manufacturer-houston.html" class="text-gray-700 hover:text-secondary transition-colors">Houston</a></li>
                                            <li><a href="pages/locations/forging-manufacturer-detroit.html" class="text-gray-700 hover:text-secondary transition-colors">Detroit</a></li>
                                            <li><a href="pages/locations/forging-manufacturer-chicago.html" class="text-gray-700 hover:text-secondary transition-colors">Chicago</a></li>
                                            <li><a href="pages/locations/forging-manufacturer-cleveland.html" class="text-gray-700 hover:text-secondary transition-colors">Cleveland</a></li>
                                            <li><a href="pages/locations/forging-manufacturer-pittsburgh.html" class="text-gray-700 hover:text-secondary transition-colors">Pittsburgh</a></li>
                                            <li><a href="pages/locations/forging-manufacturer-milwaukee.html" class="text-gray-700 hover:text-secondary transition-colors">Milwaukee</a></li>
                                            <li><a href="pages/locations/forging-manufacturer-los-angeles.html" class="text-gray-700 hover:text-secondary transition-colors">Los Angeles</a></li>
                                            <li><a href="pages/locations/forging-manufacturer-dallas.html" class="text-gray-700 hover:text-secondary transition-colors">Dallas</a></li>
                                            <li><a href="pages/locations/forging-manufacturer-atlanta.html" class="text-gray-700 hover:text-secondary transition-colors">Atlanta</a></li>
                                            <li><a href="pages/locations/forging-manufacturer-phoenix.html" class="text-gray-700 hover:text-secondary transition-colors">Phoenix</a></li>
                                            <li><a href="pages/locations/forging-manufacturer-charlotte.html" class="text-gray-700 hover:text-secondary transition-colors">Charlotte</a></li>
                                            <li><a href="pages/locations/forging-manufacturer-seattle.html" class="text-gray-700 hover:text-secondary transition-colors">Seattle</a></li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    <!-- Export Markets Dropdown -->
                    <div class="relative group h-full">
                        <button data-route="locations" class="nav-item text-gray-800 group-hover:text-secondary text-sm font-medium transition-colors inline-flex items-center px-2 h-full relative">
                            Export Markets <i class="fas fa-chevron-down ml-1 text-[10px] opacity-70 transition-transform group-hover:rotate-180"></i>
                        </button>
                        <div class="absolute left-0 top-24 w-64 bg-white shadow-xl rounded-b-md opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200 border-t-4 border-secondary overflow-hidden py-2 max-h-[70vh] overflow-y-auto">
                            <a href="pages/locations/forging-exporter-gujarat.html" class="block px-6 py-2.5 text-xs text-gray-700 hover:text-secondary font-medium">Exporter Gujarat</a>
                            <a href="pages/locations/forging-exporter-india.html" class="block px-6 py-2.5 text-xs text-gray-700 hover:text-secondary font-medium">Exporter India</a>
                            <a href="pages/locations/forging-supplier-india.html" class="block px-6 py-2.5 text-xs text-gray-700 hover:text-secondary font-medium">Supplier India</a>
                            <a href="pages/locations/forging-supplier-uae.html" class="block px-6 py-2.5 text-xs text-gray-700 hover:text-secondary font-medium">UAE</a>
                            <a href="pages/locations/forging-supplier-europe.html" class="block px-6 py-2.5 text-xs text-gray-700 hover:text-secondary font-medium">Europe</a>
                            <a href="pages/locations/forging-supplier-germany.html" class="block px-6 py-2.5 text-xs text-gray-700 hover:text-secondary font-medium">Germany</a>
                            <a href="pages/locations/forging-manufacturer-usa.html" class="block px-6 py-2.5 text-xs text-gray-700 hover:text-secondary font-medium">USA</a>
                            <a href="pages/locations/forging-manufacturer-houston.html" class="block px-6 py-2.5 text-xs text-gray-700 hover:text-secondary font-medium">Houston</a>
                            <a href="pages/locations/forging-manufacturer-detroit.html" class="block px-6 py-2.5 text-xs text-gray-700 hover:text-secondary font-medium">Detroit</a>
                            <a href="pages/locations/forging-manufacturer-chicago.html" class="block px-6 py-2.5 text-xs text-gray-700 hover:text-secondary font-medium">Chicago</a>
                            <a href="pages/locations/forging-manufacturer-cleveland.html" class="block px-6 py-2.5 text-xs text-gray-700 hover:text-secondary font-medium">Cleveland</a>
                            <a href="pages/locations/forging-manufacturer-pittsburgh.html" class="block px-6 py-2.5 text-xs text-gray-700 hover:text-secondary font-medium">Pittsburgh</a>
                            <a href="pages/locations/forging-manufacturer-milwaukee.html" class="block px-6 py-2.5 text-xs text-gray-700 hover:text-secondary font-medium">Milwaukee</a>
                            <a href="pages/locations/forging-manufacturer-los-angeles.html" class="block px-6 py-2.5 text-xs text-gray-700 hover:text-secondary font-medium">Los Angeles</a>
                            <a href="pages/locations/forging-manufacturer-dallas.html" class="block px-6 py-2.5 text-xs text-gray-700 hover:text-secondary font-medium">Dallas</a>
                            <a href="pages/locations/forging-manufacturer-atlanta.html" class="block px-6 py-2.5 text-xs text-gray-700 hover:text-secondary font-medium">Atlanta</a>
                            <a href="pages/locations/forging-manufacturer-phoenix.html" class="block px-6 py-2.5 text-xs text-gray-700 hover:text-secondary font-medium">Phoenix</a>
                            <a href="pages/locations/forging-manufacturer-charlotte.html" class="block px-6 py-2.5 text-xs text-gray-700 hover:text-secondary font-medium">Charlotte</a>
                            <a href="pages/locations/forging-manufacturer-seattle.html" class="block px-6 py-2.5 text-xs text-gray-700 hover:text-secondary font-medium">Seattle</a>
                        </div>
                    </div>

                    <!-- Products Dropdown (Simple) -->
                    <div class="relative group h-full">
                        <button data-route="/products" class="nav-item text-gray-800 group-hover:text-secondary text-sm font-medium transition-colors inline-flex items-center px-2 h-full relative">
                            Products <i class="fas fa-chevron-down ml-1 text-[10px] opacity-70 transition-transform group-hover:rotate-180"></i>
                        </button>
                        <div class="absolute left-0 top-24 w-64 bg-white shadow-xl rounded-b-md opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200 border-t-4 border-secondary overflow-hidden py-2">
                            <a href="products.html" class="block px-6 py-3 text-sm text-gray-700 hover:text-secondary font-medium">All Products</a>
                            <a href="products.html?cat=automotive" class="block px-6 py-3 text-sm text-gray-700 hover:text-secondary font-medium">Automotive</a>
                            <a href="products.html?cat=oil-gas-industry" class="block px-6 py-3 text-sm text-gray-700 hover:text-secondary font-medium">Oil & Gas Industry</a>
                            <a href="products.html?cat=tractor-farm-equipment" class="block px-6 py-3 text-sm text-gray-700 hover:text-secondary font-medium">Tractor & Farm Equipment</a>
                            <a href="products.html?cat=mining" class="block px-6 py-3 text-sm text-gray-700 hover:text-secondary font-medium">Mining</a>
                            <a href="products.html?cat=hydraulic-fitting" class="block px-6 py-3 text-sm text-gray-700 hover:text-secondary font-medium">Hydraulic Fitting</a>
                            <a href="products.html?cat=industrial" class="block px-6 py-3 text-sm text-gray-700 hover:text-secondary font-medium">Industrial</a>
                        </div>
                    </div>

                    <a href="about.html" data-route="/about" class="nav-item text-gray-800 hover:text-secondary text-sm font-medium transition-colors px-2 py-6 relative h-full flex items-center">Company</a>
                    
                    <a href="blog/index.html" class="nav-item text-gray-800 hover:text-secondary text-sm font-medium transition-colors px-2 py-6 relative h-full flex items-center">Blog</a>
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
                
                <details class="group border-b border-gray-100 last:border-0">
                    <summary class="flex justify-between items-center font-medium cursor-pointer list-none px-3 py-3 text-base text-gray-700 hover:text-secondary hover:bg-gray-50 rounded-md">
                        <span>Industries</span>
                        <span class="transition group-open:rotate-180"><i class="fas fa-chevron-down"></i></span>
                    </summary>
                    <div class="text-neutral-600 px-4 pb-4">
                        <h4 class="text-secondary font-bold text-xs uppercase tracking-widest mt-4 mb-2">MOBILITY & EV</h4>
                        <a href="pages/industries/automotive-forging-manufacturer.html" class="block py-1.5 text-sm text-gray-600 hover:text-secondary">Automotive Forging</a>
                        <a href="pages/industries/automobile-parts-forging-manufacturer.html" class="block py-1.5 text-sm text-gray-600 hover:text-secondary">Automobile Parts</a>
                        <a href="pages/industries/automotive-forging-rajkot.html" class="block py-1.5 text-sm text-gray-600 hover:text-secondary">Automotive Forging Rajkot</a>
                        <a href="pages/industries/ev-forging-manufacturer.html" class="block py-1.5 text-sm text-gray-600 hover:text-secondary">EV Forging Manufacturer</a>
                        <a href="pages/industries/commercial-vehicle-forging.html" class="block py-1.5 text-sm text-gray-600 hover:text-secondary">Commercial Vehicle</a>
                        <a href="pages/industries/truck-parts-forging.html" class="block py-1.5 text-sm text-gray-600 hover:text-secondary">Truck Parts Forging</a>
                        <a href="pages/industries/two-wheeler-parts-forging.html" class="block py-1.5 text-sm text-gray-600 hover:text-secondary">Two-Wheeler Parts</a>
                        <a href="pages/industries/agricultural-equipment-forging.html" class="block py-1.5 text-sm text-gray-600 hover:text-secondary">Agricultural Equipment</a>
                        <a href="pages/industries/tractor-parts-forging.html" class="block py-1.5 text-sm text-gray-600 hover:text-secondary">Tractor Parts</a>
                        <a href="pages/industries/railway-forging-manufacturer.html" class="block py-1.5 text-sm text-gray-600 hover:text-secondary">Railway Forging</a>
                        <a href="pages/industries/defense-forging-manufacturer.html" class="block py-1.5 text-sm text-gray-600 hover:text-secondary">Defense Forging</a>
                        
                        <h4 class="text-secondary font-bold text-xs uppercase tracking-widest mt-6 mb-2">ENERGY & MINING</h4>
                        <a href="pages/industries/offshore-oil-gas-forging-manufacturer.html" class="block py-1.5 text-sm text-gray-600 hover:text-secondary">Oil & Gas Forging</a>
                        <a href="pages/industries/oil-gas-equipment-forging.html" class="block py-1.5 text-sm text-gray-600 hover:text-secondary">Oil & Gas Equipment</a>
                        <a href="pages/industries/petrochemical-forging-manufacturer.html" class="block py-1.5 text-sm text-gray-600 hover:text-secondary">Petrochemical Forging</a>
                        <a href="pages/industries/offshore-forging-manufacturer.html" class="block py-1.5 text-sm text-gray-600 hover:text-secondary">Offshore Forging</a>
                        <a href="pages/industries/power-generation-forging.html" class="block py-1.5 text-sm text-gray-600 hover:text-secondary">Power Generation</a>
                        <a href="pages/industries/wind-energy-forging.html" class="block py-1.5 text-sm text-gray-600 hover:text-secondary">Wind Energy Forging</a>
                        <a href="pages/industries/solar-energy-forging.html" class="block py-1.5 text-sm text-gray-600 hover:text-secondary">Solar Energy Forging</a>
                        <a href="pages/industries/mining-forging-manufacturer.html" class="block py-1.5 text-sm text-gray-600 hover:text-secondary">Mining Forging</a>
                        
                        <h4 class="text-secondary font-bold text-xs uppercase tracking-widest mt-6 mb-2">PROCESS & AEROSPACE</h4>
                        <a href="pages/industries/aerospace-forging-manufacturer.html" class="block py-1.5 text-sm text-gray-600 hover:text-secondary">Aerospace Forging</a>
                        <a href="pages/industries/chemical-plant-forging.html" class="block py-1.5 text-sm text-gray-600 hover:text-secondary">Chemical Plant Forging</a>
                        <a href="pages/industries/water-treatment-forging.html" class="block py-1.5 text-sm text-gray-600 hover:text-secondary">Water Treatment</a>
                        <a href="pages/industries/food-processing-forging.html" class="block py-1.5 text-sm text-gray-600 hover:text-secondary">Food Processing</a>
                        <a href="pages/industries/pharmaceutical-equipment-forging.html" class="block py-1.5 text-sm text-gray-600 hover:text-secondary">Pharmaceutical Equipment</a>
                        <a href="pages/industries/earthmoving-equipment-forging.html" class="block py-1.5 text-sm text-gray-600 hover:text-secondary">Earthmoving Equipment</a>
                        <a href="pages/industries/construction-equipment-forging.html" class="block py-1.5 text-sm text-gray-600 hover:text-secondary">Construction Equipment</a>
                        
                        <h4 class="text-secondary font-bold text-xs uppercase tracking-widest mt-6 mb-2">HEAVY INDUSTRY</h4>
                        <a href="pages/industries/steel-plant-forging-manufacturer.html" class="block py-1.5 text-sm text-gray-600 hover:text-secondary">Steel Plant Forging</a>
                        <a href="pages/industries/cement-plant-forging-manufacturer.html" class="block py-1.5 text-sm text-gray-600 hover:text-secondary">Cement Plant Forging</a>
                        <a href="pages/industries/sugar-mill-forging.html" class="block py-1.5 text-sm text-gray-600 hover:text-secondary">Sugar Mill Forging</a>
                        <a href="pages/industries/paper-mill-forging.html" class="block py-1.5 text-sm text-gray-600 hover:text-secondary">Paper Mill Forging</a>
                        <a href="pages/industries/textile-machinery-forging.html" class="block py-1.5 text-sm text-gray-600 hover:text-secondary">Textile Machinery</a>
                        <a href="pages/industries/industrial-forging-manufacturer.html" class="block py-1.5 text-sm text-gray-600 hover:text-secondary">Industrial Forging</a>
                        <a href="pages/industries/elevator-forging-manufacturer.html" class="block py-1.5 text-sm text-gray-600 hover:text-secondary">Elevator Forging</a>
                        <a href="pages/industries/crane-forging-manufacturer.html" class="block py-1.5 text-sm text-gray-600 hover:text-secondary">Crane Forging</a>
                    </div>
                </details>

                <details class="group border-b border-gray-100 last:border-0">
                    <summary class="flex justify-between items-center font-medium cursor-pointer list-none px-3 py-3 text-base text-gray-700 hover:text-secondary hover:bg-gray-50 rounded-md">
                        <span>Components</span>
                        <span class="transition group-open:rotate-180"><i class="fas fa-chevron-down"></i></span>
                    </summary>
                    <div class="text-neutral-600 px-4 pb-4">
                        <h4 class="text-secondary font-bold text-xs uppercase tracking-widest mt-4 mb-2">DRIVETRAIN & ROTATING</h4>
                        <a href="pages/components/bevel-gear-forging-manufacturer.html" class="block py-1.5 text-sm text-gray-600 hover:text-secondary">Gear Forging</a>
                        <a href="pages/components/axle-shaft-forging-manufacturer.html" class="block py-1.5 text-sm text-gray-600 hover:text-secondary">Shaft Forging</a>
                        <a href="pages/components/crankshaft-forging-manufacturer.html" class="block py-1.5 text-sm text-gray-600 hover:text-secondary">Crankshaft Forging</a>
                        <a href="pages/components/camshaft-forging.html" class="block py-1.5 text-sm text-gray-600 hover:text-secondary">Camshaft Forging</a>
                        <a href="pages/components/connecting-rod-forging.html" class="block py-1.5 text-sm text-gray-600 hover:text-secondary">Connecting Rod</a>
                        <a href="pages/components/differential-pinion-yoke-forging-manufacturer.html" class="block py-1.5 text-sm text-gray-600 hover:text-secondary">Yoke Forging</a>
                        <a href="pages/components/spindle-forging-manufacturer.html" class="block py-1.5 text-sm text-gray-600 hover:text-secondary">Spindle Forging</a>
                        
                        <h4 class="text-secondary font-bold text-xs uppercase tracking-widest mt-6 mb-2">STEERING & SUSPENSION</h4>
                        <a href="pages/components/steering-knuckle-forging.html" class="block py-1.5 text-sm text-gray-600 hover:text-secondary">Steering Knuckle</a>
                        <a href="pages/components/stub-axle-forging.html" class="block py-1.5 text-sm text-gray-600 hover:text-secondary">Stub Axle Forging</a>
                        <a href="pages/components/king-pin-forging.html" class="block py-1.5 text-sm text-gray-600 hover:text-secondary">King Pin Forging</a>
                        <a href="pages/components/tie-rod-forging.html" class="block py-1.5 text-sm text-gray-600 hover:text-secondary">Tie Rod Forging</a>
                        <a href="pages/components/wheel-hub-forging-manufacturer.html" class="block py-1.5 text-sm text-gray-600 hover:text-secondary">Wheel Hub Forging</a>
                        <a href="pages/components/front-axle-forging.html" class="block py-1.5 text-sm text-gray-600 hover:text-secondary">Front Axle Forging</a>
                        
                        <h4 class="text-secondary font-bold text-xs uppercase tracking-widest mt-6 mb-2">FLUID, FLOW & FASTENING</h4>
                        <a href="pages/components/axle-flange-forging-manufacturer.html" class="block py-1.5 text-sm text-gray-600 hover:text-secondary">Flange Forging</a>
                        <a href="pages/components/coupling-forging-manufacturer.html" class="block py-1.5 text-sm text-gray-600 hover:text-secondary">Coupling Forging</a>
                        <a href="pages/components/hydraulic-cylinder-forging.html" class="block py-1.5 text-sm text-gray-600 hover:text-secondary">Hydraulic Cylinder</a>
                        <a href="pages/components/hydraulic-fittings-manufacturer.html" class="block py-1.5 text-sm text-gray-600 hover:text-secondary">Hydraulic Fittings</a>
                        <a href="pages/components/pump-valve-forging.html" class="block py-1.5 text-sm text-gray-600 hover:text-secondary">Pump & Valve Forging</a>
                        <a href="pages/components/valve-body-forging.html" class="block py-1.5 text-sm text-gray-600 hover:text-secondary">Valve Body Forging</a>
                    </div>
                </details>

                <details class="group border-b border-gray-100 last:border-0">
                    <summary class="flex justify-between items-center font-medium cursor-pointer list-none px-3 py-3 text-base text-gray-700 hover:text-secondary hover:bg-gray-50 rounded-md">
                        <span>Capabilities</span>
                        <span class="transition group-open:rotate-180"><i class="fas fa-chevron-down"></i></span>
                    </summary>
                    <div class="text-neutral-600 px-4 pb-4">
                        <h4 class="text-secondary font-bold text-xs uppercase tracking-widest mt-4 mb-2">FORGING PROCESSES</h4>
                        <a href="pages/capabilities/cold-forging-vs-hot-forging-comparison.html" class="block py-1.5 text-sm text-gray-600 hover:text-secondary">Hot Forging</a>
                        <a href="pages/capabilities/closed-die-forging-manufacturer.html" class="block py-1.5 text-sm text-gray-600 hover:text-secondary">Closed Die Forging</a>
                        <a href="pages/capabilities/open-die-forging-manufacturer.html" class="block py-1.5 text-sm text-gray-600 hover:text-secondary">Open Die Forging</a>
                        <a href="pages/capabilities/drop-forging-manufacturer.html" class="block py-1.5 text-sm text-gray-600 hover:text-secondary">Drop Forging</a>
                        <a href="pages/capabilities/hammer-forging-vs-press-forging-comparison.html" class="block py-1.5 text-sm text-gray-600 hover:text-secondary">Press Forging</a>
                        <a href="pages/capabilities/precision-forging-manufacturer.html" class="block py-1.5 text-sm text-gray-600 hover:text-secondary">Precision Forging</a>
                        
                        <h4 class="text-secondary font-bold text-xs uppercase tracking-widest mt-6 mb-2">VALUE-ADD SERVICES</h4>
                        <a href="pages/capabilities/cnc-machining-rajkot.html" class="block py-1.5 text-sm text-gray-600 hover:text-secondary">CNC Machining</a>
                        <a href="pages/capabilities/glossary-of-heat-treatment-terms-guide.html" class="block py-1.5 text-sm text-gray-600 hover:text-secondary">Heat Treatment</a>
                        <a href="pages/capabilities/shot-blasting-services.html" class="block py-1.5 text-sm text-gray-600 hover:text-secondary">Shot Blasting</a>
                        <a href="pages/capabilities/forging-surface-treatment.html" class="block py-1.5 text-sm text-gray-600 hover:text-secondary">Surface Treatment</a>
                        <a href="pages/capabilities/zinc-plating-services.html" class="block py-1.5 text-sm text-gray-600 hover:text-secondary">Zinc Plating</a>
                        
                        <h4 class="text-secondary font-bold text-xs uppercase tracking-widest mt-6 mb-2">MATERIAL GRADES</h4>
                        <a href="pages/capabilities/17-4ph-stainless-forging-manufacturer.html" class="block py-1.5 text-sm text-gray-600 hover:text-secondary">Alloy Steel Forging</a>
                        <a href="pages/capabilities/carbon-steel-forging.html" class="block py-1.5 text-sm text-gray-600 hover:text-secondary">Carbon Steel Forging</a>
                        <a href="pages/capabilities/passivation-services-stainless-steel.html" class="block py-1.5 text-sm text-gray-600 hover:text-secondary">Stainless Steel</a>
                        <a href="pages/capabilities/ss316-forging.html" class="block py-1.5 text-sm text-gray-600 hover:text-secondary">SS316 Forging</a>
                        <a href="pages/capabilities/en24-steel-forging.html" class="block py-1.5 text-sm text-gray-600 hover:text-secondary">EN24 Steel</a>
                        <a href="pages/capabilities/en8-steel-forging.html" class="block py-1.5 text-sm text-gray-600 hover:text-secondary">EN8 Steel</a>
                    </div>
                </details>

                <details class="group border-b border-gray-100 last:border-0">
                    <summary class="flex justify-between items-center font-medium cursor-pointer list-none px-3 py-3 text-base text-gray-700 hover:text-secondary hover:bg-gray-50 rounded-md">
                        <span>Locations</span>
                        <span class="transition group-open:rotate-180"><i class="fas fa-chevron-down"></i></span>
                    </summary>
                    <div class="text-neutral-600 px-4 pb-4">
                        <h4 class="text-secondary font-bold text-xs uppercase tracking-widest mt-4 mb-2">RAJKOT & GUJARAT</h4>
                        <a href="pages/capabilities/closed-die-forging-rajkot.html" class="block py-1.5 text-sm text-gray-600 hover:text-secondary">Forging Rajkot</a>
                        <a href="pages/locations/steel-forging-rajkot.html" class="block py-1.5 text-sm text-gray-600 hover:text-secondary">Steel Forging Rajkot</a>
                        <a href="pages/locations/forging-shapar-rajkot.html" class="block py-1.5 text-sm text-gray-600 hover:text-secondary">Forging Shapar Rajkot</a>
                        <a href="pages/locations/forging-company-gujarat.html" class="block py-1.5 text-sm text-gray-600 hover:text-secondary">Forging Company Gujarat</a>
                        
                        <h4 class="text-secondary font-bold text-xs uppercase tracking-widest mt-6 mb-2">EXPORT & GLOBAL</h4>
                        <a href="pages/locations/forging-exporter-gujarat.html" class="block py-1.5 text-sm text-gray-600 hover:text-secondary">Exporter Gujarat</a>
                        <a href="pages/locations/forging-exporter-india.html" class="block py-1.5 text-sm text-gray-600 hover:text-secondary">Exporter India</a>
                        <a href="pages/locations/forging-supplier-india.html" class="block py-1.5 text-sm text-gray-600 hover:text-secondary">Supplier India</a>
                        <a href="pages/locations/forging-supplier-uae.html" class="block py-1.5 text-sm text-gray-600 hover:text-secondary">UAE</a>
                        <a href="pages/locations/forging-supplier-europe.html" class="block py-1.5 text-sm text-gray-600 hover:text-secondary">Europe</a>
                        <a href="pages/locations/forging-manufacturer-usa.html" class="block py-1.5 text-sm text-gray-600 hover:text-secondary">USA</a>
                    </div>
                </details>

                <a href="products.html" class="block px-3 py-3 rounded-md text-base font-medium text-gray-700 hover:text-secondary hover:bg-gray-50">Products</a>
                <a href="blog/index.html" class="block px-3 py-3 rounded-md text-base font-medium text-gray-700 hover:text-secondary hover:bg-gray-50">Blog</a>
                <a href="contact.html" class="block px-3 py-3 rounded-md text-base font-medium text-gray-700 hover:text-secondary hover:bg-gray-50">Contact</a>

                <div class="pt-4">
                    <a href="contact.html" class="block text-center w-full bg-secondary hover:bg-primary text-white font-bold py-3 rounded-md transition-colors font-mono text-sm uppercase tracking-wider">
                        Get a Quote <i class="fas fa-arrow-right ml-2 text-xs"></i>
                    </a>
                </div>
            </div>
        </div>
    </header>`;

    const p = window.location.pathname;
    let prefix = './';
    if (p.includes('/pages/industries/') || p.includes('/pages/components/') || p.includes('/pages/capabilities/') || p.includes('/pages/locations/')) {
        prefix = '../../';
    } else if (p.includes('/pages/')) {
        prefix = '../';
    } else if (p.includes('/blog/') && !p.includes('/blog/admin/')) {
        prefix = '../';
    }

    if (prefix !== './') {
        headerHTML = headerHTML.replace(/src="\.\/images\//g, `src="${prefix}images/`);
        headerHTML = headerHTML.replace(/src="images\//g, `src="${prefix}images/`);
        headerHTML = headerHTML.replace(/href="index\.html"/g, `href="${prefix}index.html"`);
        headerHTML = headerHTML.replace(/href="about\.html"/g, `href="${prefix}about.html"`);
        headerHTML = headerHTML.replace(/href="products\.html"/g, `href="${prefix}products.html"`);
        headerHTML = headerHTML.replace(/href="contact\.html"/g, `href="${prefix}contact.html"`);
        headerHTML = headerHTML.replace(/href="blog\//g, `href="${prefix}blog/`);
        headerHTML = headerHTML.replace(/href="pages\//g, `href="${prefix}pages/`);
    }

    const container = document.getElementById('main-header-container');
    if (container) {
        container.innerHTML = headerHTML;
    }
}

if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', renderHeader);
} else {
    renderHeader();
}
