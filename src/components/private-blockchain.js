import React, { Component } from 'react';

import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import InputGroup from 'react-bootstrap/InputGroup'

import { PageHeading } from "./pageHeading";

class PrivateBlockChain extends Component {
    // responseData

    constructor(props) {
        super(props);
        this.state = { value: '', post: '' };

        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);

        this.handlePostSubmit = this.handlePostSubmit.bind(this);
        this.handlePostChange = this.handlePostChange.bind(this);
    }

    handleChange(event) {
        this.setState({ value: event.target.value });
    }

    handlePostChange(event) {
        this.setState({ post: event.target.value });
    }

    async handlePostSubmit(event) {
        event.preventDefault();
        let body = { "body": this.state.post };
        console.log(body);

        const rawResponse = await fetch('http://localhost:8000/block', {
            method: 'POST',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(body)
        });
        const content = await rawResponse.json();

        console.log('post response', content.hash);
        this.setState({ hash1: content.hash })
        this.setState({ body1: content.body })
        this.setState({ time1: content.time })
        this.setState({ height1: content.height })
        this.setState({ previousBlockHash1: content.previousBlockHash })


    }

    async handleSubmit(event) {
        // alert('A name was submitted: ' + this.state.value);
        event.preventDefault();

        const response = await fetch('http://localhost:8000/block/' + this.state.value)
        const data = await response.json();
        this.setState({ hash: data.hash });
        this.setState({ body: data.body });
        this.setState({ time: data.time });
        this.setState({ height: data.height });
        this.setState({ previousBlockHash: data.previousBlockHash });

        this.state.hash1 = null

    }

    timeConverter(UNIX_timestamp) {
        var a = new Date(UNIX_timestamp * 1000);
        var months = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];
        var year = a.getFullYear();
        var month = months[a.getMonth()];
        var date = a.getDate();
        var hour = a.getHours();
        var min = a.getMinutes();
        var sec = a.getSeconds();
        var time = date + ' ' + month + ' ' + year + ' ' + hour + ':' + min + ':' + sec;
        return time;
    }

    render() {
        var data = '';
        var responseData = ''
        if (this.state.hash) {
            data += 'Height:   ' + this.state.height;
            data += '\nTime:   ' + this.timeConverter(this.state.time);
            data += '\nBlock Hash:  ' + this.state.hash;
            data += '\nPrevious Block Hash:  ' + this.state.previousBlockHash;
            data += '\nBody: ' + this.state.body;
        }
        if (this.state.hash1) {
            responseData += 'Height:   ' + this.state.height1;
            responseData += '\nTime:   ' + this.timeConverter(this.state.time1);
            responseData += '\nBlock Hash:  ' + this.state.hash1;
            responseData += '\nPrevious Block Hash:  ' + this.state.previousBlockHash1;
            responseData += '\nBody: ' + this.state.body1;
        }





        // console.log('rander data', data)

        return (

            <div className="container">
            <PageHeading heading="Private Blockchain" subHeading="Generate blockchain"/>


                <Form onSubmit={this.handleSubmit}>
                    <Form.Label><h5>Add New Block</h5>  </Form.Label>
                    <InputGroup className="mb-3">

                        <Form.Control type="number" value={this.state.value} onChange={this.handleChange} />

                        <InputGroup.Append>
                            <Button variant="primary" type="submit">Get Block</Button>
                        </InputGroup.Append>
                    </InputGroup>

                </Form>

                <Form.Group controlId="blockData">
                    <Form.Label>Block Data</Form.Label>
                    <Form.Control as="textarea" rows="5" value={data} />
                </Form.Group>
                {/* <hr> */}
                <Form onSubmit={this.handlePostSubmit}>
                    <Form.Label><h5>Add New Block</h5>  </Form.Label>
                    <InputGroup className="mb-3">

                        <Form.Control type="text" value={this.state.post} onChange={this.handlePostChange} />

                        <InputGroup.Append>
                            <Button variant="primary" type="submit">Add Block</Button>
                        </InputGroup.Append>
                    </InputGroup>

                </Form>

                <Form.Group controlId="blockData">
                    <Form.Label>Response</Form.Label>
                    <Form.Control as="textarea" rows="5" value={responseData} />
                </Form.Group>




            </div>

        );
    }



}

export default PrivateBlockChain;