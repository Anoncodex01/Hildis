'use client';

import { useState } from 'react';
import Header from '@/components/Header';
import Image from 'next/image';
import { ArrowRight } from 'lucide-react';
import Footer from '@/components/Footer';
import SectionCTA from '@/components/Contact';
import ContactModal from '@/components/ContactModal';

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

// Boilers & Spares product data
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
  }
};

const boilerCategories = Object.keys(boilerProducts);

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
  
  const [selectedGrindingCategory, setSelectedGrindingCategory] = useState('Forged Steel Balls');
  const currentGrindingProduct = grindingMediaProducts[selectedGrindingCategory as keyof typeof grindingMediaProducts];
  
  const [selectedConveyorCategory, setSelectedConveyorCategory] = useState('Steel Cord Belts');
  const currentConveyorProduct = conveyorProducts[selectedConveyorCategory as keyof typeof conveyorProducts];
  
  const [selectedBoilerCategory, setSelectedBoilerCategory] = useState('Industrial Boilers');
  const currentBoilerProduct = boilerProducts[selectedBoilerCategory as keyof typeof boilerProducts];
  
  const [selectedSafetyCategory, setSelectedSafetyCategory] = useState('PPE');
  const currentSafetyProduct = safetyProducts[selectedSafetyCategory as keyof typeof safetyProducts];
  
  const [selectedMechanicalCategory, setSelectedMechanicalCategory] = useState('Bearings');
  const currentMechanicalProduct = mechanicalProducts[selectedMechanicalCategory as keyof typeof mechanicalProducts];

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
              src="/pump valves/fe5ca0868dfd03b5410bb75eb2f933f82114701b.jpg"
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

      {/* Pumps & Valves Section */}
      <section className="py-12 sm:py-16 md:py-20 bg-white px-4 sm:px-6">
        <div className="max-w-7xl mx-auto">
          {/* Section Title */}
          <div className="text-center mb-8">
            <div className="flex items-center justify-center gap-2 mb-3">
              <span className="w-8 border-t-4 border-red-600" />
              <span className="text-base md:text-lg font-semibold text-gray-900">
                Pumps &amp; Valves
              </span>
            </div>
            <h2 className="text-xl md:text-2xl lg:text-3xl font-bold text-gray-900">
              Comprehensive fluid handling{' '}
              <span className="text-red-600 font-semibold">solutions</span> for{' '}
              <span className="text-red-600 font-semibold">industrial</span> applications
            </h2>
          </div>

          {/* Category Buttons */}
          <div className="flex flex-wrap justify-center gap-3 sm:gap-4 mb-8 sm:mb-10 md:mb-12 px-2">
            {categories.map((category) => (
              <button
                key={category}
                onClick={() => setSelectedCategory(category)}
                className={`px-4 sm:px-5 md:px-6 py-2 sm:py-2.5 md:py-3 rounded-full font-semibold text-xs sm:text-sm md:text-sm transition-all duration-300 whitespace-nowrap ${
                  selectedCategory === category
                    ? 'bg-red-600 text-white shadow-lg'
                    : 'bg-white text-gray-900 border-2 border-gray-300 hover:border-red-600 hover:text-red-600'
                }`}
              >
                {category}
              </button>
            ))}
          </div>

          {/* Product Card */}
          {currentProduct && (
            <div className="flex justify-center mt-8 sm:mt-10 md:mt-12 mb-8 sm:mb-10 md:mb-12 px-2">
              <div
                className="w-full max-w-5xl lg:max-w-6xl xl:max-w-7xl"
                style={{
                  filter: 'drop-shadow(0 0 10px rgba(0, 0, 0, 0.25))',
                }}
              >
                <div
                  className="bg-white rounded-2xl overflow-hidden"
                  style={{
                    clipPath: 'polygon(0 80px, 80px 0, 100% 0, 100% 100%, 0 100%)',
                  }}
                >
                  <div className="flex flex-col lg:flex-row">
                    {/* Left Image Section - FIXED for desktop */}
                    <div className="lg:w-[43%] relative min-h-[300px] lg:min-h-[420px]">
                      <div className="relative w-full h-full">
                        <div className="absolute inset-0">
                          <Image
                            src={currentProduct.image}
                            alt={currentProduct.name}
                            fill
                            className="object-cover"
                            sizes="(max-width: 768px) 100vw, (max-width: 1024px) 43vw, 40vw"
                            priority
                          />
                          {/* Gradient overlay */}
                          <div className="absolute inset-0 bg-gradient-to-r from-black/10 to-transparent"></div>
                        </div>
                      </div>
                    </div>
                    
                    {/* Right Content Section */}
                    <div className="lg:w-[57%] p-6 sm:p-8 lg:p-10">
                      <h3 className="text-xl sm:text-2xl md:text-3xl font-bold text-[#1D2550] mb-3">
                        {currentProduct.name}
                      </h3>
                      
                      <p className="text-gray-700 text-sm sm:text-base leading-relaxed mb-4">
                        {currentProduct.description}
                      </p>

                      {/* Uses */}
                      <div className="mb-4">
                        <h4 className="text-sm font-bold text-[#1D2550] mb-2">Uses:</h4>
                        <ul className="space-y-1.5">
                          {currentProduct.uses.map((use, index) => (
                            <li key={index} className="flex items-start gap-2">
                              <span className="text-red-600 text-sm mt-0.5 flex-shrink-0">◆</span>
                              <span className="text-gray-700 text-xs sm:text-sm leading-relaxed">{use}</span>
                            </li>
                          ))}
                        </ul>
                      </div>

                      {/* Tags */}
                      <div className="mb-3">
                        <h4 className="text-sm font-bold text-[#1D2550] mb-1">Tags:</h4>
                        <p className="text-gray-600 text-xs sm:text-sm leading-relaxed">{currentProduct.tags}</p>
                      </div>

                      {/* Industries */}
                      <div className="mb-6">
                        <h4 className="text-sm font-bold text-[#1D2550] mb-1">Industries:</h4>
                        <p className="text-gray-600 text-xs sm:text-sm leading-relaxed">{currentProduct.industries}</p>
                      </div>

                      {/* Contact Button */}
                      <button
                        onClick={() => handleContactClick(currentProduct.name)}
                        className="bg-red-600 text-white px-6 py-3 rounded-lg font-semibold hover:bg-red-700 transition-colors duration-300 w-full sm:w-auto text-sm"
                      >
                        Contact for Inquiry
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          )}
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

          {/* Product Card */}
          {currentGrindingProduct && (
            <div className="flex justify-center mt-8 sm:mt-10 md:mt-12 mb-8 sm:mb-10 md:mb-12 px-2">
              <div className="w-full max-w-5xl lg:max-w-6xl xl:max-w-7xl">
                <div
                  className="bg-white rounded-2xl overflow-hidden shadow-xl"
                  style={{
                    clipPath: 'polygon(0 80px, 80px 0, 100% 0, 100% 100%, 0 100%)',
                  }}
                >
                  <div className="flex flex-col lg:flex-row">
                    {/* Image Section */}
                    <div className="lg:w-[43%] relative min-h-[300px] lg:min-h-[420px]">
                      <div className="relative w-full h-full">
                        <div className="absolute inset-0">
                          <Image
                            src={currentGrindingProduct.image}
                            alt={currentGrindingProduct.name}
                            fill
                            className="object-cover"
                            sizes="(max-width: 768px) 100vw, (max-width: 1024px) 43vw, 40vw"
                          />
                          <div className="absolute inset-0 bg-gradient-to-r from-black/10 to-transparent"></div>
                        </div>
                      </div>
                    </div>

                    {/* Content Section */}
                    <div className="lg:w-[57%] p-6 sm:p-8 lg:p-10">
                      <h3 className="text-xl sm:text-2xl md:text-3xl font-bold text-[#1D2550] mb-3">
                        {currentGrindingProduct.name}
                      </h3>
                      
                      <p className="text-gray-700 text-sm sm:text-base leading-relaxed mb-4">
                        {currentGrindingProduct.description}
                      </p>

                      {/* Uses */}
                      <div className="mb-4">
                        <h4 className="text-sm font-bold text-[#1D2550] mb-2">Uses:</h4>
                        <ul className="space-y-1.5">
                          {currentGrindingProduct.uses.map((use, index) => (
                            <li key={index} className="flex items-start gap-2">
                              <span className="text-red-600 text-sm mt-0.5 flex-shrink-0">◆</span>
                              <span className="text-gray-700 text-xs sm:text-sm leading-relaxed">{use}</span>
                            </li>
                          ))}
                        </ul>
                      </div>

                      {/* Tags */}
                      <div className="mb-3">
                        <h4 className="text-sm font-bold text-[#1D2550] mb-1">Tags:</h4>
                        <p className="text-gray-600 text-xs sm:text-sm leading-relaxed">{currentGrindingProduct.tags}</p>
                      </div>

                      {/* Industries */}
                      <div className="mb-6">
                        <h4 className="text-sm font-bold text-[#1D2550] mb-1">Industries:</h4>
                        <p className="text-gray-600 text-xs sm:text-sm leading-relaxed">{currentGrindingProduct.industries}</p>
                      </div>

                      {/* Contact Button */}
                      <button
                        onClick={() => handleContactClick(currentGrindingProduct.name)}
                        className="bg-red-600 text-white px-6 py-3 rounded-lg font-semibold hover:bg-red-700 transition-colors duration-300 w-full sm:w-auto text-sm"
                      >
                        Contact for Inquiry
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          )}
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

          {/* Product Card */}
          {currentConveyorProduct && (
            <div className="flex justify-center mt-8 sm:mt-10 md:mt-12 mb-8 sm:mb-10 md:mb-12 px-2">
              <div className="w-full max-w-5xl lg:max-w-6xl xl:max-w-7xl">
                <div
                  className="bg-white rounded-2xl overflow-hidden shadow-xl border border-gray-200"
                  style={{
                    clipPath: 'polygon(0 80px, 80px 0, 100% 0, 100% 100%, 0 100%)',
                  }}
                >
                  <div className="flex flex-col lg:flex-row">
                    {/* Image Section */}
                    <div className="lg:w-[43%] relative min-h-[300px] lg:min-h-[420px]">
                      <div className="relative w-full h-full">
                        <div className="absolute inset-0">
                          <Image
                            src={currentConveyorProduct.image}
                            alt={currentConveyorProduct.name}
                            fill
                            className="object-cover"
                            sizes="(max-width: 768px) 100vw, (max-width: 1024px) 43vw, 40vw"
                          />
                          <div className="absolute inset-0 bg-gradient-to-r from-black/10 to-transparent"></div>
                        </div>
                      </div>
                    </div>

                    {/* Content Section */}
                    <div className="lg:w-[57%] p-6 sm:p-8 lg:p-10">
                      <h3 className="text-xl sm:text-2xl md:text-3xl font-bold text-[#1D2550] mb-3">
                        {currentConveyorProduct.name}
                      </h3>
                      
                      <p className="text-gray-700 text-sm sm:text-base leading-relaxed mb-4">
                        {currentConveyorProduct.description}
                      </p>

                      {/* Uses */}
                      <div className="mb-4">
                        <h4 className="text-sm font-bold text-[#1D2550] mb-2">Uses:</h4>
                        <ul className="space-y-1.5">
                          {currentConveyorProduct.uses.map((use, index) => (
                            <li key={index} className="flex items-start gap-2">
                              <span className="text-red-600 text-sm mt-0.5 flex-shrink-0">◆</span>
                              <span className="text-gray-700 text-xs sm:text-sm leading-relaxed">{use}</span>
                            </li>
                          ))}
                        </ul>
                      </div>

                      {/* Tags */}
                      <div className="mb-3">
                        <h4 className="text-sm font-bold text-[#1D2550] mb-1">Tags:</h4>
                        <p className="text-gray-600 text-xs sm:text-sm leading-relaxed">{currentConveyorProduct.tags}</p>
                      </div>

                      {/* Industries */}
                      <div className="mb-6">
                        <h4 className="text-sm font-bold text-[#1D2550] mb-1">Industries:</h4>
                        <p className="text-gray-600 text-xs sm:text-sm leading-relaxed">{currentConveyorProduct.industries}</p>
                      </div>

                      {/* Contact Button */}
                      <button
                        onClick={() => handleContactClick(currentConveyorProduct.name)}
                        className="bg-red-600 text-white px-6 py-3 rounded-lg font-semibold hover:bg-red-700 transition-colors duration-300 w-full sm:w-auto text-sm"
                      >
                        Contact for Inquiry
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          )}
        </div>
      </section>

      {/* Boilers & Spares Section */}
      <section className="py-12 sm:py-16 md:py-20 px-4 sm:px-6 bg-gray-50">
        <div className="max-w-7xl mx-auto">
          {/* Section Title */}
          <div className="text-center mb-8">
            <div className="flex items-center justify-center gap-3 mb-4">
              <div className="h-1 w-12 bg-red-600"></div>
              <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-gray-900">Boilers & Spares</h2>
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

          {/* Product Card */}
          {currentBoilerProduct && (
            <div className="flex justify-center mt-8 sm:mt-10 md:mt-12 mb-8 sm:mb-10 md:mb-12 px-2">
              <div className="w-full max-w-5xl lg:max-w-6xl xl:max-w-7xl">
                <div
                  className="bg-white rounded-2xl overflow-hidden shadow-xl"
                  style={{
                    clipPath: 'polygon(0 80px, 80px 0, 100% 0, 100% 100%, 0 100%)',
                  }}
                >
                  <div className="flex flex-col lg:flex-row">
                    {/* Image Section */}
                    <div className="lg:w-[43%] relative min-h-[300px] lg:min-h-[420px]">
                      <div className="relative w-full h-full">
                        <div className="absolute inset-0">
                          <Image
                            src={currentBoilerProduct.image}
                            alt={currentBoilerProduct.name}
                            fill
                            className="object-cover"
                            sizes="(max-width: 768px) 100vw, (max-width: 1024px) 43vw, 40vw"
                          />
                          <div className="absolute inset-0 bg-gradient-to-r from-black/10 to-transparent"></div>
                        </div>
                      </div>
                    </div>

                    {/* Content Section */}
                    <div className="lg:w-[57%] p-6 sm:p-8 lg:p-10">
                      <h3 className="text-xl sm:text-2xl md:text-3xl font-bold text-[#1D2550] mb-3">
                        {currentBoilerProduct.name}
                      </h3>
                      
                      <p className="text-gray-700 text-sm sm:text-base leading-relaxed mb-4">
                        {currentBoilerProduct.description}
                      </p>

                      {/* Uses */}
                      <div className="mb-4">
                        <h4 className="text-sm font-bold text-[#1D2550] mb-2">Uses:</h4>
                        <ul className="space-y-1.5">
                          {currentBoilerProduct.uses.map((use, index) => (
                            <li key={index} className="flex items-start gap-2">
                              <span className="text-red-600 text-sm mt-0.5 flex-shrink-0">◆</span>
                              <span className="text-gray-700 text-xs sm:text-sm leading-relaxed">{use}</span>
                            </li>
                          ))}
                        </ul>
                      </div>

                      {/* Tags */}
                      <div className="mb-3">
                        <h4 className="text-sm font-bold text-[#1D2550] mb-1">Tags:</h4>
                        <p className="text-gray-600 text-xs sm:text-sm leading-relaxed">{currentBoilerProduct.tags}</p>
                      </div>

                      {/* Industries */}
                      <div className="mb-6">
                        <h4 className="text-sm font-bold text-[#1D2550] mb-1">Industries:</h4>
                        <p className="text-gray-600 text-xs sm:text-sm leading-relaxed">{currentBoilerProduct.industries}</p>
                      </div>

                      {/* Contact Button */}
                      <button
                        onClick={() => handleContactClick(currentBoilerProduct.name)}
                        className="bg-red-600 text-white px-6 py-3 rounded-lg font-semibold hover:bg-red-700 transition-colors duration-300 w-full sm:w-auto text-sm"
                      >
                        Contact for Inquiry
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          )}
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

          {/* Product Card */}
          {currentSafetyProduct && (
            <div className="flex justify-center mt-8 sm:mt-10 md:mt-12 mb-8 sm:mb-10 md:mb-12 px-2">
              <div className="w-full max-w-5xl lg:max-w-6xl xl:max-w-7xl">
                <div
                  className="bg-white rounded-2xl overflow-hidden shadow-xl border border-gray-200"
                  style={{
                    clipPath: 'polygon(0 80px, 80px 0, 100% 0, 100% 100%, 0 100%)',
                  }}
                >
                  <div className="flex flex-col lg:flex-row">
                    {/* Image Section */}
                    <div className="lg:w-[43%] relative min-h-[300px] lg:min-h-[420px]">
                      <div className="relative w-full h-full">
                        <div className="absolute inset-0">
                          <Image
                            src={currentSafetyProduct.image}
                            alt={currentSafetyProduct.name}
                            fill
                            className="object-cover"
                            sizes="(max-width: 768px) 100vw, (max-width: 1024px) 43vw, 40vw"
                          />
                          <div className="absolute inset-0 bg-gradient-to-r from-black/10 to-transparent"></div>
                        </div>
                      </div>
                    </div>

                    {/* Content Section */}
                    <div className="lg:w-[57%] p-6 sm:p-8 lg:p-10">
                      <h3 className="text-xl sm:text-2xl md:text-3xl font-bold text-[#1D2550] mb-3">
                        {currentSafetyProduct.name}
                      </h3>
                      
                      <p className="text-gray-700 text-sm sm:text-base leading-relaxed mb-4">
                        {currentSafetyProduct.description}
                      </p>

                      {/* Uses */}
                      <div className="mb-4">
                        <h4 className="text-sm font-bold text-[#1D2550] mb-2">Uses:</h4>
                        <ul className="space-y-1.5">
                          {currentSafetyProduct.uses.map((use, index) => (
                            <li key={index} className="flex items-start gap-2">
                              <span className="text-red-600 text-sm mt-0.5 flex-shrink-0">◆</span>
                              <span className="text-gray-700 text-xs sm:text-sm leading-relaxed">{use}</span>
                            </li>
                          ))}
                        </ul>
                      </div>

                      {/* Tags */}
                      <div className="mb-3">
                        <h4 className="text-sm font-bold text-[#1D2550] mb-1">Tags:</h4>
                        <p className="text-gray-600 text-xs sm:text-sm leading-relaxed">{currentSafetyProduct.tags}</p>
                      </div>

                      {/* Industries */}
                      <div className="mb-6">
                        <h4 className="text-sm font-bold text-[#1D2550] mb-1">Industries:</h4>
                        <p className="text-gray-600 text-xs sm:text-sm leading-relaxed">{currentSafetyProduct.industries}</p>
                      </div>

                      {/* Contact Button */}
                      <button
                        onClick={() => handleContactClick(currentSafetyProduct.name)}
                        className="bg-red-600 text-white px-6 py-3 rounded-lg font-semibold hover:bg-red-700 transition-colors duration-300 w-full sm:w-auto text-sm"
                      >
                        Contact for Inquiry
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          )}
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

          {/* Product Card */}
          {currentMechanicalProduct && (
            <div className="flex justify-center mt-8 sm:mt-10 md:mt-12 mb-8 sm:mb-10 md:mb-12 px-2">
              <div className="w-full max-w-5xl lg:max-w-6xl xl:max-w-7xl">
                <div
                  className="bg-white rounded-2xl overflow-hidden shadow-xl"
                  style={{
                    clipPath: 'polygon(0 80px, 80px 0, 100% 0, 100% 100%, 0 100%)',
                  }}
                >
                  <div className="flex flex-col lg:flex-row">
                    {/* Image Section */}
                    <div className="lg:w-[43%] relative min-h-[300px] lg:min-h-[420px]">
                      <div className="relative w-full h-full">
                        <div className="absolute inset-0">
                          <Image
                            src={currentMechanicalProduct.image}
                            alt={currentMechanicalProduct.name}
                            fill
                            className="object-cover"
                            sizes="(max-width: 768px) 100vw, (max-width: 1024px) 43vw, 40vw"
                          />
                          <div className="absolute inset-0 bg-gradient-to-r from-black/10 to-transparent"></div>
                        </div>
                      </div>
                    </div>

                    {/* Content Section */}
                    <div className="lg:w-[57%] p-6 sm:p-8 lg:p-10">
                      <h3 className="text-xl sm:text-2xl md:text-3xl font-bold text-[#1D2550] mb-3">
                        {currentMechanicalProduct.name}
                      </h3>
                      
                      <p className="text-gray-700 text-sm sm:text-base leading-relaxed mb-4">
                        {currentMechanicalProduct.description}
                      </p>

                      {/* Uses */}
                      <div className="mb-4">
                        <h4 className="text-sm font-bold text-[#1D2550] mb-2">Uses:</h4>
                        <ul className="space-y-1.5">
                          {currentMechanicalProduct.uses.map((use, index) => (
                            <li key={index} className="flex items-start gap-2">
                              <span className="text-red-600 text-sm mt-0.5 flex-shrink-0">◆</span>
                              <span className="text-gray-700 text-xs sm:text-sm leading-relaxed">{use}</span>
                            </li>
                          ))}
                        </ul>
                      </div>

                      {/* Tags */}
                      <div className="mb-3">
                        <h4 className="text-sm font-bold text-[#1D2550] mb-1">Tags:</h4>
                        <p className="text-gray-600 text-xs sm:text-sm leading-relaxed">{currentMechanicalProduct.tags}</p>
                      </div>

                      {/* Industries */}
                      <div className="mb-6">
                        <h4 className="text-sm font-bold text-[#1D2550] mb-1">Industries:</h4>
                        <p className="text-gray-600 text-xs sm:text-sm leading-relaxed">{currentMechanicalProduct.industries}</p>
                      </div>

                      {/* Contact Button */}
                      <button
                        onClick={() => handleContactClick(currentMechanicalProduct.name)}
                        className="bg-red-600 text-white px-6 py-3 rounded-lg font-semibold hover:bg-red-700 transition-colors duration-300 w-full sm:w-auto text-sm"
                      >
                        Contact for Inquiry
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          )}
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