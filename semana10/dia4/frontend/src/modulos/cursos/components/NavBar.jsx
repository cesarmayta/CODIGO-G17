import React from 'react';
import { Link } from 'react-router-dom';


const NavBar = () => {
    return (
        <header className="is-dark" uk-sticky="cls-active: is_fixed ; cls-inactive : is-dark">
            <div className="header_inner">
                <div className="left-side">
                    <div id="logo">
                        <a href="#">
                            <img src="assets/images/logo.png" alt="" />
                            <img src="assets/images/logo-light.png" className="logo_inverse" alt="" />
                            <img src="assets/images/logo-mobile.png" className="logo_mobile" alt="" />
                        </a>
                    </div>

                    <div className="triger" uk-toggle="target: .header_menu ; cls: is-visible">
                        <i className="uil-bars"></i>
                    </div>

                    <ul className="header_menu">
                        <li><a href="home.html"> Home</a> </li>
                        <li><a href="#" className="active"> Courses </a>
                            <div uk-drop="mode: click" className="mdropdown">
                                <div
                                    className="-mt-5 -mx-5 bg-gray-100 uk-visible@m p-6 rounded-r-md rounded-t-md relative z-10">
                                    <h3> Courses </h3>
                                    <p className="leading-6 mb-0 text-sm">  choose from +10.000 online video courses with new
                                        additions published every month. start leaning now. </p>
                                </div>
                                <div className="-mt-6 -mx-5 rotate-180 skew-y-3 transform uk-visible@m">
                                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1000 100"
                                        className="text-gray-100 fill-current">
                                        <path d="M 0 0 c 0 0 200 50 500 50 s 500 -50 500 -50 v 101 h -1000 v -100 z">
                                        </path>
                                    </svg>
                                </div>
                                <ul className="grid md:grid-cols-2 gap-3 mb-2">
                                    <li> <a href="courses.html">Web Development </a></li>
                                    <li> <a href="courses.html">Mobile App </a> </li>
                                    <li> <a href="courses.html">Business </a> </li>
                                    <li> <a href="courses.html"> IT Software </a> </li>
                                    <li> <a href="courses.html">Desings </a></li>
                                    <li> <a href="courses.html">Marketing </a></li>
                                    <li> <a href="courses.html">Life Style </a> </li>
                                    <li> <a href="courses.html">Photography </a> </li>
                                    <li> <a href="courses.html">Health Fitness </a> </li>
                                    <li> <a href="courses.html">Ecommerce </a></li>
                                    <li> <a href="courses.html">Food cooking </a></li>
                                    <li> <a href="courses.html">Teaching academy </a> </li>
                                    <li> <a href="courses.html">Marketing </a></li>
                                    <li> <a href="courses.html">Life Style </a> </li>
                                </ul>
                            </div>
                        </li>
                        {/* <li><a href="books.html"> Book</a> </li>
                        <li><a href="blog.html"> Blog</a> </li> */}
                        <li><Link to="/iniciar-sesion"> Login</Link></li>
                        <li><Link to="/registro"> Register</Link></li>
                        <li></li>
                        <li><a href="#"> Pages</a>
                            <div uk-drop="mode: click" className="xdropdown">
                                <ul>
                                    <li> <a href="pages-about.html"> About </a></li>
                                    <li> <a href="pages-contact.html"> Contact us </a></li>
                                    <li> <a href="course-intro.html"> Course intro 1 </a></li>
                                    <li> <a href="course-intro-2.html"> Course intro 2 </a></li>
                                </ul>
                            </div>
                        </li>
                    </ul>

                    <div className="overly" uk-toggle="target: .header_menu ; cls: is-visible"></div>

                </div>
                <div className="right-side">

                    <a href="#" className="header-links-item">
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                                d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z" />
                        </svg>
                    </a>
                    <a href="#" className="header-links-item">
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                                d="M15 17h5l-1.405-1.405A2.032 2.032 0 0118 14.158V11a6.002 6.002 0 00-4-5.659V5a2 2 0 10-4 0v.341C7.67 6.165 6 8.388 6 11v3.159c0 .538-.214 1.055-.595 1.436L4 17h5m6 0v1a3 3 0 11-6 0v-1m6 0H9" />
                        </svg>
                    </a>

                    <a href="#" className="header-links-item">
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                                d="M7 8h10M7 12h4m1 8l-4-4H5a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v8a2 2 0 01-2 2h-3l-4 4z" />
                        </svg>
                    </a>

                    <a href="#">
                        <img src="assets/images/avatars/avatar-2.jpg" className="header-avatar" alt="" />
                    </a>
                    <div uk-drop="mode: click;offset:5" className="header_dropdown profile_dropdown">
                        <ul>
                            <li><a href="#">
                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24"
                                    stroke="currentColor">
                                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                                        d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
                                </svg>
                                My learning </a> </li>
                            <li><a href="#">
                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24"
                                    stroke="currentColor">
                                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                                        d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z" />
                                </svg>
                                My Cart </a>
                            </li>
                            <li><a href="#">
                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24"
                                    stroke="currentColor">
                                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                                        d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
                                </svg>
                                My Wishlist </a> </li>
                            <li>
                                <hr />
                            </li>
                            <li><a href="#"> Account setting </a> </li>
                            <li><a href="#"> Payments </a> </li>
                            <li><a href="#"> Help </a> </li>
                            <li>
                                <a href="#" id="night-mode" className="btn-night-mode">
                                    Night mode
                                    <span className="btn-night-mode-switch">
                                        <span className="uk-switch-button"></span>
                                    </span>
                                </a>
                            </li>
                            <li><a href="form-login.html"> Log Out</a></li>
                        </ul>
                    </div>

                </div>
            </div>
        </header>
    )
}

export default NavBar;