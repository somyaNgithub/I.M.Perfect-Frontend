import React, { useEffect, useRef } from 'react';
import EditorJS from '@editorjs/editorjs';
import Header from 'editorjs-header-with-alignment';
import List from '@editorjs/list';
import Paragraph from "@editorjs/paragraph"
import './index.css';

const EditorReadOnly = ({ data, id, setJSONData }) => {
  const ejInstance = useRef();

  useEffect(() => {
// if(ejInstance.current===null){
            initEditor();
        // }
    return () => {
      ejInstance?.current?.destroy();
      ejInstance.current = null;
    }
  }, [data]);

  const initEditor = () => {
    const editor = new EditorJS({
      holder: id,
      logLevel: "ERROR",
      data: JSON.parse(data),
      readOnly: true, // Set this option to make the editor read-only
      onReady: () => {
        ejInstance.current = editor;
      },
      autofocus: true,
      onChange: async () => {
        let content = await editor.saver.save();
        setJSONData(JSON?.stringify(content));
        console.log("content", content);
      },
      tools: {
        header: {
          class: Header,
          config: {
            placeholder: 'Enter a header',
          }
        },
        list: {
          class: List,
          inlineToolbar: true,
          config: {
            defaultStyle: 'unordered'
          }
        },
        paragraph: {
          class: Paragraph,
          inlineToolbar: true,
        },
      },
    });
  }

  return (
    <div id={id} className='editorJs rounded-lg  mt-1 '></div>
  );
}

export { EditorReadOnly };
