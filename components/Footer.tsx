import { Facebook, Instagram, Linkedin, Twitter } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="bg-gray-800 text-gray-300">
      <div className="max-w-7xl mx-auto px-6 py-12">
        {/* Quick Links */}
        <div className="text-center mb-8">
          <h3 className="text-lg font-bold text-white mb-4">Quick Links</h3>
          <nav className="flex flex-wrap justify-center gap-6">
            <a href="/" className="hover:text-white transition-colors">Home</a>
            <a href="/about" className="hover:text-white transition-colors">About Us</a>
            <a href="/services" className="hover:text-white transition-colors">Services</a>
            <a href="/projects" className="hover:text-white transition-colors">Projects</a>
            <a href="#" className="hover:text-white transition-colors">Industries</a>
            <a href="/contact-us" className="hover:text-white transition-colors">Contact Us</a>
          </nav>
        </div>

        {/* Social Media Icons */}
        <div className="flex justify-center gap-4 mb-8">
          <a
            href="#"
            className="w-10 h-10 bg-white rounded-full flex items-center justify-center text-gray-800 hover:bg-red-600 hover:text-white transition-colors"
            aria-label="Facebook"
          >
            <Facebook className="w-5 h-5" />
          </a>
          <a
            href="#"
            className="w-10 h-10 bg-white rounded-full flex items-center justify-center text-gray-800 hover:bg-red-600 hover:text-white transition-colors"
            aria-label="Instagram"
          >
            <Instagram className="w-5 h-5" />
          </a>
          <a
            href="#"
            className="w-10 h-10 bg-white rounded-full flex items-center justify-center text-gray-800 hover:bg-red-600 hover:text-white transition-colors"
            aria-label="LinkedIn"
          >
            <Linkedin className="w-5 h-5" />
          </a>
          <a
            href="#"
            className="w-10 h-10 bg-white rounded-full flex items-center justify-center text-gray-800 hover:bg-red-600 hover:text-white transition-colors"
            aria-label="Twitter"
          >
            <Twitter className="w-5 h-5" />
          </a>
        </div>

        {/* Copyright and Legal */}
        <div className="border-t border-gray-700 pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-sm">
            © 2025 Hildis East Africa Ltd. All rights reserved.
          </p>
          <div className="flex flex-wrap justify-center gap-4 text-sm">
            <a href="#" className="hover:text-white transition-colors">Terms & Conditions</a>
            <span>.</span>
            <a href="#" className="hover:text-white transition-colors">Privacy Policy</a>
            <span>.</span>
            <a href="#" className="hover:text-white transition-colors">Cookies Policy</a>
          </div>
        </div>
      </div>
    </footer>
  );
}

