import React, { useState } from "react";
import styled from "styled-components";
import Logo from "./Logo";
import bm from "../assets/bm.svg";
import close from "../assets/close.svg";

const Navbar = ({ show, setShow }) => {
  return (
    <Main className={`ctn_ grid grid-cols-2 xl:px-20 px-10`}>
      <Logo />
      <div
        className={`dropdown xl:justify-between items-center justify-center ${
          !show ? "hidden" : "flex"
        } xl:flex xl:relative`}
      >
        <p className="font-bold xl:text-xl  xl:px-0 py-5">Home</p>
        <p className="font-bold xl:text-xl  xl:px-0 py-5">Features</p>
        <p className="font-bold xl:text-xl  xl:px-0 py-5">
          How it works
        </p>
        <p className="font-bold xl:text-xl xl:px-0 py-5">Twitter</p>
        <a href="https://app.enzyme.finance/vault/0x857c34d7bc5aef93dc05367af9136932195efa42/my-deposit?network=polygon">
        <button className="shadow-xl">Get Started</button>
        </a>
      </div>
      <div
        className="xl:hidden flex justify-end cursor-pointer"
        onClick={() => setShow((e) => !e)}
      >
        <img
          src={!show ? bm : close}
          alt=""
          srcset=""
          className={`nav ${show ? "fixed top-12" : ""}`}
        />
      </div>
    </Main>
  );
};

export default Navbar;

const Main = styled.div`
  height: 128px;
  background: hsla(245, 73%, 3%, 0.3);
  color: white;
  width: 100%;

  .ctn_ {
    @media (max-width: 1200px) {
      /* grid-template-columns: auto 1fr; */
    }
  }
  @media (max-width: 1000px) {
    height: 100px;
  }

  .dropdown {
    @media (max-width: 1280px) {
      position: fixed;
      top: 0;
      left: 0;
      background-color: black;
      height: 100vh;
      width: 100%;
      z-index: 1;
      flex-direction: column;
    }
  }

  .nav {
    width: 25px;
    z-index: 2;
  }

  button {
    background-color: #6B52E1;
    padding: 15px 35px;
    border-radius: 10px;
    font-weight: 700;
    font-size: 18px;
  }
`;
