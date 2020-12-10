import React from "react";

// function App() {
//   const dom = (
//     <input
//       type="submit"
//       onClick={() => {
//         console.log("クリックされました");
//       }}
//     />
//   );
//   return (
//     <React.Fragment>
//       <div>Hello, world!</div>
//       <div>{dom}</div>
//     </React.Fragment>
//   );
// }

const App = () => {
  return (
    <div>
      <Cat />
      <Cat />
      <Cat />
      <Cat />
    </div>
  );
};
const Cat = () => {
  return <div>Meow!</div>;
};

export default App;
