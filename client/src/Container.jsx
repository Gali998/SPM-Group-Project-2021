import React from 'react';
import './css/slider.css';
// import p1 from './images/p1.png';
// import p2 from './images/p2.png';
// import p3 from './images/p3.png';



export default class Container extends React.Component {

    render() {
        return (
            <div>

                <div className="testimonials">
                    <div className="inner">

                        <div className="border"></div>

                        <div className="row">
                            <div className="col">
                                <div className="testimonial">
                                    <div className="name"> <i className="fas fa-car"></i><br/><br/>
                                        WHY CHOOSE CAR ZONE</div>


                                    <p>
                                        With history-checked cars, there are many ways Kandy Cars can help you to find your next vehicle. We have a wide range of used cars for sale, so you can be confident of finding the right car for your needs.
                                    </p>

                                </div>
                            </div>

                            <div className="col">
                                <div className="testimonial">

                                    <div className="name"><i className="fas fa-wrench"></i>

                                        <br/><br/>
                                        VEHICLE HISTORY CHECKS</div>


                                    <p>
                                        For your peace of mind while searching, all cars have been given a basic History Check. This checks whether the car has previously been imported, stolen, scrapped or written off.
                                    </p>
                                </div>
                            </div>

                            <div className="col">
                                <div className="testimonial">
                                    <div className="name"><i className="fas fa-search"></i>

                                        <br/><br/>
                                        THE BENEFITS OF THE 'SMART SEARCH'</div>


                                    <p>
                                        If you're not quite sure which make and model best suits your needs, our below 'Smart Search' is a great way to find your next car. Simply select the features.
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
