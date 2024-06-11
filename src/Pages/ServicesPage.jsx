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
import cityLine from "../img/cityLine.png";
import hotel from "../img/hotel.png";

const services = [
  {
    title: "INDUSTRIAL",
    description:
      "Industrial construction services including factories, warehouses, and other large-scale facilities.",
    icon: <BusinessIcon sx={{ color: "white", fontSize: 40 }} />,
    image: hotel,
  },
  {
    title: "RETAIL",
    description:
      "Retail construction services for shopping centers, retail stores, and more.",
    icon: <LocalMallIcon sx={{ color: "white", fontSize: 40 }} />,
    image: hotel,
  },
  {
    title: "EDUCATION",
    description:
      "Educational facilities construction for schools, universities, and more.",
    icon: <SchoolIcon sx={{ color: "white", fontSize: 40 }} />,
    image: hotel,
  },
  {
    title: "HEALTHCARE",
    description:
      "Healthcare construction services for hospitals, clinics, and other medical facilities.",
    icon: <LocalHospitalIcon sx={{ color: "white", fontSize: 40 }} />,
    image: hotel,
  },
  {
    title: "CORPORATE",
    description:
      "Corporate office construction services for businesses and enterprises.",
    icon: <CorporateFareIcon sx={{ color: "white", fontSize: 40 }} />,
    image: hotel,
  },
  {
    title: "HOTEL",
    description:
      "Hotel construction services for building luxurious and functional hotels.",
    icon: <HotelIcon sx={{ color: "white", fontSize: 40 }} />,
    image: hotel,
  },
];

const ServicesPage = () => {
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
        pt: 22,
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
                  <Button size="small">Learn More</Button>
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
