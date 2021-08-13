import React from 'react'
import classnames from "classnames";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { addUser } from "../../actions/carActions";
import { withRouter } from "react-router-dom";
import { toast } from 'react-toastify';
import $ from 'jquery';

import 'react-toastify/dist/ReactToastify.css';

class CarAddModal extends React.Component {

    constructor() {
        super();
        this.state = {
            carName: '',
            description: '',
            carCount: '',
            errors: {},
        };
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

    onChange = e => {
        this.setState({ [e.target.id]: e.target.value });
    };

    onUserAdd = e => {
        e.preventDefault();
        const newUser = {
                carName: this.state.carName,
                description: this.state.description,
                carCount: this.state.carCount,
                // file: this.state.file,
                // file: this.state.carCount
        };

        // let formData;
        //     formData = new FormData();
        //     formData.append('id', this.state.Post.id);
        //     formData.append('title', this.state.Post.title);
        //     formData.append('carCount', this.state.Post.carCount);

        this.props.addUser(newUser, this.props.history);
        // formData = new FormData(),
        // formData.append('carName', newUser.carName),
        // formData.append('description', newUser.description),
        // formData.append('carCount', newUser.carCount)
        // this.props.addUser(newUser, this.props.history);
    };

    render() {
        const { errors } = this.state;
        return (
            <div>
                <div className="modal fade" id="add-user-modal" data-reset="true">
                    <div className="modal-dialog modal-lg">
                        <div className="modal-content">
                            <div className="modal-header">
                                <h4 className="modal-title">Add Car</h4>
                                <button type="button" className="close" data-dismiss="modal">&times;</button>
                            </div>
                            <div className="modal-body">
                                <form noValidate onSubmit={this.onUserAdd} id="add-user">
                                    <div className="row mt-2">
                                        <div className="col-md-3">
                                            <label htmlFor="carName">Name of the Car</label>
                                        </div>
                                        <div className="col-md-9">
                                            <input
                                                onChange={this.onChange}
                                                value={this.state.carName}
                                                id="carName"
                                                type="text"
                                                error={errors.carName}
                                                className={classnames("form-control", {
                                                    invalid: errors.carName
                                                })}/>
                                            <span className="text-danger">{errors.carName}</span>
                                        </div>
                                    </div>
                                    <div className="row mt-2">
                                        <div className="col-md-3">
                                            <label htmlFor="description">Description about the car field</label>
                                        </div>
                                        <div className="col-md-9">
                                            <input
                                                onChange={this.onChange}
                                                value={this.state.description}
                                                id="description"
                                                type="text"
                                                error={errors.description}
                                                className={classnames("form-control", {
                                                    invalid: errors.description
                                                })}/>
                                            <span className="text-danger">{errors.description}</span>
                                        </div>
                                    </div>
                                    <div className="row mt-2">
                                        <div className="col-md-3">
                                            <label htmlFor="carCount">Number of car</label>
                                        </div>
                                        <div className="col-md-9">
                                            <input
                                                onChange={this.onChange}
                                                value={this.state.carCount}
                                                id="carCount"
                                                type="number"
                                                error={errors.carCount}
                                                className={classnames("form-control", {
                                                    invalid: errors.carCount
                                                })}/>
                                            <span className="text-danger">{errors.carCount}</span>
                                        </div>
                                    </div>
                                    
                                </form>
                            </div>
                            <div className="modal-footer">
                                <button type="button" className="btn btn-secondary" data-dismiss="modal">Close</button>
                                <button
                                    form="add-user"
                                    type="submit"
                                    className="btn btn-primary">
                                    Add car
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

CarAddModal.propTypes = {
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
)(withRouter(CarAddModal));
