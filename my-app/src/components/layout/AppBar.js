import * as React from "react";
import Box from "@mui/material/Box";
import CssBaseline from "@mui/material/CssBaseline";
import Typography from "@mui/material/Typography";
import { Link } from "react-router-dom";
import { Container } from "@material-ui/core";
import { AppBar } from "@mui/material";
import CartTotal from "../product/CartTotal";
function HeaderTopBar() {
  return (
    <Box sx={{ display: "flex" }}>
      <CssBaseline />
      <AppBar component="nav">
        <Container maxWidth="lg">
          <Box className="topBarOuter">
            <Typography
              variant="h6"
              component="div"
              sx={{ flexGrow: 1, display: { xs: "none", sm: "block" } }}
            >
              <Link to="/"> My Shop</Link>
            </Typography>

            <CartTotal />
          </Box>
        </Container>
      </AppBar>
    </Box>
  );
}

export default HeaderTopBar;
