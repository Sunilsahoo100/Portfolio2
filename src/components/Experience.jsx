import React from 'react';
import { EXPERIENCE } from '../constants';
import { motion } from "framer-motion";

const Experience = () => {
  return (
    <div id="education" className="p-14 pb-5">
      <motion.h2
        whileInView={{ opacity: 1, y: 0 }}
        initial={{ opacity: 0, y: -50 }}
        transition={{ duration: 0.5 }}
        className="text-4xl  text-center mb-16"
      >
        Experience
      </motion.h2>
      <div>
        {EXPERIENCE.map((experience, index) => (
          <div key={index} className="mb-12">
            {/* Medium Screens: Display in a stacked card */}
            <motion.div
              whileInView={{ opacity: 1, x: 0 }}
              initial={{ opacity: 0, x: -50 }}
              transition={{ duration: 0.7 }}
              className="lg:hidden shadow-md border border-purple-300 rounded-xl p-6 mx-4"
            >
              <div className="flex flex-col items-start">
                <img src={experience.image} alt={experience.firm} className="w-1/2 h-auto rounded-md mb-4" />
                <div className="flex flex-col space-y-2">
                  <span className="text-lg font-semibold text-purple-500">{experience.company}</span>
                  <p className="text-m text-purple-700 font-bold italic ">{experience.role}</p>
                  <p className="text-gray-600">{experience.role}</p>
                  <p className="text-gray-500 text-sm">{experience.year}</p>
                  {experience.description && (
                    <p className="mt-2 text-gray-700 text-sm">{experience.description}</p>
                  )}
                </div>
              </div>
            </motion.div>

            {/* Large Screens: Side-by-side layout */}
            <motion.div
              whileInView={{ opacity: 1, x: 0 }}
              initial={{ opacity: 0, x: -50 }}
              transition={{ duration: 0.7 }}
              className="hidden lg:flex shadow-lg border border-purple-300 rounded-xl p-8 mx-12"
            >
              <div className="w-1/3 flex justify-center items-center">
                <img
                  src={experience.image}
                  alt={experience.firm}
                  className="w-3/4 h-auto rounded-md"
                />
              </div>
              <div className="w-2/3 flex flex-col pl-6">
                <span className="text-xl font-semibold text-purple-500">{experience.company}</span>
                <div className="text-m text-purple-700 font-bold italic ">{experience.role}</div>
                <p className="text-gray-200 text-sm">{experience.year}</p>
                {experience.description && (
                  <p className="mt-4 text-gray-400 text-sm leading-relaxed">{experience.description}</p>
                )}
              </div>
            </motion.div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Experience;
