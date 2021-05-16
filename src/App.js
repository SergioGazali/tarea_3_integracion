import './App.css';
import useChat from "./useSocket";
import { useState, useEffect, useRef } from "react";
import { MapContainer, Marker, Tooltip, TileLayer, Polyline, CircleMarker } from 'react-leaflet'
import FlightInfo from './FlightInfo';
import ChatBox from './ChatBox';

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
      </header>
        <div className="mainDiv">
          <div className="leftDiv">
          <div id="mapDiv">
              <MapContainer center={[51.505, -0.09]} zoom={1} scrollWheelZoom={false}>
              <TileLayer
                attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
                url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
              />
                {flights.map((flight, i) => {
                  if (state[flight.code]) {
                    return (
                    <>
                    <Marker key={i} position={state[flight.code][state[flight.code].length - 1]}>
                      <Tooltip>
                        {flight.code}
                      </Tooltip>
                    </Marker>
                    <Polyline pathOptions={{ color: 'white' }} positions={[flight.origin, flight.destination]}>
                      <Tooltip>
                        {flight.code} planned path
                      </Tooltip>
                    </Polyline>
                    <Polyline pathOptions={{ color: 'green' }} positions={state[flight.code]}>
                      <Tooltip>
                        {flight.code} real path
                      </Tooltip>
                    </Polyline>
                    <CircleMarker
                      center={flight.origin}
                      pathOptions={{ color: 'blue' }}
                      radius={(1 + i/4) * 7}>
                      <Tooltip permanent>{flight.code} Origin</Tooltip>
                    </CircleMarker>
                    <CircleMarker
                      center={flight.destination}
                      pathOptions={{ color: 'red' }}
                      radius={(1 + i/4) * 7}>
                      <Tooltip permanent>{flight.code} Destination</Tooltip>
                    </CircleMarker>
                    </>
                    )
                  } /* else {
                    return (<></>)
                  } */
                })}
              </MapContainer>
            </div>
            <div id="infoDiv">
              {flights.map((flight, i) => (
                  <FlightInfo
                    flight={flight}
                  />
              ))}
            </div>
          </div>
          <div className="chatDiv">
            <h3 id="chatTitle">Chat</h3>
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
            
            <ChatBox messages={messages} nickname={nickname} />
            <textarea
              value={newMessage}
              onChange={handleNewMessageChange}
              placeholder="Write message..."
              className="new-message-input-field"
            />
            <button onClick={handleSendMessage} className="send-message-button">
              Send
            </button>
          </div>
        </div>
      {/* </header> */}
    </div>
  );
}

export default App;
