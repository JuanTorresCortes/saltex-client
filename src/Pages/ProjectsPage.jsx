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
import { useTheme } from "@mui/material/styles";
import hotel from "../img/hotel.png";
import education from "../img/education.png";
import healthcare from "../img/healthcare.png";
import industrial from "../img/industrial.png";
import office from "../img/office.png";
import retail from "../img/retail.png";
import religious from "../img/religious.png";
import restoration from "../img/restoration.png";
import solar from "../img/solar.png";
import workersFraming from "../img/workers-framing.png";

const projects = [
  {
    name: "Education",
    description: "Description for Education",
    image: education,
  },
  {
    name: "Healthcare",
    description: "Description for Healthcare",
    image: healthcare,
  },
  {
    name: "Industrial",
    description: "Description for Industrial",
    image: industrial,
  },
  {
    name: "Office",
    description: "Description for Office",
    image: office,
  },
  {
    name: "Retail",
    description: "Description for Office",
    image: retail,
  },
  {
    name: "Religious",
    description: "Description for Religious",
    image: religious,
  },
  {
    name: "Restoration",
    description: "Description for Restoration",
    image: restoration,
  },
  {
    name: "Hospitality",
    description: "Description for hospitality",
    image: hotel,
  },
  {
    name: "Solar",
    description: "Description for solar",
    image: solar,
  },
];

const ProjectsPage = () => {
  const theme = useTheme();

  return (
    <Box
      sx={{
        backgroundColor: theme.palette.darkgray.main,
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        color: "white",
        textAlign: "center",
        padding: "20px",
        position: "relative",
        mt: 58,
      }}
    >
      <Box
        sx={{
          backgroundImage: `url(${workersFraming})`,
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat",
          backgroundSize: "cover",
          minHeight: "75vh",
          width: "100vw",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "flex-end",
          color: "white",
          textAlign: "center",
          padding: "20px",
          position: "relative",
          mt: 69,
        }}
      >
        <Container
          sx={{
            backgroundColor: theme.palette.background.default,
            padding: "20px",
            opacity: 0.8,
          }}
        >
          <Typography variant="h2" gutterBottom>
            Our Projects
          </Typography>
          <Typography variant="body1" paragraph>
            At SalTex Steel Construction, we take immense pride in the diverse
            range of projects we have successfully completed. Each project is a
            testament to our commitment to quality, innovation, and excellence.
            From commercial buildings to residential complexes, our portfolio
            showcases our ability to deliver exceptional results across various
            sectors. Here are some highlights of our most notable projects.
          </Typography>
        </Container>
      </Box>

      <Container>
        <Grid container spacing={4} sx={{ mt: 2, padding: "30px" }}>
          {projects.map((project) => (
            <Grid item xs={12} sm={6} md={4} key={project.title}>
              <Card
                sx={{ maxWidth: 345, backgroundColor: "rgba(0, 0, 0, 0.7)" }}
              >
                <CardMedia
                  component="img"
                  alt={`${project.title} image`}
                  height="140"
                  image={project.image}
                />
                <CardContent>
                  <Typography
                    style={{ borderBottom: "1px solid rgb(255,0,0)" }}
                    gutterBottom
                    variant="h5"
                    component="div"
                    sx={{ color: "white" }}
                  >
                    {project.title}
                  </Typography>
                  <Typography
                    variant="body2"
                    color="text.secondary"
                    sx={{ color: "white" }}
                  >
                    {project.description}
                  </Typography>
                </CardContent>
                <CardActions>
                  <Button
                    size="small"
                    variant="outline"
                    sx={{
                      borderColor: theme.palette.darkred.main,
                      color: theme.palette.darkred.main,
                      "&:hover": {
                        borderColor: theme.palette.darkred.main,
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

export default ProjectsPage;
