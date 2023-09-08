import React, { Component } from "react";

class Welcome extends Component {
  //Class component中使用props可以通过预留的this.props
  //props is immutable, 不可变化props中的值
  //this.state访问state

  render() {
    const { name, heroName } = this.props;
    return (
      <div>
        <h1>Class Component {this.props.name}</h1>
      </div>
    );
  }
}

export default Welcome;
