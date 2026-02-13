'use client';

import Image from 'next/image';
import { useState, useEffect } from 'react';

export default function Industries() {
  const industriesData = [
    {
      name: 'Mining & Minerals',
      image: '/images/Rectangle 6-1.png',
      stat: '10',
      description: 'Mining operations supported across East Africa'
    },
    {
      name: 'Cement Manufacturing',
      image: '/images/Rectangle 6-2.png',
      stat: '5',
      description: 'Cement production lines enhanced with Hildis support'
    },
    {
      name: 'Sugar & Agro-Processing',
      image: '/images/Rectangle 6-3.png',
      stat: '5',
      description: 'Sugar mills supported with industrial additives'
    },
    {
      name: 'Oil, Gas & Energy',
      image: '/images/Rectangle 6-4.png',
      stat: '3',
      description: 'Energy plants benefiting from reliable chemical dosing'
    },
    {
      name: 'Water Treatment',
      image: '/images/Rectangle 6-5.png',
      stat: '15',
      description: 'Water treatment systems improved with Hildis solutions'
    }
  ];

  const [selectedIndustry, setSelectedIndustry] = useState(0);
  const currentIndustry = industriesData[selectedIndustry];

  // Preload all images on component mount
  useEffect(() => {
    industriesData.forEach((industry) => {
      const img = new window.Image();
      img.src = industry.image;
    });
  }, []);

  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-6">
        {/* Header Section */}
        <div className="text-center mb-12">
          <div className="flex items-center justify-center gap-3 mb-6">
            <div className="h-1 w-12 bg-red-600"></div>
            <h2 className="text-xl md:text-2xl font-medium text-gray-900">— Industries We Serve</h2>
          </div>
          
          <h3 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 max-w-5xl mx-auto leading-tight">
            Supporting industrial sectors with reliable{' '}
            <span className="text-red-600">products</span> and{' '}
            <span className="text-red-600">engineering value</span>
          </h3>
        </div>

        {/* Main Content Area - Large Red Rectangle */}
        <div className="bg-red-600 rounded-3xl overflow-hidden shadow-2xl mx-auto relative w-full max-w-[1343px] lg:h-[564px]">
          <div className="grid lg:grid-cols-[30%_35%_35%] gap-0 h-full relative">
            {/* Left Section - Image */}
            <div className="relative h-56 sm:h-64 md:h-72 lg:h-full overflow-hidden rounded-t-3xl lg:rounded-t-none lg:rounded-l-3xl">
              {/* Preload all images but only show the selected one */}
              {industriesData.map((industry, index) => (
                <div
                  key={index}
                  className={`absolute inset-0 transition-opacity duration-300 ${
                    selectedIndustry === index ? 'opacity-100 z-10' : 'opacity-0 z-0'
                  }`}
                >
                  <Image
                    src={industry.image}
                    alt={industry.name}
                    fill
                    className="object-cover w-full h-full"
                    style={{
                      objectFit: 'cover',
                      objectPosition: 'center',
                    }}
                    priority={index === 0}
                    loading={index === 0 ? 'eager' : 'lazy'}
                  />
                </div>
              ))}
            </div>

            {/* Middle Section - Industries List */}
            <div className="lg:col-span-1 p-10 lg:p-14 flex flex-col justify-center relative bg-red-600">
              {/* Industries List */}
              <div className="space-y-6">
                {industriesData.map((industry, index) => (
                  <div
                    key={index}
                    onClick={() => setSelectedIndustry(index)}
                    className={`text-white text-2xl lg:text-3xl font-bold hover:translate-x-3 transition-all duration-300 cursor-pointer group ${
                      selectedIndustry === index ? 'translate-x-2' : ''
                    }`}
                  >
                    <span 
                      className={`transition-colors duration-300 ${
                        selectedIndustry === index 
                          ? 'text-white border-b-2 border-white pb-1' 
                          : 'group-hover:text-red-100'
                      }`}
                    >
                      {industry.name}
                    </span>
                  </div>
                ))}
              </div>
            </div>

            {/* Right Section - Statistics Box */}
            <div className="lg:col-span-1 relative bg-red-600">
              <div 
                className="absolute bg-[#C43033] rounded-2xl text-white flex flex-col justify-center items-center text-center"
                style={{
                  width: '375px',
                  height: '364px',
                  top: '97px',
                  left: '0px',
                  paddingTop: '81px',
                  paddingRight: '31px',
                  paddingBottom: '81px',
                  paddingLeft: '31px',
                  gap: '10px',
                  borderRadius: '16px',
                  boxShadow: '0 10px 25px rgba(0, 0, 0, 0.3), 0 5px 10px rgba(0, 0, 0, 0.2)',
                }}
              >
                <div 
                  className="text-white font-bold leading-none tracking-tight"
                  style={{
                    fontSize: 'clamp(3rem, 8vw, 5rem)',
                    lineHeight: '1',
                  }}
                >
                  {currentIndustry.stat}
                </div>
                <div 
                  className="text-white leading-relaxed font-medium mt-2"
                  style={{
                    fontSize: 'clamp(0.875rem, 1.5vw, 1.125rem)',
                    lineHeight: '1.5',
                  }}
                >
                  {currentIndustry.description}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
