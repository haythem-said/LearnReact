import React from "react";
import Header from "../components/header/Header";
import ButtonComponent from "../components/buttons/Button";
const Home = () => {
  return (
    <>
      {/* <Header /> */}
      <div className="home-component">
        <div className="text-home">
          <p>Welcome !! Your Time to Learn ReactJs</p>
        </div>
        <ButtonComponent text="Let's Start" path="/learn" />
      </div>
    </>
  );
};

export default Home;
