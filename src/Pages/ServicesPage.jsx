import React, { useContext } from "react";
import { AppContext } from "../context/AppContext";
import { useTheme } from "@mui/material/styles";
import { motion } from "framer-motion";
import {
  Container,
  Typography,
  Box,
  Grid,
  Card,
  CardContent,
  CardMedia,
} from "@mui/material";
import workerGrinding from "../img/worker-grinding.png";
import solar from "../img/solar.png";
import welderOnTop from "../img/welder-on-top.png";
import welder from "../img/welder.png";
import ActionBanner from "../components/ActionBanner";
import workersOnTop from "../img/workersOnTop-2.png";
import hero1 from "../img/hero-images/hero_1.jpg";

// Import icons
import PrecisionManufacturingIcon from "@mui/icons-material/PrecisionManufacturing";
import FoundationIcon from "@mui/icons-material/Foundation";
import EngineeringIcon from "@mui/icons-material/Engineering";
import HouseSidingIcon from "@mui/icons-material/HouseSiding";
import SettingsSuggestIcon from "@mui/icons-material/SettingsSuggest";
import CorporateFareIcon from "@mui/icons-material/CorporateFare";

// Map icons to services
const iconMapping = {
  ManufacturingIcon: (
    <PrecisionManufacturingIcon sx={{ color: "white", fontSize: 40 }} />
  ),
  CorporateFareIcon: (
    <CorporateFareIcon sx={{ color: "white", fontSize: 40 }} />
  ),
  FoundationIcon: <FoundationIcon sx={{ color: "white", fontSize: 40 }} />,
  EngineeringIcon: <EngineeringIcon sx={{ color: "white", fontSize: 40 }} />,
  HouseSidingIcon: <HouseSidingIcon sx={{ color: "white", fontSize: 40 }} />,
  SettingsSuggestIcon: (
    <SettingsSuggestIcon sx={{ color: "white", fontSize: 40 }} />
  ),
};

