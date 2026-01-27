'use client';

import { useState } from 'react';
import Header from '@/components/Header';
import Image from 'next/image';
import { ArrowRight, ArrowUpRight } from 'lucide-react';
import Footer from '@/components/Footer';
import ContactModal from '@/components/ContactModal';

export default function ChemicalProductsPage() {
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
              src="/chemical/9e2f7c1369a7bb443bec0612418118f9ac9797fa.png"
              alt="Industrial Chemicals"
              fill
              className="object-cover"
              style={{ 
                objectFit: 'cover', 
                objectPosition: 'center',
                width: '100%',
                height: '100%'
              }}
              priority
            />
            <div 
              className="absolute inset-0"
              style={{ backgroundColor: 'rgba(0, 0, 0, 0.5)' }}
            ></div>

            <div className="absolute inset-0 flex flex-col justify-center items-center text-center px-6 z-10">
              {/* Breadcrumb */}
              <div className="text-white text-sm mb-8">
                <span className="opacity-80">Home</span>
                <ArrowRight className="w-4 h-4 inline mx-2" />
                <span className="text-red-600 font-semibold">Chemicals Pro</span>
              </div>
              
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6 leading-tight">
                Industrial Chemicals & Solutions
              </h1>
              <p className="text-white text-lg md:text-xl max-w-3xl leading-relaxed opacity-90">
                Premium water treatment, lubricants, and process chemicals engineered for performance and backed by trusted partnerships.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Optimizing Performance Section - Centered */}
      <section className="pt-8 pb-12 bg-gradient-to-b from-white via-gray-50 to-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="flex flex-col items-center text-center">
            <div className="h-1 w-12 bg-gradient-to-r from-red-500 to-red-600 mb-6 rounded-full"></div>
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-4 max-w-4xl bg-gradient-to-r from-gray-900 via-gray-800 to-gray-900 bg-clip-text text-transparent">
              Optimizing performance,{' '}
              <span className="bg-gradient-to-r from-red-600 to-red-700 bg-clip-text text-transparent">protecting assets.</span>
            </h2>
          </div>
        </div>
      </section>

      {/* Water Treatment Chemicals Section */}
      <section className="py-12 bg-gradient-to-b from-white to-gray-50">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            {/* Left - Text Content */}
            <div className="relative z-10">
              <div className="h-1 w-12 bg-gradient-to-r from-red-500 to-red-600 mb-6 rounded-full shadow-lg shadow-red-500/30"></div>
              <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6 leading-tight">
                Water Treatment Chemicals
              </h2>
              <p className="text-gray-700 text-lg leading-relaxed mb-8">
                Our comprehensive water treatment solutions go beyond basic chemicals to ensure your plant&apos;s entire water system operates at peak performance. We provide targeted treatments for boilers, cooling towers, and reverse osmosis systems that prevent scale, control corrosion, and inhibit biological growth, directly protecting your assets and minimizing costly downtime.
              </p>
              
              <div className="space-y-5 mb-10">
                <div>
                  <span className="font-bold text-gray-900 text-lg">Application:</span>{' '}
                  <span className="text-gray-700">Complete water management for industrial equipment protection.</span>
                </div>
                <div>
                  <span className="font-bold text-gray-900 text-lg">Industry:</span>{' '}
                  <span className="text-gray-700">Mining, Cement, Sugar, Manufacturing</span>
                </div>
                <div>
                  <span className="font-bold text-gray-900 text-lg">Partner:</span>{' '}
                  <span className="text-gray-700">ACCI Water</span>
                </div>
              </div>

              {/* Button - Opens modal */}
              <button
                onClick={openModal}
                className="inline-flex items-center bg-red-700 text-white pl-7 pr-3 py-3 rounded-full font-semibold text-sm md:text-base shadow-lg hover:bg-red-800 transition-all duration-300"
              >
                <span className="mr-4">Request Water Audit</span>
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
                    <div className="absolute inset-0 bg-gradient-to-br from-blue-500/10 to-transparent z-10"></div>
                    <Image
                      src="/chemical/7db3b89c11e71e2fe2f825fc6230f008053f182d.png"
                      alt="Water Treatment Chemicals"
                      fill
                      className="object-cover rounded-3xl"
                    />
                  </div>
                  <div className="absolute bottom-0 left-0 w-2/3 h-2/3 rounded-3xl overflow-hidden shadow-xl z-0 opacity-80 ring-2 ring-gray-200/50">
                    <Image
                      src="/chemical/a94f34f6f1e5a637e6d82d26456ad4ee18ec8772.png"
                      alt="Water Treatment Chemicals 2"
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

      {/* Industrial Chemicals Section */}
      <section className="py-12 bg-gradient-to-b from-gray-50 to-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            {/* Left - Image Collage */}
            <div className="relative h-[500px] order-2 lg:order-1">
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="relative w-full h-full">
                  <div className="absolute top-0 right-0 w-3/4 h-3/4 rounded-3xl overflow-hidden shadow-2xl z-10 ring-4 ring-white/50 backdrop-blur-sm">
                    <div className="absolute inset-0 bg-gradient-to-br from-gray-500/10 to-transparent z-10"></div>
                    <Image
                      src="/chemical/08ce7eb3419a1b29d032a2306b0e4d54ff30643d.png"
                      alt="Industrial Chemicals"
                      fill
                      className="object-cover rounded-3xl"
                    />
                  </div>
                  <div className="absolute bottom-0 left-0 w-2/3 h-2/3 rounded-3xl overflow-hidden shadow-xl z-0 opacity-80 ring-2 ring-gray-200/50">
                    <Image
                      src="/chemical/5c4f1c765acdb33fbee6e6ee166c37cc635b3c93.png"
                      alt="Industrial Chemicals 2"
                      fill
                      className="object-cover rounded-3xl"
                    />
                  </div>
                </div>
              </div>
            </div>

            {/* Right - Text Content */}
            <div className="order-1 lg:order-2 relative z-10">
              <div className="h-1 w-12 bg-red-600 mb-6"></div>
              <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6 leading-tight">
                Industrial Chemicals
              </h2>
              <p className="text-gray-700 text-lg leading-relaxed mb-8">
                This essential portfolio includes the high-quality cleaners, degreasers, and raw materials that form the foundation of daily plant operations. From routine equipment maintenance to critical production processes.
              </p>
              
              <div className="space-y-5 mb-10">
                <div>
                  <span className="font-bold text-gray-900 text-lg">Application:</span>{' '}
                  <span className="text-gray-700">Daily maintenance, cleaning, and core production activities across all industries.</span>
                </div>
                <div>
                  <span className="font-bold text-gray-900 text-lg">Industry:</span>{' '}
                  <span className="text-gray-700">All Industries</span>
                </div>
                <div>
                  <span className="font-bold text-gray-900 text-lg">Partner:</span>{' '}
                  <span className="text-gray-700">Hildis</span>
                </div>
              </div>

              {/* Button - Opens modal */}
              <button
                onClick={openModal}
                className="inline-flex items-center bg-red-700 text-white pl-7 pr-3 py-3 rounded-full font-semibold text-sm md:text-base shadow-lg hover:bg-red-800 transition-all duration-300"
              >
                <span className="mr-4">Request Product List</span>
                <span className="flex items-center justify-center w-8 h-8 rounded-full bg-white text-red-700">
                  <ArrowUpRight className="w-4 h-4" />
                </span>
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Laboratory Chemicals & Reagent Section */}
      <section className="py-12 bg-gradient-to-b from-white to-gray-50">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            {/* Left - Text Content */}
            <div className="relative z-10">
              <div className="h-1 w-12 bg-gradient-to-r from-red-500 to-red-600 mb-6 rounded-full shadow-lg shadow-red-500/30"></div>
              <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6 leading-tight">
                Laboratory Chemicals & Reagent
              </h2>
              <p className="text-gray-700 text-lg leading-relaxed mb-8">
                We supply high-purity laboratory chemicals and analytical reagents for industrial quality control, environmental testing, and process monitoring. Our portfolio includes AR-grade chemicals, testing kits, and specialized reagents that meet the stringent requirements of modern industrial laboratories.
              </p>
              
              <div className="space-y-5 mb-10">
                <div>
                  <span className="font-bold text-gray-900 text-lg">Application:</span>{' '}
                  <span className="text-gray-700">Industrial laboratory testing, quality control, environmental monitoring, and process validation.</span>
                </div>
                <div>
                  <span className="font-bold text-gray-900 text-lg">Industry:</span>{' '}
                  <span className="text-gray-700">Mining, Cement, Sugar Processing, Water Treatment, Manufacturing</span>
                </div>
                <div>
                  <span className="font-bold text-gray-900 text-lg">Partner:</span>{' '}
                  <span className="text-gray-700">Leading chemical manufacturers, Hildis Quality Assurance</span>
                </div>
              </div>

              {/* Button - Opens modal */}
              <button
                onClick={openModal}
                className="inline-flex items-center bg-red-700 text-white pl-7 pr-3 py-3 rounded-full font-semibold text-sm md:text-base shadow-lg hover:bg-red-800 transition-all duration-300"
              >
                <span className="mr-4">Request Product Catalog</span>
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
                    <div className="absolute inset-0 bg-gradient-to-br from-purple-500/10 to-transparent z-10"></div>
                    <Image
                      src="/chemical/9e2f7c1369a7bb443bec0612418118f9ac9797fa.png"
                      alt="Laboratory Chemicals"
                      fill
                      className="object-cover rounded-3xl"
                    />
                  </div>
                  <div className="absolute bottom-0 left-0 w-2/3 h-2/3 rounded-3xl overflow-hidden shadow-xl z-0 opacity-80 ring-2 ring-gray-200/50">
                    <Image
                      src="/chemical/3ddc0e225c750ef7d9eca5917718deb5c7f616f6.png"
                      alt="Laboratory Chemicals 2"
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

      {/* Process Chemicals Section */}
      <section className="py-12 bg-gradient-to-b from-gray-50 to-white pb-16">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            {/* Left - Image Collage */}
            <div className="relative h-[500px] order-2 lg:order-1">
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="relative w-full h-full">
                  <div className="absolute bottom-0 right-0 w-3/4 h-3/4 rounded-3xl overflow-hidden shadow-2xl z-10 ring-4 ring-white/50 backdrop-blur-sm">
                    <div className="absolute inset-0 bg-gradient-to-br from-green-500/10 to-transparent z-10"></div>
                    <Image
                      src="/chemical/a8a0dd8a1060b3053b284e4885b08dde49053a93.png"
                      alt="Process Chemicals"
                      fill
                      className="object-cover rounded-3xl"
                    />
                  </div>
                  <div className="absolute top-0 left-0 w-2/3 h-2/3 rounded-3xl overflow-hidden shadow-xl z-0 opacity-80 ring-2 ring-gray-200/50">
                    <Image
                      src="/chemical/85637a50512c39db37ce3e52a6bb6392a8f5372c.jpg"
                      alt="Process Chemicals 2"
                      fill
                      className="object-cover rounded-3xl"
                    />
                  </div>
                </div>
              </div>
            </div>

            {/* Right - Text Content */}
            <div className="order-1 lg:order-2 relative z-10">
              <div className="h-1 w-12 bg-red-600 mb-6"></div>
              <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6 leading-tight">
                Process Chemicals
              </h2>
              <p className="text-gray-700 text-lg leading-relaxed mb-8">
                We supply specialized process chemicals that act as force multipliers within your production line. These advanced formulations are designed to enhance key operations like grinding, crystallization, and clarification.
              </p>
              
              <div className="space-y-5 mb-10">
                <div>
                  <span className="font-bold text-gray-900 text-lg">Application:</span>{' '}
                  <span className="text-gray-700">Production optimization and quality enhancement in manufacturing processes.</span>
                </div>
                <div>
                  <span className="font-bold text-gray-900 text-lg">Industry:</span>{' '}
                  <span className="text-gray-700">Sugar, Cement, Manufacturing</span>
                </div>
                <div>
                  <span className="font-bold text-gray-900 text-lg">Partner:</span>{' '}
                  <span className="text-gray-700">Hildis</span>
                </div>
              </div>

              {/* Button - Opens modal */}
              <button
                onClick={openModal}
                className="inline-flex items-center bg-red-700 text-white pl-7 pr-3 py-3 rounded-full font-semibold text-sm md:text-base shadow-lg hover:bg-red-800 transition-all duration-300"
              >
                <span className="mr-4">Consult Process Expert</span>
                <span className="flex items-center justify-center w-8 h-8 rounded-full bg-white text-red-700">
                  <ArrowUpRight className="w-4 h-4" />
                </span>
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Banner Section with modal functionality */}
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
                    src="/chemical/08ce7eb3419a1b29d032a2306b0e4d54ff30643d.png"
                    alt="Industrial Chemicals"
                    fill
                    className="object-cover"
                    sizes="(max-width: 1024px) 0px, 480px"
                  />
                </div>
                
                {/* Mobile Image - Simpler design */}
                <div className="lg:hidden relative h-full w-full flex items-center justify-center pr-4">
                  <div className="relative w-48 h-48 sm:w-64 sm:h-64 md:w-72 md:h-72 overflow-hidden rounded-full">
                    <Image
                      src="/chemical/08ce7eb3419a1b29d032a2306b0e4d54ff30643d.png"
                      alt="Industrial Chemicals"
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