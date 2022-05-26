import { cleanup } from "@testing-library/react";
import { isLabelWithInternallyDisabledControl } from "@testing-library/user-event/dist/utils";
import React, { useEffect } from "react";

const Header = () => {
  useEffect(() => {
    const handleFixedHeader = () => {
      const header = document.getElementById("header");
      if (window.scrollY > 100) header.classList.add("fixed");
      else header.classList.remove("fixed");
    };
    window.addEventListener("scroll", handleFixedHeader);
    return () => {
      window.removeEventListener("scroll", handleFixedHeader);
    };
  }, []);
  return <div className="p-5 bg-black w-full"></div>;
};

export default Header;
