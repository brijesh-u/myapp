import React from "react";
import { Avatar } from "@material-ui/core";
import './Sidebar.css';

function Sidebar(){
    return(
        <div className="Sidebar">
            <div className="SidebarTop">
                <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcREKsrOTTANDmF9KOvmEG8Yn88LWsIG9Wdg_g&usqp=CAU"/>
                <Avatar className="Avatar"/>
                <h2>UCHIHA</h2>
                <h4>UCHIHA@hotmail.com</h4>
            </div>
            <div className="SidebarStats">
                <div className="Stats">
                    <p>Who viewed you</p>
                    <p className="number">69</p>
                </div>
                <div className="Stats">
                    <p>Views on your post</p>
                    <p className="number">420</p>
                </div>
            </div>
        </div>
    )

}

export default Sidebar