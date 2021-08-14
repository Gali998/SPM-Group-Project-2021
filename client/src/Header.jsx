import React from 'react';
import {Link} from 'react-router-dom';
import './css/Header.css';

export default class Header extends React.Component{

    render(){
        return(
            <div>

                <div className="top-bar">
                        <div className="container">
                        <div className="row">
                            <div className="col-12">
                            <Link to="#" className=""><span className="mr-2  icon-envelope-open-o"></span> <span style={{float: 'left', paddingLeft: '20px', paddingTop: '5px'}} className="d-none d-md-inline-block">carzone@gmail.com</span></Link>
                            <span className="mx-md-2 d-inline-block"></span>
                            <Link to="#" className=""><span className="mr-2  icon-phone"></span> <span style={{float: 'left', paddingLeft: '20px', paddingTop: '5px'}} className="d-none d-md-inline-block">+94 (011) 568 9111</span></Link>


                            <div className="float-right">

                            <Link to="https://www.youtube.com/"><div style={{float: 'left', paddingLeft: '20px', paddingTop: '10px'}} id="youtube"><i className="fa fa-youtube"></i></div></Link>
                            <Link to="https://www.facebook.com/"><div style={{float: 'left', paddingLeft: '15px', paddingTop: '10px'}} id="facebook"><i className="fa fa-facebook-official"></i></div></Link>
                            <Link to="https://www.pinterest.com/"><div style={{float: 'left', paddingLeft: '20px', paddingTop: '10px'}} id="pinterest"><i className="fa fa-pinterest"></i></div></Link>
                            <Link to="https://twitter.com/login?lang=en"><div style={{float: 'left', paddingLeft: '20px', paddingTop: '10px'}} id="twitter"><i className="fa fa-twitter-square"></i></div></Link>
                            <Link to="https://www.instagram.com"><div style={{float: 'left', paddingLeft: '20px', paddingTop: '10px', marginRight: '20px'}} id="instagram"><i className="fa fa-instagram"></i></div></Link>
          
                            </div>

                            </div>

                        </div>

                        </div>
                </div>

                <header className="site-navbar js-sticky-header site-navbar-target" role="banner">

                    <div className="container">
                    <div className="row align-items-center position-relative">


                        <div className="site-logo">
                        <Link to="index.html" className="text-black"><span className="text-primary">Car Zone</span></Link>
                        </div>

                        <div className="col-12">
                        <nav className="site-navigation text-right ml-auto " role="navigation">

                            <ul className="site-menu main-menu js-clone-nav ml-auto d-none d-lg-block">
                            <li><Link to="#" className="nav-link">Home</Link></li>
                            <li><Link to="/about-us" className="nav-link">About Us</Link></li>
                            <li><Link to="/" className="nav-link">Contact Us</Link></li>
                            <li><Link to="/register-ui" className="nav-link" id="">SignUp Now</Link></li>
                            <li><Link to="/login-ui" className="nav-link">SignIn Now</Link></li>
                            </ul>
                        </nav>

                        </div>

                        <div className="toggle-button d-inline-block d-lg-none"><Link to="#" className="site-menu-toggle py-5 js-menu-toggle text-black"><span className="icon-menu h3"></span></Link></div>

                    </div>
                    </div>

                </header>

            </div>
        );
    }
}