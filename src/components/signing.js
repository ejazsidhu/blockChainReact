import React, { Component } from 'react';
import Form  from 'react-bootstrap/Form';

import Button  from 'react-bootstrap/Button';
import { PageHeading } from './pageHeading';

class Signing extends Component {

    constructor(props){
        super(props)
        this.state = { value: '', post: '' };

        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }
    handleChange(event) {
        this.setState({ value: event.target.value });
    }

    handleSubmit(event){
        event.preventDefault();

    }
  
    render() {
        return (
            <div className="container">
            <PageHeading heading="Signing" subHeading="Generate Signature"/>

            <div className="row">
            <div className="col-md-12">
            <h4>Signature Message</h4>
            </div>
            
            </div>
            <div className="jumbotron">
            
           
           <div className="row">
           <div className="col-md-2">
           Data
           </div>
           <div className="col-md-8">
           <Form.Group controlId="blockData">
                   {/* <Form.Label>Response</Form.Label> */}
                   <Form.Control type="text" value={this.state.value} onChange={this.handleChange} />
               </Form.Group>
           </div>
           </div>
           <div className="row">
           <div className="col-md-2">
           Private Key
           </div>
           <div className="col-md-8">
           <Form.Control type="text" value={this.state.hashing}  />
           
           </div>
           </div>

           <div className="row mt-2 mb-2">
           <div className="col-md-12 text-center">
           <Button variant="primary" type="submit">Signing</Button>
           
           </div>
           </div>

           <div className="row">
           <div className="col-md-2">
           Signature
           </div>
           <div className="col-md-8">
           <Form.Control as="textarea" rows="7" value={this.state.hashing}  readOnly />
           
           </div>
           </div>

           
           </div>
           <hr/>
           <div className="row">
            <div className="col-md-12">
            <h4>Validation Message</h4>
            </div>
            
            </div>
           <div className="jumbotron">
          
           
           <div className="row">
           <div className="col-md-2">
           Address
           </div>
           <div className="col-md-8">
           <Form.Group controlId="blockData">
                   {/* <Form.Label>Response</Form.Label> */}
                   <Form.Control type="text" value={this.state.value} onChange={this.handleChange} />
               </Form.Group>
           </div>
           </div>
           <div className="row">
           <div className="col-md-2">
           Message
           </div>
           <div className="col-md-8">
           <Form.Control as="textarea" rows="7" value={this.state.hashing}  />
           
           </div>
           </div>

           <div className="row mt-2 mb-2">
           <div className="col-md-12 text-center">
           <Button variant="primary" type="submit">Validate</Button>
           
           </div>
           </div>

           <div className="row">
           <div className="col-md-2">
           Signature
           </div>
           <div className="col-md-8">
           <Form.Control as="textarea" rows="7" value={this.state.hashing}  readOnly />
           
           </div>
           </div>

           
           </div>
         </div>
        );
    }
}

export default Signing;
