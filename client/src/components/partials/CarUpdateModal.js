import React from "react";
import classnames from "classnames";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { updateUser } from "../../actions/carActions";
import { withRouter } from "react-router-dom";
import { toast } from "react-toastify";
import $ from "jquery";

import "react-toastify/dist/ReactToastify.css";

class CarUpdateModal extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      id: this.props.record.id,
      carName: this.props.record.carName,
      description: this.props.record.description,
      carCount: this.props.record.carCount,
      errors: {},
    };
  }

  componentWillReceiveProps(nextProps) {
    if (nextProps.record) {
      this.setState({
        id: nextProps.record.id,
        carName: nextProps.record.carName,
        description: nextProps.record.description,
        carCount: nextProps.record.carCount,
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
    if (e.target.id === "user-update-carName") {
      this.setState({ carName: e.target.value });
    }
    if (e.target.id === "user-update-description") {
      this.setState({ description: e.target.value });
    }
    if (e.target.id === "user-update-carCount") {
      this.setState({ carCount: e.target.value });
    }
  };

  onUserUpdate = (e) => {
    e.preventDefault();
    const newUser = {
      _id: this.state.id,
      carName: this.state.carName,
      description: this.state.description,
      carCount: this.state.carCount,
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
                <h4 className="modal-title">Update Customer</h4>
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
                      <label htmlFor="carName">Name of the car</label>
                    </div>
                    <div className="col-md-9">
                      <input
                        onChange={this.onChange}
                        value={this.state.carName}
                        id="user-update-carName"
                        type="text"
                        error={errors.carName}
                        className={classnames("form-control", {
                          invalid: errors.carName,
                        })}
                      />
                      <span className="text-danger">{errors.carName}</span>
                    </div>
                  </div>
                  <div className="row mt-2">
                    <div className="col-md-3">
                      <label htmlFor="description">
                        Description about the car
                      </label>
                    </div>
                    <div className="col-md-9">
                      <input
                        onChange={this.onChange}
                        value={this.state.description}
                        id="user-update-description"
                        type="text"
                        error={errors.description}
                        className={classnames("form-control", {
                          invalid: errors.description,
                        })}
                      />
                      <span className="text-danger">{errors.description}</span>
                    </div>
                  </div>
                  <div className="row mt-2">
                    <div className="col-md-3">
                      <label htmlFor="carCount">Number of the car</label>
                    </div>
                    <div className="col-md-9">
                      <input
                        onChange={this.onChange}
                        value={this.state.carCount}
                        id="user-update-carCount"
                        type="number"
                        error={errors.carCount}
                        className={classnames("form-control", {
                          invalid: errors.carCount,
                        })}
                      />
                      <span className="text-danger">{errors.carCount}</span>
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
                  Update Car
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

CarUpdateModal.propTypes = {
  updateUser: PropTypes.func.isRequired,
  auth: PropTypes.object.isRequired,
  errors: PropTypes.object.isRequired,
};

const mapStateToProps = (state) => ({
  auth: state.auth,
  errors: state.errors,
});

export default connect(mapStateToProps, { updateUser })(
  withRouter(CarUpdateModal)
);
