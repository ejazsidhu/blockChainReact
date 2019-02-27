import React, { Component } from 'react';
import Form  from 'react-bootstrap/Form';

import Button  from 'react-bootstrap/Button';
import { PageHeading } from './pageHeading';

class Signing extends Component {
    ip='http://13.126.11.59:8000';

    constructor(props){
        super(props)
        this.state = { data: '', privateKey: '',message:'',address:'',signature:'',validateSignature:'' };

        this.handleDataChange = this.handleDataChange.bind(this);
        this.handleKeyChange = this.handleKeyChange.bind(this);
        this.handleSignatureSubmit = this.handleSignatureSubmit.bind(this);

        this.handleMessageChange = this.handleMessageChange.bind(this);
        this.handleAddressChange = this.handleAddressChange.bind(this);
    }
    handleDataChange(event) {
        this.setState({ data: event.target.value });
    }
    handleKeyChange(event) {
        this.setState({ privateKey: event.target.value });
    }

    handleMessageChange(event) {
        this.setState({ address: event.target.value });
    }
    handleAddressChange(event) {
        this.setState({ message: event.target.value });
    }

    async handleSignatureSubmit(event){
        event.preventDefault();
        let body={data:this.state.data,privateKey:this.state.privateKey}

        const rawResponse = await fetch(`${this.ip}/sign/generate`, {
            method: 'POST',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(body)
        });
        const content = await rawResponse.json();
        console.log('hash content',content);
        this.setState({signature:content.signature})

    }

    async handleValidateSubmit(event){
        event.preventDefault();
        let body={data:this.state.data,privateKey:this.state.privateKey}

        const rawResponse = await fetch(`${this.ip}/sign/validate`, {
            method: 'POST',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(body)
        });
        const content = await rawResponse.json();
        console.log('hash content',content)
        this.setState({validateSignature:content.signature})
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
            
           <Form onSubmit={this.handleSignatureSubmit}>
           <div className="row">
           <div className="col-md-2">
           Data
           </div>
           <div className="col-md-8">
           <Form.Group controlId="blockData">
                   {/* <Form.Label>Response</Form.Label> */}
                   <Form.Control type="text" value={this.state.data} onChange={this.handleDataChange} />
               </Form.Group>
           </div>
           </div>
           <div className="row">
           <div className="col-md-2">
           Private Key
           </div>
           <div className="col-md-8">
           <Form.Control type="text" value={this.state.privateKey} onChange={this.handleKeyChange}  />
           
           </div>
           </div>
           <div className="row mt-2 mb-2">
           <div className="col-md-12 text-center">
           <Button variant="primary" type="submit">Signing</Button>
           
           </div>
           </div>
           </Form>
           

           <div className="row">
           <div className="col-md-2">
           Signature
           </div>
           <div className="col-md-8">
           <Form.Control as="textarea" rows="7" value={this.state.signature}  readOnly />
           
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
          <Form onSubmit={this.handleValidateSubmit}>
           
           <div className="row">
           <div className="col-md-2">
           Address
           </div>
           <div className="col-md-8">
           <Form.Group controlId="blockData">
                   {/* <Form.Label>Response</Form.Label> */}
                   <Form.Control type="text" value={this.state.address} onChange={this.handleAddressChange} />
               </Form.Group>
           </div>
           </div>
           <div className="row">
           <div className="col-md-2">
           Message
           </div>
           <div className="col-md-8">
           <Form.Control type="text" value={this.state.message} onChange={this.handleMessageChange}  />
           
           </div>
           </div>

           <div className="row mt-2 mb-2">
           <div className="col-md-12 text-center">
           <Button variant="primary" type="submit">Validate</Button>
           
           </div>
           </div>

           </Form>
           <div className="row">
           <div className="col-md-2">
           Signature
           </div>
           <div className="col-md-8">
           <Form.Control as="textarea" rows="7" value={this.state.validateSignature}  readOnly />
           
           </div>
           </div>

           
           </div>
         </div>
        );
    }
}

export default Signing;
