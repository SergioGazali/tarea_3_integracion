import logo from './logo.svg';
import './App.css';
import useChat from "./useSocket";
import { useState } from "react";


function App() {
  const { flights, positions, state, messages, sendMessage } = useChat(); 
  const [newMessage, setNewMessage] = useState("");
  const [prev_nickname, setPrevNickname] = useState("");
  const [nickname, setNickname] = useState("");

  const handleNewNicknameChange = (event) => {
    setPrevNickname(event.target.value);
  };
  const handleNewNickname = () => {
    setNickname(prev_nickname);
  };
  
  const handleNewMessageChange = (event) => {
    setNewMessage(event.target.value);
  };

  const handleSendMessage = () => {
    sendMessage(newMessage, nickname);
    setNewMessage("");
  };

  return (
    <div className="App">
      <header className="App-header">
        <h1>
          ✈✈👨‍✈️La app de los Vuelos.👨‍✈️✈✈
        </h1>
      
        <ol className="flights-list">
          {flights.map((flight, i) => (
            <li
              key={i}
            >
              {flight.code}; {flight.airline}; ({state[flight.code] && state[flight.code][0][0]}; {state[flight.code] && state[flight.code][0][1]})
            </li>
          ))}
        </ol>
        <h2>Chat</h2>
          <p>Nickname: {nickname}</p>
        <textarea
          value={prev_nickname}
          onChange={handleNewNicknameChange}
          placeholder="Set nickname..."
          className="nickname-input-field"
        />
        <button onClick={handleNewNickname} className="new-nickname-button">
          Set Nickname
        </button>
        <ul className="messages-list">
          {messages.map((message, i) => (
            <li
              className={message.name == nickname ? "mine" : "not_mine"}
              key={i}
            >
              NAME: {message.name}; DATE: {message.date}; MESSAGE: {message.message}.
            </li>
          ))}
        </ul>
        <textarea
          value={newMessage}
          onChange={handleNewMessageChange}
          placeholder="Write message..."
          className="new-message-input-field"
        />
        <button onClick={handleSendMessage} className="send-message-button">
          Send
        </button>
      </header>
    </div>
  );
}

export default App;
