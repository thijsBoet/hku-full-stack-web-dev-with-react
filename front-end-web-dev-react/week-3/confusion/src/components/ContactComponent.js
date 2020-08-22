import React, { Component } from "react";
import {
  Breadcrumb,
  BreadcrumbItem,
  Button,
  Form,
  FormGroup,
  Label,
  Input,
  Col,
  FormFeedback
} from "reactstrap";
import { Link } from "react-router-dom";

class Contact extends Component {
  constructor(props) {
    super(props);

    this.state = {
      firstname: "",
      lastname: "",
      telnumber: "",
      email: "",
      agree: false,
      contactType: "Tel.",
      message: "",
      touched: {
        firstname: false,
        lastname: false,
        telnumber: false,
        email: false,
      }
    };
    this.handleInputChange = this.handleInputChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleBlur = this.handleBlur.bind(this);
  }

  handleInputChange(event) {
    const target = event.target;
    const value = target.type === 'checkbox'
      ? target.checked
      : target.value
    const name = target.name;

    this.setState({
      [name]: value
    })
  }

  handleSubmit(event) {
    event.preventDefault();
    console.log("Current State is: " + JSON.stringify(this.state));
    
  }

  handleBlur = (field) => (event) => {
    this.setState({
      touched: { ...this.state.touched, [field]: true }
    });
  }

  validate(firstname, lastname, telnumber, email) {
    const errors = {
      firstname: "",
      lastname: "",
      telnumber: "",
      email: "",
    };
    if (this.state.touched.firstname && firstname.length < 3)
      errors.firstname = "First Name should be three letters or more";
    else if (this.state.touched.firstname && firstname.length > 10)
           errors.firstname = "First Name should be less then ten letters";
    
    if (this.state.touched.lastname && lastname.length < 3)
      errors.lastname = "First Name should be three letters or more";
    else if (this.state.touched.lastname && lastname.length > 10)
      errors.lastname = "First Name should be less then ten letters";
    
    const reg = /^\d+$/;
    if (this.state.touched.telnumber && !reg.test(telnumber))
      errors.telnumber = "Telephone number should only contain numbers";
    else if (this.state.touched.telnumber && telnumber.length !== 10)
      errors.telnumber = "Telephone number should have ten digits";
    
    if (this.state.touched.email && email.split('').filter(digit => digit === '@').length !== 1)
      errors.email = "Email should contain an @ symbol";
    else if (this.state.touched.email && email.split('').filter(digit => digit === '.').length !== 1)
      errors.email = "Email should contain a dot . symbol";
    
    return errors;
  }

