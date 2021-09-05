import React from 'react';
import Header from '../../Header';
import Footer from '../../Footer';
import backgroundImage from '../../images/feedback.png';
// import classnames from "classnames";
// import PropTypes from "prop-types";
// import { connect } from "react-redux";
// import { addUser } from "../../actions/feedbackActions";
// import { withRouter } from "react-router-dom";
// import { toast } from 'react-toastify';
// import $ from 'jquery';


export default class FeedbackUpdateModal extends React.Component{

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
    //     const newFeedback = {
    //         name: this.state.name,
    //         comment: this.state.comment,
    //
    //     };
    //     this.props.addUser(newFeedback, this.props.history);
    //
    //     // alert("Feedback Submitted");
    //
    // };

    render(){
        // const { errors } = this.state;
        return(
            <div>
                <Header />

                <div style={{backgroundImage:`url(${backgroundImage})`, backgroungRepeat:"no-repeat", backgroundSize: "100% 100%",width: "100%", padding:"10px 10px 10px 10px",height:"886px"}}>
                    <div style={{backgroundColor:"gainsboro",width:"681px",height:"851px",marginLeft:"502px",padding: "10px 10px 10px 31px"}}>
                        <div>
                            <form>
                                <div>
                                    <label style={{fontFamily:"Comin Sans MS",fontSize:"40px"}}>Your Feedback is important to us</label><br/><br/>

                                    <label style={{fontSize:"20px",fontWeight:"bold"}}>Name</label>
                                    <input type="text"
                                           placeholder="Name"
                                           id="name"
                                           //value={this.state.name}
                                           //onChange={this.onChange}
                                           // error={errors.name}
                                           className="form-control"
                                    />
                                    {/*<span className="text-danger">{errors.name}</span>*/}
                                    <br/>

                                    <div>
                                        <label style={{fontSize:"20px",fontWeight:"bold"}}>How much do you rate our website?</label>
                                        <div>
                                            <input

                                                type="radio"
                                                name="one"
                                                id="rating"
                                                // value="one"
                                                // checked={"one"=== this.state.rating}
                                                // onChange={this.onChange}
                                            />
                                            <label style={{marginLeft:"10px"}}>One</label>

                                            <input
                                                style={{marginLeft:"20px"}}
                                                type="radio"
                                                name="two"
                                                id="rating"
                                                // value="two"
                                                // checked={"two"=== this.state.rating}
                                                // onChange={this.onChange}
                                            />
                                            <label style={{marginLeft:"10px"}}>Two</label>

                                            <input
                                                style={{marginLeft:"20px"}}
                                                type="radio"
                                                name="three"
                                                id="rating"
                                                // value="three"
                                                // checked={"three"=== this.state.rating}
                                                // onChange={this.onChange}
                                            />
                                            <label style={{marginLeft:"10px"}}>Three</label>

                                            <input
                                                style={{marginLeft:"20px"}}
                                                type="radio"
                                                name="four"
                                                id="rating"
                                                // value="four"
                                                // checked={"four"=== this.state.rating}
                                                // onChange={this.onChange}
                                            />
                                            <label style={{marginLeft:"10px"}}>Four</label>

                                            <input
                                                style={{marginLeft:"20px"}}
                                                type="radio"
                                                name="five"
                                                id="rating"
                                                // value="five"
                                                // checked={"five"=== this.state.rating}
                                                // onChange={this.onChange}
                                            />
                                            <label style={{marginLeft:"10px"}}>Five</label>

                                        </div>
                                    </div>

                                    <br/>

                                    <div>
                                        <label style={{fontSize:"20px",fontWeight:"bold"}}>How satisfied are you with the usability of the website?</label>
                                        <div>
                                            <input
                                                type="radio"
                                                name="poor"
                                                id="usability"
                                                // value="poor"
                                                // checked={"poor"=== this.state.usability}
                                                // onChange={this.onChange}
                                            />
                                            <label style={{marginLeft:"10px"}}>Poor</label>

                                            <input
                                                style={{marginLeft:"20px"}}
                                                type="radio"
                                                name="satisfactory"
                                                id="usability"
                                                // value="satisfactory"
                                                // checked={"satisfactory"=== this.state.usability}
                                                // onChange={this.onChange}
                                            />
                                            <label style={{marginLeft:"10px"}}>Satisfactory</label>

                                            <input
                                                style={{marginLeft:"20px"}}
                                                type="radio"
                                                name="very good"
                                                id="usability"
                                                // value="very good"
                                                // checked={"very good"=== this.state.usability}
                                                // onChange={this.onChange}
                                            />
                                            <label style={{marginLeft:"10px"}}>Very Good</label>
                                        </div>
                                    </div>

                                    <br/>

                                    <div>
                                        <label style={{fontSize:"20px",fontWeight:"bold"}}>How satisfied are you regarding the service of our company?</label>
                                        <div>
                                            <input
                                                type="radio"
                                                name="poor"
                                                id="service"
                                                // value="poor"
                                                // checked={"poor"=== this.state.service}
                                                // onChange={this.onChange}
                                            />
                                            <label style={{marginLeft:"10px"}}>Poor</label>

                                            <input
                                                style={{marginLeft:"20px"}}
                                                type="radio"
                                                name="satisfactory"
                                                id="service"
                                                // value="satisfactory"
                                                // checked={"satisfactory"=== this.state.service}
                                                // onChange={this.onChange}
                                            />
                                            <label style={{marginLeft:"10px"}}>Satisfactory</label>

                                            <input
                                                style={{marginLeft:"20px"}}
                                                type="radio"
                                                name="very good"
                                                id="service"
                                                // value="very good"
                                                // checked={"very good"=== this.state.service}
                                                // onChange={this.onChange}
                                            />
                                            <label style={{marginLeft:"10px"}}>Very Good</label>
                                        </div>
                                    </div>

                                    <br/>



                                    <div>
                                        <label style={{fontSize:"20px",fontWeight:"bold"}}>If you have any queries, suggestions or complaints feel free to mention. We love to improve our service.</label>

                                        <textarea
                                            rows="7"
                                            id="comment"
                                            placeholder="Please leave a comment"
                                            //value={this.state.comment}
                                            //onChange={this.onChange}
                                            // error={errors.comment}
                                            className="form-control"/>

                                    </div>
                                    {/*<span className="text-danger">{errors.comment}</span>*/}

                                </div>

                                <button style={{backgroundColor:"royalblue",marginLeft:"214px",marginTop:"57px",fontWeight:"bold", border:"none",color:"white",padding:"15px 32px",fontSize:"16px"}} type="submit" >Edit Feedback</button>
                            </form>

                        </div>

                    </div>

                </div>


                {/*footer*/}
                <Footer/>
            </div>
        );
    }

}

// FeedbackAddModal.propTypes = {
//     addUser: PropTypes.func.isRequired,
//     auth: PropTypes.object.isRequired,
//     errors: PropTypes.object.isRequired
// };
//
// const mapStateToProps = state => ({
//     auth: state.auth,
//     errors: state.errors
// });
//
// export default connect(
//     mapStateToProps,
//     { addUser }
// )(withRouter(FeedbackAddModal));







