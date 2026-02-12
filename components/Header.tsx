'use client';

import { ChevronDown, ArrowUpRight, Menu, X } from 'lucide-react';
import Image from 'next/image';
import { useState, useEffect } from 'react';
import { usePathname } from 'next/navigation';
import ContactModal from './ContactModal';

export default function Header() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isProductsDropdownOpen, setIsProductsDropdownOpen] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isMobileProductsDropdownOpen, setIsMobileProductsDropdownOpen] = useState(false);
  const pathname = usePathname();

  // Close mobile menu when route changes
  useEffect(() => {
    setIsMobileMenuOpen(false);
    setIsMobileProductsDropdownOpen(false);
  }, [pathname]);

  const isActive = (path: string) => {
    if (path === '/') {
      return pathname === '/';
    }
    return pathname?.startsWith(path);
  };

  return (
    <>
      <header className="fixed top-0 left-0 right-0 bg-white/95 backdrop-blur-sm z-50 px-4 sm:px-6 py-2.5 sm:py-3 shadow-sm">
        <div className="max-w-6xl mx-auto flex items-center justify-between">
          {/* Logo */}
          <div className="flex items-center">
            <div className="w-28 sm:w-32 md:w-36 lg:w-40 h-7 sm:h-8 md:h-9 lg:h-10 relative">
              <Image
                src="/logo/hildis.png"
                alt="Hildis Logo"
                fill
                className="object-contain"
                priority
                sizes="(max-width: 640px) 112px, (max-width: 768px) 128px, (max-width: 1024px) 144px, 160px"
              />
            </div>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center gap-3 lg:gap-4 xl:gap-5">
            <a 
              href="/" 
              className={`font-medium text-sm transition-colors px-2 py-1 ${
                isActive('/') ? 'text-red-600' : 'text-gray-700 hover:text-red-600'
              }`}
            >
              Home
            </a>
            <a 
              href="/about" 
              className={`font-medium text-sm transition-colors px-2 py-1 ${
                isActive('/about') ? 'text-red-600' : 'text-gray-700 hover:text-red-600'
              }`}
            >
              About
            </a>
            
            {/* Products Dropdown */}
            <div 
              className="relative"
              onMouseEnter={() => setIsProductsDropdownOpen(true)}
              onMouseLeave={() => setIsProductsDropdownOpen(false)}
            >
              <a
                href="#"
                className={`font-medium text-sm flex items-center gap-1 transition-colors px-2 py-1 ${
                  isActive('/products') || isActive('/industrial-equipment') || isActive('/chemical-products') || isActive('/electrical-automation') || isActive('/lubricants-fluid-technologies')
                    ? 'text-red-600' 
                    : 'text-gray-700 hover:text-red-600'
                }`}
              >
                Products
                <ChevronDown className="w-3 h-3" />
              </a>
              
              {isProductsDropdownOpen && (
                <div className="absolute top-full left-0 pt-2 w-52 lg:w-56 z-50">
                  <div className="bg-white rounded-lg shadow-xl border border-gray-200 py-1">
                    <a
                      href="/industrial-equipment"
                      className={`block px-3 py-2 text-sm hover:bg-gray-50 transition-colors ${
                        isActive('/industrial-equipment') ? 'text-red-600 font-semibold' : 'text-gray-700'
                      }`}
                    >
                      Industrial Equipment
                    </a>
                    <a
                      href="/chemical-products"
                      className={`block px-3 py-2 text-sm hover:bg-gray-50 transition-colors ${
                        isActive('/chemical-products') ? 'text-red-600 font-semibold' : 'text-gray-700'
                      }`}
                    >
                      Chemical & Solutions
                    </a>
                    <a
                      href="/electrical-automation"
                      className={`block px-3 py-2 text-sm hover:bg-gray-50 transition-colors ${
                        isActive('/electrical-automation') ? 'text-red-600 font-semibold' : 'text-gray-700'
                      }`}
                    >
                      Electrical & Automation
                    </a>
                    <a
                      href="/lubricants-fluid-technologies"
                      className={`block px-3 py-2 text-sm hover:bg-gray-50 transition-colors ${
                        isActive('/lubricants-fluid-technologies') ? 'text-red-600 font-semibold' : 'text-gray-700'
                      }`}
                    >
                      Lubricants & Fluid Tech
                    </a>
                  </div>
                </div>
              )}
            </div>
            
            {/* Services Link (no dropdown) */}
            <a 
              href="/services" 
              className={`font-medium text-sm transition-colors px-2 py-1 ${
                isActive('/services') ? 'text-red-600' : 'text-gray-700 hover:text-red-600'
              }`}
            >
              Services
            </a>
            
            <a 
              href="/projects" 
              className={`font-medium text-sm transition-colors px-2 py-1 ${
                isActive('/projects') ? 'text-red-600' : 'text-gray-700 hover:text-red-600'
              }`}
            >
              Projects
            </a>
            
            <a 
              href="/contact-us" 
              className={`font-medium text-sm transition-colors px-2 py-1 ${
                isActive('/contact-us') ? 'text-red-600' : 'text-gray-700 hover:text-red-600'
              }`}
            >
              Contact
            </a>
          </nav>

          {/* Desktop CTA Button */}
          <button 
            onClick={() => setIsModalOpen(true)}
            className="hidden md:flex bg-[#C43033] hover:bg-[#A02629] text-white px-3 lg:px-4 py-1.5 lg:py-2 rounded-[30px] items-center gap-2 shadow-lg transition-all duration-300 hover:shadow-xl text-sm"
          >
            <span>Get A Quote</span>
            <div className="w-5 h-5 lg:w-6 lg:h-6 bg-white rounded-full flex items-center justify-center flex-shrink-0">
              <ArrowUpRight className="w-2.5 h-2.5 lg:w-3 lg:h-3 text-black" strokeWidth={2.5} />
            </div>
          </button>

          {/* Mobile Menu Button */}
          <button 
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="md:hidden bg-[#C43033] hover:bg-[#A02629] text-white p-2 rounded-full flex items-center justify-center transition-colors"
            aria-label={isMobileMenuOpen ? "Close menu" : "Open menu"}
          >
            {isMobileMenuOpen ? (
              <X className="w-4 h-4" />
            ) : (
              <Menu className="w-4 h-4" />
            )}
          </button>
        </div>

        {/* Mobile Navigation Menu */}
        {isMobileMenuOpen && (
          <div className="md:hidden absolute top-full left-0 right-0 bg-white border-t border-gray-200 shadow-lg z-40">
            <div className="px-4 py-3">
              <a 
                href="/" 
                className={`block py-2.5 px-3 font-medium text-gray-900 hover:bg-red-50 hover:text-red-600 rounded-lg transition-colors ${
                  isActive('/') ? 'text-red-600 bg-red-50' : ''
                }`}
              >
                Home
              </a>
              <a 
                href="/about" 
                className={`block py-2.5 px-3 font-medium text-gray-900 hover:bg-red-50 hover:text-red-600 rounded-lg transition-colors ${
                  isActive('/about') ? 'text-red-600 bg-red-50' : ''
                }`}
              >
                About
              </a>
              
              {/* Mobile Products Dropdown */}
              <div className="py-2 px-3">
                <button
                  onClick={() => setIsMobileProductsDropdownOpen(!isMobileProductsDropdownOpen)}
                  className={`flex items-center justify-between w-full py-2.5 px-3 font-medium text-gray-900 hover:bg-red-50 hover:text-red-600 rounded-lg transition-colors ${
                    isActive('#') || isActive('/industrial-equipment') || isActive('/chemical-products') || isActive('/electrical-automation') || isActive('/lubricants-fluid-technologies')
                      ? 'text-red-600 bg-red-50' 
                      : ''
                  }`}
                >
                  <span>Products</span>
                  <ChevronDown className={`w-3.5 h-3.5 transition-transform ${isMobileProductsDropdownOpen ? 'rotate-180' : ''}`} />
                </button>
                
                {isMobileProductsDropdownOpen && (
                  <div className="pl-3 mt-1.5 space-y-1 border-l-2 border-gray-200 ml-3">
                    <a
                      href="/industrial-equipment"
                      className={`block py-2 px-3 text-sm font-medium hover:bg-red-50 hover:text-red-600 rounded-lg transition-colors ${
                        isActive('/industrial-equipment') ? 'text-red-600 bg-red-50' : 'text-gray-700'
                      }`}
                    >
                      Industrial Equipment
                    </a>
                    <a
                      href="/chemical-products"
                      className={`block py-2 px-3 text-sm font-medium hover:bg-red-50 hover:text-red-600 rounded-lg transition-colors ${
                        isActive('/chemical-products') ? 'text-red-600 bg-red-50' : 'text-gray-700'
                      }`}
                    >
                      Chemical & Solutions
                    </a>
                    <a
                      href="/electrical-automation"
                      className={`block py-2 px-3 text-sm font-medium hover:bg-red-50 hover:text-red-600 rounded-lg transition-colors ${
                        isActive('/electrical-automation') ? 'text-red-600 bg-red-50' : 'text-gray-700'
                      }`}
                    >
                      Electrical & Automation
                    </a>
                    <a
                      href="/lubricants-fluid-technologies"
                      className={`block py-2 px-3 text-sm font-medium hover:bg-red-50 hover:text-red-600 rounded-lg transition-colors ${
                        isActive('/lubricants-fluid-technologies') ? 'text-red-600 bg-red-50' : 'text-gray-700'
                      }`}
                    >
                      Lubricants & Fluid Tech
                    </a>
                  </div>
                )}
              </div>
              
              {/* Services Link (no dropdown on mobile) */}
              <a 
                href="/services" 
                className={`block py-2.5 px-3 font-medium text-gray-900 hover:bg-red-50 hover:text-red-600 rounded-lg transition-colors ${
                  isActive('/services') ? 'text-red-600 bg-red-50' : ''
                }`}
              >
                Services
              </a>
              
              <a 
                href="/projects" 
                className={`block py-2.5 px-3 font-medium text-gray-900 hover:bg-red-50 hover:text-red-600 rounded-lg transition-colors ${
                  isActive('/projects') ? 'text-red-600 bg-red-50' : ''
                }`}
              >
                Projects
              </a>
              
              <a 
                href="/contact-us" 
                className={`block py-2.5 px-3 font-medium text-gray-900 hover:bg-red-50 hover:text-red-600 rounded-lg transition-colors ${
                  isActive('/contact-us') ? 'text-red-600 bg-red-50' : ''
                }`}
              >
                Contact
              </a>
              
              {/* Mobile CTA Button */}
              <button 
                onClick={() => {
                  setIsModalOpen(true);
                  setIsMobileMenuOpen(false);
                }}
                className="w-full mt-3 bg-[#C43033] hover:bg-[#A02629] text-white py-2.5 rounded-[30px] flex items-center justify-center gap-2 shadow-lg transition-all duration-300 hover:shadow-xl"
              >
                <span>Get A Quote</span>
                <div className="w-6 h-6 bg-white rounded-full flex items-center justify-center">
                  <ArrowUpRight className="w-3 h-3 text-black" strokeWidth={2.5} />
                </div>
              </button>
            </div>
          </div>
        )}
      </header>
      
      {/* Spacer to prevent content from going under fixed header */}
      <div className="h-14 sm:h-16"></div>
      
      <ContactModal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} />
    </>
  );
}