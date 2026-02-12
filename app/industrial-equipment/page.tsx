'use client';

import { useState } from 'react';
import Header from '@/components/Header';
import Image from 'next/image';
import { ArrowRight } from 'lucide-react';
import Footer from '@/components/Footer';
import SectionCTA from '@/components/Contact';
import ContactModal from '@/components/ContactModal';
import ProductCard from '@/components/ProductCard';

// Product data for different categories
const products = {
  'Centrifugal Pumps': {
    image: '/pump valves/ea91bed8299dfd4f33e4948e0eb8065fe53d25a4.png',
    name: 'SPX FLOW CombiNorm Centrifugal Pumps',
    description: 'Horizontal centrifugal pumps designed to EN 733 (DIN 24255) standards, suitable for handling low-viscosity, clean or slightly contaminated liquids in various industrial applications.',
    uses: [
      'Water circulation systems',
      'Chemical transfer applications',
      'Coolant systems in manufacturing plants',
      'Process water handling'
    ],
    tags: 'SPX FLOW, Centrifugal Pumps, Industrial Pumps, Fluid Transfer',
    industries: 'Mining, Cement, Sugar Processing, Manufacturing, Water Treatment'
  },
  'Ball Valves': {
    image: '/pump valves/cbd2aaec0e03edf953ed06735242d6d60c40f094.png',
    name: 'Nova Stainless Steel Ball Valves',
    description: 'High-quality industrial ball valves manufactured from stainless steel and cast iron, engineered for reliable shut-off and control in demanding industrial environments.',
    uses: [
      'Process control systems',
      'Fluid isolation applications',
      'Chemical handling systems',
      'Pipeline distribution networks'
    ],
    tags: 'Nova Valves, Ball Valves, Stainless Steel, Process Control',
    industries: 'Mining, Chemical Processing, Water Treatment, Manufacturing'
  },
  'Diaphragm Pumps': {
    image: '/pump valves/24a138b6cb99fc94b627640dd6c9c962a702ac52.png',
    name: 'SPX FLOW Diaphragm Pumps (AODD)',
    description: 'Air-operated double diaphragm pumps specifically designed for handling viscous fluids, slurries, and abrasive materials in tough industrial conditions.',
    uses: [
      'Slurry transfer in mining operations',
      'Abrasive material handling',
      'Chemical dosing applications',
      'Wastewater treatment processes'
    ],
    tags: 'SPX FLOW, Diaphragm Pumps, AODD, Abrasive Handling',
    industries: 'Mining, Chemical, Wastewater Treatment, Food Processing'
  },
  'Check Valves': {
    image: '/pump valves/38746ac0a59599ee79f0b26e220c26eeae91f407.jpg',
    name: 'Nova Check Valves & Non-Return Valves',
    description: 'Non-return valves designed to prevent backflow in piping systems, available in various materials to ensure compatibility with different fluids and operating conditions.',
    uses: [
      'Pump protection systems',
      'Pipeline backflow prevention',
      'Fluid control applications',
      'Safety systems in processing plants'
    ],
    tags: 'Nova Valves, Check Valves, Non-return Valves, Pipeline Safety',
    industries: 'Water Treatment, Mining, General Manufacturing, Chemical Plants'
  },
  'Control Valves': {
    image: '/pump valves/648110be263b8c0584aed1834ea5a08d85f08459.png',
    name: 'Nova Needle Valves',
    description: 'Precision needle valves for accurate flow control in instrumentation and process applications, featuring fine threading for precise adjustment.',
    uses: [
      'Instrumentation systems',
      'Precision flow control',
      'Sampling applications',
      'Pressure regulation'
    ],
    tags: 'Nova Valves, Needle Valves, Flow Control, Precision Instruments',
    industries: 'Oil & Gas, Chemical Processing, Power Generation'
  },
  'Process Equipment': {
    image: '/pump valves/fe5ca0868dfd03b5410bb75eb2f933f82114701b.jpg',
    name: 'SPX FLOW Anhydro Spray Dryers',
    description: 'Advanced spray drying systems for food, chemical and pharmaceutical industries, designed to produce dust-free, agglomerated, dispersible and free-flowing powders.',
    uses: [
      'Powder production in food industry',
      'Chemical drying processes',
      'Pharmaceutical manufacturing',
      'Dairy and beverage processing'
    ],
    tags: 'SPX FLOW, Spray Dryers, Food Processing, Chemical Industry',
    industries: 'Food & Beverage, Pharmaceuticals, Chemical Manufacturing'
  }
};

const categories = Object.keys(products);

// Bradken Wear Solutions product data
const bradkenProducts = {
  'Mill Liners': {
    image: '/industrial/bradken%20wear/Rectangle%2056.png',
    name: 'Bradken Mill Liners',
    description: 'Custom liners for SAG, Ball, and Rod mills. Includes lifter bars and shell plates to protect the mill and optimize grinding.',
    uses: [
      'Mill shell protection',
      'Grinding optimization',
      'Scheduled maintenance',
      'Plant throughput'
    ],
    tags: 'Bradken, Mill Liners, Grinding Mill Parts, Mineral Processing',
    industries: 'Mining, Mineral Processing, Cement'
  },
  'Ground Engaging Tools': {
    image: '/industrial/bradken%20wear/Rectangle%2056-1.png',
    name: 'Ground Engaging Tools (GET)',
    description: 'Wear systems for excavators and loaders. Includes bucket lips, teeth, adapters, and wear plates for extreme conditions.',
    uses: [
      'Bucket protection',
      'Digging efficiency',
      'Reduced maintenance',
      'Improved safety'
    ],
    tags: 'Bradken, Ground Engaging Tools, GET, Excavator Parts',
    industries: 'Mining, Quarry, Earthmoving, Construction'
  },
  'Fixed Plant Wear Solutions': {
    image: '/industrial/bradken%20wear/Rectangle%2056-2.png',
    name: 'Fixed Plant Wear Solutions',
    description: 'Wear components for processing plants. Includes chute liners, feeder pans, and crusher parts to minimize maintenance downtime.',
    uses: [
      'Protecting transfer points',
      'Material handling systems',
      'Reducing downtime',
      'Extending plant life'
    ],
    tags: 'Bradken, Fixed Plant, Wear Liners, Material Handling',
    industries: 'Mining, Mineral Processing, Aggregate, Cement'
  }
};

const bradkenCategories = Object.keys(bradkenProducts);

