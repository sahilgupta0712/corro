import { NavLink } from "react-router-dom";
import ShowProducts from "./showproducts";

const Products = (props) => {
  let a=props.name
  let b=props.head
  return (
    <>
      <div className="container my-3 py-3 ">
        <div className="row">
          <div className="col-12">
            <h2 className="display-5 text-center "><NavLink to={b} style={{textDecoration:"none"}}>{b}</NavLink></h2>
            <hr />
          </div>
        </div>
        <div className="row justify-content-center">
          {<ShowProducts name={a}/>}
        </div>
      </div>
    </>
  );
};

export default Products;