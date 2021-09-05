import React from 'react';
import Header from '../../Header';
import Footer from '../../Footer';
import  '../../css/Payment.css';
import backgroundImage from '../../images/feedback.png';
// import classnames from "classnames";
// import PropTypes from "prop-types";
// import { connect } from "react-redux";
// import { addUser } from "../../actions/feedbackActions";
// import { withRouter } from "react-router-dom";
// import { toast } from 'react-toastify';
// import $ from 'jquery';



export default class Payment extends React.Component{
    //
    // constructor() {
    //     super();
    //
    //     this.state = {
    //         name: "",
    //         comment: "",
    //         errors:{},
    //     };
    // }
    //
    // componentWillReceiveProps(nextProps) {
    //     if (nextProps.errors) {
    //         this.setState({
    //             errors: nextProps.errors
    //         });
    //     }
    //     if (nextProps.auth !== undefined
    //         && nextProps.auth.user !== undefined
    //         && nextProps.auth.user.data !== undefined
    //         && nextProps.auth.user.data.message !== undefined) {
    //         $('#add-user-modal').modal('hide');
    //         toast(nextProps.auth.user.data.message, {
    //             position: toast.POSITION.TOP_CENTER
    //         });
    //     }
    // }
    //
    // onChange = e => {
    //     this.setState({ [e.target.id]: e.target.value });
    // };
    //
    // onUserAdd = e => {
    //     e.preventDefault();
    //     const newPayment = {
    //             name: this.state.name,
    //             comment: this.state.comment,
    //     };
    //     this.props.addUser(newPayment, this.props.history);
    //
    //     alert("Payment Successful");
    //
    // };

    render(){
        // const { errors } = this.state;
        return(
            <div>
                {/*header*/}
                <Header />

                {/*body*/}
                <div  style={{backgroundImage:`url(${backgroundImage})`, backgroungRepeat:"no-repeat", backgroundSize: "100% 100%",width: "100%", padding:"10px 10px 10px 10px",height:"668px"}}>
                    <div  id="backgroundPayment">
                        <h3 className="text-center">Payment Details</h3>
                            <div className="inlineimage">
                                <img className="img-responsive images"
                                                     src="https://cdn0.iconfinder.com/data/icons/credit-card-debit-card-payment-PNG/128/Mastercard-Curved.png"/>
                                <img className="img-responsive images"
                                                     src="https://cdn0.iconfinder.com/data/icons/credit-card-debit-card-payment-PNG/128/Discover-Curved.png"/>
                                <img className="img-responsive images"
                                                     src="https://cdn0.iconfinder.com/data/icons/credit-card-debit-card-payment-PNG/128/Paypal-Curved.png"/>
                                <img className="img-responsive images"
                                                     src="https://cdn0.iconfinder.com/data/icons/credit-card-debit-card-payment-PNG/128/American-Express-Curved.png"/>
                            </div>

                        <form id="formback">

                            <div className="row">
                                <div className="col-xs-12">
                                    <div className="label1">
                                        <label><b>CARD NUMBER</b></label>

                                        <div className="input-group">
                                            <input type="tel"
                                                   className="form-control"
                                                   placeholder="Valid Card Number"/>
                                            <span className="input-group-addon">
                                                <span className="fa fa-credit-card">
                                                </span>
                                            </span>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="row">
                                <div className="col-xs-7 col-md-7">
                                    <div className="label2 ">
                                        <label>
                                            <span className="hidden-xs"><b>EXPIRATION DATE</b></span>
                                        </label>
                                        <input
                                            type="tel"
                                            className="form-control"
                                            placeholder="MM / YY"/>
                                    </div>
                                </div>


                                <div className="col-xs-7 col-md-7 ">
                                    <div className="label3">
                                        <label><b>CVC CODE</b></label>
                                        <input
                                            type="tel"
                                            className="form-control"
                                            placeholder="CVC"/>
                                    </div>
                                </div>
                            </div>
                            <div className="row">
                                <div className="col-xs-7 col-md-7">
                                    <div className="label4">
                                        <label><b>CARD OWNER</b></label>
                                        <input
                                            type="text"
                                            className="form-control"
                                            placeholder="Card Owner Name"/>
                                    </div>
                                </div>
                            </div>
                        </form>

                        <div className="panel-footer">
                            <div className="row">
                                <div className="col-xs-12">
                                    <button className="btnpay">Pay</button>
                                </div>
                            </div>
                        </div>

                        </div>
                </div>

                {/*footer*/}
                <Footer/>
            </div>
        );
    }

}