// Crushing & Screening Solutions product data
const crushingProducts = {
  'Jaw Crushers': {
    image: '/industrial/Crushing%20%26%20Screening%20Solutions/Rectangle%2056.png',
    name: 'CE Africa Jaw Crushers',
    description: 'Heavy-duty primary jaw crushers designed for tough African mining conditions, delivering high capacity and reliable performance in primary crushing applications.',
    uses: [
      'Primary ore crushing in mining operations',
      'Quarry primary reduction',
      'Large aggregate production',
      'Demolition and recycling'
    ],
    tags: 'CE Africa, Jaw Crushers, Primary Crushing, Mining Equipment',
    industries: 'Mining, Quarry, Construction, Recycling'
  },
  'Single Cylinder Cone Crushers': {
    image: '/industrial/Crushing%20%26%20Screening%20Solutions/Rectangle%2056-1.png',
    name: 'CE Africa Single Cylinder Cone Crushers',
    description: 'Reliable single cylinder hydraulic cone crushers for secondary crushing applications, featuring simplified hydraulic systems and consistent performance in medium-duty operations.',
    uses: [
      'Secondary crushing in aggregate production',
      'Mid-size mining operation reduction circuits',
      'Construction material processing plants',
      'Road base material production'
    ],
    tags: 'CE Africa, Cone Crushers, Hydraulic Systems, Secondary Crushing, Aggregate',
    industries: 'Quarry, Aggregate Production, Mid-Scale Mining, Construction'
  },
  'Multiple Cylinder Cone Crushers': {
    image: '/industrial/Crushing%20%26%20Screening%20Solutions/Rectangle%2056-2.png',
    name: 'CE Africa Multiple Cylinder Cone Crushers',
    description: 'Advanced multiple cylinder hydraulic cone crushers for fine and tertiary crushing, delivering precise product sizing and superior particle shape for quality aggregate production.',
    uses: [
      'Tertiary and fine crushing applications',
      'High-quality cubical aggregate production',
      'Manufactured sand production systems',
      'Precision mineral processing circuits'
    ],
    tags: 'CE Africa, Fine Crushing, Multiple Cylinder, Cubical Aggregate, Precision, Sizing',
    industries: 'High-Quality Aggregate, Concrete Production, Precision Mining'
  },
  'Vertical Shaft Impact Crushers': {
    image: '/industrial/Crushing%20%26%20Screening%20Solutions/Rectangle%2056-3.png',
    name: 'CE Africa Vertical Shaft Impact Crushers',
    description: 'Vertical shaft impact crushers engineered to produce premium cubical aggregates for concrete and asphalt applications, ensuring optimal particle shape and gradation.',
    uses: [
      'Manufactured sand production for concrete',
      'Cubical aggregate shaping for asphalt',
      'High-quality road construction materials',
      'Fine material production and shaping'
    ],
    tags: 'CE Africa, VSI Crushers, Aggregate Shaping, Sand Production',
    industries: 'Construction, Road Building, Concrete Production, Asphalt Plants'
  },
  'Impact Crushers': {
    image: '/industrial/Crushing%20%26%20Screening%20Solutions/Rectangle%2056-4.png',
    name: 'CE Africa Impact Crushers',
    description: 'Horizontal impact crushers providing versatile crushing capabilities for various materials including limestone, recycled concrete, and medium-hard rock applications.',
    uses: [
      'Limestone and sedimentary rock processing',
      'Concrete and asphalt recycling operations',
      'General-purpose aggregate production',
      'Industrial mineral processing applications'
    ],
    tags: 'CE Africa, Impact Crushers, Versatile Crushing, Recycling, Limestone Processing',
    industries: 'Quarry, Recycling Facilities, Construction, Industrial Minerals'
  },
  'Gyratory Crushers': {
    image: '/industrial/Crushing%20%26%20Screening%20Solutions/Rectangle%2056-5.png',
    name: 'CE Africa Gyratory Crushers',
    description: 'Large-capacity gyratory crushers designed for high-tonnage primary crushing in major mining operations, offering superior efficiency and continuous operation capabilities.',
    uses: [
      'Large-scale primary ore reduction in mines',
      'High-volume aggregate production plants',
      'Copper and gold mining primary circuits',
      'Major mineral processing plant feed preparation'
    ],
    tags: 'CE Africa, Gyratory Crushers, High-Capacity, Mining, Primary Reduction',
    industries: 'Large-Scale Mining, Mineral Processing, Major Quarry Operations'
  },
  'Vibrating Screens': {
    image: '/industrial/Crushing%20%26%20Screening%20Solutions/Rectangle%2056-6.png',
    name: 'CE Africa Vibrating Screens',
    description: 'High-performance vibrating screens for precise material sizing, classification, and separation in crushing circuits, ensuring optimal product quality and circuit efficiency.',
    uses: [
      'Material sizing and product classification',
      'Crushing circuit efficiency optimization',
      'Product quality control and grading',
      'Process plant screening and separation'
    ],
    tags: 'CE Africa, Vibrating Screens, Material Separation, Screening, Classification',
    industries: 'Mining, Aggregate Processing, Mineral Beneficiation, Recycling'
  },
  'Vibrating Grizzly Feeders': {
    image: '/industrial/Crushing%20%26%20Screening%20Solutions/Rectangle%2056-7.png',
    name: 'CE Africa Vibrating Grizzly Feeders',
    description: 'Heavy-duty vibrating grizzly feeders providing controlled material feed to primary crushers while removing fines and protecting equipment from damage and overload.',
    uses: [
      'Controlled feeding to primary crushers',
      'Oversize material screening before crushing',
      'Crusher protection from tramp metal',
      'Process optimization through regulated feed'
    ],
    tags: 'CE Africa, Grizzly Feeders, Material Feeding, Crusher Protection',
    industries: 'Mining, Heavy-Duty Quarry, Bulk Material Handling, Mineral Processing'
  },
  'High Seam Feeder Breakers': {
    image: '/industrial/Crushing%20%26%20Screening%20Solutions/Rectangle%2056-8.png',
    name: 'CE Africa High Seam Feeder Breakers',
    description: 'Heavy-duty high seam feeder breakers specifically designed for underground mining applications, providing primary reduction and controlled material handling in confined spaces.',
    uses: [
      'Underground mining primary reduction',
      'Controlled material handling in mines',
      'Coal and soft rock mining operations',
      'Underground conveyor loading systems'
    ],
    tags: 'CE Africa, Feeder Breakers, Underground Mining, Primary Reduction',
    industries: 'Underground Mining, Coal Mining, Tunneling'
  }
};

const crushingCategories = Object.keys(crushingProducts);

// Spare Wear Parts product data
const spareWearProducts = {
  'Mantles & Concaves': {
    image: '/industrial/Spare%20Wear%20Parts/Rectangle%2056.png',
    name: 'Mantles & Concaves',
    description: 'Precision wear parts for cone crushers. The mantle and concave work together to crush material and control product size in secondary and tertiary crushing stages.',
    uses: [
      'Cone crusher chamber protection and performance',
      'Precise control of final aggregate or mineral size',
      'Scheduled maintenance and wear part replacement',
      'Optimizing crushing circuit efficiency'
    ],
    tags: 'Mantles, Concaves, Cone Crusher Parts, Wear Components, CE Africa',
    industries: 'Mining, Mineral Processing, Aggregate Production'
  },
  'Large Bronze Bushing': {
    image: '/industrial/Spare%20Wear%20Parts/Rectangle%2056-1.png',
    name: 'Large Bronze Bushing',
    description: 'A critical mechanical component, typically a large bronze bushing, that supports the main shaft in a cone or gyratory crusher, ensuring smooth rotation and alignment.',
    uses: [
      'Supporting the main shaft in gyratory and cone crushers',
      'Preventing metal-on-metal wear and friction',
      'Essential for major crusher overhauls and rebuilds',
      'Reducing vibration and ensuring stable operation'
    ],
    tags: 'Bronze Bushing, Crusher Bushing, Mechanical Spares, Crusher Shaft Support, CE Africa',
    industries: 'Mining, Heavy Quarry, Mineral Processing'
  },
  'Ball Mill Liners': {
    image: '/industrial/Spare%20Wear%20Parts/Rectangle%2056-2.png',
    name: 'Ball Mill Liners',
    description: 'Protective liners installed inside a ball mill. They shield the mill shell from wear caused by grinding media and ore, and can influence grinding efficiency.',
    uses: [
      'Protecting the ball mill shell from abrasion and impact',
      'Lifting grinding media for effective ore grinding',
      'Replacing worn liners during scheduled mill maintenance',
      'Optimizing grinding performance and liner life'
    ],
    tags: 'Ball Mill Liners, Grinding Mill Parts, Mill Liners, Abrasion Protection, CE Africa',
    industries: 'Mining, Mineral Processing, Cement Production'
  }
};

