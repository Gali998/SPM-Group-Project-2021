import React from 'react';

export default class CarRow extends React.Component{

    render(){
        return(
            <tr>
                <td>{this.props.obj.carName}</td>
                <td>{this.props.obj.description}</td>
            </tr>
        );
    }

}