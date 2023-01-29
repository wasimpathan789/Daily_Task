import React, { useState } from "react";
import SideBar from "./SideBar";
import "./Homepage.css";
import NightlightIcon from "@mui/icons-material/Nightlight";
import WbSunnyIcon from "@mui/icons-material/WbSunny";
import CalendarMonthIcon from "@mui/icons-material/CalendarMonth";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";
import SearchIcon from "@mui/icons-material/Search";
import PersonIcon from "@mui/icons-material/Person";
import Hero from "./Hero";
// import Date from './Date';

const Homepage = () => {
  const [click, setClick] = useState(false);

  const clickHandler = () => {
    return setClick(!click);
  };

  const current = new Date();
  const date = `${current.getDate()}/${
    current.getMonth() + 1
  }/${current.getFullYear()}`;
  return (
    <div className="mainContainer">
      <SideBar />
      <div className="front-view">
        <nav>
          <div className="date">
            <CalendarMonthIcon />
            {date}
            {/* <Date/> */}
          </div>
          <div className="searchbox">
            <SearchIcon />
            <input type="text" name="type here" placeholder="Search here" />
          </div>
          <ul className={click ? "nav-links  " : "nav-links active"}>
            <li>
              {" "}
              <a href="">
                {" "}
                <span> Sign in</span> <PersonIcon />{" "}
              </a>
            </li>
            <li>
              {" "}
              <a href="">
                {" "}
                <span> New ?</span> <PersonIcon />{" "}
              </a>
            </li>
            <li>
              {" "}
              <a href="">
                {" "}
                <span> Logout</span> <PersonIcon />{" "}
              </a>
            </li>
          </ul>
          <div className="theme">
            <NightlightIcon className="themeChild" style={{ fontSize: 26 }} />
            <WbSunnyIcon className="themeChild" style={{ fontSize: 26 }} />
            <AccountCircleIcon
              onClick={clickHandler}
              className="themeChild"
              style={{ fontSize: 26 }}
            />
          </div>
        </nav>
        <div>
          <Hero/>
        </div>
      </div>
    </div>
  );
};

export default Homepage;
