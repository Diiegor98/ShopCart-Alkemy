import { useState, useEffect } from "react";
import Cards from "./Cards";
import axios from "axios";
import { Box } from "@mui/material";

const CardsContainer = () => {
  const [products, setProducts] = useState([]);

  const apiData = () =>
    axios
      .get("https://fakestoreapi.com/products")
      .then((response) => {
        setProducts(response.data);
      })
      .catch((error) => {
        console.log(error);
      });

  useEffect(() => {
    apiData();
  },[]);

  return (
    <Box
      sx={{
        display: "flex",
        justifyContent: "center",
        alignContent: "center",
        alignItems: "center",
        flexWrap: "wrap",
        gap: 2,
        mb: 3
      }}
    >
      {products.map((producto) => {
        return (
          <Cards
            key={producto.id}
            title={producto.title}
            price={producto.price}
            category={producto.category}
            description={producto.description}
            image={producto.image}
          />
        );
      })}
    </Box>
  );
};

export default CardsContainer;


