import React, { Component } from 'react';
import Form from 'react-bootstrap/Form';

class Hashing extends Component {


    constructor(props){
        super(props);
        this.state={value:''};
        this.handleChange = this.handleChange.bind(this);

    }

    handleChange(event) {
        this.setState({ value: event.target.value });
    }
    render() {
        
        return (
            <div className="container">
            <div className="jumbotron">
           
            <div className="row">
            <div className="col-md-4">
            Data
            </div>
            <div className="col-md-8">
            <Form.Group controlId="blockData">
                    {/* <Form.Label>Response</Form.Label> */}
                    <Form.Control as="textarea" rows="10" value={this.state.value} onChange={this.handleChange} />
                </Form.Group>
            </div>
            </div>
            <div className="row">
            <div className="col-md-4">
            Hash
            </div>
            <div className="col-md-8">
            <Form.Control type="text" value={this.state.value} onChange={this.handleChange} />
            
            </div>
            </div>
            
            </div>
            </div>
        );
    }
}
export default Hashing;
