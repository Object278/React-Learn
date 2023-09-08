import React, { Component } from "react";

class Counter extends Component {
  constructor(props) {
    super(props);

    this.state = {
      count: 0,
    };
  }

  increment() {
    //只有调用this.setState才会让UI重新渲染
    //直接修改count也可以，但是不会显示出来
    // this.setState({ count: this.state.count + 1 }, () => {
    //   console.log("callback value", this.state.count);
    // });
    //setState和它下面的代码执行是异步的，可能state还没有更改完
    //下面的代码就执行了，为了确保执行顺序，可以给setState传一个call back 函数
    //callback是一个箭头函数
    this.setState(
      (prevState) => {
        return { count: prevState.count + 1 };
      },
      () => {
        console.log("callback value", this.state.count);
      }
    );
    console.log("Value before callback:", this.state.count);
  }

  incermentFive() {
    //IMPORTANT
    //React会整合多个calls of setState函数为一个来提高性能
    //整合之后，五次increment只会让count + 1，因为count增加的值不同步
    //所以如果要根据前一步的state更改这一步的state，需要在setState里传入
    //一个函数来修改，函数参数是上一步的state，函数返回值是修改后的state
    this.increment();
    this.increment();
    this.increment();
    this.increment();
    this.increment();
  }

  render() {
    return (
      <div>
        <div>Count - {this.state.count}</div>
        <button onClick={() => this.increment()}>Increment</button>
      </div>
    );
  }
}

export default Counter;
