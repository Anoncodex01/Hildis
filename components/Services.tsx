'use client';

import Image from 'next/image';
import Link from 'next/link';
import { Settings, Hammer, Droplet, HardHat, Waves, Wrench, ArrowRight } from 'lucide-react';

export default function Services() {
  const services = [
    {
      icon: Settings,
      title: 'Supply of Industrial Equipment & Spare Parts',
      description: 'We supply durable industrial equipment, mechanical parts, pumps, valves, crushers, mill liners, conveyor belts, grinding media, and spares that keep plants running efficiently across key industries.',
      link: '/industrial-equipment',
      linkText: 'Browse Equipment',
      image: '/home-services/Supply of Industrial Equipment & Spare Parts.png',
    },
    {
      icon: Hammer,
      title: 'Heavy Machinery & Plant Equipment',
      description: 'Provision of excavators, cranes, crushers, mills, pumps, agitators, lip systems, wear components, and other heavy-duty machinery designed for the toughest mining environments.',
      link: '/industrial-equipment',
      linkText: 'Browse Machinery',
      image: '/home-services/Heavy Machinery.png',
    },
    {
      icon: Droplet,
      title: 'Industrial & Mining Chemicals',
      description: 'Supply of specialized chemicals used in mineral processing, boiler treatment, water clarification, RO systems, CIP processes, and production optimization. Safe operation and process integrity.',
      link: '/chemical-products',
      linkText: 'View Chemicals',
      image: '/home-services/Mining Chemicals.jpg',
    },
    {
      icon: HardHat,
      title: 'Personal Protective Equipment (PPE) & Safety Gear',
      description: 'Certified safety equipment for mining and industrial sites including helmets, gloves, boots, harnesses, suits, and fire protection gear ensuring occupational safety and compliance.',
      link: '/industrial-equipment',
      linkText: 'Browse Safety Gear',
      image: '/home-services/safety_gear.png',
    },
    {
      icon: Waves,
      title: 'Water Treatment Solutions',
      description: 'Professional treatment of boiler water, cooling systems, feed water, RO systems, and wastewater through specialized chemicals and engineering support.',
      link: '/chemical-products',
      linkText: 'Water Solutions',
      image: '/home-services/water.png',
    },
    {
      icon: Wrench,
      title: 'Equipment Maintenance & Workshop Services',
      description: 'Ongoing technical maintenance including servicing agitators, electrical systems, motor rewinding, component rebuilds, and wear protection — backed by our dedicated workshop.',
      link: '/electrical-automation',
      linkText: 'Maintenance Services',
      image: '/home-services/workshop.png',
    },
  ];

  // Color constants for consistency
  const DEEP_NAVY = '#282668'; // #282668 - Deep Navy Blue
  const ROYAL_BLUE = '#3b4bc8'; // Royal Blue variant
  const GRADIENT_END = '#4d5de0'; // Lighter Blue for gradient end

  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* SECTION HEADER */}
        <div className="text-center mb-16">
          <div className="flex justify-center mb-4">
            <div className="h-1 w-12 bg-gradient-to-r from-red-600 to-red-700 rounded-full"></div>
          </div>
          
          <h2 className="text-lg font-semibold text-gray-600 uppercase tracking-wider mb-4 font-sans">
            Services We Provide
          </h2>
          
          <h3 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 mb-6 font-sans leading-tight tracking-tight">
            Services built for operational{' '}
            <span className="text-red-600 bg-gradient-to-r from-red-600 to-red-700 bg-clip-text">
              excellence
            </span>
          </h3>
          
          <p className="text-lg text-gray-600 max-w-3xl mx-auto font-sans leading-relaxed mb-12">
            Comprehensive industrial solutions engineered for peak performance, safety, and sustainability
          </p>
        </div>

        {/* SERVICES GRID */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 lg:gap-8 mb-16">
          {services.map((service, index) => {
            const IconComponent = service.icon;
            return (
              <div
                key={index}
                className="group relative bg-white rounded-2xl overflow-hidden shadow-[0_4px_20px_rgba(0,0,0,0.08)] hover:shadow-[0_8px_30px_rgba(0,0,0,0.12)] transition-all duration-300 hover:-translate-y-1 border border-gray-100"
              >
                {/* IMAGE CONTAINER - All four corners rounded */}
                <div className="relative h-56 w-full">
                  {/* Image with all corners rounded */}
                  <div className="absolute inset-0 rounded-2xl overflow-hidden">
                    <Image
                      src={service.image}
                      alt={service.title}
                      fill
                      className="object-cover group-hover:scale-105 transition-transform duration-500"
                      sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                      priority={index < 2}
                    />
                  </div>
                  
                  {/* STRONG DEEP NAVY TO ROYAL BLUE GRADIENT - covering only 40% from bottom */}
                  <div 
                    className="absolute bottom-0 left-0 right-0 h-[40%] rounded-b-2xl"
                    style={{
                      background: `linear-gradient(to top, 
                        ${DEEP_NAVY}E6 0%, 
                        ${DEEP_NAVY}CC 25%, 
                        ${ROYAL_BLUE}99 50%, 
                        ${GRADIENT_END}66 75%, 
                        transparent 100%
                      )`,
                    }}
                  />
                  
                  {/* FLOATING CIRCULAR ICON BADGE - Deep Navy Blue (#282668) */}
                  <div 
                    className="absolute -bottom-8 right-6 w-16 h-16 rounded-full shadow-[0_10px_30px_rgba(40,38,104,0.35)] z-10 border-4 border-white overflow-hidden group-hover:scale-110 transition-transform duration-300 hover:shadow-[0_12px_35px_rgba(40,38,104,0.45)]"
                    style={{
                      backgroundColor: DEEP_NAVY,
                      background: `linear-gradient(135deg, ${DEEP_NAVY} 0%, ${ROYAL_BLUE} 100%)`,
                    }}
                  >
                    {/* Subtle inner shine */}
                    <div className="absolute inset-0 bg-gradient-to-br from-white/15 via-transparent to-transparent"></div>
                    {/* White minimalist line icon */}
                    <div className="absolute inset-0 flex items-center justify-center">
                      <IconComponent className="w-7 h-7 text-white" strokeWidth={2} />
                    </div>
                  </div>
                </div>

                {/* CARD CONTENT */}
                <div className="pt-10 pb-7 px-6">
                  {/* Service Title */}
                  <h4 className="text-xl font-bold text-gray-900 mb-3 leading-tight font-sans">
                    {service.title}
                  </h4>

                  {/* Description */}
                  <p className="text-gray-600 leading-relaxed text-sm mb-6 font-sans line-clamp-3">
                    {service.description}
                  </p>

                  {/* Red text link with SINGLE arrow icon only */}
                  <Link 
                    href={service.link}
                    className="inline-flex items-center gap-2 text-red-600 font-semibold text-sm hover:text-red-700 transition-all duration-200 group/cta"
                  >
                    <span>{service.linkText}</span>
                    <ArrowRight className="w-4 h-4 group-hover/cta:translate-x-1 transition-transform duration-200" />
                  </Link>
                </div>

                {/* Subtle hover effect indicator */}
                <div className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-transparent via-red-600 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              </div>
            );
          })}
        </div>

        {/* CALL-TO-ACTION BUTTON */}
        <div className="text-center">
          <Link 
            href="/services"
            className="inline-flex items-center bg-gradient-to-r from-red-600 to-red-700 hover:from-red-700 hover:to-red-800 text-white px-10 py-4 rounded-full font-semibold text-lg shadow-[0_4px_20px_rgba(220,38,38,0.25)] hover:shadow-[0_8px_30px_rgba(220,38,38,0.35)] transition-all duration-300 hover:-translate-y-0.5"
          >
            <span>View All Services</span>
            <ArrowRight className="w-5 h-5 ml-3" />
          </Link>
          
          <p className="text-gray-500 text-sm mt-6 font-sans">
            Trusted partner for industrial solutions across Africa
          </p>
        </div>
      </div>
    </section>
  );
}