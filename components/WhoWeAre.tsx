import Image from 'next/image';

export default function WhoWeAre() {
  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-6">
        {/* Top Heading - Centered */}
        <div className="text-center mb-12">
          <div className="flex items-center justify-center gap-3 mb-4">
            <div 
              style={{
                width: '28px',
                height: '0px',
                borderTop: '4px solid #C43033',
              }}
            ></div>
            <h2 className="text-3xl font-bold text-gray-900">Who We Are</h2>
          </div>
        </div>

        <div className="grid md:grid-cols-2 gap-12 items-start relative">
          {/* Left Side - Image Only */}
          <div className="overflow-hidden relative z-0" style={{ borderRadius: '0 0 0 2rem' }}>
            <Image
              src="/images/e8e060e03d7aeaeabb7ee04abfd1e978291ddb43.png"
              alt="Hildis Team and Industrial Facility"
              width={600}
              height={800}
              className="w-full h-full object-cover"
            />
          </div>

          {/* Right Side - Content */}
          <div>
            {/* Main Heading */}
            <h3 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6 leading-tight">
              Building Solutions That Power Industry and Drive Growth
            </h3>

            {/* Paragraph */}
            <p className="text-gray-700 leading-relaxed text-base mb-8">
              Hildis East Africa is a trusted provider of industrial and chemical solutions serving the mining, manufacturing, and construction sectors. We combine technical expertise, strong partnerships, and a culture built on values to deliver dependable products and services across Africa.
            </p>

            {/* Three Cards in Row - Overflowing to Left */}
            <div className="relative md:-ml-[40%] z-10 mt-16 max-w-4xl">
              <div className="grid md:grid-cols-3 gap-4">
                {/* Mission Card */}
                <div className="bg-white rounded-2xl p-5 shadow-md">
                  <div className="mb-4">
                    <Image
                      src="/icons/Vector.png"
                      alt="Mission Icon"
                      width={48}
                      height={48}
                      className="w-12 h-12"
                    />
                  </div>
                  <h4 className="text-xl font-bold text-gray-900 mb-3">Our Mission</h4>
                  <p className="text-gray-700 leading-relaxed text-sm">
                    We build lasting partnerships by delivering reliable, innovative, and value-driven solutions, always embracing change, and upholding the highest standards of professionalism
                  </p>
                </div>

                {/* Vision Card */}
                <div className="bg-white rounded-2xl p-5 shadow-md">
                  <div className="mb-4">
                    <Image
                      src="/icons/Vector-1.png"
                      alt="Vision Icon"
                      width={48}
                      height={48}
                      className="w-12 h-12"
                    />
                  </div>
                  <h4 className="text-xl font-bold text-gray-900 mb-3">Our Vision</h4>
                  <p className="text-gray-700 leading-relaxed text-sm">
                    To be a trusted and recognized partner across Africa, consistently delivering high-quality goods and services with excellence, reliability, and complete customer satisfaction
                  </p>
                </div>

                {/* Core Values Card */}
                <div className="bg-white rounded-2xl p-5 shadow-md">
                  <div className="mb-4">
                    <Image
                      src="/icons/Vector-2.png"
                      alt="Core Values Icon"
                      width={48}
                      height={48}
                      className="w-12 h-12"
                    />
                  </div>
                  <h4 className="text-xl font-bold text-gray-900 mb-3">Core Values</h4>
                  <p className="text-gray-700 leading-relaxed text-sm">
                    We uphold professionalism and integrity, exceeding customer expectations through teamwork, innovation, and passion, while building trust with clear, reliable communication
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
