import { Button, Drawer, List, ListItemButton, ListItemText } from '@mui/material'
import { Box } from '@mui/system'
import React, { useState } from 'react'

const arroptions = ["Profile", "Balance", "Logout"];

const DrawerTest = () => {
    const [openDrawer, setOpenDrawer] = useState(false)
  return (
    <Box>
        <Button onClick={() => setOpenDrawer(true)}>Open Drawer</Button>
        <Drawer anchor='right' open={openDrawer} onClose={() => setOpenDrawer(false)}>
            <List>
                {arroptions.map((elem) => (
                    <ListItemButton onClick={() => setOpenDrawer(false)}>
                        <ListItemText primary={elem} />
                    </ListItemButton>
                ))}
            </List>
        </Drawer>
    </Box>
  )
}

export default DrawerTest