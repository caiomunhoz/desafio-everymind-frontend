import { useEffect, useState } from "react";
import axios from "axios";

const API_URL = "http://localhost:8080/products";

export default function apiHandler() {
  const [products, setProducts] = useState([]);
  useEffect(() => {
    getProducts();
  }, []);

  const getProducts = async () => {
    try {
      const response = await axios.get(API_URL);
      setProducts(response.data);
    } catch (error) {
      console.error("Failed to fetch products:", error);
    }
  };

  return products;
}
