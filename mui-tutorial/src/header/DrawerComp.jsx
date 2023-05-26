import { Drawer, IconButton, List, ListItemButton, ListItemIcon, ListItemText } from '@mui/material'
import React, { useState } from 'react'
import MenuIcon from '@mui/icons-material/Menu';
const DrawerComp = ({ links }) => {
    const [open, setOpen] = useState(false);
    return (
        <React.Fragment>
            <Drawer open={open} onClose={() => setOpen(false)} >
                <List>

                    {links.map((link, index) => (
                        <ListItemButton key={index} onClick={() => setOpen(false)}>
                            <ListItemIcon>
                                <ListItemText>{link}</ListItemText>
                            </ListItemIcon>
                        </ListItemButton>
                    ))}


                </List>
            </Drawer>
            <IconButton onClick={() => setOpen(!open)} sx={{ marginLeft: 'auto', color: 'inherit' }}>
                <MenuIcon />
            </IconButton>
        </React.Fragment>
    )
}

export default DrawerComp