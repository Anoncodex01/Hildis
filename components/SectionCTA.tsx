'use client';

import Image from 'next/image';
import Link from 'next/link';

interface SectionCTAProps {
  imageSrc: string;
  imageAlt: string;
}

export default function SectionCTA({ imageSrc, imageAlt }: SectionCTAProps) {
  return (
    <section className="py-20 bg-white relative">
      <div className="max-w-7xl mx-auto px-6">
        <div
          className="relative bg-red-600 rounded-[40px] overflow-hidden mx-auto"
          style={{
            width: '1336px',
            maxWidth: '100%',
            height: '350px',
          }}
        >
          <div className="grid lg:grid-cols-[45%_55%] items-center relative h-full">
            {/* LEFT SIDE CONTENT */}
            <div className="text-white z-20 p-8 lg:p-12 h-full flex flex-col justify-center">
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6 leading-tight whitespace-nowrap">
                Get expert support
                <br />
                For your operations
              </h2>

              <p className="text-lg md:text-xl text-white/90 mb-8 font-light">
                Speak with our team for supply requests, engineering support,
                or project planning.
              </p>

              <div className="flex flex-wrap gap-4">
                <Link
                  href="/contact"
                  className="bg-white text-gray-900 px-8 py-3 rounded-full font-medium hover:bg-gray-100 transition-all duration-300 hover:scale-105 shadow-lg"
                >
                  Contact Us
                </Link>

                <Link
                  href="/contact"
                  className="bg-white text-gray-900 px-8 py-3 rounded-full font-medium hover:bg-gray-100 transition-all duration-300 hover:scale-105 shadow-lg"
                >
                  Request a Quote
                </Link>
              </div>
            </div>

            {/* RIGHT SIDE IMAGE MASKED INSIDE CONTAINER */}
            <div className="relative h-full flex items-center justify-end">
              <div
                className="absolute overflow-hidden rounded-full"
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
                  src={imageSrc}
                  alt={imageAlt}
                  fill
                  className="object-cover"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}