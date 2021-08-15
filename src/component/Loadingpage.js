import React from 'react'
import { motion } from "framer-motion";
import './Loadingpage.css'

const container = {
    show: {
      transition: {
        staggerChildren: 0.35,
      },
    },
  };
  
  const item = {
    hidden: { opacity: 0, y: 200 },
    show: {
      opacity: 1,
      y: 0,
      transition: {
        ease: [0.6, 0.01, -0.05, 0.95],
        duration: 1.6,
      },
    },
    exit: {
      opacity: 0,
      y: -200,
      transition: {
        ease: "easeInOut",
        duration: 0.8,
      },
    },
  };
  
  const itemMain = {
    hidden: { opacity: 0, y: 200 },
    show: {
      opacity: 1,
      y: 0,
      transition: {
        ease: [0.17, 0.67, 0.83, 0.67],
        duration: 1.6,
      },
    },
  };

function Loadingpage() {
    return (
        <motion.div 
            className="main-container"
            variants={container}
            initial="hidden"
            animate="show"
            exit="exit"
        >
            <motion.div className="image1"
                variants={item}
                initial="hidden"
                animate="show"
                exit="exit"
            >image1</motion.div>
            <motion.div className="image2"
                variants={item}
                initial="hidden"
                animate="show"
                exit="exit"
            >image2</motion.div>
            <motion.div className="image3"
                variants={item}
                initial="hidden"
                animate="show"
                exit="exit"
            >image3</motion.div>
            <motion.div className="image4"
                variants={item}
                initial="hidden"
                animate="show"
                exit="exit"
            >image4</motion.div>
            <motion.div className="image5"
                variants={itemMain}
                layoutId="main-image"
                initial="hidden"
                animate="show"
                exit="exit"
            ><img src="src\component\img\0_ywztPfN728q4891i.jpg" alt="" /></motion.div>
        </motion.div>
    )
}

export default Loadingpage