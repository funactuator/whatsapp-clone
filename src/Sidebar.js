import { Chat, DonutLarge, MoreVert, SearchOutlined } from '@mui/icons-material'
import { Avatar, Icon, IconButton } from '@mui/material'
import React ,{useState, useEffect}from 'react'
import db from './firebaseConfig'
import './Sidebar.css'
import SidebarChat from './SidebarChat'
function Sidebar(props) {

    const [rooms, setRooms] = useState([]);
    // let count = 0;
    useEffect(() =>{
        // db.collection('rooms').onSnapshot((snapShot) => {
        //     setRooms(snapShot.docs.map(doc => ({
        //     id : doc.id,
        //     data : doc.data(),
        // })))})}
        
        db.collection('rooms').onSnapshot(snapshot => {
            // count += 1
            // console.log(count)
            // console.log(snapshot.docs)
            let roomData = []
            roomData = snapshot.docs.map((doc) =>({
                id: doc.id,
                data : doc.data()
            }))
            // console.log(roomData)
            setRooms(
                oldRooms => [...roomData]
            )
        })
        // console.log(rooms) -- hooks are async
    }, [])
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
            <SidebarChat addNewChat={true} />
            {
            rooms.map((room) => <SidebarChat setForceRender={props.setForceRender} forceRender={props.forceRender}key = {room.id} id = {room.id} name = {room.data.name}/>)}
        </div>

    </div>
  )
}

export default Sidebar