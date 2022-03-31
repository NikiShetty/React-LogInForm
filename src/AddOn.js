import React, { Component } from "react";
import Display from "./Display";

class AddOn extends Component {
  state = {
    email: "",
    password: "",
    formvalid: false,
    error: {
      emailError: "",
      passwordError: "",
      formError: "",
    },
  };

  emailValidation = (email) => {
    let formvalid = this.state.formvalid;
    let emailError = this.state.error.emailError;
    let error = this.state.error;
    let pattern = /^\w+@[a-zA-Z_]+?\.[a-zA-Z]{2,3}$/;

    if (email.trim() == "") {
      emailError = "Please Enter your email Address";
      formvalid = false;
    }
    // else if (!(pattern.test(email))) {
    //     emailError = "Please enter valid email";
    //   formvalid = false;
    // }
    else {
      formvalid = true;
      emailError = "";
    }

    this.setState({
      email: email,
      error: { ...error, emailError },
      formvalid,
    });
    return formvalid;
  };

  passwordValidation = (password) => {
    let formvalid = this.state.formvalid;
    let passwordError = this.state.error.passwordError;
    let error = this.state.error;
    let pattern = /^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{8,}$/;

    if (password.trim() == "") {
      passwordError = "Please Enter your Password";
      formvalid = false;
    }
    //else if (!(pattern.test(password))) {
    //   passwordError = "password must have minimum 8 characters, at least one letter and one number";
    //   formvalid = false;
    // }
    else {
      formvalid = true;
      passwordError = "";
    }

    this.setState({
      password: password,
      error: { ...error, passwordError },
      formvalid,
    });
    return formvalid;
  };

  handleChange = (e) => {
    console.log(e);
    if (e.target.id == "email") {
      this.emailValidation(e.target.value);
    }
    if (e.target.id == "password") {
      this.passwordValidation(e.target.value);
    }
  };

  handleSubmit = (e) => {
    e.preventDefault();
    let formError = this.state.error.formError;

    if (
      this.emailValidation(this.state.email) &&
      this.passwordValidation(this.state.password) &&
      this.state.formvalid === true
    ) {
      this.props.addInfo(this.state);
      this.setState({
        email: "",
        password: "",
        formError: "",
      });
    } else {
      let formError = this.state.error.formError;
      formError = "Please check all the fields";
      this.setState({
        error: { ...this.state.error, formError },
      });
    }
  };

  render() {
    return (
      <div>
        <form onSubmit={this.handleSubmit}>
          <label>Enter your email Address : </label>
          <input
            id="email"
            type="text"
            onChange={this.handleChange}
            value={this.state.email}
          ></input>
          <p>{this.state.error.emailError}</p>
          <br></br>
          <br></br>
          <label>Enter your Password : </label>
          <input
            id="password"
            type="password"
            onChange={this.handleChange}
            value={this.state.password}
          ></input>
          <p>{this.state.error.passwordError}</p>
          <p>{this.state.error.formError}</p>
          <br></br>
          <br></br>
          <button value="submit">Submit</button>
        </form>
      </div>
    );
  }
}

export default AddOn;
