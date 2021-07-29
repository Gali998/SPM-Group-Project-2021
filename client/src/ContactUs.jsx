import React from 'react';
import {Link} from 'react-router-dom';
import Header from './Header';
import Footer from './Footer';
import './css/ContactUs.css';
import backgroundImage1 from './images/caller1.jpg';
import backgroundImage2 from './images/map1.jpg';

export default class ContactUs extends React.Component{

    render(){
        return(
            <div>
                <Header />

				<div class="contact2" style={{backgroundImage:`url(${backgroundImage2})`}} id="contact">
				<div class="container">
					<div class="row contact-container">
					<div class="col-lg-12">
						<div class="card card-shadow border-0 mb-4">
						<div class="row">
							<div class="col-lg-8">
							<div class="contact-box p-4">
								<h1 class="title">Contact Us</h1>
								
								<div id="get-in-touch">Get in Touch</div>
								<br/>
								<p id="let-us-know">Let us know how we can help and<br/> set up a time to chat with us<br/><br/></p>
								<p id="need-to-know">Need to know about us<br/></p>
								<Link to='/about-us' id="about-us">About Us</Link>
							</div>
							</div>
							<div class="col-lg-4 bg-image" style={{backgroundImage:`url(${backgroundImage1})`}}>
							<div class="detail-box p-4">
								<h5 class="text-white font-weight-light mb-3">ADDRESS</h5>
								<p class="text-white op-7">No:123/12,<br/>Galle Road,<br/>Colombo 06</p>
								<h5 class="text-white font-weight-light mb-3 mt-4">CALL US</h5>
								<p class="text-white op-7">Tel:+94 (011) 568 9111<br/></p>
								<h5 class="text-white font-weight-light mb-3 mt-4">Mail US</h5>
								<p class="text-white op-7">carzone@gmail.com</p>
								<div class="round-social light">
								{/* <a href="#" class="ml-0 text-decoration-none text-white border border-white rounded-circle"><i class="icon-social-facebook"></i></a>
								<a href="#" class="text-decoration-none text-white border border-white rounded-circle"><i class="icon-social-twitter"></i></a>
								<a href="#" class="text-decoration-none text-white border border-white rounded-circle"><i class="icon-social-youtube"></i></a> */}
								</div>
							</div>
							</div>
						</div>
						</div>
					</div>
					</div>
				</div>
				</div>
                
                <Footer />
            </div>
        );
    }
}