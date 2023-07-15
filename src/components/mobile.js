import React from "react";
import { mobile } from "./Data";
import {Product} from ".";
import banner1 from "./Images/mobilebanner1.jpg";
import banner2 from "./Images/mobilebanner2.jpg";

function Mobiles(){
    var m1 = mobile.slice(0, 4 );
    var m2 = mobile.slice(4, 8 );
    return(
        <>
        <img src={banner1} style={{"width":"100%"}} />
        
        <Product name={m1} head=""  />
        <img src={banner2} style={{"width":"100%"}} />
        
        <Product name={m2} head=""  /> 
        </>
    )
}
export default Mobiles