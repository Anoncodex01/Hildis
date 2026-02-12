'use client';

import Header from '@/components/Header';
import Image from 'next/image';
import { ArrowRight, ArrowUpRight } from 'lucide-react';
import Footer from '@/components/Footer';
import ContactModal from '@/components/ContactModal';
import { useState } from 'react';

export default function ServicesPage() {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const openModal = () => setIsModalOpen(true);
  const closeModal = () => setIsModalOpen(false);

  return (
    <div className="min-h-screen bg-white">
      <Header />
      
      {/* Contact Modal */}
      <ContactModal isOpen={isModalOpen} onClose={closeModal} />
      
      {/* Hero Banner Section - No top padding */}
      <section className="relative">
        <div className="px-3 sm:px-5 lg:px-6 max-w-7xl mx-auto">
          <div className="relative w-full overflow-hidden rounded-1xl md:rounded-2xl">
            {/* Background Image Container */}
            <div className="relative w-full h-[250px] sm:h-[350px] md:h-[400px] lg:h-[425px]">
              <Image
                src="/services/20bd995ce97da45762dc014a4aa20583153cd9d2.jpg"
                alt="Comprehensive Industrial Solutions"
                fill
                className="object-cover"
                priority
                sizes="(max-width: 640px) 100vw, (max-width: 1024px) 90vw, 1344px"
              />
              {/* Overlay */}
              <div className="absolute inset-0 bg-black/50"></div>
              
              {/* Content */}
              <div className="absolute inset-0 flex flex-col justify-center items-center text-center px-4 sm:px-6 lg:px-8 z-10">
                {/* Breadcrumb */}
                <div className="text-white text-sm sm:text-base mb-4 sm:mb-6 md:mb-8">
                  <span className="opacity-80">Home</span>
                  <ArrowRight className="w-3 h-3 sm:w-4 sm:h-4 inline mx-2" />
                  <span className="text-red-600 font-semibold">Services</span>
                </div>
                
                {/* Title */}
                <h1 className="text-1xl sm:text-2xl md:text-3xl lg:text-4xl xl:text-5xl font-bold text-white mb-4 sm:mb-6 leading-tight max-w-6xl">
                  Comprehensive Industrial Solutions
                </h1>
                
                {/* Description */}
                <p className="text-white text-sm sm:text-base md:text-lg lg:text-xl max-w-3xl leading-relaxed opacity-90">
                  Reliable equipment, essential chemicals, and dedicated services designed to maximize your productivity and minimize downtime.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Services Built on Reliability Section - No bottom padding */}
      <section className="pt-12 sm:pt-16 md:pt-20 lg:pt-24 bg-gradient-to-b from-white via-gray-50 to-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="mb-12 sm:mb-16">
            <div className="text-left">
              {/* Red line above */}
              <div className="h-1 w-12 bg-red-600 mb-4"></div>
              
              {/* Title - left aligned */}
              <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 leading-tight">
                Services Built on <span className="text-red-600">Reliability</span>
              </h2>
              <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 leading-tight">
                and <span className="text-red-600">Results</span>
              </h2>
            </div>
          </div>

          {/* Technical Support & Consultancy */}
          <div className="grid lg:grid-cols-2 gap-8 sm:gap-10 lg:gap-12 items-center mb-16 sm:mb-20">
            <div className="order-2 lg:order-1 text-left">
              <div className="mb-4 sm:mb-6">
                <div className="h-1 w-8 sm:w-12 bg-red-600 mb-3"></div>
                <h3 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-bold text-gray-900">Technical Support &amp; Consultancy</h3>
              </div>
              <p className="text-gray-700 text-sm sm:text-base md:text-lg leading-relaxed mb-6 sm:mb-8">
                Our seasoned engineers provide more than just troubleshooting; they deliver strategic partnership. We offer both on-site and remote technical support, conducting in-depth system diagnostics and performance analysis. Beyond fixing immediate issues, we provide actionable consultancy reports to optimize your plant's efficiency, reduce operational costs, and extend the lifespan of your equipment, ensuring you get the maximum return on your investment.
              </p>
              <button
                onClick={openModal}
                className="inline-flex items-center gap-3 bg-[#BB181B] text-white px-6 sm:px-8 py-3 sm:py-4 rounded-full font-semibold hover:opacity-90 transition-all duration-300 w-full sm:w-auto"
              >
                <span>Consult an Expert</span>
                <span className="flex h-9 w-9 sm:h-10 sm:w-10 shrink-0 items-center justify-center rounded-full bg-white">
                  <ArrowUpRight className="w-4 h-4 sm:w-5 sm:h-5 text-gray-900" strokeWidth={2.5} />
                </span>
              </button>
            </div>
            {/* Image Collage */}
            <div className="relative h-[300px] sm:h-[400px] md:h-[450px] lg:h-[500px] order-1 lg:order-2 mb-8 lg:mb-0">
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="relative w-full h-full">
                  <div className="absolute top-0 right-0 w-3/4 h-3/4 rounded-3xl overflow-hidden shadow-2xl z-10 ring-2 sm:ring-4 ring-white/50 backdrop-blur-sm">
                    <div className="absolute inset-0 bg-gradient-to-br from-blue-500/10 to-transparent z-10"></div>
                    <Image
                      src="/services/7f7d8ecf1b0e12648b54c2959887311e31d46bb9.png"
                      alt="Technical Support"
                      fill
                      className="object-cover rounded-3xl"
                      sizes="(max-width: 768px) 75vw, (max-width: 1200px) 40vw, 600px"
                    />
                  </div>
                  <div className="absolute bottom-0 left-0 w-2/3 h-2/3 rounded-3xl overflow-hidden shadow-xl z-0 opacity-80 ring-1 sm:ring-2 ring-gray-200/50">
                    <Image
                      src="/services/612a740ded6fbd86e6ece35e120597e8abca18a7.jpg"
                      alt="Technical Support 2"
                      fill
                      className="object-cover rounded-3xl"
                      sizes="(max-width: 768px) 66vw, (max-width: 1200px) 35vw, 500px"
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Equipment Installation & Commissioning */}
          <div className="grid lg:grid-cols-2 gap-8 sm:gap-10 lg:gap-12 items-center mb-16 sm:mb-20">
            {/* Image Collage */}
            <div className="relative h-[300px] sm:h-[400px] md:h-[450px] lg:h-[500px] order-1 mb-8 lg:mb-0">
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="relative w-full h-full">
                  <div className="absolute bottom-0 right-0 w-3/4 h-3/4 rounded-3xl overflow-hidden shadow-2xl z-10 ring-2 sm:ring-4 ring-white/50 backdrop-blur-sm">
                    <div className="absolute inset-0 bg-gradient-to-br from-green-500/10 to-transparent z-10"></div>
                    <Image
                      src="/services/f799ceac5412cfea4299e5811dd7f937eaead41a.png"
                      alt="Equipment Installation"
                      fill
                      className="object-cover rounded-3xl"
                      sizes="(max-width: 768px) 75vw, (max-width: 1200px) 40vw, 600px"
                    />
                  </div>
                  <div className="absolute top-0 left-0 w-2/3 h-2/3 rounded-3xl overflow-hidden shadow-xl z-0 opacity-80 ring-1 sm:ring-2 ring-gray-200/50">
                    <Image
                      src="/services/4089179871ecc9d61a665d6868f0020a2945d550.jpg"
                      alt="Equipment Installation 2"
                      fill
                      className="object-cover rounded-3xl"
                      sizes="(max-width: 768px) 66vw, (max-width: 1200px) 35vw, 500px"
                    />
                  </div>
                </div>
              </div>
            </div>
            <div className="order-2 text-left">
              <div className="mb-4 sm:mb-6">
                <div className="h-1 w-8 sm:w-12 bg-red-600 mb-3"></div>
                <h3 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-bold text-gray-900">Equipment Installation &amp; Commissioning</h3>
              </div>
              <p className="text-gray-700 text-sm sm:text-base md:text-lg leading-relaxed mb-6 sm:mb-8">
                We manage the entire process from unboxing to full operation. Our certified technicians handle the complex installation of machinery, from individual pumps and valves to complete automation systems. We ensure all components are integrated correctly and perform rigorous commissioning tests to verify everything operates to the manufacturer's specifications. This end-to-end service guarantees a seamless, safe, and efficient start-up, eliminating costly delays and installation errors.
              </p>
              <button
                onClick={openModal}
                className="inline-flex items-center gap-3 bg-[#BB181B] text-white px-6 sm:px-8 py-3 sm:py-4 rounded-full font-semibold hover:opacity-90 transition-all duration-300 w-full sm:w-auto"
              >
                <span>Plan Your Installation</span>
                <span className="flex h-9 w-9 sm:h-10 sm:w-10 shrink-0 items-center justify-center rounded-full bg-white">
                  <ArrowUpRight className="w-4 h-4 sm:w-5 sm:h-5 text-gray-900" strokeWidth={2.5} />
                </span>
              </button>
            </div>
          </div>

          {/* Plant Maintenance & Repair */}
          <div className="grid lg:grid-cols-2 gap-8 sm:gap-10 lg:gap-12 items-center mb-16 sm:mb-20">
            <div className="order-2 lg:order-1 text-left">
              <div className="mb-4 sm:mb-6">
                <div className="h-1 w-8 sm:w-12 bg-red-600 mb-3"></div>
                <h3 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-bold text-gray-900">Plant Maintenance &amp; Repair</h3>
              </div>
              <p className="text-gray-700 text-sm sm:text-base md:text-lg leading-relaxed mb-6 sm:mb-8">
                Maximize your operational up time and protect your capital investment. We offer proactive, scheduled maintenance plans tailored to your equipment and usage, preventing unexpected failures. When issues do arise, our rapid-response repair team, equipped with genuine OEM parts, gets you back online quickly. This dual approach significantly reduces downtime, lowers long-term maintenance costs, and ensures your plant runs at peak performance.
              </p>
              <button
                onClick={openModal}
                className="inline-flex items-center gap-3 bg-[#BB181B] text-white px-6 sm:px-8 py-3 sm:py-4 rounded-full font-semibold hover:opacity-90 transition-all duration-300 w-full sm:w-auto"
              >
                <span>Schedule Maintenance</span>
                <span className="flex h-9 w-9 sm:h-10 sm:w-10 shrink-0 items-center justify-center rounded-full bg-white">
                  <ArrowUpRight className="w-4 h-4 sm:w-5 sm:h-5 text-gray-900" strokeWidth={2.5} />
                </span>
              </button>
            </div>
            {/* Image Collage */}
            <div className="relative h-[300px] sm:h-[400px] md:h-[450px] lg:h-[500px] order-1 lg:order-2 mb-8 lg:mb-0">
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="relative w-full h-full">
                  <div className="absolute bottom-0 right-0 w-3/4 h-3/4 rounded-3xl overflow-hidden shadow-2xl z-10 ring-2 sm:ring-4 ring-white/50 backdrop-blur-sm">
                    <div className="absolute inset-0 bg-gradient-to-br from-orange-500/10 to-transparent z-10"></div>
                    <Image
                      src="/services/57b2a28b01dadd503f225a9697b1f32cc2ebf6ea.png"
                      alt="Plant Maintenance"
                      fill
                      className="object-cover rounded-3xl"
                      sizes="(max-width: 768px) 75vw, (max-width: 1200px) 40vw, 600px"
                    />
                  </div>
                  <div className="absolute top-0 left-0 w-2/3 h-2/3 rounded-3xl overflow-hidden shadow-xl z-0 opacity-80 ring-1 sm:ring-2 ring-gray-200/50">
                    <Image
                      src="/services/a43c910289ca712b041b716aa5114f6541951727.png"
                      alt="Plant Maintenance 2"
                      fill
                      className="object-cover rounded-3xl"
                      sizes="(max-width: 768px) 66vw, (max-width: 1200px) 35vw, 500px"
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Operator Training Programs */}
          <div className="grid lg:grid-cols-2 gap-8 sm:gap-10 lg:gap-12 items-center mb-16 sm:mb-20">
            {/* Image Collage */}
            <div className="relative h-[300px] sm:h-[400px] md:h-[450px] lg:h-[500px] order-1 mb-8 lg:mb-0">
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="relative w-full h-full">
                  <div className="absolute top-0 right-0 w-3/4 h-3/4 rounded-3xl overflow-hidden shadow-2xl z-10 ring-2 sm:ring-4 ring-white/50 backdrop-blur-sm">
                    <div className="absolute inset-0 bg-gradient-to-br from-purple-500/10 to-transparent z-10"></div>
                    <Image
                      src="/services/7c552253436e875d9f6f22405dd457b02541696a.png"
                      alt="Operator Training"
                      fill
                      className="object-cover rounded-3xl"
                      sizes="(max-width: 768px) 75vw, (max-width: 1200px) 40vw, 600px"
                    />
                  </div>
                  <div className="absolute bottom-0 left-0 w-2/3 h-2/3 rounded-3xl overflow-hidden shadow-xl z-0 opacity-80 ring-1 sm:ring-2 ring-gray-200/50">
                    <Image
                      src="/services/90655b87594becf7868f6d2b151383f0e33a7bd1.png"
                      alt="Operator Training 2"
                      fill
                      className="object-cover rounded-3xl"
                      sizes="(max-width: 768px) 66vw, (max-width: 1200px) 35vw, 500px"
                    />
                  </div>
                </div>
              </div>
            </div>
            <div className="order-2 text-left">
              <div className="mb-4 sm:mb-6">
                <div className="h-1 w-8 sm:w-12 bg-red-600 mb-3"></div>
                <h3 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-bold text-gray-900">Operator Training Programs</h3>
              </div>
              <p className="text-gray-700 text-sm sm:text-base md:text-lg leading-relaxed mb-6 sm:mb-8">
                Empower your workforce with knowledge. We bridge the gap between new technology and your team's skills through comprehensive, hands-on training programs. Covering everything from safe daily operation to routine maintenance and basic troubleshooting, our training enhances operational safety, boosts productivity, and reduces the risk of costly operator errors. An informed operator is your first line of defense against downtime.
              </p>
              <button
                onClick={openModal}
                className="inline-flex items-center gap-3 bg-[#BB181B] text-white px-6 sm:px-8 py-3 sm:py-4 rounded-full font-semibold hover:opacity-90 transition-all duration-300 w-full sm:w-auto"
              >
                <span>Inquire About Training</span>
                <span className="flex h-9 w-9 sm:h-10 sm:w-10 shrink-0 items-center justify-center rounded-full bg-white">
                  <ArrowUpRight className="w-4 h-4 sm:w-5 sm:h-5 text-gray-900" strokeWidth={2.5} />
                </span>
              </button>
            </div>
          </div>

          {/* Custom Solution Development */}
          <div className="grid lg:grid-cols-2 gap-8 sm:gap-10 lg:gap-12 items-center mb-16 sm:mb-20">
            <div className="order-2 lg:order-1 text-left">
              <div className="mb-4 sm:mb-6">
                <div className="h-1 w-8 sm:w-12 bg-red-600 mb-3"></div>
                <h3 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-bold text-gray-900">Custom Solution Development</h3>
              </div>
              <p className="text-gray-700 text-sm sm:text-base md:text-lg leading-relaxed mb-6 sm:mb-8">
                When standard solutions don't fit your unique challenge, our engineering team creates a bespoke answer. We analyze your specific operational requirements, environmental conditions, and performance goals to design, engineer, and fabricate custom solutions. This service ensures that you have the perfect tool for the job, leading to improved efficiency, solving persistent problems, and giving you a distinct competitive advantage.
              </p>
              <button
                onClick={openModal}
                className="inline-flex items-center gap-3 bg-[#BB181B] text-white px-6 sm:px-8 py-3 sm:py-4 rounded-full font-semibold hover:opacity-90 transition-all duration-300 w-full sm:w-auto"
              >
                <span>Request a Custom Solution</span>
                <span className="flex h-9 w-9 sm:h-10 sm:w-10 shrink-0 items-center justify-center rounded-full bg-white">
                  <ArrowUpRight className="w-4 h-4 sm:w-5 sm:h-5 text-gray-900" strokeWidth={2.5} />
                </span>
              </button>
            </div>
            {/* Image Collage */}
            <div className="relative h-[300px] sm:h-[400px] md:h-[450px] lg:h-[500px] order-1 lg:order-2 mb-8 lg:mb-0">
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="relative w-full h-full">
                  <div className="absolute bottom-0 right-0 w-3/4 h-3/4 rounded-3xl overflow-hidden shadow-2xl z-10 ring-2 sm:ring-4 ring-white/50 backdrop-blur-sm">
                    <div className="absolute inset-0 bg-gradient-to-br from-indigo-500/10 to-transparent z-10"></div>
                    <Image
                      src="/services/6151d99a6c72e7e0841efc1109ffdc53e4b32fd9.png"
                      alt="Custom Solutions"
                      fill
                      className="object-cover rounded-3xl"
                      sizes="(max-width: 768px) 75vw, (max-width: 1200px) 40vw, 600px"
                    />
                  </div>
                  <div className="absolute top-0 left-0 w-2/3 h-2/3 rounded-3xl overflow-hidden shadow-xl z-0 opacity-80 ring-1 sm:ring-2 ring-gray-200/50">
                    <Image
                      src="/services/7d4c7ecc2e053cf86bf68453f0cd980956140c85.png"
                      alt="Custom Solutions 2"
                      fill
                      className="object-cover rounded-3xl"
                      sizes="(max-width: 768px) 66vw, (max-width: 1200px) 35vw, 500px"
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Workshop Services (Coming 2026) */}
          <div className="grid lg:grid-cols-2 gap-8 sm:gap-10 lg:gap-12 items-center mb-16 sm:mb-20">
            {/* Image Collage */}
            <div className="relative h-[300px] sm:h-[400px] md:h-[450px] lg:h-[500px] order-1 mb-8 lg:mb-0">
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="relative w-full h-full">
                  <div className="absolute bottom-0 right-0 w-3/4 h-3/4 rounded-3xl overflow-hidden shadow-2xl z-10 ring-2 sm:ring-4 ring-white/50 backdrop-blur-sm">
                    <div className="absolute inset-0 bg-gradient-to-br from-teal-500/10 to-transparent z-10"></div>
                    <Image
                      src="/services/8f602f785da59fb885e669729f1ae776b4020d5e.png"
                      alt="Workshop Services"
                      fill
                      className="object-cover rounded-3xl"
                      sizes="(max-width: 768px) 75vw, (max-width: 1200px) 40vw, 600px"
                    />
                  </div>
                  <div className="absolute top-0 left-0 w-2/3 h-2/3 rounded-3xl overflow-hidden shadow-xl z-0 opacity-80 ring-1 sm:ring-2 ring-gray-200/50">
                    <Image
                      src="/services/a1645eaecfc6c411185620fd9c1ebe55fc8cb63d.png"
                      alt="Workshop Services 2"
                      fill
                      className="object-cover rounded-3xl"
                      sizes="(max-width: 768px) 66vw, (max-width: 1200px) 35vw, 500px"
                    />
                  </div>
                </div>
              </div>
            </div>
            <div className="order-2 text-left">
              <div className="mb-4 sm:mb-6">
                <div className="h-1 w-8 sm:w-12 bg-red-600 mb-3"></div>
                <h3 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-bold text-gray-900">Workshop Services (Coming 2026)</h3>
              </div>
              <p className="text-gray-700 text-sm sm:text-base md:text-lg leading-relaxed mb-6 sm:mb-8">
                We are expanding our capabilities to bring advanced, factory-level repairs to East Africa. Our new, state-of-the-art workshop will specialize in the servicing and overhaul of critical equipment like agitators and gearboxes, including precision bearing replacement and gear repair. Furthermore, our electrical workshop will offer motor rewinding, control system troubleshooting, and panel building. This facility will provide a local, fast-turnaround solution for major repairs, drastically reducing waiting times and associated costs.
              </p>
              <button
                onClick={openModal}
                className="inline-flex items-center gap-3 bg-[#BB181B] text-white px-6 sm:px-8 py-3 sm:py-4 rounded-full font-semibold hover:opacity-90 transition-all duration-300 w-full sm:w-auto"
              >
                <span>Get Notified at Launch</span>
                <span className="flex h-9 w-9 sm:h-10 sm:w-10 shrink-0 items-center justify-center rounded-full bg-white">
                  <ArrowUpRight className="w-4 h-4 sm:w-5 sm:h-5 text-gray-900" strokeWidth={2.5} />
                </span>
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Banner Section - No top padding */}
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
                  <button
                    onClick={openModal}
                    className="bg-white text-gray-900 px-6 sm:px-8 py-2.5 sm:py-3 rounded-full font-medium hover:bg-gray-100 transition-all duration-300 hover:scale-105 shadow-lg text-sm sm:text-base"
                  >
                    Contact Us
                  </button>

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
                    src="/services/8f602f785da59fb885e669729f1ae776b4020d5e.png"
                    alt="Industrial Support"
                    fill
                    className="object-cover"
                    sizes="(max-width: 1024px) 0px, 480px"
                  />
                </div>
                
                {/* Mobile Image - Simpler design */}
                <div className="lg:hidden relative h-full w-full flex items-center justify-center pr-4">
                  <div className="relative w-48 h-48 sm:w-64 sm:h-64 md:w-72 md:h-72 overflow-hidden rounded-full">
                    <Image
                      src="/services/8f602f785da59fb885e669729f1ae776b4020d5e.png"
                      alt="Industrial Support"
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