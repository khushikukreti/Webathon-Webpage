import React from 'react'
import './events.css'
import { motion } from "framer-motion";

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

function Events() {
    return (
        <div className='events'>
          <div className = 'eventI'>
            <motion.div className="event1"
                variants={item}
                initial="hidden"
                animate="show"
                exit="exit"
            >event1</motion.div>
            <motion.div className="event2"
                variants={item}
                initial="hidden"
                animate="show"
                exit="exit"
            >event2</motion.div>
            </div>
            <div className = 'eventI'>
            <motion.div className="event3"
                variants={item}
                initial="hidden"
                animate="show"
                exit="exit"
            >event3</motion.div>
            <motion.div className="event4"
                variants={item}
                initial="hidden"
                animate="show"
                exit="exit"
            >event4</motion.div>
            </div>
            <div className = 'eventI'>
            <motion.div className="event5"
                variants={item}
                initial="hidden"
                animate="show"
                exit="exit"
            >event5</motion.div>
            <motion.div className="event6"
                variants={item}
                initial="hidden"
                animate="show"
                exit="exit"
            >event6</motion.div>
            </div>
        </div>
    )
}

export default Events
