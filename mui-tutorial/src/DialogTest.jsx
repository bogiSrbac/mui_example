import React, { useState } from 'react'
import { Button, Dialog, DialogActions, DialogContent, DialogTitle } from '@mui/material';


const DialogTest = () => {
    const [open, setOpen] = useState(false)

  return (
    <div>
        <Button onClick={()=>setOpen(true)}>Open dialog box</Button>
        <Dialog hideBackdrop open={open} onClose={() => setOpen(false)}>
            <DialogTitle>
                This is my Dialog!
            </DialogTitle>
            <DialogContent>
                Dialog is pop up window which can ask user about some usses!
            </DialogContent>
            <DialogActions>
                <Button onClick={() => setOpen(false)}>Cancel</Button>
                <Button onClick={() => setOpen(false)}>Agree</Button>
            </DialogActions>
        </Dialog>
    </div>
  )
}

export default DialogTest;