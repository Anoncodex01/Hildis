'use client';

import { useState } from 'react';
import Header from '@/components/Header';
import Image from 'next/image';
import { ArrowRight, ArrowUpRight } from 'lucide-react';
import Footer from '@/components/Footer';
import ContactModal from '@/components/ContactModal';

export default function ElectricalAutomationPage() {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const openModal = () => setIsModalOpen(true);
  const closeModal = () => setIsModalOpen(false);

  return (
    <div className="min-h-screen bg-white">
      <Header />
      
      {/* Contact Modal */}
      <ContactModal isOpen={isModalOpen} onClose={closeModal} />

      {/* Hero Section with Title - Removed top padding */}
      <section className="relative">
        <div className="px-6">
          <div
            className="relative overflow-hidden mx-auto"
            style={{
              width: '1344px',
              maxWidth: '100%',
              height: '425px',
              borderRadius: '20px',
              minHeight: '425px',
            }}
          >
            <Image
              src="/electrical/hero.png"
              alt="Electrical & Automation Solutions"
              fill
              className="object-cover"
              priority
            />
            <div
              className="absolute inset-0"
              style={{ backgroundColor: 'rgba(0, 0, 0, 0.55)' }}
            ></div>

            <div className="absolute inset-0 flex flex-col justify-center items-center text-center px-6 z-10">
              {/* Breadcrumb */}
              <div className="text-white text-sm mb-8">
                <span className="opacity-80">Home</span>
                <ArrowRight className="w-4 h-4 inline mx-2" />
                <span className="text-red-600 font-semibold">Electrical & Automation Solutions</span>
              </div>

              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6 leading-tight">
                Electrical & Automation Solutions
              </h1>
              <p className="text-white text-lg md:text-xl max-w-3xl leading-relaxed opacity-90">
                Power distribution, control systems, and energy management from global technology leaders.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Powering Industry & Power Distribution Systems */}
      <section className="py-12 bg-gradient-to-b from-white to-gray-50">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            {/* Left - Text Content */}
            <div className="relative z-10">
              <div className="h-1 w-12 bg-[#BB181B] mb-6" />
              <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6 leading-tight">
                Powering Industry, <span className="text-[#BB181B]">Automating Progress</span>
              </h2>
              <div className="h-1 w-12 bg-[#BB181B] mb-6" />
              <h3 className="text-2xl md:text-3xl font-bold text-gray-900 mb-6 leading-tight">
                Power Distribution Systems
              </h3>
              <p className="text-gray-700 text-lg leading-relaxed mb-8">
                We provide end-to-end power distribution solutions that form the backbone of your industrial electrical infrastructure. Our systems include low and medium voltage switchgear, circuit breakers, and protection devices meticulously engineered to ensure a stable, safe, and efficient flow of electricity throughout your facility. From initial design and component selection to installation and compliance testing, we guarantee a robust system that minimizes downtime, enhances safety, and is scalable for your future expansion needs.
              </p>

              <div className="space-y-5 mb-10 text-sm md:text-base">
                <div>
                  <span className="font-bold text-gray-900">Application:</span>{' '}
                  <span className="text-gray-700">Main electrical infrastructure and safe power distribution.</span>
                </div>
                <div>
                  <span className="font-bold text-gray-900">Industry:</span>{' '}
                  <span className="text-gray-700">Manufacturing, Mining, Commercial Buildings, Infrastructure</span>
                </div>
                <div>
                  <span className="font-bold text-gray-900">Partner:</span>{' '}
                  <span className="text-gray-700">Schneider Electric, Siemens</span>
                </div>
              </div>

              <button
                onClick={openModal}
                className="inline-flex items-center bg-[#BB181B] text-white pl-7 pr-3 py-3 rounded-full font-semibold text-sm md:text-base hover:opacity-90 transition-all duration-300"
              >
                <span className="mr-4">Request Power Audit</span>
                <span className="flex items-center justify-center w-8 h-8 rounded-full bg-white">
                  <ArrowUpRight className="w-4 h-4 text-[#BB181B]" strokeWidth={2.5} />
                </span>
              </button>
            </div>

            {/* Right - Image Collage */}
            <div className="relative h-[500px]">
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="relative w-full h-full">
                  <div className="absolute top-0 right-0 w-3/4 h-3/4 rounded-3xl overflow-hidden shadow-2xl z-10 ring-4 ring-white/50 backdrop-blur-sm">
                    <Image
                      src="/electrical/Rectangle%2051.png"
                      alt="Power Distribution Systems"
                      fill
                      className="object-cover rounded-3xl"
                    />
                  </div>
                  <div className="absolute bottom-0 left-0 w-2/3 h-2/3 rounded-3xl overflow-hidden shadow-xl z-0 opacity-80 ring-2 ring-gray-200/50">
                    <Image
                      src="/electrical/Rectangle%2052.png"
                      alt="Switchgear and panels"
                      fill
                      className="object-cover rounded-3xl"
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Industrial Automation & Control */}
      <section className="py-12 bg-gradient-to-b from-gray-50 to-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            {/* Left - Image Collage */}
            <div className="relative h-[500px] order-2 lg:order-1">
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="relative w-full h-full">
                  <div className="absolute top-0 right-0 w-3/4 h-3/4 rounded-3xl overflow-hidden shadow-2xl z-10 ring-4 ring-white/50 backdrop-blur-sm">
                    <Image
                      src="/electrical/Rectangle%2054.png"
                      alt="Industrial Automation & Control"
                      fill
                      className="object-cover rounded-3xl"
                    />
                  </div>
                  <div className="absolute bottom-0 left-0 w-2/3 h-2/3 rounded-3xl overflow-hidden shadow-xl z-0 opacity-80 ring-2 ring-gray-200/50">
                    <Image
                      src="/electrical/Rectangle%2053.png"
                      alt="Control room interfaces"
                      fill
                      className="object-cover rounded-3xl"
                    />
                  </div>
                </div>
              </div>
            </div>

            {/* Right - Text Content */}
            <div className="order-1 lg:order-2 relative z-10">
              <div className="h-1 w-12 bg-[#BB181B] mb-6" />
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6 leading-tight">
                Industrial Automation &amp; Control
              </h2>
              <p className="text-gray-700 text-lg leading-relaxed mb-8">
                Our comprehensive automation and control solutions seamlessly integrate PLCs, SCADA, and Distributed Control Systems (DCS) to bring intelligent operation to your plant. We handle the full lifecycle, from designing the control strategy and programming the logic to installing hardware and commissioning the entire system. This holistic approach transforms your production lines, enabling precise control, real-time visibility into every process, predictive maintenance, and significant improvements in overall equipment effectiveness (OEE) and product quality.
              </p>

              <div className="space-y-5 mb-10 text-sm md:text-base">
                <div>
                  <span className="font-bold text-gray-900">Application:</span>{' '}
                  <span className="text-gray-700">Automating production processes and centralised monitoring.</span>
                </div>
                <div>
                  <span className="font-bold text-gray-900">Industry:</span>{' '}
                  <span className="text-gray-700">Manufacturing, Food &amp; Beverage, Mining, Chemical Processing</span>
                </div>
                <div>
                  <span className="font-bold text-gray-900">Partner:</span>{' '}
                  <span className="text-gray-700">ABB, Siemens, Schneider Electric</span>
                </div>
              </div>

              <button
                onClick={openModal}
                className="inline-flex items-center bg-[#BB181B] text-white pl-7 pr-3 py-3 rounded-full font-semibold text-sm md:text-base hover:opacity-90 transition-all duration-300"
              >
                <span className="mr-4">Get Automation Consultation</span>
                <span className="flex items-center justify-center w-8 h-8 rounded-full bg-white">
                  <ArrowUpRight className="w-4 h-4 text-[#BB181B]" strokeWidth={2.5} />
                </span>
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Power Generation Systems */}
      <section className="py-12 bg-gradient-to-b from-white to-gray-50">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            {/* Left - Text Content */}
            <div className="relative z-10">
              <div className="h-1 w-12 bg-[#BB181B] mb-6" />
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6 leading-tight">
                Power Generation Systems
              </h2>
              <p className="text-gray-700 text-lg leading-relaxed mb-8">
                We deliver complete power generation systems including assessment of power needs, selection of Cummins generator sets, installation, fuel systems, automatic transfer switches, and load bank testing to ensure operational continuity during grid outages.
              </p>

              <div className="space-y-5 mb-10 text-sm md:text-base">
                <div>
                  <span className="font-bold text-gray-900">Application:</span>{' '}
                  <span className="text-gray-700">Backup and prime power for critical infrastructure.</span>
                </div>
                <div>
                  <span className="font-bold text-gray-900">Industry:</span>{' '}
                  <span className="text-gray-700">Mining, Healthcare, Data Centers, Manufacturing</span>
                </div>
                <div>
                  <span className="font-bold text-gray-900">Partner:</span>{' '}
                  <span className="text-gray-700">Cummins</span>
                </div>
              </div>

              <button
                onClick={openModal}
                className="inline-flex items-center bg-[#BB181B] text-white pl-7 pr-3 py-3 rounded-full font-semibold text-sm md:text-base hover:opacity-90 transition-all duration-300"
              >
                <span className="mr-4">Request Power Assessment</span>
                <span className="flex items-center justify-center w-8 h-8 rounded-full bg-white">
                  <ArrowUpRight className="w-4 h-4 text-[#BB181B]" strokeWidth={2.5} />
                </span>
              </button>
            </div>

            {/* Right - Image Collage */}
            <div className="relative h-[500px]">
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="relative w-full h-full">
                  <div className="absolute bottom-0 right-0 w-3/4 h-3/4 rounded-3xl overflow-hidden shadow-2xl z-10 ring-4 ring-white/50 backdrop-blur-sm">
                    <Image
                      src="/electrical/Rectangle%2052-1.png"
                      alt="Power Generation Systems"
                      fill
                      className="object-cover rounded-3xl"
                    />
                  </div>
                  <div className="absolute top-0 left-0 w-2/3 h-2/3 rounded-3xl overflow-hidden shadow-xl z-0 opacity-80 ring-2 ring-gray-200/50">
                    <Image
                      src="/electrical/Rectangle%2051-1.png"
                      alt="Cummins generator"
                      fill
                      className="object-cover rounded-3xl"
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Process Control Instruments */}
      <section className="py-12 bg-gradient-to-b from-gray-50 to-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            {/* Left - Image Collage */}
            <div className="relative h-[500px] order-2 lg:order-1">
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="relative w-full h-full">
                  <div className="absolute top-0 right-0 w-3/4 h-3/4 rounded-3xl overflow-hidden shadow-2xl z-10 ring-4 ring-white/50 backdrop-blur-sm">
                    <Image
                      src="/electrical/Rectangle%2053-1.png"
                      alt="Process Control Instruments"
                      fill
                      className="object-cover rounded-3xl"
                    />
                  </div>
                  <div className="absolute bottom-0 left-0 w-2/3 h-2/3 rounded-3xl overflow-hidden shadow-xl z-0 opacity-80 ring-2 ring-gray-200/50">
                    <Image
                      src="/electrical/Rectangle%2051-2.png"
                      alt="Instrumentation valves and transmitters"
                      fill
                      className="object-cover rounded-3xl"
                    />
                  </div>
                </div>
              </div>
            </div>

            {/* Right - Text Content */}
            <div className="order-1 lg:order-2 relative z-10">
              <div className="h-1 w-12 bg-[#BB181B] mb-6" />
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6 leading-tight">
                Process Control Instruments
              </h2>
              <p className="text-gray-700 text-lg leading-relaxed mb-8">
                We supply and integrate high-precision instruments that act as the nervous system for your plant, providing the critical data needed for optimal control. Our range includes sensors, transmitters, and analyzers for measuring pressure, temperature, flow, and level. Our technicians ensure these instruments are correctly specified, installed, and calibrated to deliver accurate, reliable data to your control systems, enabling you to maintain strict quality standards, improve process efficiency, and ensure operational safety.
              </p>

              <div className="space-y-5 mb-10 text-sm md:text-base">
                <div>
                  <span className="font-bold text-gray-900">Application:</span>{' '}
                  <span className="text-gray-700">Monitoring and controlling key process parameters.</span>
                </div>
                <div>
                  <span className="font-bold text-gray-900">Industry:</span>{' '}
                  <span className="text-gray-700">Oil &amp; Gas, Chemical, Pharmaceutical, Water Treatment</span>
                </div>
                <div>
                  <span className="font-bold text-gray-900">Partner:</span>{' '}
                  <span className="text-gray-700">ABB, Siemens</span>
                </div>
              </div>

              <button
                onClick={openModal}
                className="inline-flex items-center bg-[#BB181B] text-white pl-7 pr-3 py-3 rounded-full font-semibold text-sm md:text-base hover:opacity-90 transition-all duration-300"
              >
                <span className="mr-4">View Instrument Catalog</span>
                <span className="flex items-center justify-center w-8 h-8 rounded-full bg-white">
                  <ArrowUpRight className="w-4 h-4 text-[#BB181B]" strokeWidth={2.5} />
                </span>
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Solar Power Systems */}
      <section className="py-12 bg-gradient-to-b from-white to-gray-50 pb-16">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            {/* Left - Text Content */}
            <div className="relative z-10">
              <div className="h-1 w-12 bg-[#BB181B] mb-6" />
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6 leading-tight">
                Solar Power Systems
              </h2>
              <p className="text-gray-700 text-lg leading-relaxed mb-8">
                We engineer and commission comprehensive solar power systems designed specifically for the demanding energy needs of industrial operations. Our team manages the entire process from initial site assessment and system design to the supply of high-efficiency photovoltaic panels, inverters, and mounting structures, culminating in professional installation and grid integration. This turnkey solution significantly reduces your reliance on the grid, cuts long-term electricity costs, and provides a predictable, sustainable power source that enhances your operational resilience and environmental stewardship.
              </p>

              <div className="space-y-5 mb-10 text-sm md:text-base">
                <div>
                  <span className="font-bold text-gray-900">Application:</span>{' '}
                  <span className="text-gray-700">On-site renewable power generation for facilities, mines, and remote operations.</span>
                </div>
                <div>
                  <span className="font-bold text-gray-900">Industry:</span>{' '}
                  <span className="text-gray-700">Mining, Manufacturing, Agriculture, Commercial</span>
                </div>
                <div>
                  <span className="font-bold text-gray-900">Partner:</span>{' '}
                  <span className="text-gray-700">Schneider Electric, Siemens (Energy Management)</span>
                </div>
              </div>

              <button
                onClick={openModal}
                className="inline-flex items-center bg-[#BB181B] text-white pl-7 pr-3 py-3 rounded-full font-semibold text-sm md:text-base hover:opacity-90 transition-all duration-300"
              >
                <span className="mr-4">Request Solar Assessment</span>
                <span className="flex items-center justify-center w-8 h-8 rounded-full bg-white">
                  <ArrowUpRight className="w-4 h-4 text-[#BB181B]" strokeWidth={2.5} />
                </span>
              </button>
            </div>

            {/* Right - Image Collage */}
            <div className="relative h-[500px] overflow-hidden">
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="relative w-full h-full max-w-full max-h-full">
                  <div className="absolute top-0 right-0 w-3/4 h-3/4 rounded-3xl overflow-hidden shadow-2xl z-10 ring-4 ring-white/50 backdrop-blur-sm">
                    <Image
                      src="/electrical/Rectangle%2052-2.png"
                      alt="Solar field and turbines"
                      fill
                      className="object-cover rounded-3xl"
                    />
                  </div>
                  <div className="absolute bottom-0 left-0 w-2/3 h-2/3 rounded-3xl overflow-hidden shadow-xl z-0 opacity-80 ring-2 ring-gray-200/50">
                    <Image
                      src="/electrical/Rectangle%2051-2.png"
                      alt="Solar Power Systems"
                      fill
                      className="object-cover rounded-3xl"
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Custom CTA Banner Section with modal functionality */}
      <section className="py-12 sm:py-16 md:py-20 bg-white relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div
            className="relative bg-[#BB181B] rounded-[40px] overflow-hidden mx-auto"
            style={{
              width: '100%',
              maxWidth: '1336px',
              height: '350px',
            }}
          >
            <div className="grid lg:grid-cols-[45%_55%] items-center relative h-full">
              {/* LEFT SIDE CONTENT */}
              <div className="text-white z-20 p-6 sm:p-8 lg:p-12 h-full flex flex-col justify-center">
                <h2 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-bold mb-4 sm:mb-6 leading-tight">
                  Ready to strengthen your operations?
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

              {/* RIGHT SIDE - Ellipse image */}
              <div className="relative h-full flex items-center justify-end">
                <div
                  className="absolute overflow-hidden hidden lg:block"
                  style={{
                    width: '420px',
                    height: '420px',
                    right: '40px',
                    top: '50%',
                    transform: 'translateY(-50%)',
                    zIndex: 10,
                    borderRadius: '50%',
                  }}
                >
                  <Image
                    src="/electrical/Ellipse%2010.png"
                    alt="Electrical and power systems"
                    fill
                    className="object-cover"
                    sizes="(max-width: 1024px) 0px, 420px"
                  />
                </div>
                
                {/* Mobile */}
                <div className="lg:hidden relative h-full w-full flex items-center justify-center pr-4">
                  <div className="relative w-48 h-48 sm:w-64 sm:h-64 md:w-72 md:h-72 overflow-hidden rounded-full">
                    <Image
                      src="/electrical/Ellipse%2010.png"
                      alt="Electrical and power systems"
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