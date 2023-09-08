import logo from "./logo.svg";
import "./App.css";
import Greet from "./components/Greet";
import Welcome from "./components/Welcome";
import Hello from "./components/Hello";
import Counter from "./components/Counter";
import FunctionClick from "./components/FunctionClick";
import ClassClick from "./components/ClassClick";
import EventBind from "./components/EventBind";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>Hello World!</p>
        <Greet name="Bruce" heroName="???">
          <p>This</p>
        </Greet>
        <Welcome name="Clark" heroName="???"></Welcome>
        <Hello name="Diana"></Hello>
        <Counter></Counter>
        <FunctionClick></FunctionClick>
        <ClassClick></ClassClick>
        <EventBind></EventBind>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
