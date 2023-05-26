import { Alert, Button } from '@mui/material'
import { Box } from '@mui/system'
import React, { useState } from 'react'

const AlertTest = () => {
    const [show, setShow] = useState(false)
    
  return (
    <Box>
        <Button onClick={()=>setShow(true)}>Alert</Button>
        {show && (
            <Alert onClose={()=>setShow(false)} severity='info'>Thi is an Info Alert</Alert>
        )}
        
    </Box>
  )
}

export default AlertTest