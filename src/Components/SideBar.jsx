import React from "react";
import "./SideBar.css";
import img from "../assets/user.jpg";
// import { Link } from 'react-router-dom'
import FolderIcon from "@mui/icons-material/Folder";
import TodayIcon from "@mui/icons-material/Today";

const SideBar = () => {
  return (
    <div className="sidebarContainer">
      <div className="userDiv">
        <div className="userImage">
          <img src={img} alt="" />
        </div>
        <div className="username">
          <span>Usernames</span>
        </div>
      </div>

      <div className="sideContentParent">
        <div className="active">
          <FolderIcon />
          <a className="active " href="">
            Todays
          </a>
        </div>
        <div className="sideContents">
          <FolderIcon />
          <a href="">Expenses</a>
        </div>
        <div className="sideContents">
          <FolderIcon />
          <a href="">Projects</a>
        </div>
        <div className="sideContents">
          <FolderIcon />
          <a href="">Interview</a>
        </div>
        <div className="sideContents">
          <FolderIcon />
          <a href="">Interview</a>
        </div>
        <div className="sideContents">
          <FolderIcon />
          <a href="">Other</a>
        </div>
      </div>
      <div className="logout">
        <button className="btn">Logout</button>
      </div>
    </div>
  );
};

export default SideBar;
