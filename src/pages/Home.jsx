import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { ChevronLeft, ChevronRight } from "lucide-react";

const Home = () => {
  // Top 3 Most Popular Product Categories
  const productServices = [
    {
      title: "General Injectable",
      description: "Sterile injectable formulations for intravenous, intramuscular, and subcutaneous administration.",
      icon: "�",
      productId: "general-injectable",
      categories: ['Antibiotics / Antibacterials', 'Analgesics / Anti-inflammatory', 'Corticosteroids'],
    },
    {
      title: "Ophthalmic Products",
      description: "Specialized eye care products including drops, ointments, and solutions for ocular conditions.",
      icon: <img src="/icons/injectable.png" alt="Injectable Icon" className="mx-auto" style={{width: '3rem', height: '3rem'}} />,
      productId: "ophthalmic", 
      categories: ["Eye Drops", "Antibiotic Ointments", "Anti-inflammatory Solutions"],
    },
    {
      title: "Solid Oral Dosages",
      description: "Tablets, capsules, and other solid dosage forms for oral administration.",
      icon: <img src="/icons/opthalmic.png" alt="Ophthalmic Icon" className="mx-auto" style={{width: '3rem', height: '3rem'}} />,
      productId: "solid-oral",
      categories: ["Tablets", "Capsules", "Chewable Forms"],
    },
  ];

  // Why Choose Us features
  const features = [
    {
      title: "Quality Assurance",
      description: "Rigorous testing and adherence to the highest pharmaceutical standards.",
      icon: "✅",
    },
    {
      title: "GMP Certified",
      description: "All facilities and processes follow Good Manufacturing Practices.",
      icon: "🏭",
    },
    {
      title: "Affordable Solutions",
      description: "Committed to making quality healthcare accessible to all.",
      icon: <img src="/icons/solid-oral.png" alt="Solid Oral Icon" className="mx-auto" style={{width: '3rem', height: '3rem'}} />,
    },
    {
      title: "Patient-Centric Innovation",
      description: "Research driven by real patient needs and outcomes.",
      icon: "❤️",
    },
  ];

  // Testimonials data
  const testimonials = [
    {
      quote: "Jainova Lifesciences has been an invaluable partner in our hospital's pharmaceutical supply chain. Their quality and reliability are unmatched.",
      author: "Dr. Sarah Johnson",
      position: "Chief of Pharmacy, Metro General Hospital",
    },
    {
      quote: "Working with Jainova has transformed our ability to provide affordable medications to underserved communities. Their commitment to accessibility aligns perfectly with our mission.",
      author: "Michael Chen",
      position: "Director, Global Health Initiative",
    },
  ];

  // State for testimonial slider
  const [currentTestimonial, setCurrentTestimonial] = useState(0);

  // Auto rotate testimonials
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentTestimonial((prev) => (prev === testimonials.length - 1 ? 0 : prev + 1));
    }, 5000);
    return () => clearInterval(interval);
  }, [testimonials.length]);

  return (
    <div className="min-h-screen bg-white font-sans">
      {/* Hero Section */}
      <div className="pt-20 bg-gradient-to-b from-[#1E3A5F]/10 to-white overflow-hidden relative">
        {/* Hero Background Image with Overlay */}
        <div className="absolute inset-0 z-0">
          <div className="absolute inset-0 bg-gradient-to-r from-[#1E3A5F]/80 to-transparent z-10"></div>
          <img
            src="/images/home-page-hero.jpg"
            alt="Jainova Lifesciences Pharmaceutical Research"
            className="w-full h-full object-cover"
          />
        </div>

        <div className="container mx-auto px-4 py-20 md:py-28 relative z-10">
          <div className="grid grid-cols-1 md:grid-cols-12 items-center gap-12">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              className="text-left md:col-span-8 lg:col-span-7"
            >
              <motion.h2
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
                className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6 leading-tight"
              >
                Global Excellence in Pharmaceutical Products
              </motion.h2>
              <motion.p
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.2, duration: 0.6 }}
                className="text-xl text-white/90 mb-8 max-w-3xl"
              >
                Delivering Safe and Effective Pharmaceutical Medicines Worldwide
              </motion.p>
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.4, duration: 0.6 }}
                className="flex flex-wrap gap-4"
              >
                <Link
                  to="/products"
                  className="inline-block bg-[#E85B2C] text-white px-8 py-3 rounded-lg shadow-lg hover:bg-[#E85B2C]/90 transition-all duration-300 font-medium text-lg"
                >
                  Explore Products
                </Link>
                <Link
                  to="/contact"
                  className="inline-block bg-transparent text-white border-2 border-white px-8 py-3 rounded-lg shadow-lg hover:bg-white/10 transition-all duration-300 font-medium text-lg"
                >
                  Discover Our Global Impact
                </Link>
              </motion.div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.3, duration: 0.8 }}
              className="hidden md:block md:col-span-4 lg:col-span-5"
            >
              {/* Empty div to maintain grid layout structure */}
            </motion.div>
          </div>
        </div>
      </div>

      {/* About Preview Section */}
      <section className="py-16 bg-[#F9FAFB]">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row items-center gap-10">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="md:w-1/2"
            >
              <h2 className="text-3xl font-bold text-[#1E3A5F] mb-4">
                Pioneering Excellence in Pharmaceutical Solutions
              </h2>
              <p className="text-[#6B7280] mb-6">
                At <b>JAINOVA LIFESCIENCES PVT LTD</b>, we are proud to be a trusted global exporter of high-quality pharmaceutical products. We began our journey in the pharmaceutical industry in <span className="font-bold">2013</span>. Through our strategic partnerships and collaborations, including our sister company, <b>VISHWA REMEDIES</b>, we have been able to expand our reach and deliver high-quality pharmaceutical products worldwide.
              </p>

              <p className="text-[#6B7280] mb-8">
                Our state-of-the-art facilities and expert team of scientists and healthcare professionals work tirelessly to meet the highest standards of pharmaceutical excellence.
              </p>
              <Link
                to="/about"
                className="inline-flex items-center text-[#E85B2C] hover:text-[#E85B2C]/80 font-medium transition-colors duration-200"
              >
                Read More About Us
                <svg className="w-5 h-5 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14 5l7 7-7 7" />
                </svg>
              </Link>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="md:w-1/2 h-80 bg-gray-200 rounded-lg overflow-hidden shadow-lg"
            >
              {/* Placeholder for lab/pharma facility image */}
              <div className="w-full h-full bg-gradient-to-br from-[#1E3A5F]/20 to-[#E85B2C]/10 flex items-center justify-center">
                <img src="/images/pioneering_image.jpg" alt="Modern Pharmaceutical Laboratory" className="object-cover w-full h-full" />
                {/* <span className="text-4xl">🧪🔬🧫</span>
                <p className="text-[#6B7280] text-center absolute bottom-4">Modern Pharmaceutical Laboratory</p> */}
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Products/Services Overview */}
      <section className="py-8 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-[#1E3A5F] mb-4">
              Our Products
            </h2>
            <p className="text-[#6B7280] max-w-2xl mx-auto">
              Delivering a comprehensive range of pharmaceutical solutions to meet diverse healthcare needs.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {productServices.map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1, duration: 0.5 }}
                viewport={{ once: true }}
                className="bg-white p-6 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-100 hover:border-[#E85B2C]/20 group"
              >
                <div className="mb-4 text-center group-hover:scale-110 transition-transform duration-300">{item.icon}</div>
                <h3 className="text-xl font-semibold text-[#1E3A5F] mb-3 text-center">
                  {item.title}
                </h3>
                <p className="text-[#6B7280] mb-4 text-center">{item.description}</p>
                
                {/* Category examples */}
                <div className="mb-4">
                  <p className="text-sm text-[#6B7280] mb-2 font-medium">Popular Categories:</p>
                  <ul className="text-xs text-[#6B7280] space-y-1">
                    {item.categories.map((category, catIndex) => (
                      <li key={catIndex} className="flex items-center">
                        <span className="w-1 h-1 bg-[#E85B2C] rounded-full mr-2"></span>
                        {category}
                      </li>
                    ))}
                  </ul>
                </div>

                <Link
                  to={`/products/${item.productId}`}
                  className="block w-full bg-[#E85B2C] text-white text-center py-3 px-4 rounded-lg font-medium hover:bg-[#E85B2C]/90 transition-all duration-200 group-hover:shadow-md"
                >
                  View Products
                </Link>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-16 bg-[#F9FAFB]">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-[#1E3A5F] mb-4">
              Why Choose Us
            </h2>
            <p className="text-[#6B7280] max-w-2xl mx-auto">
              Our commitment to excellence sets us apart in the pharmaceutical industry.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {features.map((feature, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1, duration: 0.5 }}
                viewport={{ once: true }}
                className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-all duration-300 border-t-4 border-t-[#E85B2C]"
              >
                <div className="text-4xl mb-4">{feature.icon}</div>
                <h3 className="text-xl font-semibold text-[#1E3A5F] mb-3">
                  {feature.title}
                </h3>
                <p className="text-[#6B7280]">{feature.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials */}
      {/* <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-[#1E3A5F] mb-4">
              What Our Partners Say
            </h2>
            <p className="text-[#6B7280] max-w-2xl mx-auto">
              Trusted by healthcare providers and institutions around the world.
            </p>
          </div>

          <div className="max-w-4xl mx-auto relative">
            <div className="overflow-hidden h-[300px] flex items-center justify-center">
              {testimonials.map((testimonial, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0 }}
                  animate={{
                    opacity: currentTestimonial === index ? 1 : 0,
                    x: currentTestimonial === index ? 0 : currentTestimonial > index ? -100 : 100
                  }}
                  transition={{ duration: 0.5 }}
                  className={`absolute w-full md:w-[80%] p-8 md:p-10 bg-gradient-to-br from-[#1E3A5F]/5 to-[#E85B2C]/5 rounded-xl shadow-md border border-gray-100 text-center ${currentTestimonial === index ? "block" : "hidden"
                    }`}
                >
                  <div className="text-5xl text-[#E85B2C] mb-4 opacity-70">"</div>
                  <p className="text-[#6B7280] text-lg md:text-xl italic mb-6 leading-relaxed">{testimonial.quote}</p>
                  <div className="mt-8 flex flex-col items-center">
                    <div className="h-1 w-16 bg-[#E85B2C]/50 rounded-full mb-4"></div>
                    <p className="font-semibold text-[#1E3A5F] text-lg">{testimonial.author}</p>
                    <p className="text-[#6B7280]">{testimonial.position}</p>
                  </div>
                </motion.div>
              ))}
            </div>

            <div className="flex justify-center items-center mt-12 space-x-4">
              <button
                onClick={() => setCurrentTestimonial(prev => prev === 0 ? testimonials.length - 1 : prev - 1)}
                className="w-10 h-10 rounded-full flex items-center justify-center bg-white border border-gray-200 text-[#1E3A5F] hover:bg-[#1E3A5F] hover:text-white transition-colors duration-300"
              >
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 19l-7-7 7-7" />
                </svg>
              </button>

              <div className="flex space-x-3">
                {testimonials.map((_, index) => (
                  <button
                    key={index}
                    onClick={() => setCurrentTestimonial(index)}
                    className={`w-3 h-3 rounded-full transition-all duration-300 ${currentTestimonial === index
                        ? "bg-[#E85B2C] w-8"
                        : "bg-[#6B7280]/30 hover:bg-[#6B7280]/50"
                      }`}
                    aria-label={`Go to testimonial ${index + 1}`}
                  ></button>
                ))}
              </div>

              <button
                onClick={() => setCurrentTestimonial(prev => prev === testimonials.length - 1 ? 0 : prev + 1)}
                className="w-10 h-10 rounded-full flex items-center justify-center bg-white border border-gray-200 text-[#1E3A5F] hover:bg-[#1E3A5F] hover:text-white transition-colors duration-300"
              >
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7" />
                </svg>
              </button>
            </div>
          </div>
        </div>
      </section> */}

      {/* CTA Section */}
      <section className="py-16 bg-[#1E3A5F]">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold text-white mb-4">
            Ready to Partner with Jainova Lifesciences?
          </h2>
          <p className="text-white/80 max-w-2xl mx-auto mb-8">
            Let's work together to advance healthcare solutions and improve patient outcomes.
          </p>
          <Link
            to="/contact"
            className="inline-block bg-[#E85B2C] text-white px-8 py-3 rounded-lg shadow hover:bg-[#E85B2C]/90 transition-colors duration-200 font-medium text-lg"
          >
            Contact Us Today
          </Link>
        </div>
      </section>
    </div>
  );
};

export default Home;
