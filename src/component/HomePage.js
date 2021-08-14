import React from 'react'
import { motion } from "framer-motion";

function HomePage() {
    return (
        <motion.div
            transition={{ ease: [0.17, 0.67, 0.83, 0.67], duration: 1.6 }}
            layoutId='main-image'
            >
        </motion.div>
    )
}

export default HomePage
