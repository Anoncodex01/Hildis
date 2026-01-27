'use client';

import { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import ContactModal from '@/components/ContactModal'; // Make sure to import your ContactModal component

export default function RecentProjects() {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const openModal = () => setIsModalOpen(true);
  const closeModal = () => setIsModalOpen(false);

  return (
    <section className="py-8 bg-white">
      <div className="max-w-[85rem] mx-auto px-4 sm:px-6 lg:px-8 xl:px-12">
        {/* Contact Modal */}
        <ContactModal isOpen={isModalOpen} onClose={closeModal} />
        
        {/* Section Heading */}
        <div className="text-center mb-8 md:mb-12">
          {/* Sub-heading with red line */}
          <div className="flex items-center justify-center gap-3 mb-4 md:mb-6">
            <div className="h-1 w-8 md:w-12 bg-red-600"></div>
            <h2 className="text-lg sm:text-xl md:text-2xl font-bold text-gray-900">Recent Projects</h2>
          </div>
          
          {/* Main Heading */}
          <h3 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-bold text-gray-900 leading-tight">
            Real results delivered across<br />
            <span className="text-red-600">industries</span>
          </h3>
        </div>

        {/* Project Cards Container */}
        <div className="space-y-6 md:space-y-8">
          {/* First Project Card */}
          <div className="bg-white rounded-3xl shadow-2xl overflow-hidden flex flex-col lg:flex-row min-h-[300px] md:min-h-[350px] lg:h-[400px]">
            {/* Left Side - Image */}
            <div className="relative w-full lg:w-1/2 h-56 sm:h-72 md:h-80 lg:h-full overflow-hidden rounded-t-3xl lg:rounded-l-3xl lg:rounded-tr-none">
              <Image
                src="/images/Union (1).png"
                alt="Grinding Circuit Chemical Optimization"
                fill
                className="object-cover"
                style={{ objectFit: 'cover', objectPosition: 'center' }}
                sizes="(max-width: 1024px) 100vw, 50vw"
                priority
              />
            </div>
            
            {/* Right Side - Content */}
            <div className="w-full lg:w-1/2 bg-white flex flex-col justify-center p-4 sm:p-6 md:p-8 lg:pl-6 lg:pr-10 lg:py-8">
              {/* Main Title */}
              <h3 className="text-lg sm:text-xl md:text-2xl lg:text-3xl font-bold text-blue-900 mb-2 md:mb-3 leading-tight">
                Grinding Circuit Chemical Optimization
              </h3>
              
              {/* Introductory Paragraph */}
              <p className="text-gray-700 mb-3 md:mb-4 leading-relaxed text-xs sm:text-sm md:text-base">
                Hildis improved plant throughput by introducing a customized chemical additive package. Solutions Provided;
              </p>
              
              {/* Key Solutions */}
              <ul className="space-y-1 md:space-y-2 mb-3 md:mb-5">
                <li className="flex items-start gap-2">
                  <span className="text-red-600 mt-0.5 flex-shrink-0">◆</span>
                  <span className="text-gray-700 text-xs sm:text-sm md:text-base">Grinding aid chemicals</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-red-600 mt-0.5 flex-shrink-0">◆</span>
                  <span className="text-gray-700 text-xs sm:text-sm md:text-base">Process testing and dosing calibration</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-red-600 mt-0.5 flex-shrink-0">◆</span>
                  <span className="text-gray-700 text-xs sm:text-sm md:text-base">Onsite technical support</span>
                </li>
              </ul>
              
              {/* Metadata and Button Container */}
              <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 md:gap-6">
                {/* Project Metadata */}
                <div className="space-y-1">
                  <div>
                    <span className="font-bold text-gray-900 text-xs sm:text-sm md:text-base">Client: </span>
                    <span className="text-gray-700 text-xs sm:text-sm md:text-base">Buzwagi Gold Mine</span>
                  </div>
                  <div>
                    <span className="font-bold text-gray-900 text-xs sm:text-sm md:text-base">Duration: </span>
                    <span className="text-gray-700 text-xs sm:text-sm md:text-base">9 Months</span>
                  </div>
                  <div>
                    <span className="font-bold text-gray-900 text-xs sm:text-sm md:text-base">Year: </span>
                    <span className="text-gray-700 text-xs sm:text-sm md:text-base">2024</span>
                  </div>
                </div>
                
                {/* Get a Quote Button - Now opens modal */}
                <button
                  onClick={openModal}
                  className="bg-red-600 text-white px-5 sm:px-7 py-2.5 sm:py-3.5 rounded-xl font-semibold hover:bg-red-700 transition-colors duration-300 text-center shadow-lg hover:shadow-xl transform hover:-translate-y-0.5 text-sm sm:text-base md:text-lg whitespace-nowrap"
                >
                  Get a Quote
                </button>
              </div>
            </div>
          </div>

          {/* Second Project Card */}
          <div className="bg-white rounded-3xl shadow-2xl overflow-hidden flex flex-col lg:flex-row min-h-[300px] md:min-h-[350px] lg:h-[400px]">
            {/* Left Side - Image */}
            <div className="relative w-full lg:w-1/2 h-56 sm:h-72 md:h-80 lg:h-full overflow-hidden rounded-t-3xl lg:rounded-l-3xl lg:rounded-tr-none">
              <Image
                src="/images/Union.png"
                alt="Cement Kiln Production Enhancement"
                fill
                className="object-cover"
                style={{ objectFit: 'cover', objectPosition: 'center' }}
                sizes="(max-width: 1024px) 100vw, 50vw"
                priority
              />
            </div>
            
            {/* Right Side - Content */}
            <div className="w-full lg:w-1/2 bg-white flex flex-col justify-center p-4 sm:p-6 md:p-8 lg:pl-6 lg:pr-10 lg:py-8">
              {/* Main Title */}
              <h3 className="text-lg sm:text-xl md:text-2xl lg:text-3xl font-bold text-blue-900 mb-2 md:mb-3 leading-tight">
                Cement Kiln Production Enhancement
              </h3>
              
              {/* Introductory Paragraph */}
              <p className="text-gray-700 mb-3 md:mb-4 leading-relaxed text-xs sm:text-sm md:text-base">
                Introduced performance additives to improve clinker strength and reduce energy use. Solutions Provided;
              </p>
              
              {/* Key Solutions */}
              <ul className="space-y-1 md:space-y-2 mb-3 md:mb-5">
                <li className="flex items-start gap-2">
                  <span className="text-red-600 mt-0.5 flex-shrink-0">◆</span>
                  <span className="text-gray-700 text-xs sm:text-sm md:text-base">High-efficiency grinding aid</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-red-600 mt-0.5 flex-shrink-0">◆</span>
                  <span className="text-gray-700 text-xs sm:text-sm md:text-base">Kiln process advisory</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-red-600 mt-0.5 flex-shrink-0">◆</span>
                  <span className="text-gray-700 text-xs sm:text-sm md:text-base">Onsite chemical performance monitoring</span>
                </li>
              </ul>
              
              {/* Metadata and Button Container */}
              <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 md:gap-6">
                {/* Project Metadata */}
                <div className="space-y-1">
                  <div>
                    <span className="font-bold text-gray-900 text-xs sm:text-sm md:text-base">Client: </span>
                    <span className="text-gray-700 text-xs sm:text-sm md:text-base">Tanga Cement</span>
                  </div>
                  <div>
                    <span className="font-bold text-gray-900 text-xs sm:text-sm md:text-base">Duration: </span>
                    <span className="text-gray-700 text-xs sm:text-sm md:text-base">9 Months</span>
                  </div>
                  <div>
                    <span className="font-bold text-gray-900 text-xs sm:text-sm md:text-base">Year: </span>
                    <span className="text-gray-700 text-xs sm:text-sm md:text-base">2025</span>
                  </div>
                </div>
                
                {/* Get a Quote Button - Now opens modal */}
                <button
                  onClick={openModal}
                  className="bg-red-600 text-white px-5 sm:px-7 py-2.5 sm:py-3.5 rounded-xl font-semibold hover:bg-red-700 transition-colors duration-300 text-center shadow-lg hover:shadow-xl transform hover:-translate-y-0.5 text-sm sm:text-base md:text-lg whitespace-nowrap"
                >
                  Get a Quote
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* View All Projects Button */}
        <div className="text-center mt-8 md:mt-10">
          <Link 
            href="/projects"
            className="inline-block bg-red-600 text-white px-8 sm:px-10 py-3 sm:py-4 rounded-xl font-semibold hover:bg-red-700 transition-colors duration-300 text-base sm:text-lg md:text-xl shadow-xl hover:shadow-2xl transform hover:-translate-y-0.5"
          >
            View All Projects
          </Link>
        </div>
      </div>
    </section>
  );
}