const spareWearCategories = Object.keys(spareWearProducts);

const mixerSolutions = [
  {
    key: 'Low Solidity Hydrofoil Impellers',
    title: 'Low Solidity Hydrofoil Impellers',
    description:
      'High-efficiency axial impellers for low-power blending and gentle solids suspension. Maximize flow while minimizing energy use and shear.',
    uses: [
      'Efficient liquid blending',
      'Gentle solids suspension',
      'Large tank mixing',
      'Low-shear applications',
    ],
    tags: 'SPX FLOW, Hydrofoil Impeller, Axial Flow, Low Power, High Efficiency',
    industries: 'Chemical, Water Treatment, Mining, Food & Beverage',
    image: '/industrial/66df1c08856bf91f22a8148a4f525cd1f5280dc7.png',
  },
  {
    key: 'High Viscosity/Non-Newtonian Mixers',
    title: 'High Viscosity & Non-Newtonian Mixers',
    description:
      'Heavy-duty mixers designed to handle high-viscosity fluids with strong torque and robust drive systems.',
    uses: [
      'Mixing pastes and slurries',
      'Blending food process',
      'Processing non-Newtonian fluids',
      'High-torque applications',
    ],
    tags: 'SPX FLOW, High Viscosity Mixing, Non-Newtonian',
    industries: 'Paints & Coatings, Food, Cosmetics, Mining, Plastics',
    image: '/industrial/a8b70a310a31a48a2aec73fade3b55e613d2bb29%20(1).png',
  },
  {
    key: 'High-Shear & Dispersion Mixers',
    title: 'High-Shear & Dispersion Mixers',
    description:
      'High-energy mixers for rapid dispersion and emulsification to achieve consistent mixtures.',
    uses: [
      'Creating emulsions',
      'Dispersing pigments',
      'Cell disruption',
      'Rapid mixing/homogenization',
    ],
    tags: 'SPX FLOW, High Shear Mixer, Dispersion',
    industries: 'Pharma & Cosmetics, Chemicals, Specialty',
    image: '/industrial/18ac7cbf993b2185719703d8e7886e2fdda1434e.png',
  },
  {
    key: 'Top Entry Mixer Drives',
    title: 'Top Entry Mixer Drives & Assemblies',
    description:
      'Robust drive systems and complete assemblies for top-mounted industrial mixers.',
    uses: [
      'Powering large-scale agitators',
      'Driving retrofit upgrades',
      'High-pressure/temperature reactors',
      'Critical chemical processes',
    ],
    tags: 'SPX FLOW, Mixer Drives, Top Entry',
    industries: 'Chemical, Pharmaceutical, Mining & Metals, Oil & Gas',
    image: '/industrial/68a2022f6c5b545b263bb5ac7588c1459f5252d4.png',
  },
];

// Grinding Media product data
const grindingMediaProducts = {
  'Forged Steel Balls': {
    image: '/pump valves/forged steel.png',
    name: 'Huamin Forged Steel Grinding Balls',
    description: 'High-chrome forged steel balls with superior wear resistance and impact toughness, manufactured through rotary rolling technology for consistent hardness.',
    uses: [
      'Ball mill operations in mining',
      'Cement plant grinding circuits',
      'Mineral processing plants',
      'Ore grinding applications'
    ],
    tags: 'Shandong Huamin, Forged Balls, High-Chrome, Mining',
    industries: 'Mining, Cement, Mineral Processing'
  },
  'Cast Steel Balls': {
    image: '/pump valves/high chrome.jpg',
    name: 'Huamin Cast Steel Grinding Balls',
    description: 'Cost-effective cast steel balls with reliable performance for general grinding applications, offering balanced wear resistance and competitive pricing.',
    uses: [
      'General purpose grinding',
      'Secondary grinding circuits',
      'Budget-conscious operations',
      'Non-abrasive material grinding'
    ],
    tags: 'Shandong Huamin, Cast Balls, Economy, General Purpose',
    industries: 'Mining, Cement, Industrial Minerals'
  },
  'Grinding Rods': {
    image: '/pump valves/grinding rods.jpg',
    name: 'Huamin Grinding Rods',
    description: 'High-quality steel rods designed for rod mill applications, providing selective grinding of coarse materials with minimal over-grinding.',
    uses: [
      'Rod mill operations',
      'Coarse grinding circuits',
      'First-stage grinding',
      'Size reduction applications'
    ],
    tags: 'Shandong Huamin, Grinding Rods, Rod Mills, Coarse Grinding',
    industries: 'Mining, Cement, Aggregate'
  },
  'High-Chrome': {
    image: '/pump valves/high chrome.jpg',
    name: 'High-Chrome Alloy Grinding Balls',
    description: 'Premium grinding balls with 10-18% chrome content for extreme wear resistance in abrasive ore processing, reducing consumption rates by 30-50%.',
    uses: [
      'Hard and abrasive ores',
      'High-wear applications',
      'Long-lasting grinding solutions',
      'Cost-intensive operations'
    ],
    tags: 'High-Chrome, Abrasive Resistance, Premium Quality',
    industries: 'Gold Mining, Copper Mining, Iron Ore'
  },
  'Low-Chrome': {
    image: '/pump valves/low-chrome.jpg',
    name: 'Low-Chrome Economy Grinding Balls',
    description: 'Budget-friendly grinding balls with 2-5% chrome content for less abrasive materials, offering excellent value for money in standard grinding applications.',
    uses: [
      'Soft ore processing',
      'Non-abrasive materials',
      'Cost-sensitive operations',
      'General mineral grinding'
    ],
    tags: 'Low-Chrome, Economy, Value Solution',
    industries: 'Industrial Minerals, Coal, Soft Rock Mining'
  },
  'Medium-Chrome': {
    image: '/pump valves/medium chrome.png',
    name: 'Medium-Chrome Grinding Balls',
    description: 'Balanced performance grinding balls with 5-8% chrome content, offering optimal wear resistance for medium abrasive materials at competitive pricing.',
    uses: [
      'Medium hardness ores',
      'Balanced cost-performance',
      'Versatile grinding applications',
      'Mixed material processing'
    ],
    tags: 'Medium-Chrome, Balanced Performance, Versatile',
    industries: 'General Mining, Cement, Aggregate'
  }
};

const grindingMediaCategories = Object.keys(grindingMediaProducts);

