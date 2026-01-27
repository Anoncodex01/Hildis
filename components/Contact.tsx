'use client';

import Image from 'next/image';
import Link from 'next/link';
import { MapPin, Mail, Phone, Globe } from 'lucide-react';
import { useState } from 'react';

export default function Contact() {
  const [formData, setFormData] = useState({
    fullName: '',
    companyName: '',
    email: '',
    phone: '',
    message: ''
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission
    console.log('Form submitted:', formData);
  };

  return (
    <>
      {/* CTA Banner Section */}
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
                <h2 className="text-4xl md:text-5xl font-bold mb-6 leading-tight">
                  <span className="block">Get expert support</span>
                  <span className="block">For your operations</span>
                </h2>

                <p className="text-xl text-white/90 mb-8 font-light">
                  Speak with our team for supply requests, engineering support,
                  or project planning.
                </p>

                <div className="flex flex-wrap gap-4">
                  <Link
                    href="/contact"
                    className="bg-white text-gray-900 px-8 py-4 rounded-xl font-light shadow-lg hover:bg-gray-100 transition-all duration-300 hover:scale-105"
                  >
                    Contact Us
                  </Link>

                  <Link
                    href="/contact"
                    className="bg-white text-gray-900 px-8 py-4 rounded-xl font-light shadow-lg hover:bg-gray-100 transition-all duration-300 hover:scale-105"
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
                    src="/images/4089179871ecc9d61a665d6868f0020a2945d550.jpg"
                    alt="Industrial Operations"
                    fill
                    className="object-cover"
                  />
                </div>
              </div>

            </div>
          </div>
        </div>
      </section>

      {/* Get In Touch Section - Hidden for now */}
      {/* <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-blue-900 mb-4">
              Get In Touch
            </h2>
            <p className="text-gray-700 text-lg">
              We're here to support your industrial needs.
            </p>
          </div>

          <div className="grid lg:grid-cols-1 gap-16 max-w-2xl mx-auto">
            <div>
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <label htmlFor="fullName" className="block text-gray-900 font-semibold mb-2 text-sm">
                      Full Name
                    </label>
                    <input
                      type="text"
                      id="fullName"
                      name="fullName"
                      value={formData.fullName}
                      onChange={handleChange}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-red-600 focus:border-transparent text-gray-900"
                      required
                    />
                  </div>
                  <div>
                    <label htmlFor="companyName" className="block text-gray-900 font-semibold mb-2 text-sm">
                      Company Name
                    </label>
                    <input
                      type="text"
                      id="companyName"
                      name="companyName"
                      value={formData.companyName}
                      onChange={handleChange}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-red-600 focus:border-transparent text-gray-900"
                      required
                    />
                  </div>
                </div>
                <div>
                  <label htmlFor="email" className="block text-gray-900 font-semibold mb-2 text-sm">
                    Email Address
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-red-600 focus:border-transparent text-gray-900"
                    required
                  />
                </div>
                <div>
                  <label htmlFor="phone" className="block text-gray-900 font-semibold mb-2 text-sm">
                    Phone Number
                  </label>
                  <input
                    type="tel"
                    id="phone"
                    name="phone"
                    value={formData.phone}
                    onChange={handleChange}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-red-600 focus:border-transparent text-gray-900"
                    required
                  />
                </div>
                <div>
                  <label htmlFor="message" className="block text-gray-900 font-semibold mb-2 text-sm">
                    Message
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    rows={5}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-red-600 focus:border-transparent resize-none text-gray-900"
                    required
                  />
                </div>
                <button
                  type="submit"
                  className="w-full bg-red-600 text-white px-8 py-4 rounded-xl font-semibold hover:bg-red-700 transition-colors duration-300 text-base lg:text-lg"
                >
                  Send Message
                </button>
              </form>
            </div>
          </div>
        </div>
      </section> */}
    </>
  );
}

