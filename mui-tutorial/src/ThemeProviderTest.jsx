import { Box, Typography, useTheme } from '@mui/material'
import React from 'react'

const ThemeProviderTest = () => {
    const theme = useTheme();
    console.log(theme);
  return (
    <Box>
        <Typography variant='h2' color='primary'>Ja sam nova primary boja</Typography>
    </Box>
  )
}

export default ThemeProviderTest