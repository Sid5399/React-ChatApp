import React, { useEffect, useState } from 'react'
import { Avatar } from '@material-ui/core';
import './SidebarChat.css';
import db from '../firebase';
import  { Link } from "react-router-dom";

function SidebarChat({id, name}) {
  const [seed, setSeed] = useState("");

  useEffect(()=> {
    setSeed(Math.floor(Math.random() * 5000));
  }, []);

  const createChat = () => {
    const roomName = prompt("Please Enter Name for Chat");

    if(roomName){
      db.collection("Rooms").add({
        name: roomName
      })
    }
  };

    return (
      <Link to={`/rooms/${id}`}>

        <div className="sidebarChat_container">
        <div className="sidebarChat">
          <Avatar
            className="avatar"
            src={`https://avatars.dicebear.com/api/human/${seed}.svg`}
          />
          <div className="sidebarChat_info">
            <h2>{name}</h2>
            <p>This is the last message</p>
          </div>
        </div>
        <hr/>
      </div>

      </Link>

    );
}

export default SidebarChat
