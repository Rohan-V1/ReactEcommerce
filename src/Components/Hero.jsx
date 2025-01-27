import { Box, Typography } from "@mui/material";
import React from "react";
import heroimg from '../Assets/Images/online-shopping-stylish-young-asian-woman-sunglasses-showing-credit-card-using-smartphone-paying-internet-making-purchase-standing-blue-background.jpg';
export default function Hero() {
  return (
    <Box
      sx={{
        width: "100%",
        height: "90vh",
        backgroundPosition: "center",
        backgroundSize: "cover",
      }}
    >
      <Box
        sx={{
          minWidth: "100%",
          height: "90vh",
          display: 'flex',
          alignItems: 'center',
          backgroundSize: 'cover',
          backgroundImage:  `url(${heroimg})`,
          
        }}  
      >
        <Typography
          sx={{
            padding:'50px',
            fontWeight: "900",
            fontSize: { xs: "30px", sm: "70px" },
            textTransform: "uppercase",
            color: "white",
          }}
          gutterBottom
        >
          Upto  <span style={{color:"green"}}>50% </span> off <br/>on <span style={{color:"yellow"}}> smartphones</span>
        </Typography>
       
       
      </Box>
    </Box>
  );
}
