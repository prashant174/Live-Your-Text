import React, { useState } from "react";
import Client from "../components/Client";
import Editor from "../components/Editor";

const EditorPage=()=>{
  
    const [clients,setClients]=useState([
        {socketId:1,username:'Nisha Gupta'},
        {socketId:2,username:'Golu G'},
        {socketId:3,username:'Manju'}
    ])

return <div className="mainWrap">
    <div className="aside">
      <div className="asideInner">
        <div className="logo">
            <img className="logoImage" src="/live.png" alt="logo" />
        </div>
        <h3>Connected</h3>
        <div className="clientsList">
         {
            clients.map((client)=> (
                <Client key={client.socketId} username={client.username}/>
            ))
         }
        </div>
      </div>
      <button className="btn copyBtn">Copy Room ID</button>
      <button className="btn leaveBtn">Leave</button>
    </div>

    <div className="editorWrap">
        <Editor/>
    </div>
</div>

}

export default EditorPage;