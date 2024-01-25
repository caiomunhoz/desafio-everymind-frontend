import ProductsTable from "./components/ProductsTable.jsx";
import InsertButton from "./components/buttons/InsertButton.jsx";
import "./App.css";
import Stack from "@mui/material/Stack";

function App() {
  return (
    <Stack spacing={2}>
      <ProductsTable />
      <InsertButton />
    </Stack>
  );
}
export default App;
