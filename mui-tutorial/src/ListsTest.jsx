import { Collapse, List, ListItem, ListItemButton, ListItemIcon, ListItemText } from '@mui/material'
import React, { useState } from 'react'

const ListsTest = () => {
    const array = ["First", "Second", "Third", "Fourth", "Fifth"]
    const [open, setOpen] = useState(false)

    const handleOpen = () => {
        if(open===false){
            setOpen(true)
        }else{
            setOpen(false)
        }
    }
    return (
        <div>
            <List sx={{ width: 300, background: "green" }}>
                <ListItem divider>
                    <ListItemButton onClick={handleOpen}>
                        <ListItemIcon>{">"}</ListItemIcon>
                        <ListItemText primary={"Expend List"} />
                    </ListItemButton>
                </ListItem>
            </List>
            <Collapse in={open}>
                <List sx={{ marginLeft: 25, background: "grey" }}>
                    {array.map((elem) => (
                        <ListItem divider>
                            <ListItemButton onClick={()=>setOpen(false)}>
                                <ListItemText primary={elem} />
                            </ListItemButton>
                        </ListItem>
                    ))}
                </List>
            </Collapse>
        </div>
    )
}

export default ListsTest