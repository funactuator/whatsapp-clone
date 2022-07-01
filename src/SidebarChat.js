import { Avatar } from '@mui/material'
import React, { useEffect, useState } from 'react'
import db from './firebaseConfig'
import './SidebarChat.css'

function SidebarChat({addNewChat, id, name}) {

    const [seed, setSeed] = useState("")
    useEffect(() => {
        setSeed(Math.floor(Math.random() * 5000))
    }, [])

    const createChat = () =>{
        const roomName = prompt("Please enter name for chat room")

        if(roomName){
            db.collection('rooms').add({
                name : roomName
            })
        }
    }
    // console.log(name)
  return !addNewChat ?(
    <div className='sidebarChat'>
        <Avatar src = {`https://avatars.dicebear.com/api/pixel-art/${seed}.svg`}/>
        <div className="sidebarChat__info">
            <h2>{name}</h2>
            <p>Last message...</p>
        </div>
    </div>
  ) : (
    <div onClick = {createChat}className='sidebarChat'>
        <h2>Add New Chat</h2>
    </div>
  )
}

export default SidebarChat