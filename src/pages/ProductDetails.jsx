import React from 'react';
import { motion } from 'framer-motion';
import { useParams } from 'react-router-dom';
import TableWithPDF from '../components/TableWithPDF';
import { useEffect } from 'react';

const ProductDetails = ({ apiProducts }) => {
  const { product_id } = useParams();
  
  // Function to convert kebab-case to Title Case
  const formatTitle = (str) => {
    if (!str) return '';
    return str
      .split('-')                           // Split by hyphens
      .map(word => word.charAt(0).toUpperCase() + word.slice(1).toLowerCase()) // Capitalize each word
      .join(' ');                          // Join with spaces
  };
  
  return (
    <div className="min-h-screen bg-gradient-to-br from-[#f8fafc] to-[#e0e7ef] font-sans flex items-center justify-center py-10 px-2 mt-40">
      <motion.div
        className="w-[75vw] bg-white rounded-2xl shadow-xl p-10 border border-gray-100 flex flex-col items-center"
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7, ease: 'easeOut' }}
      >
        <motion.h1
          className="text-4xl md:text-5xl font-extrabold text-center mb-8 text-[#1E3A5F] tracking-tight drop-shadow-sm w-full"
          initial={{ opacity: 0, y: -30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.2, ease: 'easeOut' }}
        >
          <span className="text-[#E85B2C]">{formatTitle(product_id)}</span>
        </motion.h1>
        <motion.div
          className="w-full flex justify-center"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.7, delay: 0.4 }}
        >
          <TableWithPDF product_id={product_id} tableData={apiProducts}/>
        </motion.div>
      </motion.div>
    </div>
  );
};

export default ProductDetails;
