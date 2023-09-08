import React from "react";

//ES6 Destructure 解包特性，也可以直接用{ name, heroName }替换
//参数里的props
const Greet = (props) => {
  const { name, heroName } = props;
  //函数参数访问props
  //useState Hook访问state
  console.log(name, heroName);
  return (
    <div>
      <h1>Hello {name.name}</h1>
      {name.children}
    </div>
  );
  // props.children 可以列出这个标签的子标签（如果有的话，如果没有的话就不会显示）
};

//export default 代表别的类里面可以以任何名字引入这个component
export default Greet;
