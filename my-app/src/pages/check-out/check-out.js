import React, { useEffect, useState } from "react";
import {
  Container,
  Typography,
  Grid,
  Table,
  TableBody,
  TableRow,
  TableCell,
  TableHead,
} from "@mui/material";
import useLocalStorage from "use-local-storage";
import StripeCheckout from "react-stripe-checkout";

const CheckOut = () => {
  const [cartTotal, setCartTotal] = useLocalStorage("cartTotal");
  const [cart, setCart] = useLocalStorage("cart");
  const [shipping, setShipping] = useState();
  const [userData, setUserData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    address: "",
    city: "",
    zip: "",
  });

  const onToken = (token) => {
    if (token) {
      setShipping(token);
      setCart([]);
      setCartTotal([]);
    }

    console.log("token", token);
  };

  useEffect(() => {}, [shipping]);
  console.log("userData", shipping);
  return (
    <Container maxWidth="md">
      <Grid container spacing={2}>
        {shipping ? (
          <Grid item xs={12}>
            <Typography variant="h4" align="left" gutterBottom>
              Thank you, your order has been successfully submitted.
            </Typography>
            <Table>
              <TableHead>
                <TableRow>
                  <TableCell>id</TableCell>
                  <TableCell>Client Ip</TableCell>
                  <TableCell>Email{cartTotal}</TableCell>
                  <TableCell>Address</TableCell>
                  <TableCell>Country</TableCell>
                  <TableCell>type</TableCell>
                </TableRow>
              </TableHead>
              <TableBody>
                <TableRow key={shipping.id}>
                  <TableCell>{shipping.id}</TableCell>
                  <TableCell>{shipping.email}</TableCell>
                  <TableCell>{shipping.email}</TableCell>
                  <TableCell>{shipping.card.address_city}</TableCell>
                  <TableCell>{shipping.card.address_country}</TableCell>
                  <TableCell>{shipping.type}</TableCell>
                </TableRow>
              </TableBody>
            </Table>
          </Grid>
        ) : (
          <Grid item xs={4}>
            <Typography variant="h4" align="left" gutterBottom>
              Checkout
            </Typography>
            <Table>
              <TableBody>
                <TableRow>
                  <TableCell>Total</TableCell>
                  <TableCell>{cartTotal}</TableCell>
                </TableRow>
              </TableBody>
            </Table>

            {/* https://www.npmjs.com/package/react-stripe-checkout */}
            <StripeCheckout
              token={onToken}
              name="Pay with cart"
              currency="USD"
              amount={cartTotal * 100}
              stripeKey="pk_test_51PDM1TSGsnyhVF2ROmtUV6uNE3WOwQgGvuA4lJsR5vENJ8R96GMka1EUEQS66ruwrcTBjri7416JEDHjRO6ljcoy00LFMwLurt"
              allowRememberMe={true}
              billingAddress={userData}
            />
          </Grid>
        )}
      </Grid>
      {/* </form> */}
    </Container>
  );
};

export default CheckOut;
