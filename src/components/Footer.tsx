
import React from "react";
import { Leaf } from "lucide-react";
import { Facebook, Twitter, Instagram, Linkedin, Github } from "lucide-react";

const Footer: React.FC = () => {
  return (
    <footer className="bg-gray-50 pt-16 pb-8 border-t border-gray-200">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
          <div>
            <a href="#" className="flex items-center gap-2 mb-4">
              <Leaf className="h-7 w-7 text-leaf" />
              <span className="text-xl font-bold font-display text-leaf-dark">
                FoodLoop
              </span>
            </a>
            <p className="text-gray-600 mb-6">
              Reducing food waste through AI-powered forecasting and connection platforms.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="text-gray-500 hover:text-leaf transition-colors">
                <Facebook className="h-5 w-5" />
                <span className="sr-only">Facebook</span>
              </a>
              <a href="#" className="text-gray-500 hover:text-leaf transition-colors">
                <Twitter className="h-5 w-5" />
                <span className="sr-only">Twitter</span>
              </a>
              <a href="#" className="text-gray-500 hover:text-leaf transition-colors">
                <Instagram className="h-5 w-5" />
                <span className="sr-only">Instagram</span>
              </a>
              <a href="#" className="text-gray-500 hover:text-leaf transition-colors">
                <Linkedin className="h-5 w-5" />
                <span className="sr-only">LinkedIn</span>
              </a>
            </div>
          </div>

          <div>
            <h3 className="text-gray-800 font-semibold mb-4">Platform</h3>
            <ul className="space-y-3">
              <li><a href="#" className="text-gray-600 hover:text-leaf transition-colors">How it Works</a></li>
              <li><a href="#" className="text-gray-600 hover:text-leaf transition-colors">Features</a></li>
              <li><a href="#" className="text-gray-600 hover:text-leaf transition-colors">Pricing</a></li>
              <li><a href="#" className="text-gray-600 hover:text-leaf transition-colors">API</a></li>
              <li><a href="#" className="text-gray-600 hover:text-leaf transition-colors">Integrations</a></li>
            </ul>
          </div>

          <div>
            <h3 className="text-gray-800 font-semibold mb-4">Resources</h3>
            <ul className="space-y-3">
              <li><a href="#" className="text-gray-600 hover:text-leaf transition-colors">Blog</a></li>
              <li><a href="#" className="text-gray-600 hover:text-leaf transition-colors">Case Studies</a></li>
              <li><a href="#" className="text-gray-600 hover:text-leaf transition-colors">Webinars</a></li>
              <li><a href="#" className="text-gray-600 hover:text-leaf transition-colors">Documentation</a></li>
              <li><a href="#" className="text-gray-600 hover:text-leaf transition-colors">Support Center</a></li>
            </ul>
          </div>

          <div>
            <h3 className="text-gray-800 font-semibold mb-4">Company</h3>
            <ul className="space-y-3">
              <li><a href="#" className="text-gray-600 hover:text-leaf transition-colors">About Us</a></li>
              <li><a href="#" className="text-gray-600 hover:text-leaf transition-colors">Team</a></li>
              <li><a href="#" className="text-gray-600 hover:text-leaf transition-colors">Careers</a></li>
              <li><a href="#" className="text-gray-600 hover:text-leaf transition-colors">Contact</a></li>
              <li><a href="#" className="text-gray-600 hover:text-leaf transition-colors">Partners</a></li>
            </ul>
          </div>
        </div>

        <div className="border-t border-gray-200 pt-6 flex flex-col md:flex-row justify-between items-center">
          <p className="text-gray-500 text-sm">&copy; {new Date().getFullYear()} FoodLoop. All rights reserved.</p>
          <div className="flex space-x-6 mt-4 md:mt-0">
            <a href="#" className="text-sm text-gray-500 hover:text-leaf">Privacy Policy</a>
            <a href="#" className="text-sm text-gray-500 hover:text-leaf">Terms of Service</a>
            <a href="#" className="text-sm text-gray-500 hover:text-leaf">Cookie Policy</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
