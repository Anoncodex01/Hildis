'use client';

import { useState, useEffect } from 'react';
import Image from 'next/image';

export default function Team() {
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);
  const [showName, setShowName] = useState<boolean>(false);

  const teamMembers = [
    {
      name: 'Billy Mkinga',
      role: 'CEO',
      image: '/team/000e970c894362676f4310fe0d1e209e8335ed25.jpg',
    },
    {
      name: 'Valerie Abraham',
      role: 'Sales & Marketing',
      image: '/team/25a17eefc86fd4a5d59c1483e7dadf88215a968b.jpg',
    },
    {
      name: 'Steve Kazimoto',
      role: 'General Manager',
      image: '/team/50baa2d0f6c6fbf9f3d42cb160af44eb08e845f6.jpg',
    },
    {
      name: 'EMS. Hombe Wariawa',
      role: 'Technical Team',
      image: '/team/9ca7e145731df8d22284f4a536d8aff63f77a1f1.jpg',
    },
    {
      name: 'Jobu Kijole',
      role: 'Head of Finance',
      image: '/team/ae066c8f3c9b304899cf82f4b72fead1369bb3c4.jpg',
    },
    {
      name: 'Levina Ishengoma',
      role: 'Procurement',
      image: '/team/4af8cd9d5077e210c9b608e422f91571c92529c7.jpg',
    },
  ];

  useEffect(() => {
    if (hoveredIndex !== null) {
      // Show name immediately
      setShowName(true);
      
      // Hide name after 3 seconds
      const timeout = setTimeout(() => {
        setShowName(false);
      }, 3000);

      return () => clearTimeout(timeout);
    } else {
      setShowName(false);
    }
  }, [hoveredIndex]);

  const handleMouseEnter = (index: number) => {
    setHoveredIndex(index);
  };

  const handleMouseLeave = () => {
    setHoveredIndex(null);
    setShowName(false);
  };

  return (
    <section className="relative overflow-hidden mt-0">
      {/* FULL WIDTH BACKGROUND - edge to edge like About page sections */}
      <div className="absolute inset-0 bg-gradient-to-br from-gray-50 via-purple-50/30 to-pink-50/20">
        {/* Decorative gradient background elements - full width */}
        <div className="absolute inset-0 bg-gradient-to-r from-red-500/5 via-purple-500/5 to-pink-500/5"></div>
        <div className="absolute top-0 right-0 w-48 h-48 sm:w-64 sm:h-64 md:w-96 md:h-96 bg-red-500/10 rounded-full blur-3xl"></div>
        <div className="absolute bottom-0 left-0 w-48 h-48 sm:w-64 sm:h-64 md:w-96 md:h-96 bg-purple-500/10 rounded-full blur-3xl"></div>
      </div>

      {/* Content container with max-width and centered - EXACTLY like About page */}
      <div className="relative z-10">
        <div className="py-12 sm:py-16 md:py-20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            {/* Two Column Layout */}
            <div className="grid lg:grid-cols-2 gap-6 lg:gap-8 xl:gap-10 items-start">
              {/* Left Column - Information */}
              <div className="space-y-4 lg:space-y-5">
                <div className="flex items-center gap-3">
                  <div className="h-1 w-10 bg-red-600"></div>
                  <span className="text-gray-700 font-semibold tracking-wide uppercase text-xs sm:text-sm">
                    Frontline Team
                  </span>
                </div>
                
                <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 leading-tight">
                  Your Direct Line to Industrial{' '}
                  <span className="text-red-600">Excellence</span>
                </h2>
                
                <p className="text-gray-700 leading-relaxed text-sm sm:text-base lg:text-lg max-w-2xl">
                  Your dedicated partners in excellence, combining expert knowledge with unwavering commitment to your success. We stand by you with reliable support and innovative thinking for sustainable growth.
                </p>
              </div>

              {/* Right Column - Custom 3-Column Collage Layout */}
              <div className="relative">
                <div className="grid grid-cols-3 gap-2 sm:gap-3 md:gap-4">
                  {/* Column 1 (left) */}
                  <div className="flex flex-col gap-2 sm:gap-3 md:gap-4">
                    {/* Top image - medium size */}
                    <div
                      className="relative cursor-pointer group"
                      onMouseEnter={() => handleMouseEnter(0)}
                      onMouseLeave={handleMouseLeave}
                    >
                      <div
                        className={`relative w-full aspect-[3/4] rounded-xl md:rounded-2xl overflow-hidden transition-all duration-300 ${
                          hoveredIndex === 0
                            ? 'scale-105 z-10 shadow-lg ring-2 ring-white/50'
                            : hoveredIndex !== null
                            ? 'opacity-30 scale-95 blur-sm'
                            : 'opacity-100'
                        }`}
                      >
                        <Image
                          src={teamMembers[0].image}
                          alt={teamMembers[0].name}
                          fill
                          className="object-cover rounded-xl md:rounded-2xl transition-transform duration-300 group-hover:scale-110"
                          sizes="(max-width: 768px) 33vw, (max-width: 1024px) 25vw, 20vw"
                        />
                        
                        {/* Overlay for name and title */}
                        <div
                          className={`absolute inset-0 bg-gradient-to-t from-black/90 via-black/50 to-transparent rounded-xl md:rounded-2xl transition-all duration-300 ${
                            hoveredIndex === 0 && showName ? 'opacity-100' : 'opacity-0'
                          }`}
                        >
                          <div className="absolute bottom-0 left-0 right-0 p-3 text-white transform transition-all duration-300">
                            <h3 className="text-xs sm:text-sm font-bold mb-0.5">{teamMembers[0].name}</h3>
                            <p className="text-xs text-white/90">{teamMembers[0].role}</p>
                          </div>
                        </div>
                      </div>
                    </div>
                    
                    {/* Bottom image - larger height than top */}
                    <div
                      className="relative cursor-pointer group"
                      onMouseEnter={() => handleMouseEnter(1)}
                      onMouseLeave={handleMouseLeave}
                    >
                      <div
                        className={`relative w-full aspect-[3/4.5] rounded-xl md:rounded-2xl overflow-hidden transition-all duration-300 ${
                          hoveredIndex === 1
                            ? 'scale-105 z-10 shadow-lg ring-2 ring-white/50'
                            : hoveredIndex !== null
                            ? 'opacity-30 scale-95 blur-sm'
                            : 'opacity-100'
                        }`}
                      >
                        <Image
                          src={teamMembers[1].image}
                          alt={teamMembers[1].name}
                          fill
                          className="object-cover rounded-xl md:rounded-2xl transition-transform duration-300 group-hover:scale-110"
                          sizes="(max-width: 768px) 33vw, (max-width: 1024px) 25vw, 20vw"
                        />
                        
                        {/* Overlay for name and title */}
                        <div
                          className={`absolute inset-0 bg-gradient-to-t from-black/90 via-black/50 to-transparent rounded-xl md:rounded-2xl transition-all duration-300 ${
                            hoveredIndex === 1 && showName ? 'opacity-100' : 'opacity-0'
                          }`}
                        >
                          <div className="absolute bottom-0 left-0 right-0 p-3 text-white transform transition-all duration-300">
                            <h3 className="text-xs sm:text-sm font-bold mb-0.5">{teamMembers[1].name}</h3>
                            <p className="text-xs text-white/90">{teamMembers[1].role}</p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Column 2 (center) */}
                  <div className="flex flex-col gap-2 sm:gap-3 md:gap-4">
                    {/* Top image - tallest */}
                    <div
                      className="relative cursor-pointer group"
                      onMouseEnter={() => handleMouseEnter(2)}
                      onMouseLeave={handleMouseLeave}
                    >
                      <div
                        className={`relative w-full aspect-[3/5] rounded-xl md:rounded-2xl overflow-hidden transition-all duration-300 ${
                          hoveredIndex === 2
                            ? 'scale-105 z-10 shadow-lg ring-2 ring-white/50'
                            : hoveredIndex !== null
                            ? 'opacity-30 scale-95 blur-sm'
                            : 'opacity-100'
                        }`}
                      >
                        <Image
                          src={teamMembers[2].image}
                          alt={teamMembers[2].name}
                          fill
                          className="object-cover rounded-xl md:rounded-2xl transition-transform duration-300 group-hover:scale-110"
                          sizes="(max-width: 768px) 33vw, (max-width: 1024px) 25vw, 20vw"
                        />
                        
                        {/* Overlay for name and title */}
                        <div
                          className={`absolute inset-0 bg-gradient-to-t from-black/90 via-black/50 to-transparent rounded-xl md:rounded-2xl transition-all duration-300 ${
                            hoveredIndex === 2 && showName ? 'opacity-100' : 'opacity-0'
                          }`}
                        >
                          <div className="absolute bottom-0 left-0 right-0 p-3 text-white transform transition-all duration-300">
                            <h3 className="text-xs sm:text-sm font-bold mb-0.5">{teamMembers[2].name}</h3>
                            <p className="text-xs text-white/90">{teamMembers[2].role}</p>
                          </div>
                        </div>
                      </div>
                    </div>
                    
                    {/* Bottom image - shorter */}
                    <div
                      className="relative cursor-pointer group"
                      onMouseEnter={() => handleMouseEnter(3)}
                      onMouseLeave={handleMouseLeave}
                    >
                      <div
                        className={`relative w-full aspect-[3/3.5] rounded-xl md:rounded-2xl overflow-hidden transition-all duration-300 ${
                          hoveredIndex === 3
                            ? 'scale-105 z-10 shadow-lg ring-2 ring-white/50'
                            : hoveredIndex !== null
                            ? 'opacity-30 scale-95 blur-sm'
                            : 'opacity-100'
                        }`}
                      >
                        <Image
                          src={teamMembers[3].image}
                          alt={teamMembers[3].name}
                          fill
                          className="object-cover rounded-xl md:rounded-2xl transition-transform duration-300 group-hover:scale-110"
                          sizes="(max-width: 768px) 33vw, (max-width: 1024px) 25vw, 20vw"
                        />
                        
                        {/* Overlay for name and title */}
                        <div
                          className={`absolute inset-0 bg-gradient-to-t from-black/90 via-black/50 to-transparent rounded-xl md:rounded-2xl transition-all duration-300 ${
                            hoveredIndex === 3 && showName ? 'opacity-100' : 'opacity-0'
                          }`}
                        >
                          <div className="absolute bottom-0 left-0 right-0 p-3 text-white transform transition-all duration-300">
                            <h3 className="text-xs sm:text-sm font-bold mb-0.5">{teamMembers[3].name}</h3>
                            <p className="text-xs text-white/90">{teamMembers[3].role}</p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Column 3 (right) */}
                  <div className="flex flex-col gap-2 sm:gap-3 md:gap-4">
                    {/* Top image - same as column 1 top */}
                    <div
                      className="relative cursor-pointer group"
                      onMouseEnter={() => handleMouseEnter(4)}
                      onMouseLeave={handleMouseLeave}
                    >
                      <div
                        className={`relative w-full aspect-[3/4] rounded-xl md:rounded-2xl overflow-hidden transition-all duration-300 ${
                          hoveredIndex === 4
                            ? 'scale-105 z-10 shadow-lg ring-2 ring-white/50'
                            : hoveredIndex !== null
                            ? 'opacity-30 scale-95 blur-sm'
                            : 'opacity-100'
                        }`}
                      >
                        <Image
                          src={teamMembers[4].image}
                          alt={teamMembers[4].name}
                          fill
                          className="object-cover rounded-xl md:rounded-2xl transition-transform duration-300 group-hover:scale-110"
                          sizes="(max-width: 768px) 33vw, (max-width: 1024px) 25vw, 20vw"
                        />
                        
                        {/* Overlay for name and title */}
                        <div
                          className={`absolute inset-0 bg-gradient-to-t from-black/90 via-black/50 to-transparent rounded-xl md:rounded-2xl transition-all duration-300 ${
                            hoveredIndex === 4 && showName ? 'opacity-100' : 'opacity-0'
                          }`}
                        >
                          <div className="absolute bottom-0 left-0 right-0 p-3 text-white transform transition-all duration-300">
                            <h3 className="text-xs sm:text-sm font-bold mb-0.5">{teamMembers[4].name}</h3>
                            <p className="text-xs text-white/90">{teamMembers[4].role}</p>
                          </div>
                        </div>
                      </div>
                    </div>
                    
                    {/* Bottom image - same as column 2 bottom */}
                    <div
                      className="relative cursor-pointer group"
                      onMouseEnter={() => handleMouseEnter(5)}
                      onMouseLeave={handleMouseLeave}
                    >
                      <div
                        className={`relative w-full aspect-[3/4.5] rounded-xl md:rounded-2xl overflow-hidden transition-all duration-300 ${
                          hoveredIndex === 5
                            ? 'scale-105 z-10 shadow-lg ring-2 ring-white/50'
                            : hoveredIndex !== null
                            ? 'opacity-30 scale-95 blur-sm'
                            : 'opacity-100'
                        }`}
                      >
                        <Image
                          src={teamMembers[5].image}
                          alt={teamMembers[5].name}
                          fill
                          className="object-cover rounded-xl md:rounded-2xl transition-transform duration-300 group-hover:scale-110"
                          sizes="(max-width: 768px) 33vw, (max-width: 1024px) 25vw, 20vw"
                        />
                        
                        {/* Overlay for name and title */}
                        <div
                          className={`absolute inset-0 bg-gradient-to-t from-black/90 via-black/50 to-transparent rounded-xl md:rounded-2xl transition-all duration-300 ${
                            hoveredIndex === 5 && showName ? 'opacity-100' : 'opacity-0'
                          }`}
                        >
                          <div className="absolute bottom-0 left-0 right-0 p-3 text-white transform transition-all duration-300">
                            <h3 className="text-xs sm:text-sm font-bold mb-0.5">{teamMembers[5].name}</h3>
                            <p className="text-xs text-white/90">{teamMembers[5].role}</p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}