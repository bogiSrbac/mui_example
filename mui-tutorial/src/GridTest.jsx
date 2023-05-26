import { Grid } from '@mui/material'
import { Box } from '@mui/system'
import React from 'react'

const GridTest = () => {
    return (
        <Box>
            <Grid container spacing={3}>
                <Grid
                    item
                    sx={{ background: "yellow" }}
                    xs={12}
                    sm={6}
                    md={4}
                    lg={3}>
                    Item
                </Grid>

                <Grid
                    item
                    sx={{ background: "yellow" }}
                    xs={12}
                    sm={6}
                    md={4}
                    lg={3}>
                    Item
                </Grid>

                <Grid
                    item
                    sx={{ background: "yellow" }}
                    xs={12}
                    sm={6}
                    md={4}
                    lg={3}>
                    Item
                </Grid>

                <Grid
                    item
                    sx={{ background: "yellow" }}
                    xs={12}
                    sm={6}
                    md={4}
                    lg={3}>
                    Item
                </Grid>

            </Grid>
        </Box>
    )
}

export default GridTest