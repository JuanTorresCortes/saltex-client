import React from "react";
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
import BusinessIcon from "@mui/icons-material/Business";
import LocalMallIcon from "@mui/icons-material/LocalMall";
import SchoolIcon from "@mui/icons-material/School";
import LocalHospitalIcon from "@mui/icons-material/LocalHospital";
import CorporateFareIcon from "@mui/icons-material/CorporateFare";
import HotelIcon from "@mui/icons-material/Hotel";
import ChurchIcon from "@mui/icons-material/Church";
import BuildIcon from "@mui/icons-material/Build";
import WbSunnyIcon from "@mui/icons-material/WbSunny";
import cityLine from "../img/cityLine.png";
import hotel from "../img/hotel.png";
import { useTheme } from "@mui/material/styles";
import education from "../img/education.png";
import healthcare from "../img/healthcare.png";
import industrial from "../img/industrial.png";
import office from "../img/office.png";
import retail from "../img/retail.png";
import religious from "../img/religious.png";
import restoration from "../img/restoration.png";
import solar from "../img/solar.png";

const services = [
  {
    title: "INDUSTRIAL",
    description:
      "Industrial construction services including factories, warehouses, and other large-scale facilities.",
    icon: <BusinessIcon sx={{ color: "white", fontSize: 40 }} />,
    image: industrial,
  },
  {
    title: "RETAIL",
    description:
      "Retail construction services for shopping centers, retail stores, and more.",
    icon: <LocalMallIcon sx={{ color: "white", fontSize: 40 }} />,
    image: retail,
  },
  {
    title: "EDUCATION",
    description:
      "Educational facilities construction for schools, universities, and more.",
    icon: <SchoolIcon sx={{ color: "white", fontSize: 40 }} />,
    image: education,
  },
  {
    title: "HEALTHCARE",
    description:
      "Healthcare construction services for hospitals, clinics, and other medical facilities.",
    icon: <LocalHospitalIcon sx={{ color: "white", fontSize: 40 }} />,
    image: healthcare,
  },
  {
    title: "CORPORATE",
    description:
      "Corporate office construction services for businesses and enterprises.",
    icon: <CorporateFareIcon sx={{ color: "white", fontSize: 40 }} />,
    image: office,
  },
  {
    title: "HOTEL",
    description:
      "Hotel construction services for building luxurious and functional hotels.",
    icon: <HotelIcon sx={{ color: "white", fontSize: 40 }} />,
    image: hotel,
  },
  {
    title: "RELIGIOUS",
    description:
      "Construction services for religious facilities, including churches and places of worship.",
    icon: <ChurchIcon sx={{ color: "white", fontSize: 40 }} />,
    image: religious,
  },
  {
    title: "RESTORATION",
    description:
      "Restoration services for repairing and refurbishing buildings to their former glory.",
    icon: <BuildIcon sx={{ color: "white", fontSize: 40 }} />,
    image: restoration,
  },
  {
    title: "SOLAR",
    description:
      "Solar installation services for sustainable and renewable energy solutions.",
    icon: <WbSunnyIcon sx={{ color: "white", fontSize: 40 }} />,
    image: solar,
  },
];

const ServicesPage = () => {
  const theme = useTheme();

  return (
    <Box
      sx={{
        backgroundImage: `url(${cityLine})`,
        backgroundPosition: "center center",
        backgroundRepeat: "no-repeat",
        backgroundSize: "cover",
        minHeight: "100vh",
        width: "100vw",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        color: "white",
        textAlign: "center",
        pt: 69,
        pb: 5,
        pr: 5,
        pl: 5,
      }}
    >
      <Container>
        <Box sx={{ backgroundColor: "black" }}>
          <Typography variant="h2" gutterBottom>
            Our Services
          </Typography>
          <Typography variant="body1" paragraph>
            At SalTex Steel Construction, we offer a comprehensive range of
            construction services tailored to meet the unique needs of each
            project. Our expert team ensures the highest standards of quality,
            safety, and efficiency in every job we undertake. From initial
            planning and design to final construction and project management, we
            are committed to delivering exceptional results on time and within
            budget.
          </Typography>
        </Box>

        <Grid container spacing={4}>
          {services.map((service) => (
            <Grid item xs={12} sm={6} md={4} key={service.title}>
              <Card
                sx={{ maxWidth: 345, backgroundColor: "rgba(0, 0, 0, 0.7)" }}
              >
                <CardMedia
                  component="img"
                  alt={`${service.title} image`}
                  height="140"
                  image={service.image}
                />
                <CardContent>
                  <Box
                    sx={{ display: "flex", justifyContent: "center", mb: 2 }}
                  >
                    {service.icon}
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
                  <Typography
                    variant="body2"
                    color="text.secondary"
                    sx={{ color: "white" }}
                  >
                    {service.description}
                  </Typography>
                </CardContent>
                <CardActions>
                  <Button
                    size="small"
                    variant="outline"
                    sx={{
                      borderColor: theme.palette.darkblue.main,
                      color: theme.palette.darkblue.main,
                      "&:hover": {
                        borderColor: theme.palette.darkblue.main,
                        backgroundColor: "rgba(255, 0, 0, 0.1)",
                      },
                    }}
                  >
                    Learn More
                  </Button>
                </CardActions>
              </Card>
            </Grid>
          ))}
        </Grid>
      </Container>
    </Box>
  );
};

export default ServicesPage;
