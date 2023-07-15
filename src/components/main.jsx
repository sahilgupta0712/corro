import React from "react";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from 'react-responsive-carousel';
import img1 from "./Images/imagesidescrolling1.jpg"
import img2 from "./Images/imagesidescrolling2.jpg"
import img3 from "./Images/imagesidescrolling3.jpg"
import img4 from "./Images/imagesidescrolling4.jpg"

const Main = () => {
  return (
    <>
    
        
        <Carousel showArrows={true} showThumbs={false} autoPlay={true}  infiniteLoop={true} showStatus={false}>
                <div>
                    <img src={img1} style={{"height":"45vh"}}/>
                    
                </div>
                <div>
                    <img src={img2} style={{"height":"45vh"}}/>
                    
                </div>
                <div>
                    <img src={img3} style={{"height":"45vh"}}/>
                </div>
                <div>
                    <img src={img4} style={{"height":"45vh"}}/>
                </div>
            </Carousel>
      </>)
};

export default Main;
