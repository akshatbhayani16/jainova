import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';

const Navbar = () => {
  const location = useLocation();
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const handleNavClick = (path) => {
    if (location.pathname === path) {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
    // Close mobile menu when a link is clicked
    setIsMobileMenuOpen(false);
  };

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  // Helper function to check if a path is active
  const isActive = (path) => {
    return location.pathname === path;
  };

  // Helper function to get active/inactive styles
  const getLinkClass = (path) => {
    const baseClass = "font-medium px-3 py-2 rounded-lg transition-all duration-300";
    if (isActive(path)) {
      return `${baseClass} text-white bg-[#E85B2C] shadow-md`;
    }
    return `${baseClass} text-[#1E3A5F] hover:text-[#E85B2C] hover:bg-[#E85B2C]/10`;
  };

  return (
    <nav className="bg-white fixed w-full top-0 z-50 shadow-sm font-sans" style={{ fontFamily: 'Poppins, Inter, sans-serif' }}>
      <div className="container mx-auto px-4 py-4" style={{paddingLeft:'40px'}}>
        <div className="flex justify-between items-center">
          <Link 
            to="/" 
            className="flex items-center rounded-lg px-2 py-1"
            onClick={() => handleNavClick('/')}
            style={{ borderRadius: '8px' }}
            >
            <img 
              style={{ transform: 'scale(2)' }}
              src="/images/jainova-lifesciences-logo-full.jpg" 
              alt="Jainova Lifesciences Logo" 
              className="h-8 md:h-10 w-auto"
            />
          </Link>
          
          {/* Desktop Navigation */}
          <ul className="hidden md:flex space-x-8">
            <li>
              <Link 
                to="/" 
                className={getLinkClass('/')}
                onClick={() => handleNavClick('/')}
              >
                Home
              </Link>
            </li>
            <li>
              <Link 
                to="/about" 
                className={getLinkClass('/about')}
                onClick={() => handleNavClick('/about')}
              >
                About
              </Link>
            </li>
            <li>
              <Link 
                to="/products" 
                className={getLinkClass('/products')}
                onClick={() => handleNavClick('/products')}
              >
                Products
              </Link>
            </li>
            <li>
              <Link 
                to="/blog" 
                className={getLinkClass('/blog')}
                onClick={() => handleNavClick('/blog')}
              >
                Blog
              </Link>
            </li>
            <li>
              <Link 
                to="/contact" 
                className={getLinkClass('/contact')}
                onClick={() => handleNavClick('/contact')}
              >
                Contact
              </Link>
            </li>
          </ul>

          {/* Hamburger Menu Button */}
          <button
            className="md:hidden flex flex-col justify-center items-center w-8 h-8 relative"
            onClick={toggleMobileMenu}
            aria-label={isMobileMenuOpen ? "Close mobile menu" : "Open mobile menu"}
          >
            <span className={`w-6 h-0.5 bg-[#1E3A5F] transition-all duration-300 absolute ${isMobileMenuOpen ? 'rotate-45' : '-translate-y-2'}`}></span>
            <span className={`w-6 h-0.5 bg-[#1E3A5F] transition-all duration-300 ${isMobileMenuOpen ? 'opacity-0' : ''}`}></span>
            <span className={`w-6 h-0.5 bg-[#1E3A5F] transition-all duration-300 absolute ${isMobileMenuOpen ? '-rotate-45' : 'translate-y-2'}`}></span>
          </button>
        </div>

        {/* Mobile Navigation Menu */}
        <div className={`md:hidden transition-all duration-300 ease-in-out ${isMobileMenuOpen ? 'max-h-64 opacity-100' : 'max-h-0 opacity-0'} overflow-hidden`}>
          <ul className="flex flex-col space-y-2 pt-4 pb-2">
            <li>
              <Link 
                to="/" 
                className={`block ${getLinkClass('/')}`}
                onClick={() => handleNavClick('/')}
              >
                Home
              </Link>
            </li>
            <li>
              <Link 
                to="/about" 
                className={`block ${getLinkClass('/about')}`}
                onClick={() => handleNavClick('/about')}
              >
                About
              </Link>
            </li>
            <li>
              <Link 
                to="/products" 
                className={`block ${getLinkClass('/products')}`}
                onClick={() => handleNavClick('/products')}
              >
                Products
              </Link>
            </li>
            <li>
              <Link 
                to="/blog" 
                className={`block ${getLinkClass('/blog')}`}
                onClick={() => handleNavClick('/blog')}
              >
                Blog
              </Link>
            </li>
            <li>
              <Link 
                to="/contact" 
                className={`block ${getLinkClass('/contact')}`}
                onClick={() => handleNavClick('/contact')}
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