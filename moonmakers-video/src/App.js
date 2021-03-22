import logo from "./logo.svg";
import "./App.css";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>

        <h1> Hello world </h1>

        <p> welcome to react </p>

        <a href="https://moonmakers.org"> Link </a>

        <div>
          <h2> hello react </h2>
        </div>

        <div className="container">
          <h2 className="title"> hello react </h2>
        </div>
      </header>
    </div>
  );
}

export default App;
