import { Chat, DonutLarge, MoreVert, SearchOutlined } from '@mui/icons-material'
import { Avatar, Icon, IconButton } from '@mui/material'
import React ,{useState, useEffect}from 'react'
// import {db} from './firebaseConfig'
import './Sidebar.css'
import SidebarChat from './SidebarChat'
function Sidebar() {

    // const [rooms, setRooms] = useEffect(() =>{
    //     db.collection('rooms').onSnapshot(snapShot => setRooms(snapShot.docs.map(doc => ({
    //         id : doc.id,
    //         data : doc.data(),
    //     }))))
    // }, [])
  return (
    <div className="sidebar">
        {/* <h1>I am sidebar</h1> */}
        <div className="sidebar__header">
            <Avatar/>
            <div className="sidebar__headerRight">
                <IconButton>
                    <DonutLarge/>
                </IconButton>
                <IconButton>
                    <Chat/>  
                </IconButton>
                <IconButton>
                    <MoreVert/>
                </IconButton>
            </div>
        </div>
        <div className="sidebar__search">
            <div className="sidebar__searchContainer">
                <SearchOutlined/>
                <input placeholder = "Search or start new chat" type="text" />
            </div>
        </div>
        
        <div className="sidebar__chats">
            <SidebarChat addNewChat/>
            <SidebarChat/>
            <SidebarChat/>
            <SidebarChat/>
            <SidebarChat/>
            <SidebarChat/>
        </div>

    </div>
  )
}

export default Sidebar