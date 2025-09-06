import React from 'react';
import { Link, useLocation } from 'react-router-dom';

const Navbar = () => {
  const location = useLocation();

  const handleNavClick = (path) => {
    if (location.pathname === path) {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
  };

  return (
    <nav className="bg-white fixed w-full top-0 z-50 shadow-sm font-sans" style={{ fontFamily: 'Poppins, Inter, sans-serif' }}>
      <div className="container mx-auto px-4 py-4">
        <div className="flex justify-between items-center">
          <Link 
            to="/" 
            className="text-[#1E3A5F] text-2xl font-bold tracking-tight rounded-lg px-2 py-1"
            onClick={() => handleNavClick('/')}
            style={{ borderRadius: '8px' }}
          >
            Jainova Lifesciences
          </Link>
          <ul className="flex space-x-8">
            <li>
              <Link 
                to="/" 
                className="text-[#1E3A5F] hover:text-[#E85B2C] transition-colors duration-300 font-medium px-3 py-2 rounded-lg"
                onClick={() => handleNavClick('/')}
                style={{ borderRadius: '8px' }}
              >
                Home
              </Link>
            </li>
            <li>
              <Link 
                to="/about" 
                className="text-[#1E3A5F] hover:text-[#E85B2C] transition-colors duration-300 font-medium px-3 py-2 rounded-lg"
                onClick={() => handleNavClick('/about')}
                style={{ borderRadius: '8px' }}
              >
                About
              </Link>
            </li>
            {/* <li>
              <Link 
                to="/services" 
                className="text-[#1E3A5F] hover:text-[#E85B2C] transition-colors duration-300 font-medium px-3 py-2 rounded-lg"
                onClick={() => handleNavClick('/services')}
                style={{ borderRadius: '8px' }}
              >
                Services
              </Link>
            </li> */}
            <li>
              <Link 
                to="/products" 
                className="text-[#1E3A5F] hover:text-[#E85B2C] transition-colors duration-300 font-medium px-3 py-2 rounded-lg"
                onClick={() => handleNavClick('/products')}
                style={{ borderRadius: '8px' }}
              >
                Products
              </Link>
            </li>
            <li>
              <Link 
                to="/blog" 
                className="text-[#1E3A5F] hover:text-[#E85B2C] transition-colors duration-300 font-medium px-3 py-2 rounded-lg"
                onClick={() => handleNavClick('/blog')}
                style={{ borderRadius: '8px' }}
              >
                Blog
              </Link>
            </li>
            <li>
              <Link 
                to="/contact" 
                className="text-[#1E3A5F] hover:text-[#E85B2C] transition-colors duration-300 font-medium px-3 py-2 rounded-lg"
                onClick={() => handleNavClick('/contact')}
                style={{ borderRadius: '8px' }}
              >
                Contact
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar; 