// Conveyor Systems product data
const conveyorProducts = {
  'Steel Cord Belts': {
    image: '/pump valves/steel cord.png',
    name: 'SIG Steel Cord Conveyor Belts',
    description: 'Ultra-strong steel cord belts designed for long-distance, heavy-load transportation with exceptional tensile strength and impact resistance.',
    uses: [
      'Long-distance material transport',
      'Heavy-load mining operations',
      'High-capacity cement plants',
      'Bulk material handling systems'
    ],
    tags: 'SIG Italia, Steel Cord, Heavy-Duty, Mining',
    industries: 'Mining, Cement, Quarry, Port Operations'
  },
  'Fabric Ply Belts': {
    image: '/pump valves/fabric ply.png',
    name: 'SIG Multi-ply Fabric Belts',
    description: 'Durable multi-ply rubber belts with fabric reinforcement for general purpose conveying applications across various industries.',
    uses: [
      'General material handling',
      'Medium-duty applications',
      'Processing plants',
      'Manufacturing facilities'
    ],
    tags: 'SIG Italia, Fabric Ply, Multi-purpose, Industrial',
    industries: 'Manufacturing, Agriculture, Food Processing'
  },
  'Elevator Belts': {
    image: '/pump valves/elevator belt.jpg',
    name: 'SIG Elevator Belts',
    description: 'Specialized belts designed for vertical material transport with cleats and buckets for efficient elevation of bulk materials.',
    uses: [
      'Vertical material transport',
      'Grain and seed handling',
      'Powder elevation systems',
      'Bulk loading applications'
    ],
    tags: 'SIG Italia, Elevator Belts, Vertical Transport, Cleated',
    industries: 'Agriculture, Mining, Food Processing'
  },
  'Heat Resistant': {
    image: '/pump valves/heat.png',
    name: 'Heat Resistant Conveyor Belts',
    description: 'Specially formulated rubber belts designed to withstand high temperatures up to 400°F (200°C) without degradation.',
    uses: [
      'Hot cement clinker transport',
      'Foundry applications',
      'Chemical processing',
      'Asphalt and aggregate handling'
    ],
    tags: 'Heat Resistant, High-Temperature, Durable',
    industries: 'Cement, Steel, Chemical Processing'
  },
  'Oil Resistant': {
    image: '/pump valves/oil.jpg',
    name: 'Oil Resistant Conveyor Belts',
    description: 'Belts with oil-resistant rubber compounds that maintain integrity and performance in environments with oil and grease exposure.',
    uses: [
      'Automotive Industry',
      'Machinery manufacturing',
      'Food processing with oils',
      'Lubricated environments'
    ],
    tags: 'Oil Resistant, Chemical Resistant, Industrial',
    industries: 'Automotive, Manufacturing, Food Processing'
  },
  'Fire Resistant': {
    image: '/pump valves/fire.jpg',
    name: 'Fire Resistant Conveyor Belts',
    description: 'Self-extinguishing belts with fire-resistant properties for enhanced safety in mining and high-risk environments.',
    uses: [
      'Underground mining',
      'Coal handling operations',
      'High-risk industrial areas',
      'Safety-critical applications'
    ],
    tags: 'Fire Resistant, Safety Rated, Mining Grade',
    industries: 'Mining, Power Plants, Chemical'
  }
};

const conveyorCategories = Object.keys(conveyorProducts);

// Boilers, Burners & Spares product data
const boilerProducts = {
  'Industrial Boilers': {
    image: '/pump valves/industry.png',
    name: 'Airatherm Industrial Boilers',
    description: 'High-capacity industrial boilers designed for heavy-duty manufacturing and processing applications with exceptional efficiency and reliability.',
    uses: [
      'Manufacturing facilities',
      'Processing plants',
      'Large-scale heating systems',
      'Industrial steam generation'
    ],
    tags: 'Airatherm, Industrial Boilers, High-Capacity, Steam Generation',
    industries: 'Manufacturing, Chemical Processing, Food & Beverage, Textiles'
  },
  'Commercial Boilers': {
    image: '/pump valves/commercial.png',
    name: 'Airatherm Commercial Boilers',
    description: 'Compact and efficient commercial boilers suitable for hotels, hospitals, and commercial buildings with space-saving design and low emissions.',
    uses: [
      'Commercial buildings',
      'Hospitality facilities',
      'Healthcare institutions',
      'Office complexes'
    ],
    tags: 'Airatherm, Commercial Boilers, Compact, Low Emissions',
    industries: 'Hospitality, Healthcare, Commercial Real Estate'
  },
  'Boiler Spares': {
    image: '/pump valves/spare.png',
    name: 'Boiler Tubes & Pipes',
    description: 'Genuine boiler tubes, pipes, and replacement parts manufactured to exact specifications for optimal performance and longevity.',
    uses: [
      'Boiler maintenance',
      'System upgrades',
      'Component replacement',
      'Performance optimization'
    ],
    tags: 'Boiler Spares, Tubes, Pipes, Replacement Parts',
    industries: 'All industries using boiler systems'
  },
  'Water Treatment Systems': {
    image: '/pump valves/water.png',
    name: 'Water Treatment Systems',
    description: 'Integrated water treatment solutions to prevent scaling, corrosion, and efficiency loss in boiler systems.',
    uses: [
      'Water quality management',
      'Scale prevention',
      'Corrosion control',
      'System efficiency maintenance'
    ],
    tags: 'Water Treatment, Efficiency, Maintenance, Corrosion Control',
    industries: 'All industries using boiler systems'
  },
  'Tanks & Vessels': {
    image: '/pump valves/tanks.png',
    name: 'Industrial Tanks & Vessels',
    description: 'Custom-built tanks, pressure vessels, and storage systems designed for specific industrial applications and capacity requirements.',
    uses: [
      'Liquid storage solutions',
      'Pressure vessel applications',
      'Custom storage needs',
      'Industrial containment systems'
    ],
    tags: 'Industrial Tanks, Pressure Vessels, Custom Storage',
    industries: 'Chemical, Manufacturing, Water Treatment'
  },
  'Combustion Systems': {
    image: '/industrial/combustion.png',
    name: 'Combustion Systems',
    description: 'High-efficiency Ecoflam industrial burners and combustion systems designed for optimal fuel performance, reduced emissions, and reliable heating in demanding applications.',
    uses: [
      'Industrial boiler combustion optimization',
      'Process heating system upgrades',
      'Fuel efficiency improvement',
      'Emission reduction compliance'
    ],
    tags: 'Ecoflam, Burners, Combustion Systems, Fuel Efficiency, Heating',
    industries: 'Cement Plants, Sugar Factories, Manufacturing, Food Processing, Commercial Heating'
  }
};

const boilerCategories = Object.keys(boilerProducts);

// Ecoflam Industrial Burners product data
const ecoflamProducts = {
  'ECOFLAM DB Series (Duoblock)': {
    image: '/industrial/ecoflom/Rectangle%2056.png',
    name: 'ECOFLAM DB Series (Duoblock)',
    description: 'High-capacity industrial burners designed for boilers and furnaces. Capable of burning two types of fuel (Duoblock) - light oil and heavy oil - featuring advanced combustion air and control technology.',
    uses: [
      'Firing in large industrial boilers and furnaces',
      'Industrial process heating and steam generation',
      'Mineral and salt processing plants',
      'Power and co-generation plants'
    ],
    tags: 'Ecoflam, DB Series, Duoblock Burner, Dual Fuel, Industrial Boiler, High Capacity',
    industries: 'Chemical Processing, Power Generation, Mining & Minerals'
  },
  'ECOFLAM DBL Series': {
    image: '/industrial/ecoflom/Rectangle%2056-1.png',
    name: 'ECOFLAM DBL Series',
    description: 'Specialized burners engineered for efficient Heavy Fuel Oil (HFO) combustion. Built for demanding environments with the capability to handle high-viscosity fuels reliably.',
    uses: [
      'Heavy fuel oil combustion in production plants',
      'Industrial waste incineration furnaces',
      'High-temperature thermal processes',
      'Heating systems in cement and lime plants'
    ],
    tags: 'Ecoflam, DBL Series, Heavy Fuel Oil Burner, High Viscosity, Industrial Furnace',
    industries: 'Cement & Lime, Metallurgy, Waste-to-Energy, Thermal Processing'
  },
  'ECOFLAM MB Series': {
    image: '/industrial/ecoflom/Rectangle%2056-2.png',
    name: 'ECOFLAM MB Series',
    description: 'High-efficiency gas burners offering precise control and clean combustion. Ideal for various industrial applications where combustion cleanliness and temperature accuracy are critical.',
    uses: [
      'Gas firing in food & beverage processing plants',
      'Drying and curing ovens in manufacturing',
      'Firing in industrial drying beds and kilns',
      'Space heating for large industrial buildings'
    ],
    tags: 'Ecoflam, MB Series, Gas Burner, High Efficiency, Clean Combustion',
    industries: 'Food & Beverage, Textile, Ceramics & Glass, General Processing'
  },
  'ECOFLAM K Series': {
    image: '/industrial/ecoflom/Rectangle%2056-3.png',
    name: 'K Series - Light Oil Burners',
    description: 'Robust and reliable burners for Light Oil (like diesel). Features a simple, durable design with good efficiency for standard to medium-duty industrial applications.',
    uses: [
      'Heating boilers for medium-sized industries',
      'Drying ovens in manufacturing processes',
      'Firing in smaller industrial kilns and dryers',
      'Plastic molding and machine heating'
    ],
    tags: 'Ecoflam, K Series, Light Oil Burner, Diesel Burner, Medium Capacity, Robust',
    industries: 'Small & Medium Enterprises (SMEs), Plastics, Manufacturing'
  }
};

