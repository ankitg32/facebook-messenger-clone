import React, { forwardRef, useEffect } from 'react';
import { Card, CardContent, Typography } from '@material-ui/core';
import './Message.css';

const Message = forwardRef(({message_id, latest_message_id, message, username} , ref) => {
    const isUser = username===message.username;
    const isLatestMessage = (message_id === latest_message_id);
    const fieldRef = React.useRef(null);
    // console.log(`isLatestMessage = ${isLatestMessage}`);
    useEffect(() => {
        fieldRef.current.scrollIntoView()
    },[isLatestMessage]);
    return (
        <div ref = {fieldRef}>
            <div ref={ref} id={message_id} className={`message ${isUser && 'message__user'}`}>
                <Card className={isUser ? "message__userCard" : "message__guestCard"}>
                    <CardContent>
                        <Typography
                            color="white"
                            variant="h5"
                            component="h2"
                        >
                            {!isUser && `${message.username || 'Unkown User'}:`} {message.message}
                        </Typography>
                    </CardContent>
                </Card>
            </div>
        </div>
    )
})

export default Message;