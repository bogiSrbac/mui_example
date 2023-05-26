import { Box, styled, Typography } from '@mui/material'
import React from 'react'

const CustomizeTypography = styled(Typography)`
color: #000055;

:hover {
    color: #75125c;
}
`

const StyledComponentTest = () => {
    return (
        <Box>
            <CustomizeTypography variant='h1'>Ja sam momir</CustomizeTypography>
        </Box>
    )
}

export default StyledComponentTest