import React from 'react';
import { Heart, ArrowUp } from 'lucide-react';

const Footer: React.FC = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-[#FFFFFF] border-t border-[#363A3D]/10">
      <div className="max-w-7xl mx-auto px-6 lg:px-8 py-12">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="flex items-center space-x-2 mb-4 md:mb-0">
            <span className="text-[#363A3D]/70">Made with</span>
            <Heart size={16} className="text-red-500" />
            <span className="text-[#363A3D]/70">by Akavia Tech</span>
          </div>

          <div className="flex items-center space-x-8">
            <div className="text-sm text-[#363A3D]/70">
              © 2025 Akavia. All rights reserved.
            </div>
            <button
              onClick={scrollToTop}
              className="p-3 bg-[#363A3D] text-[#FFFFFF] rounded-full hover:bg-[#363A3D]/90 transition-all duration-300 hover:transform hover:scale-110"
              aria-label="Scroll to top"
            >
              <ArrowUp size={20} />
            </button>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;