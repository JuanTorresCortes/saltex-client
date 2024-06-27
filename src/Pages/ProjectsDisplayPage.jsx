import React from "react";
import { useParams } from "react-router-dom";
import MyNavBar from "../components/MyNavBar";
import ActionBanner from "../components/ActionBanner";
import projects from "../data/projects";
import { Container, Box, Typography, Paper, Button } from "@mui/material";
import Carousel from "react-material-ui-carousel";
import { useTheme } from "@mui/material/styles";
import GoogleIcon from "@mui/icons-material/Google";

const CarouselItem = ({ item }) => (
  <Paper
    elevation={3}
    sx={{
      backgroundColor: "black",
      color: "white",
      margin: "10px",
      padding: "20px",
      textAlign: "center",
      width: "100%",
      borderRadius: "10px",
    }}
  >
    <img
      src={item}
      alt="Project Portfolio"
      style={{
        width: "100%",
        height: "250px",
        objectFit: "cover",
        borderRadius: "10px",
      }}
    />
  </Paper>
);

const ProjectsDisplayPage = () => {
  const { id } = useParams();
  const project = projects.find((project) => project.id === parseInt(id));
  const theme = useTheme();

  if (!project) {
    return <Typography variant="h4">Project not found</Typography>;
  }

  return (
    <Box
      sx={{
        width: "100vw",
        minHeight: "75vh",
        backgroundColor: theme.palette.darkgray.main,
        color: "white",
        textAlign: "center",
        padding: "20px",
        mt: { xs: 118, sm: 108, md: 49, lg: 38, xl: 56 }, // responsive brake points xs=0,sm=600,md=900,lg=1200,xl=1536}
      }}
    >
      <MyNavBar sx={{ backgroundColor: "rgba(0, 0, 0, 0.7)", mb: 5 }} />
      <Container sx={{ mt: 5 }}>
        <Typography variant="h2" gutterBottom>
          {project.name}
        </Typography>
        <Typography variant="body1" paragraph>
          {project.description}
        </Typography>
        <Typography variant="body2" paragraph>
          {project.summary}
        </Typography>
        <Carousel
          autoPlay={false}
          navButtonsAlwaysVisible={true}
          indicators={false}
          animation="slide"
          cycleNavigation={false}
          navButtonsProps={{
            style: {
              backgroundColor: "black",
              color: "white",
            },
          }}
        >
          {project.imagePortfolio.map((image, index) => (
            <Box key={index} display="flex" justifyContent="center">
              <Box flex="1" mx={1} sx={{ maxWidth: "80%", overflow: "hidden" }}>
                <CarouselItem item={image} />
              </Box>
            </Box>
          ))}
        </Carousel>
      </Container>
      <Box
        sx={{
          backgroundColor: "black",
          padding: 4,
          display: "flex",
          justifyContent: "center",
        }}
      >
        <Box sx={{ flex: 1, textAlign: "left", paddingRight: 2 }}>
          <Typography variant="h4" sx={{ color: "white", fontWeight: "bold" }}>
            OUR CLIENT REVIEW
            <Typography>
              Company: {project.clientReview.company}
              <br />
              Name: {project.clientReview.name}
            </Typography>
          </Typography>
          <Button
            variant="outlined"
            sx={{
              color: "white",
              borderColor: theme.palette.darkred.main,
              "&:hover": {
                borderColor: theme.palette.darkred.main,
                backgroundColor: "#141424",
              },
              mt: 2,
            }}
          >
            <a
              href="/projects"
              style={{ textDecoration: "none", color: "white" }}
            >
              DISCOVER MORE PROJECTS
            </a>
          </Button>
        </Box>
        <Box sx={{ flex: 1, position: "relative", minHeight: "200px" }}>
          <Paper
            elevation={0}
            sx={{
              backgroundColor: "black",
              color: "white",
              padding: 3,
              borderRadius: 2,
            }}
          >
            <Box
              sx={{
                display: "flex",
                justifyContent: "space-between",
                alignItems: "flex-start",
              }}
            >
              <Typography
                variant="body1"
                sx={{
                  maxHeight: "100px",
                  overflowY: "auto",
                  flexGrow: 1,
                  paddingRight: 2,
                }}
              >
                {project.clientReview.review}
              </Typography>
              <GoogleIcon sx={{ color: "white" }} />
            </Box>
            <Typography variant="body2" align="right" sx={{ mt: 2 }}>
              {project.clientReview.author}
            </Typography>
          </Paper>
        </Box>
      </Box>
      <ActionBanner />
    </Box>
  );
};

export default ProjectsDisplayPage;
