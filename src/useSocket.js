import { useEffect, useReducer, useRef, useState } from "react";
import socketIOClient from "socket.io-client";

// CODIGO MODIFICADO, OBTENIDO DE: https://medium.com/swlh/build-a-real-time-chat-app-with-react-hooks-and-socket-io-4859c9afecb0

const NEW_CHAT_MESSAGE_EVENT = "newChatMessage"; // Name of the event
const SOCKET_SERVER_URL = "wss://tarea-3-websocket.2021-1.tallerdeintegracion.cl";//flights

const useChat = () => {
  function reducer(state, action) {
    if (Object.keys(state).includes(action.payload.code)) {
      return {...state, [action.payload.code]:[...state[action.payload.code], action.payload.position]}
    } else {
      return {...state, [action.payload.code]:[action.payload.position]}
    }
  }
  //const [messages, setMessages] = useState([]); // Sent and received messages
  const [messages, setMessages] = useState([]);
  const [flights, setFlights] = useState([]);
  const socketRef = useRef();
  const [positions, setPositions] = useState({"no_fly": [2.2, 4.3]});
  const [state, dispatch] = useReducer(reducer, {"no_fly": [1.1, 2.2]}, )
  useEffect(() => {
    
    // Creates a WebSocket connection
    socketRef.current = socketIOClient(SOCKET_SERVER_URL, {
      path: '/flights'
    });

    socketRef.current.emit("FLIGHTS");
    
    socketRef.current.on("CHAT", (incomingMessage) => {
      setMessages((messages) => [incomingMessage, ...messages]);
    });

    socketRef.current.on("FLIGHTS", (flights_list)=>{
      setFlights(flights_list);
      console.log("FLIGHTS!!::\n", flights_list)
    });
    socketRef.current.on("POSITION", (flight)=>{
      const code = flight.code;
      const position = flight.position;
      /* setPositions((flight) => {
        return {...position, [flight.code]:flight.position}
      }); */
      dispatch({type:'FlightPosition', payload:flight})
    });
    // Destroys the socket reference
    // when the connection is closed
    return () => {
      socketRef.current.disconnect();
    };
  }, []);

  // Sends a message to the server that
  // forwards it to all users in the same room
  const sendMessage = (messageBody, name) => {
    socketRef.current.emit("CHAT", {
      name: name,
      message: messageBody,
      /* senderId: socketRef.current.id, */
    });
  };

  return { flights, positions, state, messages, sendMessage };
};

export default useChat;