import React from 'react'
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import { AppBar, Box, IconButton, Toolbar } from '@mui/material';


const IconsTest = () => {
    return (
        <Box>
            <AppBar>
                <Toolbar>
                    <IconButton>
                        <AccountCircleIcon />
                    </IconButton>
                </Toolbar>
            </AppBar>
        </Box>
    )
}

export default IconsTest