import React from "react";

function App() {
  const dom = (
    <input
      type="submit"
      onClick={() => {
        console.log("クリックされました");
      }}
    />
  );
  return (
    <React.Fragment>
      <div>Hello, world!</div>
      <div>{dom}</div>
    </React.Fragment>
  );
}

export default App;
