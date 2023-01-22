import React, { useEffect, useRef } from "react";
import Codemirror from 'codemirror'
import 'codemirror/lib/codemirror.css';
import 'codemirror/theme/dracula.css';
import 'codemirror/mode/javascript/javascript';
import 'codemirror/addon/edit/closetag';
import 'codemirror/addon/edit/closebrackets';
import ACTIONS from "../Actions";


// import Codemirror from 'codemirror'
// import Codemirror from 'codemirror'
// import 'codemirror/mode/javascript/javascript'
// import {EditorState} from "@codemirror/state"
// import {EditorView} from "@codemirror/view"
// import 'codemirror/theme/dracula.css'
// import {EditorView} from "@codemirror/view"

const Editor=({socketRef,roomId})=>{


         const editorRef=useRef(null) 
         useEffect(()=>{
               async function init(){
                   editorRef.current=  Codemirror.fromTextArea(document.getElementById('realTimeEditor'),{
                           mode:{name:'javascript',json:true},
                           theme:'dracula',
                           autoCloseTags:true,
                           autoCloseBrackets:true,
                           lineNumbers:true
                     });  
                    
                     
                     editorRef.current.on('change',(instance,changes)=>{
                      console.log('changes',changes)
                      const {origin}=changes;
                      const code=instance.getValue();
                      if(origin !== 'setValue'){
                        // console.log('working',code)
                        socketRef.current.emit(ACTIONS.CODE_CHANGE,{
                          roomId,
                          code
                        })
                      }
                       console.log(code)
                     })
                     
                    
                  
               }
               init()
         },[])

         useEffect(()=>{

          if(socketRef.current){

               socketRef.current.on(ACTIONS.CODE_CHANGE,({code})=>{
            console.log('reci',code)
               if(code !== null){
                editorRef.current.setValue(code)
               }
           })

          }
           
       
         },[socketRef.current])

     


    //   const editorRef=useRef(null)

    // useEffect(()=>{
    //      async function init(){
    //            editorRef.current=document.getElementById('realTimeEditor')

    //            editorRef.current.on('change',(instance,changes)=>{

    //            })
    //      }
    //      init();
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

    // useEffect(()=>{
    //           async function init(){

    //             Codemirror.fromTextArea(document.getElementById('realTimeEditor'),{

    //             })

    //           };
    //           init()
    // },[])

    return <textarea id="realTimeEditor"></textarea>
}

export default Editor