import Image from 'next/image';

export default function Testimonials() {
  const testimonials = [
    {
      name: 'Joseph M.',
      role: 'Plant Operations Superintendent',
      company: 'Buzwagi Gold Mine',
      image: '/home-services/buzwagi.png',
      quote: 'Hildis helped us significantly improve our grinding circuit stability and recovery rates. Their chemical solutions and ongoing technical field support made a measurable impact on plant performance.'
    },
    {
      name: 'Eng. Catherine N.',
      role: 'Process Optimization Engineer',
      company: 'Tanga Cement PLC',
      image: '/home-services/tanga.png',
      quote: 'We rely on Hildis for plant additives and technical guidance. Their products are reliable, and their process insights consistently improve energy use, quality control, and output efficiency.'
    },
    {
      name: 'Samuel L.',
      role: 'Production Manager',
      company: 'Kilombero Sugar Company',
      image: '/home-services/kil.png',
      quote: 'Hildis improved our water treatment system, reduced scaling issues, and extended equipment life. Their support team is knowledgeable, responsive, and results-driven.'
    }
  ];

  return (
    <section className="py-20 bg-white relative">
      {/* Background Texture */}
      <div 
        className="absolute inset-0 opacity-[0.03]"
        style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23000000' fill-opacity='1'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
        }}
      />
      <div className="max-w-7xl mx-auto px-6 relative z-10">
        {/* Section Header */}
        <div className="text-center mb-12">
          <div className="flex items-center justify-center gap-3 mb-6">
            <div className="h-1 w-12 bg-red-600"></div>
            <h2 className="text-xl md:text-2xl font-bold text-gray-900">Testimonials</h2>
          </div>
          
          {/* Main Title */}
          <h3 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 leading-tight">
            Trusted feedback from industry<br />
            <span className="text-red-600">leaders</span>
          </h3>
        </div>

        {/* Testimonials Grid */}
        <div className="grid md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <div
              key={index}
              className={`bg-white rounded-2xl p-6 shadow-sm border border-gray-200 ${
                index === 1 
                  ? 'border-t-[5px] border-red-600' 
                  : 'border-b-[5px] border-red-600'
              }`}
            >
              {/* Profile Picture */}
              <div className="flex justify-center mb-4">
                <div className="w-20 h-20 rounded-full overflow-hidden">
                  <Image
                    src={testimonial.image}
                    alt={testimonial.name}
                    width={80}
                    height={80}
                    className="w-full h-full object-cover"
                  />
                </div>
              </div>

              {/* Name */}
              <h4 className="text-lg font-bold text-gray-900 text-center mb-1">
                {testimonial.name}
              </h4>

              {/* Job Title */}
              <p className="text-sm text-gray-700 text-center mb-1">
                {testimonial.role}
              </p>

              {/* Company */}
              <p className="text-sm text-red-600 font-semibold text-center mb-4">
                {testimonial.company}
              </p>

              {/* Quote */}
              <p className="text-gray-700 text-sm leading-relaxed text-left">
                "{testimonial.quote}"
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}