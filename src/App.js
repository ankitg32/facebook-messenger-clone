import React, { useState, useEffect, Fragment } from 'react';
import './App.css';
import { Button, FormControl, Input, InputLabel } from '@material-ui/core';
import Message from './Message';
import db from './firebase';
import firebase from 'firebase';
import FlipMove from 'react-flip-move';
import { IconButton } from '@material-ui/core';
import SendIcon from '@material-ui/icons/Send';

//pick tutorial from 1:47:18

function App() {
  const [input, setInput] = useState('');
  const [messages, setMessages] = useState([]);
  const [username, setUsername] = useState('');
  const [latestMessageID, setLatestMessageID] = useState('');

  useEffect(() => {
      setUsername(prompt('Please enter your name'))
    }  //function to run when condition is met, runs ONCE by default for initial load
    ,[] //condition to run the function, blank means no condition
    )

  useEffect(()=>{
    db.collection('messages').orderBy('timestamp', 'asc').onSnapshot(snapshot => {
      setMessages(snapshot.docs.map(doc => ({id: doc.id, message: doc.data()})))
    })
  }, [])

  // useEffect(() => {
  //   // setLatestMessageID(messages[messages.length-1].id);
  //   console.log(messages[messages.length-1]);
  // }, [messages])

  const sendMessage = (event) => {
    event.preventDefault();
    db.collection('messages').add({
      message: input,
      username,
      timestamp: firebase.firestore.FieldValue.serverTimestamp()
    })
    // setMessages([...messages, {username: username, message: input}]);
    setInput('');
  }

  return (
    <Fragment>
    <div className="App">
    <img src="https://facebookbrand.com/wp-content/uploads/2018/09/Header-e1538151782912.png?w=100&h=100" alt="Messenger logo"/>
      <h1>Facebook Messenger</h1>
      <h2>Welcome {username}</h2>
      {/*messages here*/}
      <FlipMove>
        {
          messages.map(({id, message}) => (
            <Message latest_message_id="ah6y4AUAByhI73Q7thGW" message_id = {id} key={id} username={username} message={message} />
          ))
        }
      </FlipMove>
    </div>
    <form className="app__form">
      <FormControl className="app__formControl">
        <Input className="app__input" placeholder="Enter a message..."  type="text" value={input} onChange={e => setInput(e.target.value)}/>
        <IconButton className="app__iconButton" type="submit" onClick={sendMessage} disabled={!input} variant="contained" color="primary">
          <SendIcon />
        </IconButton>
      </FormControl>
    </form>
    </Fragment>
  );
}

export default App;
