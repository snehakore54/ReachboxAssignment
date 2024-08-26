import React from 'react';
import { Editor, EditorState } from 'draft-js';
import 'draft-js/dist/Draft.css';

const TextEditor = () => {
  const [editorState, setEditorState] = React.useState(
    EditorState.createEmpty()
  );

  const handleSave = () => {
    const content = editorState.getCurrentContent();
    console.log('Content saved:', content.getPlainText());
  };

  return (
    <div>
      <Editor editorState={editorState} onChange={setEditorState} />
      <button onClick={handleSave}>SAVE</button>
      <button>Variables</button>
    </div>
  );
};

export default TextEditor;
