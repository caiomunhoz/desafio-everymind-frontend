import {
  Dialog,
  DialogActions,
  DialogContent,
  DialogContentText,
  DialogTitle,
  Button,
} from "@mui/material";
import { deleteProduct } from "../ApiHandler";

export default function DeleteAlert({ open, onClose, onDelete, id }) {
  const handleDelete = () => {
    deleteProduct(id);
    onDelete(id);
    onClose();
  };

  return (
    <Dialog open={open}>
      <DialogTitle>Deletar</DialogTitle>
      <DialogContent>
        <DialogContentText>
          Tem certeza que deseja deletar esse produto?
        </DialogContentText>
      </DialogContent>
      <DialogActions>
        <Button variant="outlined" onClick={onClose}>
          Cancelar
        </Button>
        <Button variant="contained" onClick={handleDelete}>
          Deletar
        </Button>
      </DialogActions>
    </Dialog>
  );
}
