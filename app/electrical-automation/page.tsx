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
              src="/services/20bd995ce97da45762dc014a4aa20583153cd9d2.jpg"
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

      {/* Powering Industry Heading */}
      <section className="pt-8 pb-12 bg-gradient-to-b from-white via-gray-50 to-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="flex flex-col items-start text-left">
            <div className="h-1 w-12 bg-gradient-to-r from-red-500 to-red-600 mb-6 rounded-full" />
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-4 max-w-4xl text-gray-900">
              <span className="text-gray-900">Powering</span>{' '}
              <span className="text-red-600">Industry</span>,
              <br />
              <span className="text-gray-900">Automating</span>{' '}
              <span className="text-red-600">Progress</span>
            </h2>
          </div>
        </div>
      </section>

      {/* Power Distribution Systems */}
      <section className="py-12 bg-gradient-to-b from-white to-gray-50">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            {/* Left - Text Content */}
            <div className="relative z-10">
              <h3 className="text-xs font-semibold tracking-[0.3em] uppercase text-gray-500 mb-3">
                Power Distribution Systems
              </h3>
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6 leading-tight">
                Reliable medium- and low-voltage distribution
              </h2>
              <p className="text-gray-700 text-lg leading-relaxed mb-8">
                We design and supply power distribution solutions that keep your critical loads running safely and efficiently. From main distribution boards and motor control centres to intelligent protection and metering, our systems are built to international standards and adapted for demanding African conditions.
              </p>

              <div className="space-y-5 mb-10 text-sm md:text-base">
                <div>
                  <span className="font-bold text-gray-900">Application:</span>{' '}
                  <span className="text-gray-700">Plant-wide power distribution, MCCs, substations, and critical feeder protection.</span>
                </div>
                <div>
                  <span className="font-bold text-gray-900">Industry:</span>{' '}
                  <span className="text-gray-700">Mining, Cement, Manufacturing, Infrastructure</span>
                </div>
                <div>
                  <span className="font-bold text-gray-900">Partner:</span>{' '}
                  <span className="text-gray-700">Global switchgear and panel OEMs</span>
                </div>
              </div>

              {/* Button - Opens modal */}
              <button
                onClick={openModal}
                className="inline-flex items-center bg-red-700 text-white pl-7 pr-3 py-3 rounded-full font-semibold text-sm md:text-base shadow-lg hover:bg-red-800 transition-all duration-300"
              >
                <span className="mr-4">Request Power Design Audit</span>
                <span className="flex items-center justify-center w-8 h-8 rounded-full bg-white text-red-700">
                  <ArrowUpRight className="w-4 h-4" />
                </span>
              </button>
            </div>

            {/* Right - Image Collage */}
            <div className="relative h-[500px]">
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="relative w-full h-full">
                  <div className="absolute top-0 right-0 w-3/4 h-3/4 rounded-3xl overflow-hidden shadow-2xl z-10 ring-4 ring-white/50 backdrop-blur-sm">
                    <div className="absolute inset-0 bg-gradient-to-br from-red-500/10 to-transparent z-10" />
                    <Image
                      src="/services/7d4c7ecc2e053cf86bf68453f0cd980956140c85.png"
                      alt="Power Distribution Systems"
                      fill
                      className="object-cover rounded-3xl"
                    />
                  </div>
                  <div className="absolute bottom-0 left-0 w-2/3 h-2/3 rounded-3xl overflow-hidden shadow-xl z-0 opacity-80 ring-2 ring-gray-200/50">
                    <Image
                      src="/pump valves/648110be263b8c0584aed1834ea5a08d85f08459.png"
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
                    <div className="absolute inset-0 bg-gradient-to-br from-blue-500/10 to-transparent z-10" />
                    <Image
                      src="/services/a43c910289ca712b041b716aa5114f6541951727.png"
                      alt="Industrial Automation & Control"
                      fill
                      className="object-cover rounded-3xl"
                    />
                  </div>
                  <div className="absolute bottom-0 left-0 w-2/3 h-2/3 rounded-3xl overflow-hidden shadow-xl z-0 opacity-80 ring-2 ring-gray-200/50">
                    <Image
                      src="/services/612a740ded6fbd86e6ece35e120597e8abca18a7.jpg"
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
              <div className="h-1 w-12 bg-red-600 mb-6" />
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6 leading-tight">
                Industrial Automation & Control
              </h2>
              <p className="text-gray-700 text-lg leading-relaxed mb-8">
                Our automation engineers deliver control solutions that standardize, visualize, and optimize your plant. From PLC and SCADA upgrades to full DCS architectures, we integrate field devices, networks, and control rooms into a single, cyber-secure environment with real-time diagnostics and reporting.
              </p>

              <div className="space-y-5 mb-10 text-sm md:text-base">
                <div>
                  <span className="font-bold text-gray-900">Application:</span>{' '}
                  <span className="text-gray-700">Process automation, batching, sequence control, and central operations monitoring.</span>
                </div>
                <div>
                  <span className="font-bold text-gray-900">Industry:</span>{' '}
                  <span className="text-gray-700">Mining, Food & Beverage, Milling, Cement, Processing</span>
                </div>
                <div>
                  <span className="font-bold text-gray-900">Partner:</span>{' '}
                  <span className="text-gray-700">Global automation brands</span>
                </div>
              </div>

              {/* Button - Opens modal */}
              <button
                onClick={openModal}
                className="inline-flex items-center bg-red-700 text-white pl-7 pr-3 py-3 rounded-full font-semibold text-sm md:text-base shadow-lg hover:bg-red-800 transition-all duration-300"
              >
                <span className="mr-4">Get Automation Consultation</span>
                <span className="flex items-center justify-center w-8 h-8 rounded-full bg-white text-red-700">
                  <ArrowUpRight className="w-4 h-4" />
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
              <div className="h-1 w-12 bg-gradient-to-r from-red-500 to-red-600 mb-6 rounded-full" />
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6 leading-tight">
                Power Generation Systems
              </h2>
              <p className="text-gray-700 text-lg leading-relaxed mb-8">
                We support your on-site power strategy with diesel and gas generator solutions, synchronisation panels, and load management schemes. Our team engineers systems that balance reliability, fuel efficiency, and lifecycle cost while integrating with your existing distribution network.
              </p>

              <div className="space-y-5 mb-10 text-sm md:text-base">
                <div>
                  <span className="font-bold text-gray-900">Application:</span>{' '}
                  <span className="text-gray-700">Standby and prime power for critical industrial applications.</span>
                </div>
                <div>
                  <span className="font-bold text-gray-900">Industry:</span>{' '}
                  <span className="text-gray-700">Mining, Data Centres, Manufacturing, Utilities</span>
                </div>
                <div>
                  <span className="font-bold text-gray-900">Partner:</span>{' '}
                  <span className="text-gray-700">OEM generator and engine manufacturers</span>
                </div>
              </div>

              {/* Button - Opens modal */}
              <button
                onClick={openModal}
                className="inline-flex items-center bg-red-700 text-white pl-7 pr-3 py-3 rounded-full font-semibold text-sm md:text-base shadow-lg hover:bg-red-800 transition-all duration-300"
              >
                <span className="mr-4">Request Power Strategy Review</span>
                <span className="flex items-center justify-center w-8 h-8 rounded-full bg-white text-red-700">
                  <ArrowUpRight className="w-4 h-4" />
                </span>
              </button>
            </div>

            {/* Right - Image Collage */}
            <div className="relative h-[500px]">
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="relative w-full h-full">
                  <div className="absolute bottom-0 right-0 w-3/4 h-3/4 rounded-3xl overflow-hidden shadow-2xl z-10 ring-4 ring-white/50 backdrop-blur-sm">
                    <div className="absolute inset-0 bg-gradient-to-br from-emerald-500/10 to-transparent z-10" />
                    <Image
                      src="/pump valves/fe5ca0868dfd03b5410bb75eb2f933f82114701b.jpg"
                      alt="Power Generation Systems"
                      fill
                      className="object-cover rounded-3xl"
                    />
                  </div>
                  <div className="absolute top-0 left-0 w-2/3 h-2/3 rounded-3xl overflow-hidden shadow-xl z-0 opacity-80 ring-2 ring-gray-200/50">
                    <Image
                      src="/services/20bd995ce97da45762dc014a4aa20583153cd9d2.jpg"
                      alt="Generator installation"
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
                    <div className="absolute inset-0 bg-gradient-to-br from-sky-500/10 to-transparent z-10" />
                    <Image
                      src="/pump valves/24a138b6cb99fc94b627640dd6c9c962a702ac52.png"
                      alt="Process Control Instruments"
                      fill
                      className="object-cover rounded-3xl"
                    />
                  </div>
                  <div className="absolute bottom-0 left-0 w-2/3 h-2/3 rounded-3xl overflow-hidden shadow-xl z-0 opacity-80 ring-2 ring-gray-200/50">
                    <Image
                      src="/pump valves/15cd7775e4d8fb27fc888fa94f91435551f8ef4e.png"
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
              <div className="h-1 w-12 bg-red-600 mb-6" />
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6 leading-tight">
                Process Control Instruments
              </h2>
              <p className="text-gray-700 text-lg leading-relaxed mb-8">
                Accurate, reliable measurements are the backbone of safe and efficient production. We supply and integrate field instruments for flow, pressure, level, temperature, and analytical parameters, all networked back to your control system with smart diagnostics and asset management.
              </p>

              <div className="space-y-5 mb-10 text-sm md:text-base">
                <div>
                  <span className="font-bold text-gray-900">Application:</span>{' '}
                  <span className="text-gray-700">Continuous and batch process monitoring and control.</span>
                </div>
                <div>
                  <span className="font-bold text-gray-900">Industry:</span>{' '}
                  <span className="text-gray-700">Oil & Gas, Chemical, Food & Beverage, Water Treatment</span>
                </div>
                <div>
                  <span className="font-bold text-gray-900">Partner:</span>{' '}
                  <span className="text-gray-700">Instrumentation OEMs and specialist suppliers</span>
                </div>
              </div>

              {/* Button - Opens modal */}
              <button
                onClick={openModal}
                className="inline-flex items-center bg-red-700 text-white pl-7 pr-3 py-3 rounded-full font-semibold text-sm md:text-base shadow-lg hover:bg-red-800 transition-all duration-300"
              >
                <span className="mr-4">View Instrument Catalog</span>
                <span className="flex items-center justify-center w-8 h-8 rounded-full bg-white text-red-700">
                  <ArrowUpRight className="w-4 h-4" />
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
              <div className="h-1 w-12 bg-gradient-to-r from-red-500 to-red-600 mb-6 rounded-full" />
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6 leading-tight">
                Solar Power Systems
              </h2>
              <p className="text-gray-700 text-lg leading-relaxed mb-8">
                We help you integrate renewable energy into your power mix with industrial-grade solar PV and hybrid solutions. From feasibility studies and energy modelling to EPC delivery and long-term O&amp;M, we design systems that lower operating costs while maintaining reliability.
              </p>

              <div className="space-y-5 mb-10 text-sm md:text-base">
                <div>
                  <span className="font-bold text-gray-900">Application:</span>{' '}
                  <span className="text-gray-700">Utility-scale and behind-the-meter solar, hybrid microgrids, and battery storage.</span>
                </div>
                <div>
                  <span className="font-bold text-gray-900">Industry:</span>{' '}
                  <span className="text-gray-700">Mining, Industrial Estates, Commercial Facilities</span>
                </div>
                <div>
                  <span className="font-bold text-gray-900">Partner:</span>{' '}
                  <span className="text-gray-700">Solar module, inverter, and EPC partners</span>
                </div>
              </div>

              {/* Button - Opens modal */}
              <button
                onClick={openModal}
                className="inline-flex items-center bg-red-700 text-white pl-7 pr-3 py-3 rounded-full font-semibold text-sm md:text-base shadow-lg hover:bg-red-800 transition-all duration-300"
              >
                <span className="mr-4">Request Solar Assessment</span>
                <span className="flex items-center justify-center w-8 h-8 rounded-full bg-white text-red-700">
                  <ArrowUpRight className="w-4 h-4" />
                </span>
              </button>
            </div>

            {/* Right - Image Collage */}
            <div className="relative h-[500px]">
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="relative w-full h-full">
                  <div className="absolute bottom-0 right-0 w-3/4 h-3/4 rounded-3xl overflow-hidden shadow-2xl z-10 ring-4 ring-white/50 backdrop-blur-sm">
                    <div className="absolute inset-0 bg-gradient-to-br from-yellow-400/10 to-transparent z-10" />
                    <Image
                      src="/images/4089179871ecc9d61a665d6868f0020a2945d550.jpg"
                      alt="Solar Power Systems"
                      fill
                      className="object-cover rounded-3xl"
                    />
                  </div>
                  <div className="absolute top-0 left-0 w-2/3 h-2/3 rounded-3xl overflow-hidden shadow-xl z-0 opacity-80 ring-2 ring-gray-200/50">
                    <Image
                      src="/services/4089179871ecc9d61a665d6868f0020a2945d550.jpg"
                      alt="Solar field and turbines"
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
                    src="/pump valves/fe5ca0868dfd03b5410bb75eb2f933f82114701b.jpg"
                    alt="Electrical and power systems"
                    fill
                    className="object-cover"
                    sizes="(max-width: 1024px) 0px, 480px"
                  />
                </div>
                
                {/* Mobile Image - Simpler design */}
                <div className="lg:hidden relative h-full w-full flex items-center justify-center pr-4">
                  <div className="relative w-48 h-48 sm:w-64 sm:h-64 md:w-72 md:h-72 overflow-hidden rounded-full">
                    <Image
                      src="/pump valves/fe5ca0868dfd03b5410bb75eb2f933f82114701b.jpg"
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