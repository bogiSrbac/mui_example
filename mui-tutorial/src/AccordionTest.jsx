import { Accordion, AccordionDetails, AccordionSummary, Typography } from '@mui/material'
import { Box } from '@mui/system'
import React, { useState } from 'react'

const AccordionTest = () => {
  const [accordion, setAccordion] = useState("")
  return (
    <Box>
      <Accordion expanded={accordion==="test1"} onChange={() => setAccordion("test1")}>
        <AccordionSummary expandIcon={">"}>
          <Typography>Test 1</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>Consequat do minim cillum esse aliquip qui consequat occaecat dolor. Veniam ea incididunt magna in non qui. Voluptate est eiusmod adipisicing commodo nisi ex voluptate qui labore officia aliquip voluptate. Ea duis tempor incididunt dolore. Tempor aliquip duis aliqua eu enim incididunt deserunt.</Typography>
        </AccordionDetails>
      </Accordion>

      <Accordion expanded={accordion==="test2"} onChange={() => setAccordion("test2")}>
        <AccordionSummary expandIcon={">"}>
          <Typography>Test 2</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>Consequat do minim cillum esse aliquip qui consequat occaecat dolor. Veniam ea incididunt magna in non qui. Voluptate est eiusmod adipisicing commodo nisi ex voluptate qui labore officia aliquip voluptate. Ea duis tempor incididunt dolore. Tempor aliquip duis aliqua eu enim incididunt deserunt.</Typography>
        </AccordionDetails>
      </Accordion>
    </Box>
  )
}

export default AccordionTest