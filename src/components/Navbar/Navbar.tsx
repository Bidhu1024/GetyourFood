import { Box, Typography } from "@mui/material";
import logo from "../../assets/getyourfood.png";
import Avatar from "@mui/material/Avatar";
import {useState} from "react"
import { motion } from "framer-motion"
import { Link, useLocation, useNavigate } from "react-router-dom";
import useMediaQuery from '@mui/material/useMediaQuery';
const Navbar = () => {
    const [loggedIn, setLoggedIn] = useState(false);
    const [open,setOpen] = useState(false)
    const matches = useMediaQuery('(min-width:768px)');

const nav = useNavigate()

    const handleButtonClick = () => {
     
      setOpen((prev)=>!prev);
    };
    
  return (
    <Box
    
      sx={{
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
        padding: "4px 8px",
        zIndex: 1,
        boxShadow: 1,
        postion:'sticky',
        top:"0",
        backgroundColor:'whitesmoke',
        
      }}
    >
      <Box
        sx={{
          display: "flex",
          justifyContent: "center",
          gap: "8px",
          alignItems: "center",
        }}
      >
        <Avatar alt="Remy Sharp" src={logo} sx={{ width: 56, height: 56 }} />{" "}
        <Typography sx={{fontWeight:'700', fontSize:'18px'}}>Get Your Food</Typography>
      </Box>
    {!loggedIn ?  <Box
   
        sx={{
          display: "flex",
          justifyContent: "center",
          gap: "10px",
          alignItems: "center",
        }}
      >
        <Box sx={{ padding: "3px", cursor: "pointer", }}
         component={motion.div}
        onClick={()=>handleButtonClick()}
        >
          {" "}
          <Typography
            sx={{
              color: "#fff !important",
              backgroundColor: "#60a3bc",
              textDecoration: "none",
              padding: "4px 10px",
              borderRadius: "50px",
              display: "inline-block",
              border: "none",
              transition: "all 0.4s ease 0s",
              "&: hover": {
                textShadow: "0px 0px 6px rgba(255, 255, 255, 1)",
                boxShadow: "0px 5px 40px -10px rgba(0,0,0,0.57)",
                transition: "all 0.4s ease 0s",
              },
            }}
          >
            Login
          </Typography>
        </Box>
        <Box sx={{ padding: "3px", cursor: "pointer" }}>
          <Typography
            sx={{
              color: "#fff !important",
              backgroundColor: "#60a3bc",
              textDecoration: "none",
              padding: "4px 10px",
              borderRadius: "50px",
              display: "inline-block",
              border: "none",
              transition: "all 0.4s ease 0s",
              "&: hover": {
                textShadow: "0px 0px 6px rgba(255, 255, 255, 1)",
                boxShadow: "0px 5px 40px -10px rgba(0,0,0,0.57)",
                transition: "all 0.4s ease 0s",
              },
            }}
          >
            SignUp
          </Typography>
        </Box>
        <Box sx={{ padding: "3px", cursor: "pointer" }}>
          <Typography
            sx={{
              color: "#fff !important",
              backgroundColor: "#60a3bc",
              textDecoration: "none",
              padding: "4px 10px",
              borderRadius: "50px",
              display: "inline-block",
              border: "none",
              transition: "all 0.4s ease 0s",
              "&: hover": {
                textShadow: "0px 0px 6px rgba(255, 255, 255, 1)",
                boxShadow: "0px 5px 40px -10px rgba(0,0,0,0.57)",
                transition: "all 0.4s ease 0s",
              },
            }}
          >
            Contact Us
          </Typography>
        </Box>
        <Box
          component={motion.div}
     
          onClick={()=>{
            nav("/about")
          }}
        sx={{ padding: "3px", cursor: "pointer" }}>
          <Typography
            sx={{
              color: "#fff !important",
              backgroundColor: "#60a3bc",
              textDecoration: "none",
              padding: "4px 10px",
              borderRadius: "50px",
              display: "inline-block",
              border: "none",
              duration: 100, delay: 0.2, ease: 'easeInOut',
              "&: hover": {
                textShadow: "0px 0px 6px rgba(255, 255, 255, 1)",
                boxShadow: "0px 5px 40px -10px rgba(0,0,0,0.57)",
                duration: 100, delay: 0.2, ease: 'easeInOut'
              },
            }}
          >
            About Us
          </Typography>
        </Box>
      </Box> : <Box sx={{display:'flex', justifyContent:'space-between', alignItems:'center'}}>
<Avatar></Avatar>
<Box>UserName</Box>
<Box>Logout</Box>
      </Box>
      }
    </Box>
  );
};

export default Navbar;
