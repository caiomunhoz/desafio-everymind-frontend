import { useState } from "react";
import { IconButton } from "@mui/material";
import DeleteIcon from "@mui/icons-material/Delete";
import DeleteAlert from "../dialogs/DeleteAlert";

export default function DeleteButton({ id, onDelete }) {
  const [open, setOpen] = useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);
  return (
    <div>
      <IconButton onClick={handleOpen} title={"Deletar"}>
        <DeleteIcon />
      </IconButton>
      <DeleteAlert
        open={open}
        onClose={handleClose}
        onDelete={onDelete}
        id={id}
      ></DeleteAlert>
    </div>
  );
}
