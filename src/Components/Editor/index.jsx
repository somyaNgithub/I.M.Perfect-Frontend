import React, { useEffect, useRef } from 'react';
import EditorJS from '@editorjs/editorjs';
import Header from 'editorjs-header-with-alignment';
import List from '@editorjs/list';
import Paragraph from "@editorjs/paragraph"
import './index.css'
const Editor = ({data,id , setJSONData}) => {
    // const dispatch = useDispatch()
   console.log("data",data)

    const ejInstance=useRef();
    useEffect(()=>{
                  initEditor();
    
        return()=>{
            ejInstance?.current?.destroy();
            ejInstance.current=null;
        }
    },[data])
    const initEditor=()=>{
    //   dispatch(setEditSubscriptionDesc(data))
        console.log("blocks",data)
        const editor = new EditorJS({
            holder:id,
            logLevel: "ERROR",
            data:JSON.parse(data),
            onReady:()=>{
                ejInstance.current=editor;
            },
            autofocus:true,
            onChange:async()=>{
                let content=await editor.saver.save();
                 setJSONData(JSON?.stringify(content))
                // dispatch(setEditSubscriptionDesc(JSON.stringify(content)))
                console.log("content",content);
            },
            tools:{
                header:{
                    class: Header,
                    config: {
                      placeholder: 'Enter a header',
                    //   levels: [2, 3, 4],
                    //   defaultLevel: 3
                    }
                  },
                list:{
                    class: List,
                    inlineToolbar: true,
                    config: {
                      defaultStyle: 'unordered'
                    }
                  },
                  paragraph:{
                    class: Paragraph,
                    inlineToolbar: true,
                  },
                  
                
            },
           
        })
    }
  return (
    <div id={id} className='editorJs rounded-lg mb-3 mt-1 border-2'></div>
  )
}

export {Editor}