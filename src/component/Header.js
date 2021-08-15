import React from 'react'
import { motion } from "framer-motion";

const navmotion = {
    hidden: { opacity: 0, y: 200 },
    show: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 1.6,
      },
    },
  };

function Header() {
    return (
        <motion.div 
            className="header"
            variants={navmotion}
            initial="hidden"
            animate="show"
        >
            <nav class="navbar navbar-expand-lg fixed-top navbar-dark bg-dark">
  <a class="navbar-brand" href="#">Title-name</a>
  <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNavDropdown" aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
    <span class="navbar-toggler-icon"></span>
  </button>
  <div class="collapse navbar-collapse" id="navbarNavDropdown">
    <ul class="navbar-nav">
      <li class="nav-item active">
        <a class="nav-link" href="#">Home <span class="sr-only">(current)</span></a>
      </li>
      <li class="nav-item">
        <a class="nav-link" href="#">About Us</a>
      </li>
      <li class="nav-item">
        <a class="nav-link" href="#">Contact</a>
      </li>
      <li class="nav-item dropdown">
        <a class="nav-link dropdown-toggle" href="#" id="navbarDropdownMenuLink" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
          Events
        </a>
        <div class="dropdown-menu" aria-labelledby="navbarDropdownMenuLink">
          <a class="dropdown-item" href="#">Cultural Event 1</a>
          <a class="dropdown-item" href="#">Cultural Event 2</a>
          <a class="dropdown-item" href="#">Cultural Event 3</a>
          <a class="dropdown-item" href="#">Cultural Event 4</a>
          <a class="dropdown-item" href="#">Technical Event 1</a>
          <a class="dropdown-item" href="#">Technical Event 2</a>
        </div>
      </li>
    </ul>
  </div>
</nav>
        </motion.div>
    )
}

export default Header