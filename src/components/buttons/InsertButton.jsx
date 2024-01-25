import InsertDialog from "../dialogs/InsertDialog";
import { useState } from "react";
import { Button } from "@mui/material";

export default function InsertButton() {
  const [open, setOpen] = useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  return (
    <div>
      <Button onClick={handleOpen}>Inserir item</Button>
      <InsertDialog open={open} onClose={handleClose}></InsertDialog>
    </div>
  );
}
