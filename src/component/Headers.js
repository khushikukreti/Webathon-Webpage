import React from 'react'
import './Headers.css'
import MenuIcon from '@material-ui/icons/Menu';

function Headers() {
    return (
        <div className="header">

            <div className="header-left">
                <img src="https://upload.wikimedia.org/wikipedia/en/thumb/d/d2/Birla_Institute_of_Technology_Mesra.png/220px-Birla_Institute_of_Technology_Mesra.png"
                alt="" />
            </div>
            <div className="header-right">
                <p>Cultural Events</p>
                <p>Technical Events</p>
                <p>About</p>
                <MenuIcon className="icon"></MenuIcon>
            </div>
        </div>
    )
}

export default Headers