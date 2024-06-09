import React from "react";
import Navbar from "../../components/Navbar";
import styled from "styled-components";
import bg from "../../../public/hero.png";
import Hero from "../../sections/Home/Hero";
import Features from "../../sections/Home/Features";
import HowItWork from "../../sections/Home/HowItWork";
import Footer from "../../components/Footer";
import NavFooter from "../../components/NavFooter";

const Content = () => {
  return (
    <Main>
      <img src={bg} alt="" srcset="" className="bg" />
      <NavFooter>
        <Hero />
        <div className="">        
        <Features />
        <HowItWork />
        </div>
      </NavFooter>
    </Main>
  );
};

export default Content;

const Main = styled.div`
  .bg {
    object-fit: cover;
    position: absolute;
    top: 0;
    left: 0;
    height: 100vh;
    width: 100%;
    z-index: -2;
  }
`;
