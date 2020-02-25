import React from "react";
import logo from "./logo.svg";
import "./App.css";
import User from "./components/User";

class App extends React.Component {
  state = {
    backColor: "yellow",
    userA: {
      name: "Harper",
      avatar:
        "https://www.refreshmiami.com/wp-content/uploads/2018/07/55085_logo-ironhack.png"
    },
    userB: {
      name: "Anna",
      avatar:
        "https://s3.amazonaws.com/owler-image/logo/ironhack_owler_20180828_221413_original.png"
    },
    clickCount: 0
  };

  clickHandler = () => {
    const updatedCount = this.state.clickCount + 1;

    // Update the state
    this.setState({ clickCount: updatedCount });

    // WRONG - never change the state directly
    // this.state.clickCount = updatedCount;
  };

  render() {
    return (
      <div className="App">
        <h3>Click Count: {this.state.clickCount} </h3>
        <button onClick={this.clickHandler}>Click me</button>

        <User
          theColor={this.state.backColor}
          firstName={this.state.userA.name}
          image={this.state.userA.avatar}
        />

        <User
          firstName={this.state.userB.name}
          image={this.state.userB.avatar}
        />
      </div>
    );
  }
}

export default App;
