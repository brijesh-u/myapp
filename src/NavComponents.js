import React from "react";
import "./NavComponents.css";
import {Avatar} from "@material-ui/core";


function NavComponents({Icon,title,avatar}){
    return(
        <div className="Components">
        {Icon && <Icon  className="Icon"/>}
        {avatar && <Avatar className="Avatar">B</Avatar>}
        <h5 className="Title">{title }</h5>
        </div>
    );
}


export default NavComponents;