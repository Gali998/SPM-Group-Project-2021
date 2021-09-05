import React from 'react';
import Header from '../../Header';
import Footer from '../../Footer';
import  '../../css/SubmitFeedback.css';
import axios from 'axios';
import {Link} from 'react-router-dom';

export default class SubmitedFeedback extends React.Component{

    constructor() {
        super();
        this.state = {
            name: '',
            rating: '',
            usability: '',
            service: '',
            comment: ''
        }

        this.getData = this.getData.bind(this);
    }

    componentWillReceiveProps(nextProps) {
        this.getData();
    }

    componentDidMount() {
        this.getData();
    }

    getData(){

        const id = localStorage.getItem('id');

        axios.get(`http://localhost:1234/api/feedbacks/feedback-data/${id}`)
            .then(response => {
                this.setState({
                    id: response.data.id,
                    name: response.data.name,
                    rating: response.data.rating,
                    usability: response.data.usability,
                    service: response.data.service,
                    comment: response.data.comment
                })
                console.log(response.data);
            })
            .catch(function (error) {
                console.log(error);
            })
    }

    render(){

        return(
            <div>
                <Header />

                <h1>Feedback</h1>

                <div style={{marginLeft:"526px",width:"625px",height:"526px",marginTop:"56px"}}>
                    <div className="card">
                        <div className="card-header">
                            <h6 style={{fontSize:"25px"}}>{this.state.name}</h6>
                        </div>
                        
                        <div className="card-body" >
                                <h5 className="card-title">Rating   &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;:&nbsp;{this.state.rating}</h5>
                                <h5 className="card-title">Usability &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;:&nbsp;{this.state.usability}</h5>
                                <h5 className="card-title">Service  &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;:&nbsp;{this.state.service}</h5>
                                <h5 className="card-title">Comment  &nbsp;&nbsp;:&nbsp;{this.state.comment}</h5>
                                <br/>

                                <div id="btn1">
                                <Link to="/FeedbackUpdate" className="nav-link" ><button id="btnedit">Edit</button></Link>
                                </div>
                                <div id="btn2">
                                <button id="btndelete">Delete</button>
                                </div>

                        </div>
                  
                    </div>
                </div>



                <Footer />
            </div>
        );
    }
}