const ecoflamCategories = Object.keys(ecoflamProducts);

// Safety & Maintenance Equipment product data
const safetyProducts = {
  'PPE': {
    image: '/pump valves/ppe.png',
    name: 'Personal Protective Equipment (PPE)',
    description: 'Full range of personal protective equipment including helmets, safety glasses, gloves, and protective clothing for industrial environments.',
    uses: [
      'Worker safety in mining sites',
      'Chemical plant protection',
      'Manufacturing safety compliance',
      'Construction site safety'
    ],
    tags: 'PPE, Safety Gear, Protective Equipment, Compliance',
    industries: 'Mining, Manufacturing, Construction, Chemical'
  },
  'Hand Tools': {
    image: '/pump valves/hand.png',
    name: 'Industrial Hand Tools',
    description: 'High-quality wrenches, screwdrivers, pliers, and specialized tools for equipment maintenance and repair tasks.',
    uses: [
      'Equipment maintenance',
      'Repair operations',
      'Installation tasks',
      'Preventive maintenance'
    ],
    tags: 'Hand Tools, Maintenance, Repair, Professional Grade',
    industries: 'All industrial sectors'
  },
  'First Aid': {
    image: '/pump valves/aid.png',
    name: 'Industrial First Aid Kits',
    description: 'OSHA-compliant first aid kits with supplies for treating industrial injuries and medical emergencies.',
    uses: [
      'Emergency medical response',
      'Workplace injury treatment',
      'First aid compliance',
      'Emergency preparedness'
    ],
    tags: 'First Aid, Medical Supplies, Emergency Response, Compliance',
    industries: 'Mining, Manufacturing, Construction'
  },
  'Fire Safety': {
    image: '/pump valves/fire-safety.png',
    name: 'Fire Safety Equipment',
    description: 'Fire extinguishers, blankets, alarms, and suppression systems for industrial fire protection.',
    uses: [
      'Fire prevention and control',
      'Emergency fire response',
      'Regulatory compliance',
      'Workplace safety'
    ],
    tags: 'Fire Safety, Extinguishers, Emergency Equipment, Compliance',
    industries: 'All industrial sectors'
  },
  'Maintenance Kit': {
    image: '/pump valves/maintenance.png',
    name: 'Maintenance & Repair Kits',
    description: 'Complete kits for specific equipment maintenance including seals, gaskets, and replacement parts.',
    uses: [
      'Preventive maintenance programs',
      'Equipment-specific repairs',
      'Quick response maintenance',
      'Reduced downtime'
    ],
    tags: 'Maintenance Kits, Repair Parts, Preventive Maintenance',
    industries: 'Mining, Manufacturing, Processing'
  },
  'Testing Equipment': {
    image: '/pump valves/testing.png',
    name: 'Testing & Measurement Equipment',
    description: 'Digital multimeters, pressure gauges, temperature sensors, and vibration analyzers for equipment monitoring.',
    uses: [
      'Equipment performance testing',
      'Preventive maintenance checks',
      'Quality control',
      'Troubleshooting and diagnostics'
    ],
    tags: 'Testing Equipment, Measurement, Diagnostics, Monitoring',
    industries: 'All industrial sectors'
  }
};

const safetyCategories = Object.keys(safetyProducts);

// Mechanical Components product data
const mechanicalProducts = {
  'Bearings': {
    image: '/pump valves/bearing.png',
    name: 'Industrial Bearings',
    description: 'Comprehensive range of ball bearings, roller bearings, and sleeve bearings for all industrial applications and equipment types.',
    uses: [
      'Rotating equipment support',
      'Machinery motion control',
      'Load distribution systems',
      'Precision applications'
    ],
    tags: 'Bearings, SKF, NSK, FAG, Precision, Rotation',
    industries: 'Mining, Manufacturing, Automotive, Processing'
  },
  'Seals & Gaskets': {
    image: '/pump valves/seal.png',
    name: 'Mechanical Seals & Gaskets',
    description: 'High-quality shaft seals, O-rings, gaskets, and packing materials for leak prevention and fluid containment.',
    uses: [
      'Pump and compressor sealing',
      'Fluid system containment',
      'Pressure maintenance',
      'Contamination prevention'
    ],
    tags: 'Seals, Gaskets, O-rings, Fluid Containment, Leak Prevention',
    industries: 'Chemical, Mining, Water Treatment, Manufacturing'
  },
  'Couplings': {
    image: '/pump valves/coup.png',
    name: 'Power Transmission Couplings',
    description: 'Flexible couplings, gear couplings, and universal joints for efficient power transmission between machinery components.',
    uses: [
      'Motor to pump connections',
      'Drive system linkages',
      'Vibration damping',
      'Misalignment compensation'
    ],
    tags: 'Couplings, Power Transmission, Flexible, Gear Couplings',
    industries: 'Manufacturing, Mining, Power Generation'
  },
  'Gears': {
    image: '/pump valves/gear.png',
    name: 'Gear Systems & Components',
    description: 'Spur gears, helical gears, worm gears, and complete gearbox assemblies for power transmission and speed control.',
    uses: [
      'Speed reduction/increase',
      'Torque multiplication',
      'Power transmission',
      'Motion control'
    ],
    tags: 'Gears, Gearboxes, Power Transmission, Speed Control',
    industries: 'Manufacturing, Mining, Automotive, Processing'
  },
  'Shafts': {
    image: '/pump valves/shaft.png',
    name: 'Shafts & Axles',
    description: 'Drive shafts, line shafts, and custom axles manufactured to precise specifications for industrial machinery.',
    uses: [
      'Power transmission',
      'Rotating component support',
      'Motion transfer',
      'Equipment drive systems'
    ],
    tags: 'Shafts, Axles, Drive Systems, Precision Machined',
    industries: 'All mechanical industries'
  },
  'Fasteners': {
    image: '/pump valves/fastner.png',
    name: 'Industrial Fasteners',
    description: 'High-strength bolts, nuts, washers, and specialized fasteners for critical industrial applications.',
    uses: [
      'Equipment assembly',
      'Structural connections',
      'Maintenance and repair',
      'Machinery installation'
    ],
    tags: 'Fasteners, Bolts, Nuts, High-Strength, Industrial Grade',
    industries: 'Construction, Manufacturing, Mining, Infrastructure'
  },
  'Transmission Parts': {
    image: '/pump valves/part.png',
    name: 'Transmission Components',
    description: 'V-belts, timing belts, chains, sprockets, and other power transmission components for industrial drives.',
    uses: [
      'Power transmission systems',
      'Conveyor drives',
      'Machinery drives',
      'Speed variation systems'
    ],
    tags: 'Transmission, Belts, Chains, Sprockets, Drive Systems',
    industries: 'Manufacturing, Processing, Material Handling'
  }
};

