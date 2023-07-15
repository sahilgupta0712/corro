import React from "react";
import {Product} from ".";
import { grocery } from "./Data";
import banner1 from "./Images/grocerybanner1.jpg";
import banner2 from "./Images/grocerybanner2.jpg";



 function Grocery(){
    var g1 = grocery.slice(0, 4 );
    var g2 = grocery.slice(4, 8 );
    
    return(
        <>
        <img src={banner1} style={{"width":"100%"}} />
        
        <Product name={g1} head=""  />
        <img src={banner2} style={{"width":"100%"}} />
        
        <Product name={g2} head=""  />
            
        </>
    )
}
export default Grocery