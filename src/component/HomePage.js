import React from 'react'
import { motion } from "framer-motion";
import './Homepage.css';
import Header from './Header';
function HomePage() {
    return (
        <div className="homepage">
            <Header />
            <motion.div className="image-1"
            transition={{ ease: [0.17, 0.67, 0.83, 0.67], duration: 1.6 }}
            layoutId='main-image'
            ><img className="mainimage" src="src\component\img\0_ywztPfN728q4891i.jpg" alt="" />
            </motion.div>
        </div>
    )
}

export default HomePage
