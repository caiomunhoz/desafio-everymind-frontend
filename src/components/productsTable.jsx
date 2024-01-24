import apiHandler from "./apiHandler.jsx";
import { DataGrid } from "@mui/x-data-grid";
import { Box } from "@mui/material";

export default function ProductsTable() {
  const products = apiHandler();

  const columns = [
    { field: "id", headerName: "ID", width: 70 },
    { field: "name", headerName: "Nome", width: 200 },
    { field: "description", headerName: "Descrição", width: 700 },
    { field: "price", headerName: "Preço", width: 70 },
  ];

  console.log(products);

  return (
    <Box sx={{ height: 400, width: "100%" }}>
      <DataGrid rows={products} columns={columns}></DataGrid>
    </Box>
  );
}
