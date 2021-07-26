import React from 'react';
import './css/Footer.css';
import Facebook from './images/facebook.png';
import Youtube from './images/youtube.png';
import Pinterest from './images/pinterest.png';
import Twitter from './images/twitter.png';
import Instagram from './images/instagram.png';
import Logo from './images/car logo 2.png';

export default class Header extends React.Component{

    render(){
        return(
            <div>

                {/* Footer Start */}
   
                <div id="foot">
                <div id="foot1">
                    
                    <div id="first">
                        <img src={Logo} width="350"/>
                        {/* <div id="shopping1">Car Zone</div> */}
                    </div>
                    
                    <div id="second">
                        <div id="address">Address</div><div id="address1">No:123/12,<br/>Galle Road,<br/>Colombo 06</div>
                    </div>
                    
                    <div id="third">
                        <div id="tel">Tel:+94 (011) 568 9111<br/>carzone@gmail.com</div>
                        
                        <div id="social">
                            <a href="https://www.facebook.com/" target="_blanck"><div id="facebook"><img src={Facebook} width="40"/></div></a>
                            <a href="https://www.youtube.com/" target="_blanck"><div id="youtube"><img src={Youtube} width="40"/></div></a>
                            <a href="https://www.pinterest.com/" target="_blanck"><div id="pinterest"><img src={Pinterest} width="40"/></div></a>
                            <a href="https://twitter.com/login?lang=en" target="_blanck"><div id="twitter"><img src={Twitter} width="40"/></div></a>
                            <a href="https://www.instagram.com" target="_blanck"><div id="instagram"><img src={Instagram} width="40"/></div></a>
                        </div>
                    </div>
                    
                    </div>
                    </div>
                    
                    <div id="bottom-bar">
                    <div id="bottom-bar1">
                            <div id="content">&copy; Copyright  2021 Car Zone.com Co. LLC. All Rights Reserved.</div>
                </div>
                </div>
                
                {/* Footer End */}
            </div>
        );
    }
}