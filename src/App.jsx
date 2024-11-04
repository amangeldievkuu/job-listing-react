import React from "react";

const App = () => {
  const myName = "Kutman";
  const friends = ["Rizqon", "Chika", "Beka", "Esio"];
  return (
    <>
      <div className="text-5xl">App</div>
      <p className="text-5xl">Amangeldiev {myName}</p>
      <ul>
        {friends.map((friend, index) => (
          <li key={index}>{friend}</li>
        ))}
      </ul>
    </>
  );
};

export default App;
