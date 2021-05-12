import { useEffect, useRef, useState } from "react";
import socketIOClient from "socket.io-client";

// CODIGO MODIFICADO, OBTENIDO DE: https://medium.com/swlh/build-a-real-time-chat-app-with-react-hooks-and-socket-io-4859c9afecb0

const NEW_CHAT_MESSAGE_EVENT = "newChatMessage"; // Name of the event
const SOCKET_SERVER_URL = "wss://tarea-3-websocket.2021-1.tallerdeintegracion.cl";//flights

const useChat = () => {
  //const [messages, setMessages] = useState([]); // Sent and received messages
  const [flights, setFlights] = useState([]);
  const socketRef = useRef();

  useEffect(() => {
    
    // Creates a WebSocket connection
    socketRef.current = socketIOClient(SOCKET_SERVER_URL, {
      path: '/flights'
    });

    socketRef.current.emit("FLIGHTS");
    
    // Listens for incoming messages
    /* socketRef.current.on(NEW_CHAT_MESSAGE_EVENT, (message) => {
      const incomingMessage = {
        ...message,
        ownedByCurrentUser: message.senderId === socketRef.current.id,
      };
      setMessages((messages) => [...messages, incomingMessage]);
    }); */

    socketRef.current.on("FLIGHTS", (flights_list)=>{
      console.log(flights_list);
      setFlights(flights_list);
      console.log("FLIGHTS!!::\n", flights)
    });
    
    // Destroys the socket reference
    // when the connection is closed
    return () => {
      socketRef.current.disconnect();
    };
  }, []);

  // Sends a message to the server that
  // forwards it to all users in the same room
  const sendMessage = (messageBody) => {
    socketRef.current.emit(NEW_CHAT_MESSAGE_EVENT, {
      body: messageBody,
      senderId: socketRef.current.id,
    });
  };

  return { flights, sendMessage };
};

export default useChat;