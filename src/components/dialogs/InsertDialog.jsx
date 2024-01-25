import Button from "@mui/material/Button";
import TextField from "@mui/material/TextField";
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import DialogContentText from "@mui/material/DialogContentText";
import DialogTitle from "@mui/material/DialogTitle";

export default function InsertModal({ open, onClose }) {
  return (
    <Dialog
      open={open}
      onClose={onClose}
      PaperProps={{
        component: "form",
        onSubmit: (event) => {
          event.preventDefault();
          const formData = new FormData(event.currentTarget);
          const formJson = Object.fromEntries(formData.entries());
          console.log(formJson);
          onClose();
        },
      }}
    >
      <DialogTitle>Cadastrar</DialogTitle>
      <DialogContent>
        <DialogContentText>
          Preencha os campos com os dados do produto que deseja cadastrar na
          base de dados.
        </DialogContentText>
        <TextField
          autoFocus
          required
          margin="dense"
          name="product_name"
          label="Nome"
          type="text"
          fullWidth
          variant="standard"
        />
        <TextField
          autoFocus
          required
          margin="dense"
          name="product_description"
          label="Descrição"
          type="text"
          fullWidth
          variant="standard"
        />
        <TextField
          autoFocus
          required
          margin="dense"
          name="product_price"
          label="Preço"
          type="number"
          fullWidth
          variant="standard"
        />
      </DialogContent>
      <DialogActions>
        <Button onClick={onClose}>Cancelar</Button>
        <Button onClick={onClose} type="submit">
          Cadastrar
        </Button>
      </DialogActions>
    </Dialog>
  );
}
