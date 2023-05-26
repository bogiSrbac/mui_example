import React, { useState } from 'react'
import { Tabs, Tab, AppBar, Toolbar } from '@mui/material'

const Test2 = () => {
  const [value, setValue] = useState();
  return (
    <div>
      <AppBar>
        <Toolbar>
        <Tabs indicatorColor='secondary' textColor='inherit' value={value} onChange={(e, val) => setValue(val)}>
            <Tab label="First"></Tab>
            <Tab label="Second"></Tab>
            <Tab label="Third"></Tab>
        </Tabs>

        </Toolbar>
      </AppBar>
        
    </div>
  )
}

export default Test2;