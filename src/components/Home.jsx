import { Navbar, Main, Product, Footer } from ".";
import { electronics, grocery, furniture,mobile } from "./Data";
import offer1 from "./Images/offer1.jpg";
import offer2 from "./Images/offer2.jpg";
import offer3 from "./Images/imagesidescrolling5.jpg";


function Home() {
  var grocery_main = grocery.slice(0, 4 );
var electronics_main = electronics.slice(0, 4 );
var furniture_main = furniture.slice(0, 4 );
var mobile_main = mobile.slice(0, 4 );
  return (
    <>
      {/* <Navbar /> */}
      <Main />
      <Product name={electronics_main} 
        head="Electronics"
      />
      <img src={offer3} style={{"width":"100%"}}/>
      <Product name={grocery_main}
        head="Grocery"
      />

      
      <img src={offer2} style={{"width":"100%"}}/>

      <Product name={furniture_main}
        head="Furniture"
      />
      <img src={offer1} style={{"width":"100%"}}/>

      <Product name={mobile_main}
        head="Mobiles"
      />
      {/* <Footer /> */}
    
    </>
  )
}

export default Home