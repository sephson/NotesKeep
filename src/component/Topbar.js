import React from "react";
import { BsSearch, BsViewList } from "react-icons/bs";
import { FcIdea } from "react-icons/fc";
import { FaMoon } from "react-icons/fa";
import { FiSun } from "react-icons/fi";

function Topbar({ click, setClick }) {
  const handleClick = () => {
    setClick(!click);
  };

  return (
    <div className="topbar">
      <div className="app-logo">
        <FcIdea /> Notes
      </div>

      <BsSearch className="search-icon" />
      <input
        className="search-field"
        type="text"
        placeholder="Search for notes..."
      />

      <BsViewList className="note-list-selector" />
      <div
        // className={click ? "background-white" : "background-dark"}
        onClick={handleClick}
      >
        {click ? <FaMoon className="moon" /> : <FiSun />}

        {/* <FaBars className="bars" /> */}
      </div>
    </div>
  );
}

export default Topbar;
