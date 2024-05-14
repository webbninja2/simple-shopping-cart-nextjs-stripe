import React from "react";
import { Button } from "@material-ui/core";
import useLocalStorage from "use-local-storage";

function AddToCart({ product }) {
  const [cartItems, setCartItems] = useLocalStorage("cart", []);

  ///add to cart handler
  const addToCartHandler = () => {
    const currentCart = Array.isArray(cartItems) ? cartItems : [];
    const checkExistingIndex = currentCart.findIndex(
      (item) => item.id === product.id
    );
    if (checkExistingIndex !== -1) {
      const updatedCart = [...currentCart];
      updatedCart[checkExistingIndex].quantity += 1;
      setCartItems(updatedCart);
    } else {
      const updatedCart = [...currentCart, { ...product, quantity: 1 }];
      setCartItems(updatedCart);
    }
  };
  return (
    <Button variant="contained" onClick={addToCartHandler}>
      Add to Cart
    </Button>
  );
}

export default AddToCart;
