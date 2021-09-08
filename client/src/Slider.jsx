import React from 'react';
import './css/slider.css';
import p1 from './images/p1.png';
import p2 from './images/p2.png';
import p3 from './images/p3.png';



export default class Slider extends React.Component{

    render(){
        return(
            <div>

                <div className="testimonials">
                    <div className="inner">
                        <h1>CUSTOMER REVIEWS</h1>
                        <div className="border"></div>

                        <div className="row">
                            <div className="col">
                                <div className="testimonial">
                                    <img src={p1} alt=""/>
                                        <div className="name">VISHNI PERERA</div>
                                        <div className="stars">
                                            <i className="fas fa-star"></i>
                                            <i className="fas fa-star"></i>
                                            <i className="fas fa-star"></i>
                                            <i className="fas fa-star"></i>
                                            <i className="fas fa-star"></i>
                                        </div>

                                        <p>
                                            Whenever I hear about selling or buying cars I would strongly recommend  car Zone's only. Bcz I never ever seen such a honest guy's especially in this field.I started dealing with Car Zone's from 2012.I believe this is one of the right destination blindly we can deal.
                                        </p>
                                </div>
                            </div>

                            <div className="col">
                                <div className="testimonial">
                                    <img src={p2} alt=""/>
                                        <div className="name">SUPUN GOMES</div>
                                        <div className="stars">
                                            <i className="fas fa-star"></i>
                                            <i className="fas fa-star"></i>
                                            <i className="fas fa-star"></i>
                                            <i className="far fa-star"></i>
                                            <i className="far fa-star"></i>
                                        </div>

                                        <p>
                                            What an excellent dealership. I wanted a specific car and the next day I had it. Ifthika and his team gave me my dream car and at a bargain! Even my daughter loves it! If you ever want to buy a car in Sharjah. Go to this man. A good friend and a good person!
                                        </p>
                                </div>
                            </div>

                            <div className="col">
                                <div className="testimonial">
                                    <img src={p3} alt=""/>
                                        <div className="name"> VARUNI DE SILVA</div>
                                        <div className="stars">
                                            <i className="fas fa-star"></i>
                                            <i className="fas fa-star"></i>
                                            <i className="fas fa-star"></i>
                                            <i className="fas fa-star"></i>
                                            <i className="far fa-star"></i>
                                        </div>

                                        <p>
                                            I bought a ford Mustang. The price in which I get the car was so reasonable as compared to the other market. The car with no major work and I love driving it. I would like to recommend Car Zone as the showroom have got every model to cater every person's need.
                                        </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>


            </div>
        );
    }
}