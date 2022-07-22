import React from "react";
import "./topbar.css"

import  { NotificationsNone, Language, Settings } from "@material-ui/icons";

export default function Topbar() {
    return (
      <div className="topbar">
        <div className="topbarWrapper">
          <div className="topLeft">
            <span className="logo">Yart-Admin</span>
          </div>
          <div className="topRight">
            <div className="topbarIconContainer">
              <NotificationsNone />
              <span className="topIconBadge">2</span>
            </div>
            <div className="topbarIconContainer">
              <Language />
              <span className="topIconBadge">2</span>
            </div>
            <div className="topbarIconContainer">
              <Settings />
            </div>
            <img src="https://media-exp1.licdn.com/dms/image/C4D03AQHO1KIcYftrXQ/profile-displayphoto-shrink_800_800/0/1654082730541?e=1660176000&v=beta&t=7UdHRsn49kf5guV4uGhNQA3TnOIdzeeEe5osBN_7A0c" alt="" className="topAvatar" />
          </div>
        </div>
      </div>
    );
  }