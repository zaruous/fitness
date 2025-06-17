import React, { useEffect, useRef } from 'react';
import EditorJS from '@editorjs/editorjs';
import Header from '@editorjs/header';
import List from '@editorjs/list';
import Paragraph from '@editorjs/paragraph';

// Editor.js를 사용하기 위한 패키지 설치가 필요합니다.
// npm install @editorjs/editorjs @editorjs/header @editorjs/list @editorjs/paragraph

const MyEditor = () => {
    const editorInstanceRef = useRef(null);

    useEffect(() => {
        const editor = new EditorJS({
            holder: 'editor-container',
            tools: {
                paragraph: { class: Paragraph, inlineToolbar: true },
                header: { class: Header, inlineToolbar: true },
                list: { class: List, inlineToolbar: true },
            },
            onReady: () => {
                console.log('Editor.js is ready to work!');
            },
        });

        editorInstanceRef.current = editor;

        return () => {
            if (editorInstanceRef.current && editorInstanceRef.current.destroy) {
                editorInstanceRef.current.destroy();
                editorInstanceRef.current = null;
            }
        };
    }, []);

    return (
        <div style={{ padding: '20px', backgroundColor: '#f9f9f9' }}>
            <h2>후기 작성하기</h2>
            <div id="editor-container" style={{ marginTop:'10px', border: '1px solid #ccc', borderRadius: '5px', backgroundColor: 'white', color:'black' }}></div>
        </div>
    );
};

export default MyEditor;