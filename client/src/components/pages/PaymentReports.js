import React from 'react';
import {Link} from 'react-router-dom';
import Header from '../../Header';
import Footer from '../../Footer';
import DatePicker from 'react-date-picker';
import '../../css/PaymentReports.css';
import PaymentRow from './PaymentRow';
import axios from 'axios';
import ReactToPrint from 'react-to-print';


export default class PaymentReports extends React.Component{

    constructor(props) {
        super(props);

        this.state = {
            filter :"",
            payment: [],
            paymentdate : new Date()
        }
        this.searchText = this.searchText.bind(this);
    }
    onChange= e => {
        this.setState({ [e.target.id]: e.target.value });
    };

    componentDidMount(){

        axios.get(`http://localhost:1234/api/payments/payment-data`)
            .then(response => {
                this.setState({ payment: response.data })

            })
            .catch(function (error) {
                console.log(error);
            })
    }

    paymentList(){
        return this.state.payment.map(function(object,i){
            return <PaymentRow obj={object} key={i}/>;
        });
    }
    searchText(e) {
        this.setState({filter : e.target.value});
    };


    render(){

        let {filter,payment} = this.state;
        let dataSearch = payment.filter(item => {
            return Object.keys(item).some(key =>
                typeof item[key]==="string" && item[key].toLowerCase().includes(filter.toLowerCase()))

        });

        return(
            <div>
                {/*<Header />*/}

                <h1>PAYMENT REPORTS</h1>

                <div className="input-group"  id="measure1">

                    <div className="form-outline">


                        <div id="search">
                                <input id="name"
                                       type="search"
                                       className="form-control"
                                       placeholder="Search by Name, Payment date or Card Type"
                                       name="name"
                                       onChange={this.searchText}
                                       value={filter}/>
                        </div>
                    </div>



                </div>

                <div id="reporttable">
                    <table className="table table-bordered">
                        <thead className="thead-dark">
                        <tr>
                            <th scope="col">Name</th>
                            <th scope="col">Date</th>
                            <th scope="col">Card Type</th>
                            <th scope="col">Amount</th>
                        </tr>
                        </thead>
                        <tbody>
                        {(dataSearch.map(item =>
                            <tr>
                                <td>
                                    {item.cardHoldersName}
                                </td>
                                <td>
                                    {item.date}
                                </td>
                                <td>
                                    {item.cardtype}
                                </td>
                                <td>
                                    {item.amount}
                                </td>
                            </tr>
                        ))}
                        </tbody>
                    </table>
                </div>

                {/*<Footer/>*/}
            </div>
        );
    }
}



