import React from 'react'
import { motion } from "framer-motion";

function HomePage() {
    return (
        <motion.div
        style={{height:"30vh",border:"1px solid black"}}
            transition={{ ease: [0.17, 0.67, 0.83, 0.67], duration: 1.6 }}
            layoutId='card-main-image'
            >
                homepage
        </motion.div>
    )
}

export default HomePage
