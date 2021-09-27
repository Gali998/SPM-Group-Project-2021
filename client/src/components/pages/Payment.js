import React from "react";

import "../../css/Payment.css";
import Navbar from "../partials/Navbar";
import UserSidebar from "../partials/UserSidebar";
import classnames from "classnames";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { addUser } from "../../actions/feedbackActions";
import { withRouter } from "react-router-dom";
import { toast } from "react-toastify";
import $ from "jquery";
import axios from "axios";

const Validator = require("validator");
const isEmpty = require("is-empty");

const rx_live = /^[+-]?\d*(?:[.,]\d*)?$/;

export default class Payment extends React.Component {
  constructor() {
    super();

    const today = new Date(),
      cdate =
        today.getFullYear() +
        "-" +
        (today.getMonth() + 2) +
        "-" +
        today.getDate();

    this.state = {
      cardHoldersName: "",
      date: "",
      cardnumber: "",
      cvc: "",
      cdate: cdate,
      cardtype: "",
      amount: "",
      errors: {},
    };
    this.formValidation = this.formValidation.bind(this);
  }

  componentWillReceiveProps(nextProps) {
    if (nextProps.errors) {
      this.setState({
        errors: nextProps.errors,
      });
    }
    if (
      nextProps.auth !== undefined &&
      nextProps.auth.user !== undefined &&
      nextProps.auth.user.data !== undefined &&
      nextProps.auth.user.data.message !== undefined
    ) {
      $("#add-user-modal").modal("hide");
      toast(nextProps.auth.user.data.message, {
        position: toast.POSITION.TOP_CENTER,
      });
    }
  }

  formValidation = () => {
    const { cardHoldersName, date, cvc, amount, cardnumber, cardtype } =
      this.state;
    const errors = {};

    if (
      Validator.isEmpty(date) ||
      Validator.isEmpty(cardHoldersName) ||
      Validator.isEmpty(cvc) ||
      Validator.isEmpty(cardnumber) ||
      Validator.isEmpty(cardtype)
    ) {
      errors.date = "Date field is empty";
      errors.cvc = "Please enter the cvc number";
      errors.cardnumber = "Please enter the card number";
      errors.cardHoldersName = "Name field is empty";
      errors.cardtype = "Please enter the card type";

      const isValid = false;
      this.setState({ errors: errors });
      return isValid;
    } else {
      const isValid = true;
      return isValid;
    }
  };

  onChange = (e) => {
    this.setState({ [e.target.id]: e.target.value });
  };

  onUserAdd = (e) => {
    e.preventDefault();
    const isValid = this.formValidation();
    console.log(isValid);

    if (isValid === true) {
      const newPayment = {
        cardHoldersName: this.state.cardHoldersName,
        date: this.state.cdate,
        cardtype: this.state.cardtype,
        amount: this.state.amount,
      };

      axios
        .post("http://localhost:1234/api/payments/payment-add", newPayment)
        .then((res) => {
          alert("Payment Successful");
        })
        .catch((error) => {
          console.log(error.message);
          alert(error.message);
        });
    }
  };

