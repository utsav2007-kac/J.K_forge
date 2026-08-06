window.pageContent = window.pageContent || {};

const componentsData = {
    // DRIVETRAIN & ROTATING
    '/gear-forging': {
        title: 'Gear Forging',
        subtitle: 'Drivetrain & Rotating',
        image: './images/gear.jpg',
        description1: 'High-strength forged gears engineered for maximum torque transfer and minimal wear in demanding applications.',
        description2: 'JK Forge produces precision gears with optimized grain flow following the contour of the gear teeth. This dramatically increases bending fatigue strength and pitting resistance compared to cut-from-bar gears.',
        features: [
            { icon: 'fa-cogs', title: 'Optimized Grain Flow', desc: 'Increases tooth root strength by up to 30%.' },
            { icon: 'fa-tachometer-alt', title: 'High Torque Capacity', desc: 'Ideal for heavy machinery and automotive transmissions.' }
        ],
        processes: [
            { title: 'Closed Die Forging', desc: 'Near-net shape forging to reduce machining time.' },
            { title: 'Carburizing & Quenching', desc: 'Providing a hard wear surface with a tough, ductile core.' },
            { title: 'Gear Hobbing', desc: 'Precision cutting for perfect mesh profiles.' }
        ]
    },
    '/gear-blank-forging': {
        title: 'Gear Blank Forging',
        subtitle: 'Drivetrain & Rotating',
        image: './images/gear.jpg',
        description1: 'High-density forged gear blanks ready for precision tooth cutting by OEMs and gear manufacturers.',
        description2: 'We supply high-quality, defect-free gear blanks forged from premium alloy steels. Our blanks ensure consistent machinability and predictable heat treatment response for the final gear producer.',
        features: [
            { icon: 'fa-circle', title: 'Uniform Density', desc: 'Free from internal porosity and inclusions.' },
            { icon: 'fa-cut', title: 'Excellent Machinability', desc: 'Normalized microstructure extends tool life during hobbing.' }
        ],
        processes: [
            { title: 'Upset Forging', desc: 'Creating optimal radial grain flow for gear blanks.' },
            { title: 'Normalizing', desc: 'Relieving forging stresses and refining grain size.' },
            { title: 'Ultrasonic Testing', desc: 'Guaranteeing internal soundness before shipment.' }
        ]
    },
    '/bevel-gear-forging': {
        title: 'Bevel Gear Forging',
        subtitle: 'Drivetrain & Rotating',
        image: './images/gear.jpg',
        description1: 'Precision forged bevel gears for right-angle power transmission in differentials and heavy machinery.',
        description2: 'Our bevel gears are forged to near-net shape, offering superior fatigue life. The forged teeth exhibit unbroken grain flow lines, significantly enhancing the load-carrying capacity of the gear.',
        features: [
            { icon: 'fa-bezier-curve', title: 'Near-Net Teeth', desc: 'Forged tooth profiles reduce material waste and machining.' },
            { icon: 'fa-truck-monster', title: 'Differential Ready', desc: 'Perfect for automotive and heavy-duty axles.' }
        ],
        processes: [
            { title: 'Precision Hot Forging', desc: 'Using specialized dies for accurate bevel profiles.' },
            { title: 'Case Hardening', desc: 'Deep case depth for wear resistance.' },
            { title: 'Lapping', desc: 'Mating gear sets for smooth, quiet operation.' }
        ]
    },
    '/shaft-forging': {
        title: 'Shaft Forging',
        subtitle: 'Drivetrain & Rotating',
        image: './images/gear.jpg',
        description1: 'Heavy-duty forged shafts for power transmission, pumps, and industrial machinery.',
        description2: 'We manufacture straight, stepped, and flanged shafts using open die and upset forging techniques. Our shafts offer exceptional torsional strength and resistance to bending fatigue.',
        features: [
            { icon: 'fa-ruler-horizontal', title: 'High Torsional Strength', desc: 'Engineered to handle massive twisting forces.' },
            { icon: 'fa-check-circle', title: 'Custom Geometries', desc: 'Stepped and flanged designs to exact blueprints.' }
        ],
        processes: [
            { title: 'Open Die & Upsetting', desc: 'Combining processes for complex shaft profiles.' },
            { title: 'Quenching & Tempering', desc: 'Achieving uniform mechanical properties throughout the cross-section.' },
            { title: 'CNC Turning', desc: 'Precision finishing for bearing and seal fits.' }
        ]
    },
    '/drive-shaft-forging': {
        title: 'Drive Shaft Forging',
        subtitle: 'Drivetrain & Rotating',
        image: './images/gear.jpg',
        description1: 'Dynamically balanced drive shafts for automotive and commercial vehicle drivetrains.',
        description2: 'Our drive shafts are forged for high-RPM stability and maximum torque transfer. They connect the transmission to the differential with absolute reliability.',
        features: [
            { icon: 'fa-car-side', title: 'High-RPM Stability', desc: 'Dynamically balanced to eliminate driveline vibration.' },
            { icon: 'fa-link', title: 'Integrated Yokes', desc: 'Single-piece forging options for maximum strength.' }
        ],
        processes: [
            { title: 'Tubular & Solid Forging', desc: 'Options for weight reduction or maximum strength.' },
            { title: 'Friction Welding', desc: 'Joining yokes to tubes with perfect alignment.' },
            { title: 'Dynamic Balancing', desc: 'Computerized balancing for smooth operation.' }
        ]
    },
    '/axle-shaft-forging': {
        title: 'Axle Shaft Forging',
        subtitle: 'Drivetrain & Rotating',
        image: './images/gear.jpg',
        description1: 'Rugged axle shafts designed to bear vehicle weight and transmit drive torque to the wheels.',
        description2: 'JK Forge produces flanged axle shafts using horizontal upset forging. This ensures optimal continuous grain flow from the shaft body into the flange, preventing shear failures.',
        features: [
            { icon: 'fa-truck', title: 'Flange Strength', desc: 'Continuous grain flow prevents flange separation.' },
            { icon: 'fa-tachometer-alt', title: 'Fatigue Resistant', desc: 'Withstands continuous cyclic loading from vehicle weight.' }
        ],
        processes: [
            { title: 'Horizontal Upset Forging', desc: 'Gathering material to form robust, integral flanges.' },
            { title: 'Induction Hardening', desc: 'Hardening the shaft body while keeping the core ductile.' },
            { title: 'Spline Rolling', desc: 'Cold forming splines for superior strength.' }
        ]
    },
    '/crankshaft-forging': {
        title: 'Crankshaft Forging',
        subtitle: 'Drivetrain & Rotating',
        image: './images/gear.jpg',
        description1: 'The heart of the engine: high-performance forged crankshafts for automotive and industrial diesel engines.',
        description2: 'Our forged crankshafts provide the ultimate in fatigue strength and rigidity. Forged with continuous grain flow through the webs and journals, they outperform cast cranks in high-compression engines.',
        features: [
            { icon: 'fa-cogs', title: 'Engineered Grain Flow', desc: 'Continuous grain lines maximize strength in the critical fillet radii.' },
            { icon: 'fa-shield-alt', title: 'High RPM Durability', desc: 'Resists torsional vibration and bending stresses.' }
        ],
        processes: [
            { title: 'Multi-Directional Forging', desc: 'Complex dies shape the throws and counterweights.' },
            { title: 'Nitriding / Induction Hardening', desc: 'Extreme wear resistance for bearing journals.' },
            { title: 'Precision Grinding & Balancing', desc: 'Micro-finish journals and dynamic balancing.' }
        ]
    },
    '/camshaft-forging': {
        title: 'Camshaft Forging',
        subtitle: 'Drivetrain & Rotating',
        image: './images/gear.jpg',
        description1: 'Precision forged camshafts ensuring perfect valve timing and extended wear life.',
        description2: 'We manufacture camshaft forgings that provide a dense, hardenable structure for the cam lobes, ensuring they withstand the continuous sliding friction of valve lifters.',
        features: [
            { icon: 'fa-clock', title: 'Timing Precision', desc: 'Rigid forgings resist torsional twist under load.' },
            { icon: 'fa-layer-group', title: 'Lobe Durability', desc: 'Excellent response to deep case hardening.' }
        ],
        processes: [
            { title: 'Closed Die Forging', desc: 'Forming near-net shape cam lobes.' },
            { title: 'Carburizing', desc: 'Providing a glass-hard surface for the lobes.' },
            { title: 'CNC Cam Grinding', desc: 'Exact profile grinding for optimal valve lift.' }
        ]
    },
    '/connecting-rod': {
        title: 'Connecting Rod',
        subtitle: 'Drivetrain & Rotating',
        image: './images/gear.jpg',
        description1: 'High-strength connecting rods that transfer piston power to the crankshaft with absolute reliability.',
        description2: 'Our connecting rods are forged from high-tensile micro-alloyed steels. They offer exceptional resistance to the massive compressive and tensile forces generated during the combustion cycle.',
        features: [
            { icon: 'fa-compress', title: 'High Compressive Strength', desc: 'Withstands extreme cylinder pressures.' },
            { icon: 'fa-weight-hanging', title: 'Weight Matched', desc: 'Precision forged and machined for perfect engine balance.' }
        ],
        processes: [
            { title: 'Controlled Cooling', desc: 'Utilizing micro-alloyed steels that eliminate the need for subsequent heat treatment.' },
            { title: 'Fracture Splitting', desc: 'Advanced big-end splitting for perfect cap-to-rod alignment.' },
            { title: 'Shot Peening', desc: 'Enhancing fatigue life on the rod beam.' }
        ]
    },
    '/gearbox-forging': {
        title: 'Gearbox Forging',
        subtitle: 'Drivetrain & Rotating',
        image: './images/gear.jpg',
        description1: 'Robust forged housings and internal components for heavy-duty transmissions and gearboxes.',
        description2: 'We supply the critical internal components—including shafts, gear blanks, and shift forks—that make up reliable industrial and automotive gearboxes.',
        features: [
            { icon: 'fa-box', title: 'Structural Rigidity', desc: 'Maintains perfect gear mesh alignment under extreme load.' },
            { icon: 'fa-cogs', title: 'Complete Assemblies', desc: 'Providing all forged internals for transmission units.' }
        ],
        processes: [
            { title: 'Drop Forging', desc: 'Creating complex shift forks and linkages.' },
            { title: 'Stress Relieving', desc: 'Ensuring dimensional stability after rough machining.' },
            { title: 'Precision Boring', desc: 'Exact bearing fits for smooth operation.' }
        ]
    },
    '/yoke-forging': {
        title: 'Yoke Forging',
        subtitle: 'Drivetrain & Rotating',
        image: './images/hero-bg.jpg',
        description1: 'High-strength forged yokes for universal joints and driveline assemblies.',
        description2: 'Our forged yokes provide the necessary torsional strength and fatigue resistance to handle severe driveline angles and torque spikes in commercial and off-highway vehicles.',
        features: [
            { icon: 'fa-compress-arrows-alt', title: 'Torsional Strength', desc: 'Resists twisting under heavy acceleration.' },
            { icon: 'fa-crosshairs', title: 'Precision Alignment', desc: 'Ensures smooth U-joint articulation.' }
        ],
        processes: [
            { title: 'Closed Die Forging', desc: 'Forming the complex yoke ears with optimal grain flow.' },
            { title: 'Coining', desc: 'Cold pressing to exact dimensional tolerances.' },
            { title: 'CNC Cross Boring', desc: 'Perfect alignment for bearing cups.' }
        ]
    },
    '/spindle-forging': {
        title: 'Spindle Forging',
        subtitle: 'Drivetrain & Rotating',
        image: './images/hero-bg.jpg',
        description1: 'Precision forged spindles for machine tools, axles, and rotating equipment.',
        description2: 'We manufacture high-rigidity spindles that ensure minimal runout and vibration in high-speed applications. Our forgings provide the dense core required for deep bearing fits.',
        features: [
            { icon: 'fa-bullseye', title: 'Low Runout', desc: 'Maintains extreme accuracy at high RPMs.' },
            { icon: 'fa-shield-alt', title: 'High Rigidity', desc: 'Resists deflection under heavy radial loads.' }
        ],
        processes: [
            { title: 'Upset Forging', desc: 'Creating robust flanged ends.' },
            { title: 'Deep Freezing', desc: 'Cryogenic treatment for dimensional stability.' },
            { title: 'Cylindrical Grinding', desc: 'Achieving micron-level bearing fits.' }
        ]
    },
    '/wheel-spindle-forging': {
        title: 'Wheel Spindle Forging',
        subtitle: 'Drivetrain & Rotating',
        image: './images/hero-bg.jpg',
        description1: 'Critical suspension components supporting vehicle weight and facilitating wheel rotation.',
        description2: 'Our forged wheel spindles are designed for maximum safety, offering exceptional resistance to shear forces, potholes, and cornering loads in automotive and commercial vehicles.',
        features: [
            { icon: 'fa-car-crash', title: 'Impact Resistance', desc: 'Absorbs shock loads from rough terrain.' },
            { icon: 'fa-weight', title: 'Load Bearing', desc: 'Supports the entire corner weight of the vehicle.' }
        ],
        processes: [
            { title: 'Hot Forging', desc: 'Creating the complex angled geometry.' },
            { title: 'Quenching & Tempering', desc: 'Optimizing the strength-to-toughness ratio.' },
            { title: 'Magnetic Particle Testing', desc: 'Ensuring zero surface cracks in critical radii.' }
        ]
    },
    '/bearing-components': {
        title: 'Bearing Components',
        subtitle: 'Drivetrain & Rotating',
        image: './images/hero-bg.jpg',
        description1: 'Forged bearing races and rings for heavy-duty industrial and automotive applications.',
        description2: 'We utilize seamless ring rolling and closed die forging to produce bearing components with circumferential grain flow, drastically improving rolling contact fatigue life.',
        features: [
            { icon: 'fa-circle-notch', title: 'Circumferential Grain Flow', desc: 'Maximizes resistance to spalling and flaking.' },
            { icon: 'fa-shield-alt', title: 'High Cleanliness Steel', desc: 'Using vacuum-degassed steels for maximum bearing life.' }
        ],
        processes: [
            { title: 'Seamless Ring Rolling', desc: 'Ideal for large diameter bearing races.' },
            { title: 'Spheroidize Annealing', desc: 'Improving machinability of high-carbon bearing steels (e.g., 52100).' },
            { title: 'Hard Turning', desc: 'Precision machining after heat treatment.' }
        ]
    },
    '/rocker-arm-forging': {
        title: 'Rocker Arm Forging',
        subtitle: 'Drivetrain & Rotating',
        image: './images/hero-bg.jpg',
        description1: 'Lightweight, high-stiffness rocker arms for high-performance valvetrains.',
        description2: 'Our forged rocker arms eliminate the flex found in cast or stamped alternatives, ensuring exact valve lift profiles are maintained at high engine RPMs.',
        features: [
            { icon: 'fa-cogs', title: 'High Stiffness', desc: 'Maintains valve lift accuracy under heavy spring pressure.' },
            { icon: 'fa-tachometer-alt', title: 'Low Mass', desc: 'Reduces valvetrain inertia for higher rev limits.' }
        ],
        processes: [
            { title: 'Precision Drop Forging', desc: 'Creating complex, lightweight I-beam structures.' },
            { title: 'Carbo-Nitriding', desc: 'Wear resistance for the valve and pushrod contact pads.' },
            { title: 'Bushing Installation', desc: 'Press-fitting bronze bushings for the fulcrum.' }
        ]
    },
    '/piston-rod-forging': {
        title: 'Piston Rod Forging',
        subtitle: 'Drivetrain & Rotating',
        image: './images/hero-bg.jpg',
        description1: 'Heavy-duty forged piston rods for massive hydraulic cylinders and industrial compressors.',
        description2: 'We manufacture long, high-strength piston rods that resist buckling under extreme compressive loads and provide a flawless surface for hydraulic seals.',
        features: [
            { icon: 'fa-arrows-alt-v', title: 'Buckling Resistance', desc: 'High column strength for long hydraulic strokes.' },
            { icon: 'fa-minus', title: 'Mirror Finish', desc: 'Ensures long life for hydraulic seals.' }
        ],
        processes: [
            { title: 'Open Die Forging', desc: 'Forging long shafts with consistent diameter.' },
            { title: 'Induction Hardening', desc: 'Providing a hard, dent-resistant outer layer.' },
            { title: 'Hard Chrome Plating', desc: 'Corrosion resistance and low friction for seals.' }
        ]
    },
    '/steel-shaft': {
        title: 'Steel Shaft Forging',
        subtitle: 'Drivetrain & Rotating',
        image: './images/hero-bg.jpg',
        description1: 'Custom forged steel shafts in a wide variety of grades for universal industrial applications.',
        description2: 'From simple straight shafts to complex multi-stepped profiles, we forge and machine steel shafts to your exact material and dimensional specifications.',
        features: [
            { icon: 'fa-industry', title: 'Versatile Applications', desc: 'Used in pumps, motors, conveyors, and gearboxes.' },
            { icon: 'fa-cubes', title: 'Wide Material Range', desc: 'Available in carbon, alloy, and stainless grades.' }
        ],
        processes: [
            { title: 'Rotary Forging', desc: 'Efficiently reducing diameters and creating steps.' },
            { title: 'Stress Relieving', desc: 'Preventing warping during final machining.' },
            { title: 'CNC Turning & Milling', desc: 'Cutting keyways, splines, and threads.' }
        ]
    },

    // STEERING & SUSPENSION
    '/steering-knuckle': {
        title: 'Steering Knuckle Forging',
        subtitle: 'Steering & Suspension',
        image: './images/hero-bg.jpg',
        description1: 'Safety-critical steering knuckles providing the pivot point for vehicle steering and suspension.',
        description2: 'Our forged steering knuckles offer the ultimate in structural integrity, absorbing massive impacts from potholes and cornering forces without catastrophic failure.',
        features: [
            { icon: 'fa-car-crash', title: 'Impact Ductility', desc: 'Bends rather than breaks under extreme impact, ensuring safety.' },
            { icon: 'fa-project-diagram', title: 'Complex Geometry', desc: 'Forging multiple mounting points for brakes, steering, and suspension.' }
        ],
        processes: [
            { title: 'Multi-Axis Forging', desc: 'Complex closed-die forging to achieve intricate shapes.' },
            { title: 'Quenching & Tempering', desc: 'Maximizing the strength-to-toughness ratio.' },
            { title: 'Multi-Spindle CNC', desc: 'Simultaneous machining of multiple bores and faces.' }
        ]
    },
    '/stub-axle-forging': {
        title: 'Stub Axle Forging',
        subtitle: 'Steering & Suspension',
        image: './images/hero-bg.jpg',
        description1: 'Heavy-duty forged stub axles for commercial vehicles and agricultural equipment.',
        description2: 'We manufacture stub axles designed to carry immense loads while providing the mounting point for wheel hubs and steering components.',
        features: [
            { icon: 'fa-truck-loading', title: 'Heavy Load Bearing', desc: 'Engineered for commercial front axle weight ratings.' },
            { icon: 'fa-shield-alt', title: 'Fatigue Resistance', desc: 'Continuous grain flow from the shaft into the kingpin boss.' }
        ],
        processes: [
            { title: 'Upset and Drop Forging', desc: 'Combining processes to gather material for the kingpin boss.' },
            { title: 'Induction Hardening', desc: 'Hardening the bearing journals.' },
            { title: 'Magnetic Particle Inspection', desc: '100% inspection of critical radii.' }
        ]
    },
    '/king-pin-forging': {
        title: 'King Pin Forging',
        subtitle: 'Steering & Suspension',
        image: './images/hero-bg.jpg',
        description1: 'The vital pivot point for heavy-duty steering axles, forged for absolute reliability.',
        description2: 'Our forged king pins provide a glass-hard wear surface with a tough, ductile core, ensuring smooth steering operation and long life in commercial vehicles.',
        features: [
            { icon: 'fa-sync', title: 'Smooth Articulation', desc: 'Precision ground for perfect bearing and bushing fits.' },
            { icon: 'fa-hammer', title: 'Shear Strength', desc: 'Resists the massive shear forces generated during steering.' }
        ],
        processes: [
            { title: 'Hot Forging', desc: 'Creating the basic pin shape and thrust bearing heads.' },
            { title: 'Deep Case Carburizing', desc: 'Providing extreme wear resistance.' },
            { title: 'Centerless Grinding', desc: 'Achieving exact diametrical tolerances.' }
        ]
    },
    '/tie-rod-forging': {
        title: 'Tie Rod Forging',
        subtitle: 'Steering & Suspension',
        image: './images/hero-bg.jpg',
        description1: 'Forged tie rod ends and linkages that maintain precise wheel alignment under severe loads.',
        description2: 'We manufacture tie rod forgings that connect the steering rack to the steering knuckle. They are engineered to resist bending under heavy cornering and impact forces.',
        features: [
            { icon: 'fa-arrows-alt-h', title: 'Buckling Resistance', desc: 'High column strength prevents bending.' },
            { icon: 'fa-crosshairs', title: 'Steering Precision', desc: 'Maintains toe alignment for safe vehicle handling.' }
        ],
        processes: [
            { title: 'Upset Forging', desc: 'Forming the ball joint housing at the ends of the rod.' },
            { title: 'Coining', desc: 'Sizing the ball socket for precision machining.' },
            { title: 'Thread Rolling', desc: 'Cold forming threads for superior fatigue strength.' }
        ]
    },
    '/wheel-hub-forging': {
        title: 'Wheel Hub Forging',
        subtitle: 'Steering & Suspension',
        image: './images/hero-bg.jpg',
        description1: 'High-strength forged wheel hubs for automotive, commercial, and off-highway vehicles.',
        description2: 'Our forged wheel hubs provide a robust mounting point for wheels and brake rotors. The forging process ensures there is no porosity, which is critical for maintaining tight bearing fits.',
        features: [
            { icon: 'fa-circle-notch', title: 'Zero Porosity', desc: 'Ensures bearing cups do not spin or loosen.' },
            { icon: 'fa-shield-alt', title: 'Flange Strength', desc: 'Resists lateral cornering forces from the wheel.' }
        ],
        processes: [
            { title: 'Closed Die Press Forging', desc: 'Efficiently forming the complex hub geometry.' },
            { title: 'Normalizing', desc: 'Improving machinability for bearing bores.' },
            { title: 'Precision CNC Turning', desc: 'Holding micron-level tolerances for bearings and seals.' }
        ]
    },
    '/front-axle-forging': {
        title: 'Front Axle Forging',
        subtitle: 'Steering & Suspension',
        image: './images/hero-bg.jpg',
        description1: 'Massive I-beam front axle forgings for medium and heavy-duty commercial trucks.',
        description2: 'JK Forge is one of the few facilities capable of forging heavy I-beam front axles. These massive forgings provide the backbone of commercial vehicle steering systems.',
        features: [
            { icon: 'fa-truck', title: 'Massive Load Capacity', desc: 'I-beam design optimizes strength-to-weight ratio.' },
            { icon: 'fa-arrows-alt-h', title: 'Dimensional Stability', desc: 'Maintains camber and caster alignment under heavy loads.' }
        ],
        processes: [
            { title: 'Heavy Drop Forging', desc: 'Using massive hammers to form the long I-beam structure.' },
            { title: 'Stretching & Coining', desc: 'Ensuring perfect kingpin boss alignment.' },
            { title: '100% Ultrasonic Testing', desc: 'Verifying internal integrity of the massive forging.' }
        ]
    },

    // FLUID, FLOW & FASTENING
    '/flange-forging': {
        title: 'Flange Forging',
        subtitle: 'Fluid, Flow & Fastening',
        image: './images/facility.jpg',
        description1: 'High-pressure forged flanges for oil & gas, petrochemical, and water infrastructure.',
        description2: 'We manufacture all standard API and ASME flanges (Weld Neck, Slip-On, Blind) as well as custom geometries. Our forgings ensure leak-proof connections in high-pressure piping systems.',
        features: [
            { icon: 'fa-tint-slash', title: 'Leak-Proof Integrity', desc: 'Zero porosity guarantees safe fluid containment.' },
            { icon: 'fa-cubes', title: 'Standard & Custom', desc: 'Available in carbon, stainless, and exotic alloys.' }
        ],
        processes: [
            { title: 'Closed Die & Ring Rolling', desc: 'Optimized processes based on flange size.' },
            { title: 'Solution Annealing', desc: 'For stainless grades to maximize corrosion resistance.' },
            { title: 'CNC Facing & Drilling', desc: 'Precision phonographic finishes for gasket sealing.' }
        ]
    },
    '/coupling-forging': {
        title: 'Coupling Forging',
        subtitle: 'Fluid, Flow & Fastening',
        image: './images/facility.jpg',
        description1: 'Robust forged couplings for secure pipe and shaft connections.',
        description2: 'Our forged couplings provide high tensile and torsional strength, ensuring reliable connections in pipelines, drilling strings, and industrial drivetrains.',
        features: [
            { icon: 'fa-link', title: 'High Tensile Strength', desc: 'Prevents separation under extreme axial loads.' },
            { icon: 'fa-cogs', title: 'Torsional Rigidity', desc: 'For power transmission couplings.' }
        ],
        processes: [
            { title: 'Upset Forging', desc: 'Forming robust blanks for threaded couplings.' },
            { title: 'Quenching & Tempering', desc: 'Achieving API grade mechanical properties.' },
            { title: 'Thread CNC Machining', desc: 'Precision cutting of API and premium threads.' }
        ]
    },
    '/hydraulic-cylinder': {
        title: 'Hydraulic Cylinder Forgings',
        subtitle: 'Fluid, Flow & Fastening',
        image: './images/facility.jpg',
        description1: 'High-pressure forged ends, caps, and trunnions for heavy-duty hydraulic cylinders.',
        description2: 'We supply the critical structural components for hydraulic cylinders used in earthmoving, mining, and industrial presses. Our forgings withstand massive internal pressures and impact loads.',
        features: [
            { icon: 'fa-compress-alt', title: 'Pressure Containment', desc: 'Dense forged structure prevents hydraulic fluid weeping.' },
            { icon: 'fa-shield-alt', title: 'Weldability', desc: 'Controlled carbon equivalent for easy welding to cylinder tubes.' }
        ],
        processes: [
            { title: 'Closed Die Forging', desc: 'Creating complex clevis and trunnion mounts.' },
            { title: 'Normalizing', desc: 'Refining grain structure for consistent welding.' },
            { title: 'Precision Boring', desc: 'Exact dimensions for pin fits.' }
        ]
    },
    '/hydraulic-fittings': {
        title: 'Hydraulic Fittings',
        subtitle: 'Fluid, Flow & Fastening',
        image: './images/facility.jpg',
        description1: 'Leak-free forged hydraulic fittings and adapters for high-pressure fluid power systems.',
        description2: 'Our forged fittings (elbows, tees, crosses) provide superior burst strength compared to machined-from-bar fittings, ensuring safety in high-pressure hydraulic circuits.',
        features: [
            { icon: 'fa-tint-slash', title: 'High Burst Pressure', desc: 'Forged grain flow follows the contour of the fitting.' },
            { icon: 'fa-project-diagram', title: 'Complex Routing', desc: 'Available in 90-degree, 45-degree, and T-configurations.' }
        ],
        processes: [
            { title: 'Multi-Directional Forging', desc: 'Forming complex intersecting axes.' },
            { title: 'Zinc Plating', desc: 'Corrosion protection for exposed hydraulic lines.' },
            { title: 'Thread & Seat Machining', desc: 'Precision JIC, ORFS, and BSPP interfaces.' }
        ]
    },
    '/pump-valve-forging': {
        title: 'Pump & Valve Forging',
        subtitle: 'Fluid, Flow & Fastening',
        image: './images/facility.jpg',
        description1: 'Corrosion-resistant forged components for critical flow control equipment.',
        description2: 'We manufacture pump casings, impellers, and valve stems. Our forgings provide the density and metallurgical integrity required to handle hazardous chemicals and high-pressure steam.',
        features: [
            { icon: 'fa-water', title: 'Fluid Dynamics', desc: 'Precision machined for optimal flow.' },
            { icon: 'fa-shield-alt', title: 'Corrosion & Cavitation Resistance', desc: 'Utilizing stainless and duplex alloys.' }
        ],
        processes: [
            { title: 'Closed Die Forging', desc: 'Near-net shape for complex pump volutes.' },
            { title: 'Solution Annealing', desc: 'Optimizing stainless steel microstructures.' },
            { title: 'Hydrostatic Testing', desc: 'Validating pressure boundaries.' }
        ]
    },
    '/valve-body-forging': {
        title: 'Valve Body Forging',
        subtitle: 'Fluid, Flow & Fastening',
        image: './images/facility.jpg',
        description1: 'Massive, zero-porosity forged valve bodies for the oil, gas, and power industries.',
        description2: 'Forged valve bodies offer significantly higher integrity than castings, eliminating the risk of internal voids or sand inclusions leaking dangerous gases or high-pressure steam.',
        features: [
            { icon: 'fa-burn', title: 'Extreme Pressure Rating', desc: 'Ideal for high-pressure gate, globe, and check valves.' },
            { icon: 'fa-check-circle', title: '100% Defect Free', desc: 'Guaranteed integrity for critical safety isolation.' }
        ],
        processes: [
            { title: 'Heavy Press Forging', desc: 'Forging large blocks and near-net shape bodies.' },
            { title: 'Deep Hole Machining', desc: 'Boring the internal flow paths and valve seats.' },
            { title: 'Radiographic Testing (X-Ray)', desc: 'Validating complete internal soundness.' }
        ]
    },
    '/pipeline-fitting': {
        title: 'Pipeline Fitting Forging',
        subtitle: 'Fluid, Flow & Fastening',
        image: './images/facility.jpg',
        description1: 'Heavy-duty forged fittings for midstream oil and gas pipelines.',
        description2: 'We supply high-yield forged elbows, tees, and reducers. Our pipeline fittings are designed to match the burst pressure of the pipeline while providing easy weldability in the field.',
        features: [
            { icon: 'fa-route', title: 'High Yield Strength', desc: 'Manufactured from high-grade API pipeline steels.' },
            { icon: 'fa-fire', title: 'Field Weldable', desc: 'Strict control of carbon equivalents.' }
        ],
        processes: [
            { title: 'Hot Forming & Forging', desc: 'Shaping large diameter fittings.' },
            { title: 'Quenching & Tempering', desc: 'Achieving required X-grades (e.g., X65, X70).' },
            { title: 'Bevel Machining', desc: 'Preparing ends for field butt-welding.' }
        ]
    },
    '/forged-fasteners': {
        title: 'Forged Fasteners',
        subtitle: 'Fluid, Flow & Fastening',
        image: './images/facility.jpg',
        description1: 'High-tensile forged bolts, nuts, and studs for critical structural and pressure vessel applications.',
        description2: 'Unlike machined fasteners, our hot-forged heads feature continuous grain flow, drastically increasing resistance to fatigue and head-shearing under extreme tension.',
        features: [
            { icon: 'fa-bolt', title: 'Anti-Shear Heads', desc: 'Forged grain flow prevents the head from snapping off.' },
            { icon: 'fa-temperature-high', title: 'High-Temp Grades', desc: 'Available in B7, B16, and exotic alloys for turbine use.' }
        ],
        processes: [
            { title: 'Hot Heading', desc: 'Upset forging the hex or socket head.' },
            { title: 'Thread Rolling', desc: 'Cold forming threads for maximum fatigue life.' },
            { title: 'Zinc/PTFE Coating', desc: 'Advanced corrosion protection.' }
        ]
    },
    '/ring-forging': {
        title: 'Ring Forging',
        subtitle: 'Fluid, Flow & Fastening',
        image: './images/facility.jpg',
        description1: 'Seamless forged rings for bearings, slewing drives, and aerospace engine casings.',
        description2: 'Our seamless ring rolling process produces a circumferential grain flow that provides unmatched hoop strength and resistance to radial fatigue.',
        features: [
            { icon: 'fa-circle-notch', title: 'Maximum Hoop Strength', desc: 'Ideal for high internal pressures or centrifugal forces.' },
            { icon: 'fa-expand-arrows-alt', title: 'Large Diameters', desc: 'Capable of rolling rings up to several meters in diameter.' }
        ],
        processes: [
            { title: 'Piercing & Ring Rolling', desc: 'Expanding a pierced billet into a seamless ring.' },
            { title: 'Spheroidize Annealing', desc: 'Optimizing for subsequent gear cutting or bearing raceway machining.' },
            { title: 'CNC Vertical Turning', desc: 'Precision machining of large diameters.' }
        ]
    },
    '/hook-forging': {
        title: 'Hook Forging',
        subtitle: 'Fluid, Flow & Fastening',
        image: './images/facility.jpg',
        description1: 'Certified load-bearing forged hooks for cranes, hoists, and rigging equipment.',
        description2: 'JK Forge produces heavy-duty lifting hooks where safety is paramount. The forging process ensures the hook will slowly deform under extreme overload rather than catastrophically snapping.',
        features: [
            { icon: 'fa-anchor', title: 'Ductile Failure Mode', desc: 'Bends before breaking, providing a visual warning of overload.' },
            { icon: 'fa-certificate', title: 'Certified Safe Working Load', desc: 'Rigorously tested to international rigging standards.' }
        ],
        processes: [
            { title: 'Closed Die Drop Forging', desc: 'Orienting grain flow along the load path of the hook.' },
            { title: 'Quenching & Tempering', desc: 'Achieving the exact balance of strength and ductility.' },
            { title: 'Proof Load Testing', desc: 'Physical testing to 200% of rated capacity.' }
        ]
    },
    '/clevis-forging': {
        title: 'Clevis Forging',
        subtitle: 'Fluid, Flow & Fastening',
        image: './images/facility.jpg',
        description1: 'High-strength forged clevises and shackles for secure mechanical linkages and rigging.',
        description2: 'We manufacture forged clevis ends for hydraulic cylinders, tie rods, and lifting shackles, providing a secure, pin-jointed connection capable of handling massive pull forces.',
        features: [
            { icon: 'fa-link', title: 'High Pull-Out Strength', desc: 'Resists tear-out at the pin hole.' },
            { icon: 'fa-shield-alt', title: 'Heavy Duty Rigging', desc: 'Trusted in construction and maritime industries.' }
        ],
        processes: [
            { title: 'Closed Die Forging', desc: 'Creating the U-shape with optimal grain flow.' },
            { title: 'Precision Drilling', desc: 'Exact hole alignment for the clevis pin.' },
            { title: 'Galvanizing', desc: 'Corrosion protection for outdoor and marine use.' }
        ]
    },
    '/compressor-forging': {
        title: 'Compressor Forging',
        subtitle: 'Fluid, Flow & Fastening',
        image: './images/facility.jpg',
        description1: 'Precision forged internals for industrial air and gas compressors.',
        description2: 'We supply forged crankshafts, connecting rods, and valve plates for reciprocating compressors, engineered to run continuously for years with minimal maintenance.',
        features: [
            { icon: 'fa-wind', title: 'Continuous Duty', desc: 'Fatigue-resistant parts for 24/7 industrial operation.' },
            { icon: 'fa-cogs', title: 'Precision Tolerances', desc: 'Ensures high efficiency and low vibration.' }
        ],
        processes: [
            { title: 'Micro-Alloy Forging', desc: 'High strength without post-forge heat treatment.' },
            { title: 'Dynamic Balancing', desc: 'Crucial for high-speed compressor internals.' },
            { title: 'Superfinishing', desc: 'Reducing friction on bearing journals.' }
        ]
    },
    '/disc-forging': {
        title: 'Disc Forging',
        subtitle: 'Fluid, Flow & Fastening',
        image: './images/facility.jpg',
        description1: 'Solid forged discs for turbine rotors, heavy duty brakes, and blind flanges.',
        description2: 'Our forged discs provide uniform multidirectional strength. They are completely free from internal porosity, making them ideal for high-pressure or high-centrifugal-force applications.',
        features: [
            { icon: 'fa-compact-disc', title: 'Isotropic Strength', desc: 'Uniform mechanical properties in all directions.' },
            { icon: 'fa-tachometer-alt', title: 'High RPM Safe', desc: 'Ideal for turbine discs and high-speed braking systems.' }
        ],
        processes: [
            { title: 'Upset Forging', desc: 'Pancaking a billet to create a dense disc.' },
            { title: 'Ultrasonic Testing', desc: '100% volumetric inspection.' },
            { title: 'CNC Turning', desc: 'Precision facing and profiling.' }
        ]
    },
    '/wheel-spindle-forging': {
        title: 'Wheel Spindle Forging',
        subtitle: 'Drivetrain & Rotating',
        image: './images/hero-bg.jpg',
        description1: 'High-strength wheel spindles forged for maximum load-bearing capacity and fatigue resistance.',
        description2: 'Essential for heavy-duty vehicles, our forged spindles offer superior grain structure to withstand continuous dynamic stresses.',
        features: [
            { icon: 'fa-shield-alt', title: 'Fatigue Resistant', desc: 'Eliminates internal voids for absolute reliability.' },
            { icon: 'fa-truck', title: 'Heavy Load Capacity', desc: 'Designed for commercial and off-highway vehicles.' }
        ],
        processes: [
            { title: 'Hot Forging', desc: 'Precision forming for optimal grain flow.' },
            { title: 'Heat Treatment', desc: 'Quenched and tempered for core toughness.' },
            { title: 'CNC Machining', desc: 'Finished to exact bearing fit tolerances.' }
        ]
    },
    '/bearing-components': {
        title: 'Bearing Components',
        subtitle: 'Drivetrain & Rotating',
        image: './images/hero-bg.jpg',
        description1: 'Precision forged bearing rings, races, and housings for high-performance rotating machinery.',
        description2: 'Our bearing components are forged from high-purity bearing steel (like SAE 52100) to ensure maximum rolling contact fatigue life.',
        features: [
            { icon: 'fa-circle-notch', title: 'High Purity Steel', desc: 'Ensures maximum lifespan under continuous rotation.' },
            { icon: 'fa-compress-alt', title: 'Near Net Shape', desc: 'Reduces material waste and machining time.' }
        ],
        processes: [
            { title: 'Ring Rolling', desc: 'Seamless forged rings with radial grain flow.' },
            { title: 'Spheroidizing Anneal', desc: 'Preparing the microstructure for machining and hardening.' },
            { title: 'Precision Turning', desc: 'Tight tolerance pre-grind dimensions.' }
        ]
    },
    '/steel-shaft': {
        title: 'Steel Shaft',
        subtitle: 'Drivetrain & Rotating',
        image: './images/hero-bg.jpg',
        description1: 'Custom forged solid and stepped steel shafts for industrial, marine, and power generation applications.',
        description2: 'Manufactured from premium carbon and alloy steels, our shafts provide the torsional strength required for heavy-duty power transmission.',
        features: [
            { icon: 'fa-ruler-horizontal', title: 'Dimensional Accuracy', desc: 'Forged and machined to strict straightness tolerances.' },
            { icon: 'fa-dumbbell', title: 'Torsional Strength', desc: 'Resists twisting under heavy dynamic loads.' }
        ],
        processes: [
            { title: 'Open Die Forging', desc: 'Ideal for large, custom shaft dimensions.' },
            { title: 'Ultrasonic Testing', desc: 'Ensuring internal soundness.' },
            { title: 'Rough Machining', desc: 'Delivered ready for final grinding.' }
        ]
    },
    '/wheel-hub-forging': {
        title: 'Wheel Hub Forging',
        subtitle: 'Steering & Suspension',
        image: './images/hero-bg.jpg',
        description1: 'Robust forged wheel hubs ensuring safe and reliable wheel mounting for automotive and commercial vehicles.',
        description2: 'By utilizing closed-die forging, our wheel hubs exhibit excellent impact resistance and structural integrity, critical for passenger safety.',
        features: [
            { icon: 'fa-car-side', title: 'OEM Approved', desc: 'Manufactured strictly to automotive standards.' },
            { icon: 'fa-shield-alt', title: 'Impact Resistant', desc: 'Absorbs road shocks without deformation.' }
        ],
        processes: [
            { title: 'Billet Heating', desc: 'Induction heating for scale-free forging.' },
            { title: 'Press Forging', desc: 'High-tonnage pressing for complex flange shapes.' },
            { title: 'Drilling & Tapping', desc: 'Precision stud hole preparation.' }
        ]
    },
    '/front-axle-forging': {
        title: 'Front Axle Forging',
        subtitle: 'Steering & Suspension',
        image: './images/hero-bg.jpg',
        description1: 'Heavy-duty forged front axle beams for trucks, buses, and commercial vehicles.',
        description2: 'Our forged front axles are designed to carry heavy payloads while enduring extreme dynamic stresses and torsional forces on the road.',
        features: [
            { icon: 'fa-truck-moving', title: 'High Payload Capacity', desc: 'Engineered for commercial transport.' },
            { icon: 'fa-weight-hanging', title: 'High Strength-to-Weight', desc: 'Optimized cross-sections (I-beams).' }
        ],
        processes: [
            { title: 'Die Forging', desc: 'Forming massive components with powerful hammers.' },
            { title: 'Normalizing', desc: 'Relieving forging stresses and refining grain structure.' },
            { title: 'Magnetic Particle Inspection', desc: '100% surface crack detection.' }
        ]
    }
};

Object.assign(window.pageContent, componentsData);
