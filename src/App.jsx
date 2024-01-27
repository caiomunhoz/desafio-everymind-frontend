import ProductsTable from "./components/ProductsTable.jsx";
import Stack from "@mui/material/Stack";
import Typography from "@mui/material/Typography";

function App() {
  return (
    <Stack
      direction="column"
      justifyContent="center"
      alignItems="center"
      spacing={2}
      padding={2}
    >
      <Typography variant="h4" component="h1">
        Tabela de produtos
      </Typography>
      <ProductsTable />
    </Stack>
  );
}
export default App;
