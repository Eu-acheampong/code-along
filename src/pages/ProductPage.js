import React from 'react';
import {useNavigate} from "react-router-dom"; 
import {useAthContext} from "../context/authContext";
import {useGneralContext} from "../context/genralContext";
 
const ProductPage = () => {
    const navigate} = useNavigate();
    const {username, isLoggedIn, token} = useAthContext();
    const state = useGeneralContext();
    console.log(state);

  return (
    <div>
        {state.products.map((product) => (
            <div>
            <h3>Name: {product.name}</h3>
            <h4>Price {product.price}</h4>
            <button onClick={() => addToCart(product)}>Add To Cart</button>
            </div>
        ))}
        </div>
  );
};

export default ProductPage