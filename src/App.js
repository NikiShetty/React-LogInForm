import React, { Component } from "react";
import AddOn from "./AddOn";
import Display from "./Display";

class App extends Component {
  state = {
    data: [],
  };

  addInfo = (childToParent) => {
    let data = [...this.state.data, childToParent];
    this.setState({
      data
    });
  }

  render() {
    return (
      <div>
        <h1>Login Form</h1>
        <AddOn addInfo={this.addInfo} />
        <Display sendData={this.state.data} />
      </div>
    );
  }
}
export default App;
