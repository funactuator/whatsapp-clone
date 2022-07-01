import { Avatar } from '@mui/material'
import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import db from './firebaseConfig'
import './SidebarChat.css'
import { useParams, useHistory } from 'react-router-dom'

function SidebarChat({addNewChat, setForceRender, forceRender, id, name}) {

    const [seed, setSeed] = useState("")
    // const history = useHistory()

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
    <Link to={`/rooms/${id}`} onClick={()=>{if(setForceRender) setForceRender(!forceRender)}} >
        <div className='sidebarChat'>
            <Avatar src = {`https://avatars.dicebear.com/api/pixel-art/${seed}.svg`}/>
            <div className="sidebarChat__info">
                <h2>{name}</h2>
                <p>Last message...</p>
            </div>
        </div>
    </Link>
    
  ) : (
    <div onClick = {createChat}className='sidebarChat'>
        <h2>Add New Chat</h2>
    </div>
  )
}

export default SidebarChat