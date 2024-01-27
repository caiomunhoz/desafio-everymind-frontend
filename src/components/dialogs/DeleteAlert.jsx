import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import DialogContentText from "@mui/material/DialogContentText";
import DialogTitle from "@mui/material/DialogTitle";
import Button from "@mui/material/Button";
import ApiHandler from "../ApiHandler.jsx";

export default function DeleteAlert({ open, onClose, onDelete, id }) {
  const { deleteProduct } = ApiHandler();
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
