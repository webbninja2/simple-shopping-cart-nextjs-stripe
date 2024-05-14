import React from "react";
import Card from "@mui/material/Card";
import CardActionArea from "@mui/material/CardActionArea";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import { Box } from "@mui/material";
import AddToCart from "./AddToCart";
import { Link } from "react-router-dom";

const ProductCard = ({ product }) => {
  return (
    <Card style={{ flex: "1 1 20%", margin: "10px" }} className="productCard">
      <CardActionArea>
        <Link to={`/products/${product.id}`}>
          <Box className="card-media-outer">
            <CardMedia
              component="img"
              height="140"
              image={product.image}
              alt={product.title}
            />
          </Box>
          <CardContent>
            <Typography gutterBottom variant="h5" component="h2">
              {product.title}
            </Typography>
            <Typography variant="body2" color="textSecondary" component="p">
              {product.description}
            </Typography>
            <Typography variant="h6" color="textPrimary" component="p">
              ${product.price}
            </Typography>
          </CardContent>
        </Link>
      </CardActionArea>
      <CardActions>
        <AddToCart product={product} />
      </CardActions>
    </Card>
  );
};

export default ProductCard;
