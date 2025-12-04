import { useState } from "react";

function App() {
  const [color, setColor] = useState("");

  return (
    <div>
      <input onChange={(e) => setColor(e.target.value)} />
      <button onClick={() => (document.body.style.background = color)}>
        Change
      </button>
    </div>
  );
}

export default App;