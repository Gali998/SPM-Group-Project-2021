import React, { useState } from 'react';
import items from './CarData';
import CarMenu from './components/CarMenu';
import Header from './Header';
import Footer from './Footer';
import Button from './components/Button';
import CarLandingPage from './css/CarLanding.css';

const allLogin = ['All',...new Set(items.map(item =>item.category))];

function LandingPage(){
    const [carItem,setCarItem] = useState(items);
    const [buttons,setButtons] = useState(allLogin);

    const filter = (button)=>{

        if(button==='All'){
            setCarItem(items);
            return;
        }

        const filteredData = items.filter(item =>item.category === button);
        setCarItem(filteredData)

    }

    return(
        <div>
            <Header/>
        <div className="LandingPage">
            <div className="title">
                <h1>Vehicle 
                    <span> Packages</span>
                </h1>

            </div>
            <Button button={buttons} filter ={filter}/>
            <CarMenu carItem = {carItem}/>

        </div>
        <Footer/>
        </div>
    )
}

export default LandingPage;