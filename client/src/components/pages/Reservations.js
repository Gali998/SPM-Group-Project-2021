import React, { Component, Fragment } from "react";
import Navbar from "../partials/Navbar";
import Sidebar from "../partials/Sidebar";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faList } from "@fortawesome/free-solid-svg-icons/faList";
import ReactDatatable from "@ashvin27/react-datatable";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import axios from "axios";
import { faPlus } from "@fortawesome/free-solid-svg-icons";
import ReservationAddModal from "../partials/ReservationAddModal";
import ReservationUpdateModal from "../partials/ReservationUpdateModal";
import { toast, ToastContainer} from "react-toastify";

class Reservation extends Component {
  constructor(props) {
    super(props);

    this.columns = [
      {
        key: "_id",
        text: "Id",
        className: "id",
        align: "left",
        sortable: true,
      },
      {
        key: "customerName",
        text: "Customer Name",
        className: "customerName",
        align: "left",
        sortable: true,
      },
      {
        key: "address",
        text: "Address",
        className: "address",
        align: "left",
        sortable: true,
      },
      {
        key: "phoneNumber",
        text: "Phone Number",
        className: "phoneNumber",
        align: "left",
        sortable: true,
      },
      {
        key: "email",
        text: "Email",
        className: "email",
        align: "left",
        sortable: true,
      },
      {
        key: "packageName",
        text: "Package Name",
        className: "packageName",
        align: "left",
        sortable: true,
      },
      {
        key: "location",
        text: "Location",
        className: "location",
        align: "left",
        sortable: true,
      },
      {
        key: "date",
        text: "Reserved Date",
        className: "date",
        align: "left",
        sortable: true,
      },
      {
        key: "action",
        text: "Action",
        className: "action",
        width: 100,
        align: "left",
        sortable: false,
        cell: (record) => {
          return (
            <Fragment>
              <button
                data-toggle="modal"
                data-target="#update-user-modal"
                className="btn btn-primary btn-sm"
                onClick={() => this.editRecord(record)}
                style={{ marginRight: "5px" }}
              >
                <i className="fa fa-edit"></i>
              </button>
              <button
                className="btn btn-danger btn-sm"
                onClick={() => this.deleteRecord(record)}
              >
                <i className="fa fa-trash"></i>
              </button>
            </Fragment>
          );
        },
      },
    ];

    this.config = {
      page_size: 10,
      length_menu: [10, 20, 50],
      filename: "Reservations",
      no_data_text: "No Reservation found!",
      button: {
        excel: true,
        print: true,
        csv: true,
      },
      language: {
        length_menu: "Show _MENU_ result per page",
        filter: "Filter in records...",
        info: "Showing _START_ to _END_ of _TOTAL_ records",
        pagination: {
          first: "First",
          previous: "Previous",
          next: "Next",
          last: "Last",
        },
      },
      show_length_menu: true,
      show_filter: true,
      show_pagination: true,
      show_info: true,
    };

    this.state = {
      records: [],
    };

    this.state = {
      currentRecord: {
        id: "",
        customerName: "",
        address: "",
        phoneNumber: "",
        email: "",
        packageName: "",
        location: "",
        date: "",
      },
    };

    this.getData = this.getData.bind(this);
  }

  componentDidMount() {
    this.getData();
  }

  componentWillReceiveProps(nextProps) {
    this.getData();
  }

  getData() {
    axios
      .post("/api/reservations/reservation-data")
      .then((res) => {
        this.setState({ records: res.data });
      })
      .catch();
  }

  editRecord(record) {
    this.setState({ currentRecord: record });
  }

  deleteRecord(record) {
    axios
      .post("/api/reservations/user-delete", { _id: record._id })
      .then((res) => {
        if (res.status === 200) {
          toast(res.data.message, {
            position: toast.POSITION.TOP_CENTER,
          });
        }
      })
      .catch();
    this.getData();
  }

  pageChange(pageData) {
    console.log("OnPageChange", pageData);
  }

  render() {
    return (
      <div>
        <Navbar />
        <div className="d-flex" id="wrapper">
          <Sidebar />
          <ReservationAddModal />
          <ReservationUpdateModal record={this.state.currentRecord} />
          <div id="page-content-wrapper">
            <div className="container-fluid">
              <button className="btn btn-link mt-3" id="menu-toggle">
                <FontAwesomeIcon icon={faList} />
              </button>
              <button
                className="btn btn-outline-primary float-right mt-3 mr-2"
                data-toggle="modal"
                data-target="#add-user-modal"
              >
                <FontAwesomeIcon icon={faPlus} /> Add Reservation
              </button>
              <h1 className="mt-2 text-primary">Reservation List</h1>
              <ReactDatatable
                config={this.config}
                records={this.state.records}
                columns={this.columns}
                onPageChange={this.pageChange.bind(this)}
              />
            </div>
          </div>
          <ToastContainer />
        </div>
      </div>
    );
  }
}

Reservation.propTypes = {
  auth: PropTypes.object.isRequired,
};

const mapStateToProps = (state) => ({
  auth: state.auth,
  records: state.records,
});

export default connect(mapStateToProps)(Reservation);
