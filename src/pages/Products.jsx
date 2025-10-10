import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';

const Products = () => {
  const productCategories = [
    {
      title: "INJECTIONS",
      description: "Sterile injectable formulations for intravenous, intramuscular, and subcutaneous administration.",
      icon: "�",
      products: ["Antibiotic Injections", "Cardiovascular Injections", "Pain Management", "Vitamin Injections"],
      url: "/injections"
    },
    {
      title: "OPTHALMIC",
      description: "Specialized eye care products including drops, ointments, and solutions for ocular conditions.",
      icon: "👁️",
      products: ["Eye Drops", "Antibiotic Ointments", "Anti-inflammatory Solutions", "Lubricating Drops"]
    },
    {
      title: "SOLID ORAL",
      description: "Tablets, capsules, and other solid dosage forms for oral administration.",
      icon: "💊",
      products: ["Tablets", "Capsules", "Chewable Forms", "Extended Release"]
    },
    {
      title: "LIQUID ORAL",
      description: "Liquid formulations including syrups, suspensions, and solutions for oral intake.",
      icon: "🧪",
      products: ["Syrups", "Suspensions", "Oral Solutions", "Pediatric Formulations"]
    },
    {
      title: "EXTERNAL PREPARATION",
      description: "Topical medications for external application including creams, gels, and ointments.",
      icon: "🧴",
      products: ["Creams", "Gels", "Ointments", "Lotions"]
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
            <motion.h6
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="text-xl md:text-4xl font-bold text-[#1E3A5F] mb-6"
            >
              Global Pharmaceutical Products for Every Need.
            </motion.h6>
            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.2, duration: 0.6 }}
              className="text-xl text-[#6B7280] mb-8"
            >
              Our pharmaceutical products are available in more than 24+ countries around the world. With strategic partnerships and a robust supply chain, we ensure reliable and timely delivery to healthcare providers, wholesalers, and distributors globally
            </motion.p>
          </div>
        </div>
      </div>

      {/* Product Categories */}
      <section className="py-16 bg-[#F9FAFB]">
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
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8 mb-12"
          >
            {productCategories.map((category, index) => (
              <Link key={index} to={`/products/${category.title.toLowerCase().replace(/\s+/g, '-')}`}>
                <motion.div
                  variants={itemVariants}
                  whileHover={{
                    scale: 1.03,
                    boxShadow: "0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)"
                  }}
                  className="bg-white rounded-xl shadow-md overflow-hidden border border-gray-100 hover:border-[#E85B2C]/30 transition-all duration-300 cursor-pointer h-full"
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
              </Link>
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
              View Our Full Product Catalog
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
      {/* <section className="py-16 bg-[#1E3A5F]">
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
      </section> */}
    </div>
  );
};

export default Products;
