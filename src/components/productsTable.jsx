import { useEffect, useState } from "react";
import { Box, ButtonGroup } from "@mui/material";
import { DataGrid } from "@mui/x-data-grid";
import Typography from "@mui/material/Typography";
import ApiHandler from "./ApiHandler.jsx";
import InsertButton from "./buttons/InsertButton.jsx";
import DeleteButton from "./buttons/DeleteButton.jsx";
import UpdateButton from "./buttons/UpdateButton.jsx";

export default function ProductsTable() {
  const { getProducts } = ApiHandler();
  const [products, setProducts] = useState([]);

  useEffect(() => {
    async function fetchProducts() {
      const response = await getProducts();
      setProducts(response);
    }
    fetchProducts();
  }, []);

  const handleDelete = (id) => {
    const updatedProducts = products.filter((product) => product.id != id);
    setProducts(updatedProducts);
  };

  const handleUpdate = (updatedProduct) => {
    const updatedProducts = [...products];
    const index = updatedProducts.findIndex(
      (product) => product.id === updatedProduct.id
    );
    updatedProducts[index] = updatedProduct;
    setProducts(updatedProducts);
  };

  const handleInsert = (newProduct) => {
    const lastProduct = products[products.length - 1];
    newProduct.id = lastProduct.id + 1;
    const updatedProducts = [...products, newProduct];
    setProducts(updatedProducts);
  };

  const columns = [
    { field: "id", headerName: "ID", width: 70 },
    { field: "name", headerName: "Nome", width: 200 },
    { field: "description", headerName: "Descrição", width: 700 },
    { field: "price", headerName: "Preço", width: 70 },
    {
      field: "actions",
      headerName: "Ações",
      type: "actions",
      renderCell: (params) => (
        <ButtonGroup>
          <UpdateButton id={params.row.id} onUpdate={handleUpdate} />
          <DeleteButton id={params.row.id} onDelete={handleDelete} />
        </ButtonGroup>
      ),
    },
  ];

  return (
    <Box sx={{ height: 400, width: "100%" }}>
      <Typography>Inventário</Typography>
      <DataGrid rows={products} columns={columns}></DataGrid>
      <InsertButton onInsert={handleInsert} />
    </Box>
  );
}
