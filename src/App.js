import logo from './logo.svg';
import './App.css';
import useChat from "./useSocket";

function App() {
  const { flights, sendMessage } = useChat(); 
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Whats up man.
        </p>
        <ol className="messages-list">
          {flights.map((flight, i) => (
            <li
              key={i}
            >
              {flight.code}; {flight.airline}; 
            </li>
          ))}
        </ol>
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
