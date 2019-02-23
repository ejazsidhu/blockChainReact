import React, { Component } from 'react';
import Form from 'react-bootstrap/Form';
import { PageHeading } from "./pageHeading";
class Hashing extends Component {


    constructor(props){
        super(props);
        this.state={value:''};
        this.handleChange = this.handleChange.bind(this);

    }

    async handleChange(event) {
        this.setState({ value: event.target.value });
        let body={data:event.target.value}

        const rawResponse = await fetch('http://localhost:8000/gateway/hash', {
            method: 'POST',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(body)
        });
        const content = await rawResponse.json();
        console.log('hash content',content)
        
        this.setState({hashing:content.hash});
    }

    handleSubmit(event){

    }
    render() {
        
        return (
            <div className="container">
            <PageHeading heading="SHA256 Hash" subHeading="Generate SHA256 hash of data"/>
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
            <Form.Control type="text" value={this.state.hashing} disabled />
            
            </div>
            </div>
            
            </div>
            </div>
        );
    }
}
export default Hashing;
