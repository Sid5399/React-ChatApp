import React from 'react'
import './Chat.css';
import {Avatar, IconButton} from '@material-ui/core';
import {AttachFile, MoreVert, SearchOutlined} from '@material-ui/icons';
import MicIcon from '@material-ui/icons/Mic';
import InsertEmoticonIcon from '@material-ui/icons/InsertEmoticon';
import SendIcon from '@material-ui/icons/Send';
import ExpandLessSharpIcon from '@material-ui/icons/ExpandLessSharp';
import AttachFileIcon from '@material-ui/icons/AttachFile';

function Chat() {
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
                      <button class="btn btn-secondary dropdown-toggle" type="button" id="dropdownMenuButton" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                        MORE
                      </button>
                      <div class="dropdown-menu" aria-labelledby="dropdownMenuButton">
                        <a class="dropdown-item" href="#">Action</a>
                        <a class="dropdown-item" href="#">Another action</a>
                        <a class="dropdown-item" href="#">Something else here</a>
                      </div>
                    </div>
                    </li>
                </ul>
            </div>

            <div className="chat_window">

            <div className="chat_header">
                <Avatar/>

              <div className="chat_headerInfo">
                <h3 className="chat-room-name">Room name</h3>
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

              {/* Message1  */}
              <p className={`chat_message`}>
                <span className="chat_name">Sender</span>
                Message 1
                
                <span className="chat_timestamp">
                timestamp
                </span>
              </p>
            
              {/* Message2  */}
              <p className={`chat_message chat_receiver`}>
                <span className="chat_name">Sender</span>
                Message 2
                <span className="chat_timestamp">
                timestamp
                </span>
              </p>

              {/* Message3  */}
              <p className="chat_message">
                <span className="chat_name">Sender</span>
                Message 3
                <span className="chat_timestamp">
                timestamp
                </span>
              </p>
              
              {/* Message 4  */}
              <p className={`chat_message`}>
                <span className="chat_name">Sender</span>
                Message 4
                <span className="chat_timestamp">
                timestamp
                </span>
              </p>
            
              {/* Message 5  */}
              <p className={`chat_message`}>
                <span className="chat_name">Sender</span>
                Message 5
                <span className="chat_timestamp">
                timestamp
                </span>
              </p>

              {/* Message 6  */}
              <p className="chat_message">
                <span className="chat_name">Sender</span>
                Message 6
                <span className="chat_timestamp">
                timestamp
                </span>
              </p>
              
              {/* Message 7  */}
              <p className={`chat_message`}>
                <span className="chat_name">Sender</span>
                Message 7
                <span className="chat_timestamp">
                timestamp
                </span>
              </p>
            
              {/* Message 8  */}
              <p className={`chat_message`}>
                <span className="chat_name">Sender</span>
                Message 8
                <span className="chat_timestamp">
                timestamp
                </span>
              </p>

              
            </div>

            <div className="chat_footer">
              
              <form className="message_form">

                <button className="emoji_button">
                  <InsertEmoticonIcon />
                </button>
                  <input type="text" placeholder="Type a message" />
                  {/* <MicIcon /> */}
                  <button className="emoji_button2">
                  <AttachFileIcon />
                </button>
              </form>

              <button className="sendButton" type="submit"> <ExpandLessSharpIcon/> </button>     
              
            </div>

          </div>
        </div>
    )
}

export default Chat
