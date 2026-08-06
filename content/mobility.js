window.pageContent = window.pageContent || {};

const mobilityData = {
    '/automotive-forging': {
        title: 'Automotive Forging',
        subtitle: 'Mobility & Vehicles',
        image: './images/automotive.jpg',
        description1: 'JK Forge is a premier supplier of precision automotive forgings, delivering high-strength, fatigue-resistant components to leading OEMs globally.',
        description2: 'Our automotive components undergo rigorous metallurgical testing and are forged to near-net shape, reducing material waste and post-machining costs while ensuring maximum structural integrity under dynamic loads.',
        features: [
            { icon: 'fa-car', title: 'High-Stress Endurance', desc: 'Forged to withstand continuous vibration and extreme rotational forces.' },
            { icon: 'fa-cogs', title: 'Near-Net Shape', desc: 'Precision dies ensure minimal machining is required for final assembly.' }
        ],
        processes: [
            { title: 'Alloy Selection', desc: 'Using specialized high-carbon and alloy steels (e.g., SAE 4140, EN8).' },
            { title: 'Closed Die Forging', desc: 'High-tonnage press forging to optimize the internal grain structure.' },
            { title: 'CNC Finishing', desc: 'Exact tolerance machining for immediate OEM assembly.' }
        ]
    },
    '/automobile-parts': {
        title: 'Automobile Parts',
        subtitle: 'Mobility & Vehicles',
        image: './images/automotive.jpg',
        description1: 'We manufacture a comprehensive range of critical automobile parts, focusing on drivetrain, steering, and suspension systems.',
        description2: 'From connecting rods and camshafts to steering knuckles, our forged automobile parts offer superior strength-to-weight ratios compared to cast alternatives, enhancing vehicle performance and safety.',
        features: [
            { icon: 'fa-weight-hanging', title: 'Optimized Weight', desc: 'High strength-to-weight ratio improves fuel efficiency.' },
            { icon: 'fa-shield-alt', title: 'Crash Resilience', desc: 'Superior ductility absorbs impact forces better than cast components.' }
        ],
        processes: [
            { title: 'CAD/CAM Design', desc: '3D modeling of parts to simulate stress points and grain flow.' },
            { title: 'Hot Forging', desc: 'Heating billets to precise temperatures for optimal malleability.' },
            { title: 'Heat Treatment', desc: 'Quenching and tempering to achieve desired hardness levels.' }
        ]
    },
    '/automotive-forging-rajkot': {
        title: 'Automotive Forging Rajkot',
        subtitle: 'Mobility & Vehicles',
        image: './images/facility.jpg',
        description1: 'Strategically located in Rajkot, Gujarat—the engineering hub of India—JK Forge is ideally positioned to serve the automotive sector.',
        description2: 'Our Rajkot facility boasts advanced forging presses and a robust local supply chain, allowing us to offer highly competitive pricing, rapid turnaround times, and world-class quality for automotive OEMs.',
        features: [
            { icon: 'fa-map-marker-alt', title: 'Strategic Location', desc: 'Proximity to major ports and industrial clusters.' },
            { icon: 'fa-truck-loading', title: 'Rapid Logistics', desc: 'Efficient supply chain management for just-in-time delivery.' }
        ],
        processes: [
            { title: 'Local Material Sourcing', desc: 'Partnering with premium steel mills in Gujarat.' },
            { title: 'Mass Production', desc: 'High-volume production lines optimized for automotive demands.' },
            { title: 'Quality Assurance', desc: 'ISO certified inspection protocols.' }
        ]
    },
    '/commercial-vehicle': {
        title: 'Commercial Vehicle Forging',
        subtitle: 'Mobility & Vehicles',
        image: './images/truck.jpg',
        description1: 'Commercial vehicles require parts that can withstand immense payloads and grueling long-haul conditions. We deliver heavy-duty forgings built for this purpose.',
        description2: 'Our commercial vehicle forgings include heavy axles, yokes, and suspension components, engineered to maximize uptime and minimize maintenance costs for fleet operators.',
        features: [
            { icon: 'fa-truck', title: 'Heavy Payload Capacity', desc: 'Engineered for high load-bearing commercial applications.' },
            { icon: 'fa-tachometer-alt', title: 'Long-Haul Durability', desc: 'Fatigue-resistant components for millions of miles of service.' }
        ],
        processes: [
            { title: 'Heavy Billet Forging', desc: 'Processing large steel billets using high-capacity hammers.' },
            { title: 'Deep Case Hardening', desc: 'Advanced heat treatment for wear resistance.' },
            { title: 'Ultrasonic Testing', desc: 'Ensuring zero internal defects in heavy parts.' }
        ]
    },
    '/truck-parts-forging': {
        title: 'Truck Parts Forging',
        subtitle: 'Mobility & Vehicles',
        image: './images/truck.jpg',
        description1: 'Specialized forging solutions for medium and heavy-duty trucks, offering unmatched reliability and structural integrity.',
        description2: 'We supply critical safety components such as king pins, tie rod ends, and wheel hubs. Our forged truck parts are trusted by leading commercial vehicle manufacturers to perform flawlessly under severe stress.',
        features: [
            { icon: 'fa-shield-alt', title: 'Critical Safety', desc: 'Failure-proof manufacturing for steering and suspension.' },
            { icon: 'fa-wrench', title: 'Reduced Maintenance', desc: 'Wear-resistant parts lower total cost of ownership.' }
        ],
        processes: [
            { title: 'Drop Forging', desc: 'Impact forging to achieve complex geometries.' },
            { title: 'Shot Peening', desc: 'Inducing compressive residual stress for fatigue life.' },
            { title: 'Anti-Corrosion Coating', desc: 'Zinc plating and powder coating for weather resistance.' }
        ]
    },
    '/two-wheeler-parts': {
        title: 'Two-Wheeler Parts',
        subtitle: 'Mobility & Vehicles',
        image: './images/automotive.jpg',
        description1: 'Precision lightweight forgings for motorcycles and scooters, balancing performance, weight, and cost-efficiency.',
        description2: 'Our two-wheeler components, such as gear blanks, connecting rods, and kick starters, are manufactured with tight tolerances to ensure smooth engine operation and high RPM durability.',
        features: [
            { icon: 'fa-motorcycle', title: 'Lightweight Design', desc: 'Optimized profiles reduce unsprung mass.' },
            { icon: 'fa-tachometer-alt', title: 'High RPM Stability', desc: 'Perfectly balanced components for engine internals.' }
        ],
        processes: [
            { title: 'Precision Closed Die', desc: 'High accuracy forging for small, intricate parts.' },
            { title: 'Micro-Alloying', desc: 'Using specialized steels for strength without extra weight.' },
            { title: 'Centerless Grinding', desc: 'Achieving exact diametrical tolerances.' }
        ]
    },
    '/agricultural-equipment': {
        title: 'Agricultural Equipment',
        subtitle: 'Mobility & Vehicles',
        image: './images/tractor.jpg',
        description1: 'Rugged forged components designed for the harsh, abrasive, and high-torque environments of modern agriculture.',
        description2: 'JK Forge produces heavy-duty parts for harvesters, cultivators, and tillers. Our forgings resist soil abrasion and rock impacts, outlasting standard cast or welded components.',
        features: [
            { icon: 'fa-tractor', title: 'Abrasive Resistance', desc: 'Specialized heat treatments withstand harsh soil conditions.' },
            { icon: 'fa-hammer', title: 'Impact Toughness', desc: 'Resists fracturing when encountering field debris or rocks.' }
        ],
        processes: [
            { title: 'High-Carbon Forging', desc: 'Utilizing wear-resistant carbon steels.' },
            { title: 'Induction Hardening', desc: 'Targeted hardening on wear surfaces.' },
            { title: 'Magnetic Particle Inspection', desc: 'Surface defect detection.' }
        ]
    },
    '/tractor-parts': {
        title: 'Tractor Parts',
        subtitle: 'Mobility & Vehicles',
        image: './images/tractor.jpg',
        description1: 'High-torque transmission and structural forgings engineered specifically for heavy-duty tractors.',
        description2: 'We supply essential tractor components including PTO shafts, lift arms, and transmission gears. These parts are forged to handle massive low-end torque and continuous heavy pulling loads.',
        features: [
            { icon: 'fa-cogs', title: 'High Torque Transfer', desc: 'Engineered grain flow prevents shear failure under load.' },
            { icon: 'fa-link', title: 'Heavy Pulling Capacity', desc: 'Structural integrity for implement towing.' }
        ],
        processes: [
            { title: 'Upset Forging', desc: 'Creating robust shaft ends and flanges.' },
            { title: 'Carburizing', desc: 'Case hardening for gear teeth and splines.' },
            { title: 'Spline Broaching', desc: 'Precision cutting for perfect mechanical engagement.' }
        ]
    },
    '/railway-forging': {
        title: 'Railway Forging',
        subtitle: 'Mobility & Vehicles',
        image: './images/railway.jpg',
        description1: 'Safety-critical forged components for rolling stock, locomotives, and rail infrastructure.',
        description2: 'Our railway forgings meet stringent national and international railway standards. We manufacture heavy couplers, suspension links, and brake components that endure continuous dynamic stresses and heavy axial loads.',
        features: [
            { icon: 'fa-train', title: 'Stringent Certification', desc: 'Manufactured to exact railway authority specifications.' },
            { icon: 'fa-shield-alt', title: 'Extreme Fatigue Life', desc: 'Designed for decades of continuous cyclic loading.' }
        ],
        processes: [
            { title: 'Heavy Press Forging', desc: 'Manipulating large steel masses for structural parts.' },
            { title: 'Normalizing', desc: 'Refining grain structure for uniform strength.' },
            { title: '100% NDT', desc: 'Comprehensive non-destructive testing of every part.' }
        ]
    },
    '/defense-forging': {
        title: 'Defense Forging',
        subtitle: 'Mobility & Vehicles',
        image: './images/defense.jpg',
        description1: 'Mission-critical forgings for defense applications where failure is not an option.',
        description2: 'JK Forge is a trusted partner for defense contractors, producing high-strength alloy parts for military vehicles, artillery, and aerospace applications under strict confidentiality and quality control.',
        features: [
            { icon: 'fa-shield-alt', title: 'Ballistic Grade', desc: 'Utilizing specialized superalloys and high-strength steels.' },
            { icon: 'fa-lock', title: 'Secure Manufacturing', desc: 'Strict compliance with defense procurement standards.' }
        ],
        processes: [
            { title: 'Superalloy Forging', desc: 'Processing titanium and specialized high-grade alloys.' },
            { title: 'Vacuum Heat Treatment', desc: 'Preventing oxidation during critical hardening.' },
            { title: 'Coordinate Measuring', desc: 'Micron-level dimensional verification via CMM.' }
        ]
    },
    '/marine-forging': {
        title: 'Marine Forging',
        subtitle: 'Mobility & Vehicles',
        image: './images/marine.jpg',
        description1: 'Corrosion-resistant, high-strength forgings designed for the unforgiving marine environment.',
        description2: 'We manufacture propeller shafts, rudder components, and deck hardware. Our marine forgings utilize duplex steels and specialized alloys to prevent saltwater corrosion and endure heavy hydrodynamic loads.',
        features: [
            { icon: 'fa-water', title: 'Saltwater Resilience', desc: 'Advanced alloys prevent pitting and galvanic corrosion.' },
            { icon: 'fa-anchor', title: 'Hydrodynamic Strength', desc: 'Withstands immense torque and torsion from propulsion systems.' }
        ],
        processes: [
            { title: 'Stainless & Duplex Forging', desc: 'Specialized handling of corrosion-resistant materials.' },
            { title: 'Solution Annealing', desc: 'Optimizing the microstructure of stainless steel.' },
            { title: 'Electropolishing', desc: 'Enhancing surface finish and corrosion resistance.' }
        ]
    },
    '/shipbuilding-forging': {
        title: 'Shipbuilding Forging',
        subtitle: 'Mobility & Vehicles',
        image: './images/marine.jpg',
        description1: 'Massive structural and mechanical forgings for commercial shipbuilding and offshore vessels.',
        description2: 'Our heavy forging capabilities allow us to produce large-scale components for shipyards, including engine internals, large flanges, and structural tie-downs, certified by major maritime classification societies.',
        features: [
            { icon: 'fa-ship', title: 'Maritime Certification', desc: 'Compliant with IRS, ABS, and DNV GL standards.' },
            { icon: 'fa-weight-hanging', title: 'Heavy Tonnage Capacity', desc: 'Capable of forging massive single-piece components.' }
        ],
        processes: [
            { title: 'Open Die Forging', desc: 'Custom shaping of massive components without closed dies.' },
            { title: 'Heavy Machining', desc: 'Large-capacity VTLs and boring machines.' },
            { title: 'Proof Load Testing', desc: 'Validating the ultimate tensile strength of structural parts.' }
        ]
    }
};

Object.assign(window.pageContent, mobilityData);
