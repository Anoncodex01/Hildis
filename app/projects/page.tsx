'use client';

import { useEffect, useState } from 'react';
import Header from '@/components/Header';
import Image from 'next/image';
import ContactModal from '@/components/ContactModal';
import Footer from '@/components/Footer';

export default function ProjectsPage() {
  const [isModalOpen, setIsModalOpen] = useState(false);

  // Suppress React DevTools params warning for Next.js 16
  useEffect(() => {
    const originalError = console.error;
    console.error = (...args) => {
      if (
        typeof args[0] === 'string' &&
        args[0].includes('params are being enumerated')
      ) {
        return;
      }
      originalError.apply(console, args);
    };
    return () => {
      console.error = originalError;
    };
  }, []);

  const openModal = () => setIsModalOpen(true);
  const closeModal = () => setIsModalOpen(false);

  const projects = [
    {
      id: 1,
      title: 'Geotextile Membrane Supply - WASCO',
      description: 'Supplied high-performance geotextile membranes for enhanced filtration and containment solutions.',
      solutions: ['Geotextile supply', 'Containment consulting'],
      clients: 'WASCO, TCC',
      location: 'Tanzania',
      image: '/images/union.png',
    },
    {
      id: 2,
      title: 'Industrial Chemicals & Valves Supply Project',
      description: 'Delivered critical industrial chemicals and robust valve systems to ensure reliable, uninterrupted production.',
      solutions: ['Chemical supply', 'Valve installation'],
      clients: 'Mtibwa Sugar, Tanga Cement',
      location: 'Mtwara and Tanga, Tanzania',
      image: '/chemical/industrial.png',
    },
    {
      id: 3,
      title: 'Water Treatment Solutions',
      description: 'Provided comprehensive water treatment chemicals to optimize boiler efficiency and process water management for sugar producers.',
      solutions: ['Water chemicals', 'System optimization'],
      clients: 'Kilombero Sugar, Mtibwa Sugar, Msolwa Sugar',
      location: 'Kilombero, Morogoro, Mtwara regions, Tanzania',
      image: '/chemical/water.png',
    },
    {
      id: 4,
      title: 'Industrial Bearings Supply',
      description: 'Supplied precision industrial bearings to minimize downtime and extend equipment life in cement production.',
      solutions: ['Bearing supply', 'Maintenance planning'],
      clients: 'Tanga Cement',
      location: 'Tanga, Tanzania',
      image: '/chemical/bearing.png',
    },
    {
      id: 5,
      title: 'Lubricants Distribution',
      description: 'Delivered premium TotalEnergies and Caltex lubricants nationwide to protect assets and ensure smooth industrial operations.',
      solutions: ['Lubricant supply', 'Program management'],
      clients: 'Various clients across the country',
      location: 'Nationwide, Tanzania',
      image: '/chemical/lubricants.png',
    },
    {
      id: 6,
      title: 'Industrial Spares Supply',
      description: 'Supplied essential spare parts to support production continuity and timely maintenance for tobacco processing.',
      solutions: ['Spare parts supply', 'Emergency delivery'],
      clients: 'Alliance One Tobacco Limited',
      location: 'Tanzania',
      image: '/chemical/spares.png',
    },
  ];

  return (
    <div className="min-h-screen bg-white">
      <Header />
      
      {/* Contact Modal */}
      <ContactModal isOpen={isModalOpen} onClose={closeModal} />

      {/* Hero Section */}
      <section className="relative pb-6">
        <div className="px-6">
          <div
            className="relative overflow-hidden mx-auto max-w-7xl"
            style={{
              height: '400px',
              borderRadius: '18px',
            }}
          >
            <Image
              src="/services/20bd995ce97da45762dc014a4aa20583153cd9d2.jpg"
              alt="Industrial Projects"
              fill
              className="object-cover"
              priority
            />
            <div
              className="absolute inset-0"
              style={{ backgroundColor: 'rgba(0, 0, 0, 0.55)' }}
            ></div>

            <div className="absolute inset-0 flex flex-col justify-center items-center text-center px-6 z-10">
              <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-4 leading-tight">
                Our Industrial Projects
              </h1>
              <p className="text-white text-base md:text-lg max-w-3xl leading-relaxed opacity-90">
                Delivering proven solutions and measurable results across Tanzania&apos;s key sectors.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Proven Impact Section - Reduced container and font sizes */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="mb-10">
            <div className="h-1 w-12 bg-red-600 mb-5" />
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900">
              Proven Impact
            </h2>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900">
              Across <span className="text-red-600">Tanzania</span>
            </h2>
          </div>

          {/* Projects Grid - Slightly reduced */}
          <div className="space-y-6">
            {projects.map((project) => (
              <div
                key={project.id}
                className="bg-white rounded-xl overflow-hidden shadow-lg border border-gray-200"
              >
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-0">
                  {/* Image - Slightly reduced */}
                  <div className="relative h-[350px] lg:h-[420px] rounded-l-xl overflow-hidden">
                    <Image
                      src={project.image}
                      alt={project.title}
                      fill
                      className="object-cover"
                    />
                  </div>

                  {/* Content - Slightly reduced */}
                  <div className="bg-white p-6 lg:p-8 flex flex-col justify-center rounded-r-xl">
                    <h3 className="text-xl md:text-2xl lg:text-3xl font-bold text-[#1D2550] mb-3">
                      {project.title}
                    </h3>
                    <p className="text-gray-900 text-sm md:text-base leading-relaxed mb-4">
                      {project.description}
                    </p>

                    <div className="space-y-4">
                      <div>
                        <span className="font-semibold text-gray-900 text-sm">
                          Solutions:
                        </span>
                        <ul className="mt-1 space-y-1.5">
                          {project.solutions.map((solution, idx) => (
                            <li key={idx} className="flex items-center gap-2 text-gray-900">
                              <span className="text-red-600 text-base">◆</span>
                              <span className="text-sm">{solution}</span>
                            </li>
                          ))}
                        </ul>
                      </div>

                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                        <div>
                          <span className="font-semibold text-gray-900 text-sm">
                            Clients:
                          </span>
                          <p className="text-gray-900 mt-1 text-sm">{project.clients}</p>
                        </div>

                        <div>
                          <span className="font-semibold text-gray-900 text-sm">
                            Location:
                          </span>
                          <p className="text-gray-900 mt-1 text-sm">{project.location}</p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Custom CTA Banner Section */}
      <section className="py-12 sm:py-16 md:py-20 bg-white relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div
            className="relative bg-red-600 rounded-[40px] overflow-hidden mx-auto"
            style={{
              width: '100%',
              maxWidth: '1336px',
              height: '350px',
            }}
          >
            <div className="grid lg:grid-cols-[45%_55%] items-center relative h-full">
              {/* LEFT SIDE CONTENT */}
              <div className="text-white z-20 p-6 sm:p-8 lg:p-12 h-full flex flex-col justify-center">
                <h2 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-bold mb-4 sm:mb-6 leading-tight whitespace-nowrap">
                  Get expert support
                  <br />
                  For your operations
                </h2>

                <p className="text-sm sm:text-base md:text-lg lg:text-xl text-white/90 mb-6 sm:mb-8 font-light">
                  Speak with our team for supply requests, engineering support,
                  or project planning.
                </p>

                <div className="flex flex-wrap gap-3 sm:gap-4">
                  {/* Contact Us Button - Opens modal */}
                  <button
                    onClick={openModal}
                    className="bg-white text-gray-900 px-6 sm:px-8 py-2.5 sm:py-3 rounded-full font-medium hover:bg-gray-100 transition-all duration-300 hover:scale-105 shadow-lg text-sm sm:text-base"
                  >
                    Contact Us
                  </button>

                  {/* Request a Quote Button - Opens modal */}
                  <button
                    onClick={openModal}
                    className="bg-white text-gray-900 px-6 sm:px-8 py-2.5 sm:py-3 rounded-full font-medium hover:bg-gray-100 transition-all duration-300 hover:scale-105 shadow-lg text-sm sm:text-base"
                  >
                    Request a Quote
                  </button>
                </div>
              </div>

              {/* RIGHT SIDE IMAGE MASKED INSIDE CONTAINER */}
              <div className="relative h-full flex items-center justify-end">
                <div
                  className="absolute overflow-hidden rounded-full hidden lg:block"
                  style={{
                    width: '480px',
                    height: '480px',
                    right: '50px',
                    top: '75%',
                    transform: 'translate(30%, -50%)',
                    zIndex: 10,
                  }}
                >
                  <Image
                    src="/pump valves/15cd7775e4d8fb27fc888fa94f91435551f8ef4e.png"
                    alt="Industrial materials"
                    fill
                    className="object-cover"
                    sizes="(max-width: 1024px) 0px, 480px"
                  />
                </div>
                
                {/* Mobile Image */}
                <div className="lg:hidden relative h-full w-full flex items-center justify-center pr-4">
                  <div className="relative w-48 h-48 sm:w-64 sm:h-64 md:w-72 md:h-72 overflow-hidden rounded-full">
                    <Image
                      src="/pump valves/15cd7775e4d8fb27fc888fa94f91435551f8ef4e.png"
                      alt="Industrial materials"
                      fill
                      className="object-cover"
                      sizes="(max-width: 640px) 192px, (max-width: 768px) 256px, 288px"
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}