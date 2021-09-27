import React from "react";
import Navbar from "./Navbar";
import UserSidebar from "./UserSidebar";
import classnames from "classnames";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { updateUser } from "../../actions/carActions";
import { withRouter } from "react-router-dom";
import { toast } from "react-toastify";
import $ from "jquery";
import axios from "axios";
const Validator = require("validator");
const isEmpty = require("is-empty");

class FeedbackUpdateModal extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      name: "",
      rating: "",
      usability: "",
      service: "",
      comment: "",
      errors: {},
    };

    this.getData = this.getData.bind(this);
    this.formValidation = this.formValidation.bind(this);
  }

  componentDidMount() {
    this.getData();
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
      nextProps.auth.user.data.message !== undefined &&
      nextProps.auth.user.data.success
    ) {
      $("#update-user-modal").modal("hide");
      toast(nextProps.auth.user.data.message, {
        position: toast.POSITION.TOP_CENTER,
      });
    }
  }

  onChange = (e) => {
    if (e.target.id === "name") {
      this.setState({ name: e.target.value });
    }
    if (e.target.id === "rating") {
      this.setState({ rating: e.target.value });
    }
    if (e.target.id === "usability") {
      this.setState({ usability: e.target.value });
    }
    if (e.target.id === "service") {
      this.setState({ service: e.target.value });
    }
    if (e.target.id === "comment") {
      this.setState({ comment: e.target.value });
    }
  };

  getData() {
    const id = localStorage.getItem("id");

    axios
      .get(`http://localhost:1234/api/feedbacks/feedback-data/${id}`)
      .then((response) => {
        this.setState({
          id: response.data.id,
          name: response.data.name,
          rating: response.data.rating,
          usability: response.data.usability,
          service: response.data.service,
          comment: response.data.comment,
        });
        console.log(response.data);
      })
      .catch(function (error) {
        console.log(error);
      });
  }

  formValidation = () => {
    const { name, rating, usability, service, comment } = this.state;

    const errors = {};

    if (
      Validator.isEmpty(name) ||
      Validator.isEmpty(rating) ||
      Validator.isEmpty(usability) ||
      Validator.isEmpty(service) ||
      Validator.isEmpty(comment)
    ) {
      errors.name = "Name field is required";
      errors.rating = "Please select one";
      errors.usability = "Please select one";
      errors.service = "Please select one";
      errors.comment = "Please leave a comment";

      const isValid = false;
      this.setState({ errors: errors });
      return isValid;
    } else {
      const isValid = true;
      return isValid;
    }
  };

  onUserUpdate = (e) => {
    e.preventDefault();
    const isValid = this.formValidation();
    console.log(isValid);

    if (isValid === true) {
      const newFeedback = {
        _id: this.state.id,
        name: this.state.name,
        rating: this.state.rating,
        usability: this.state.usability,
        service: this.state.service,
        comment: this.state.comment,
        errors: {},
      };
      axios
        .post("http://localhost:1234/api/feedbacks/feedback-edit", newFeedback)
        .then((res) => {
          alert("Feedback Updated");
          this.props.history.push("/submittedfeedback");
        })
        .catch((error) => {
          console.log(error.message);
          alert(error.message);
        });
    }
  };

  render() {
    const { name, rating, usability, service, comment, errors } = this.state;
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
              padding: "10px 10px 10px 31px",
            }}
          >
            <form
              onSubmit={this.onUserUpdate}
              class="bg-gray-200 shadow-md rounded-lg px-8 pb-1 pt-6 h-auto "
            >
              <div>
                <label
                  style={{ fontFamily: "Comin Sans MS", fontSize: "40px" }}
                >
                  Your Feedback is important to us
                </label>
                <br />
                <br />

                <label style={{ fontSize: "20px", fontWeight: "bold" }}>
                  Name
                </label>
                <input
                  type="text"
                  placeholder="Name"
                  id="name"
                  value={this.state.name}
                  onChange={this.onChange}
                  error={errors.name}
                  className={classnames("form-control", {
                    invalid: errors.name,
                  })}
                />
                <span className="text-danger">{errors.name}</span>
                <br />

                <div>
                  <label style={{ fontSize: "20px", fontWeight: "bold" }}>
                    How much do you rate our website?
                  </label>
                  <div>
                    <input
                      type="radio"
                      name="one"
                      id="rating"
                      value="one"
                      checked={"one" === this.state.rating}
                      onChange={this.onChange}
                      className={classnames({ invalid: errors.rating })}
                    />
                    <label style={{ marginLeft: "10px" }}>One</label>

                    <input
                      style={{ marginLeft: "63px" }}
                      type="radio"
                      name="two"
                      id="rating"
                      value="two"
                      checked={"two" === this.state.rating}
                      onChange={this.onChange}
                    />
                    <label style={{ marginLeft: "10px" }}>Two</label>

                    <input
                      style={{ marginLeft: "46px" }}
                      type="radio"
                      name="three"
                      id="rating"
                      value="three"
                      checked={"three" === this.state.rating}
                      onChange={this.onChange}
                    />
                    <label style={{ marginLeft: "10px" }}>Three</label>

                    <input
                      style={{ marginLeft: "52px" }}
                      type="radio"
                      name="four"
                      id="rating"
                      value="four"
                      checked={"four" === this.state.rating}
                      onChange={this.onChange}
                    />
                    <label style={{ marginLeft: "10px" }}>Four</label>

                    <input
                      style={{ marginLeft: "56px" }}
                      type="radio"
                      name="five"
                      id="rating"
                      value="five"
                      checked={"five" === this.state.rating}
                      onChange={this.onChange}
                    />
                    <label style={{ marginLeft: "10px" }}>Five</label>
                  </div>
                  <span className="text-danger">{errors.rating}</span>
                </div>

                <br />

                <div>
                  <label style={{ fontSize: "20px", fontWeight: "bold" }}>
                    How satisfied are you with the usability of the website?
                  </label>
                  <div>
                    <input
                      type="radio"
                      name="poor"
                      id="usability"
                      value="poor"
                      checked={"poor" === this.state.usability}
                      onChange={this.onChange}
                      className={classnames({ invalid: errors.usability })}
                    />
                    <label style={{ marginLeft: "10px" }}>Poor</label>

                    <input
                      style={{ marginLeft: "113px" }}
                      type="radio"
                      name="satisfactory"
                      id="usability"
                      value="satisfactory"
                      checked={"satisfactory" === this.state.usability}
                      onChange={this.onChange}
                    />
                    <label style={{ marginLeft: "10px" }}>Satisfactory</label>

                    <input
                      style={{ marginLeft: "68px" }}
                      type="radio"
                      name="very good"
                      id="usability"
                      value="very good"
                      checked={"very good" === this.state.usability}
                      onChange={this.onChange}
                    />
                    <label style={{ marginLeft: "10px" }}>Very Good</label>
                  </div>
                </div>
                <span className="text-danger">{errors.usability}</span>
                <br />

                <div>
                  <label style={{ fontSize: "20px", fontWeight: "bold" }}>
                    How satisfied are you regarding the service of our company?
                  </label>
                  <div>
                    <input
                      type="radio"
                      name="Must Improve"
                      id="service"
                      value="Must Improve"
                      checked={"Must Improve" === this.state.service}
                      onChange={this.onChange}
                    />
                    <label style={{ marginLeft: "10px" }}>Must Improve</label>

                    <input
                      style={{ marginLeft: "49px" }}
                      type="radio"
                      name="average"
                      id="service"
                      value="average"
                      checked={"average" === this.state.service}
                      onChange={this.onChange}
                    />
                    <label style={{ marginLeft: "10px" }}>Average</label>

                    <input
                      style={{ marginLeft: "91px" }}
                      type="radio"
                      name="excellent"
                      id="service"
                      value="excellent"
                      checked={"excellent" === this.state.service}
                      onChange={this.onChange}
                    />
                    <label style={{ marginLeft: "10px" }}>Excellent</label>
                  </div>
                </div>
                <span className="text-danger">{errors.service}</span>
                <br />

                <div>
                  <label style={{ fontSize: "20px", fontWeight: "bold" }}>
                    If you have any queries, suggestions or complaints feel free
                    to mention. We love to improve our service.
                  </label>

                  <textarea
                    rows="7"
                    id="comment"
                    placeholder="Please leave a comment"
                    value={this.state.comment}
                    onChange={this.onChange}
                    error={errors.comment}
                    className={classnames("form-control", {
                      invalid: errors.comment,
                    })}
                  />
                </div>
                <span className="text-danger">{errors.comment}</span>

                <div class="flex justify-center mt-5 mb-5">
                  <button
                    style={{
                      backgroundColor: "royalblue",
                      fontWeight: "bold",
                      border: "none",
                      color: "white",
                      padding: "15px 32px",
                      fontSize: "16px",
                    }}
                    type="submit"
                  >
                    Edit Feedback
                  </button>
                </div>
              </div>
            </form>
            <div className="h-4 mt-5"></div>
          </div>
        </div>
      </div>
    );
  }
}

FeedbackUpdateModal.propTypes = {
  updateUser: PropTypes.func.isRequired,
  auth: PropTypes.object.isRequired,
  errors: PropTypes.object.isRequired,
};

const mapStateToProps = (state) => ({
  auth: state.auth,
  errors: state.errors,
});

export default connect(mapStateToProps, { updateUser })(
  withRouter(FeedbackUpdateModal)
);
