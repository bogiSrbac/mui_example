import { Box, Button, Modal, Typography } from '@mui/material'
import React,  {useState} from 'react'

const ModalTest = () => {
    const [open, setOpen] = useState(false)

    return (
      <div>
          <Button onClick={()=>setOpen(true)}>Open modal</Button>
          <Modal open={open} onClose={() => setOpen(false)}>
              <Box position="absolute" top="50%" left="50%">
                <Typography>This is ours Modal</Typography>
                <Button variant='contained' onClick={() => setOpen(false)}>Click me</Button>
              </Box>
          </Modal>
      </div>
  )
}

export default ModalTest