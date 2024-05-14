import React, { useEffect } from "react";
import {
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Paper,
  Button,
  Grid,
} from "@mui/material";
import useLocalStorage from "use-local-storage";
import { Container, Typography } from "@material-ui/core";
import DeleteIcon from "@mui/icons-material/Delete";
import { Link } from "react-router-dom";
const Cart = () => {
  const [cart, setCart] = useLocalStorage("cart", []);
  const [cartTotal, setCartTotal] = useLocalStorage("cartTotal");

  ///cart increment handler
  const handleIncrement = (index) => {
    const updatedCart = [...cart];
    const defaultPrice = updatedCart[index].price / updatedCart[index].quantity;
    console.log("defaultPrice", defaultPrice);
    updatedCart[index].quantity += 1;
    updatedCart[index].price = defaultPrice * updatedCart[index].quantity;
    console.log("updatedCart", updatedCart);
    setCart(updatedCart);
  };

  //increment handler
  const handleDecrement = (index) => {
    const updatedCart = [...cart];
    const defaultPrice = updatedCart[index].price / updatedCart[index].quantity;

    if (updatedCart[index].quantity > 1) {
      updatedCart[index].quantity -= 1;
      updatedCart[index].price = defaultPrice * updatedCart[index].quantity;

      setCart(updatedCart);
    }
  };

  // product delete handler
  const handleDelete = (index) => {
    const deleteCartItem = cart.filter((_, i) => i !== index);
    setCart(deleteCartItem);
  };
  const cartTotalHandler = () => {
    setCartTotal(cart.reduce((total, item) => total + item.price, 0));
  };
  useEffect(() => {
    cartTotalHandler();
  }, []);
  return (
    <Container maxWidth="lg">
      <Typography variant="h4" className="text-3xl font-bold mb-8">
        Cart
      </Typography>
      <Grid container spacing={2}>
        {cart.length > 0 ? (
          <>
            <Grid item xs={8}>
              <TableContainer component={Paper}>
                <Table>
                  <TableHead>
                    <TableRow>
                      <TableCell>Image</TableCell>
                      <TableCell>Item</TableCell>
                      <TableCell>Quantity</TableCell>
                      <TableCell>Price</TableCell>
                      <TableCell>Action</TableCell>
                    </TableRow>
                  </TableHead>
                  <TableBody>
                    {Array.isArray(cart) &&
                      cart.map((row, index) => (
                        <TableRow key={index}>
                          <TableCell>
                            <img
                              src={`${row.image}`}
                              width="50px"
                              height="50px"
                              alt={row.title}
                            />
                          </TableCell>
                          <TableCell>{row.title}</TableCell>
                          <TableCell>
                            <span className="quantity-outer">
                              <Button onClick={() => handleDecrement(index)}>
                                -
                              </Button>
                              {row.quantity.toFixed(2)}
                              <Button onClick={() => handleIncrement(index)}>
                                +
                              </Button>
                            </span>
                          </TableCell>
                          <TableCell>{row.price}</TableCell>
                          <TableCell>
                            <Button onClick={() => handleDelete(index)}>
                              <DeleteIcon />
                            </Button>
                          </TableCell>
                        </TableRow>
                      ))}
                  </TableBody>
                </Table>
              </TableContainer>
            </Grid>

            <Grid item xs={4}>
              <Table>
                <TableBody>
                  <TableRow>
                    <TableCell>Total</TableCell>
                    <TableCell>
                      {cart.reduce((total, item) => total + item.price, 0)}
                    </TableCell>
                  </TableRow>
                </TableBody>
              </Table>
              <Link
                className="checkOutbutton"
                to="/checkout"
                variant="contained"
                color="primary"
                fullWidth
              >
                Proceed to checkout
              </Link>
            </Grid>
          </>
        ) : (
          <Typography className="empty-cart">
            Your cart is empty go back to <Link to="/">Shopping</Link>
          </Typography>
        )}
      </Grid>
    </Container>
  );
};

export default Cart;
