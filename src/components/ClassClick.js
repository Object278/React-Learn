import React, { Component } from "react";

class ClassClick extends Component {
  //在Eventhandler中使用this的时候关于this如何bind有点复杂
  clickHandler() {
    console.log("Clicked the button");
  }

  render() {
    return (
      <div>
        <button onClick={this.clickHandler}>Click me</button>
      </div>
    );
  }
}

export default ClassClick;
