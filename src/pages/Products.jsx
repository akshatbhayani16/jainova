import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';

const Products = () => {
  // Product Categories data
  const productCategories = [
    {
      title: "Generic Medicines",
      description: "High-quality, cost-effective alternatives to brand-name medications across therapeutic areas.",
      icon: "💊",
      products: ["Antibiotic Formulations", "Cardiovascular Treatments", "Diabetes Management", "Analgesics"]
    },
    {
      title: "Specialty Drugs",
      description: "Advanced therapies for complex conditions requiring specialized handling and administration.",
      icon: "🧬",
      products: ["Oncology Treatments", "Immunosuppressants", "Biologics", "Rare Disease Medications"]
    },
    {
      title: "OTC Products",
      description: "Over-the-counter solutions for everyday health maintenance and minor ailments.",
      icon: "🏥",
      products: ["Pain Relief", "Cold & Flu Remedies", "Digestive Health", "Vitamins & Supplements"]
    },
    {
      title: "R&D Innovations",
      description: "Pipeline products and breakthrough formulations in development for future healthcare needs.",
      icon: "🔬",
      products: ["Novel Delivery Systems", "Next-generation Therapies", "Biotechnology Solutions", "Precision Medicine"]
    }
  ];

  // Featured Products data
  const featuredProducts = [
    {
      name: "Cardiocare Plus",
      category: "Cardiovascular",
      description: "Complete cardiovascular support formulation with enhanced bioavailability.",
      image: "🫀" // Placeholder icon
    },
    {
      name: "ImmunoBoost",
      category: "Immunology",
      description: "Advanced immune system support with proprietary blend of active ingredients.",
      image: "🦠" // Placeholder icon
    },
    {
      name: "NeuroCare",
      category: "Neurology",
      description: "Innovative neurological medication designed for improved blood-brain barrier penetration.",
      image: "🧠" // Placeholder icon
    },
    {
      name: "DigestEase",
      category: "Gastroenterology",
      description: "Comprehensive digestive health solution with patented delivery technology.",
      image: "🧪" // Placeholder icon
    }
  ];

  // Certifications data
  const certifications = [
    { name: "Good Manufacturing Practice (GMP)", icon: "✅" },
    { name: "WHO Guidelines Compliance", icon: "🌍" },
    { name: "ISO 9001:2015", icon: "🏅" },
    { name: "FDA Approved Facilities", icon: "🔐" },
    { name: "EU GMP Certification", icon: "🇪🇺" },
    { name: "Pharmacopeial Standards", icon: "📊" }
  ];

  // Global presence data
  const regions = [
    "North America", "Europe", "Asia-Pacific", 
    "Latin America", "Middle East", "Africa"
  ];

  // Animation variants
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
      }
    }
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: { duration: 0.5 }
    }
  };

  return (
    <div className="min-h-screen bg-white font-sans">
      {/* Hero Banner */}
      <div className="pt-20 bg-gradient-to-b from-[#1E3A5F]/10 to-white">
        <div className="container mx-auto px-4 py-16">
          <div className="text-center max-w-4xl mx-auto">
            <motion.h1
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="text-4xl md:text-6xl font-bold text-[#1E3A5F] mb-6"
            >
              Our Products
            </motion.h1>
            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.2, duration: 0.6 }}
              className="text-xl text-[#6B7280] mb-8"
            >
              Trusted pharmaceutical solutions for a healthier future.
            </motion.p>
          </div>
        </div>
      </div>

      {/* Product Categories */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <motion.h2
            initial={{ opacity: 0, y: -10 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            className="text-3xl font-bold text-[#1E3A5F] mb-12 text-center"
          >
            Product Categories
          </motion.h2>

          <motion.div 
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8"
          >
            {productCategories.map((category, index) => (
              <motion.div
                key={index}
                variants={itemVariants}
                whileHover={{ 
                  scale: 1.03,
                  boxShadow: "0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)"
                }}
                className="bg-white rounded-xl shadow-md overflow-hidden border border-gray-100 hover:border-[#E85B2C]/30 transition-all duration-300"
              >
                <div className="p-6 text-center">
                  <div className="text-5xl mb-4">{category.icon}</div>
                  <h3 className="text-xl font-semibold text-[#1E3A5F] mb-3">{category.title}</h3>
                  <p className="text-[#6B7280] mb-6">{category.description}</p>
                  
                  <div className="border-t border-gray-100 pt-4 mt-2">
                    <h4 className="font-medium text-[#1E3A5F] mb-3">Key Products:</h4>
                    <ul className="text-[#6B7280] text-sm">
                      {category.products.map((product, i) => (
                        <li key={i} className="mb-1 flex items-center">
                          <span className="text-[#E85B2C] mr-2">•</span>
                          {product}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Featured Products */}
      <section className="py-16 bg-[#F9FAFB]">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <motion.h2
              initial={{ opacity: 0, y: -10 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              viewport={{ once: true }}
              className="text-3xl font-bold text-[#1E3A5F] mb-4"
            >
              Featured Products
            </motion.h2>
            <motion.p
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ delay: 0.2, duration: 0.5 }}
              viewport={{ once: true }}
              className="text-[#6B7280] max-w-2xl mx-auto"
            >
              Discover our leading pharmaceutical innovations designed to improve patient outcomes.
            </motion.p>
          </div>

          <motion.div 
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12"
          >
            {featuredProducts.map((product, index) => (
              <motion.div
                key={index}
                variants={itemVariants}
                whileHover={{ y: -5 }}
                className="bg-white rounded-lg shadow-md overflow-hidden transform transition-all duration-300"
              >
                <div className="h-48 bg-gradient-to-br from-[#1E3A5F]/5 to-[#E85B2C]/5 flex items-center justify-center">
                  <span className="text-6xl">{product.image}</span>
                </div>
                <div className="p-6">
                  <span className="text-xs font-semibold text-[#E85B2C] uppercase tracking-wider">
                    {product.category}
                  </span>
                  <h3 className="text-lg font-semibold text-[#1E3A5F] mt-2 mb-2">{product.name}</h3>
                  <p className="text-[#6B7280] text-sm mb-4">{product.description}</p>
                  <Link
                    to="#"
                    className="text-[#E85B2C] hover:text-[#E85B2C]/80 text-sm font-medium inline-flex items-center"
                  >
                    Learn More
                    <svg className="w-4 h-4 ml-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7" />
                    </svg>
                  </Link>
                </div>
              </motion.div>
            ))}
          </motion.div>

          <div className="text-center">
            <motion.button
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3, duration: 0.5 }}
              viewport={{ once: true }}
              whileHover={{ scale: 1.05 }}
              className="bg-[#1E3A5F] text-white px-8 py-3 rounded-lg shadow hover:bg-[#1E3A5F]/90 transition-all duration-200"
            >
              Download Product Catalogue
            </motion.button>
          </div>
        </div>
      </section>

      {/* Certifications & Quality Standards */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <motion.h2
              initial={{ opacity: 0, y: -10 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              viewport={{ once: true }}
              className="text-3xl font-bold text-[#1E3A5F] mb-4"
            >
              Certifications & Quality Standards
            </motion.h2>
            <motion.p
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ delay: 0.2, duration: 0.5 }}
              viewport={{ once: true }}
              className="text-[#6B7280] max-w-2xl mx-auto"
            >
              We adhere to the highest standards of pharmaceutical manufacturing and quality control.
            </motion.p>
          </div>

          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="flex flex-wrap justify-center gap-8 max-w-4xl mx-auto"
          >
            {certifications.map((cert, index) => (
              <motion.div
                key={index}
                variants={itemVariants}
                className="flex flex-col items-center p-6 bg-[#F9FAFB] rounded-lg w-48 h-48 justify-center text-center"
              >
                <span className="text-4xl mb-3">{cert.icon}</span>
                <span className="text-[#1E3A5F] font-medium">{cert.name}</span>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Global Distribution */}
      {/* <section className="py-16 bg-[#F9FAFB]">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <motion.h2
              initial={{ opacity: 0, y: -10 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              viewport={{ once: true }}
              className="text-3xl font-bold text-[#1E3A5F] mb-4"
            >
              Global Distribution
            </motion.h2>
            <motion.p
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ delay: 0.2, duration: 0.5 }}
              viewport={{ once: true }}
              className="text-[#6B7280] max-w-2xl mx-auto"
            >
              Delivering pharmaceutical excellence to healthcare providers worldwide.
            </motion.p>
          </div>

          <div className="relative max-w-5xl mx-auto">
            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="aspect-[16/9] bg-gradient-to-r from-[#1E3A5F]/10 to-[#E85B2C]/10 rounded-xl flex items-center justify-center mb-12"
            >
              <div className="text-center">
                <span className="text-6xl">🌎</span>
                <p className="text-[#6B7280] mt-4">Global Presence Map</p>
              </div>
            </motion.div>

            <motion.div
              variants={containerVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              className="grid grid-cols-2 md:grid-cols-3 gap-4 text-center"
            >
              {regions.map((region, index) => (
                <motion.div
                  key={index}
                  variants={itemVariants}
                  className="bg-white p-4 rounded-lg shadow-sm border border-gray-100"
                >
                  <p className="text-[#1E3A5F] font-medium">{region}</p>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </div>
      </section> */}

      {/* Consultation CTA */}
      <section className="py-16 bg-[#1E3A5F]">
        <div className="container mx-auto px-4 text-center">
          <motion.h2
            initial={{ opacity: 0, y: -10 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            className="text-3xl font-bold text-white mb-4"
          >
            Need Pharmaceutical Consultation?
          </motion.h2>
          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ delay: 0.2, duration: 0.5 }}
            viewport={{ once: true }}
            className="text-white/80 max-w-2xl mx-auto mb-8"
          >
            Our team of experts is ready to assist with your specific pharmaceutical needs.
          </motion.p>
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4, duration: 0.5 }}
            viewport={{ once: true }}
          >
            <Link
              to="/contact"
              className="inline-block bg-[#E85B2C] text-white px-8 py-3 rounded-lg shadow hover:bg-[#E85B2C]/90 transition-colors duration-200 font-medium"
            >
              Contact Our Team
            </Link>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default Products;
