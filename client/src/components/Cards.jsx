import React from 'react';
import '../css/Cards.css';
import CardItem from './CardItem';
import car1 from '../images/car1.PNG';
import car2 from '../images/car2.PNG';
import car3 from '../images/car3.PNG';
import car5 from '../images/car5.PNG';
import car6 from '../images/car6.PNG';
import car7 from '../images/car7.PNG';
import car8 from '../images/car8.PNG';
import car9 from '../images/car9.PNG';
import car10 from '../images/car10.PNG';
import car11 from '../images/car11.PNG';
import car12 from '../images/car12.PNG';
import car13 from '../images/car13.PNG';

function Cards() {
  return (
    <div className='cards'>
      <h1>Check out our Latest Car !</h1>
      <div className='cards__container'>
        <div className='cards__wrapper'>
          <ul className='cards__items'>
            <CardItem
              src={car2}
              text='FORD MUSTANG'
              label='Adventure'
              path='/services'
            />
            <CardItem
                src={car1}
              text='DODGE CHALLENGER'
              label='Luxury'
              path='/services'
            />
            <CardItem
                src={car13}
                text='CHEVROLET CAMARO'
                label='Mystery'
                path='/services'
            />
          </ul>
          <ul className='cards__items'>
            <CardItem
                src={car3}
              text='CHEVROLET CAMARO'
              label='Mystery'
              path='/services'
            />
            <CardItem
                src={car9}
              text='DODGE CHARGER'
              label='Adventure'
              path='/products'
            />
            <CardItem
                src={car5}
              text='FORD MUSTANG'
              label='Adrenaline'
              path='/sign-up'


            />
          </ul>
          <ul className='cards__items'>
            <CardItem
                src={car6}
                text='CHEVROLET CAMARO'
                label='Mystery'
                path='/services'
            />
            <CardItem
                src={car7}
                text='FORD MUSTANG'
                label='Adventure'
                path='/products'
            />
            <CardItem
                src={car8}
                text='CHEVROLET CAMARO'
                label='Adrenaline'
                path='/sign-up'


            />
          </ul>
          <ul className='cards__items'>
            <CardItem
                src={car12}
                text='DODGE CHARGER'
                label='Mystery'
                path='/services'
            />
            <CardItem
                src={car10}
                text='FORD MUSTANG'
                label='Adventure'
                path='/products'
            />
            <CardItem
                src={car11}
                text='CHEVROLET CAMARO'
                label='Adrenaline'
                path='/sign-up'


            />
          </ul>
        </div>
      </div>
    </div>
  );
}

export default Cards;
