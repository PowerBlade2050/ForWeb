import logo from './logo.svg';
import './App.scss';
import Header from './Header';

function App() {
  return (
    <div className="App">
      <header className="App-header">

        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
          <Header />
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React gregr
        </a>
      </header>
    </div>
  );
}

export default App;
