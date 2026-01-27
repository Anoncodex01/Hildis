'use client';

import { useState, useEffect, useRef } from 'react';
import Header from '@/components/Header';
import Image from 'next/image';
import { ArrowRight, Target, MapPin, Users, Truck, Wrench, Zap, Network, Shield, Check } from 'lucide-react';
import ClientLogos from '@/components/ClientLogos';
import Team from '@/components/Team';
import Branches from '@/components/Branches';
import Footer from '@/components/Footer';
import ContactModal from '@/components/ContactModal';

// Counter component for animated numbers with intersection observer
function Counter({ end, suffix = '+', duration = 2000 }: { end: number; suffix?: string; duration?: number }) {
  const [count, setCount] = useState(0);
  const [hasStarted, setHasStarted] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting && !hasStarted) {
          setHasStarted(true);
          let startTime: number | null = null;

          const animate = (currentTime: number) => {
            if (startTime === null) startTime = currentTime;
            const progress = Math.min((currentTime - startTime) / duration, 1);
            
            // Easing function for smooth animation
            const easeOutQuart = 1 - Math.pow(1 - progress, 4);
            setCount(Math.floor(easeOutQuart * end));

            if (progress < 1) {
              requestAnimationFrame(animate);
            } else {
              setCount(end);
            }
          };

          requestAnimationFrame(animate);
        }
      },
      { threshold: 0.5 }
    );

    if (ref.current) {
      observer.observe(ref.current);
    }

    return () => {
      if (ref.current) {
        observer.unobserve(ref.current);
      }
    };
  }, [end, duration, hasStarted]);

  return (
    <div ref={ref} className="text-3xl sm:text-4xl font-bold text-gray-900 mb-2">
      {count}{suffix}
    </div>
  );
}

