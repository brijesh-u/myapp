import React from "react";
import './Navbar.css';
import NavComponents from "./NavComponents";
import SearchIcon from "@material-ui/icons/Search";
import HomeIcon from "@material-ui/icons/Home";
import SupervisorAccountIcon from "@material-ui/icons/SupervisorAccount";
import BusinessCenterIcon from "@material-ui/icons/BusinessCenter";
import NotificationsIcon from "@material-ui/icons/Notifications";
import ChatIcon from "@material-ui/icons/Chat";

function Navbar(){
    return(
        <div className="NavContainer">
            <div className="NavLeft">
                <div className="Logo">
                   <span className="LogoText">Linked</span>
                   <img src="https://cdn-icons-png.flaticon.com/512/61/61109.png" alt=""/>
                </div>
                <div className="SearchBox">
                    <SearchIcon/>
                    <input type="text"  placeholder="Search for job, people, posts..."/>
                </div>
            </div>
            <div className="NavRight">
                <NavComponents Icon={HomeIcon} title="Home"/>
                <NavComponents Icon={SupervisorAccountIcon} title="My Network"/>
                <NavComponents Icon={BusinessCenterIcon} title="Jobs"/>
                <NavComponents Icon={NotificationsIcon} title="Notifications"/>
                <NavComponents Icon={ChatIcon} title="Messaging"/>
                <NavComponents avatar title="Profile"/>
            </div>

        </div>
    )
}

export default Navbar;