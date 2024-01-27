import { useState } from "react";
import { IconButton } from "@mui/material";
import Edit from "@mui/icons-material/Edit";
import UpdateDialog from "../dialogs/UpdateDialog.jsx";

export default function UpdateButton({ id, onUpdate }) {
  const [open, setOpen] = useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  return (
    <div>
      <IconButton onClick={handleOpen} title={"Editar"}>
        <Edit />
      </IconButton>
      <UpdateDialog
        open={open}
        onClose={handleClose}
        onUpdate={onUpdate}
        id={id}
      ></UpdateDialog>
    </div>
  );
}
