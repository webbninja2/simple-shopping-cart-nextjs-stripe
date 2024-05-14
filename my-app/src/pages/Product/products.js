import React, { useEffect, useState } from "react";
import productApi from "../../services/product";
import ProductCard from "../../components/product/ProductCard";
import { Container } from "@mui/material";

function AllProducts() {
  const [products, setProducts] = useState([]);

  //get all products
  const getAllProducts = async () => {
    try {
      const response = await productApi.getAllProduct();
      if (response.status === 200) {
        setProducts(response.data);
      }
    } catch (error) {
      console.log(error + " error");
    }
  };

  useEffect(() => {
    getAllProducts();
  }, []);

  return (
    <>
      <Container maxWidth="lg">
        <div
          style={{
            display: "flex",
            flexWrap: "wrap",
            justifyContent: "space-between",
          }}
        >
          {products.length > 0
            ? products.map((item) => (
                <ProductCard key={item.id} product={item} />
              ))
            : "Loading..."}
        </div>
      </Container>
    </>
  );
}

export default AllProducts;
