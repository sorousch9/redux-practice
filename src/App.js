import React from "react";
import Counter from "./components/Counter";
import Header from "./components/Header";
import UserProfile from "./components/UserProfile";

function App() {
  return (
    <React.Fragment>
      <Header />
      <Counter />
      <UserProfile/>
    </React.Fragment>
  );
}

export default App;
