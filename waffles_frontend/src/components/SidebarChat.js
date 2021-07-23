import React from 'react'
import { Avatar } from '@material-ui/core';
import './SidebarChat.css';

function SidebarChat({name}) {
    return (
        <div className="sidebarChat">
        <Avatar/>
        <div className="sidebarChat_info">
          <h2>{name}</h2>
          <p>This is the last message</p>

        <hr />
        </div>

    </div>
    )
}

export default SidebarChat
