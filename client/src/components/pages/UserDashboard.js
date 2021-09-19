import React, { Component } from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { logoutUser } from "../../actions/userAuthActions";
import Navbar from "../partials/Navbar";
import Sidebar from "../partials/UserSidebar";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faList} from "@fortawesome/free-solid-svg-icons/faList";
import {Link} from "react-router-dom";
import {faUserAlt} from "@fortawesome/free-solid-svg-icons/faUserAlt";

class UserDashboard extends Component {

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
                            <h1 className="mt-2 text-primary">User Dashboard</h1>
                            <div className="row px-2">
                                <div className="col-sm-3 p-sm-2">
                                    <div className="card bg-primary text-white shadow-lg">
                                        <div className="card-body">
                                            <h5 className="card-title"><b>User Profile</b></h5>
                                            <p className="card-text"><div style={{color:'white'}}>View the User profile</div></p>
                                            <Link to="/admins" className="btn btn-light"><FontAwesomeIcon className="text-primary" icon={faUserAlt}/> Go to User Profile</Link>
                                        </div>
                                    </div>
                                </div>

                                <div className="col-sm-3 p-sm-2">
                                    <div className="card bg-primary text-white shadow-lg">
                                        <div className="card-body">
                                            <h5 className="card-title"><b>Reservations</b></h5>
                                            <p className="card-text"><div style={{color:'white'}}>View the Reservations</div></p>
                                            <Link to="/reservations" className="btn btn-light"><FontAwesomeIcon className="text-primary" icon={faUserAlt}/> Go to Reservations</Link>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-sm-3 p-sm-2">
                                    <div className="card bg-primary text-white shadow-lg">
                                        <div className="card-body">
                                            <h5 className="card-title"><b>Feedback</b></h5>
                                            <p className="card-text"><div style={{color:'white'}}>View the Feedback</div></p>
                                            <Link to="/cars" className="btn btn-light"><FontAwesomeIcon className="text-primary" icon={faUserAlt}/> Go to Feedback</Link>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-sm-3 p-sm-2">
                                    <div className="card bg-primary text-white shadow-lg">
                                        <div className="card-body">
                                            <h5 className="card-title"><b>Payment</b></h5>
                                            <p className="card-text"><div style={{color:'white'}}>View the  Payment</div></p>
                                            <Link to="/reservations" className="btn btn-light"><FontAwesomeIcon className="text-primary" icon={faUserAlt}/> Go to Reservations</Link>
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

UserDashboard.propTypes = {
    logoutUser: PropTypes.func.isRequired,
    auth: PropTypes.object.isRequired
};

const mapStateToProps = state => ({
    auth: state.auth
});

export default connect(
    mapStateToProps,
    { logoutUser }
)(UserDashboard);
