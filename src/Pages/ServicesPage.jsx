import React from "react";
import { useTheme } from "@mui/material/styles";
import { motion } from "framer-motion";

import {
  Container,
  Typography,
  Box,
  Grid,
  Card,
  CardActions,
  CardContent,
  CardMedia,
  Button,
} from "@mui/material";

import workerGrinding from "../img/worker-grinding.png";
import solar from "../img/solar.png";
import welderOnTop from "../img/welder-on-top.png";
import welderInLift from "../img/welder-in-lift.png";
import welder from "../img/welder.png";
import MyNavBar from "../components/MyNavBar";
import ActionBanner from "../components/ActionBanner";
import services from "../data/services";
import waveBackground from "../img/wave_background.png";

// Import icons
import PrecisionManufacturingIcon from "@mui/icons-material/PrecisionManufacturing";
import FoundationIcon from "@mui/icons-material/Foundation";
import EngineeringIcon from "@mui/icons-material/Engineering";
import HouseSidingIcon from "@mui/icons-material/HouseSiding";
import SettingsSuggestIcon from "@mui/icons-material/SettingsSuggest";
import CorporateFareIcon from "@mui/icons-material/CorporateFare";

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
  const theme = useTheme();
  const handleServicesClick = (id) => () => {
    window.location.href = `/services/${id}`; // Use href to navigate to the project display page with the project ID
  };

  return (
    <Box
      sx={{
        width: "100vw",
        minHeight: "75vh",
        backgroundImage: `url(${waveBackground})`,
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        color: "white",
        textAlign: "center",
        position: "relative",
        overflow: "hidden",
        mt: { xs: 8, sm: "auto", md: "600", lg: "200", xl: 7 }, // responsive breakpoints xs=0, sm=600, md=900, lg=1200, xl=1536
      }}
    >
      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          justifyContent: "flex-end",
          alignItems: "center",
          position: "relative",
          overflow: "hidden",
        }}
      >
        <Box
          sx={{
            display: "grid",
            gridTemplateColumns: "repeat(3, 1fr)",
            gridTemplateRows: "repeat(2, 1fr)",
            gap: ".005rem",
            width: "100%",
            height: "75vh",
          }}
        >
          <img
            src={workerGrinding}
            alt="Worker Grinding"
            style={{
              gridColumn: "1 / 2",
              gridRow: "1 / 2",
              width: "100%",
              height: "100%",
              objectFit: "cover",
            }}
          />
          <img
            src={solar}
            alt="Solar"
            style={{
              gridColumn: "2 / 3",
              gridRow: "1 / 2",
              width: "100%",
              height: "100%",
              objectFit: "cover",
            }}
          />
          <img
            src={welderOnTop}
            alt="Welder On Top"
            style={{
              gridColumn: "3 / 4",
              gridRow: "1 / 2",
              width: "100%",
              height: "100%",
              objectFit: "cover",
            }}
          />
          <img
            src={welderInLift}
            alt="Welder In Lift"
            style={{
              gridColumn: "1 / 2",
              gridRow: "2 / 3",
              width: "100%",
              height: "100%",
              objectFit: "cover",
            }}
          />
          <img
            src={welder}
            alt="Welder"
            style={{
              gridColumn: "2 / 4",
              gridRow: "2 / 3",
              width: "100%",
              height: "100%",
              objectFit: "cover",
            }}
          />
        </Box>

        <Container
          sx={{
            backgroundColor: theme.palette.background.default,
            padding: "20px",
            opacity: 0.8,
            position: "absolute",
            bottom: 0,
            width: "100%",
            textAlign: "center",
            color: "white",
          }}
        >
          <motion.p
            initial={{ y: "100%" }}
            animate={{ y: 0 }}
            exit={{ y: "-100%" }}
            transition={{ duration: 0.5, delay: 0 }}
          >
            <Typography variant="h2" gutterBottom>
              Our Services
            </Typography>
            <Typography variant="body1" paragraph>
              <strong>
                At SalTex Steel Construction, we offer a comprehensive range of
                construction services tailored to meet the unique needs of each
                project. Our expert team ensures the highest standards of
                quality, safety, and efficiency in every job we undertake. From
                initial planning and design to final construction and project
                management, we are committed to delivering exceptional results
                on time and within budget.
              </strong>
            </Typography>
          </motion.p>
        </Container>
      </Box>

      <Container>
        <Grid container spacing={4} sx={{ mt: 2, padding: "30px" }}>
          {services.map((service) => (
            <Grid item xs={12} sm={6} md={4} key={service.title}>
              <Card
                sx={{
                  maxWidth: 345,
                  backgroundColor: "rgba(0, 0, 0, 0.7)",
                  border: `3px solid ${theme.palette.darkgray.main}`,
                  "&:hover": {
                    transform: "scale(1.05)",
                    transition: "all 0.3s ease-in-out",
                  },
                }}
              >
                <CardMedia
                  component="img"
                  alt={`${service.title} image`}
                  height="140"
                  image={service.image}
                />
                <CardContent>
                  <Box
                    sx={{
                      display: "flex",
                      justifyContent: "center",
                      mb: 2,
                    }}
                  >
                    {iconMapping[service.icon]}
                  </Box>
                  <Typography
                    style={{ borderBottom: "1px solid rgb(255,0,0)" }}
                    gutterBottom
                    variant="h5"
                    component="div"
                    sx={{ color: "white" }}
                  >
                    {service.title}
                  </Typography>
                  <CardActions sx={{ justifyContent: "center" }}>
                    <Button
                      onClick={handleServicesClick(service.id)}
                      size="small"
                      variant="contained"
                      sx={{
                        backgroundColor: theme.palette.darkred.main,
                        color: "white",
                        "&:hover": {
                          backgroundColor: theme.palette.darkred.main,
                          transform: "scale(1.05)",
                          transition: "all 0.3s ease-in-out",
                        },
                      }}
                    >
                      Click to Learn More
                    </Button>
                  </CardActions>
                </CardContent>
              </Card>
            </Grid>
          ))}
        </Grid>
      </Container>
      <ActionBanner />
    </Box>
  );
};

export default ServicesPage;
