import React, { useState } from "react";
import Navbar from "./Navbar";
import Footer from "./Footer";

const NavFooter = (props) => {
  const [show, setShow] = useState(false);

  return (
    <div>
      <Navbar show={show} setShow={setShow} />
      <div className={`${show && "hidden"} `}>{props.children}</div>
      <Footer />
    </div>
  );
};

export default NavFooter;
