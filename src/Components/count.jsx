import { useState } from "react";

function App() {
  const [text, setText] = useState("");

  return (
    <div>
      <input
        onChange={(e) => setText(e.target.value)}
        placeholder="Type something"
      />

      <p>Characters: {text.length}</p>
    </div>
  );
}

export default App;