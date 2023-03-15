import React from 'react';
import './Navbar.module.css';
import { Link, NavLink } from 'react-router-dom';

const Navbar = () => {

    /* When the user scrolls down, hide the navbar. When the user scrolls up, show the navbar */
    let prevScrollpos = window.pageYOffset;
    window.onscroll = function () {
        const currentScrollPos = window.pageYOffset;
        if (prevScrollpos > currentScrollPos) {
            document.getElementById("navbar").style.top = "0";
        } else {
            document.getElementById("navbar").style.top = "-70px";
        }
        prevScrollpos = currentScrollPos;
    }

    return (
        <div id='navbar' className="navbar bg-base-200">
            <div className="navbar-start">
                <div className="dropdown">
                    <label tabIndex={0} className="btn btn-ghost lg:hidden">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                    </label>
                    <ul tabIndex={0} className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52">
                        <li><NavLink to='/home'>Home</NavLink></li>
                        <li><NavLink to='/service'>Service</NavLink></li>
                        <li><NavLink to='/top-deals'>Top Deals</NavLink></li>
                        <li><NavLink to='/package'>Package</NavLink></li>
                        <li><NavLink to='/gallery'>Gallery</NavLink></li>
                        <li><NavLink to='/blog'>Blog</NavLink></li>
                        <li><NavLink to='/contact'>Contact</NavLink></li>
                    </ul>
                </div>
                <Link to='/home' className="btn btn-ghost normal-case mx-auto text-xl">VOYAGER</Link>
            </div>
            <div className="navbar-center hidden lg:flex">
                <ul className="menu menu-horizontal px-1">
                    <li><NavLink to='/home'>Home</NavLink></li>
                    <li><NavLink to='/service'>Service</NavLink></li>
                    <li><NavLink to='/top-deals'>Top Deals</NavLink></li>
                    <li><NavLink to='/package'>Package</NavLink></li>
                    <li><NavLink to='/gallery'>Gallery</NavLink></li>
                    <li><NavLink to='/blog'>Blog</NavLink></li>
                    <li><NavLink to='/contact'>Contact</NavLink></li>
                </ul>
            </div>
            <div className="navbar-end">
                <Link to='/login' className="btn btn-outline">Login</Link>
            </div>
        </div>
    );
};

export default Navbar;