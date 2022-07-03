import { AttachFile, SearchOutlined , MoreVert, InsertEmoticon, Mic} from '@mui/icons-material'
import { Avatar , IconButton,  } from '@mui/material'
import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import './Chat.css'
import db from './firebaseConfig'
import { useStateValue } from './StateProvider'
import firebase from 'firebase/compat/app';
function Chat({id}) {

    const [seed, setSeed] = useState("")
    const [input, setInput] = useState("")
    // const {roomId} = useParams()
    // const [pathId, setPathId] = useState(id)
    // console.log(pathId)
    const [roomName, setRoomName] = useState("")
    const [messages, setMessages] = useState([])
    const [{user}, dispatch] = useStateValue()


    useEffect(() => {
      if(id){ 
        console.log(id)       
        db.collection('rooms')
        .doc(id)
        .onSnapshot(snapshot => (setRoomName(snapshot.data().name)))


        db
        .collection('rooms')
        .doc(id)
        .collection("messages")
        .orderBy('timestamp', 'asc')
        .onSnapshot(snapshot => setMessages(snapshot.docs.map(doc => doc.data()))) 
   }
    },[id])


    useEffect(() => {
        setSeed(Math.floor(Math.random() * 5000))
        
    }, [])

    const handleInputChange = (event) =>{
        console.log(input, "\t\t", event.target.value)
        setInput(event.target.value)
    }
    const sendMessage = (e) =>{
        e.preventDefault()
        db.collection('rooms').doc(id).collection('messages').add({
          name : user.displayName,
          message : input,
          timestamp : firebase.firestore.FieldValue.serverTimestamp()
        })
        setInput("")
    }

    const test = () => {
      console.log(messages);
    }
  return (
    <div className="chat">
      <div className="chat__header">
        <Avatar onClick = {test}
          src={`https://avatars.dicebear.com/api/pixel-art/${seed}.svg`}
        />

        <div className="chat__headerInfo">
          <h3>{roomName}</h3>
          <p>{new Date(messages[messages.length-1]?.timestamp?.toDate()).toUTCString()}</p>
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
       { messages.map((message) => (
          <p className={`chat__message && ${message.name == user.displayName &&  'chat__reciever'}`}>
            <span className='chat__name'>{message.name}</span>
            {message.message}
            <span className='chat__timestamp'>{
              new Date(message.timestamp?.toDate()).toUTCString()
            }</span>
        </p>
       ))
      }
        
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