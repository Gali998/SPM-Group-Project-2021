import React from 'react';
import Header from '../../Header';
import Footer from '../../Footer';
import  '../../css/SearchCars.css';
import axios from 'axios';
import CarRow from './CarRow';

export default class SearchCars extends React.Component{

    constructor(props) {
        super(props);

        this.state = {
            filter : "",
            car: []
        }

        this.searchText = this.searchText.bind(this);
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

    searchText(e) {
        this.setState({filter : e.target.value});
    };

    render(){
        let {filter,car} = this.state;
        let dataSearch = car.filter(item => {
            return Object.keys(item).some(key =>
                typeof item[key]==="string" && item[key].toLowerCase().includes(filter.toLowerCase()))
        });

        return(
            <div>
                <Header />


                <h1>Search Results</h1>

                <div className="input-group" id="carsearchbar" >
                    <div className="form-outline">
                        <input id="search-focus"
                               type="search"
                               className="form-control"
                               placeholder="Search"
                               name="searchTerm"
                               onChange={this.searchText}
                               value={filter}
                        />
                    </div>
                    <button type="button" className="btn btn-primary">
                        <i className="fa fa-search"></i>
                    </button>
                </div>

                <div id="cartable">
                    <table className="table table-bordered">
                        <thead className="thead-dark">
                        <tr>
                            <th scope="col">Car Name</th>
                            <th scope="col">Description</th>
                        </tr>
                        </thead>
                        <tbody>

                            {(dataSearch.map(item =>
                                <tr>
                                    <td>
                                        {item.carName}
                                    </td>
                                    <td>
                                        {item.description}
                                    </td>
                                </tr>


                            ))}
                        </tbody>
                    </table>


                </div>


                <Footer />
            </div>
        );
    }
}