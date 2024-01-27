import axios from "axios";

const API_URL = "http://localhost:8080/products";

export const getProducts = async () => {
  try {
    const response = await axios.get(API_URL);
    return response.data;
  } catch (error) {
    console.error("Failed to fetch products:", error);
  }
};
export const insertProduct = async (newProduct) => {
  try {
    await axios.post(API_URL, newProduct);
  } catch (error) {
    console.error("Failed to insert product:", error);
  }
};

export const updateProduct = async (updatedProduct, productID) => {
  try {
    await axios.put(API_URL + "/" + productID, updatedProduct);
  } catch (error) {
    console.error("Failed to insert product:", error);
  }
};

export const deleteProduct = async (productID) => {
  try {
    await axios.delete(API_URL + "/" + productID);
  } catch {
    console.error("Failed to delete product:", error);
  }
};
