import React, { Component } from 'react';
import Form from 'react-bootstrap/Form'
import { Button } from 'react-bootstrap';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import axios from 'axios';

class addUser extends Component {
    constructor(props) {
        super(props);
        if (props.location.currentUser) {
            let currentUser = props.location.currentUser;

            this.state = {
                id: currentUser.id,
                name: currentUser.name,
                email: currentUser.email,
                password: currentUser.password
            }
        } else {
            this.state = {
                name: "",
                email: "",
                password: ""
            }
        }
        this.handleSubmit = this.handleSubmit.bind(this)
    }
    nameHandler = (event) => {
        this.setState({
            name: event.target.value
        })
    }
    emailHandler = (event) => {
        this.setState({
            email: event.target.value
        })
    }
    passwordHandler = (event) => {
        this.setState({
            password: event.target.value
        })
    }
    handleSubmit = (event) => {
        let currentUser = this.props.location.currentUser;

        let issEdit = currentUser ? true : false;
        const apiUrl = 'https://5eddf15de36dd000166c7bf8.mockapi.io/users/'
        if (issEdit) {
            axios.put(apiUrl + currentUser.id, this.state)
                .then((result) => {
                    console.log(result);

                    this.props.history.push('/user')
                });
        }
        else {
            axios.post(apiUrl, this.state)
                .then((result) => {
                    this.props.history.push('/user')
                });
        }
        event.preventDefault()
    }

    render() {
        return (<div >
            <Row>
                <Col xs={6}>
                    <Form onSubmit={this.handleSubmit}>
                        <Form.Group controlId="formBasicName">
                            <Form.Label>Name</Form.Label>
                            <Form.Control type="type" name="name" placeholder="Enter name"
                                value={this.state.name} onChange={this.nameHandler} required />
                        </Form.Group>
                        <Form.Group controlId="formBasicEmail">
                            <Form.Label>Email address</Form.Label>
                            <Form.Control type="email" name="email" placeholder="Enter email"
                                value={this.state.email} onChange={this.emailHandler} required />
                            <Form.Text className="text-muted">
                                We'll never share your email with anyone else.
                             </Form.Text>
                        </Form.Group>

                        <Form.Group controlId="formBasicPassword">
                            <Form.Label>Password</Form.Label>
                            <Form.Control type="password" name="password" placeholder="Password"
                                onChange={this.passwordHandler} value={this.state.password} required />
                        </Form.Group>
                        <Button variant="primary" type="submit" value="Submit">
                            Submit
                        </Button>
                    </Form>
                </Col>
            </Row>
        </div>);
    }
}

export default addUser;

