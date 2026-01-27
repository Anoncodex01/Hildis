'use client';

import { useState } from 'react';
import ContactModal from './ContactModal';
import Link from 'next/link';

export default function Hero() {
  const [isModalOpen, setIsModalOpen] = useState(false);

  return (
    <>
      <section className="relative overflow-hidden mx-auto px-4 sm:px-6 lg:px-8">
        <div 
          className="relative overflow-hidden mx-auto"
          style={{
            width: '100%',
            maxWidth: '1344px',
            height: 'auto',
            minHeight: '400px',
            aspectRatio: '1344/581',
            marginTop: '0',
            borderRadius: 'clamp(12px, 2vw, 20px)',
          }}
        >
          <video
            className="absolute inset-0 w-full h-full object-cover"
            autoPlay
            loop
            muted
            playsInline
          >
            <source src="/video/hero.mp4" type="video/mp4" />
            {/* Fallback image for browsers that don't support video */}
            <img 
              src="/video/hero-fallback.jpg" 
              alt="Industrial Excellence" 
              className="absolute inset-0 w-full h-full object-cover"
            />
          </video>
          
          {/* Overlay for better text readability */}
          <div className="absolute inset-0 bg-black/40" />

          <div className="relative h-full flex flex-col items-center justify-center text-center px-4 sm:px-6 lg:px-8 py-8 sm:py-12 lg:py-16 max-w-5xl mx-auto z-10">
            <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-bold text-white mb-4 sm:mb-5 md:mb-6 leading-tight px-2">
              Reliable Industrial & Mining<br className="hidden sm:block" />Solutions for Africa
            </h1>

            <p className="text-sm sm:text-base md:text-lg lg:text-xl text-white/95 mb-6 sm:mb-8 md:mb-10 max-w-2xl sm:max-w-3xl md:max-w-4xl leading-relaxed px-4">
              Delivering high-quality industrial equipment, premium chemicals, and expert technical services. We guarantee peak performance, build unwavering trust, and ensure on-time, every time delivery across East Africa.
            </p>

            <div className="flex flex-col sm:flex-row flex-wrap gap-3 sm:gap-4 justify-center w-full sm:w-auto px-4">
              <Link 
                href="/services"
                className="bg-white text-gray-900 px-5 sm:px-6 md:px-8 py-2.5 sm:py-3 md:py-3.5 rounded-full font-medium hover:bg-gray-100 transition-all duration-300 shadow-lg text-sm sm:text-base w-full sm:w-auto flex items-center justify-center"
              >
                Explore Our Solutions
              </Link>
              <button 
                onClick={() => setIsModalOpen(true)}
                className="bg-gradient-to-r from-red-600 to-red-700 text-white px-5 sm:px-6 md:px-8 py-2.5 sm:py-3 md:py-3.5 rounded-full font-medium hover:from-red-700 hover:to-red-800 transition-all duration-300 shadow-lg text-sm sm:text-base w-full sm:w-auto"
              >
                Contact Our Team
              </button>
            </div>
          </div>
        </div>
      </section>
      <ContactModal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} />
    </>
  );
}