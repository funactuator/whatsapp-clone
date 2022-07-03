import { Chat, DonutLarge, MoreVert, SearchOutlined } from '@mui/icons-material'
import { Avatar, Icon, IconButton } from '@mui/material'
import React ,{useState, useEffect}from 'react'
import db from './firebaseConfig'
import './Sidebar.css'
import SidebarChat from './SidebarChat'
import { useStateValue } from './StateProvider'

function Sidebar(props) {

    const [rooms, setRooms] = useState([]);
    const [{user}, dispatch] = useStateValue()
    // let count = 0;
    useEffect(() =>{
        db.collection('rooms').onSnapshot(snapshot => {
            let roomData = []
            roomData = snapshot.docs.map((doc) =>({
                id: doc.id,
                data : doc.data()
            }))
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
            <Avatar src = {user?.photoURL}/>
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
            rooms.map((room) => <SidebarChat setRoomId = {props.setRoomId} key = {room.id} id = {room.id} name = {room.data.name}/>)}
        </div>

    </div>
  )
}

export default Sidebar