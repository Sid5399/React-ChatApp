import React, { useEffect, useState } from 'react'
import { Avatar } from '@material-ui/core';
import './SidebarChat.css';

function SidebarChat({name}) {
  const [seed, setSeed] = useState("");

  useEffect(()=> {
    setSeed(Math.floor(Math.random() * 5000));
  }, [])

    return (
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
    );
}

export default SidebarChat
