
import { Box,Typography } from '@mui/material';
import biriyani from "../../assets/biriyanihomepage.jpg"
const Home = () => {
  return (
   <Box sx={{width:'100%', height:"auto"}}>
 <Box sx={{ position: 'relative' }}>
        <img
          src={biriyani}
          alt="biriyani"
          style={{
            objectFit: 'cover',
            maxHeight: '35rem',
            width: '100%',
          }}
        />
        <Typography
          variant="h2"
          align="center"
          sx={{
            position: 'absolute',
            top: '50%',
            left: '50%',
            transform: 'translate(-50%, -50%)',
            color: 'white',
            fontWeight:'bold',
            padding: '0.5rem',
            borderRadius: '4px',
          }}
        >
          GetYourFood
        </Typography>
        <Typography
          variant="h4"
          align="center"
          sx={{
            position: 'absolute',
            top: '64%',
            left: '50%',
            transform: 'translate(-50%, -50%)',
            color: 'white',
            fontWeight:'bold',
            padding: '0.5rem',
            borderRadius: '4px',
          }}
        >
Find the best Resturants and foods near You
        </Typography>
      </Box>
   </Box>
  )
}

export default Home