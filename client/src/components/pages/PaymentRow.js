import React from 'react';

export default class PaymentRow extends React.Component{

    render(){
        return(
            <tr>
                <td>{this.props.obj.cardHoldersName}</td>
                <td>{this.props.obj.date}</td>
                <td>{this.props.obj.cardtype}</td>
                <td>{this.props.obj.amount}</td>
            </tr>
        );
    }

}