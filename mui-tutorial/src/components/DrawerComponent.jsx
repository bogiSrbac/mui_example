import { Drawer, IconButton, List, ListItemButton, ListItemIcon, ListItemText } from '@mui/material'
import React, { useState } from 'react'
import MenuRoundedIcon from '@mui/icons-material/MenuRounded';

const DrawerComponent = ({ link }) => {
    const [open, setOpen] = useState(false);
    return (
        <>
            <Drawer
                PaperProps={{
                    sx:{backgroundColor:"rgba(196,75,18,1)"}
                }}
                open={open}
                onClose={() => setOpen(false)}
            >
                <List>
                    {link.map((e, index) => (
                        <ListItemButton key={index} divider>
                            <ListItemIcon>
                                <ListItemText onClick={() => setOpen(false)} sx={{color:"white"}}>{e}</ListItemText>
                            </ListItemIcon>
                        </ListItemButton>
                    ))}

                </List>
            </Drawer>
            <IconButton sx={{marginLeft:"auto", color:"white"}} onClick={() => setOpen(!open)}>
                <MenuRoundedIcon />
            </IconButton>
        </>
    )
}

export default DrawerComponent