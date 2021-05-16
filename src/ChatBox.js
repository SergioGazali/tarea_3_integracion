
function ChatBox (props) {
  const messages = props.messages;
  const nickname = props.nickname;
  
  return (
    <div className="chatListDiv" >
              <ul className="messages-list">
                {messages.map((message, i) => {
                  const date = new Date(message.date);

                  const day = date.getDate()
                  const month = date.getMonth() + 1
                  const year = date.getFullYear()
                  return (
                  <li
                    className={message.name == nickname ? "mine" : "not_mine"}
                    key={i}
                  >
                    <p className="messageName">NAME: {message.name}{/* </p> */}<br /> 
                    {/* <p className="messageDate"> */}DATE: {date[Symbol.toPrimitive]('string').split("GMT")[0]}{/* </p> */}<br />
                    {/* <p className="messageMessage"> */}MESSAGE: {message.message}.</p><br /><br />
                  </li>
                )})}
              </ul>
            </div>
  )
}

export default ChatBox;