import React from 'react'
import { AppBar, Button, Toolbar, Typography } from '@mui/material'

const Test1 = () => {
    return (
        <div>
            <AppBar>
                <Toolbar>
                    <Typography>LOGO</Typography>
                    <Button variant='contained' sx={{marginLeft:"auto"}} color='success'>LogIn</Button>
                </Toolbar>
            </AppBar>
        </div>
    )
}

export default Test1