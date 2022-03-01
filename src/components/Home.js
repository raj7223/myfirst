import { useState } from "react";
const Home = () => {
  const [name, setName] = useState("Raj");

  const handleclick = () => {
    setName("im the  king");
  };
  return (
    <>
      <div className="Home">
        <h2>Home page</h2>
        <p>{name}</p>
        <button onClick={handleclick}> click me</button>
      </div>
    </>
  );
};
export default Home;
