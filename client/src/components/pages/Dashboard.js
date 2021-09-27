import React, { Component } from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { logoutUser } from "../../actions/authActions";
import Navbar from "../partials/Navbar";
import Sidebar from "../partials/Sidebar";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faList} from "@fortawesome/free-solid-svg-icons/faList";
import {Link} from "react-router-dom";
import {faUserAlt} from "@fortawesome/free-solid-svg-icons/faUserAlt";

class Dashboard extends Component {

    onLogoutClick = e => {
        e.preventDefault();
        this.props.logoutUser();
    };

    render() {
        //const { user } = this.props.auth;
        return (
            <div>
                <Navbar/>
                <div className="d-flex" id="wrapper">
                    <Sidebar/>
                    <div id="page-content-wrapper">
                        <div className="container-fluid">
                            <button className="btn btn-link mt-2" id="menu-toggle"><FontAwesomeIcon icon={faList}/></button>
                            <h1 className="mt-2 text-primary">Dashboard</h1>
                            <div className="row px-2">
                                <div className="col-sm-3 p-sm-2">
                                    <div className="card bg-primary text-white shadow-lg">
                                        <div className="card-body">
                                            <h5 className="card-title"><b>Admin</b></h5>
                                            <p className="card-text"><div style={{color:'white'}}>Check the registered Admin</div></p>
                                            <Link to="/admins" className="btn btn-light"><FontAwesomeIcon className="text-primary" icon={faUserAlt}/> Go to Admins</Link>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-sm-3 p-sm-2">
                                    <div className="card bg-primary text-white shadow-lg">
                                        <div className="card-body">
                                            <h5 className="card-title"><b>Customers</b></h5>
                                            <p className="card-text"><div style={{color:'white'}}>Check the registered Customers</div></p>
                                            <Link to="/customers" className="btn btn-light"><FontAwesomeIcon className="text-primary" icon={faUserAlt}/> Go to Customers</Link>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-sm-3 p-sm-2">
                                    <div className="card bg-primary text-white shadow-lg">
                                        <div className="card-body">
                                            <h5 className="card-title"><b>Reservations</b></h5>
                                            <p className="card-text"><div style={{color:'white'}}>Check the Reservations</div></p>
                                            <Link to="/reservations" className="btn btn-light"><FontAwesomeIcon className="text-primary" icon={faUserAlt}/> Go to Reservations</Link>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-sm-3 p-sm-2">
                                    <div className="card bg-primary text-white shadow-lg">
                                        <div className="card-body">
                                            <h5 className="card-title"><b>Car List</b></h5>
                                            <p className="card-text"><div style={{color:'white'}}>Check the Car List</div></p>
                                            <Link to="/cars" className="btn btn-light"><FontAwesomeIcon className="text-primary" icon={faUserAlt}/> Go to Car List</Link>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-sm-3 p-sm-2">
                                    <div className="card bg-primary text-white shadow-lg">
                                        <div className="card-body">
                                            <h5 className="card-title"><b>Payment Report</b></h5>
                                            <p className="card-text"><div style={{color:'white'}}>Check the Payment Report</div></p>
                                            <Link to="/print-payment-report" className="btn btn-light"><FontAwesomeIcon className="text-primary" icon={faUserAlt}/> Go to Payment Report</Link>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-sm-3 p-sm-2">
                                    <div className="card bg-primary text-white shadow-lg">
                                        <div className="card-body">
                                            <h5 className="card-title"><b>Employees</b></h5>
                                            <p className="card-text"><div style={{color:'white'}}>Check the Payment Report</div></p>
                                            <Link to="/employees" className="btn btn-light"><FontAwesomeIcon className="text-primary" icon={faUserAlt}/> Go to Employees Details</Link>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

Dashboard.propTypes = {
    logoutUser: PropTypes.func.isRequired,
    auth: PropTypes.object.isRequired
};

const mapStateToProps = state => ({
    auth: state.auth
});

export default connect(
    mapStateToProps,
    { logoutUser }
)(Dashboard);
