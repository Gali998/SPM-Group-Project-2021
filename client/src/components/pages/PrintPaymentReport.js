import React from "react";
import ReactToPrint from "react-to-print";
import "../../css/PaymentReports.css";
import Navbar from "../partials/Navbar";
import Sidebar from "../partials/Sidebar";
import PaymentReport from "./PaymentReports";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faList } from "@fortawesome/free-solid-svg-icons/faList";
import { toast, ToastContainer } from "react-toastify";
import ReactDatatable from "@ashvin27/react-datatable";

export default class PrintPaymentReport extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div>
        <Navbar />
        <div className="d-flex" id="wrapper">
          <Sidebar />

          <ReactToPrint
            trigger={() => {
              return (
                <div class="p-4 justify-center items-center mt-20">
                  <button className="btn btn-primary">Print</button>
                </div>
              );
            }}
            content={() => this.componentRef}
          />
          <PaymentReport ref={(el) => (this.componentRef = el)} />
        </div>
      </div>
    );
  }
}
