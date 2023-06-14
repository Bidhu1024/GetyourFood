import { Box, Typography, Stack } from "@mui/material";
import { motion } from "framer-motion";
import biriyani from "../../assets/biriyanihomepage.jpg";

const Home = () => {
  return (
    <Box sx={{ width: "100%", height: "auto" }}>
      <Box sx={{ position: "relative" }}>
        <img
          src={biriyani}
          alt="biriyani"
          style={{
            objectFit: "cover",
            maxHeight: "35rem",
            width: "100%",
          }}
        />
        <Typography
          variant="h2"
          align="center"
          sx={{
            position: "absolute",
            top: "50%",
            left: "50%",
            transform: "translate(-50%, -50%)",
            color: "white",
            fontWeight: "bold",
            padding: "0.5rem",
            borderRadius: "4px",
          }}
        >
          GetYourFood
        </Typography>
        <Typography
          variant="h4"
          align="center"
          sx={{
            position: "absolute",
            top: "64%",
            left: "50%",
            transform: "translate(-50%, -50%)",
            color: "white",
            fontWeight: "bold",
            padding: "0.5rem",
            borderRadius: "4px",
          }}
        >
          Find the best Resturants and foods near You
        </Typography>
      </Box>

      <Stack>
        <Typography
          sx={{ display: "flex", justifyContent: "center",mt:'1rem' }}
          fontSize={"1.6rem"}
          fontWeight={"600"}
        >
          We are expanding all over India. Get our locations and hotels for
          better service
        </Typography>
        <Typography
          sx={{ display: "flex", justifyContent: "center", textAlign:'center', padding:'8px 12px', mt:'1rem' }}
          fontSize={"1.2rem"}
          fontWeight={"500"}
        >
          From swanky upscale restaurants to the cosiest hidden gems serving the
          most incredible food, GYF covers it all. Explore menus, and
          millions of restaurant photos and reviews from users just like you, to
          find your next great meal.
        </Typography>
      </Stack>
    </Box>
  );
};

export default Home;
