window.pageContent = window.pageContent || {};

const industriesOtherData = {
    // ENERGY & MINING
    '/oil-gas-forging': {
        title: 'Oil & Gas Forging',
        subtitle: 'Energy & Mining',
        image: './images/hero-bg.jpg',
        description1: 'High-pressure, extreme-temperature forgings designed for the demanding oil and gas sector.',
        description2: 'JK Forge manufactures critical wellhead components, frac block forgings, and blow-out preventer (BOP) parts that meet API standards. Our forgings ensure zero porosity and exceptional resistance to hydrogen sulfide (H2S) environments.',
        features: [
            { icon: 'fa-burn', title: 'High Pressure Resistance', desc: 'Rated for extreme PSI environments in deep-water drilling.' },
            { icon: 'fa-shield-alt', title: 'API Compliant', desc: 'Manufactured to strict American Petroleum Institute specifications.' }
        ],
        processes: [
            { title: 'Alloy Selection', desc: 'Sourcing NACE compliant materials for sour gas service.' },
            { title: 'Closed Die Forging', desc: 'Achieving complex geometries for valve bodies and manifolds.' },
            { title: 'Stringent NDT', desc: 'Magnetic particle and ultrasonic testing to guarantee integrity.' }
        ]
    },
    '/oil-gas-equipment': {
        title: 'Oil & Gas Equipment',
        subtitle: 'Energy & Mining',
        image: './images/hero-bg.jpg',
        description1: 'Robust forged equipment and sub-assemblies for upstream and midstream operations.',
        description2: 'We supply custom forgings for drilling rigs, mud pumps, and pipeline infrastructure. Our components are designed to reduce downtime in remote and hostile environments.',
        features: [
            { icon: 'fa-cogs', title: 'Wear Resistance', desc: 'Specialized hardening for mud pump fluid ends.' },
            { icon: 'fa-tools', title: 'Ready to Assemble', desc: 'Delivered fully machined with threaded connections.' }
        ],
        processes: [
            { title: 'Upset Forging', desc: 'Creating robust upset ends for drill pipes and sucker rods.' },
            { title: 'Deep Hole Drilling', desc: 'Precision machining for internal flow paths.' },
            { title: 'Phosphate Coating', desc: 'Surface treatment for corrosion resistance during transit.' }
        ]
    },
    '/petrochemical-forging': {
        title: 'Petrochemical Forging',
        subtitle: 'Energy & Mining',
        image: './images/facility.jpg',
        description1: 'Corrosion-resistant forgings for refineries and petrochemical processing plants.',
        description2: 'Our petrochemical forgings include high-temperature flanges, heat exchanger tube sheets, and specialized valves that withstand aggressive chemicals and continuous thermal cycling.',
        features: [
            { icon: 'fa-flask', title: 'Chemical Resistance', desc: 'Utilizing stainless and duplex steels.' },
            { icon: 'fa-thermometer-full', title: 'Thermal Stability', desc: 'Maintains strength at elevated refining temperatures.' }
        ],
        processes: [
            { title: 'Open Die Forging', desc: 'Forging large diameter tube sheets and rings.' },
            { title: 'Solution Annealing', desc: 'Maximizing corrosion resistance of stainless grades.' },
            { title: 'Dye Penetrant Testing', desc: 'Ensuring zero surface defects.' }
        ]
    },
    '/offshore-forging': {
        title: 'Offshore Forging',
        subtitle: 'Energy & Mining',
        image: './images/hero-bg.jpg',
        description1: 'Massive, ultra-reliable forgings for offshore platforms and subsea infrastructure.',
        description2: 'We provide heavy structural forgings, mooring components, and subsea connectors. These parts are engineered to survive decades of continuous saltwater exposure and immense ocean currents.',
        features: [
            { icon: 'fa-water', title: 'Subsea Reliability', desc: 'Engineered for zero-maintenance underwater environments.' },
            { icon: 'fa-anchor', title: 'High Tensile Strength', desc: 'Critical for mooring and structural tie-downs.' }
        ],
        processes: [
            { title: 'Heavy Press Forging', desc: 'Handling massive billets for offshore structural nodes.' },
            { title: 'Impact Testing', desc: 'Charpy V-Notch testing at sub-zero temperatures.' },
            { title: 'Epoxy Coating', desc: 'Applying marine-grade protective coatings.' }
        ]
    },
    '/power-generation': {
        title: 'Power Generation Forging',
        subtitle: 'Energy & Mining',
        image: './images/facility.jpg',
        description1: 'High-precision components for thermal, hydro, and nuclear power plants.',
        description2: 'JK Forge produces turbine blades, generator shafts, and high-pressure steam valves. Our forgings are critical to maintaining the efficiency and safety of global power grids.',
        features: [
            { icon: 'fa-bolt', title: 'High Efficiency', desc: 'Precision machined for aerodynamic and hydrodynamic performance.' },
            { icon: 'fa-shield-alt', title: 'Creep Resistance', desc: 'Specialized alloys that resist deformation under sustained high temperatures.' }
        ],
        processes: [
            { title: 'Isothermal Forging', desc: 'Maintaining constant temperature for superalloy turbine components.' },
            { title: 'Creep Testing', desc: 'Validating material performance under prolonged stress.' },
            { title: 'Dynamic Balancing', desc: 'Ensuring vibration-free operation at high RPMs.' }
        ]
    },
    '/wind-energy-forging': {
        title: 'Wind Energy Forging',
        subtitle: 'Energy & Mining',
        image: './images/facility.jpg',
        description1: 'Large-scale structural and drivetrain forgings for onshore and offshore wind turbines.',
        description2: 'We manufacture main shafts, yaw gears, and pitch cylinders. These massive forgings endure constant dynamic loading and extreme weather conditions at high altitudes.',
        features: [
            { icon: 'fa-wind', title: 'Fatigue Resistance', desc: 'Engineered to withstand millions of rotational cycles.' },
            { icon: 'fa-sync', title: 'Heavy Gearing', desc: 'Precision forged gear blanks for massive yaw and pitch drives.' }
        ],
        processes: [
            { title: 'Ring Rolling', desc: 'Seamless rolled rings for bearing races and tower flanges.' },
            { title: 'Induction Hardening', desc: 'Targeted hardening of gear teeth.' },
            { title: 'Ultrasonic Testing', desc: 'Validating the core integrity of massive shafts.' }
        ]
    },
    '/solar-energy-forging': {
        title: 'Solar Energy Forging',
        subtitle: 'Energy & Mining',
        image: './images/facility.jpg',
        description1: 'Durable mechanical components for solar tracking systems and concentrated solar power (CSP) plants.',
        description2: 'Our forgings ensure reliable daily operation of solar trackers, providing the strength needed to resist high wind loads while maintaining precise alignment.',
        features: [
            { icon: 'fa-sun', title: 'Weather Resistance', desc: 'Corrosion-protected parts for desert and coastal environments.' },
            { icon: 'fa-compress-arrows-alt', title: 'Precision Tracking', desc: 'Tight tolerance gears and linkages for accurate sun tracking.' }
        ],
        processes: [
            { title: 'Closed Die Forging', desc: 'High-volume production of identical tracking linkages.' },
            { title: 'Hot Dip Galvanizing', desc: 'Providing decades of rust protection.' },
            { title: 'CNC Milling', desc: 'Precision machining for bearing fits.' }
        ]
    },
    '/mining-forging': {
        title: 'Mining Forging',
        subtitle: 'Energy & Mining',
        image: './images/facility.jpg',
        description1: 'Ultra-tough, wear-resistant forgings for surface and underground mining equipment.',
        description2: 'We supply excavation teeth, crusher jaws, and heavy conveyor components. Our mining forgings are built to survive extreme impact and abrasive rock environments.',
        features: [
            { icon: 'fa-mountain', title: 'Extreme Abrasion Resistance', desc: 'Utilizing manganese and high-carbon steels.' },
            { icon: 'fa-hammer', title: 'Impact Toughness', desc: 'Resists fracturing under heavy rock crushing loads.' }
        ],
        processes: [
            { title: 'Heavy Drop Forging', desc: 'Forging massive crusher components.' },
            { title: 'Austenitic Quenching', desc: 'Specialized heat treatment for manganese steel work-hardening.' },
            { title: 'Hardfacing', desc: 'Welding carbide overlays onto high-wear surfaces.' }
        ]
    },

    // PROCESS INDUSTRY
    '/chemical-plant-forging': {
        title: 'Chemical Plant Forging',
        subtitle: 'Process Industry',
        image: './images/facility.jpg',
        description1: 'Highly specialized, corrosion-resistant forgings for aggressive chemical processing environments.',
        description2: 'We manufacture customized flanges, valve bodies, and pump housings using exotic alloys like Hastelloy, Monel, and Titanium to prevent chemical degradation.',
        features: [
            { icon: 'fa-flask', title: 'Exotic Alloy Expertise', desc: 'Experience forging difficult-to-work superalloys.' },
            { icon: 'fa-shield-alt', title: 'Leak-Proof Integrity', desc: 'Zero porosity guarantees safe handling of toxic chemicals.' }
        ],
        processes: [
            { title: 'Controlled Atmosphere Forging', desc: 'Preventing contamination of reactive metals.' },
            { title: 'Solution Annealing', desc: 'Optimizing alloy microstructure.' },
            { title: 'Hydrostatic Testing', desc: 'Pressure testing to ensure zero leaks.' }
        ]
    },
    '/water-treatment': {
        title: 'Water Treatment Forgings',
        subtitle: 'Process Industry',
        image: './images/facility.jpg',
        description1: 'Durable components for municipal and industrial water and wastewater treatment facilities.',
        description2: 'JK Forge produces large-scale pump shafts, impellers, and pipe fittings that resist corrosion from chlorine, ozone, and biological agents.',
        features: [
            { icon: 'fa-water', title: 'Sanitary Grades', desc: 'Using 316L stainless for clean water applications.' },
            { icon: 'fa-tint', title: 'Long-Term Durability', desc: 'Built for decades of continuous operation in wet environments.' }
        ],
        processes: [
            { title: 'Stainless Steel Forging', desc: 'Optimized grain flow for superior strength.' },
            { title: 'Passivation', desc: 'Chemical treatment to enhance the natural oxide layer.' },
            { title: 'Precision Turning', desc: 'Exact dimensions for mechanical seal fits.' }
        ]
    },
    '/food-processing': {
        title: 'Food Processing Forging',
        subtitle: 'Process Industry',
        image: './images/facility.jpg',
        description1: 'Food-grade stainless steel forgings that meet strict hygiene and sanitation standards.',
        description2: 'We manufacture mixing shafts, sanitary valves, and conveyor components. Our forgings feature ultra-smooth, crevice-free surfaces to prevent bacterial growth.',
        features: [
            { icon: 'fa-utensils', title: 'Hygienic Design', desc: 'Free of porosity and surface defects.' },
            { icon: 'fa-check-circle', title: 'FDA/CE Compliant', desc: 'Utilizing certified food-grade materials.' }
        ],
        processes: [
            { title: 'Closed Die Forging', desc: 'Creating complex, crevice-free geometries.' },
            { title: 'Electropolishing', desc: 'Achieving mirror-like finishes for easy cleaning.' },
            { title: 'Surface Roughness Testing', desc: 'Verifying Ra values to sanitary standards.' }
        ]
    },
    '/pharmaceutical-equipment': {
        title: 'Pharmaceutical Equipment',
        subtitle: 'Process Industry',
        image: './images/facility.jpg',
        description1: 'Ultra-high purity forgings for the demanding pharmaceutical and biotech industries.',
        description2: 'We supply critical components for centrifuges, bioreactors, and clean-in-place (CIP) systems. Every part is manufactured under strict traceability and cleanliness protocols.',
        features: [
            { icon: 'fa-capsules', title: 'Ultra-High Purity', desc: 'Forged from premium 316L and 304L stainless steel.' },
            { icon: 'fa-search', title: '100% Traceability', desc: 'Complete material test reports (MTR) provided.' }
        ],
        processes: [
            { title: 'Clean Environment Machining', desc: 'Preventing cross-contamination during finishing.' },
            { title: 'Ultrasonic Cleaning', desc: 'Removing all machining fluids and particulates.' },
            { title: 'Vacuum Packaging', desc: 'Ensuring pristine condition upon delivery.' }
        ]
    },
    '/aerospace-grade': {
        title: 'Aerospace Grade Forging',
        subtitle: 'Process Industry',
        image: './images/facility.jpg',
        description1: 'Lightweight, ultra-high-strength forgings for commercial and defense aerospace applications.',
        description2: 'JK Forge produces landing gear components, engine mounts, and structural fittings. We work with titanium and high-strength aluminum alloys to maximize the strength-to-weight ratio.',
        features: [
            { icon: 'fa-plane', title: 'AS9100 Compliant', desc: 'Manufactured to strict aerospace quality management standards.' },
            { icon: 'fa-weight', title: 'Optimized Topology', desc: 'Near-net shape forging minimizes weight.' }
        ],
        processes: [
            { title: 'Titanium Forging', desc: 'Specialized handling and heating of titanium billets.' },
            { title: 'Non-Destructive Testing', desc: '100% FPI and X-Ray inspection.' },
            { title: '5-Axis Machining', desc: 'Complex geometries for aerospace structures.' }
        ]
    },
    '/earthmoving-equipment': {
        title: 'Earthmoving Equipment',
        subtitle: 'Process Industry',
        image: './images/facility.jpg',
        description1: 'Heavy-duty forgings for excavators, bulldozers, and loaders.',
        description2: 'We supply high-wear components such as track links, bucket teeth, and hydraulic cylinder ends. Our forgings are built to withstand the brutal impacts of earthmoving operations.',
        features: [
            { icon: 'fa-truck-monster', title: 'Impact Resistance', desc: 'Tough core with a hard exterior to prevent shattering.' },
            { icon: 'fa-hammer', title: 'High Wear Life', desc: 'Outlasts standard castings in abrasive environments.' }
        ],
        processes: [
            { title: 'Drop Forging', desc: 'Creating dense, impact-resistant structures.' },
            { title: 'Carbo-Nitriding', desc: 'Deep case hardening for track pins and bushings.' },
            { title: 'Robotic Welding', desc: 'Preparing components for easy assembly.' }
        ]
    },
    '/construction-equipment': {
        title: 'Construction Equipment',
        subtitle: 'Process Industry',
        image: './images/facility.jpg',
        description1: 'Reliable, high-strength components for cranes, concrete mixers, and paving machinery.',
        description2: 'Our forgings provide the structural integrity required for heavy lifting and continuous operation on rugged construction sites.',
        features: [
            { icon: 'fa-hard-hat', title: 'Structural Integrity', desc: 'Engineered for high load-bearing and safety-critical applications.' },
            { icon: 'fa-cogs', title: 'Continuous Operation', desc: 'Fatigue-resistant components reduce equipment downtime.' }
        ],
        processes: [
            { title: 'Upset Forging', desc: 'Creating high-strength tie rods and suspension links.' },
            { title: 'Quenching & Tempering', desc: 'Achieving the perfect balance of hardness and ductility.' },
            { title: 'Magnetic Particle Inspection', desc: 'Ensuring surface integrity under load.' }
        ]
    },

    // HEAVY INDUSTRY
    '/steel-plant-forging': {
        title: 'Steel Plant Forging',
        subtitle: 'Heavy Industry',
        image: './images/facility.jpg',
        description1: 'Massive, heat-resistant forgings for steel mills and foundries.',
        description2: 'We manufacture rolling mill rolls, crane hooks, and heavy duty gears. Our forgings are designed to withstand the extreme temperatures and massive rolling forces inherent in steel production.',
        features: [
            { icon: 'fa-fire', title: 'Thermal Shock Resistance', desc: 'Alloys chosen to resist cracking under rapid temperature changes.' },
            { icon: 'fa-weight-hanging', title: 'Massive Load Capacity', desc: 'Forged from massive ingots for structural integrity.' }
        ],
        processes: [
            { title: 'Heavy Open Die Forging', desc: 'Shaping large ingots into mill rolls.' },
            { title: 'Double Normalizing', desc: 'Refining the coarse grain structure of large forgings.' },
            { title: 'Heavy Duty Machining', desc: 'Precision turning on large vertical lathes.' }
        ]
    },
    '/cement-plant-forging': {
        title: 'Cement Plant Forging',
        subtitle: 'Heavy Industry',
        image: './images/facility.jpg',
        description1: 'Abrasion-resistant forgings for crushers, kilns, and mills in the cement industry.',
        description2: 'JK Forge supplies girth gears, pinion shafts, and grinding rollers. Our components resist the highly abrasive cement dust and continuous heavy loads of rotary kilns.',
        features: [
            { icon: 'fa-industry', title: 'Severe Abrasion Resistance', desc: 'Specialized wear surfaces outlast standard steel.' },
            { icon: 'fa-sync', title: 'Continuous Torsion', desc: 'Fatigue-resistant shafts for 24/7 kiln operation.' }
        ],
        processes: [
            { title: 'Ring Rolling', desc: 'Seamless forging for massive rotary kiln tires.' },
            { title: 'Deep Case Hardening', desc: 'Extending the life of crushing components.' },
            { title: 'Gear Hobbing', desc: 'Precision cutting for large-diameter gears.' }
        ]
    },
    '/sugar-mill-forging': {
        title: 'Sugar Mill Forging',
        subtitle: 'Heavy Industry',
        image: './images/facility.jpg',
        description1: 'Corrosion and wear-resistant forgings for sugar cane crushing and processing.',
        description2: 'We manufacture heavy mill roller shafts, trash plates, and coupling boxes. Our forgings are designed to handle the acidic nature of cane juice and the massive crushing forces of the mills.',
        features: [
            { icon: 'fa-leaf', title: 'Juice Corrosion Resistance', desc: 'Alloys selected to resist acidic degradation.' },
            { icon: 'fa-cogs', title: 'High Torque Capacity', desc: 'Engineered for the extreme torque of cane crushers.' }
        ],
        processes: [
            { title: 'Heavy Shaft Forging', desc: 'Upset and open die forging for mill rollers.' },
            { title: 'Shrink Fitting', desc: 'Assembling forged shafts with cast iron shells.' },
            { title: 'Ultrasonic Flaw Detection', desc: 'Ensuring no internal voids in large shafts.' }
        ]
    },
    '/paper-mill-forging': {
        title: 'Paper Mill Forging',
        subtitle: 'Heavy Industry',
        image: './images/facility.jpg',
        description1: 'Precision balanced, corrosion-resistant forgings for high-speed paper machines.',
        description2: 'JK Forge supplies calendar rolls, suction roll shells, and heavy-duty journals. Our components are machined to exact tolerances to ensure vibration-free operation at high speeds.',
        features: [
            { icon: 'fa-scroll', title: 'High-Speed Stability', desc: 'Dynamically balanced to eliminate vibrations.' },
            { icon: 'fa-water', title: 'Moisture Resistance', desc: 'Stainless and coated steels prevent rust on the paper web.' }
        ],
        processes: [
            { title: 'Seamless Hollow Forging', desc: 'Creating high-strength roll shells.' },
            { title: 'Dynamic Balancing', desc: 'Computerized balancing for high RPM applications.' },
            { title: 'Mirror Polishing', desc: 'Achieving exact surface finishes for paper contact.' }
        ]
    },
    '/textile-machinery': {
        title: 'Textile Machinery',
        subtitle: 'Heavy Industry',
        image: './images/facility.jpg',
        description1: 'High-speed, lightweight precision forgings for spinning, weaving, and processing machinery.',
        description2: 'We provide specialized cams, levers, and high-speed shafts. Our forgings reduce inertia and wear, allowing textile machines to operate at higher efficiencies with less maintenance.',
        features: [
            { icon: 'fa-tshirt', title: 'Low Inertia', desc: 'Optimized designs for rapid oscillating movements.' },
            { icon: 'fa-tachometer-alt', title: 'High Wear Resistance', desc: 'Surface hardened to resist yarn abrasion.' }
        ],
        processes: [
            { title: 'Precision Closed Die', desc: 'Net-shape forging for small, intricate levers.' },
            { title: 'Nitriding', desc: 'Providing a hard, wear-resistant surface without distortion.' },
            { title: 'Precision Grinding', desc: 'Achieving tight fits for high-speed bearings.' }
        ]
    },
    '/industrial-forging': {
        title: 'Industrial Forging',
        subtitle: 'Heavy Industry',
        image: './images/facility.jpg',
        description1: 'Versatile, custom forging solutions for general manufacturing and heavy industrial applications.',
        description2: 'From custom brackets and heavy hinges to specialized machine bases, we provide robust forged alternatives to fabrications and castings, improving overall structural integrity.',
        features: [
            { icon: 'fa-industry', title: 'Custom Solutions', desc: 'Tailored to unique industrial blueprints.' },
            { icon: 'fa-shield-alt', title: 'Superior Strength', desc: 'Eliminates the porosity and weld failures common in alternatives.' }
        ],
        processes: [
            { title: 'Flexible Manufacturing', desc: 'Capable of handling both low-volume prototypes and high-volume runs.' },
            { title: 'Normalizing & Tempering', desc: 'Optimizing mechanical properties for general use.' },
            { title: 'CNC Milling & Turning', desc: 'Delivering finished, ready-to-assemble parts.' }
        ]
    },
    '/elevator-forging': {
        title: 'Elevator Forging',
        subtitle: 'Heavy Industry',
        image: './images/facility.jpg',
        description1: 'Safety-critical, high-strength forgings for commercial and industrial elevator systems.',
        description2: 'We manufacture guide rail clips, sheave shafts, and safety gear components. Our forgings ensure absolute reliability for passenger safety and smooth operation.',
        features: [
            { icon: 'fa-building', title: 'Passenger Safety', desc: 'Manufactured with zero tolerance for failure.' },
            { icon: 'fa-arrows-alt-v', title: 'Smooth Operation', desc: 'Precision machined for vibration-free lifting.' }
        ],
        processes: [
            { title: 'Closed Die Forging', desc: 'High-volume production of consistent safety clips.' },
            { title: 'Magnetic Particle Inspection', desc: '100% surface inspection of critical safety parts.' },
            { title: 'Zinc Plating', desc: 'Corrosion protection for elevator shaft environments.' }
        ]
    },
    '/crane-forging': {
        title: 'Crane Forging',
        subtitle: 'Heavy Industry',
        image: './images/facility.jpg',
        description1: 'Massive, certified load-bearing forgings for overhead, gantry, and mobile cranes.',
        description2: 'JK Forge is a premier supplier of forged crane hooks, lifting sheaves, and wheel blanks. Our crane components are rigorously tested to ensure they can handle massive dynamic loads safely.',
        features: [
            { icon: 'fa-truck-loading', title: 'Certified Load Ratings', desc: 'Tested and certified for specific safe working loads (SWL).' },
            { icon: 'fa-circle-notch', title: 'Wear Resistant Wheels', desc: 'Deep hardened crane wheels for extended rail life.' }
        ],
        processes: [
            { title: 'Heavy Drop Forging', desc: 'Forging massive single-piece crane hooks.' },
            { title: 'Proof Load Testing', desc: 'Physical testing to 200% of safe working load.' },
            { title: 'Induction Hardening', desc: 'Hardening the tread of crane wheels while keeping the core ductile.' }
        ]
    }
};

Object.assign(window.pageContent, industriesOtherData);
