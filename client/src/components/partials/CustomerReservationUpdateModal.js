import React from "react";
import classnames from "classnames";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { updateUser } from "../../actions/customerReservationAction";
import { withRouter } from "react-router-dom";
import { toast } from "react-toastify";
import $ from "jquery";

import "react-toastify/dist/ReactToastify.css";

class CustomerReservationUpdateModal extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      id: this.props.record.id,
      customerName: this.props.record.customerName,
      address: this.props.record.address,
      phoneNumber: this.props.record.phoneNumber,
      email: this.props.record.email,
      packageName: this.props.record.packageName,
      location: this.props.record.location,
      date: this.props.record.date,
      errors: {},
    };
  }

  componentWillReceiveProps(nextProps) {
    if (nextProps.record) {
      this.setState({
        id: nextProps.record.id,
        customerName: nextProps.record.customerName,
        address: nextProps.record.address,
        phoneNumber: nextProps.record.phoneNumber,
        email: nextProps.record.email,
        packageName: nextProps.record.packageName,
        location: nextProps.record.location,
        date: nextProps.record.date,
      });
    }
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
    if (e.target.id === "user-update-customerName") {
      this.setState({ customerName: e.target.value });
    }
    if (e.target.id === "user-update-address") {
      this.setState({ address: e.target.value });
    }
    if (e.target.id === "user-update-phoneNumber") {
      this.setState({ phoneNumber: e.target.value });
    }
    if (e.target.id === "user-update-email") {
      this.setState({ email: e.target.value });
    }
    if (e.target.id === "user-update-packageName") {
      this.setState({ packageName: e.target.value });
    }
    if (e.target.id === "user-update-location") {
      this.setState({ location: e.target.value });
    }
    if (e.target.id === "user-update-date") {
      this.setState({ date: e.target.value });
    }
  };

  onUserUpdate = (e) => {
    e.preventDefault();
    const newUser = {
      _id: this.state.id,
      customerName: this.state.customerName,
      address: this.state.address,
      phoneNumber: this.state.phoneNumber,
      email: this.state.email,
      packageName: this.state.packageName,
      location: this.state.location,
      date: this.state.date,
      errors: {},
    };
    this.props.updateUser(newUser);
  };

  render() {
    const { errors } = this.state;
    return (
      <div>
        <div className="modal fade" id="update-user-modal">
          <div className="modal-dialog modal-lg">
            <div className="modal-content">
              <div className="modal-header">
                <h4 className="modal-title">Update Reservation</h4>
                <button type="button" className="close" data-dismiss="modal">
                  &times;
                </button>
              </div>
              <div className="modal-body">
                <form noValidate onSubmit={this.onUserUpdate} id="update-user">
                  <input
                    onChange={this.onChange}
                    value={this.state.id}
                    id="user-update-id"
                    type="text"
                    className="d-none"
                  />
                  <div className="row mt-2">
                    <div className="col-md-3">
                      <label htmlFor="customerName">Customer Name</label>
                    </div>
                    <div className="col-md-9">
                      <input
                        onChange={this.onChange}
                        value={this.state.customerName}
                        id="user-update-customerName"
                        type="text"
                        error={errors.customerName}
                        className={classnames("form-control", {
                          invalid: errors.customerName,
                        })}
                      />
                      <span className="text-danger">{errors.customerName}</span>
                    </div>
                  </div>
                  <div className="row mt-2">
                    <div className="col-md-3">
                      <label htmlFor="address">Address</label>
                    </div>
                    <div className="col-md-9">
                      <input
                        onChange={this.onChange}
                        value={this.state.address}
                        id="user-update-address"
                        type="text"
                        error={errors.address}
                        className={classnames("form-control", {
                          invalid: errors.address,
                        })}
                      />
                      <span className="text-danger">{errors.address}</span>
                    </div>
                  </div>
                  <div className="row mt-2">
                    <div className="col-md-3">
                      <label htmlFor="phoneNumber">Phone Number</label>
                    </div>
                    <div className="col-md-9">
                      <input
                        onChange={this.onChange}
                        value={this.state.phoneNumber}
                        id="user-update-phoneNumber"
                        type="number"
                        error={errors.phoneNumber}
                        className={classnames("form-control", {
                          invalid: errors.phoneNumber,
                        })}
                      />
                      <span className="text-danger">{errors.phoneNumber}</span>
                    </div>
                  </div>
                  <div className="row mt-2">
                    <div className="col-md-3">
                      <label htmlFor="email">Email</label>
                    </div>
                    <div className="col-md-9">
                      <input
                        onChange={this.onChange}
                        value={this.state.email}
                        error={errors.email}
                        id="user-update-email"
                        type="email"
                        className={classnames("form-control", {
                          invalid: errors.email,
                        })}
                      />
                      <span className="text-danger">{errors.email}</span>
                    </div>
                  </div>
                  <div className="row mt-2">
                    <div className="col-md-3">
                      <label htmlFor="packageName">Package Name</label>
                    </div>
                    <div className="col-md-9">
                      <input
                        onChange={this.onChange}
                        value={this.state.packageName}
                        error={errors.packageName}
                        id="user-update-packageName"
                        type="text"
                        className={classnames("form-control", {
                          invalid: errors.packageName,
                        })}
                      />
                      <span className="text-danger">{errors.packageName}</span>
                    </div>
                  </div>
                  <div className="row mt-2">
                    <div className="col-md-3">
                      <label htmlFor="location">Location</label>
                    </div>
                    <div className="col-md-9">
                      <input
                        data-reset-input={true}
                        autoComplete={""}
                        onChange={this.onChange}
                        error={errors.location}
                        id="user-update-location"
                        type="text"
                        className={classnames("form-control", {
                          invalid: errors.location,
                        })}
                      />
                      <span className="text-danger">{errors.location}</span>
                    </div>
                  </div>
                  <div className="row mt-2">
                    <div className="col-md-3">
                      <label htmlFor="date">Reservation date</label>
                    </div>
                    <div className="col-md-9">
                      <input
                        data-reset-input={true}
                        autoComplete={""}
                        onChange={this.onChange}
                        error={errors.date}
                        id="user-update-date"
                        type="date"
                        className={classnames("form-control", {
                          invalid: errors.location,
                        })}
                      />
                      <span className="text-danger">{errors.date}</span>
                    </div>
                  </div>
                </form>
              </div>
              <div className="modal-footer">
                <button
                  type="button"
                  className="btn btn-secondary"
                  data-dismiss="modal"
                >
                  Close
                </button>
                <button
                  form="update-user"
                  type="submit"
                  className="btn btn-primary"
                >
                  Update Reservation
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

CustomerReservationUpdateModal.propTypes = {
  updateUser: PropTypes.func.isRequired,
  auth: PropTypes.object.isRequired,
  errors: PropTypes.object.isRequired,
};

const mapStateToProps = (state) => ({
  auth: state.auth,
  errors: state.errors,
});

export default connect(mapStateToProps, { updateUser })(
  withRouter(CustomerReservationUpdateModal)
);
