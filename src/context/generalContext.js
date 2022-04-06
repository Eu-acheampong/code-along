import React, { useContext } from 'react'

const generalContext = () => {

    export default function generalContextProvider(props) {
        const [state, setState] = useState(initialState);

        const addToCart = (product) => {
            const productInCart = state.cart.find(prod.id === product.id);
            if (productInCart) {
                const newCart = state.cart.map(item => {
                    return{
                        ...product,
                        quantity: product.quality + 1,
                    };
                }
                return item;
             } ); 
             setState((prevState) => {
                 return {
                     ...prevState,
                     cart: newCart,
                 };

             });
              }  else{
                 const newProduct, = {
                     ...product,
                     quantity: 1,
                 };
                 setState((prevState) = {
                    return {
                        ...prevState,
                         cart: [...state.cart,newProduct],
                    }
                 })

             }   
            }
        };

    

  return (
      <generalContext.Provider value={{state}, addToCart}>
          {props.children}
      </generalContext.Provider>
    
  );
}
 export const useGneralContextContext = () => {
     return useContext(GeneralContext);
 }
export default generalContext