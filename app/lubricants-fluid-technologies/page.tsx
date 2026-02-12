'use client';

import { useState } from 'react';
import Header from '@/components/Header';
import Image from 'next/image';
import { ArrowRight, ArrowUpRight } from 'lucide-react';
import Footer from '@/components/Footer';
import ContactModal from '@/components/ContactModal';
import ClientLogos from '@/components/ClientLogos';

export default function LubricantsFluidTechnologiesPage() {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const openModal = () => setIsModalOpen(true);
  const closeModal = () => setIsModalOpen(false);

  return (
    <div className="min-h-screen bg-white">
      <Header />
      
      {/* Contact Modal */}
      <ContactModal isOpen={isModalOpen} onClose={closeModal} />

      {/* Hero Section - Removed top padding */}
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
              src="/lubricants/hero-barrels.jpg"
              alt="Lubricants & Fluid Technologies"
              fill
              className="object-cover"
              priority
            />
            <div
              className="absolute inset-0"
              style={{ backgroundColor: 'rgba(0, 0, 0, 0.55)' }}
            ></div>

            <div className="absolute inset-0 flex flex-col justify-center items-center text-center px-6 z-10">
              <div className="text-white text-sm mb-8">
                <span className="opacity-80">Home</span>
                <ArrowRight className="w-4 h-4 inline mx-2" />
                <span className="text-red-600 font-semibold">Lubricants & Fluid Technologies</span>
              </div>

              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6 leading-tight">
                Lubricants & Fluid Technologies
              </h1>
              <p className="text-white text-lg md:text-xl max-w-3xl leading-relaxed opacity-90">
                Engineered for extreme performance in Africa&apos;s toughest industrial environments.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Main Message Section */}
      <section className="py-12 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-left">
            <div className="h-1 w-12 bg-[#BB181B] mb-4" />
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 leading-tight">
              <span className="text-gray-900">Maximize Uptime,</span>{' '}
              <span className="text-[#BB181B]">Minimize Wear,</span>
              <br />
              <span className="text-[#BB181B]">Optimize Performance</span>
            </h2>
          </div>
        </div>
      </section>

      {/* Mining Lubricants Section */}
      <section className="py-12 bg-gradient-to-b from-white to-gray-50">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            {/* Left - Text Content */}
            <div className="relative z-10">
              <div className="h-1 w-12 bg-gradient-to-r from-red-500 to-red-600 mb-6 rounded-full" />
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6 leading-tight">
                Mining Lubricants
              </h2>
              <p className="text-gray-700 text-lg leading-relaxed mb-8">
                Specialized lubricants engineered for high pressure, high temperature, and contamination resistance in mining operations. Our TotalEnergies range protects critical components in excavators, haul trucks, and processing equipment, reducing unplanned downtime and extending service intervals.
              </p>

              <div className="space-y-5 mb-10 text-sm md:text-base">
                <div>
                  <span className="font-bold text-gray-900">Application:</span>{' '}
                  <span className="text-gray-700">Open pit and underground mining equipment maintenance.</span>
                </div>
                <div>
                  <span className="font-bold text-gray-900">Industry:</span>{' '}
                  <span className="text-gray-700">Coal, Copper, Gold, and Mineral Mining</span>
                </div>
                <div>
                  <span className="font-bold text-gray-900">Partner:</span>{' '}
                  <span className="text-gray-700">TotalEnergies</span>
                </div>
              </div>

              {/* Button - Opens modal */}
              <button
                onClick={openModal}
                className="inline-flex items-center bg-red-700 text-white pl-7 pr-3 py-3 rounded-full font-semibold text-sm md:text-base shadow-lg hover:bg-red-800 transition-all duration-300"
              >
                <span className="mr-4">Get Mining Lubrication Guide</span>
                <span className="flex items-center justify-center w-8 h-8 rounded-full bg-white text-red-700">
                  <ArrowUpRight className="w-4 h-4" />
                </span>
              </button>
            </div>

            {/* Right - Image */}
            <div className="relative h-[500px]">
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="relative w-full h-full">
                  <div className="absolute top-0 right-0 w-3/4 h-3/4 rounded-3xl overflow-hidden shadow-2xl z-10 ring-4 ring-white/50 backdrop-blur-sm">
                    <div className="absolute inset-0 bg-gradient-to-br from-yellow-500/10 to-transparent z-10" />
                    <Image
                      src="/lubricants/48416e2d576adc970759d378303cb16bd1867aa5.png"
                      alt="Mining Lubricants"
                      fill
                      className="object-cover rounded-3xl"
                    />
                  </div>
                  <div className="absolute bottom-0 left-0 w-2/3 h-2/3 rounded-3xl overflow-hidden shadow-xl z-0 opacity-80 ring-2 ring-gray-200/50">
                    <Image
                      src="/lubricants/f0d1e5e76afd1796fc5b2372980a6b9b833d0ec2.png"
                      alt="TotalEnergies barrels"
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

      {/* Industrial Lubricants Section */}
      <section className="py-12 bg-gradient-to-b from-gray-50 to-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            {/* Left - Image */}
            <div className="relative h-[500px] order-2 lg:order-1">
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="relative w-full h-full">
                  <div className="absolute top-0 right-0 w-3/4 h-3/4 rounded-3xl overflow-hidden shadow-2xl z-10 ring-4 ring-white/50 backdrop-blur-sm">
                    <div className="absolute inset-0 bg-gradient-to-br from-amber-500/10 to-transparent z-10" />
                    <Image
                      src="/lubricants/c82a18af2fb9962354ba58e6d70fd2ba3d0444d4.jpg"
                      alt="Industrial Lubricants"
                      fill
                      className="object-cover rounded-3xl"
                    />
                  </div>
                  <div className="absolute bottom-0 left-0 w-2/3 h-2/3 rounded-3xl overflow-hidden shadow-xl z-0 opacity-80 ring-2 ring-gray-200/50">
                    <Image
                      src="/lubricants/3636dba54df19311f0a01961b204cc8fc2e5d794.jpg"
                      alt="Lubricant application"
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
                Industrial Lubricants
              </h2>
              <p className="text-gray-700 text-lg leading-relaxed mb-8">
                Comprehensive lubrication solutions for manufacturing, aggregates, cement, food, and sugar mills. Our TotalEnergies industrial range covers gear oils, hydraulic fluids, and specialized greases designed for various industrial applications and processes.
              </p>

              <div className="space-y-5 mb-10 text-sm md:text-base">
                <div>
                  <span className="font-bold text-gray-900">Application:</span>{' '}
                  <span className="text-gray-700">Various industrial applications and processes.</span>
                </div>
                <div>
                  <span className="font-bold text-gray-900">Industry:</span>{' '}
                  <span className="text-gray-700">Cement, Sugar, Manufacturing, Food & Beverage</span>
                </div>
                <div>
                  <span className="font-bold text-gray-900">Partner:</span>{' '}
                  <span className="text-gray-700">TotalEnergies</span>
                </div>
              </div>

              {/* Button - Opens modal */}
              <button
                onClick={openModal}
                className="inline-flex items-center bg-red-700 text-white pl-7 pr-3 py-3 rounded-full font-semibold text-sm md:text-base shadow-lg hover:bg-red-800 transition-all duration-300"
              >
                <span className="mr-4">Request Plant Assessment</span>
                <span className="flex items-center justify-center w-8 h-8 rounded-full bg-white text-red-700">
                  <ArrowUpRight className="w-4 h-4" />
                </span>
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Automotive & Fleet Lubricants Section */}
      <section className="py-12 bg-gradient-to-b from-white to-gray-50">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            {/* Left - Text Content */}
            <div className="relative z-10">
              <div className="h-1 w-12 bg-gradient-to-r from-red-500 to-red-600 mb-6 rounded-full" />
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6 leading-tight">
                Automotive & Fleet Lubricants
              </h2>
              <p className="text-gray-700 text-lg leading-relaxed mb-8">
                High-performance engine oils, transmission fluids, and greases for commercial fleets, heavy transport, and construction vehicles. TotalEnergies automotive lubricants offer superior protection, improved fuel economy, and extended drain intervals.
              </p>

              <div className="space-y-5 mb-10 text-sm md:text-base">
                <div>
                  <span className="font-bold text-gray-900">Application:</span>{' '}
                  <span className="text-gray-700">Commercial vehicle and heavy equipment maintenance.</span>
                </div>
                <div>
                  <span className="font-bold text-gray-900">Industry:</span>{' '}
                  <span className="text-gray-700">Transportation, Logistics, Construction</span>
                </div>
                <div>
                  <span className="font-bold text-gray-900">Partner:</span>{' '}
                  <span className="text-gray-700">TotalEnergies</span>
                </div>
              </div>

              {/* Button - Opens modal */}
              <button
                onClick={openModal}
                className="inline-flex items-center bg-red-700 text-white pl-7 pr-3 py-3 rounded-full font-semibold text-sm md:text-base shadow-lg hover:bg-red-800 transition-all duration-300"
              >
                <span className="mr-4">Download E-Program</span>
                <span className="flex items-center justify-center w-8 h-8 rounded-full bg-white text-red-700">
                  <ArrowUpRight className="w-4 h-4" />
                </span>
              </button>
            </div>

            {/* Right - Image */}
            <div className="relative h-[500px]">
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="relative w-full h-full">
                  <div className="absolute top-0 right-0 w-3/4 h-3/4 rounded-3xl overflow-hidden shadow-2xl z-10 ring-4 ring-white/50 backdrop-blur-sm">
                    <div className="absolute inset-0 bg-gradient-to-br from-red-500/10 to-transparent z-10" />
                    <Image
                      src="/lubricants/ed777980787ff3252f60ea11866928efedeac3d9.png"
                      alt="Automotive & Fleet Lubricants"
                      fill
                      className="object-cover rounded-3xl"
                    />
                  </div>
                  <div className="absolute bottom-0 left-0 w-2/3 h-2/3 rounded-3xl overflow-hidden shadow-xl z-0 opacity-80 ring-2 ring-gray-200/50">
                    <Image
                      src="/lubricants/047834ed8da61325a10fd8fe220ffb1c016da60c.jpg"
                      alt="TotalEnergies containers"
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

      {/* Specialty Fluids & Greases Section */}
      <section className="py-12 bg-gradient-to-b from-gray-50 to-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            {/* Left - Image */}
            <div className="relative h-[500px] order-2 lg:order-1">
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="relative w-full h-full">
                  <div className="absolute top-0 right-0 w-3/4 h-3/4 rounded-3xl overflow-hidden shadow-2xl z-10 ring-4 ring-white/50 backdrop-blur-sm">
                    <div className="absolute inset-0 bg-gradient-to-br from-blue-500/10 to-transparent z-10" />
                    <Image
                      src="/lubricants/cfdc6a6cabe8b74e2793d0b5b301d003be174e02.png"
                      alt="Specialty Fluids & Greases"
                      fill
                      className="object-cover rounded-3xl"
                    />
                  </div>
                  <div className="absolute bottom-0 left-0 w-2/3 h-2/3 rounded-3xl overflow-hidden shadow-xl z-0 opacity-80 ring-2 ring-gray-200/50">
                    <Image
                      src="/lubricants/5747ac75dd30191d66150e88ea86d7af2a234715.png"
                      alt="Specialty greases"
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
                Specialty Fluids & Greases
              </h2>
              <p className="text-gray-700 text-lg leading-relaxed mb-8">
                Specialized hydraulic fluids, gear oils, compressor oils, and industrial greases for extreme conditions. Our TotalEnergies specialty range includes high-temperature greases, food-grade lubricants, and synthetic fluids engineered for demanding applications.
              </p>

              <div className="space-y-5 mb-10 text-sm md:text-base">
                <div>
                  <span className="font-bold text-gray-900">Application:</span>{' '}
                  <span className="text-gray-700">Specialized industrial applications and extreme conditions.</span>
                </div>
                <div>
                  <span className="font-bold text-gray-900">Industry:</span>{' '}
                  <span className="text-gray-700">All industrial sectors</span>
                </div>
                <div>
                  <span className="font-bold text-gray-900">Partner:</span>{' '}
                  <span className="text-gray-700">TotalEnergies</span>
                </div>
              </div>

              {/* Button - Opens modal */}
              <button
                onClick={openModal}
                className="inline-flex items-center bg-red-700 text-white pl-7 pr-3 py-3 rounded-full font-semibold text-sm md:text-base shadow-lg hover:bg-red-800 transition-all duration-300"
              >
                <span className="mr-4">Consult Fluid Specialist</span>
                <span className="flex items-center justify-center w-8 h-8 rounded-full bg-white text-red-700">
                  <ArrowUpRight className="w-4 h-4" />
                </span>
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Filtration Systems Section */}
      <section className="py-12 bg-gradient-to-b from-white to-gray-50 pb-16">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            {/* Left - Text Content */}
            <div className="relative z-10">
              <div className="h-1 w-12 bg-gradient-to-r from-red-500 to-red-600 mb-6 rounded-full" />
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6 leading-tight">
                Filtration Systems
              </h2>
              <p className="text-gray-700 text-lg leading-relaxed mb-8">
                Complete filtration solutions including oil, air, and fuel filters for contamination control, extending equipment life, and reducing maintenance costs. Our TotalEnergies filtration partners provide high-efficiency filters designed to protect your lubricants and equipment.
              </p>

              <div className="space-y-5 mb-10 text-sm md:text-base">
                <div>
                  <span className="font-bold text-gray-900">Application:</span>{' '}
                  <span className="text-gray-700">Lubricant contamination control and maintenance.</span>
                </div>
                <div>
                  <span className="font-bold text-gray-900">Industry:</span>{' '}
                  <span className="text-gray-700">Mining, Power Generation, Manufacturing</span>
                </div>
                <div>
                  <span className="font-bold text-gray-900">Partner:</span>{' '}
                  <span className="text-gray-700">TotalEnergies Filtration Partners</span>
                </div>
              </div>

              {/* Button - Opens modal */}
              <button
                onClick={openModal}
                className="inline-flex items-center bg-red-700 text-white pl-7 pr-3 py-3 rounded-full font-semibold text-sm md:text-base shadow-lg hover:bg-red-800 transition-all duration-300"
              >
                <span className="mr-4">View Filter Catalog</span>
                <span className="flex items-center justify-center w-8 h-8 rounded-full bg-white text-red-700">
                  <ArrowUpRight className="w-4 h-4" />
                </span>
              </button>
            </div>

            {/* Right - Image */}
            <div className="relative h-[500px]">
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="relative w-full h-full">
                  <div className="absolute bottom-0 right-0 w-3/4 h-3/4 rounded-3xl overflow-hidden shadow-2xl z-10 ring-4 ring-white/50 backdrop-blur-sm">
                    <div className="absolute inset-0 bg-gradient-to-br from-gray-500/10 to-transparent z-10" />
                    <Image
                      src="/lubricants/2980086d4f000ef6f5e247e942e295e11b376bd7.png"
                      alt="Filtration Systems"
                      fill
                      className="object-cover rounded-3xl"
                    />
                  </div>
                  <div className="absolute top-0 left-0 w-2/3 h-2/3 rounded-3xl overflow-hidden shadow-xl z-0 opacity-80 ring-2 ring-gray-200/50">
                    <Image
                      src="/lubricants/c020b56233c535aca21aed9d96a16dc6cb2fc7b2.png"
                      alt="Industrial filters"
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

      {/* Our Clients Section - before CTA */}
      <section className="py-12 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <ClientLogos title="Our Clients" source="lubricantClients" />
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
                    src="/lubricants/cfdc6a6cabe8b74e2793d0b5b301d003be174e02.png"
                    alt="Bearings and grease"
                    fill
                    className="object-cover"
                    sizes="(max-width: 1024px) 0px, 480px"
                  />
                </div>
                
                {/* Mobile Image - Simpler design */}
                <div className="lg:hidden relative h-full w-full flex items-center justify-center pr-4">
                  <div className="relative w-48 h-48 sm:w-64 sm:h-64 md:w-72 md:h-72 overflow-hidden rounded-full">
                    <Image
                      src="/lubricants/cfdc6a6cabe8b74e2793d0b5b301d003be174e02.png"
                      alt="Bearings and grease"
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