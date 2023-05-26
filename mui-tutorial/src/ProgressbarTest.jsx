import { CircularProgress, LinearProgress } from '@mui/material'
import { Box } from '@mui/system'
import React from 'react'

const ProgressbarTest = () => {
  return (
    <Box>
        <CircularProgress color='success' variant='determinate' value={75}/>
        <LinearProgress color='info' variant='determinate' value={25}/>
    </Box>
  )
}

export default ProgressbarTest