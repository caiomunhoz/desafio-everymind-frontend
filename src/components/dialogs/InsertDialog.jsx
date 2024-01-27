import {
  Button,
  TextField,
  Dialog,
  DialogActions,
  DialogContent,
  DialogContentText,
  DialogTitle,
} from "@mui/material";
import { insertProduct } from "../ApiHandler";

export default function InsertDialog({ open, onClose, onInsert }) {
  const handleInsert = (formJson) => {
    insertProduct(formJson);
    onInsert(formJson);
    onClose();
  };

  return (
    <Dialog
      open={open}
      PaperProps={{
        component: "form",
        onSubmit: (event) => {
          event.preventDefault();
          const formData = new FormData(event.currentTarget);
          const formJson = Object.fromEntries(formData.entries());
          handleInsert(formJson);
        },
      }}
    >
      <DialogTitle>Inserir</DialogTitle>
      <DialogContent>
        <DialogContentText>
          Preencha os campos com os dados do produto que deseja cadastrar na
          base de dados.
        </DialogContentText>
        <TextField
          autoFocus
          required
          margin="dense"
          name="name"
          label="Nome"
          type="text"
          fullWidth
          variant="standard"
        />
        <TextField
          autoFocus
          required
          margin="dense"
          name="description"
          label="Descrição"
          type="text"
          fullWidth
          variant="standard"
        />
        <TextField
          autoFocus
          required
          margin="dense"
          name="price"
          label="Preço"
          type="number"
          fullWidth
          variant="standard"
        />
      </DialogContent>
      <DialogActions>
        <Button variant="outlined" onClick={onClose}>
          Cancelar
        </Button>
        <Button variant="contained" onClick={onClose} type="submit">
          Cadastrar
        </Button>
      </DialogActions>
    </Dialog>
  );
}
