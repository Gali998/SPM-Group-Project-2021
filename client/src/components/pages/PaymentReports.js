import React from 'react';
import {Link} from 'react-router-dom';
import Header from '../../Header';
import Footer from '../../Footer';
import DatePicker from 'react-date-picker';
import '../../css/PaymentReports.css';

export default class PaymentReports extends React.Component{

    render(){
        return(
            <div>
                <Header />

                <h1>PAYMENT REPORTS</h1>

                <div id="measuredate">
                    <label id="labelmeasure1">Date</label>
                    <DatePicker/>
                </div>

                <div className="input-group"  id="measure1">

                    <div className="form-outline">
                        <div id="label">
                            <label id="labelmeasure2">Enter the Name</label>
                        </div>

                        <div id="searchname">
                            <input id="search-focus"
                                   type="search"
                                   className="form-control"
                                   placeholder="Search"
                                   name="searchTerm"/>
                        </div>
                    </div>
                    <div id="print">
                        <button id="btnprint">
                            Print
                        </button>
                    </div>

                </div>

                <div id="reporttable">
                    <table className="table table-bordered">
                        <thead className="thead-dark">
                        <tr>
                            <th scope="col">Name</th>
                            <th scope="col">Date</th>
                            <th scope="col">Payment Method</th>
                            <th scope="col">Amount</th>
                        </tr>
                        </thead>
                        <tbody>
                        <tr><td></td></tr>
                        </tbody>
                    </table>
                </div>

                <Footer/>
            </div>
        );
    }
}