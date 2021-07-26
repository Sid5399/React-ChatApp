import React from 'react';
import {useState,useEffect} from 'react'
import './Sidebar.css'; 
import { Avatar, IconButton } from "@material-ui/core";
import {SearchOutlined, Settings} from "@material-ui/icons";
import db from '../firebase';
import SidebarChat from './SidebarChat'
import { useStateValue } from '../StateProvider';


function Sidebar() {

  const [rooms,setRooms] = useState([]);
  const [{user}, dispatch] = useStateValue();

  useEffect(() => {
     const unsubscribe = db.collection('Rooms').onSnapshot(snapshot => (
        setRooms(
          snapshot.docs.map(doc => (
            {
                id: doc.id,
                data: doc.data(),
            }
        )

        ))
    ));

    return () => {
      unsubscribe();
    }
},[]); 


  return (
    <div className="sidebar">

        <div className="sidebar_header">
          {/* <h2> i am header</h2> */}
          
          <Avatar src={user?.photoURL}/>
          
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
          
          {
            rooms.map(room => (
              <SidebarChat key={room.id} id={room.id} name={room.data.name}/>
            ))
          }
        </div>
    </div>
    );
}

export default Sidebar
