import { useEffect, useState } from "react";
import { DataGrid } from "@mui/x-data-grid";
import { getProducts } from "./ApiHandler";
import { Box, Container, ButtonGroup } from "@mui/material";
import InsertButton from "./buttons/InsertButton";
import DeleteButton from "./buttons/DeleteButton";
import UpdateButton from "./buttons/UpdateButton";

export default function ProductsTable() {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    async function loadProducts() {
      const response = await getProducts();
      setProducts(response);
    }
    loadProducts();
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

  const currencyFormatter = new Intl.NumberFormat("pt-BR", {
    style: "currency",
    currency: "BRL",
    minimumFractionDigits: 2,
  });

  const brlPrice = {
    type: "number",
    width: 100,
    valueFormatter: ({ value }) => currencyFormatter.format(value),
  };

  const columns = [
    { field: "id", headerName: "ID", width: 70 },
    { field: "name", headerName: "Nome", width: 200 },
    { field: "description", headerName: "Descrição", width: 680 },
    { field: "price", headerName: "Preço", ...brlPrice },
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
    <Container>
      <Box p={1} display="flex" flexDirection="row-reverse">
        <InsertButton onInsert={handleInsert} />
      </Box>
      <Box>
        <DataGrid
          columns={columns}
          rows={products}
          disableRowSelectionOnClick
        ></DataGrid>
      </Box>
    </Container>
  );
}
