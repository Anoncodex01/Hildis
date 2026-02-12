'use client';

import Image from 'next/image';

type ProductData = {
  image: string;
  name?: string;
  title?: string;
  description: string;
  uses: string[];
  tags: string;
  industries: string;
};

type ProductCardProps = {
  product: ProductData;
  showContactButton?: boolean;
  onContactClick?: (name: string) => void;
  compact?: boolean;
};

export default function ProductCard({ product, showContactButton = true, onContactClick, compact }: ProductCardProps) {
  const displayName = product.title ?? product.name ?? '';
  const wrapperClass = compact
    ? 'flex justify-center mt-8 sm:mt-10 md:mt-12 px-2'
    : 'flex justify-center mt-8 sm:mt-10 md:mt-12 mb-8 sm:mb-10 md:mb-12 px-2';
  return (
    <div className={wrapperClass}>
      <div
        className="w-full max-w-[1228px]"
        style={{ filter: 'drop-shadow(0 0 10px rgba(0, 0, 0, 0.25))' }}
      >
        <div
          className="bg-white rounded-[20px] overflow-hidden min-h-[420px] flex flex-col lg:flex-row gap-4 lg:gap-[20px]"
          style={{ clipPath: 'polygon(0 80px, 80px 0, 100% 0, 100% 100%, 0 100%)' }}
        >
          <div className="lg:w-[540px] lg:flex-shrink-0 lg:min-h-[400px] relative min-h-[240px] overflow-hidden rounded-[20px]">
            <div className="relative w-full h-full min-h-[240px] lg:min-h-[400px]">
              <div className="absolute inset-0">
                <Image
                  src={product.image}
                  alt={displayName}
                  fill
                  className="object-cover object-center rounded-[20px]"
                  sizes="(max-width: 768px) 100vw, 540px"
                />
                <div
                  className="absolute inset-0 bg-gradient-to-r from-black/5 to-transparent pointer-events-none rounded-[20px]"
                  aria-hidden
                />
              </div>
            </div>
          </div>
          <div className="flex-1 p-6 sm:p-8 lg:py-6 lg:pl-6 lg:pr-10 flex flex-col justify-center min-h-[400px]">
            <h3 className="text-xl sm:text-2xl md:text-3xl font-bold text-[#1D2550] mb-3">
              {displayName}
            </h3>
            <p className="text-gray-700 text-sm sm:text-base leading-relaxed mb-4">
              {product.description}
            </p>
            <div className="mb-4">
              <h4 className="text-sm font-bold text-[#1D2550] mb-2">Uses:</h4>
              <ul className="space-y-1.5">
                {product.uses.map((use, idx) => (
                  <li key={idx} className="flex items-start gap-2">
                    <span className="text-red-600 text-sm mt-0.5 flex-shrink-0">◆</span>
                    <span className="text-gray-700 text-xs sm:text-sm leading-relaxed">{use}</span>
                  </li>
                ))}
              </ul>
            </div>
            <div className="mb-3">
              <h4 className="text-sm font-bold text-[#1D2550] mb-1">Tags:</h4>
              <p className="text-gray-600 text-xs sm:text-sm leading-relaxed">{product.tags}</p>
            </div>
            <div className="mb-6">
              <h4 className="text-sm font-bold text-[#1D2550] mb-1">Industries:</h4>
              <p className="text-gray-600 text-xs sm:text-sm leading-relaxed">{product.industries}</p>
            </div>
            {showContactButton && onContactClick && (
              <button
                onClick={() => onContactClick(displayName)}
                className="bg-red-600 text-white px-6 py-3 rounded-lg font-semibold hover:bg-red-700 transition-colors duration-300 w-full sm:w-auto text-sm"
              >
                Contact for Inquiry
              </button>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
