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
  const profiles = [
    { name: "Taro", age: 18 },
    { name: "Bob", age: 24 },
    { age: 10 },
  ];
  return (
    <div>
      {profiles.map((profile, index) => {
        return <User name={profile.name} age={profile.age} key={index} />;
      })}
    </div>
  );
};
const User = (props) => {
  return (
    <div>
      Hi, I'm {props.name}! {props.age} years old!
    </div>
  );
};
User.defaultProps = {
  name: "anonymous",
};

export default App;
