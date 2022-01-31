import React from "react";
import "./NavComponents.css";
import {Avatar} from "@material-ui/core";


function NavComponents({Icon,title,avatar}){
    return(
        <div className="Components">
        {Icon && <Icon  className="Icon"/>}
        {avatar && <Avatar className="Avatar" src="https://c4.wallpaperflare.com/wallpaper/116/412/889/naruto-anime-uchiha-itachi-hd-wallpaper-preview.jpg"></Avatar>}
        <h6 className="Title">{title }</h6>
        </div>
    );
}


export default NavComponents;