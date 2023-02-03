import React from "react";
import SunEditor, { buttonList } from "suneditor-react";
import "suneditor/dist/css/suneditor.min.css"; // Import Sun Editor's CSS File

export default function App() {
  // Remove the se-component class from
  // contents fixes this error
  const contents =
    '<p><br /></p><div class="se-component se-image-container __se__float-none">  </div><p><br /></p>';
  return (
    <div className="App">
      <SunEditor
        setOptions={{ buttonList: buttonList.complex }}
        setContents={contents}
      />
    </div>
  );
}
