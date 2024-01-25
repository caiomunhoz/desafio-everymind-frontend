import { useEffect, useState } from "react";
import { Box, ButtonGroup } from "@mui/material";
import { DataGrid } from "@mui/x-data-grid";
import Typography from "@mui/material/Typography";
import ApiHandler from "./ApiHandler.jsx";
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

  const handleDeleteProduct = (id) => {
    const updatedProducts = products.filter((product) => product.id != id);
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
          <UpdateButton id={params.row.id} />
          <DeleteButton id={params.row.id} onDelete={handleDeleteProduct} />
        </ButtonGroup>
      ),
    },
  ];

  return (
    <Box sx={{ height: 400, width: "100%" }}>
      <Typography>Inventário</Typography>
      <DataGrid rows={products} columns={columns}></DataGrid>
    </Box>
  );
}
