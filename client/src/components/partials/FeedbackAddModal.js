import React from 'react';
import classnames from "classnames";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import backgroundImage from '../../images/feedback.png';
import { addUser } from "../../actions/feedbackActions";
import { withRouter } from "react-router-dom";
import { toast } from 'react-toastify';
import $ from 'jquery';
import axios from 'axios';
const Validator = require("validator");
const isEmpty = require("is-empty");

class FeedbackAddModal extends React.Component{

    constructor() {
        super();
        this.state = {
            name: '',
            rating: '',
            usability: '',
            service:'',
            comment: '',
            errors:{},
        };
        this.formValidation=this.formValidation.bind(this);

    }

    componentWillReceiveProps(nextProps) {
        if (nextProps.errors) {
            this.setState({
                errors: nextProps.errors
            });
        }
        if (nextProps.auth !== undefined
            && nextProps.auth.user !== undefined
            && nextProps.auth.user.data !== undefined
            && nextProps.auth.user.data.message !== undefined) {
            $('#add-user-modal').modal('hide');
            toast(nextProps.auth.user.data.message, {
                position: toast.POSITION.TOP_CENTER
            });
        }
    }

    onChange= e => {
        this.setState({ [e.target.id]: e.target.value });
    };

    formValidation = () => {
        const {name, rating, usability, service, comment } = this.state;

        const errors={};

        if(Validator.isEmpty(name) || Validator.isEmpty(rating)|| Validator.isEmpty(usability) || Validator.isEmpty(service)||Validator.isEmpty(comment)){
            errors.name = "Name field is required";
            errors.rating = "Please select one";
            errors.usability = "Please select one";
            errors.service = "Please select one";
            errors.comment = "Please leave a comment";

            const isValid = false;
            this.setState({errors: errors});
            return isValid;
        }
        else{
            const isValid = true;
            return isValid;
        }

    }

    onUserAdd = e => {
        e.preventDefault();
         const isValid = this.formValidation();
         console.log(isValid);


        if(isValid===true){
            const newFeedback = {
                name: this.state.name,
                rating: this.state.rating,
                usability: this.state.usability,
                service: this.state.service,
                comment: this.state.comment,
            };

            axios.post('http://localhost:1234/api/feedbacks/feedback-add',newFeedback)
                .then(res=>{
                    const id = res.data.user;

                    localStorage.setItem('id',id);
                    alert("Feedback Submitted");
                    this.props.history.push("/submittedfeedback")

                })
                .catch(error=>{
                    console.log(error.message);
                    alert(error.message)
                })
        }

    };

