import React from "react";

const Hello = () => {
  return (
    // JSX中，class属性必须要被变成className，因为class是javascript的关键字
    <div id="hello" className="dummy">
      <h1>Hello ???</h1>
    </div>
  );

  // return React.createElement('div', { id: 'hello', className: 'dummy'}, React.createElement('h1', null, 'Hello ???'))
};

export default Hello;
