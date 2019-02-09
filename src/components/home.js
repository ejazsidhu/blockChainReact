import React, { Component } from 'react';

import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import InputGroup from 'react-bootstrap/InputGroup'

class Home extends Component {
    // responseData

    constructor(props) {
        super(props);
        this.state = { value: '',post:'' };

        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);

        this.handlePostSubmit = this.handlePostSubmit.bind(this);
        this.handlePostChange=this.handlePostChange.bind(this);
    }

    handleChange(event) {
        this.setState({ value: event.target.value });
    }

    handlePostChange(event) {
        this.setState({ post: event.target.value });
    }

    handlePostSubmit(event) {
        event.preventDefault();
        let body={"body":this.state.post};
        console.log( body)


    }

    async handleSubmit(event) {
        // alert('A name was submitted: ' + this.state.value);
        event.preventDefault();

        const response = await fetch('http://localhost:8000/block/' + this.state.value)
        const data = await response.json();
        this.setState({ hash: data.hash })
        this.setState({ body: data.body })
        this.setState({ time: data.time })
        this.setState({ height: data.height })
        this.setState({ previousBlockHash: data.previousBlockHash })

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
        if (this.state.hash) {
            data += 'Height:   ' + this.state.height;
            data += '\nTime:   ' + this.timeConverter(this.state.time);
            data += '\nBlock Hash:  ' + this.state.hash;
            data += '\nPrevious Block Hash:  ' + this.state.previousBlockHash;
            data += '\nBody: ' + this.state.body;


        }



        // console.log('rander data', data)

        return (

            <div>


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

                


            </div>

        );
    }



}

export default Home;