import logo from './logo.svg';
import './App.css';
import useChat from "./useSocket";

function App() {
  const { flights, positions, state, sendMessage } = useChat(); 
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
              {flight.code}; {flight.airline}; ({state[flight.code] && state[flight.code][0][0]}; {state[flight.code] && state[flight.code][0][1]})
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
