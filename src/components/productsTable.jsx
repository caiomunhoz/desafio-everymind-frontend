import { Box, ButtonGroup } from "@mui/material";
import { DataGrid } from "@mui/x-data-grid";
import Typography from "@mui/material/Typography";
import ApiHandler from "./ApiHandler.jsx";
import DeleteButton from "./buttons/DeleteButton.jsx";
import UpdateButton from "./buttons/UpdateButton.jsx";

export default function ProductsTable() {
  const { products } = ApiHandler();

  const columns = [
    { field: "id", headerName: "ID", width: 70 },
    { field: "name", headerName: "Nome", width: 200 },
    { field: "description", headerName: "Descrição", width: 700 },
    { field: "price", headerName: "Preço", width: 70 },
    {
      field: "actions",
      headerName: "Ações",
      type: "actions",
      renderCell: () => (
        <ButtonGroup>
          <DeleteButton />
          <UpdateButton />
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
