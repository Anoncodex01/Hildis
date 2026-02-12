'use client';

import { useState } from 'react';
import dynamic from 'next/dynamic';
import { X } from 'lucide-react';

// Dynamically import the map component with SSR disabled
const DynamicTanzaniaMap = dynamic(
  () => import('@/components/TanzaniaMap'),
  { ssr: false }
);

interface BranchData {
  id: string;
  name: string;
  label: string;
  email: string;
  phone: string;
}

interface BranchesProps {
  variant?: 'dark' | 'light';
}

export default function Branches({ variant = 'light' }: BranchesProps) {
  const branches: BranchData[] = [
    { 
      id: 'arusha', 
      name: 'Arusha (H)', 
      label: 'Arusha (HQ)',
      email: 'info@hildiseastafrica.com',
      phone: '+255 740 547 470'
    },
    { 
      id: 'dar', 
      name: 'Dar Es Salaam', 
      label: 'Dar es Salaam',
      email: 'stephano.mkinga@hildiseastafrica.com',
      phone: '+255 754 434 247'
    },
    { 
      id: 'dodoma', 
      name: 'Dodoma', 
      label: 'Dodoma',
      email: 'sarah@hildiseastafrica.com',
      phone: '+255 756 925 639'
    },
    { 
      id: 'mwanza', 
      name: 'Mwanza', 
      label: 'Mwanza',
      email: 'jdaffa@hildiseastafrica.com',
      phone: '+255 718 796 079'
    },
    { 
      id: 'shinyanga', 
      name: 'Shinyanga', 
      label: 'Shinyanga',
      email: 'francis.kiyeyeu@hildiseastafrica.com',
      phone: '+255 754 434 445'
    },
    { 
      id: 'geita', 
      name: 'Geita', 
      label: 'Geita',
      email: 'info@hildiseastafrica.com',
      phone: '+255 754 434 303'
    },
    { 
      id: 'tanga', 
      name: 'Tanga', 
      label: 'Tanga',
      email: 'betty@hildiseastafrica.com',
      phone: '+255 759 236 752'
    },
  ];

  const [activeBranch, setActiveBranch] = useState<BranchData | null>(null);

  const bgColor = variant === 'light' ? 'bg-white' : 'bg-black';
  const textColor = variant === 'light' ? 'text-gray-900' : 'text-white';
  const borderColor = variant === 'light' ? 'border-gray-900' : 'border-white';
  const patternColor = variant === 'light' ? '%23000000' : '%23ffffff';

  const handleBranchClick = (branchId: string) => {
    const selectedBranch = branches.find(branch => branch.id === branchId);
    if (selectedBranch && selectedBranch.id === activeBranch?.id) {
      setActiveBranch(null);
    } else {
      setActiveBranch(selectedBranch || null);
    }
  };

  const handleCloseBranchInfo = () => {
    setActiveBranch(null);
  };

  return (
    <section className={`pt-4 pb-4 ${bgColor} relative overflow-hidden`}>
      {/* Hexagon pattern background */}
      <div 
        className="absolute inset-0 opacity-[0.05]"
        style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='${patternColor}' fill-opacity='1'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
        }}
      />

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        {/* Section Title */}
        <div className="text-center mb-4">
          <div className="flex items-center justify-center gap-3 mb-2">
            <div 
              style={{
                width: '28px',
                height: '0px',
                borderTop: '4px solid #C43033',
              }}
            ></div>
            <h2 className={`text-3xl font-bold ${textColor}`}>Our Branches</h2>
          </div>
        </div>

        {/* Branch Labels - Horizontal Row (Oval-shaped) */}
        <div className="flex flex-wrap justify-center gap-4 mb-2">
          {branches.map((branch) => (
            <button
              key={branch.id}
              onClick={() => handleBranchClick(branch.id)}
              className={`px-6 py-2 rounded-full border ${
                activeBranch?.id === branch.id 
                  ? 'border-red-600 text-red-600 bg-red-50' 
                  : `${borderColor} bg-transparent ${textColor}`
              } font-medium text-sm hover:border-red-600 hover:text-red-600 transition-all duration-300`}
              style={{ borderRadius: '9999px' }}
            >
              {branch.name}
            </button>
          ))}
        </div>

        {/* Contact Information Card */}
        {activeBranch && (
          <div className="mt-8 mb-6 animate-fade-in">
            <div className="max-w-md mx-auto bg-white rounded-xl shadow-lg border border-gray-200 overflow-hidden relative">
              {/* Close button */}
              <button
                onClick={handleCloseBranchInfo}
                className="absolute top-4 right-4 z-10 bg-gray-100 hover:bg-gray-200 rounded-full p-1.5 transition-colors"
                aria-label="Close branch info"
              >
                <X className="w-4 h-4 text-gray-600" />
              </button>
              
              <div className="bg-red-600 px-6 py-4">
                <h3 className="text-xl font-bold text-white">{activeBranch.label}</h3>
              </div>
              <div className="p-6">
                <div className="space-y-4">
                  <div className="flex items-start gap-4">
                    <div className="bg-red-100 p-3 rounded-lg">
                      <svg className="w-6 h-6 text-red-600" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 4.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                      </svg>
                    </div>
                    <div>
                      <p className="text-sm text-gray-600 mb-1">Email</p>
                      <a 
                        href={`mailto:${activeBranch.email}`}
                        className="text-lg font-medium text-gray-900 hover:text-red-600 transition-colors"
                      >
                        {activeBranch.email}
                      </a>
                    </div>
                  </div>
                  
                  <div className="flex items-start gap-4">
                    <div className="bg-red-100 p-3 rounded-lg">
                      <svg className="w-6 h-6 text-red-600" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                      </svg>
                    </div>
                    <div>
                      <p className="text-sm text-gray-600 mb-1">Phone</p>
                      <a 
                        href={`tel:${activeBranch.phone.replace(/\s+/g, '')}`}
                        className="text-lg font-medium text-gray-900 hover:text-red-600 transition-colors"
                      >
                        {activeBranch.phone}
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>

      {/* Map Container - Full Width, Reduced Spacing */}
      <div className={activeBranch ? '-mt-8' : '-mt-4'}>
        <DynamicTanzaniaMap activeBranch={activeBranch?.id || null} />
      </div>
    </section>
  );
}