const mechanicalCategories = Object.keys(mechanicalProducts);

export default function IndustrialEquipmentPage() {
  const [selectedCategory, setSelectedCategory] = useState('Centrifugal Pumps');
  const currentProduct = products[selectedCategory as keyof typeof products];

  const [selectedBradkenCategory, setSelectedBradkenCategory] = useState('Mill Liners');
  const currentBradkenProduct = bradkenProducts[selectedBradkenCategory as keyof typeof bradkenProducts];

  const [selectedCrushingCategory, setSelectedCrushingCategory] = useState('Jaw Crushers');
  const currentCrushingProduct = crushingProducts[selectedCrushingCategory as keyof typeof crushingProducts];

  const [selectedSpareWearCategory, setSelectedSpareWearCategory] = useState('Mantles & Concaves');
  const currentSpareWearProduct = spareWearProducts[selectedSpareWearCategory as keyof typeof spareWearProducts];

  const [selectedGrindingCategory, setSelectedGrindingCategory] = useState('Forged Steel Balls');
  const currentGrindingProduct = grindingMediaProducts[selectedGrindingCategory as keyof typeof grindingMediaProducts];
  
  const [selectedConveyorCategory, setSelectedConveyorCategory] = useState('Steel Cord Belts');
  const currentConveyorProduct = conveyorProducts[selectedConveyorCategory as keyof typeof conveyorProducts];
  
  const [selectedBoilerCategory, setSelectedBoilerCategory] = useState('Industrial Boilers');
  const currentBoilerProduct = boilerProducts[selectedBoilerCategory as keyof typeof boilerProducts];
  
  const [selectedEcoflamCategory, setSelectedEcoflamCategory] = useState('ECOFLAM DB Series (Duoblock)');
  const currentEcoflamProduct = ecoflamProducts[selectedEcoflamCategory as keyof typeof ecoflamProducts];
  
  const [selectedSafetyCategory, setSelectedSafetyCategory] = useState('PPE');
  const currentSafetyProduct = safetyProducts[selectedSafetyCategory as keyof typeof safetyProducts];
  
  const [selectedMechanicalCategory, setSelectedMechanicalCategory] = useState('Bearings');
  const currentMechanicalProduct = mechanicalProducts[selectedMechanicalCategory as keyof typeof mechanicalProducts];

  const [selectedMixer, setSelectedMixer] = useState('Low Solidity Hydrofoil Impellers');
  const currentMixer = mixerSolutions.find((mixer) => mixer.key === selectedMixer) || mixerSolutions[0];

  const [isContactModalOpen, setIsContactModalOpen] = useState(false);
  const [selectedProduct, setSelectedProduct] = useState('');

  const handleContactClick = (productName: string) => {
    setSelectedProduct(productName);
    setIsContactModalOpen(true);
  };

  return (
    <div className="min-h-screen bg-white">
      <Header />
      
      {/* Contact Modal */}
      <ContactModal 
        isOpen={isContactModalOpen}
        onClose={() => setIsContactModalOpen(false)}
      />
      
     {/* Hero Banner Section */}
      <section className="relative pb-12 sm:pb-16 md:pb-20 px-4 sm:px-6">
        <div className="relative overflow-hidden mx-auto w-full max-w-[1344px]">
          <div 
            className="relative overflow-hidden mx-auto"
            style={{
              width: '100%',
              height: 'auto',
              minHeight: '280px',
              aspectRatio: '1344/425',
              borderRadius: '20px',
            }}
          >
            <Image
              src="/images/a10f525d9bf51b24ab4dafddf505c89e9e179263.jpg"
              alt="Premium Industrial Equipment"
              fill
              className="object-cover"
              priority
              sizes="(max-width: 768px) 100vw, (max-width: 1200px) 90vw, 1344px"
            />
            <div 
              className="absolute inset-0"
              style={{ backgroundColor: '#00000080' }}
            ></div>

            <div className="absolute inset-0 flex flex-col justify-center items-center text-center px-4 sm:px-6 z-10">
              {/* Breadcrumb - Above title */}
              <div className="text-white text-sm sm:text-base mb-4 sm:mb-6 md:mb-8">
                <span className="opacity-80">Home</span>
                <ArrowRight className="w-4 h-4 inline mx-2" />
                <span className="text-red-600 font-semibold">Industrial Equipment</span>
              </div>
              
              <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-bold text-white mb-4 sm:mb-6 leading-tight">
                Premium Industrial Equipment
              </h1>
              <p className="text-white text-sm sm:text-base md:text-lg lg:text-xl max-w-3xl leading-relaxed opacity-90 px-4">
                Engineered for performance and backed by the world&apos;s leading technology partners, including Bradken, SPX FLOW, and SANY.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* SPX Flow Mixers & Agitators - First Section */}
      <section className="py-12 sm:py-16 md:py-20 bg-white px-4 sm:px-6">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-8">
            <div className="flex items-center justify-center gap-3 mb-4">
              <div className="h-1 w-12 bg-red-600"></div>
              <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-gray-900">SPX Flow Mixers &amp; Agitators</h2>
            </div>
            <p className="text-base sm:text-lg text-gray-700 mt-4 px-2">
              Industrial <span className="text-red-600 font-semibold">mixing</span> and <span className="text-red-600 font-semibold">agitation</span> solutions for diverse process applications
            </p>
          </div>

          <div className="flex flex-wrap justify-center gap-3 sm:gap-4 mb-8 sm:mb-10 md:mb-12 px-2">
            {mixerSolutions.map((m) => (
              <button
                key={m.key}
                onClick={() => setSelectedMixer(m.key)}
                className={`px-4 sm:px-5 md:px-6 py-2 sm:py-2.5 md:py-3 rounded-full font-semibold text-xs sm:text-sm md:text-sm transition-all duration-300 whitespace-nowrap ${
                  m.key === selectedMixer ? 'bg-red-600 text-white shadow-lg' : 'bg-white text-gray-900 border-2 border-gray-300 hover:border-red-600 hover:text-red-600'
                }`}
              >
                {m.key}
              </button>
            ))}
          </div>

          <ProductCard product={currentMixer} showContactButton={false} compact />
        </div>
      </section>

      {/* Pumps & Valves Section */}
      <section className="py-12 sm:py-16 md:py-20 bg-white px-4 sm:px-6">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-8">
            <div className="flex items-center justify-center gap-3 mb-4">
              <div className="h-1 w-12 bg-red-600"></div>
              <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-gray-900">Pumps &amp; Valves</h2>
            </div>
            <p className="text-base sm:text-lg text-gray-700 mt-4 px-2">
              Comprehensive fluid handling <span className="text-red-600 font-semibold">solutions</span> for <span className="text-red-600 font-semibold">industrial</span> applications
            </p>
          </div>

          <div className="flex flex-wrap justify-center gap-3 sm:gap-4 mb-8 sm:mb-10 md:mb-12 px-2">
            {categories.map((category) => (
              <button
                key={category}
                onClick={() => setSelectedCategory(category)}
                className={`px-4 sm:px-5 md:px-6 py-2 sm:py-2.5 md:py-3 rounded-full font-semibold text-xs sm:text-sm md:text-sm transition-all duration-300 whitespace-nowrap ${
                  selectedCategory === category ? 'bg-red-600 text-white shadow-lg' : 'bg-white text-gray-900 border-2 border-gray-300 hover:border-red-600 hover:text-red-600'
                }`}
              >
                {category}
              </button>
            ))}
          </div>

          {currentProduct && <ProductCard product={currentProduct} showContactButton={false} />}
        </div>
      </section>

      {/* Bradken Wear Solutions Section */}
      <section className="py-12 sm:py-16 md:py-20 px-4 sm:px-6 bg-gray-50">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-8">
            <div className="flex items-center justify-center gap-3 mb-4">
              <div className="h-1 w-12 bg-red-600"></div>
              <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-gray-900">Bradken Wear Solutions</h2>
            </div>
            <p className="text-base sm:text-lg text-gray-700 mt-4 px-2">
              Engineered <span className="text-red-600 font-semibold">wear parts</span> for <span className="text-red-600 font-semibold">mining</span> and <span className="text-red-600 font-semibold">processing</span>
            </p>
          </div>

          <div className="flex flex-wrap justify-center gap-3 sm:gap-4 mb-8 sm:mb-10 md:mb-12 px-2">
            {bradkenCategories.map((category) => (
              <button
                key={category}
                onClick={() => setSelectedBradkenCategory(category)}
                className={`px-4 sm:px-5 md:px-6 py-2 sm:py-2.5 md:py-3 rounded-full font-semibold text-xs sm:text-sm md:text-sm transition-all duration-300 whitespace-nowrap ${
                  selectedBradkenCategory === category ? 'bg-red-600 text-white shadow-lg' : 'bg-white text-gray-900 border-2 border-gray-300 hover:border-red-600 hover:text-red-600'
                }`}
              >
                {category}
              </button>
            ))}
          </div>

          {currentBradkenProduct && <ProductCard product={currentBradkenProduct} showContactButton={false} compact />}
        </div>
      </section>

      {/* Crushing & Screening Solutions Section */}
      <section className="py-12 sm:py-16 md:py-20 px-4 sm:px-6 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-8">
            <div className="flex items-center justify-center gap-3 mb-4">
              <div className="h-1 w-12 bg-red-600"></div>
              <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-gray-900">Crushing &amp; Screening Solutions</h2>
            </div>
            <p className="text-base sm:text-lg text-gray-700 mt-4 px-2">
              Robust crushing equipment engineered for Africa&apos;s toughest <span className="text-red-600 font-semibold">mining operations</span>
            </p>
          </div>

          <div className="flex flex-wrap justify-center gap-3 sm:gap-4 mb-8 sm:mb-10 md:mb-12 px-2">
            {crushingCategories.map((category) => (
              <button
                key={category}
                onClick={() => setSelectedCrushingCategory(category)}
                className={`px-4 sm:px-5 md:px-6 py-2 sm:py-2.5 md:py-3 rounded-full font-semibold text-xs sm:text-sm md:text-sm transition-all duration-300 whitespace-nowrap ${
                  selectedCrushingCategory === category ? 'bg-red-600 text-white shadow-lg' : 'bg-white text-gray-900 border-2 border-gray-300 hover:border-red-600 hover:text-red-600'
                }`}
              >
                {category}
              </button>
            ))}
          </div>

          {currentCrushingProduct && <ProductCard product={currentCrushingProduct} showContactButton={false} compact />}
        </div>
      </section>

      {/* Spare Wear Parts Section */}
      <section className="py-12 sm:py-16 md:py-20 px-4 sm:px-6 bg-gray-50">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-8">
            <div className="flex items-center justify-center gap-3 mb-4">
              <div className="h-1 w-12 bg-red-600"></div>
              <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-gray-900">Spare Wear Parts</h2>
            </div>
            <p className="text-base sm:text-lg text-gray-700 mt-4 px-2">
              CE-Africa critical <span className="text-red-600 font-semibold">spares</span> and premium <span className="text-red-600 font-semibold">wear</span> components
            </p>
          </div>

          <div className="flex flex-wrap justify-center gap-3 sm:gap-4 mb-8 sm:mb-10 md:mb-12 px-2">
            {spareWearCategories.map((category) => (
              <button
                key={category}
                onClick={() => setSelectedSpareWearCategory(category)}
                className={`px-4 sm:px-5 md:px-6 py-2 sm:py-2.5 md:py-3 rounded-full font-semibold text-xs sm:text-sm md:text-sm transition-all duration-300 whitespace-nowrap ${
                  selectedSpareWearCategory === category ? 'bg-red-600 text-white shadow-lg' : 'bg-white text-gray-900 border-2 border-gray-300 hover:border-red-600 hover:text-red-600'
                }`}
              >
                {category}
              </button>
            ))}
          </div>

          {currentSpareWearProduct && <ProductCard product={currentSpareWearProduct} showContactButton={false} compact />}
        </div>
      </section>

      {/* Grinding Media Solutions Section */}
      <section className="py-12 sm:py-16 md:py-20 px-4 sm:px-6 bg-gray-50">
        <div className="max-w-7xl mx-auto">
          {/* Section Title */}
          <div className="text-center mb-8">
            <div className="flex items-center justify-center gap-3 mb-4">
              <div className="h-1 w-12 bg-red-600"></div>
              <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-gray-900">Grinding Media Solutions</h2>
            </div>
            <p className="text-base sm:text-lg text-gray-700 mt-4 px-2">
              Premium Grinding Media from <span className="text-red-600 font-semibold">Shandong Huamin</span> - China&apos;s Leading <span className="text-red-600 font-semibold">Manufacturer</span>
            </p>
          </div>

          {/* Category Buttons */}
          <div className="flex flex-wrap justify-center gap-3 sm:gap-4 mb-8 sm:mb-10 md:mb-12 px-2">
            {grindingMediaCategories.map((category) => (
              <button
                key={category}
                onClick={() => setSelectedGrindingCategory(category)}
                className={`px-4 sm:px-5 md:px-6 py-2 sm:py-2.5 md:py-3 rounded-full font-semibold text-xs sm:text-sm md:text-sm transition-all duration-300 whitespace-nowrap ${
                  selectedGrindingCategory === category
                    ? 'bg-red-600 text-white shadow-lg'
                    : 'bg-white text-gray-900 border-2 border-gray-300 hover:border-red-600 hover:text-red-600'
                }`}
              >
                {category}
              </button>
            ))}
          </div>

          {currentGrindingProduct && <ProductCard product={currentGrindingProduct} showContactButton={false} />}
        </div>
      </section>

      {/* Conveyor Systems Section */}
      <section className="py-12 sm:py-16 md:py-20 px-4 sm:px-6 bg-white">
        <div className="max-w-7xl mx-auto">
          {/* Section Title */}
          <div className="text-center mb-8">
            <div className="flex items-center justify-center gap-3 mb-4">
              <div className="h-1 w-12 bg-red-600"></div>
              <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-gray-900">Conveyor Systems</h2>
            </div>
            <p className="text-base sm:text-lg text-gray-700 mt-4 px-2">
              Heavy-duty <span className="text-red-600 font-semibold">conveyor</span> and <span className="text-red-600 font-semibold">elevator</span> belts from SIG Italia - engineered for <span className="text-red-600 font-semibold">reliability</span>
            </p>
          </div>

          {/* Category Buttons */}
          <div className="flex flex-wrap justify-center gap-3 sm:gap-4 mb-8 sm:mb-10 md:mb-12 px-2">
            {conveyorCategories.map((category) => (
              <button
                key={category}
                onClick={() => setSelectedConveyorCategory(category)}
                className={`px-4 sm:px-5 md:px-6 py-2 sm:py-2.5 md:py-3 rounded-full font-semibold text-xs sm:text-sm md:text-sm transition-all duration-300 whitespace-nowrap ${
                  selectedConveyorCategory === category
                    ? 'bg-red-600 text-white shadow-lg'
                    : 'bg-white text-gray-900 border-2 border-gray-300 hover:border-red-600 hover:text-red-600'
                }`}
              >
                {category}
              </button>
            ))}
          </div>

          {currentConveyorProduct && <ProductCard product={currentConveyorProduct} showContactButton={false} />}
        </div>
      </section>

      {/* Boilers, Burners & Spares Section */}
      <section className="py-12 sm:py-16 md:py-20 px-4 sm:px-6 bg-gray-50">
        <div className="max-w-7xl mx-auto">
          {/* Section Title */}
          <div className="text-center mb-8">
            <div className="flex items-center justify-center gap-3 mb-4">
              <div className="h-1 w-12 bg-red-600"></div>
              <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-gray-900">Boilers, Burners & Spares</h2>
            </div>
            <p className="text-base sm:text-lg text-gray-700 mt-4 px-2">
              Custom-built <span className="text-red-600 font-semibold">industrial boilers</span> and genuine spares from Australian engineering <span className="text-red-600 font-semibold">excellence</span>
            </p>
          </div>

          {/* Category Buttons */}
          <div className="flex flex-wrap justify-center gap-3 sm:gap-4 mb-8 sm:mb-10 md:mb-12 px-2">
            {boilerCategories.map((category) => (
              <button
                key={category}
                onClick={() => setSelectedBoilerCategory(category)}
                className={`px-4 sm:px-5 md:px-6 py-2 sm:py-2.5 md:py-3 rounded-full font-semibold text-xs sm:text-sm md:text-sm transition-all duration-300 whitespace-nowrap ${
                  selectedBoilerCategory === category
                    ? 'bg-red-600 text-white shadow-lg'
                    : 'bg-white text-gray-900 border-2 border-gray-300 hover:border-red-600 hover:text-red-600'
                }`}
              >
                {category}
              </button>
            ))}
          </div>

          {currentBoilerProduct && <ProductCard product={currentBoilerProduct} showContactButton={false} />}
        </div>
      </section>

      {/* Ecoflam Industrial Burners Section */}
      <section className="py-12 sm:py-16 md:py-20 px-4 sm:px-6 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-8">
            <div className="flex items-center justify-center gap-3 mb-4">
              <div className="h-1 w-12 bg-red-600"></div>
              <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-gray-900">Ecoflam Industrial Burners</h2>
            </div>
            <p className="text-base sm:text-lg text-gray-700 mt-4 px-2">
              <span className="text-red-600 font-semibold">High-efficiency</span> industrial combustion <span className="text-red-600 font-semibold">systems</span>
            </p>
          </div>

          <div className="flex flex-wrap justify-center gap-3 sm:gap-4 mb-8 sm:mb-10 md:mb-12 px-2">
            {ecoflamCategories.map((series) => (
              <button
                key={series}
                onClick={() => setSelectedEcoflamCategory(series)}
                className={`px-4 sm:px-5 md:px-6 py-2 sm:py-2.5 md:py-3 rounded-full font-semibold text-xs sm:text-sm md:text-sm transition-all duration-300 whitespace-nowrap ${
                  selectedEcoflamCategory === series ? 'bg-red-600 text-white shadow-lg' : 'bg-white text-gray-900 border-2 border-gray-300 hover:border-red-600 hover:text-red-600'
                }`}
              >
                {series}
              </button>
            ))}
          </div>

          {currentEcoflamProduct && <ProductCard product={currentEcoflamProduct} showContactButton={false} compact />}
        </div>
      </section>

      {/* Safety & Maintenance Equipment Section */}
      <section className="py-12 sm:py-16 md:py-20 px-4 sm:px-6 bg-white">
        <div className="max-w-7xl mx-auto">
          {/* Section Title */}
          <div className="text-center mb-8">
            <div className="flex items-center justify-center gap-3 mb-4">
              <div className="h-1 w-12 bg-red-600"></div>
              <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-gray-900">Safety & Maintenance Equipment</h2>
            </div>
            <p className="text-base sm:text-lg text-gray-700 mt-4 px-2">
              Comprehensive <span className="text-red-600 font-semibold">safety gear</span> and maintenance tools for industrial workplace <span className="text-red-600 font-semibold">protection</span>
            </p>
          </div>

          {/* Category Buttons */}
          <div className="flex flex-wrap justify-center gap-3 sm:gap-4 mb-8 sm:mb-10 md:mb-12 px-2">
            {safetyCategories.map((category) => (
              <button
                key={category}
                onClick={() => setSelectedSafetyCategory(category)}
                className={`px-4 sm:px-5 md:px-6 py-2 sm:py-2.5 md:py-3 rounded-full font-semibold text-xs sm:text-sm md:text-sm transition-all duration-300 whitespace-nowrap ${
                  selectedSafetyCategory === category
                    ? 'bg-red-600 text-white shadow-lg'
                    : 'bg-white text-gray-900 border-2 border-gray-300 hover:border-red-600 hover:text-red-600'
                }`}
              >
                {category}
              </button>
            ))}
          </div>

          {currentSafetyProduct && <ProductCard product={currentSafetyProduct} showContactButton={false} />}
        </div>
      </section>

      {/* Mechanical Components Section */}
      <section className="py-12 sm:py-16 md:py-20 px-4 sm:px-6 bg-gray-50">
        <div className="max-w-7xl mx-auto">
          {/* Section Title */}
          <div className="text-center mb-8">
            <div className="flex items-center justify-center gap-3 mb-4">
              <div className="h-1 w-12 bg-red-600"></div>
              <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-gray-900">Mechanical Components</h2>
            </div>
            <p className="text-base sm:text-lg text-gray-700 mt-4 px-2">
              Essential mechanical parts and components for industrial <span className="text-red-600 font-semibold">machinery reliability</span>
            </p>
          </div>

          {/* Category Buttons */}
          <div className="flex flex-wrap justify-center gap-3 sm:gap-4 mb-8 sm:mb-10 md:mb-12 px-2">
            {mechanicalCategories.map((category) => (
              <button
                key={category}
                onClick={() => setSelectedMechanicalCategory(category)}
                className={`px-4 sm:px-5 md:px-6 py-2 sm:py-2.5 md:py-3 rounded-full font-semibold text-xs sm:text-sm md:text-sm transition-all duration-300 whitespace-nowrap ${
                  selectedMechanicalCategory === category
                    ? 'bg-red-600 text-white shadow-lg'
                    : 'bg-white text-gray-900 border-2 border-gray-300 hover:border-red-600 hover:text-red-600'
                }`}
              >
                {category}
              </button>
            ))}
          </div>

          {currentMechanicalProduct && <ProductCard product={currentMechanicalProduct} showContactButton={false} />}
        </div>
      </section>

      {/* CTA Banner Section */}
      <div className="px-4 sm:px-6">
        <SectionCTA/>
      </div>

      <Footer />
    </div>
  );
}