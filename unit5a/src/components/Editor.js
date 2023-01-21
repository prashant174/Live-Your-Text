import React, { useEffect, useRef } from "react";
// import Codemirror from 'codemirror'
// import 'codemirror/mode/javascript/javascript'
// import {EditorState} from "@codemirror/state"
// import {EditorView} from "@codemirror/view"
// import 'codemirror/theme/dracula.css'
// import {EditorView} from "@codemirror/view"

const Editor=()=>{
      const editorRef=useRef(null)

    // useEffect(()=>{
           
    //       editorRef.current.on('change',(instance,changes)=>{
    //         console.log('changes',changes)
    //       })

    // },[])
    // let view = new EditorView({
    //     extensions: EditorView.theme({
    //       ".cm-content": {color: "darkorange"},
    //       "&.cm-focused .cm-content": {color: "orange"}
    //     })
    //   })
    // useEffect(()=>{
    //     async function init(){
    //        EditorState.fromTextArea(document.getElementById('realTimeEditor'),{
    //         mode:{name:'javascript',json:true},
    //        view,

    //        })
    //     }
    //     init()
    // },[])

    useEffect(()=>{
              async function init(){

                

              };
              init()
    },[])

    return <textarea id="realTimeEditor"></textarea>
}

export default Editor