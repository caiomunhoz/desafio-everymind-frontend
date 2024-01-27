import Button from "@mui/material/Button";
import TextField from "@mui/material/TextField";
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import DialogContentText from "@mui/material/DialogContentText";
import DialogTitle from "@mui/material/DialogTitle";
import ApiHandler from "../ApiHandler.jsx";

export default function UpdateDialog({ open, onClose, id, onUpdate }) {
  const { updateProduct } = ApiHandler();
  const handleUpdate = (formJson, id) => {
    updateProduct(formJson, id);
    onUpdate(formJson);
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
          formJson.id = id;
          handleUpdate(formJson);
        },
      }}
    >
      <DialogTitle>Atualizar</DialogTitle>
      <DialogContent>
        <DialogContentText>
          Preencha os campos com os dados atualizados do produto.
        </DialogContentText>
        <TextField
          autoFocus
          required
          margin="dense"
          name="name"
          label="Nome"
          type="text"
          fullWidth
          variant="outlined"
        />
        <TextField
          autoFocus
          required
          margin="dense"
          name="description"
          label="Descrição"
          type="text"
          fullWidth
          variant="outlined"
        />
        <TextField
          autoFocus
          required
          margin="dense"
          name="price"
          label="Preço"
          type="number"
          fullWidth
          variant="outlined"
        />
      </DialogContent>
      <DialogActions>
        <Button variant="outlined" onClick={onClose}>
          Cancelar
        </Button>
        <Button variant="contained" onClick={onClose} type="submit">
          Atualizar
        </Button>
      </DialogActions>
    </Dialog>
  );
}
