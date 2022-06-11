import React from "react";
import web from "../assets/joy1.png"
import HomeAbout from "./HomeAbout";
const Home = () => {
  return (
    <>
      <HomeAbout name=" Welcome to " imgsrc={web} visit='/login' btname="Get Started" />
    </>
  );
}
export default Home;
