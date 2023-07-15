import React from "react";
import {Product} from ".";
import { electronics } from "./Data";
import banner1 from "./Images/electronicsbanner1.jpg";
import banner2 from "./Images/electronicsbanner2.jpg";

 function Electronics(){
    var e1 = electronics.slice(0, 4 );
    var e2 = electronics.slice(4, 8 );
    return(
        <>
        <img src={banner1} style={{"width":"100%"}} />

        
        <Product name={e1} head=""  />
        <img src={banner2} style={{"width":"100%"}} />

        
        <Product name={e2} head=""  />
            
        
        </>
    )
}
export default Electronics