import React, { Component } from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { loginUser } from "../../actions/authActions";
import classnames from "classnames";
import Header from '../../Header';
import Footer from '../../Footer';
import backgroundImage1 from '../../images/employee1.jpg';
import backgroundImage2 from '../../images/black.png';

class Login extends Component {
    constructor() {
        super();
        this.state = {
            email: "",
            password: "",
            errors: {}
        };
    }

    componentDidMount() {
        if (this.props.auth.isAuthenticated) {
            this.props.history.push("/dashboard");
        }
    };

    componentWillReceiveProps(nextProps) {
        if (nextProps.auth.isAuthenticated) {
            this.props.history.push("/dashboard");
        }

        if (nextProps.errors) {
            this.setState({
                errors: nextProps.errors
            });
        }
    }

    onChange = e => {
        this.setState({ [e.target.id]: e.target.value });
    };

    onSubmit = e => {
        e.preventDefault();
        const userData = {
            email: this.state.email,
            password: this.state.password
        };
        this.props.loginUser(userData);
    };

    render() {
        const { errors } = this.state;
        return (
            <div>
                <Header />
            <div style={{backgroundImage: `url(${backgroundImage1})`, backgroundSize: '100% 100%', padding: '40px 0 100px 0'}}>
                      <center><h1 className="mt-2" style={{color: 'darkcyan'}}><b><i>Admin Login</i></b></h1></center>
                {/* <div className="row mt-5"> */}
                    <div className="col-md-4 mx-auto mt-5 shadow-lg" style={{backgroundImage: `url(${backgroundImage2})`, padding: '40px 80px 60px 80px', borderRadius: '30px'}}>
                        {/* <div className="card-body p-1"> */}
                            <h2 className="text-center mt-3" style={{color: 'black'}}><b>Please enter Admin login credentials</b></h2>
                            <form noValidate onSubmit={this.onSubmit} className="white">
                                <label htmlFor="email" style={{color: 'white'}}>Email</label>
                                <input
                                    onChange={this.onChange}
                                    value={this.state.email}
                                    error={errors.email}
                                    id="email"
                                    type="email"
                                    className={classnames("form-control", {
                                        invalid: errors.email
                                    })}
                                />
                                <span className="text-danger">{errors.email}</span>
                                <br/>
                                <label htmlFor="password" style={{color: 'white'}}>Password</label>
                                <input
                                    onChange={this.onChange}
                                    value={this.state.password}
                                    error={errors.password}
                                    id="password"
                                    type="password"
                                    className={classnames("form-control", {
                                        invalid: errors.password
                                    })}
                                />
                                <span className="text-danger">{errors.password}</span>
                                <p className="text-center pb-0 mt-2">
                                    <button
                                        type="submit"
                                        className="btn btn-large btn-primary mt-2 px-5">
                                        Login
                                    </button>
                                </p>
                            </form>
                        {/* </div> */}
                    </div>
                {/* </div> */}
            </div>
            {/*Footer Start*/}
            <Footer />

            {/*Footer End*/}
            </div>
        );
    }
}

Login.propTypes = {
    loginUser: PropTypes.func.isRequired,
    auth: PropTypes.object.isRequired,
    errors: PropTypes.object.isRequired
};
const mapStateToProps = state => ({
    auth: state.auth,
    errors: state.errors
});
export default connect(
    mapStateToProps,
    { loginUser }
)(Login);
