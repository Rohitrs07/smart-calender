import React from "react";
import { motion } from "framer-motion";
import smart from '../images/smart.png';

const imageTransition = {
  initial: {
    height: "100vh",
    bottom: 0,
  },
  animate: {
    height: 0,
    transition: {
      when: "afterChildren",
      duration: 1.5, // Adjust the duration for your preference
      ease: [0.87, 0, 0.13, 1],
    },
  },
};

const textContainer = {
    initial: {
      opacity: 1,
    },
    animate: {
      opacity: 0,
      transition: {
        duration: 0.25,
        when: "afterChildren",
      },
    },
  };

  

const text = {
    initial: {
      y: 40,
    },
    animate: {
      y: 80,
      transition: {
        duration: 1.5,
        ease: [0.87, 0, 0.13, 1],
      },
    },
  };

const InitialTransition = () => {
  return (
    <div className="absolute inset-0 flex items-center justify-center overflow-hidden">
      <motion.img
        src={smart} // Replace with the path to your image
        alt="Loading Transition"
        className="relative z-50 w-full object-cover" // Adjust classes as needed
        initial="initial"
        animate="animate"
        variants={imageTransition}
      />
        <motion.svg
          variants={textContainer}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1.5, ease: "easeInOut" }}
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 800 600"
          className="absolute z-50 flex w-full h-full"
        >
          <pattern
            id="pattern"
            patternUnits="userSpaceOnUse"
            width={750}
            height={800}
            className="text-white"
          >
            <rect className="w-full h-full fill-current" />
            <motion.rect
              variants={text}
              initial={{ x: -750 }}
              animate={{ x: 0 }}
              transition={{ duration: 1.5, ease: "easeInOut" }}
              className="w-full h-full text-[#FF6754] fill-current"
            />
          </pattern>
          <text
            x="50%"
            y="50%"
            textAnchor="middle"
            className="text-4xl font-bold"
            style={{ fill: "url(#pattern)" }}
          >
            Smart-Calender
          </text>
        </motion.svg>
      
    </div>
  );
};

export default InitialTransition;
