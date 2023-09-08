import React, { Component } from "react";

class Message extends Component {
  //Class component中使用props可以通过预留的this.props
  //props is immutable, 不可变化props中的值
  //this.state访问state

  constructor() {
    super();
    this.state = {
      message: "Welcome visitor.",
    };
  }

  changeMessage() {
    //修改整个state，不是state里的一个key-value pair
    this.setState({
      message: "Thank you for subscribing.",
    });
  }

  render() {
    return (
      <div>
        <h1>{this.state.message}</h1>
        <button
          onClick={() => {
            this.changeMessage();
          }}
        >
          Subscribe
        </button>
      </div>
    );
  }
}

export default Message;
