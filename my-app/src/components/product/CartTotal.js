import React from "react";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import useLocalStorage from "use-local-storage";
import { Box } from "@mui/material";
import { Link } from "react-router-dom";

function CartTotal() {
  const [cart, setCartItems] = useLocalStorage("cart", []);

  const cartQuantity = () => {
    return Array.isArray(cart) ? cart.reduce((total, item) => total + item.quantity, 0) : 0;
  };

  return (
    <Box className="cart-icon">
      <Link to="/cart">
        <ShoppingCartIcon />
      </Link>
      <span>{cartQuantity()}</span>
    </Box>
  );
}

export default CartTotal;
