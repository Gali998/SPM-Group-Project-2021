import React from 'react';
import {Link} from 'react-router-dom';
import Header from './Header';
import Footer from './Footer';
import './css/AboutUs.css';
import person1 from './images/person1.png';
import person2 from './images/person2.png';
import person3 from './images/person3.png';

export default class AboutUs extends React.Component{

    render(){
        return(
            <div>
                {/*header*/}

                <Header />

                {/*body*/}

                <div id="background">
                    <div className="aboutus"  >
                        <h1 id="aboutcarzone">ABOUT CAR ZONE</h1>
                        <h2 id="headline">"The Luxury" for those who can afford it</h2>

                        <div className="container1">
                            <div id="visiondiv">
                                <div className="card" id="vision">
                                    <div className="card-body" >
                                        <h5 className="card-title" id="vtitle">Vision</h5>
                                        <p className="card-text" id="vdesc">“To provide best luxurious cars to the customers with friendly and professional service”</p>
                                    </div>
                                </div>
                            </div>
                            <div id="missiondiv">
                                <div className="card" id="mission">
                                    <div className="card-body">
                                        <h5 className="card-title" id="mtitle">Mission</h5>
                                        <p className="card-text" id="mdesc">“To be the Luxury Wedding Car and VIP Vehicles Supplier BRAND in All Island”</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="container2">
                    <h3 id="ourcompany">OUR COMPANY</h3>

                    <p id="description">
                        Car Zone, <b>"The Luxury" for those who can afford it</b>. We have a great pleasure in introducing ourselves,
                        Car Zone Online (PVT) Ltd. is a leading rental car company in Sri Lanka (Head Offices in Colombo and Kandy) based
                        on an online booking/reserving system. We provide rental car services, car hires and luxury wedding cars
                        (BMW, Benz, Limousine, Jaguar, Convertible BMW, Convertible Benz, Chryslers, Rolls-Royce, Range Rover, Discovery).
                        We provide you well-maintained vehicles (premium and high luxury ),and also Car Zone provide you the most professional and
                        friendly service out of all the wedding rental car agencies in Colombo and Kandy for a reasonable charge.

                        You will be able to collect your pre-booked (reserved) vehicle at any location.
                    </p>

                    <p id="description">
                        Car Zone is established with hope of providing a professional service to all Sri Lankans and Foreigners/Tourists.Car Zone is
                        proud to say we only provide very cheapest rate in Colombo.
                    </p>
                    <p id="description">
                        Car Zone is the only professionally managed car rentals service provider to a wide range of customers from individual or group.
                        We provide you the best quality car rental services for all your travel needs. We have a wide range of well maintained vehicles,
                        starting from Economy, Business, Premium & Luxury class cars round the clock to serve you at your doorstep. Carzone offers
                        flexibility of rentals based on your requirements.
                    </p>
                    <p id="description">
                        Now we are supplying rental cars to <b>Kandy (Kandy, Katugastota, Peradeniya, Kundasale, Aniwatte, Digana ), Colombo
                        (Anywhere in Colombo District),Bandaranaike International Airport in Colombo, Matale, Kegalle, Kurunegala, Jaffna,
                        Galle, Matara</b> simply anywhere in Sri Lanka.
                    </p>


                    <h5 className="detail">Company Owner - Dammika De Silva</h5>
                    <h5 className="detail">Company Name - Car Zone Online (PVT) Ltd.</h5>
                    <h5 className="detail">Company Number - PV00210161</h5>
                </div>

                <div id="benifitdiv">
                    <div>
                        <h3 id="benifits">YOUR BENIFITS WITH CAR ZONE</h3>
                    </div>
                    <div id="list1">
                        <ul>
                            <li className="listitem">Car Zone Best Price Gurantee</li>
                            <li className="listitem">New cars - on average 3 months old</li>
                            <li className="listitem">Free cancellation</li>
                        </ul>
                    </div>
                    <div id="list2">
                        <ul>
                            <li className="listitem">No hidden costs</li>
                            <li className="listitem">Excellent customer service</li>
                            <li className="listitem">Online payment facility</li>
                        </ul>
                    </div>
                </div>

                <div id="team">
                    <div>
                        <h4 id="benifits">OUR TEAM</h4>
                    </div>
                    <div id="img1">
                        <img className="image" src={person1}/>
                        <div id="title1">
                            <label>Dammika De Silva</label><br/>
                            <label>Chief Executive Officer</label>
                        </div>
                    </div>
                    <div id="img2">
                        <img className="image"src={person2}/>
                        <div id="title2">
                            <label>Sirini Rajapaksha</label><br/>
                            <label>Marketing Director</label>
                        </div>
                    </div>
                    <div id="img3">
                        <img className="image"src={person3}/>
                        <div id="title3">
                            <label>Chirantha Alwis</label><br/>
                            <label>General Manager</label>
                        </div>
                    </div>
                </div>

                {/*footer*/}
                <Footer />
            </div>
        );
    }
}