
import React from 'react';
import { motion } from 'framer-motion';

const StatCard = ({ number, label, icon: Icon, index }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      viewport={{ once: true }}
      className="text-center"
    >
      <div className="flex items-center justify-center mb-4">
          {Icon && <Icon className="w-8 h-8 text-white mr-3" />}
          <div className="text-5xl md:text-6xl font-bold text-white" style={{ color: 'white' }}>
            {number}
          </div>
        </div>
        <div className="text-lg font-medium text-white">{label}</div>
    </motion.div>
  );
};

export default StatCard;
