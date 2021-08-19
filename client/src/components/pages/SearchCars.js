import React from 'react';
import {Link} from 'react-router-dom';
import Header from '../../Header';
import Footer from '../../Footer';
import SearchCarsCss from '../../css/SearchCars.css';
import axios from 'axios';
import CarRow from './CarRow';

export default class SearchCars extends React.Component{

    constructor(props) {
        super(props);

        this.state = {
            car: []
        }
    }

    componentDidMount() {
        axios.get('http://localhost:1234/api/cars/car-data')
            .then(response => {
                this.setState({ car: response.data })
            })
            .catch(function (error) {
                console.log(error);
            })
    }

    carList(){
        return this.state.car.map(function(object,i){
            return <CarRow obj={object} key={i}/>;
        });
    }


    render(){
        return(
            <div>
                <Header />


                <h1>Search Results</h1>

                <div className="input-group" id="measure1" >
                    <div className="form-outline">
                        <input id="search-focus"
                               type="search"
                               className="form-control"
                               placeholder="Search"
                        />
                    </div>
                    <button type="button" className="btn btn-primary" onSubmit={this.onSubmit}>
                        <i className="fa fa-search"></i>
                    </button>
                </div>

                <div id="measure2">

                    <table className="table">
                        <thead className="thead-dark">
                        <tr>
                            <th scope="col">Car Name</th>
                            <th scope="col">Description</th>
                        </tr>
                        </thead>
                        <tbody>
                            {this.carList()}
                        </tbody>
                    </table>


                </div>


                <Footer />
            </div>
        );
    }
}