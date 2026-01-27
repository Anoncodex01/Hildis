import Image from 'next/image';

interface ClientLogosProps {
  title?: string;
}

export default function ClientLogos({ title = "Our Clients" }: ClientLogosProps) {
  const logos = [
    '/logo/68 1.png',
    '/logo/69 1.png',
    '/logo/70 1.png',
    '/logo/71 1.png',
    '/logo/72 1.png',
    '/logo/73 2.png',
    '/logo/ee-removebg-preview 1.png',
    '/logo/ff-removebg-preview 1.png',
    '/logo/gg-removebg-preview 1.png',
  ];

  return (
    <section className="py-12 bg-white">
      <h2 className="text-center text-3xl font-bold text-gray-900 mb-10">{title}</h2>

      <div className="max-w-7xl mx-auto px-6">
        <div className="flex items-center gap-6 overflow-x-auto flex-nowrap sm:flex-wrap sm:justify-center md:gap-12">
          {logos.map((logo, index) => (
            <div
              key={index}
              className="flex items-center justify-center transition-all duration-300 hover:scale-105 shrink-0"
              style={{
                width: '145px',
                height: '58px',
              }}
            >
              <Image
                src={logo}
                alt={`Client logo ${index + 1}`}
                width={105}
                height={38}
                className="object-contain w-full h-full"
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
