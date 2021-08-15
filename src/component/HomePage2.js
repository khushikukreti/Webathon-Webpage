import React from 'react'
import Headers from './Headers'
import './HomePage2.css'
import {Link} from 'react-router-dom'
import {AnimateSharedLayout, motion} from 'framer-motion'
function HomePage2(props) {
    const containerVariants = {
        hidden: { 
          opacity: 0, 
          x: '-5vw' 
        },
        visible: { 
          opacity: 0.7, 
          x: 0,
          
          transition: {  ease: "easeInOut",duration:0.4  }
        },
        hover: {
            scale: 1.1,
           
          }
       
      };
    const event1=()=>{
        props.history.push("/CulturalEvent1")
    }
    const event2=()=>{
        props.history.push("/CulturalEvent2")
    }
    const event3=()=>{
        props.history.push("/CulturalEvent3")
    }
    const event4=()=>{
        props.history.push("/CulturalEvent4")
    }
    const event5=()=>{
        props.history.push("/TechEvent1")
    }
    const event6=()=>{
        props.history.push("/TechEvent2")
    }
    return (
        <div className="homepage">
            <div className="page">
            <div className="style-con">
            <div className="round-di"> </div>
          
            <motion.div className="image-div"
            variants={containerVariants}
            initial="hidden"
            animate="visible"
            whileHover="hover"
            ></motion.div>
            <div className="text-container">
                <div className="text">
                <h3>INDEPENDENCE DAY FEST</h3>
                </div>
               
            </div>

            </div>
            </div>
           
           <div className="event-container">
               <div className="two">
                   <div className="left">
                   <motion.div className="event one"
                   variants={containerVariants}
                     initial="hidden"
                    animate="visible"
                     whileHover="hover"
                     onClick={event1}
                   >Fest</motion.div>
                   </div>
              <div className="right">
              <motion.div className="event twice"
              variants={containerVariants}
            initial="hidden"
            animate="visible"
            whileHover="hover"
            onClick={event2}

              >Music</motion.div>
              </div>
              
               </div>
               <div className="two">
                   <div className="left">
                       <motion.div className="event three"
                       variants={containerVariants}
            initial="hidden"
            animate="visible"
            whileHover="hover"
            onClick={event3}

                       >Dance</motion.div></div>
                   <div className="right">
                        <motion.div className="event four"
                        variants={containerVariants}
            initial="hidden"
            animate="visible"
            whileHover="hover"
            onClick={event4}

                        >Drama</motion.div></div>

               </div>
               <div className="two">
                   <div className="left">
                        <motion.div className="event five"
                            variants={containerVariants}
            initial="hidden"
            animate="visible"
            whileHover="hover"
            onClick={event5}

                        >Quiz</motion.div>
                   </div>
                   <div className="right">
                        <motion.div className="event six"
                            variants={containerVariants}
            initial="hidden"
            animate="visible"
            whileHover="hover"
            onClick={event6}

                        >Hackathon</motion.div>
                   </div>
               </div>
           </div>
        </div>
    )
}

export default HomePage2
