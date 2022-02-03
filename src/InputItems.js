import React from "react";
import './InputItems.css';

function InputItems({Icon,title,color}){
    return(
        <div className="InputType  ">
        {Icon && <Icon style={{color:color}}/>}
            <h4>{title}</h4>    
    </div>
    )
}
export default InputItems;      