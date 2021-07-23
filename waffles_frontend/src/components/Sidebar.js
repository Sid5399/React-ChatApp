import React from 'react'
import './Sidebar.css'; 
import { Avatar, IconButton } from "@material-ui/core";
import {SearchOutlined, Settings} from "@material-ui/icons";
import MoreVertIcon from '@material-ui/icons/MoreVert';

import SidebarChat from './SidebarChat'


function Sidebar() {
  return (
    <div className="sidebar">

        <div className="sidebar_header">
          {/* <h2> i am header</h2> */}
          
          <Avatar />
          
          <IconButton>
            <Settings />
          </IconButton>

        
        </div>


        <div className="sidebar_search">
        
        
        <div className="sidebar_searchContainer">
          <SearchOutlined />
          <input type="text" placeholder="SEARCH" />
         </div>
        </div>

        <div className="sidebar_chats">
          
          <SidebarChat name="room1"/> 
          <SidebarChat name="room2"/> 
          <SidebarChat name="room3"/> 
        </div>
    </div>
    );
}

export default Sidebar
