import { useEffect, useState } from "react";
import axios from "axios";

const API_URL = "http://localhost:8080/products";

export default function ApiHandler() {
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

  const insertProduct = async (newProduct) => {
    try {
      const response = await axios.post(API_URL, newProduct);
      setProducts([...products, response.data]);
    } catch (error) {
      console.error("Failed to insert product:", error);
    }
  };

  return { products, insertProduct };
}
