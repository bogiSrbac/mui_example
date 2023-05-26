import { Alert, Button, Snackbar } from '@mui/material'
import { Box } from '@mui/system'
import React, { useState } from 'react'

const SnackbarTest = () => {

  const [open, setOpen] = useState(false)
  return (
    <Box>
      <Button variant='contained' onClick={() => setOpen(true)}>Open snack bar</Button>
      <Snackbar
      onClose={() => setOpen(false)}
      autoHideDuration={3000}
      open={open}
      message="You opened a snackbar">
        <Alert severity='success'>
          This is success message!
        </Alert>
      </Snackbar>
      
        
    </Box>
  )
}

export default SnackbarTest