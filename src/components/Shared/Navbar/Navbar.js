import React from 'react';
import './Navbar.css';
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
                        <li><a>Home</a></li>
                        <li><a>Service</a></li>
                        <li><a>Top Deals</a></li>
                        <li><a>Package</a></li>
                        <li><a>Gallery</a></li>
                        <li><a>Blog</a></li>
                        <li><a>Contact</a></li>
                    </ul>
                </div>
                <a className="btn btn-ghost normal-case mx-auto text-xl">VOYAGER</a>
            </div>
            <div className="navbar-center hidden lg:flex">
                <ul className="menu menu-horizontal px-1">
                    <li><a>Home</a></li>
                    <li><a>Service</a></li>
                    <li><a>Top Deals</a></li>
                    <li><a>Package</a></li>
                    <li><a>Gallery</a></li>
                    <li><a>Blog</a></li>
                    <li><a>Contact</a></li>
                </ul>
            </div>
            <div className="navbar-end">
                <a className="btn btn-outline">Login</a>
            </div>
        </div>
    );
};

export default Navbar;