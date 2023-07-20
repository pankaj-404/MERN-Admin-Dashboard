import React, { useState } from "react";
import {
  Box,
  Button,
  Card,
  CardActions,
  CardContent,
  Collapse,
  Rating,
  Typography,
  useTheme,
  useMediaQuery,
} from "@mui/material";
import { useGetProductsQuery } from "state/apis.js";
import Header from "components/Header";
import Product from "features/products/Product";

const Products = () => {
  const { data: products, isLoading } = useGetProductsQuery();
  const isNonMobile = useMediaQuery("(min-width:1000)");

  console.log("🚀 ~ file: Products.jsx:19 ~ Products ~ products:", products);

  return (
    <Box sx={{ m: "1rem 2rem" }}>
      <Header title="PRODUCTS" subtitle="See your list of products" />
      {products && !isLoading ? (
        <Box
          mt="1rem"
          display="grid"
          gridTemplateColumns="repeat(4, minmax(0, 1fr))"
          justifyContent="space-between"
          rowGap="20px"
          columnGap="1.33%"
          sx={{
            "& > div": { gridColumn: isNonMobile ? undefined : "span 4" },
            // display: "grid",
            // gridAutoFlow: "row",
            // gridTemplateColumns: "repeat(5, 1fr)",
            // gap: 1,
          }}
        >
          {products.map((product) => (
            <Product key={product._id} data={product} />
          ))}
        </Box>
      ) : (
        <>Loading...</>
      )}
    </Box>
  );
};

export default Products;
