import Headers from './Headers'
import './HomePage2.css'
import {AnimateSharedLayout, motion} from 'framer-motion'
function HomePage2() {
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
    
    return (
        <div className="homepage">
            <Headers></Headers>
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
                <h3>This is a Sample Text</h3>
                <p>more sampple text huha how are you</p>
                </div>
               
            </div>

            </div>
           
        </div>
    )
}

export default HomePage2
