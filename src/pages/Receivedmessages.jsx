import React from "react";
import { useState } from "react";
import PopupModal from "../components/PopupModal";
import dataII from "./mock-data2.json"

function ReceivedMessages(){
  const [messages, setMessages]= useState(dataII)
  const [message, setMessage]= useState({})
  const [openMessage, setOpenMessage]= useState(false);
  

  return(
    <div className="received_messages">
      <h1> Received Messages</h1>

      <table className="messages_table">
        <thead>
          <tr>
            <th>Name</th>
            <th>E-mail</th>
            <th>Message</th>
            <th>Date of sending</th>
            <th>Settings</th>
          </tr>
        </thead>

        <tbody>
          {messages.map((message)=>(
          <tr>
          <td>{message.full_name} </td>
          <td>{message.email}</td>
          <td>{message.random_message}</td>
          <td>{message.subscription_date}</td>
          <td><button className="table_button" onClick={() => {
            setOpenMessage(true)
            setMessage(message);
          } } > Show</button></td>
         </tr>
         ))}
        </tbody>
      </table>

      <PopupModal trigger={openMessage} setTrigger={setOpenMessage} >
        <h1>Message Info</h1>
          <p>Full name: {message.full_name} </p>
          <p>E-mail: {message.email}</p>
          <p>Content: {message.random_message}</p>
          <p>The message was sent in:{message.subscription_date}</p>
       </PopupModal>
    </div>
  )
}

export default ReceivedMessages