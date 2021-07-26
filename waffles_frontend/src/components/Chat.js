import React from 'react'
import './Chat.css';
import {Avatar, IconButton} from '@material-ui/core';
import {AttachFile, MoreVert, SearchOutlined} from '@material-ui/icons';
// import MicIcon from '@material-ui/icons/Mic';
import InsertEmoticonIcon from '@material-ui/icons/InsertEmoticon';
// import SendIcon from '@material-ui/icons/Send';
import ExpandLessSharpIcon from '@material-ui/icons/ExpandLessSharp';
import AttachFileIcon from '@material-ui/icons/AttachFile';
// import { Button } from 'react-bootstrap';
import Dropdown from 'react-bootstrap/Dropdown';
import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import db from '../firebase';


function Chat() {
  const [seed,setSeed] = useState("");
  const [input, setInput] = useState("");
  const {roomId} = useParams();
  const [roomName, setRoomName] = useState("");
  const [messages, setMessages] = useState([]);
  const [{user}, dispatch] = useStateValue();

  useEffect(()=>{
    if(roomId){
        db.collection('Rooms').doc(roomId).onSnapshot(snapshot => {
            setRoomName(snapshot.data().name);
        });

        console.log(roomName)
        db.collection('Rooms').doc(roomId).collection("messages").orderBy("timestamp","asc").onSnapshot(snapshot => {
            setMessages(snapshot.docs.map(doc => doc.data()))
        });

    }
},[roomId])

  useEffect( ()=> {
    setSeed(Math.floor(Math.random() *5000))
  },[roomId])

  const sendMessage = (e) => {
    e.preventDefault();
    console.log(" You typed >>>", input);

    setInput("");
  }

  const sendMessage_two = (e) => {
    e.preventDefault();
    console.log(" You typed >>>", input);

    setInput("");
  }

    return (
        <div className="chat">
            <div className="app_bar">
                <ul className="options_list">
                    <li>HOME
                      {/* <hr/> */}
                    </li>
                    <li>CONTACTS</li>
                    <li>SETTINGS</li>
                    <li>
                    <div class="dropdown">
                            <Dropdown className="app_bar_dropdown">
                              <Dropdown.Toggle variant="success">
                                Menu
                              </Dropdown.Toggle>
                              <Dropdown.Menu>
                                <Dropdown.Item href="#">
                                  Home Page
                                </Dropdown.Item>
                                <Dropdown.Item href="#">
                                  Settings
                                </Dropdown.Item>
                                <Dropdown.Item href="#">
                                  Logout
                                </Dropdown.Item>
                              </Dropdown.Menu>
                            </Dropdown>
                    </div>
                    </li>
                </ul>
            </div>

            <div className="chat_window">

            <div className="chat_header">
                <Avatar src={`https://avatars.dicebear.com/api/human/${seed}.svg`} />

              <div className="chat_headerInfo">
                <h3 className="chat-room-name">{roomName}</h3>
                <p className="chat-room-last-seen">Last seen at...</p>
              </div>

              <div className="chat_headerRight">
                <IconButton>
                  <SearchOutlined/>
                </IconButton>
                <IconButton>
                  <AttachFile/>
                </IconButton>
                <IconButton>
                  <MoreVert/>
                </IconButton>
              </div>
            </div>

            <div className="chat_body">

              {/* {console.log(messages)} */}

              {messages.map(message => (
                 <p className={`chat_message`}>
                 <span className="chat_name">{message.name}</span>
                 {message.message}
                 <span className="chat_timestamp">
                 {new Date(messages.timestamp?.toDate()).toUTCString()}
                 </span>
               </p>
              ))}
             

            </div>

            <div className="chat_footer">
              
              <form className="message_form">

                <button className="emoji_button">
                  <InsertEmoticonIcon />
                </button>
                  <input value={input} onChange={(e) => setInput(e.target.value)} type="text" placeholder="Type a message" />
                  {/* <MicIcon /> */}
                  <button className="emoji_button2">
                  <AttachFileIcon />
                </button>
                <button className="form_sendButton" type="submit" onClick={sendMessage_two}>
                  Send
                </button >
              </form>

              <button className="sendButton" onClick={sendMessage}> <ExpandLessSharpIcon/> </button>     
              
            </div>

          </div>
        </div>
    )
}

export default Chat
