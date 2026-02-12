'use client';

import { useState } from 'react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import Image from 'next/image';
import { ArrowRight, MapPin, Mail, Phone, Globe } from 'lucide-react';
import Branches from '@/components/Branches';

const OFFICES = [
  {
    id: 'arusha',
    name: 'Head Office – Arusha',
    address: 'Nairobi Road, Arusha, Tanzania. P.O. Box 14473',
    email: 'info@hildiseastafrica.com',
    phones: ['+255 740 547 470', '+255 754 434 303', '+255 754 434 412', '+255 754 434 675'],
    isHQ: true,
  },
  {
    id: 'dar',
    name: 'Dar es Salaam',
    address: 'Dar es Salaam, Tanzania',
    email: 'stephano.mkinga@hildiseastafrica.com',
    phones: ['+255 754 434 247'],
  },
  {
    id: 'dodoma',
    name: 'Dodoma',
    address: 'Dodoma, Tanzania',
    email: 'sarah@hildiseastafrica.com',
    phones: ['+255 756 925 639'],
  },
  {
    id: 'mwanza',
    name: 'Mwanza',
    address: 'Mwanza, Tanzania',
    email: 'jdaffa@hildiseastafrica.com',
    phones: ['+255 718 796 079'],
  },
  {
    id: 'shinyanga',
    name: 'Shinyanga',
    address: 'Shinyanga, Tanzania',
    email: 'francis.kiyeyeu@hildiseastafrica.com',
    phones: ['+255 754 434 445'],
  },
  {
    id: 'geita',
    name: 'Geita',
    address: 'Geita, Tanzania',
    email: 'info@hildiseastafrica.com',
    phones: ['+255 754 434 303'],
  },
  {
    id: 'tanga',
    name: 'Tanga',
    address: 'Tanga, Tanzania',
    email: 'betty@hildiseastafrica.com',
    phones: ['+255 759 236 752'],
  },
];

