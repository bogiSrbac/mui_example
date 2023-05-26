import { AppBar, Button, Tab, Tabs, Toolbar, Typography, useMediaQuery, useTheme } from '@mui/material'
import ShoppingCartCheckoutIcon from '@mui/icons-material/ShoppingCartCheckout'; import React, { useState } from 'react'
import DrawerComp from './DrawerComp';

const PAGES = ["Products", "Services", "AboutUS", "ContactUS", "Login", "SignUp"]

PAGES.map((page) => {
    if(page !== "Login"){
        console.log(page)
    }
    
})

const Header = () => {
    const [value, SetValue] = useState(0);

    const theme = useTheme();
    const isMatch = useMediaQuery(theme.breakpoints.down('md'))
    return (
        <React.Fragment>
            <AppBar sx={{ background: '#063970' }}>
                <Toolbar>
                    <ShoppingCartCheckoutIcon />
                    {isMatch ? (
                        <>
                            <DrawerComp links={PAGES}/>
                        </>
                    ) : (
                        <>
                            <Tabs sx={{ marginLeft: "auto" }} textColor="inherit" value={value} indicatorColor="primary" onChange={(e, value) => SetValue(value)}>
                                {
                                    PAGES.map((page, index) => {
                                        if(page !== "Login" && page !== "SignUp"){

                                            return <Tab label={page} key={index} />
                                        }})                                             
                                }                                                              
                            </Tabs>

                            <Button sx={{ marginLeft: "auto" }} variant='contained'>Login</Button>
                            <Button sx={{ marginLeft: '10px' }} variant='contained'>SignUp</Button>
                        </>
                    )}

                </Toolbar>
            </AppBar>
        </React.Fragment>
    )
}

export default Header