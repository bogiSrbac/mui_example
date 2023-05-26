import { AppBar, Box, Button, Grid, Tab, Tabs, Toolbar, Typography, useMediaQuery, useTheme } from '@mui/material'
import ShoppingCartCheckoutIcon from '@mui/icons-material/ShoppingCartCheckout';
import React, { useState } from 'react'
import DrawerComponent from './DrawerComponent';

const Navbar = ({ links }) => {
    const theme = useTheme();
    const isMatch = useMediaQuery(theme.breakpoints.down("md"));
    const [value, setValue] = useState(0);
    return (
        <AppBar sx={{ backgroundImage: 'linear-gradient(90deg, rgba(0,0,0,1) 0%, rgba(196,75,18,1) 0%, rgba(81,0,255,1) 100%);' }}>
            <Toolbar>
                {isMatch ? (
                    <>
                        <Typography>
                            <ShoppingCartCheckoutIcon />
                        </Typography>
                        <DrawerComponent link={links} />
                    </>
                ) : (
                    <Grid container sx={{ placeItems: 'center' }}>
                        <Grid
                            item
                            xs={2}>
                            <Typography>
                                <ShoppingCartCheckoutIcon />
                            </Typography>
                        </Grid>
                        <Grid item xs={6}>
                            <Tabs indicatorColor='secondary' textColor='inherit' value={value} onChange={(e, val) => setValue(val)}>
                                {links.map((ele, index) => (
                                    <Tab label={ele} key={index} />
                                ))}
                            </Tabs>
                        </Grid>
                        <Grid item xs={1} />
                        <Grid item xs={3}>
                            <Box display='flex'>
                                <Button sx={{ marginLeft: "auto", background: 'rgba(196,75,18,1)' }} variant='contained'>Login</Button>
                                <Button sx={{ marginLeft: 1, background: "rgba(196,75,18,1)" }} variant='contained'>Signup</Button>
                            </Box>
                        </Grid>
                    </Grid>
                )}


            </Toolbar>
        </AppBar>
    )
}

export default Navbar