  render() {
    const { cardnumber, date, cvc, amount, cardHoldersName, cardtype, errors } =
      this.state;

    return (
      <div>
        <Navbar />
        <div className="d-flex" id="wrapper">
          <UserSidebar />
          <div
            style={{
              width: "689px",
              height: "945px",
              marginLeft: "230px",
              marginTop: "2px",
              padding: "28px 33px 10px 31px",
            }}
          >
            <div class="bg-gray-200 shadow-md rounded-lg px-8 pb-1 pt-6 h-auto ">
              <h3 className="text-center">Payment Details</h3>
              <div className="inlineimage">
                <img
                  className="img-responsive images"
                  src="https://cdn0.iconfinder.com/data/icons/credit-card-debit-card-payment-PNG/128/Mastercard-Curved.png"
                />
                <img
                  className="img-responsive images"
                  src="https://cdn0.iconfinder.com/data/icons/credit-card-debit-card-payment-PNG/128/Discover-Curved.png"
                />
                <img
                  className="img-responsive images"
                  src="https://cdn0.iconfinder.com/data/icons/credit-card-debit-card-payment-PNG/128/Paypal-Curved.png"
                />
                <img
                  className="img-responsive images"
                  src="https://cdn0.iconfinder.com/data/icons/credit-card-debit-card-payment-PNG/128/American-Express-Curved.png"
                />
              </div>

              <form id="formback" onSubmit={this.onUserAdd}>
                <div class="flex flex-row">
                  <div className="col-xs-7 col-md-7">
                    <div className="label4">
                      <label>
                        <b>CARD OWNER</b>
                      </label>
                      <input
                        type="text"
                        className="form-control"
                        placeholder="Card Owner Name"
                        value={this.state.cardHoldersName}
                        id="cardHoldersName"
                        onChange={this.onChange}
                        error={errors.cardHoldersName}
                        className={classnames("form-control", {
                          invalid: errors.cardHoldersName,
                        })}
                      />
                    </div>
                  </div>
                  <div class="flex items-center justify-center mt-3">
                    <span className="text-danger">
                      {errors.cardHoldersName}
                    </span>
                  </div>
                </div>
                <br />

                <div className="flex flex-row">
                  <div className="col-xs-7 col-md-7">
                    <div className="label1">
                      <label>
                        <b>CARD NUMBER</b>
                      </label>

                      <input
                        type="tel"
                        className="form-control"
                        placeholder="Valid Card Number"
                        id="cardnumber"
                        value={this.state.cardnumber}
                        onChange={this.onChange}
                        error={errors.cardnumber}
                        pattern="[+-]?\d+(?:[.,]\d+)?"
                        maxLength={16}
                        className={classnames("form-control", {
                          invalid: errors.cardnumber,
                        })}
                      />
                    </div>
                  </div>
                  <div className="flex items-center justify-center mt-3">
                    <span className="text-danger">{errors.cardnumber}</span>
                  </div>
                </div>

                <div className="flex flex-row">
                  <div className="col-xs-7 col-md-7">
                    <div className="label2 ">
                      <label>
                        <b>EXPIRATION DATE</b>
                      </label>
                      <input
                        type="date"
                        className="form-control"
                        placeholder="MM / YY"
                        id="date"
                        onChange={this.onChange}
                        value={this.state.date}
                        error={errors.date}
                        className={classnames("form-control", {
                          invalid: errors.date,
                        })}
                      />
                    </div>
                  </div>
                  <div className="flex items-center justify-center mt-3">
                    <span className="text-danger">{errors.date}</span>
                  </div>
                </div>

                <div className="flex flex-row">
                  <div className="col-xs-7 col-md-7 ">
                    <div className="label3">
                      <label>
                        <b>CVC CODE</b>
                      </label>
                      <input
                        type="text"
                        className="form-control"
                        placeholder="CVC"
                        id="cvc"
                        onChange={this.onChange}
                        pattern="[+-]?\d+(?:[.,]\d+)?"
                        maxLength={3}
                        value={this.state.cvc}
                        error={errors.cvc}
                        className={classnames("form-control", {
                          invalid: errors.cvc,
                        })}
                      />
                    </div>
                  </div>
                  <div className="flex items-center justify-center mt-3">
                    <span className="text-danger">{errors.cvc}</span>
                  </div>
                </div>

                <div className="flex flex-row">
                  <div className="col-xs-7 col-md-7">
                    <div className="label4">
                      <label>
                        <b>CARD TYPE</b>
                      </label>
                      <select
                        id="cardtype"
                        onChange={this.onChange}
                        error={errors.cardtype}
                        className={classnames("form-control", {
                          invalid: errors.cardtype,
                        })}
                      >
                        <option value="Visa">Visa</option>
                        <option value="American Express">
                          American Express
                        </option>
                        <option value="Master Card">Master Card</option>
                        <option value="Discover">Discover</option>
                      </select>
                    </div>
                  </div>
                  <div className="flex items-center justify-center mt-3">
                    <span className="text-danger">{errors.cardtype}</span>
                  </div>
                </div>

                <div>
                  <div className="col-xs-7 col-md-7">
                    <div className="label4">
                      <label>
                        <b>AMOUNT</b>
                      </label>
                      <input
                        type="text"
                        className="form-control"
                        placeholder="Amount"
                        value={this.state.amount}
                        onChange={this.onChange}
                        error={errors.amount}
                        className={classnames("form-control", {
                          invalid: errors.amount,
                        })}
                        id="amount"
                      />
                    </div>
                  </div>
                  <span className="text-danger">{errors.amount}</span>
                </div>

                <div class=" mt-5 mb-5">
                  <button className="btnpay">Pay</button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
