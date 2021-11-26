import React from "react";
import "../stylesheets/HeaderButton.css";
import { FaEye } from "react-icons/fa";

const HeaderButton = () => {
  return (
    <>
      <div className="mx-auto">
        <a href="#courosel">
          <button className="see">
            Checkout Portfolio &nbsp;
            <FaEye color="grey" fontSize="1.6rem" />
          </button>
        </a>
      </div>
    </>
  );
};

export default HeaderButton;
