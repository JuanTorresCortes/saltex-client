import React, { useContext } from "react";
import { AppContext } from "../context/AppContext";
import {
  Container,
  Typography,
  Box,
  Grid,
  Card,
  CardContent,
  CardMedia,
} from "@mui/material";
import { useTheme } from "@mui/material/styles";
import { motion } from "framer-motion"; // Import for animations
import projects from "../data/projects/projects"; // Import the projects array
import ActionBanner from "../components/ActionBanner"; // Action Banner component
import heroProjects from "../img/hero-images/hero-projects.png"; // Hero background image
import hero1 from "../img/hero-images/hero_1.jpg";

const ProjectsPage = () => {
  const { projects } = useContext(AppContext);
  const theme = useTheme(); // Theme from Material UI for consistent styling

  // Handle click to navigate to specific project details
  const handleProjectClick = (id) => () => {
    window.location.href = `/projects/${id}`; // Navigate to the project display page with the project ID
  };

  return (
    <Box
      sx={{
        width: "100vw",
        minHeight: "100vh",
        backgroundImage: `url(${hero1})`, // Parallax background
        backgroundAttachment: "fixed", // Parallax effect for background
        backgroundSize: "cover",
        backgroundPosition: "center",
        color: "white",
        position: "relative",
        textAlign: "center",
        overflow: "hidden",
      }}
    >
      {/* Hero Section */}
      <Box
        sx={{
          backgroundImage: `url(${heroProjects})`, // Hero background image
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat",
          backgroundSize: "cover",
          minHeight: "75vh",
          width: "100vw",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "flex-end", // Align content to the bottom
          padding: "20px",
          position: "relative",
        }}
      >
        {/* Hero Text */}
        <Container
          sx={{
            backgroundColor: "rgba(0, 0, 0, 0.7)", // Semi-transparent background
            padding: "30px",
            position: "absolute",
            bottom: 0,
            width: "100%",
            textAlign: "center",
            color: "white",
          }}
        >
          <motion.div
            initial={{ y: "100%", opacity: 0 }} // Animation for hero text
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.8 }}
          >
            <Typography variant="h4" gutterBottom>
              Our Portfolio
            </Typography>
            <Typography variant="body1" paragraph>
              <strong>
                At SalTex Steel Construction, we take immense pride in the
                diverse range of projects we have successfully completed. From
                commercial buildings to residential complexes, each project
                showcases our commitment to quality, innovation, and excellence.
              </strong>
            </Typography>
          </motion.div>
        </Container>
      </Box>

      {/* Projects Cards Section */}
      <Container sx={{ mt: 4, mb: 4 }}>
        <Grid container spacing={4}>
          {projects.map((project) => (
            <Grid item xs={12} sm={6} md={4} key={project.id}>
              <motion.div
                whileHover={{ scale: 1.05 }} // Hover scaling effect
                transition={{ duration: 0.3 }}
              >
                <Card
                  onClick={handleProjectClick(project.id)}
                  sx={{
                    position: "relative",
                    maxWidth: 345,
                    minHeight: 320,
                    display: "flex",
                    flexDirection: "column",
                    justifyContent: "space-between",
                    backgroundColor: "rgba(0, 0, 0, 0.8)", // Dark background for card
                    border: `.1px solid ${theme.palette.cardColor.main}`, // Red border
                    boxShadow: "0px 4px 6px rgba(0, 0, 0, 0.8)", // Subtle shadow
                    transition: "transform 0.3s ease, box-shadow 0.3s ease",
                    "&:hover": {
                      boxShadow: "0px 6px 8px rgba(0, 0, 0, 1)", // Enhanced shadow on hover
                      border: `.1px solid ${theme.palette.darkred.main}`, // Keeps red border
                      "& .hover-banner": {
                        opacity: 1, // Show hover banner on hover
                      },
                    },
                  }}
                >
                  {/* Project Image */}
                  <CardMedia
                    component="img"
                    alt={`${project.name} image`}
                    height="180"
                    image={project.image}
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

                  {/* Project Info */}
                  <CardContent sx={{ flexGrow: 1 }}>
                    <Typography
                      variant="h5"
                      sx={{
                        color: "white",
                        borderBottom: `2px solid ${theme.palette.darkred.main}`, // Red underline
                        pb: 1,
                        mb: 2,
                      }}
                    >
                      {project.type}
                    </Typography>
                    <Typography variant="body2" sx={{ color: "white" }}>
                      {project.description}
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

export default ProjectsPage;
