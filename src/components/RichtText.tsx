import { EditorState } from "draft-js";
import { Editor } from "react-draft-wysiwyg";
import "../../node_modules/react-draft-wysiwyg/dist/react-draft-wysiwyg.css";

interface IRichTextEditor {
  value: EditorState;
  setValue: React.Dispatch<React.SetStateAction<EditorState>>;
}

export const RichTextEditor = ({ value, setValue }: IRichTextEditor) => {
  return (
    <Editor
      toolbar={{
        options: [
          "inline",
          "blockType",
          "list",
          "colorPicker",
          "link",
          "remove",
          "history",
        ],
      }}
      editorState={value}
      onEditorStateChange={setValue}
    />
  );
};
