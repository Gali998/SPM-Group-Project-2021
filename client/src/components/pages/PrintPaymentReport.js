import React from 'react';
import ReactToPrint from 'react-to-print';
import '../../css/PaymentReports.css';

import  PaymentReport  from './PaymentReports';

export default class PrintPaymentReport extends React.Component {
    render() {
        return (
            <div>
                <PaymentReport ref={el => (this.componentRef = el)} />
                <ReactToPrint
                    trigger={() => {
                         return <div id="print">
                                <button id="btnprint">
                                Print
                            </button>
                        </div>;
                    }}
                    content={() => this.componentRef}
                />

            </div>
        );
    }
}