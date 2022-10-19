import React from "react";
import "./topbar.css";
import { NotificationsNone, Language, Settings } from "@material-ui/icons";

export default function Topbar() {
  return (
    <div className="topbar">
      <div className="topbarWrapper">
        <div className="topLeft">
          <span className="logo">admin</span>
        </div>
        <div className="topRight">
          <div className="topbarIconContainer">
          </div>
          <div className="topbarIconContainer">
          </div>
          <div className="topbarIconContainer">
            <Settings />
          </div>
          <img src="https://avatars.githubusercontent.com/u/73787063?v=4" alt="" className="topAvatar" />
        </div>
      </div>
    </div>
  );
}
