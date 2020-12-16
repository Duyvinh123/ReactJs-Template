import React, { useState,useEffect } from 'react'
import { Link } from "react-router-dom"
import {FaBars, FaTimes} from 'react-icons/fa'
import {MdFingerprint} from 'react-icons/md'
import {Button} from './Button'
import './Navbar.css'
import {IconContext} from 'react-icons/lib'

function Navbar() {
    const[click,setClick] = useState(false);
    const[button,setButton] = useState(true)

    const closeMobileMenu =()=> setClick(false)

    const showButton =()=>{
        if(window.innerWidth <= 960){
            setButton(false)
        }else{
            setButton(true)
        }
    }
    window.addEventListener('resize',showButton)

    useEffect(() => {
        showButton()
    }, [])

    const handleClick =()=>{
        setClick(!click)
    }
    return (
        <>
        <IconContext.Provider value={{ color: '#fff'}}> 
        <div className="navbar">
            <div className="navbar-container container">
                <Link to='/' className="navbar-logo">
                    <MdFingerprint className="navbar-icon" />
                    LAVISH
                </Link>
                <div className="menu-icon" onClick={handleClick}>
                    {click ? <FaTimes /> : <FaBars />}
                </div>
                <ul className={click? "nav-menu active" :"nav-menu"}>
                    <li className="nav-item" onClick={closeMobileMenu}>
                        <Link to="/" className="nav-links">
                        Home
                        </Link>
                    </li>
                    <li className="nav-item" onClick={closeMobileMenu}>
                        <Link to="/services" className="nav-links">
                        Services
                        </Link>
                    </li>
                    <li className="nav-item" onClick={closeMobileMenu}>
                        <Link to="/products" className="nav-links">
                        Products
                        </Link>
                    </li>
                    <li className="nav-btn" onClick={closeMobileMenu}>
                        {button ? (
                            <Link className="btn-links">
                                <Button buttonStyle='btn--outline'>
                                    Sign Up
                                </Button>
                            </Link>
                        ):(
                            <Link className="btn-links">
                                <Button buttonStyle='btn--outline' buttonSize="btn--mobile">Sign Up</Button>
                            </Link>
                        )}
                    </li>
                </ul>
            </div>
        </div>
        </IconContext.Provider>
        </>
    )
}

export default Navbar
