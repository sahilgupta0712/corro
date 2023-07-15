import React from "react";
import { furniture } from "./Data";
import banner1 from "./Images/furniturebanner1.jpg";
import banner2 from "./Images/furniturebanner2.jpg";
import {Product} from ".";
function Furniture(){
    var f1 = furniture.slice(0, 4 );
    var f2 = furniture.slice(4, 8 );
    return(
        <>
        <img src={banner1} style={{"width":"100%"}} />
        
        <Product name={f1} head=""  />
        <img src={banner2} style={{"width":"100%"}} />
        
        <Product name={f2} head=""  /> 
            
        </>
    )
}
export default Furniture