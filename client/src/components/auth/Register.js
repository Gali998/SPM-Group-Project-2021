import React, { Component } from "react";
import { Link, withRouter } from "react-router-dom";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { registerUser } from "../../actions/authActions";
import classnames from "classnames";
import Header from "../../Header";
import Footer from "../../Footer";
// import backgroundImage1 from '../../images/employee2.png';
import backgroundImage1 from "../../images/background1.jpeg";
import backgroundImage2 from "../../images/black.png";

class Register extends Component {
  constructor() {
    super();
    this.state = {
      name: "",
      email: "",
      password: "",
      password2: "",
      errors: {},
    };
  }

  componentDidMount() {
    if (this.props.auth.isAuthenticated) {
      this.props.history.push("/dashboard");
    }
  }

  componentWillReceiveProps(nextProps) {
    if (nextProps.errors) {
      this.setState({
        errors: nextProps.errors,
      });
    }
  }

  onChange = (e) => {
    this.setState({ [e.target.id]: e.target.value });
  };

  onSubmit = (e) => {
    e.preventDefault();
    const newUser = {
      name: this.state.name,
      email: this.state.email,
      password: this.state.password,
      password2: this.state.password2,
    };
    this.props.registerUser(newUser, this.props.history);
  };

  render() {
    const { errors } = this.state;
    return (
      <div>
        <Header />
        <div
          style={{
            backgroundImage: `url(${backgroundImage1})`,
            backgroundSize: "100% 100%",
            height: "790px",
          }}
        >
          <div
            style={{
              backgroundImage: `url(${backgroundImage2})`,
              backgroundSize: "100% 100%",
              height: "790px",
            }}
          >
            <br />
            <br />
            <br />
            <div className="container">
              <div
                className="col s8 offset-s2"
                style={{
                  backgroundImage: `url(${backgroundImage2})`,
                  padding: "40px 80px 60px 80px",
                  borderRadius: "30px",
                }}
              >
                <Link
                  to="/"
                  className="btn-flat waves-effect"
                  style={{ color: "white" }}
                >
                  Back to Home
                </Link>
                <div className="col s12" style={{ paddingLeft: "11.250px" }}>
                  <center>
                    <h2>
                      <b style={{ color: "white" }}>Admin Registration</b> below
                    </h2>
                  </center>
                  <br />
                  <p
                    style={{ fontSize: "20px", color: "white" }}
                    className="grey-text text-darken-1"
                  >
                    Already have an account?{" "}
                    <Link
                      to="/login"
                      style={{ color: "#a1cfc1", fontWeight: "500" }}
                    >
                      Log in
                    </Link>
                  </p>
                  <br />
                </div>
                <form noValidate onSubmit={this.onSubmit}>
                  <div className="input-field col s12">
                    <label
                      htmlFor="name"
                      style={{ fontSize: "15px", color: "white" }}
                    >
                      Name
                    </label>
                    <input
                      style={{
                        width: "100%",
                        backgroundColor: "transparent",
                        borderTop: "none",
                        borderRight: "none",
                        borderLeft: "none",
                        borderBottomStyle: "1px solid balck",
                        color: "white",
                        paddingLeft: "5px",
                      }}
                      onChange={this.onChange}
                      value={this.state.name}
                      id="name"
                      type="text"
                      error={errors.name}
                      className={classnames("", {
                        invalid: errors.name,
                      })}
                    />
                    <span className="red-text">{errors.name}</span>
                  </div>
                  <br />
                  <label
                    htmlFor="email"
                    style={{
                      marginLeft: "15px",
                      fontSize: "15px",
                      color: "white",
                    }}
                  >
                    Email
                  </label>
                  <div className="input-field col s12">
                    <input
                      style={{
                        width: "100%",
                        backgroundColor: "transparent",
                        borderTop: "none",
                        borderRight: "none",
                        borderLeft: "none",
                        borderBottomStyle: "1px solid balck",
                        color: "white",
                        paddingLeft: "5px",
                      }}
                      onChange={this.onChange}
                      value={this.state.email}
                      error={errors.email}
                      id="email"
                      type="email"
                      className={classnames("", {
                        invalid: errors.email,
                      })}
                    />
                    <span className="red-text">{errors.email}</span>
                  </div>
                  <br />
                  <label
                    htmlFor="password"
                    style={{
                      marginLeft: "15px",
                      fontSize: "15px",
                      color: "white",
                    }}
                  >
                    Password
                  </label>
                  <div className="input-field col s12">
                    <input
                      style={{
                        width: "100%",
                        backgroundColor: "transparent",
                        borderTop: "none",
                        borderRight: "none",
                        borderLeft: "none",
                        borderBottomStyle: "1px solid balck",
                        color: "white",
                        paddingLeft: "5px",
                      }}
                      onChange={this.onChange}
                      value={this.state.password}
                      error={errors.password}
                      id="password"
                      type="password"
                      className={classnames("", {
                        invalid: errors.password,
                      })}
                    />
                    <span className="red-text">{errors.password}</span>
                  </div>
                  <br />
                  <label
                    htmlFor="password2"
                    style={{
                      marginLeft: "15px",
                      fontSize: "15px",
                      color: "white",
                    }}
                  >
                    Confirm Password
                  </label>
                  <div className="input-field col s12">
                    <input
                      style={{
                        width: "100%",
                        backgroundColor: "transparent",
                        borderTop: "none",
                        borderRight: "none",
                        borderLeft: "none",
                        borderBottomStyle: "1px solid balck",
                        color: "white",
                        paddingLeft: "5px",
                      }}
                      onChange={this.onChange}
                      value={this.state.password2}
                      id="password2"
                      type="password"
                      className={classnames("", {
                        invalid: errors.password2,
                      })}
                    />
                    <span className="red-text">{errors.password2}</span>
                  </div>
                  <br />
                  {/* <center>
                                    <div className="col s12" style={{ paddingLeft: "11.250px" }}>
                                        <input
                                            style={{
                                                width: "150px",
                                                borderRadius: "3px",
                                                letterSpacing: "1.5px",
                                                marginTop: "1rem"
                                            }}
                                            type="reset" style={{background: 'white', padding: '20px 47px 20px 47px', marginTop: '10px'}}
                                            className="btn btn-large waves-effect waves-light hoverable blue accent-3"
                                        value="Reset" 
                                        />
                                    </div>
                                    </center> */}
                  <center>
                    <div
                      className="col s12"
                      style={{ paddingLeft: "11.250px" }}
                    >
                      <button
                        style={{
                          width: "150px",
                          borderRadius: "3px",
                          letterSpacing: "1.5px",
                          marginTop: "1rem",
                        }}
                        type="submit"
                        style={{
                          background: "white",
                          padding: "20px 40px 20px 40px",
                          marginTop: "10px",
                        }}
                        className="btn btn-large waves-effect waves-light hoverable blue accent-3"
                      >
                        Sign up
                      </button>
                    </div>
                  </center>
                </form>
              </div>
            </div>
          </div>
        </div>
        <Footer />
      </div>
    );
  }
}

Register.propTypes = {
  registerUser: PropTypes.func.isRequired,
  auth: PropTypes.object.isRequired,
  errors: PropTypes.object.isRequired,
};

const mapStateToProps = (state) => ({
  auth: state.auth,
  errors: state.errors,
});

export default connect(mapStateToProps, { registerUser })(withRouter(Register));
