import React, { Component } from "react";

class EventBind extends Component {
  constructor(props) {
    super(props);

    this.state = {
      message: "Hello",
    };

    //bind方法生成一个固定了this的新函数，函数的功能和之前一样
    //但是固定了this变量
    this.clickHandler = this.clickHandler.bind(this);
  }

  clickHandler() {
    //直接使用this，这个this并没有连接在当前类上
    //在js严格模式（目前环境）之下，这个this被bind到undefined
    //因为调用这个方法的是整个页面最高级的实体，不是这个类的一个实例
    //所以获取不到setState方法
    //根源是你给JSX中的onClick只是单独的一个方法，没有任何的上下文
    // this.setState({
    //   message: "Good Bye",
    // });
    // console.log(this);
    //方法1：传递给onClick时bind上下文的this
    //onClick={this.clickHandler}.bind(this)
    //  缺陷：每次这个component刷新，都会生成一个新的clickHandler，影响性能
    //  特别是高度nested的component
    //
    //方法2：在render中使用arrow function创建一个函数
    //onClick={() => this.clickHandler()}
    //  缺陷：某些情况下有性能影响，特别是高度nested的component
    //
    //方法3：最常用，官方
    //在constructor中对EventHandler进行bind
    //binding只会发生一次，没啥性能影响
    //
    //方法4：在定义类内方法时使用arrow function，可能是因为arrow function
    //的闭包能解决问题，没啥应能影响
    //clickHandler = () => {
    //  this.setState({
    //    message: 'Goodbye!'
    //  })
    //}
    //
    //方法3和4没有方法2那么好给EventHandler传递参数
    this.setState({
      message: "Good Bye",
    });
    console.log(this);
  }

  render() {
    return (
      <div>
        <div>{this.state.message}</div>
        <button onClick={this.clickHandler}>Click</button>
      </div>
    );
  }
}

export default EventBind;