const ServicesPage = () => {
  const { services } = useContext(AppContext);
  const theme = useTheme();

  // Handle click to navigate to specific service details
  const handleServicesClick = (id) => () => {
    window.location.href = `/services/${id}`;
  };

  return (
    <Box
      sx={{
        width: "100vw",
        minHeight: "100vh",
        backgroundImage: `url(${hero1})`,
        backgroundAttachment: "fixed", // Parallax effect
        backgroundSize: "cover",
        backgroundPosition: "center",
        color: "white",
        position: "relative",
        textAlign: "center",
        overflow: "hidden",
      }}
    >
      {/* Image Grid Section */}
      <Box
        sx={{
          display: "grid",
          gridTemplateColumns: "repeat(3, 1fr)", // 3 equal columns
          gridTemplateRows: "repeat(2, 1fr)", // 2 equal rows
          gap: ".005rem", // Small gap between images
          width: "100%",
          height: "75vh",
          overflow: "hidden",
        }}
      >
        <motion.img
          src={workerGrinding}
          alt="Worker Grinding"
          style={{
            gridColumn: "1 / 2", // First column
            gridRow: "1 / 2", // First row
            width: "100%",
            height: "100%",
            objectFit: "cover",
          }}
          initial={{ opacity: 0, scale: 1.05 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1, ease: "easeOut" }}
        />
        <motion.img
          src={solar}
          alt="Solar"
          style={{
            gridColumn: "2 / 3", // Second column
            gridRow: "1 / 2", // First row
            width: "100%",
            height: "100%",
            objectFit: "cover",
          }}
          initial={{ opacity: 0, scale: 1.05 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1, ease: "easeOut" }}
        />
        <motion.img
          src={welderOnTop}
          alt="Welder On Top"
          style={{
            gridColumn: "3 / 4", // Third column
            gridRow: "1 / 2", // First row
            width: "100%",
            height: "100%",
            objectFit: "cover",
          }}
          initial={{ opacity: 0, scale: 1.05 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1, ease: "easeOut" }}
        />
        <motion.img
          src={workersOnTop}
          alt="Welder In Lift"
          style={{
            gridColumn: "1 / 2", // First column
            gridRow: "2 / 3", // Second row
            width: "100%",
            height: "100%",
            objectFit: "cover",
          }}
          initial={{ opacity: 0, scale: 1.05 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1, ease: "easeOut" }}
        />
        <motion.img
          src={welder}
          alt="Welder"
          style={{
            gridColumn: "2 / 4", // Spans from second to fourth column
            gridRow: "2 / 3", // Second row
            width: "100%",
            height: "100%",
            objectFit: "cover", // Ensures proper fit
          }}
          initial={{ opacity: 0, scale: 1.05 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1, ease: "easeOut" }}
        />
      </Box>

      {/* Services Introduction */}
      <Container
        sx={{
          backgroundColor: "rgba(0, 0, 0, 0.7)", // Semi-transparent background for readability
          padding: "30px",
          marginTop: "-10vh",
          position: "relative",
          zIndex: 2,
        }}
      >
        <motion.div
          initial={{ y: "100%", opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.8 }}
        >
          <Typography variant="h2" gutterBottom>
            Our Services
          </Typography>
          <Typography variant="body1" paragraph>
            <strong>
              At SalTex Steel Construction, we offer a comprehensive range of
              construction services tailored to meet the unique needs of each
              project. Our expert team ensures the highest standards of quality,
              safety, and efficiency in every job we undertake. From initial
              planning and design to final construction and project management,
              we are committed to delivering exceptional results on time and
              within budget.
            </strong>
          </Typography>
        </motion.div>
      </Container>

      {/* Services Cards */}
      <Container sx={{ mt: 4, mb: 4 }}>
        <Grid container spacing={4}>
          {services.map((service) => (
            <Grid item xs={12} sm={6} md={4} key={service.title}>
              <motion.div
                whileHover={{ scale: 1.05 }} // Hover scale effect
                transition={{ duration: 0.3 }}
              >
                <Card
                  onClick={handleServicesClick(service.id)}
                  sx={{
                    position: "relative",
                    maxWidth: 345,
                    minHeight: 320,
                    display: "flex",
                    flexDirection: "column",
                    justifyContent: "space-between",
                    backgroundColor: "rgba(0, 0, 0, 0.8)", // Dark background
                    border: `.1px solid ${theme.palette.cardColor.main}`, // Red border
                    boxShadow: "0px 4px 6px rgba(0, 0, 0, 0.8)",
                    transition: "transform 0.3s ease, box-shadow 0.3s ease",
                    "&:hover": {
                      boxShadow: "0px 6px 8px rgba(0, 0, 0, 1)", // Deeper shadow on hover
                      border: `.1px solid ${theme.palette.darkred.main}`, // Hover keeps red border
                      "& .hover-banner": {
                        opacity: 1, // Show banner on hover
                      },
                    },
                  }}
                >
                  {/* Service Image */}
                  <CardMedia
                    component="img"
                    alt={`${service.title} image`}
                    height="180"
                    image={service.image}
                  />

                  {/* Hover Banner */}
                  <Box
                    className="hover-banner"
                    sx={{
                      position: "absolute",
                      top: 0,
                      left: 0,
                      width: "100%",
                      height: "100%",
                      backgroundColor: "rgba(0, 0, 0, 0.7)", // Dark overlay on hover
                      color: "white",
                      display: "flex",
                      justifyContent: "center",
                      alignItems: "center",
                      opacity: 0, // Hidden by default
                      transition: "opacity 0.3s ease-in-out", // Smooth fade-in
                      pointerEvents: "none",
                    }}
                  >
                    <Typography variant="h6" color={"red"}>
                      Click for more
                    </Typography>
                  </Box>

                  {/* Service Info */}
                  <CardContent sx={{ flexGrow: 1 }}>
                    <Box
                      sx={{ display: "flex", justifyContent: "center", mb: 2 }}
                    >
                      {iconMapping[service.icon]}
                    </Box>
                    <Typography
                      variant="h5"
                      sx={{
                        color: "white",
                        borderBottom: `2px solid ${theme.palette.darkred.main}`, // Red underline
                        pb: 1,
                        mb: 2,
                      }}
                    >
                      {service.title}
                    </Typography>
                  </CardContent>
                </Card>
              </motion.div>
            </Grid>
          ))}
        </Grid>
      </Container>

      {/* Action Banner */}
      <ActionBanner />
    </Box>
  );
};

export default ServicesPage;