  render() {
    const errors = this.validate(
      this.state.firstname,
      this.state.lastname,
      this.state.telnumber,
      this.state.email
    );

    return (
      <div className="container">
        <div className="row">
          <Breadcrumb>
            <BreadcrumbItem>
              <Link to="/home">Home</Link>
            </BreadcrumbItem>
            <BreadcrumbItem active>Contact Us</BreadcrumbItem>
          </Breadcrumb>
          <div className="col-12">
            <h3>Contact Us</h3>
            <hr />
          </div>
        </div>

        <div className="row row-content">
          <div className="col-12">
            <h3>Location Information</h3>
          </div>
          <div className="col-12 col-sm-4 offset-sm-1">
            <h5>Our Address</h5>
            <address>
              333, Clear Water Bay Road
              <br />
              Clear Kadapa Bay, Andhra Pradesh
              <br />
              Indian <br />
              <i className="fa fa-phone"></i>: +9052507933
              <br />
              <i className="fa fa-fax"></i>: +9052507933
              <br />
              <i className="fa fa-envelope"></i>:{" "}
              <a href="mailto:confusion@food.net">confusion@food.net</a>
            </address>
          </div>
          <div className="col-12 col-sm-6 offset-sm-1">
            <h5>Map of our Location</h5>
          </div>
          <div className="col-12 col-sm-11 offset-sm-1">
            <div className="btn-group" role="group">
              <a
                role="button"
                className="btn btn-primary"
                href="tel:+9052507933"
              >
                <i className="fa fa-phone"></i> Call
              </a>
              <a role="button" className="btn btn-info" href="tel:+9052507933">
                <i className="fa fa-skype"></i> Skype
              </a>
              <a
                role="button"
                className="btn btn-success"
                href="mailto:gkrajareddy@gmail.com"
              >
                <i className="fa fa-envelope-o"></i> Email
              </a>
            </div>
          </div>
        </div>
        <div className="row row-content">
          <div className="col-12">
            <h3>Send us Your Feedback</h3>
          </div>
          <div className="col-12 col-md-9">
            <Form onSubmit={this.handleSubmit}>
              <FormGroup row>
                <Label htmlFor="firstname" md={2}>
                  First Name
                </Label>
                <Col md={10}>
                  <Input
                    type="text"
                    id="firstname"
                    name="firstname"
                    placeholder="John"
                    value={this.state.firstname}
                    valid={errors.firstname === ""}
                    invalid={errors.firstname !== ""}
                    onBlur={this.handleBlur("firstname")}
                    onChange={this.handleInputChange}
                  />
                  <FormFeedback>{errors.firstname}</FormFeedback>
                </Col>
              </FormGroup>
              <FormGroup row>
                <Label htmlFor="lastname" md={2}>
                  Last Name
                </Label>
                <Col md={10}>
                  <Input
                    type="text"
                    id="lastname"
                    name="lastname"
                    placeholder="Doe"
                    value={this.state.lastname}
                    valid={errors.lastname === ""}
                    invalid={errors.lastname !== ""}
                    onBlur={this.handleBlur("lastname")}
                    onChange={this.handleInputChange}
                  />
                  <FormFeedback>{errors.lastname}</FormFeedback>
                </Col>
              </FormGroup>
              <FormGroup row>
                <Label htmlFor="telnumber" md={2}>
                  Contact Tel.
                </Label>
                <Col md={10}>
                  <Input
                    type="tel"
                    id="telnumber"
                    name="telnumber"
                    placeholder="555-5555-5555"
                    value={this.state.telnumber}
                    valid={errors.telnumber === ""}
                    invalid={errors.telnumber !== ""}
                    onBlur={this.handleBlur("telnumber")}
                    onChange={this.handleInputChange}
                  />
                  <FormFeedback>{errors.telnumber}</FormFeedback>
                </Col>
              </FormGroup>
              <FormGroup row>
                <Label htmlFor="email" md={2}>
                  Email
                </Label>
                <Col md={10}>
                  <Input
                    type="email"
                    id="email"
                    name="email"
                    placeholder="john.doe@email.com"
                    value={this.state.email}
                    valid={errors.email === ""}
                    invalid={errors.email !== ""}
                    onBlur={this.handleBlur("email")}
                    onChange={this.handleInputChange}
                  />
                  <FormFeedback>{errors.email}</FormFeedback>
                </Col>
              </FormGroup>
              <FormGroup row>
                <Col md={{ size: 6, offset: 2 }}>
                  <FormGroup check>
                    <Label check>
                      <Input
                        type="checkbox"
                        name="agree"
                        checked={this.state.agree}
                        onChange={this.handleInputChange}
                      />{" "}
                      May we contact you?
                    </Label>
                  </FormGroup>
                </Col>
                <Col md={{ size: 3, offset: 1 }}>
                  <Input
                    type="select"
                    name="contactType"
                    value={this.state.contactType}
                    onChange={this.handleInputChange}
                  >
                    <option>Telephone</option>
                    <option>Email</option>
                  </Input>
                </Col>
              </FormGroup>
              <FormGroup row>
                <Label htmlFor="message" md={2}>
                  Your Feedback
                </Label>
                <Col md={10}>
                  <Input
                    type="textarea"
                    id="message"
                    name="message"
                    rows="12"
                    value={this.state.message}
                    onChange={this.handleInputChange}
                  ></Input>
                </Col>
              </FormGroup>
              <FormGroup row>
                <Col md={{ size: 10, offset: 2 }}>
                  <Button type="submit" color="primary">
                    Send Feedback
                  </Button>
                </Col>
              </FormGroup>
            </Form>
          </div>
        </div>
      </div>
    );
  }
}

export default Contact;
