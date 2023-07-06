import Button from "@mui/material/Button"
import Typography from '@mui/material/Typography';
import AlertDialog from "./components/Alert"
import Box from "@mui/material/Box";

const Mui = () => {
  return (
    <Box>
      <Button variant="contained" disableElevation>
        Disable elevation
      </Button>
      <AlertDialog />
      <Typography variant="h3">Hola mundo</Typography>
    </Box>
  )
}

export default Mui
