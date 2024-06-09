import React from "react";
import styled from "styled-components";
import {Tilt} from "react-tilt"
import ClipPath from "../../svg/ClipPath";
import Arrow from "../../svg/Arrow"
import grp from "../../../public/grp.png"
import grp1 from "../../../public/grp1.png"
import grp2 from "../../../public/grp2.png"
import grp3 from "../../../public/grp3.png"


export const benefits = [
  {
    id: "0",
    title: "AI Powered Signals",
    text: "Harness the power of Giza Agents fo Real-Time market insights. Stay ahead of the market trends with advanced AI-driven signals.",
    backgroundUrl: "./public/assets/benefits/card-1.svg",
    // iconUrl: benefitIcon1,
    iconUrl: grp,
  },
  {
    id: "1",
    title: "Automated Trading",
    text: "Utilize Enzyme Finance to execute strategies effortlessly. Experience seamless, automated trading that works round the clock.",
    backgroundUrl: "./public/assets/benefits/card-2.svg",
    // iconUrl: benefitIcon2,
    iconUrl: grp1,
    light: true,
  },
  {
    id: "2",
    title: "Customizable Strategies",
    text: "Tailor Trading Parameters to suit your investment goals. Customize your strategies to match your risk tolerance and trading style.",
    backgroundUrl: "./public/assets/benefits/card-3.svg",
    // iconUrl: benefitIcon3,
    iconUrl: grp2,
  },
  {
    id: "3",
    title: "Comprehensive Analysis",
    text:  "Monitor performance and Portfolio metrics with ease. Gain deep insight into your trading activities and make informed decisions.",
    backgroundUrl: "./public/assets/benefits/card-4.svg",
    // iconUrl: benefitIcon4,
    iconUrl: grp3,
    light: true,
  },
  
];


const Features = () => {
  return (
    <Main className="lg:px-16 px-7 bg-[#0A003F]">
      <div className="max-w-screen-lg mx-auto ">
      <h1 className="font-bold text-3xl md:text-4xl mt-16 text-center my-16">Key Features</h1>

        {/* where it started  */}
        <div id="features">
      <div className="container relative z-2">

        <div className="flex flex-wrap gap-10 mb-10">

          {benefits.map((item) => (
            <div
              className="block relative p-0.5 bg-no-repeat bg-[length:100%_100%] md:max-w-[24rem] "
              // style={{
              //   backgroundImage: `url(${item.backgroundUrl})`,
              // }}
              key={item.id}
            >
              <Tilt
                      options={{
                        max: 45,
                        scale: 1,
                        speed: 450,
                      }}
                      className="white-glassmorphism p-5 rounded-2xl sm:w-[360px] w-full min-h-[17rem] "
                    >
              <div className="relative z-2 flex flex-col min-h-[22rem] p-[2.4rem] justify-start">
              <img
                    src={item.iconUrl}
                    width={48}
                    height={48}
                    alt={item.title}
                  />
                <h5 className="font-bold text-2xl my-5">{item.title}</h5>
                <p className="font-light text-[0.875rem] leading-6  mb-6 ">{item.text}</p>
                <div className="flex items-center mt-auto justify-between w-full">
                 
                  <p className=" items-start font-code text-xs font-bold text-n-1 uppercase tracking-wider">
                    Learn more
                  </p>
                  <Arrow />
                </div>
              </div>

              {/* {item.light && <GradientLight />} */}

              <div
                className="absolute inset-0.5 bg-n-8"
                style={{ clipPath: "url(#benefits)" }}
              >
                <div className="absolute inset-0 opacity-0 transition-opacity hover:opacity-10">
                  {item.imageUrl && (
                    <img
                      src={item.imageUrl}
                      width={380}
                      height={362}
                      alt={item.title}
                      className="w-full h-full object-cover"
                    />
                  )}
                </div>
              </div>

        </Tilt>
              <ClipPath />
            </div>
          ))}
        </div>
      </div>
    </div>
      </div>
    </Main>
  );
};

export default Features;

const Main = styled.div`
  
  color: white;

  .box {
    border: 1px solid hsla(0, 0%, 100%, 0.2);
    border-radius: 20px;
  }
  .img_box {
    background: hsla(223, 88%, 56%, 1);
    border-radius: 7px;
    margin-bottom: 24px;
  }
  .text {
    font-size: 43.31px;
    padding-bottom: 99px;

    @media (max-width: 768px) {
      padding-bottom: 60px;
      font-size: 20px;
    }
  }
  .box {
    width: 300px;
    text-align: center;
    @media (max-width: 768px) {
      width: auto;
    }
  }
`;
