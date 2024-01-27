import { useState } from "react";
import { Button } from "@mui/material";
import AddIcon from "@mui/icons-material/Add";
import InsertDialog from "../dialogs/InsertDialog";

export default function InsertButton({ onInsert }) {
  const [open, setOpen] = useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  return (
    <div>
      <Button
        title={"Inserir item"}
        variant="contained"
        startIcon={<AddIcon />}
        onClick={handleOpen}
      >
        Inserir item
      </Button>
      <InsertDialog
        open={open}
        onClose={handleClose}
        onInsert={onInsert}
      ></InsertDialog>
    </div>
  );
}
