import React from 'react';
import {Link} from 'react-router-dom';
import Header from '../../Header';
import Footer from '../../Footer';
import SearchCarsCss from '../../css/SearchCars.css';

export default class SearchCars extends React.Component{

    render(){
        return(
            <div>
                <Header />


                <h1>Search Results</h1>

                <div className="input-group" id="measure1" >
                    <div className="form-outline">
                        <input id="search-focus" type="search" id="form1" className="form-control" placeholder="Search"/>
                    </div>
                    <button type="button" className="btn btn-primary">
                        <i className="fa fa-search"></i>
                    </button>
                </div>

                <div id="measure2">

                </div>


                <Footer />
            </div>
        );
    }
}