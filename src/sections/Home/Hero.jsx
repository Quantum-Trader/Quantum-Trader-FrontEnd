import React from "react";
import styled from "styled-components";
import bg from "../../../public/hero.png"




const Hero = () => {
  return (
    <Main className="flex lg:px-10 px-10 max-w-screen-lg mx-auto min-h-screen" >
      {/* <img src={bg} alt="" srcset="" className="bg" /> */}
      <div className=" mt-2 lg:mr-16 mr-10 justify-center items-center flex flex-col text-center" style={{ width: "813px" }}>
        <p className="tittle">
          Unlock the Future of Trading with Quantum Trader
        </p>
        <p className="lg:text-2xl text-lg font-normal py-7">
          Leverage Advanced AI-Driven Signals And Seamless Automation For Superior Trading Performance.
        </p>
        <div className="flex md:flex-row flex-col">
          <a href="https://app.enzyme.finance/vault/0x857c34d7bc5aef93dc05367af9136932195efa42/my-deposit?network=polygon">
          <button className="btn1 shadow-xl">Get Started</button>
          </a>
          <button className="btn2 shadow-xl">Watch Demo</button>
        </div>
      </div>
    </Main>
  );
};

export default Hero;

const Main = styled.div`
  color: white;
  justify-content: center;

  .tittle {
    font-size: 55px;
    font-weight: 700;
    @media (max-width: 768px) {
      font-size: 33.71px;
    }
    span {
      color: hsla(223, 88%, 56%, 1);
    }
  }
  .btn1 {
    background-color: #6B52E1;
    padding: 20px 50px;
    border-radius: 10px;
    font-weight: 700;
    font-size: 18px;
    margin-right: 33px;

    @media (max-width: 768px) {
      width: 100%;
      padding: 10px 20px;
      margin-bottom: 10px;
    }
  }
  .btn2 {
    padding: 20px 50px;
    border-radius: 10px;
    font-weight: 700;
    font-size: 18px;
    border: 1px solid white;

    @media (max-width: 768px) {
      padding: 10px 20px;
    }
  }
  .bg {
    object-fit: cover;
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    z-index: -2;
  }
`;
