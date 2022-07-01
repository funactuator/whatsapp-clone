import { AttachFile, SearchOutlined , MoreVert, InsertEmoticon, Mic} from '@mui/icons-material'
import { Avatar , IconButton,  } from '@mui/material'
import React, { useEffect, useState } from 'react'
import { useParams, useHistory } from 'react-router-dom'
import './Chat.css'
import db from './firebaseConfig'
function Chat(props) {

    const [seed, setSeed] = useState("")
    const [input, setInput] = useState("")
    // const {roomId} = useParams()
    // const [pathId, setPathId] = useState(props.id)
    // console.log(pathId)
    const [roomName, setRoomName] = useState("")

    useEffect(() => {
      console.log({'f':props.forceRender})
      if(props.forceRender){
        // setPathId(props.id)
        // console.log(window.location)
        db.collection('rooms').doc(props.id).onSnapshot(snapshot => (setRoomName(snapshot.data().name)))
      }
      // console.log(props.id)
    },[props.forceRender])
    // console.log(roomId)
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
          <h3>{roomName}</h3>
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