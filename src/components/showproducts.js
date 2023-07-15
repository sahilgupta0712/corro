import React from "react";
import { useDispatch } from "react-redux";
import { addCart } from "../redux/action";
const ShowProducts = (props) => {
    const dispatch = useDispatch();
  const addProduct = (product) => {
    dispatch(addCart(product))
  } 
    let a=props.name
    return (
      <>
        {a.map((product) => {
          return (
            <div id={product.id} key={product.id} className="col-md-3 col-sm-6 col-xs-8 col-12 mb-4 ">
              <div className="card text-center h-40  " key={product.id}>
                <img
                
                  className="card-img-top p-5"
                  src={product.image}
                  alt="Card"
                  height={300}
                  
                  
                />
                <div className="card-body">
                  <h5 className="card-title">
                    {product.title}
                  </h5>
                </div>
                <ul className="list-group list-group-flush">
                  <li className="list-group-item lead"><i class="fa fa-rupee"></i> {product.price}</li>
                </ul>
                <div className="card-body">
                  <button className="btn btn-dark m-1" onClick={() => addProduct(product)}>
                    Add to Cart
                  </button>
                </div>
              </div>
            </div>

          );
        })}
      </>
    );
  };
  
  export default ShowProducts