import { AttachFile, SearchOutlined , MoreVert, InsertEmoticon, Mic} from '@mui/icons-material'
import { Avatar , IconButton,  } from '@mui/material'
import React, { useEffect, useState } from 'react'
import './Chat.css'
function Chat() {

    const [seed, setSeed] = useState("")
    const [input, setInput] = useState("");
    useEffect(() => {
        setSeed(Math.floor(Math.random() * 5000))
    }, [])
    const handleInputChange = (event) =>{
        console.log(input, "\t\t", event.target.value)
        setInput(event.target.value)
    }
    const sendMessage = (e) =>{
        //do some stuff
        e.preventDefault()
        setInput("")
    }
  return (
    <div className="chat">
      <div className="chat__header">
        <Avatar
          src={`https://avatars.dicebear.com/api/pixel-art/${seed}.svg`}
        />

        <div className="chat__headerInfo">
          <h3>Room Name</h3>
          <p>Last seen at ...</p>
        </div>
        <div className="chat__headerRight">
          <IconButton>
            <SearchOutlined />
          </IconButton>
          <IconButton>
            <AttachFile />
          </IconButton>
          <IconButton>
            <MoreVert />
          </IconButton>
        </div>
      </div>
      <div className="chat__body">
        
        <p className={`chat__message && ${true &&  'chat__reciever'}`}>
            <span className='chat__name'>Kuldeep</span>
            Hey Guys
            <span className='chat__timestamp'>3:52</span>
        </p>
      </div>
      <div className="chat__footer">
        <InsertEmoticon/>
        <form >
            <input value = {input} onChange ={handleInputChange}type="text" placeholder='Enter your message' />
            <button onClick = {sendMessage}type="submit">Send a message</button>
        </form>
        <Mic/>
      </div>
    </div>
  );
}

export default Chat