export default function ContactPage() {
  const [formData, setFormData] = useState({
    fullName: '',
    companyName: '',
    email: '',
    phone: '',
    message: '',
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Form submitted:', formData);
  };

  return (
    <div className="min-h-screen bg-white">
      <Header />
      
      {/* Hero Section */}
      <section className="relative">
        <div className="px-6">
          <div
            className="relative overflow-hidden mx-auto"
            style={{
              width: '1344px',
              maxWidth: '100%',
              height: '400px',
              borderRadius: '20px',
              minHeight: '400px',
            }}
          >
            <Image
              src="/images/hero.jpg"
              alt="Contact Us"
              fill
              className="object-cover"
              priority
            />
            <div
              className="absolute inset-0"
              style={{ backgroundColor: 'rgba(0, 0, 0, 0.55)' }}
            />
            <div className="absolute inset-0 flex flex-col justify-center items-center text-center px-6 z-10">
              <div className="text-white text-sm mb-8">
                <span className="opacity-80">Home</span>
                <ArrowRight className="w-4 h-4 inline mx-2" />
                <span className="text-red-600 font-semibold">Contact Us</span>
              </div>
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6 leading-tight">
                Get In Touch
              </h1>
              <p className="text-white text-lg md:text-xl max-w-3xl leading-relaxed opacity-90">
                We&apos;re here to support your industrial needs across Tanzania.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Form & Offices */}
      <section className="py-12 sm:py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Section Header */}
          <div className="mb-10 text-left">
            <div className="h-1 w-12 bg-[#BB181B] mb-4" />
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-3">
              Send us a message
            </h2>
            <p className="text-gray-600">
              Fill out the form below and we&apos;ll get back to you shortly.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Left - Contact Form */}
            <div>
              <form onSubmit={handleSubmit} className="space-y-5">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                  <div>
                    <label htmlFor="fullName" className="block text-sm font-medium text-gray-700 mb-1.5">
                      Full Name
                    </label>
                    <input
                      type="text"
                      id="fullName"
                      name="fullName"
                      value={formData.fullName}
                      onChange={handleChange}
                      className="w-full px-4 py-2.5 text-sm border border-gray-300 rounded-lg focus:ring-2 focus:ring-red-500 focus:border-red-500 outline-none transition"
                      placeholder="Enter your full name"
                      required
                    />
                  </div>
                  <div>
                    <label htmlFor="companyName" className="block text-sm font-medium text-gray-700 mb-1.5">
                      Company Name
                    </label>
                    <input
                      type="text"
                      id="companyName"
                      name="companyName"
                      value={formData.companyName}
                      onChange={handleChange}
                      className="w-full px-4 py-2.5 text-sm border border-gray-300 rounded-lg focus:ring-2 focus:ring-red-500 focus:border-red-500 outline-none transition"
                      placeholder="Enter your company name"
                      required
                    />
                  </div>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                  <div>
                    <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1.5">
                      Email Address
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      className="w-full px-4 py-2.5 text-sm border border-gray-300 rounded-lg focus:ring-2 focus:ring-red-500 focus:border-red-500 outline-none transition"
                      placeholder="Enter your email"
                      required
                    />
                  </div>
                  <div>
                    <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-1.5">
                      Phone Number
                    </label>
                    <input
                      type="tel"
                      id="phone"
                      name="phone"
                      value={formData.phone}
                      onChange={handleChange}
                      className="w-full px-4 py-2.5 text-sm border border-gray-300 rounded-lg focus:ring-2 focus:ring-red-500 focus:border-red-500 outline-none transition"
                      placeholder="Enter your phone"
                      required
                    />
                  </div>
                </div>
                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-1.5">
                    Message
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    rows={4}
                    className="w-full px-4 py-2.5 text-sm border border-gray-300 rounded-lg focus:ring-2 focus:ring-red-500 focus:border-red-500 outline-none transition resize-none"
                    placeholder="Type your message here..."
                    required
                  />
                </div>
                <div className="text-left">
                  <button
                    type="submit"
                    className="inline-block bg-[#BB181B] text-white py-2.5 px-8 text-sm font-semibold rounded-lg hover:bg-red-700 transition-colors duration-300 focus:outline-none focus:ring-2 focus:ring-red-500 focus:ring-offset-2"
                  >
                    Send Message
                  </button>
                </div>
              </form>
            </div>

            {/* Right - All Offices */}
            <div className="space-y-6">
              <div className="h-1 w-12 bg-[#BB181B] mb-4" />
              <h3 className="text-2xl font-bold text-gray-900 mb-6">
                Our Offices
              </h3>
              <div className="space-y-5 max-h-[500px] overflow-y-auto pr-2">
                {OFFICES.map((office) => (
                  <div
                    key={office.id}
                    className="bg-gray-50 rounded-xl p-5 border border-gray-100 hover:border-red-100 transition-colors"
                  >
                    <h4 className="text-lg font-bold text-gray-900 mb-3 flex items-center gap-2">
                      {office.name}
                      {office.isHQ && (
                        <span className="text-xs font-normal bg-[#BB181B] text-white px-2 py-0.5 rounded">
                          HQ
                        </span>
                      )}
                    </h4>
                    <div className="space-y-2 text-sm">
                      <p className="text-gray-700 flex items-start gap-2">
                        <MapPin className="w-4 h-4 text-[#BB181B] mt-0.5 flex-shrink-0" />
                        <span>{office.address}</span>
                      </p>
                      <p className="text-gray-700 flex items-start gap-2">
                        <Mail className="w-4 h-4 text-[#BB181B] mt-0.5 flex-shrink-0" />
                        <a
                          href={`mailto:${office.email}`}
                          className="text-[#BB181B] hover:underline"
                        >
                          {office.email}
                        </a>
                      </p>
                      <div className="flex flex-wrap gap-x-4 gap-y-1">
                        {office.phones.map((phone, i) => (
                          <p key={i} className="text-gray-700 flex items-center gap-2">
                            <Phone className="w-4 h-4 text-[#BB181B] flex-shrink-0" />
                            <a
                              href={`tel:${phone.replace(/\s+/g, '')}`}
                              className="text-gray-700 hover:text-[#BB181B]"
                            >
                              {phone}
                            </a>
                          </p>
                        ))}
                      </div>
                    </div>
                  </div>
                ))}
              </div>
              <div className="pt-4">
                <p className="text-gray-700 flex items-center gap-2 text-sm">
                  <Globe className="w-4 h-4 text-[#BB181B]" />
                  <a
                    href="https://www.hildiseastafrica.com"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-[#BB181B] hover:underline"
                  >
                    www.hildiseastafrica.com
                  </a>
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Branches Map - includes Tanzania map and office locations */}
      <Branches variant="light" />

      <Footer />
    </div>
  );
}
