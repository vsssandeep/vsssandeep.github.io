import React from 'react'
import "./Navbar.css";
import Toggle from '../toogle/Toogle';
import { Link } from "react-scroll";


const Navbar = () => {
    return (
        <div className="navbar-comp" id='Navbar'>
            <div className="left-navbar">
                <div className="brand-name">Vardhan Software Solutions</div>
                <Toggle />
            </div>
            <div className="right-navbar">
                <div className="list">
                    <ul style={{ listStyleType: "none" }}>
                        <li>
                            <Link activeClass="active" to="Navbar" spy={true} smooth={true}>
                                Home
                            </Link>
                        </li>
                        <li>
                            <Link to="service" spy={true} smooth={true}>
                                Serivces
                            </Link>
                        </li>
                        <li>
                            <Link to="product" spy={true} smooth={true}>
                                Project
                            </Link>
                        </li>
                        <li>
                            <Link to="games" spy={true} smooth={true}>
                                Games & App
                            </Link>
                        </li>
                    </ul>

                </div>
                <Link to="footer" spy={true} smooth={true}>
                    <button className="button contect-button">Contact Us</button>
                </Link>
            </div>
        </div>

    )
}

export default Navbar