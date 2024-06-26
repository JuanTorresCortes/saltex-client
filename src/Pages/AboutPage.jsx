// import React from "react";
// import { Container, Typography, Box, Grid, Button } from "@mui/material";
// import steelFrame from "../img/steelFrame.png";
// import inspector from "../img/inspector.png";
// import windowBuilding from "../img/window-Building.png";
// import { useTheme } from "@mui/material/styles";
// import Stats from "../components/Stats";
// import { useNavigate } from "react-router-dom";
// import MyNavBar from "../components/MyNavBar";

// const AboutPage = () => {
//   const theme = useTheme();
//   const navigate = useNavigate();

//   const handleLFreeQuoteClick = () => {
//     navigate("/contact");
//   };

//   const handleLExploreServicesClick = () => {
//     navigate("/services");
//   };

//   return (
//     <Box
//       sx={{
//         backgroundImage: `url(${windowBuilding})`,
//         backgroundPosition: "center center",
//         backgroundRepeat: "no-repeat",
//         backgroundSize: "cover",
//         minHeight: "100vh",
//         width: "100vw",
//         display: "flex",
//         flexDirection: "column",
//         alignItems: "center",
//         color: "white",
//         textAlign: "center",
//         padding: "20px",
//         mt: 68,
//       }}
//     >
//       <MyNavBar sx={{ backgroundColor: "rgba(0, 0, 0, 0.7)", mb: 5 }} />
//       <Container sx={{ mt: 16, mb: 1, padding: 3, backgroundColor: "black" }}>
//         <Grid container spacing={4} alignItems="center">
//           <Grid item xs={12} md={6}>
//             <Box
//               component="img"
//               src={inspector}
//               alt="Steel Frame"
//               sx={{ width: "100%", height: "auto" }}
//             />
//           </Grid>
//           <Grid item xs={12} md={6}>
//             <Typography variant="h2" gutterBottom>
//               About SalTex Steel Construction
//             </Typography>
//             <Typography variant="body1" paragraph>
//               Excellence on Time, Within Your Budget. Located in the heart of
//               Houston, SalTex Steel Construction is your premier commercial
//               general contractor. With a rich portfolio that spans the
//               commercial, retail, healthcare, office, hotel, and industrial
//               sectors, we excel in delivering custom-built construction
//               solutions. From crafting new interior build-outs to managing
//               comprehensive renovations and ground-up construction, our
//               commitment to punctuality and budget precision sets us apart.
//               Trust SalTex Steel Construction to bring your vision to life with
//               flawless execution and strategic expertise.
//             </Typography>
//             <Button
//               variant="contained"
//               sx={{
//                 mr: 2,
//                 backgroundColor: theme.palette.darkred.main,
//                 color: "white",
//                 "&:hover": {
//                   backgroundColor: theme.palette.darkred.main,
//                 },
//               }}
//             >
//               <a href="/contact"> Get a Free Quote</a>
//             </Button>
//             <Button
//               variant="outlined"
//               sx={{
//                 borderColor: theme.palette.darkred.main,
//                 color: theme.palette.darkred.main,
//                 "&:hover": {
//                   borderColor: theme.palette.darkred.main,
//                   backgroundColor: "rgba(255, 0, 0, 0.1)",
//                 },
//               }}
//             >
//               <a href="services">Explore Services</a>
//             </Button>
//           </Grid>
//         </Grid>
//       </Container>
//       <Stats />
//     </Box>
//   );
// };

// export default AboutPage;

import React from "react";
import { Container, Typography, Box, Grid, Button } from "@mui/material";
import steelFrame from "../img/steelFrame.png";
import inspector from "../img/inspector.png";
import windowBuilding from "../img/window-Building.png";
import { useTheme } from "@mui/material/styles";
import Stats from "../components/Stats";
import { useNavigate } from "react-router-dom";
import MyNavBar from "../components/MyNavBar";

const AboutPage = () => {
  const theme = useTheme(); // Use Material-UI's theme for consistent styling
  const navigate = useNavigate(); // Hook to navigate programmatically

  // Handler for navigating to the contact page
  const handleLFreeQuoteClick = () => {
    navigate("/contact");
  };

  // Handler for navigating to the services page
  const handleLExploreServicesClick = () => {
    navigate("/services");
  };

  return (
    <Box
      sx={{
        // Background image and styling for the main container
        backgroundImage: `url(${windowBuilding})`,
        backgroundPosition: "center center",
        backgroundRepeat: "no-repeat",
        backgroundSize: "cover",
        minHeight: "100vh", // Ensure it covers the full height of the viewport
        width: "100vw", // Ensure it covers the full width of the viewport
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        color: "white", // White text color for contrast
        textAlign: "center",
        p: 2, // Padding of 2 units
        mt: { xs: 200, sm: 128, md: 49, lg: 38, xl: 38 }, // responsive brake points xs=0,sm=600,md=900,lg=1200,xl=1536}
      }}
    >
      <MyNavBar sx={{ backgroundColor: "rgba(0, 0, 0, 0.7)", mb: 5 }} />{" "}
      {/* Navigation bar with semi-transparent background */}
      <Container
        sx={{
          mt: 4,
          mb: 2,
          p: 3,
          backgroundColor: "rgba(0, 0, 0, 0.7)", // Semi-transparent black background
          borderRadius: 2, // Rounded corners
        }}
      >
        <Grid container spacing={4} alignItems="center">
          <Grid item xs={12} md={6}>
            {/* Image container for the inspector image */}
            <Box
              component="img"
              src={inspector}
              alt="Steel Frame"
              sx={{ width: "100%", height: "auto" }} // Responsive width and auto height
            />
          </Grid>
          <Grid item xs={12} md={6}>
            {/* Text content */}
            <Typography variant="h2" gutterBottom>
              About SalTex Steel Construction
            </Typography>
            <Typography variant="body1" paragraph>
              Excellence on Time, Within Your Budget. Located in the heart of
              Houston, SalTex Steel Construction is your premier commercial
              general contractor. With a rich portfolio that spans the
              commercial, retail, healthcare, office, hotel, and industrial
              sectors, we excel in delivering custom-built construction
              solutions. From crafting new interior build-outs to managing
              comprehensive renovations and ground-up construction, our
              commitment to punctuality and budget precision sets us apart.
              Trust SalTex Steel Construction to bring your vision to life with
              flawless execution and strategic expertise.
            </Typography>
            <Button
              variant="contained"
              sx={{
                mr: 2,
                backgroundColor: theme.palette.darkred.main, // Use primary color from theme
                color: "white",
                "&:hover": {
                  backgroundColor: "black", // Darker shade on hover
                },
              }}
              onClick={handleLFreeQuoteClick} // OnClick event to navigate to contact page
            >
              Get a Free Quote
            </Button>
            <Button
              variant="outlined"
              sx={{
                borderColor: theme.palette.darkred.main, // Use primary color from theme
                color: theme.palette.darkred.main,
                "&:hover": {
                  borderColor: theme.palette.darkred.dark,
                  color: "white",
                  backgroundColor: "black", // Darker shade on hover
                },
              }}
              onClick={handleLExploreServicesClick} // OnClick event to navigate to services page
            >
              Explore Services
            </Button>
          </Grid>
        </Grid>
      </Container>
      <Stats /> {/* Stats component */}
    </Box>
  );
};

export default AboutPage;
