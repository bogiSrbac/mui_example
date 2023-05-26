import { Rating, Typography } from '@mui/material'
import { Box } from '@mui/system'
import React, { useState } from 'react'

const RatingTest = () => {
    const [value, setValue] = useState();
    return (
        <Box>
            <Rating
                precision={0.1}
                defaultValue={1.5}
                size='large'
                value={value}
                onChange={(e, val) => setValue(val)}
            />
            <Typography>Rated {value !== undefined ? value : 0}</Typography>
        </Box>
    )
}

export default RatingTest