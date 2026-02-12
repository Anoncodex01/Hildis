'use client';

import Image from 'next/image';

interface ClientLogosProps {
  title?: string;
  source?: 'clients' | 'partners' | 'lubricantClients';
}

// Logos 1-14 from public/logo (excluding hildis.png) - names from logo files
const clientLogos: { src: string; alt: string }[] = [
  { src: '/logo/1.png', alt: 'Lindi Jumbo Limited' },
  { src: '/logo/2.png', alt: 'Shanta Gold' },
  { src: '/logo/3.png', alt: 'Barrick Bulyanhulu' },
  { src: '/logo/4.png', alt: 'Ruvuma Mining' },
  { src: '/logo/5.png', alt: 'MGM Matongo Gold Mine' },
  { src: '/logo/6.png', alt: 'Jitegemea Minerals Co. Ltd.' },
  { src: '/logo/7.png', alt: 'Mkwawa Leaf Tobacco Limited' },
  { src: '/logo/8.png', alt: 'Mtibwa Sugar' },
  { src: '/logo/9.png', alt: 'Mkulazi Sugar' },
  { src: '/logo/10.png', alt: 'Twiga Cement' },
  { src: '/logo/11.png', alt: 'TPC Limited' },
  { src: '/logo/12.png', alt: 'Simba Cement' },
  { src: '/logo/13.png', alt: 'Anglogold Ashanti' },
  { src: '/logo/14.png', alt: 'Sotta Mining' },
];

// Logos 1-15 from public/partner
const partnerLogos: { src: string; alt: string }[] = [
  { src: '/partner/1.png', alt: 'Partner 1' },
  { src: '/partner/2.png', alt: 'Partner 2' },
  { src: '/partner/3.png', alt: 'Partner 3' },
  { src: '/partner/4.png', alt: 'Partner 4' },
  { src: '/partner/5.png', alt: 'Partner 5' },
  { src: '/partner/6.png', alt: 'Partner 6' },
  { src: '/partner/7.png', alt: 'Partner 7' },
  { src: '/partner/8.png', alt: 'Partner 8' },
  { src: '/partner/9.png', alt: 'Partner 9' },
  { src: '/partner/10.png', alt: 'Partner 10' },
  { src: '/partner/11.png', alt: 'Partner 11' },
  { src: '/partner/12.png', alt: 'Partner 12' },
  { src: '/partner/13.png', alt: 'Partner 13' },
  { src: '/partner/14.png', alt: 'Partner 14' },
  { src: '/partner/15.png', alt: 'Partner 15' },
];

// Lubricant clients from public/lubricantpartner
const lubricantClientLogos: { src: string; alt: string }[] = [
  { src: '/lubricantpartner/TPA Logo_bg_white 1.png', alt: 'Tanzania Ports Authority' },
  { src: '/lubricantpartner/tanapa 1.png', alt: 'Tanzania National Parks' },
  { src: '/lubricantpartner/ngorongoro-logo-e1681398206588 1.png', alt: 'Ngorongoro Conservation Area' },
];

export default function ClientLogos({ title = "Our Clients", source = "clients" }: ClientLogosProps) {
  const logos =
    source === 'partners' ? partnerLogos
    : source === 'lubricantClients' ? lubricantClientLogos
    : clientLogos;
  return (
    <section className="py-12 bg-white overflow-hidden">
      <h2 className="text-center text-3xl font-bold text-gray-900 mb-10">{title}</h2>

      <div className="relative">
        <div className="overflow-hidden">
          <div className="flex animate-scroll whitespace-nowrap">
            {[...Array(3)].map((_, copyIndex) =>
              logos.map((logo, index) => (
                <div
                  key={`${copyIndex}-${index}`}
                  className="inline-flex items-center justify-center shrink-0 mx-6"
                  style={{ width: '100px', height: '40px' }}
                >
                  <Image
                    src={logo.src}
                    alt={logo.alt}
                    width={100}
                    height={40}
                    className="object-contain w-full h-full"
                    unoptimized
                  />
                </div>
              ))
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
