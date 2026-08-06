window.pageContent = window.pageContent || {};

const capabilitiesData = {
    // FORGING PROCESSES
    '/hot-forging': {
        title: 'Hot Forging',
        subtitle: 'Forging Processes',
        image: './images/facility.jpg',
        description1: 'High-temperature forging that drastically improves metal ductility, allowing for extreme deformation and complex geometries.',
        description2: 'At JK Forge, we heat billets above their recrystallization temperature before forging. This process eliminates internal pores and voids, breaks up inclusions, and refines the grain structure for superior mechanical strength.',
        features: [
            { icon: 'fa-fire', title: 'High Malleability', desc: 'Allows for complex shapes with minimal press tonnage.' },
            { icon: 'fa-cubes', title: 'Refined Microstructure', desc: 'Homogenizes the steel for uniform mechanical properties.' }
        ],
        processes: [
            { title: 'Induction Heating', desc: 'Rapid, uniform heating of the billet to forging temperature.' },
            { title: 'Press/Hammer Forging', desc: 'Deforming the hot metal into the desired shape.' },
            { title: 'Controlled Cooling', desc: 'Preventing thermal shock and internal cracking post-forge.' }
        ]
    },
    '/closed-die-forging': {
        title: 'Closed Die Forging',
        subtitle: 'Forging Processes',
        image: './images/facility.jpg',
        description1: 'Precision near-net shape forging using custom-machined dies that completely enclose the workpiece.',
        description2: 'Also known as impression die forging, this process forces the hot metal to fill a precision die cavity. It yields components with exceptional dimensional accuracy, fine surface finish, and highly optimized grain flow.',
        features: [
            { icon: 'fa-compress-arrows-alt', title: 'Near-Net Shape', desc: 'Drastically reduces the need for subsequent machining.' },
            { icon: 'fa-cogs', title: 'Engineered Grain Flow', desc: 'Grain lines follow the contour of the part, maximizing fatigue strength.' }
        ],
        processes: [
            { title: 'Die Sinking', desc: 'CNC machining the negative impression of the part into tool steel die blocks.' },
            { title: 'Multi-Stage Forging', desc: 'Using progressive cavities (blocker, finisher) for complex shapes.' },
            { title: 'Trimming', desc: 'Shearing off the flash (excess metal) after forging.' }
        ]
    },
    '/closed-die-manufacturer': {
        title: 'Closed Die Manufacturer',
        subtitle: 'Forging Processes',
        image: './images/facility.jpg',
        description1: 'JK Forge is a premier manufacturer specializing in high-volume, high-precision closed die forgings.',
        description2: 'Equipped with a battery of high-tonnage friction screw presses and drop hammers, we are capable of producing millions of identical, high-integrity forged parts annually for OEMs worldwide.',
        features: [
            { icon: 'fa-industry', title: 'High Volume Capacity', desc: 'Automated lines for rapid, continuous production.' },
            { icon: 'fa-check-double', title: 'Unmatched Consistency', desc: 'Every part matches the exact dimensions of the master die.' }
        ],
        processes: [
            { title: 'In-House Tooling', desc: 'Rapid die design and manufacturing to speed up time-to-market.' },
            { title: 'Mass Production Forging', desc: 'High-speed striking for maximum throughput.' },
            { title: 'Statistical Process Control', desc: 'Monitoring production to ensure zero dimensional drift.' }
        ]
    },
    '/open-die-forging': {
        title: 'Open Die Forging',
        subtitle: 'Forging Processes',
        image: './images/facility.jpg',
        description1: 'Custom forging for massive components and low-volume production without the need for expensive dedicated tooling.',
        description2: 'Using flat or simply shaped dies, our skilled operators manipulate massive hot ingots into stepped shafts, rings, and large blocks, ensuring complete consolidation of the metal core.',
        features: [
            { icon: 'fa-hammer', title: 'Massive Size Capability', desc: 'Ideal for parts too large for closed dies.' },
            { icon: 'fa-piggy-bank', title: 'No Tooling Costs', desc: 'Perfect for prototypes and low-volume runs.' }
        ],
        processes: [
            { title: 'Ingot Heating', desc: 'Soaking large masses of steel in gas-fired furnaces.' },
            { title: 'Manipulator Handling', desc: 'Using hydraulic manipulators to rotate the heavy workpiece under the press.' },
            { title: 'Drawing & Upsetting', desc: 'Elongating or pancaking the metal to achieve the basic shape.' }
        ]
    },
    '/drop-forging': {
        title: 'Drop Forging',
        subtitle: 'Forging Processes',
        image: './images/facility.jpg',
        description1: 'High-impact forging utilizing gravity or power-assisted hammers to force hot metal into a die.',
        description2: 'Drop forging provides excellent impact toughness and is highly efficient for producing tools, automotive linkages, and heavy-duty hardware where rapid deformation is required.',
        features: [
            { icon: 'fa-arrow-down', title: 'High Impact Velocity', desc: 'Rapid deformation fills complex die cavities effectively.' },
            { icon: 'fa-shield-alt', title: 'Superior Impact Toughness', desc: 'Dense grain structure resists fracturing.' }
        ],
        processes: [
            { title: 'Billet Heating', desc: 'Heating the steel to a plastic state.' },
            { title: 'Hammer Striking', desc: 'Repeated high-velocity impacts to shape the part.' },
            { title: 'Hot Trimming', desc: 'Removing flash immediately after the final strike.' }
        ]
    },
    '/press-forging': {
        title: 'Press Forging',
        subtitle: 'Forging Processes',
        image: './images/facility.jpg',
        description1: 'Continuous, slow-pressure forging that penetrates deep into the core of the workpiece.',
        description2: 'Unlike the rapid impact of drop hammers, our heavy forging presses apply a slow, continuous squeeze. This ensures uniform deformation from the surface all the way to the center of thick components.',
        features: [
            { icon: 'fa-compress-alt', title: 'Deep Core Consolidation', desc: 'Eliminates internal voids in massive cross-sections.' },
            { icon: 'fa-expand-arrows-alt', title: 'Uniform Properties', desc: 'Consistent mechanical strength throughout the part.' }
        ],
        processes: [
            { title: 'Hydraulic Pressing', desc: 'Applying thousands of tons of continuous force.' },
            { title: 'Isothermal Forging (Optional)', desc: 'Dies are heated to the same temperature as the workpiece for superalloys.' },
            { title: 'Controlled Cooling', desc: 'Ensuring structural stability after heavy deformation.' }
        ]
    },
    '/precision-forging': {
        title: 'Precision Forging',
        subtitle: 'Forging Processes',
        image: './images/facility.jpg',
        description1: 'Ultra-high accuracy forging that often entirely eliminates the need for subsequent rough machining.',
        description2: 'Also known as flashless or net-shape forging, this advanced process uses precisely calculated billet volumes and tightly constrained dies to produce parts that are instantly ready for finish grinding or assembly.',
        features: [
            { icon: 'fa-bullseye', title: 'Net-Shape Accuracy', desc: 'Tolerances measured in fractions of a millimeter.' },
            { icon: 'fa-leaf', title: 'Zero Material Waste', desc: 'Flashless forging uses 100% of the billet.' }
        ],
        processes: [
            { title: 'Exact Billet Sizing', desc: 'Sawing billets to a very precise weight/volume.' },
            { title: 'Fully Enclosed Die Pressing', desc: 'Forcing the metal to fill the cavity with no escape for flash.' },
            { title: 'Ejection', desc: 'Carefully pushing the finished part out of the tight die.' }
        ]
    },
    '/bulk-forging': {
        title: 'Bulk Forging',
        subtitle: 'Forging Processes',
        image: './images/facility.jpg',
        description1: 'Massive scale deformation processes including rolling, extrusion, and drawing.',
        description2: 'JK Forge utilizes bulk forming techniques to produce continuous profiles, long shafts, and heavy seamless rings, changing the overall shape and cross-section of large metal masses.',
        features: [
            { icon: 'fa-weight-hanging', title: 'Massive Scale', desc: 'Handling ingots weighing several tons.' },
            { icon: 'fa-layer-group', title: 'Continuous Grain', desc: 'Unbroken longitudinal grain flow.' }
        ],
        processes: [
            { title: 'Extrusion / Drawing', desc: 'Forcing metal through a die to reduce cross-section.' },
            { title: 'Ring Rolling', desc: 'Producing large diameter seamless rings.' },
            { title: 'Heavy Upsetting', desc: 'Gathering volume at the ends of long shafts.' }
        ]
    },
    '/custom-oem-forging': {
        title: 'Custom OEM Forging',
        subtitle: 'Forging Processes',
        image: './images/facility.jpg',
        description1: 'Tailored forging solutions built exclusively to your proprietary blueprints and specifications.',
        description2: 'We act as a seamless extension of your manufacturing line. Bring us your CAD models, load requirements, and material specs, and we will engineer a custom forged solution that perfectly integrates into your final product.',
        features: [
            { icon: 'fa-handshake', title: 'OEM Partnership', desc: 'Strict confidentiality and intellectual property protection.' },
            { icon: 'fa-cogs', title: 'End-to-End Engineering', desc: 'From die design to final CNC machining and coating.' }
        ],
        processes: [
            { title: 'Reverse Engineering / CAD Design', desc: 'Collaborative engineering to optimize the part for forging.' },
            { title: 'Rapid Tooling', desc: 'In-house die manufacturing.' },
            { title: 'PPAP & First Article Inspection', desc: 'Rigorous approval process before mass production.' }
        ]
    },
    '/custom-forging-india': {
        title: 'Custom Forging India',
        subtitle: 'Forging Processes',
        image: './images/facility.jpg',
        description1: 'Leveraging India’s rich engineering heritage and competitive manufacturing advantages for global export.',
        description2: 'JK Forge combines the cost-effectiveness of Indian manufacturing with world-class ISO-certified quality, making us the preferred custom forging partner for companies across Europe, North America, and the Middle East.',
        features: [
            { icon: 'fa-globe', title: 'Global Exporter', desc: 'Extensive experience in international logistics and packaging.' },
            { icon: 'fa-chart-line', title: 'Cost Competitive', desc: 'High-quality manufacturing at a fraction of Western costs.' }
        ],
        processes: [
            { title: 'International Material Sourcing', desc: 'Using globally recognized grades (ASTM, DIN, JIS).' },
            { title: 'Custom Forging & Machining', desc: 'Full turnkey solutions in one facility.' },
            { title: 'Export Packaging', desc: 'VCI packaging and seaworthy wooden crates.' }
        ]
    },
    '/prototype-forging': {
        title: 'Prototype Forging',
        subtitle: 'Forging Processes',
        image: './images/facility.jpg',
        description1: 'Rapid, low-volume forging to validate designs and test mechanical properties before mass production.',
        description2: 'We offer specialized prototype forging services using soft tooling, 3D printed die concepts, or open-die techniques to help engineers physical test their designs without the heavy upfront cost of mass-production hard tooling.',
        features: [
            { icon: 'fa-flask', title: 'Design Validation', desc: 'Test actual forged material properties rather than machined bar stock.' },
            { icon: 'fa-tachometer-alt', title: 'Rapid Turnaround', desc: 'Accelerates your R&D and time-to-market.' }
        ],
        processes: [
            { title: 'Soft Tooling / Open Die', desc: 'Creating the prototype shape cost-effectively.' },
            { title: 'Extensive Machining', desc: 'Using 5-axis CNC to finalize the prototype shape.' },
            { title: 'Destructive Testing', desc: 'Validating that the prototype meets the engineered yield strengths.' }
        ]
    },

    // VALUE-ADD SERVICES
    '/cnc-machining': {
        title: 'CNC Machining',
        subtitle: 'Value-Add Services',
        image: './images/facility.jpg',
        description1: 'In-house precision CNC machining to deliver ready-to-assemble forged components.',
        description2: 'JK Forge doesn’t just supply raw forgings. Our advanced machine shop features 4-axis and 5-axis CNC machining centers, turning centers, and VTLs, allowing us to deliver finished parts with micron-level tolerances.',
        features: [
            { icon: 'fa-microchip', title: 'Micron Accuracy', desc: 'Achieving exact bearing fits, threads, and sealing surfaces.' },
            { icon: 'fa-box-open', title: 'Ready to Assemble', desc: 'Drop our parts directly onto your assembly line.' }
        ],
        processes: [
            { title: 'CNC Turning & Milling', desc: 'Precision cutting of complex geometries.' },
            { title: 'Drilling & Tapping', desc: 'Adding mounting holes and threaded connections.' },
            { title: 'CMM Inspection', desc: 'Coordinate measuring machine verification of all dimensions.' }
        ]
    },
    '/forging-machining': {
        title: 'Forging Machining',
        subtitle: 'Value-Add Services',
        image: './images/facility.jpg',
        description1: 'Specialized machining techniques tailored specifically for the tough, dense grain structure of forged steel.',
        description2: 'Machining forged steel requires different speeds, feeds, and tooling than machining cast iron or billet. Our machinists have decades of experience optimizing tool life and surface finish on tough forged alloys.',
        features: [
            { icon: 'fa-tools', title: 'Optimized Tooling', desc: 'Using specialized carbide and ceramic inserts.' },
            { icon: 'fa-tachometer-alt', title: 'Efficient Material Removal', desc: 'Rapid roughing and ultra-precise finishing.' }
        ],
        processes: [
            { title: 'Pre-Machining Normalizing', desc: 'Softening the forging for easier rough machining.' },
            { title: 'Hard Turning', desc: 'Machining the part after it has been fully heat-treated and hardened.' },
            { title: 'Superfinishing / Grinding', desc: 'Achieving mirror-like Ra surface roughness.' }
        ]
    },
    '/heat-treatment': {
        title: 'Heat Treatment',
        subtitle: 'Value-Add Services',
        image: './images/facility.jpg',
        description1: 'Advanced thermal processing to engineer the exact hardness, ductility, and tensile strength required.',
        description2: 'Our in-house heat treatment facility features computer-controlled continuous furnaces, batch furnaces, and induction hardening rigs to perfectly manipulate the metallurgy of every forged component.',
        features: [
            { icon: 'fa-fire-alt', title: 'Metallurgical Control', desc: 'Precise control over the pearlite, bainite, or martensite structures.' },
            { icon: 'fa-shield-alt', title: 'Enhanced Durability', desc: 'Massively increases wear resistance and fatigue life.' }
        ],
        processes: [
            { title: 'Normalizing & Annealing', desc: 'Refining grain size and relieving internal stresses.' },
            { title: 'Quenching & Tempering', desc: 'Rapid cooling (oil/water) followed by reheating for toughness.' },
            { title: 'Induction / Case Hardening', desc: 'Hardening only the outer wear surface while keeping the core ductile.' }
        ]
    },
    '/shot-blasting': {
        title: 'Shot Blasting',
        subtitle: 'Value-Add Services',
        image: './images/facility.jpg',
        description1: 'Mechanical surface cleaning and preparation using high-velocity abrasive media.',
        description2: 'All our forgings undergo shot blasting to remove forging scale, rust, and surface impurities. This provides a clean, uniform matte finish that is perfect for machining, painting, or coating.',
        features: [
            { icon: 'fa-spray-can', title: 'Clean Surface', desc: 'Removes all oxidized scale for tool-friendly machining.' },
            { icon: 'fa-paint-roller', title: 'Coating Adhesion', desc: 'Creates an ideal micro-texture for paint or zinc adherence.' }
        ],
        processes: [
            { title: 'Tumble Blasting', desc: 'Efficient cleaning for high volumes of small parts.' },
            { title: 'Hanger Blasting', desc: 'For large or delicate parts that cannot be tumbled.' },
            { title: 'Visual Inspection', desc: 'Easier detection of surface flaws after scale removal.' }
        ]
    },
    '/surface-treatment': {
        title: 'Surface Treatment',
        subtitle: 'Value-Add Services',
        image: './images/facility.jpg',
        description1: 'Protective and functional coatings applied to finished forgings to prevent corrosion and reduce friction.',
        description2: 'We offer a wide range of surface treatments—including black oxide, phosphating, and powder coating—to ensure your components withstand the elements and perform flawlessly in their operating environment.',
        features: [
            { icon: 'fa-shield-alt', title: 'Corrosion Protection', desc: 'Prevents rust during transit, storage, and operation.' },
            { icon: 'fa-eye', title: 'Aesthetic Finish', desc: 'Provides a professional, uniform appearance.' }
        ],
        processes: [
            { title: 'Phosphating / Black Oxide', desc: 'Mild corrosion resistance and oil-retention.' },
            { title: 'Hot Dip Galvanizing', desc: 'Heavy-duty rust protection for outdoor use.' },
            { title: 'Powder Coating / Painting', desc: 'Custom colors and durable polymer finishes.' }
        ]
    },
    '/zinc-plating': {
        title: 'Zinc Plating',
        subtitle: 'Value-Add Services',
        image: './images/facility.jpg',
        description1: 'Electroplating process providing excellent sacrificial corrosion resistance for forged fasteners and hardware.',
        description2: 'Our zinc plating lines apply a uniform layer of zinc (often with clear or yellow chromate passivation), protecting the steel forging from rust even if the coating is lightly scratched.',
        features: [
            { icon: 'fa-bolt', title: 'Sacrificial Protection', desc: 'Zinc corrodes before the underlying steel.' },
            { icon: 'fa-layer-group', title: 'Thin & Uniform', desc: 'Does not interfere with fine machined threads.' }
        ],
        processes: [
            { title: 'Acid Pickling', desc: 'Chemically cleaning the surface before plating.' },
            { title: 'Electroplating', desc: 'Submerging the part in a zinc bath with an electric current.' },
            { title: 'Passivation / Baking', desc: 'Adding chromate colors and preventing hydrogen embrittlement.' }
        ]
    },
    '/forging-dies': {
        title: 'Forging Dies',
        subtitle: 'Value-Add Services',
        image: './images/facility.jpg',
        description1: 'In-house design and manufacturing of ultra-hard tool steel forging dies.',
        description2: 'Having our own state-of-the-art tool room allows us to rapidly design, sink, and maintain the complex dies used in our presses. This ensures zero reliance on third parties and faster prototype turnaround.',
        features: [
            { icon: 'fa-tools', title: 'Rapid Tooling', desc: 'Faster transition from CAD drawing to physical forging.' },
            { icon: 'fa-hammer', title: 'Die Maintenance', desc: 'Immediate repair and resurfacing of worn dies for consistent quality.' }
        ],
        processes: [
            { title: 'CAD/CAM Simulation', desc: 'Simulating metal flow to design the perfect die cavity.' },
            { title: 'High-Speed CNC Milling', desc: 'Cutting the impression into H13 or specialized tool steel blocks.' },
            { title: 'Die Polishing', desc: 'Hand-polishing to ensure smooth metal flow and easy part ejection.' }
        ]
    },
    '/forging-exporter': {
        title: 'Forging Exporter',
        subtitle: 'Value-Add Services',
        image: './images/facility.jpg',
        description1: 'A trusted global exporter of premium forgings, servicing North America, Europe, and the Middle East.',
        description2: 'We are experts in international logistics, customs compliance, and seaworthy packaging. Our export division ensures that your precision components arrive on time, in perfect condition, anywhere in the world.',
        features: [
            { icon: 'fa-globe-americas', title: 'Global Reach', desc: 'Established logistics networks across major global ports.' },
            { icon: 'fa-box', title: 'Seaworthy Packaging', desc: 'VCI bags, rust-preventative oils, and ISPM-15 compliant wooden pallets.' }
        ],
        processes: [
            { title: 'Customs & Documentation', desc: 'Handling all export compliance and origin certificates.' },
            { title: 'Anti-Rust Treatment', desc: 'Ensuring parts survive long ocean transits.' },
            { title: 'Container Stuffing', desc: 'Secure loading to prevent transit damage.' }
        ]
    },
    '/iso-certified-forging': {
        title: 'ISO Certified Forging',
        subtitle: 'Value-Add Services',
        image: './images/facility.jpg',
        description1: 'Strict adherence to international quality management systems.',
        description2: 'Quality is not an afterthought at JK Forge. Our entire facility operates under strict ISO 9001:2015 standards, ensuring complete traceability, repeatable processes, and continuous improvement.',
        features: [
            { icon: 'fa-certificate', title: 'ISO 9001:2015', desc: 'Internationally recognized quality management.' },
            { icon: 'fa-search', title: '100% Traceability', desc: 'Heat numbers and material certs tracked for every batch.' }
        ],
        processes: [
            { title: 'Incoming Material Inspection', desc: 'Spectroscopic analysis of raw steel billets.' },
            { title: 'In-Process Quality Control', desc: 'Hourly checks on forging temperatures and die wear.' },
            { title: 'Final QA / NDT', desc: 'CMM dimensional checks, Magnaflux, and Ultrasonic testing.' }
        ]
    },
    '/forging-vs-casting': {
        title: 'Forging vs Casting',
        subtitle: 'Value-Add Services',
        image: './images/facility.jpg',
        description1: 'Why forging is structurally superior to casting for critical, high-stress applications.',
        description2: 'While casting pours molten metal into a mold, forging mechanically deforms solid hot metal. Forging eliminates internal porosity (gas bubbles) and creates a directional grain flow that makes the part vastly stronger and more resistant to impact and fatigue.',
        features: [
            { icon: 'fa-dumbbell', title: 'Vastly Superior Strength', desc: 'Forgings offer 20-30% higher tensile strength than equivalent castings.' },
            { icon: 'fa-shield-alt', title: 'No Hidden Defects', desc: 'Eliminates the risk of internal shrinkage cavities or sand inclusions.' }
        ],
        processes: [
            { title: 'Grain Flow Alignment', desc: 'Forging aligns the metallurgical grain to the shape of the part.' },
            { title: 'Density Increase', desc: 'The pounding action compacts the steel, increasing structural integrity.' },
            { title: 'Predictable Response', desc: 'Forgings respond much more uniformly to heat treatment than castings.' }
        ]
    },

    // MATERIAL GRADES
    '/alloy-steel-forging': {
        title: 'Alloy Steel Forging',
        subtitle: 'Material Grades',
        image: './images/facility.jpg',
        description1: 'High-performance forgings utilizing steel alloyed with elements like chromium, molybdenum, and nickel.',
        description2: 'Alloy steels (like SAE 4140, 8620) respond exceptionally well to heat treatment, offering the ultimate combination of high tensile strength, extreme toughness, and wear resistance for automotive and industrial gears and shafts.',
        features: [
            { icon: 'fa-cogs', title: 'High Hardenability', desc: 'Capable of achieving high core hardness.' },
            { icon: 'fa-shield-alt', title: 'Wear & Fatigue Resistant', desc: 'Ideal for dynamic, high-stress applications.' }
        ],
        processes: [
            { title: 'Controlled Heating', desc: 'Careful temperature management to prevent alloy segregation.' },
            { title: 'Quenching & Tempering', desc: 'Maximizing the mechanical properties of the specific alloy.' }
        ]
    },
    '/carbon-steel-forging': {
        title: 'Carbon Steel Forging',
        subtitle: 'Material Grades',
        image: './images/facility.jpg',
        description1: 'Versatile and cost-effective forgings using low, medium, and high carbon steels.',
        description2: 'Carbon steels (like 1020, 1045) are highly machinable and weldable. They are the workhorse material for structural components, flanges, and general machinery parts where extreme alloy properties are not required.',
        features: [
            { icon: 'fa-hammer', title: 'Excellent Machinability', desc: 'Reduces tooling costs and machining time.' },
            { icon: 'fa-dollar-sign', title: 'Cost-Effective', desc: 'The most economical choice for strong, reliable parts.' }
        ],
        processes: [
            { title: 'Upset & Drop Forging', desc: 'Highly malleable and easy to form into complex shapes.' },
            { title: 'Normalizing', desc: 'Providing uniform strength and relieving stresses.' }
        ]
    },
    '/stainless-steel': {
        title: 'Stainless Steel Forging',
        subtitle: 'Material Grades',
        image: './images/facility.jpg',
        description1: 'Corrosion-resistant forgings for the food, chemical, and marine industries.',
        description2: 'Forging stainless steel requires significantly more force and tighter temperature controls than carbon steel. We specialize in forging 300-series (austenitic) and 400-series (martensitic) stainless steels for parts that demand hygiene and rust prevention.',
        features: [
            { icon: 'fa-water', title: 'Corrosion Resistance', desc: 'Forms a passive chromium oxide layer preventing rust.' },
            { icon: 'fa-utensils', title: 'Hygienic & Clean', desc: 'Essential for food processing and medical equipment.' }
        ],
        processes: [
            { title: 'High-Tonnage Forging', desc: 'Overcoming the high yield strength of hot stainless steel.' },
            { title: 'Solution Annealing', desc: 'Restoring maximum corrosion resistance after forging.' }
        ]
    },
    '/ss316-forging': {
        title: 'SS316 Forging',
        subtitle: 'Material Grades',
        image: './images/facility.jpg',
        description1: 'Marine-grade stainless steel forgings with molybdenum for enhanced pitting resistance.',
        description2: 'SS316 (and 316L) is the premier choice for marine hardware, chemical plant valves, and pharmaceutical fittings. It vastly outperforms standard 304 stainless in chloride-rich (saltwater) environments.',
        features: [
            { icon: 'fa-anchor', title: 'Marine Grade', desc: 'Exceptional resistance to pitting and crevice corrosion.' },
            { icon: 'fa-flask', title: 'Chemical Safe', desc: 'Withstands exposure to acidic and caustic environments.' }
        ],
        processes: [
            { title: 'Precision Forging', desc: 'Creating complex valve bodies and flanges.' },
            { title: 'Electropolishing', desc: 'Creating a mirror finish that further prevents bacterial or chemical adherence.' }
        ]
    },
    '/en24-steel': {
        title: 'EN24 Steel Forging',
        subtitle: 'Material Grades',
        image: './images/facility.jpg',
        description1: 'A high-tensile alloy steel renowned for its exceptional strength and toughness.',
        description2: 'EN24 (817M40) is a nickel-chromium-molybdenum steel. It is heavily utilized in aerospace, automotive racing, and heavy machinery for highly stressed components like heavy-duty shafts, gears, and high-strength studs.',
        features: [
            { icon: 'fa-dumbbell', title: 'Ultra-High Tensile Strength', desc: 'Maintains strength even at elevated temperatures.' },
            { icon: 'fa-shield-alt', title: 'Deep Hardening', desc: 'Achieves uniform hardness in large cross-sections.' }
        ],
        processes: [
            { title: 'Careful Thermal Management', desc: 'Pre-heating required to prevent thermal shock.' },
            { title: 'Oil Quenching', desc: 'Achieving high hardness without cracking.' }
        ]
    },
    '/en8-steel': {
        title: 'EN8 Steel Forging',
        subtitle: 'Material Grades',
        image: './images/facility.jpg',
        description1: 'An unalloyed medium carbon steel offering moderate strength and excellent machinability.',
        description2: 'EN8 (080M40) is widely used for general engineering parts such as axles, spindles, and automotive linkages. It can be surface hardened to improve wear resistance on specific contact points.',
        features: [
            { icon: 'fa-cogs', title: 'General Purpose Strength', desc: 'A step up in tensile strength from mild steel.' },
            { icon: 'fa-fire', title: 'Surface Hardenable', desc: 'Responds well to induction hardening.' }
        ],
        processes: [
            { title: 'Drop & Upset Forging', desc: 'Highly malleable for rapid production.' },
            { title: 'Induction Hardening', desc: 'Hardening wear surfaces like gear teeth or bearing journals.' }
        ]
    },
    '/sae-4140-steel': {
        title: 'SAE 4140 Steel',
        subtitle: 'Material Grades',
        image: './images/facility.jpg',
        description1: 'The industry standard chromium-molybdenum alloy steel for extreme toughness.',
        description2: 'SAE 4140 is the go-to material for oil & gas drilling equipment, automotive crankshafts, and heavy-duty gears. It offers an outstanding balance of strength, toughness, and wear resistance.',
        features: [
            { icon: 'fa-burn', title: 'High Fatigue Strength', desc: 'Withstands massive cyclic loading and torsion.' },
            { icon: 'fa-hammer', title: 'Excellent Toughness', desc: 'Resists fracturing under heavy impact.' }
        ],
        processes: [
            { title: 'Closed Die Forging', desc: 'Optimizing grain flow for critical moving parts.' },
            { title: 'Through Hardening', desc: 'Quench and temper processes to achieve uniform core strength.' }
        ]
    },
    '/ms-forging': {
        title: 'MS (Mild Steel) Forging',
        subtitle: 'Material Grades',
        image: './images/facility.jpg',
        description1: 'Low-carbon steel forgings for structural applications requiring maximum ductility and weldability.',
        description2: 'Mild Steel (MS) is highly ductile, making it easy to forge into complex shapes without cracking. It is ideal for structural brackets, pipe fittings, and non-moving heavy industry hardware.',
        features: [
            { icon: 'fa-fire', title: 'Perfect Weldability', desc: 'Easily welded to other structures without pre-heating.' },
            { icon: 'fa-project-diagram', title: 'Maximum Ductility', desc: 'Will severely bend and deform long before it fractures.' }
        ],
        processes: [
            { title: 'Cold & Hot Forging', desc: 'Can be formed at various temperatures.' },
            { title: 'Case Carburizing (Optional)', desc: 'Adding a thin hard outer layer if wear resistance is needed.' }
        ]
    },
    '/spring-steel': {
        title: 'Spring Steel Forging',
        subtitle: 'Material Grades',
        image: './images/facility.jpg',
        description1: 'High-yield-strength forgings designed to return to their original shape after significant bending.',
        description2: 'We forge specialized spring steels (like EN45, EN47) for heavy-duty suspension leaf springs, coil spring seats, and heavy machinery clips that must absorb and release massive amounts of energy.',
        features: [
            { icon: 'fa-undo', title: 'High Yield Strength', desc: 'Resists permanent plastic deformation.' },
            { icon: 'fa-car-crash', title: 'Energy Absorption', desc: 'Ideal for heavy automotive and rail suspensions.' }
        ],
        processes: [
            { title: 'Hot Forming', desc: 'Forging the eyes and tapers of leaf springs.' },
            { title: 'Austempering', desc: 'Specialized heat treatment to maximize toughness and spring properties.' }
        ]
    },
    '/tool-steel': {
        title: 'Tool Steel Forging',
        subtitle: 'Material Grades',
        image: './images/facility.jpg',
        description1: 'Ultra-hard, heat-resistant forgings used to manufacture cutting tools and dies.',
        description2: 'Tool steels (like H13, D2) contain high amounts of tungsten, molybdenum, and vanadium. We forge tool steel blocks and blanks for customers who manufacture drill bits, punches, and industrial forging dies.',
        features: [
            { icon: 'fa-thermometer-empty', title: 'Red Hardness', desc: 'Maintains extreme hardness even when glowing red hot.' },
            { icon: 'fa-cut', title: 'Abrasion Resistance', desc: 'Carbide structures prevent wear from cutting and stamping.' }
        ],
        processes: [
            { title: 'Isothermal Forging', desc: 'Extremely slow, temperature-controlled forging to prevent cracking.' },
            { title: 'Spheroidizing', desc: 'Annealing process to make the ultra-hard steel machinable.' }
        ]
    },
    '/duplex-steel': {
        title: 'Duplex Steel Forging',
        subtitle: 'Material Grades',
        image: './images/facility.jpg',
        description1: 'Advanced two-phase stainless steel offering double the yield strength of standard austenitic grades.',
        description2: 'Duplex stainless steel forgings are highly sought after in the offshore oil & gas and desalination industries. They offer incredible resistance to stress corrosion cracking and pitting in chloride-rich environments.',
        features: [
            { icon: 'fa-weight-hanging', title: 'High Strength', desc: 'Allows for thinner, lighter designs compared to 316L.' },
            { icon: 'fa-water', title: 'Stress Corrosion Resistance', desc: 'Immune to chloride-induced cracking.' }
        ],
        processes: [
            { title: 'Narrow Temp Range Forging', desc: 'Requires highly skilled operators to forge within a strict thermal window.' },
            { title: 'Rapid Water Quenching', desc: 'Essential to maintain the correct ferrite/austenite phase balance.' }
        ]
    },
    '/nickel-alloy': {
        title: 'Nickel Alloy Forging',
        subtitle: 'Material Grades',
        image: './images/facility.jpg',
        description1: 'Superalloy forgings (Inconel, Monel, Hastelloy) for the most extreme temperature and chemical environments.',
        description2: 'Nickel alloys are incredibly difficult to forge due to their high strength at elevated temperatures. We forge these superalloys for aerospace turbine blades, nuclear reactors, and severe chemical processing valves.',
        features: [
            { icon: 'fa-fire', title: 'Extreme Heat Resistance', desc: 'Maintains structural integrity well above 1000°C.' },
            { icon: 'fa-flask', title: 'Ultimate Corrosion Defense', desc: 'Resists boiling acids and highly caustic environments.' }
        ],
        processes: [
            { title: 'High-Tonnage Pressing', desc: 'Requires massive force due to the metal\'s resistance to deformation.' },
            { title: 'Vacuum Heat Treatment', desc: 'Preventing oxidation of reactive elements during hardening.' }
        ]
    },
    '/copper-alloy': {
        title: 'Copper Alloy Forging',
        subtitle: 'Material Grades',
        image: './images/facility.jpg',
        description1: 'Non-ferrous forgings offering excellent thermal and electrical conductivity.',
        description2: 'We forge copper and brass alloys for electrical switchgear, heat exchangers, and specialized marine hardware. Forged copper offers a much denser, porosity-free structure than cast copper, dramatically improving conductivity.',
        features: [
            { icon: 'fa-bolt', title: 'High Conductivity', desc: 'Dense grain structure maximizes electrical and thermal transfer.' },
            { icon: 'fa-magnet', title: 'Non-Magnetic & Non-Sparking', desc: 'Crucial for volatile environments and electrical systems.' }
        ],
        processes: [
            { title: 'Warm Forging', desc: 'Forged at much lower temperatures than steel.' },
            { title: 'Chemical Cleaning', desc: 'Removing oxidation to ensure a bright, conductive finish.' }
        ]
    },
    '/titanium-forging': {
        title: 'Titanium Forging',
        subtitle: 'Material Grades',
        image: './images/facility.jpg',
        description1: 'The ultimate strength-to-weight ratio for aerospace, medical, and high-performance racing applications.',
        description2: 'Titanium is highly reactive at forging temperatures. We employ specialized heating and forging techniques to produce titanium aircraft landing gear, engine mounts, and medical implants that are incredibly strong, light, and biocompatible.',
        features: [
            { icon: 'fa-feather', title: 'Ultra-Lightweight', desc: '45% lighter than steel with comparable tensile strength.' },
            { icon: 'fa-heartbeat', title: 'Biocompatible', desc: 'Perfect for medical and surgical implants.' }
        ],
        processes: [
            { title: 'Protective Coating', desc: 'Coating billets in glass or ceramic to prevent oxygen embrittlement during heating.' },
            { title: 'Isothermal Forging', desc: 'Using heated dies to prevent the titanium from chilling and cracking.' }
        ]
    }
};

Object.assign(window.pageContent, capabilitiesData);
