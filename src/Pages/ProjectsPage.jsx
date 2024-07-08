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
import { useNavigate } from "react-router-dom"; // Import useNavigate
import workersFraming from "../img/workers-framing.png";
import projects from "../data/projects"; // Import the projects array
import MyNavBar from "../components/MyNavBar";
import ActionBanner from "../components/ActionBanner";
import waveBackground from "../img/wave_background.png";
import { motion } from "framer-motion";

const ProjectsPage = () => {
  const theme = useTheme();

  const handleProjectClick = (id) => () => {
    // navigate(`/projects/${id}`);
    window.location.href = `/projects/${id}`; // Use href to navigate to the project display page with the project ID
  };

  return (
    <Box
      sx={{
        width: "100vw",
        minHeight: "75vh",
        // backgroundColor: theme.palette.darkgray.main,
        backgroundImage: `url(${waveBackground})`,
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        color: "white",
        textAlign: "center",
        position: "relative",
        overflow: "hidden",
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
          mt: { xs: 480, sm: 312, md: 281, lg: 200, xl: 177 }, // responsive breakpoints xs=0, sm=600, md=900, lg=1200, xl=1536
        }}
      >
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
              Our Portfolio
            </Typography>
            <Typography variant="body1" paragraph>
              <strong>
                At SalTex Steel Construction, we take immense pride in the
                diverse range of projects we have successfully completed. Each
                project is a testament to our commitment to quality, innovation,
                and excellence. From commercial buildings to residential
                complexes, our portfolio showcases our ability to deliver
                exceptional results across various sectors. Here are some
                highlights of our most notable projects.
              </strong>
            </Typography>
          </motion.p>
        </Container>
      </Box>

      <Container>
        <Grid container spacing={4} sx={{ mt: 2, padding: "30px" }}>
          {projects.map((project) => (
            <Grid item xs={12} sm={6} md={4} key={project.id}>
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
                {/* <CardActions>
                  <Button
                    onClick={handleProjectClick(project.id)}
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
                </CardActions> */}
                <CardActions sx={{ justifyContent: "center" }}>
                  <Button
                    onClick={handleProjectClick(project.id)}
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