export default function AboutPage() {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const openModal = () => {
    setIsModalOpen(true);
    // Prevent background scrolling when modal is open
    document.body.style.overflow = 'hidden';
  };

  const closeModal = () => {
    setIsModalOpen(false);
    // Re-enable background scrolling
    document.body.style.overflow = 'unset';
  };

  return (
    <div className="min-h-screen bg-white">
      {/* Header Component */}
      <Header />
      
      {/* Contact Modal Component */}
      <ContactModal isOpen={isModalOpen} onClose={closeModal} />
      
      {/* Hero Banner Section - Minimal top spacing */}
      <section className="relative">
        <div className="px-4 sm:px-6 lg:px-8">
          <div 
            className="relative overflow-hidden mx-auto"
            style={{
              maxWidth: '1344px',
              width: '100%',
              height: 'auto',
              minHeight: '180px',
              aspectRatio: '1344/400',
              borderRadius: '20px',
            }}
          >
            <div className="relative w-full h-full">
              {/* Hero Background Image */}
              <Image
                src="/images/hero.jpg"
                alt="Industrial Excellence"
                fill
                className="object-cover"
                priority
                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 90vw, 1344px"
              />
              
              {/* Dark Overlay for better text readability */}
              <div className="absolute inset-0 bg-black/50"></div>

              {/* Hero Content */}
              <div className="absolute inset-0 flex flex-col justify-center items-center text-center px-4 sm:px-6 z-10">
                {/* Breadcrumb Navigation */}
                <div className="text-white text-xs sm:text-sm md:text-base mb-2 sm:mb-3 md:mb-4">
                  <span className="opacity-80">Home</span>
                  <ArrowRight className="w-3 h-3 sm:w-4 sm:h-4 inline mx-1 sm:mx-2" />
                  <span className="text-red-600 font-semibold">About Us</span>
                </div>
                
                {/* Main Hero Title */}
                <h1 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl xl:text-5xl font-bold text-white mb-2 sm:mb-3 md:mb-4 leading-tight px-2">
                  Driving Industrial Excellence Across East Africa
                </h1>
                
                {/* Hero Description */}
                <p className="text-white text-xs sm:text-sm md:text-base lg:text-lg max-w-3xl leading-relaxed opacity-90 px-2">
                  Delivering reliable equipment, chemicals, and engineering solutions that power productivity, safety, and operational continuity
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* About Hildis Section with Gradient Background */}
      <section className="py-12 sm:py-16 md:py-20 bg-gradient-to-br from-white via-gray-50 to-red-50/30 relative overflow-hidden">
        {/* Decorative gradient background elements */}
        <div className="absolute top-0 right-0 w-48 h-48 sm:w-64 sm:h-64 md:w-96 md:h-96 bg-red-500/5 rounded-full blur-3xl"></div>
        <div className="absolute bottom-0 left-0 w-48 h-48 sm:w-64 sm:h-64 md:w-96 md:h-96 bg-purple-500/5 rounded-full blur-3xl"></div>
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          {/* Section Header */}
          <div className="mb-8 sm:mb-10 md:mb-12">
            <div className="flex items-center gap-2 sm:gap-3 mb-3 sm:mb-4 md:mb-6">
              <div className="h-1 w-6 sm:w-8 md:w-12 bg-gradient-to-r from-red-600 to-red-500"></div>
              <h2 className="text-lg sm:text-xl md:text-2xl lg:text-3xl font-bold text-gray-900">About Hildis</h2>
            </div>
          </div>

          {/* Content Grid: Text on left, Stats on right */}
          <div className="flex flex-col lg:flex-row gap-8 sm:gap-10 md:gap-12 items-center">
            {/* Left Column: Company Description */}
            <div className="lg:w-1/2">
              <h3 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl xl:text-5xl font-bold text-gray-900 mb-4 sm:mb-6 leading-tight">
                A Leading Provider of{' '}
                <span className="bg-gradient-to-r from-red-600 to-red-500 bg-clip-text text-transparent">Industrial & Mining</span> Supply Solutions
              </h3>
              <p className="text-gray-700 text-sm sm:text-base md:text-lg leading-relaxed mb-6 sm:mb-8">
                We specialize in supplying high-quality industrial equipment, chemicals, and engineering solutions that support mining, manufacturing, sugar, and cement industries across East Africa.
              </p>
              <button
                onClick={openModal}
                className="inline-flex items-center gap-2 bg-gradient-to-r from-red-600 to-red-700 text-white px-5 sm:px-6 md:px-8 py-2.5 sm:py-3 md:py-4 rounded-lg md:rounded-xl font-semibold hover:from-red-700 hover:to-red-800 transition-all duration-300 shadow-lg hover:shadow-xl w-full sm:w-auto justify-center text-sm sm:text-base"
              >
                Get A Quote
                <ArrowRight className="w-4 h-4 sm:w-5 sm:h-5" />
              </button>
            </div>

            {/* Right Column: Animated Stats Grid */}
            <div className="lg:w-1/2 grid grid-cols-2 gap-3 sm:gap-4 md:gap-6">
              {/* Experience Stat */}
              <div className="bg-gradient-to-br from-white to-gray-50 rounded-lg sm:rounded-xl md:rounded-2xl p-3 sm:p-4 md:p-6 shadow-lg border border-gray-100 hover:shadow-xl transition-shadow duration-300">
                <div className="w-8 h-8 sm:w-10 sm:h-10 md:w-12 md:h-12 bg-gradient-to-br from-red-600 to-red-500 rounded-lg flex items-center justify-center mb-2 sm:mb-3 md:mb-4 shadow-md">
                  <Target className="w-4 h-4 sm:w-5 sm:h-5 md:w-6 md:h-6 text-white" />
                </div>
                <Counter end={14} suffix="+" />
                <div className="text-gray-700 text-xs sm:text-sm">Years of Experience</div>
              </div>

              {/* Branches Stat */}
              <div className="bg-gradient-to-br from-white to-gray-50 rounded-lg sm:rounded-xl md:rounded-2xl p-3 sm:p-4 md:p-6 shadow-lg border border-gray-100 hover:shadow-xl transition-shadow duration-300">
                <div className="w-8 h-8 sm:w-10 sm:h-10 md:w-12 md:h-12 bg-gradient-to-br from-red-600 to-red-500 rounded-lg flex items-center justify-center mb-2 sm:mb-3 md:mb-4 shadow-md">
                  <MapPin className="w-4 h-4 sm:w-5 sm:h-5 md:w-6 md:h-6 text-white" />
                </div>
                <Counter end={6} suffix="+" />
                <div className="text-gray-700 text-xs sm:text-sm">Branches Nationwide</div>
              </div>

              {/* Staff Stat */}
              <div className="bg-gradient-to-br from-white to-gray-50 rounded-lg sm:rounded-xl md:rounded-2xl p-3 sm:p-4 md:p-6 shadow-lg border border-gray-100 hover:shadow-xl transition-shadow duration-300">
                <div className="w-8 h-8 sm:w-10 sm:h-10 md:w-12 md:h-12 bg-gradient-to-br from-red-600 to-red-500 rounded-lg flex items-center justify-center mb-2 sm:mb-3 md:mb-4 shadow-md">
                  <Users className="w-4 h-4 sm:w-5 sm:h-5 md:w-6 md:h-6 text-white" />
                </div>
                <Counter end={50} suffix="+" />
                <div className="text-gray-700 text-xs sm:text-sm">Trained Staff</div>
              </div>

              {/* Vehicles Stat */}
              <div className="bg-gradient-to-br from-white to-gray-50 rounded-lg sm:rounded-xl md:rounded-2xl p-3 sm:p-4 md:p-6 shadow-lg border border-gray-100 hover:shadow-xl transition-shadow duration-300">
                <div className="w-8 h-8 sm:w-10 sm:h-10 md:w-12 md:h-12 bg-gradient-to-br from-red-600 to-red-500 rounded-lg flex items-center justify-center mb-2 sm:mb-3 md:mb-4 shadow-md">
                  <Truck className="w-4 h-4 sm:w-5 sm:h-5 md:w-6 md:h-6 text-white" />
                </div>
                <Counter end={32} suffix="+" />
                <div className="text-gray-700 text-xs sm:text-sm">Delivery Vehicles</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Mission, Vision & Values Section */}
      <section className="py-12 sm:py-16 md:py-20 bg-gradient-to-br from-gray-50 via-white to-purple-50/20 relative overflow-hidden">
        {/* Decorative gradient background elements */}
        <div className="absolute top-0 left-0 w-48 h-48 sm:w-64 sm:h-64 md:w-96 md:h-96 bg-purple-500/5 rounded-full blur-3xl"></div>
        <div className="absolute bottom-0 right-0 w-48 h-48 sm:w-64 sm:h-64 md:w-96 md:h-96 bg-red-500/5 rounded-full blur-3xl"></div>
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          {/* Section Title */}
          <div className="text-center mb-8 sm:mb-10 md:mb-12 lg:mb-16">
            <h2 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-bold bg-gradient-to-r from-gray-900 via-gray-800 to-gray-900 bg-clip-text text-transparent">
              — Our Mission, Vision & Values
            </h2>
          </div>

          {/* Cards Grid: Mission, Vision, Values */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 md:gap-8 lg:gap-10">
            {/* Mission Card */}
            <div className="bg-gradient-to-br from-white to-gray-50 rounded-xl sm:rounded-2xl md:rounded-[32px] shadow-lg border border-gray-200 overflow-hidden hover:shadow-xl transition-all duration-300 flex flex-col h-full">
              <div className="relative w-full h-40 sm:h-48 md:h-56 lg:h-64">
                <Image
                  src="/images/3c46f03bf383322fd83abefb13a7c0f11996103f.jpg"
                  alt="Our Mission"
                  fill
                  className="object-cover rounded-xl sm:rounded-2xl md:rounded-[32px]"
                  sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
                />
              </div>
              <div className="px-4 sm:px-5 md:px-6 py-4 sm:py-5 md:py-6 text-center flex-1 flex flex-col justify-center">
                <h3 className="text-base sm:text-lg md:text-xl lg:text-2xl font-bold text-[#1D2550] mb-2 sm:mb-3">Our Mission</h3>
                <p className="text-gray-700 leading-relaxed text-xs sm:text-sm md:text-base flex-1">
                  To build lasting partnerships with our customers by delivering reliable, innovative, and value-driven solutions. We embrace change, encourage innovation, and uphold the highest standards of professionalism in everything we do.
                </p>
              </div>
            </div>

            {/* Vision Card */}
            <div className="bg-gradient-to-br from-white to-gray-50 rounded-xl sm:rounded-2xl md:rounded-[32px] shadow-lg border border-gray-200 overflow-hidden hover:shadow-xl transition-all duration-300 flex flex-col h-full">
              <div className="relative w-full h-40 sm:h-48 md:h-56 lg:h-64">
                <Image
                  src="/images/6db1a097aa14fa49032bc98fc8fb0d142e37d74a.jpg"
                  alt="Our Vision"
                  fill
                  className="object-cover rounded-xl sm:rounded-2xl md:rounded-[32px]"
                  sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
                />
              </div>
              <div className="px-4 sm:px-5 md:px-6 py-4 sm:py-5 md:py-6 text-center flex-1 flex flex-col justify-center">
                <h3 className="text-base sm:text-lg md:text-xl lg:text-2xl font-bold text-[#1D2550] mb-2 sm:mb-3">Our Vision</h3>
                <p className="text-gray-700 leading-relaxed text-xs sm:text-sm md:text-base flex-1">
                  To be recognized as a leading and trusted partner in sourcing, packaging, timely delivery, and provision of quality goods and services across Africa. We aim to set the benchmark for excellence, reliability, and customer satisfaction in every market we serve.
                </p>
              </div>
            </div>

            {/* Values Card */}
            <div className="bg-gradient-to-br from-white to-gray-50 rounded-xl sm:rounded-2xl md:rounded-[32px] shadow-lg border border-gray-200 overflow-hidden hover:shadow-xl transition-all duration-300 flex flex-col h-full">
              <div className="relative w-full h-40 sm:h-48 md:h-56 lg:h-64">
                <Image
                  src="/images/e8e060e03d7aeaeabb7ee04abfd1e978291ddb43.png"
                  alt="Our Values"
                  fill
                  className="object-cover rounded-xl sm:rounded-2xl md:rounded-[32px]"
                  sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
                />
              </div>
              <div className="px-4 sm:px-5 md:px-6 py-4 sm:py-5 md:py-6 text-center flex-1 flex flex-col justify-center">
                <h3 className="text-base sm:text-lg md:text-xl lg:text-2xl font-bold text-[#1D2550] mb-2 sm:mb-3">Our Values</h3>
                <p className="text-gray-700 leading-relaxed text-xs sm:text-sm md:text-base flex-1">
                  At our core, we are guided by unwavering Integrity and Professionalism in all our actions. We foster Collaborative Teamwork and clear Communication, driven by a shared Passion to deliver exceptional results and achieve ultimate Customer Satisfaction.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Our Partners Section */}
      <div className="py-12 sm:py-16 md:py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <ClientLogos title="Our Partners" />
        </div>
      </div>

      {/* Frontline Team Section */}
      <div className="py-12 sm:py-16 md:py-20">
        <Team />
      </div>

      {/* Branches Map Section */}
      <div className="py-12 sm:py-16 md:py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <Branches variant="light" />
        </div>
      </div>

      {/* Workshop Services Section - 2026 */}
      <section className="py-8 sm:py-10 md:py-12 bg-gradient-to-br from-white via-gray-50 to-red-50/20 relative overflow-hidden">
        {/* Decorative gradient background elements - Reduced size */}
        <div className="absolute top-0 left-0 w-32 h-32 sm:w-48 sm:h-48 md:w-64 md:h-64 bg-red-500/5 rounded-full blur-2xl"></div>
        <div className="absolute bottom-0 right-0 w-32 h-32 sm:w-48 sm:h-48 md:w-64 md:h-64 bg-orange-500/5 rounded-full blur-2xl"></div>
        
        {/* Section Header - Centered */}
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 mb-4 sm:mb-5 md:mb-6 relative z-10">
          <div className="text-center">
            <div className="flex items-center justify-center gap-2 sm:gap-3 mb-2">
              <div className="h-1 w-6 sm:w-8 md:w-10 bg-gradient-to-r from-red-600 to-red-500"></div>
              <span className="text-black font-bold text-sm sm:text-base md:text-lg">Workshop Services – 2026</span>
              <div className="h-1 w-6 sm:w-8 md:w-10 bg-gradient-to-r from-red-600 to-red-500"></div>
            </div>
          </div>
        </div>

        {/* Main Content Container */}
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="relative rounded-lg sm:rounded-xl md:rounded-2xl overflow-hidden shadow-md sm:shadow-lg md:shadow-xl">
            {/* Background Image with Reduced Blur - More visible */}
            <div className="absolute inset-0">
              <Image
                src="/images/4089179871ecc9d61a665d6868f0020a2945d550.jpg"
                alt="Industrial Workshop Coming Soon"
                fill
                className="object-cover blur-[1px]" /* Reduced blur for more visibility */
                sizes="(max-width: 768px) 100vw, 80vw"
              />
              {/* Lighter overlay for better image visibility */}
              <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/50 to-black/60"></div>
            </div>

            {/* Content with Reduced Padding */}
            <div className="relative z-10 p-3 sm:p-4 md:p-6 lg:p-8 xl:p-10">
              {/* Main Title and Subtitle - Now inside container */}
              <div className="text-center mb-4 sm:mb-5 md:mb-6 lg:mb-8">
                <h2 className="text-base sm:text-lg md:text-xl lg:text-2xl font-bold text-white mb-1 sm:mb-2 md:mb-3">
                  Expanding Our Capabilities in 2026
                </h2>
                <p className="text-xs sm:text-sm md:text-base text-white/90">
                  State-of-the-Art Service Workshop Coming Soon
                </p>
              </div>

              {/* Services Grid - Updated to 4 categories */}
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-3 sm:gap-4 md:gap-6">
                {/* Agitator Services */}
                <div className="text-center">
                  <div className="w-9 h-9 sm:w-10 sm:h-10 md:w-11 md:h-11 lg:w-12 lg:h-12 bg-white rounded-full flex items-center justify-center mx-auto mb-2 sm:mb-3 md:mb-4">
                    <Wrench className="w-4 h-4 sm:w-4.5 sm:h-4.5 md:w-5 md:h-5 lg:w-5.5 lg:h-5.5 text-black" />
                  </div>
                  <h3 className="text-sm sm:text-base md:text-lg lg:text-xl font-bold text-white mb-2 sm:mb-3 md:mb-4">Agitator Services</h3>
                  <ul className="space-y-1 sm:space-y-1.5 md:space-y-2">
                    <li className="flex items-start gap-1.5 sm:gap-2 text-white">
                      <Check className="w-2.5 h-2.5 sm:w-3 sm:h-3 md:w-3.5 md:h-3.5 text-white flex-shrink-0 mt-0.5" />
                      <span className="text-xs sm:text-sm text-left">Servicing & Maintenance</span>
                    </li>
                    <li className="flex items-start gap-1.5 sm:gap-2 text-white">
                      <Check className="w-2.5 h-2.5 sm:w-3 sm:h-3 md:w-3.5 md:h-3.5 text-white flex-shrink-0 mt-0.5" />
                      <span className="text-xs sm:text-sm text-left">Gear Repair</span>
                    </li>
                    <li className="flex items-start gap-1.5 sm:gap-2 text-white">
                      <Check className="w-2.5 h-2.5 sm:w-3 sm:h-3 md:w-3.5 md:h-3.5 text-white flex-shrink-0 mt-0.5" />
                      <span className="text-xs sm:text-sm text-left">Bearing Replacement</span>
                    </li>
                  </ul>
                </div>

                {/* Electrical Works */}
                <div className="text-center">
                  <div className="w-9 h-9 sm:w-10 sm:h-10 md:w-11 md:h-11 lg:w-12 lg:h-12 bg-white rounded-full flex items-center justify-center mx-auto mb-2 sm:mb-3 md:mb-4">
                    <Zap className="w-4 h-4 sm:w-4.5 sm:h-4.5 md:w-5 md:h-5 lg:w-5.5 lg:h-5.5 text-black" />
                  </div>
                  <h3 className="text-sm sm:text-base md:text-lg lg:text-xl font-bold text-white mb-2 sm:mb-3 md:mb-4">Electrical Works</h3>
                  <ul className="space-y-1 sm:space-y-1.5 md:space-y-2">
                    <li className="flex items-start gap-1.5 sm:gap-2 text-white">
                      <Check className="w-2.5 h-2.5 sm:w-3 sm:h-3 md:w-3.5 md:h-3.5 text-white flex-shrink-0 mt-0.5" />
                      <span className="text-xs sm:text-sm text-left">Motor Rewinding</span>
                    </li>
                    <li className="flex items-start gap-1.5 sm:gap-2 text-white">
                      <Check className="w-2.5 h-2.5 sm:w-3 sm:h-3 md:w-3.5 md:h-3.5 text-white flex-shrink-0 mt-0.5" />
                      <span className="text-xs sm:text-sm text-left">Control Systems</span>
                    </li>
                    <li className="flex items-start gap-1.5 sm:gap-2 text-white">
                      <Check className="w-2.5 h-2.5 sm:w-3 sm:h-3 md:w-3.5 md:h-3.5 text-white flex-shrink-0 mt-0.5" />
                      <span className="text-xs sm:text-sm text-left">System Integration</span>
                    </li>
                  </ul>
                </div>

                {/* Partnership */}
                <div className="text-center">
                  <div className="w-9 h-9 sm:w-10 sm:h-10 md:w-11 md:h-11 lg:w-12 lg:h-12 bg-white rounded-full flex items-center justify-center mx-auto mb-2 sm:mb-3 md:mb-4">
                    <Network className="w-4 h-4 sm:w-4.5 sm:h-4.5 md:w-5 md:h-5 lg:w-5.5 lg:h-5.5 text-black" />
                  </div>
                  <h3 className="text-sm sm:text-base md:text-lg lg:text-xl font-bold text-white mb-2 sm:mb-3 md:mb-4">Partnership</h3>
                  <ul className="space-y-1 sm:space-y-1.5 md:space-y-2">
                    <li className="flex items-start gap-1.5 sm:gap-2 text-white">
                      <Check className="w-2.5 h-2.5 sm:w-3 sm:h-3 md:w-3.5 md:h-3.5 text-white flex-shrink-0 mt-0.5" />
                      <span className="text-xs sm:text-sm text-left">Screening Technologies</span>
                    </li>
                    <li className="flex items-start gap-1.5 sm:gap-2 text-white">
                      <Check className="w-2.5 h-2.5 sm:w-3 sm:h-3 md:w-3.5 md:h-3.5 text-white flex-shrink-0 mt-0.5" />
                      <span className="text-xs sm:text-sm text-left">SPX FLOW</span>
                    </li>
                    <li className="flex items-start gap-1.5 sm:gap-2 text-white">
                      <Check className="w-2.5 h-2.5 sm:w-3 sm:h-3 md:w-3.5 md:h-3.5 text-white flex-shrink-0 mt-0.5" />
                      <span className="text-xs sm:text-sm text-left">HILDIS Expertise</span>
                    </li>
                  </ul>
                </div>

                {/* Screening Technologies */}
                <div className="text-center">
                  <div className="w-9 h-9 sm:w-10 sm:h-10 md:w-11 md:h-11 lg:w-12 lg:h-12 bg-white rounded-full flex items-center justify-center mx-auto mb-2 sm:mb-3 md:mb-4">
                    <Shield className="w-4 h-4 sm:w-4.5 sm:h-4.5 md:w-5 md:h-5 lg:w-5.5 lg:h-5.5 text-black" />
                  </div>
                  <h3 className="text-sm sm:text-base md:text-lg lg:text-xl font-bold text-white mb-2 sm:mb-3 md:mb-4">Screening Technologies</h3>
                  <ul className="space-y-1 sm:space-y-1.5 md:space-y-2">
                    <li className="flex items-start gap-1.5 sm:gap-2 text-white">
                      <Check className="w-2.5 h-2.5 sm:w-3 sm:h-3 md:w-3.5 md:h-3.5 text-white flex-shrink-0 mt-0.5" />
                      <span className="text-xs sm:text-sm text-left">Wear Protection Solutions</span>
                    </li>
                    <li className="flex items-start gap-1.5 sm:gap-2 text-white">
                      <Check className="w-2.5 h-2.5 sm:w-3 sm:h-3 md:w-3.5 md:h-3.5 text-white flex-shrink-0 mt-0.5" />
                      <span className="text-xs sm:text-sm text-left">Screening & Separation</span>
                    </li>
                    <li className="flex items-start gap-1.5 sm:gap-2 text-white">
                      <Check className="w-2.5 h-2.5 sm:w-3 sm:h-3 md:w-3.5 md:h-3.5 text-white flex-shrink-0 mt-0.5" />
                      <span className="text-xs sm:text-sm text-left">Fabrication & Support</span>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer Component */}
      <Footer />
    </div>
  );
}