    render(){
        const { name, rating, usability, service, comment,errors } = this.state;
        return(
            <div>
                <div style={{backgroundImage:`url(${backgroundImage})`, backgroungRepeat:"no-repeat", backgroundSize: "100% 100%",width: "100%", padding:"10px 10px 10px 10px", height:"956px"}} >
                    <div style={{backgroundColor:"gainsboro",width:"681px",height:"945px",marginLeft:"502px",padding: "28px 33px 10px 31px"}}>
                        <div>
                            <form onSubmit={this.onUserAdd}>
                                <div>
                                    <label style={{fontFamily:"Comin Sans MS",fontSize:"40px"}}>Your Feedback is important to us</label><br/><br/>

                                    <label style={{fontSize:"20px",fontWeight:"bold"}}>Name</label>
                                    <input type="text"
                                           placeholder="Name"
                                           id="name"
                                           value={this.state.name}
                                           onChange={this.onChange}
                                           error={errors.name}
                                            className={classnames("form-control" ,{invalid: errors.name})}
                                    />
                                    <span className="text-danger">{this.state.errors.name}</span>


                                    <br/>

                                    <div>
                                        <label style={{fontSize:"20px",fontWeight:"bold"}}>How much do you rate our website?</label>
                                        <div>
                                            <input
                                                type="radio"
                                                name="one"
                                                id="rating"
                                                value="one"
                                                checked={"one"=== this.state.rating}
                                                onChange={this.onChange}
                                                className={classnames( {invalid: errors.rating})}
                                            />
                                            <label style={{marginLeft:"10px"}}>One</label>
                                            {/*<br/>*/}

                                            <input
                                                style={{marginLeft:"63px"}}
                                                type="radio"
                                                name="two"
                                                id="rating"
                                                value="two"
                                                checked={"two"=== this.state.rating}
                                                onChange={this.onChange}/>
                                            <label style={{marginLeft:"10px"}}>Two</label>

                                            <input
                                                style={{marginLeft:"52px"}}
                                                type="radio"
                                                name="three"
                                                id="rating"
                                                value="three"
                                                checked={"three"=== this.state.rating}
                                                onChange={this.onChange}/>
                                            <label style={{marginLeft:"10px"}}>Three</label>

                                            <input
                                                style={{marginLeft:"56px"}}
                                                type="radio"
                                                name="four"
                                                id="rating"
                                                value="four"
                                                checked={"four"=== this.state.rating}
                                                onChange={this.onChange}/>
                                            <label style={{marginLeft:"10px"}}>Four</label>

                                            <input
                                                style={{marginLeft:"56px"}}
                                                type="radio"
                                                name="five"
                                                id="rating"
                                                value="five"
                                                checked={"five"=== this.state.rating}
                                                onChange={this.onChange}/>
                                            <label style={{marginLeft:"10px"}}>Five</label>

                                        </div>

                                        <span className="text-danger">{errors.rating}</span>
                                    </div>

                                    <br/>

                                    <div>
                                        <label style={{fontSize:"20px",fontWeight:"bold"}}>How satisfied are you with the usability of the website?</label>
                                        <div>
                                            <input
                                                type="radio"
                                                name="poor"
                                                id="usability"
                                                value="poor"
                                                checked={"poor"=== this.state.usability}
                                                onChange={this.onChange}
                                                className={classnames( {invalid: errors.usability})}

                                                />
                                            <label style={{marginLeft:"10px"}}>Poor</label>


                                            <input
                                                style={{marginLeft:"113px"}}
                                                type="radio"
                                                name="satisfactory"
                                                id="usability"
                                                value="satisfactory"
                                                checked={"satisfactory"=== this.state.usability}
                                                onChange={this.onChange}/>
                                            <label style={{marginLeft:"10px"}}>Satisfactory</label>

                                            <input
                                                style={{marginLeft:"68px"}}
                                                type="radio"
                                                name="very good"
                                                id="usability"
                                                value="very good"
                                                checked={"very good"=== this.state.usability}
                                                onChange={this.onChange}/>
                                            <label style={{marginLeft:"10px"}}>Very Good</label>
                                        </div>
                                    </div>

                                    <span className="text-danger">{errors.usability}</span>
                                </div>

                                <br/>

                                <div>
                                    <label style={{fontSize:"20px",fontWeight:"bold"}}>How satisfied are you regarding the service of our company?</label>
                                    <div>
                                        <input
                                            type="radio"
                                            name="Must Improve"
                                            id="service"
                                            value="Must Improve"
                                            checked={"Must Improve"=== this.state.service}
                                            onChange={this.onChange}
                                            className={classnames( {invalid: errors.service})}/>
                                        <label style={{marginLeft:"10px"}}>Must Improve</label>

                                        <input
                                            style={{marginLeft:"49px"}}
                                            type="radio"
                                            name="average"
                                            id="service"
                                            value="average"
                                            checked={"average"=== this.state.service}
                                            onChange={this.onChange}/>
                                        <label style={{marginLeft:"10px"}}>Average</label>

                                        <input
                                            style={{marginLeft:"91px"}}
                                            type="radio"
                                            name="excellent"
                                            id="service"
                                            value="excellent"
                                            checked={"excellent"=== this.state.service}
                                            onChange={this.onChange}/>
                                        <label style={{marginLeft:"10px"}}>Excellent</label>
                                    </div>

                                </div>
                                <span className="text-danger">{errors.service}</span>

                                <br/>
                                <div>
                                    <label style={{fontSize:"20px"}}><b>If you have any queries, suggestions or complaints feel free to mention. We love to improve our service.</b></label>

                                    <textarea
                                        rows="7"
                                        id="comment"
                                        placeholder="Please leave a comment"
                                        value={this.state.comment}
                                        onChange={this.onChange}
                                        error={errors.comment}
                                        className={classnames("form-control",{invalid: errors.comment})}/>
                                </div>
                                <span className="text-danger">{errors.comment}</span>


                                <div>
                                    <button  style={{backgroundColor:"royalblue",marginLeft:"214px",marginTop:"57px",fontWeight:"bold", border:"none", color:"white",padding:"15px 32px",fontSize:"16px"}} type="submit" >Submit Feedback</button>

                                </div>

                            </form>

                        </div>
                    </div>
                </div>


            </div>
        )
    }

}

FeedbackAddModal.propTypes = {
    addUser: PropTypes.func.isRequired,
    auth: PropTypes.object.isRequired,
    errors: PropTypes.object.isRequired
};

const mapStateToProps = state => ({
    auth: state.auth,
    errors: state.errors
});

export default connect(
    mapStateToProps,
    { addUser }
)(withRouter(FeedbackAddModal));







