import React from "react";

function FunctionClick() {
  //You can define function inside a function in javascript
  function clickHandler() {
    console.log("Button clicked");
  }
  //传递给onClick的一定是一个function，不是一个function call
  //如果function call的结果是一个function，应该也可以
  return (
    <div>
      <button onClick={clickHandler}></button>
    </div>
  );
}

export default FunctionClick;
