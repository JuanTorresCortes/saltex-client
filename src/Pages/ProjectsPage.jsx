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
import workersFraming from "../img/workers-framing.png";
import projects from "../data/projects"; // Import the projects array
import MyNavBar from "../components/MyNavBar";
import ActionBanner from "../components/ActionBanner";

const ProjectsPage = () => {
  const theme = useTheme();

  // create a separate component for the ProjectsHero
  return (
    <Box
      sx={{
        width: "100vw",
        minHeight: "75vh",
        backgroundColor: theme.palette.darkgray.main,
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        color: "white",
        textAlign: "center",
        padding: "20px",
        position: "relative",
        mt: 0,
      }}
    >
      <MyNavBar sx={{ backgroundColor: "rgba(0, 0, 0, 0.7)", mb: 5 }} />
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
          mt: 148,
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
            <Grid item xs={12} sm={6} md={4} key={project.id}>
              <Card
                sx={{ maxWidth: 345, backgroundColor: "rgba(0, 0, 0, 0.7)" }}
              >
                <CardMedia
                  component="img"
                  alt={`${project.name} image`}
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
                    {project.name}
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
      <ActionBanner />
    </Box>
  );
};

export default ProjectsPage;
