import React from "react";
import "./Footer.css";
import Wave from "../../img/wave.png";

import Link from "@iconscout/react-unicons/icons/uil-linkedin";
import Gitub from "@iconscout/react-unicons/icons/uil-github";

const Footer = () => {
  return (
    <div className="footer">
      <img src={Wave} alt="" style={{ width: "100%" }} />
      <div className="f-content">
        <span>sujitkic6802maurya@gmail.com</span>
        <div className="f-icons">
          <a href="https://github.com/Sujitmaurya123"> <Gitub color="white" size={"3rem"} /></a>
           <a href="https://www.linkedin.com/in/thesujitkumar"> <Link color="white" size={"3rem"}/></a>
          {/* <Insta color="white" size={"3rem"} /> */}
          {/* <Facebook color="white" size={"3rem"} /> */}
          {/* <Gitub color="white" size={"3rem"} /> */}
        </div>
        <span>Copyright  &#169; 2023 | Sujit@</span>
      </div>
    </div>
  );
};

export default Footer;
