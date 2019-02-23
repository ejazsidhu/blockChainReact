import React, { Component } from 'react';

export class PageHeading extends Component{
    constructor(){
        super()
        this.state=this.props
    }
    render(){
        let heading=this.props.heading;
        let subHeading=this.props.subHeading || '';
        return(
            <div className="row">
            <div className="col-md-12 text-center">
            <h3>{heading} </h3>
            <p>{subHeading}</p>

            
            </div>
            </div>
        )
    }
}