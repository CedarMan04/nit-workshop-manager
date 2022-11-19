import { Grid } from "@mui/material"
import { Box } from "@mui/system"
import WorkCard from "components/molecules/WorkCard"

const CardList = () => {
  return (
    <Box justifyContent={"center"}>
      <Grid container spacing={2}>
        <Grid item xs={3}>
          <WorkCard />
        </Grid>
        <Grid item xs={3}>
          <WorkCard />
        </Grid>
      </Grid>
    </Box>
  )
}

export default CardList