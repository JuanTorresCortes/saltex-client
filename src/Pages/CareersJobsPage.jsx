import React from "react";
import {
  Accordion,
  AccordionSummary,
  AccordionDetails,
  Typography,
  Button,
  Container,
  Grid,
  Box,
} from "@mui/material";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import { styled } from "@mui/system";
import useMediaQuery from "@mui/material/useMediaQuery";
import { useTheme } from "@mui/material/styles";
import welder from "../img/hero-images/heroJobsWelder.png";

// Styled component for Hero section
const HeroSection = styled(Box)(({ theme }) => ({
  display: "flex",
  justifyContent: "center",
  alignItems: "flex-end",
  height: "35vh", // Covers part of the viewport height
  width: "100vw", // Covers full viewport width
  backgroundImage: `url(${welder})`,
  backgroundSize: "cover", // Ensures the image covers the full container
  backgroundPosition: "center",
  backgroundRepeat: "no-repeat",
  color: "#fff", // Ensures text visibility on the image
  position: "relative",
  textAlign: "left", // Align text to the left
  padding: theme.spacing(4),
  [theme.breakpoints.down("md")]: {
    padding: theme.spacing(2),
  },
}));

// Overlay for darkening the background
const Overlay = styled(Box)(({ theme }) => ({
  position: "absolute",
  top: 0,
  left: 0,
  right: 0,
  bottom: 0,
  backgroundColor: "rgba(0, 0, 0, 0.4)", // Darkens the background image
}));

// Container for the content, aligns items to the left and maintains hierarchy
const ContentBox = styled(Box)(({ theme }) => ({
  zIndex: 1, // Ensures content stays above the overlay
  display: "flex",
  flexDirection: "column", // Aligns items in a vertical stack
  alignItems: "flex-start", // Aligns text to the left
  maxWidth: "600px", // Controls content width
  [theme.breakpoints.down("md")]: {
    maxWidth: "90%",
  },
}));

// Styled Section Component for layout consistency
const Section = styled(Box)(({ theme }) => ({
  padding: theme.spacing(6, 0),
  backgroundColor: "black",
  color: "#fff",
}));

const handleApplyClick = () => {
  window.location.href = `/careers-jobs-application`; // Simple navigation
};

const CareersJobsPage = () => {
  const theme = useTheme();
  const isSmallScreen = useMediaQuery(theme.breakpoints.down("sm"));

  // Array to store job postings
  const jobPostings = [
    {
      title: "Construction Project Manager",
      description:
        "Lead construction projects from conception to completion. Ensure all projects are delivered on time, within scope, and within budget. Bachelor's degree in Construction Management required.",
    },
    {
      title: "Site Supervisor",
      description:
        "Oversee day-to-day construction site operations. Manage staff, materials, and safety regulations. Requires 5+ years of experience in a supervisory role.",
    },
    {
      title: "Civil Engineer",
      description:
        "Design and oversee construction and maintenance of building structures. Bachelor's degree in Civil Engineering required. PE license is a plus.",
    },
    {
      title: "Heavy Equipment Operator",
      description:
        "Operate heavy machinery such as bulldozers, excavators, and backhoes to assist in construction projects. Experience required, certifications preferred.",
    },
    {
      title: "General Laborer",
      description:
        "Perform various tasks at construction sites such as lifting, carrying materials, and assisting skilled tradespeople. No formal education required.",
    },
  ];

  return (
    <>
      {/* Hero Section */}
      <Section>
        <HeroSection>
          <Overlay />
          <ContentBox>
            <Typography
              variant={isSmallScreen ? "body2" : "h6"}
              gutterBottom
              sx={{
                letterSpacing: "2px",
                textTransform: "uppercase",
                color: "#ddd",
              }}
            >
              Turning Blueprints into Reality:
            </Typography>

            <Typography
              variant={isSmallScreen ? "h5" : "h2"}
              component="h1"
              gutterBottom
              sx={{ fontWeight: "bold", lineHeight: 1.2 }}
            >
              Build your career with us!
            </Typography>
          </ContentBox>
        </HeroSection>
      </Section>

      {/* Job Listings Section */}
      <Container sx={{ mt: 1, mb: 4 }}>
        <Typography
          variant={isSmallScreen ? "h5" : "h3"}
          component="h2"
          gutterBottom
          sx={{ color: "white", mb: 3 }}
        >
          Current Job Openings
        </Typography>

        <Grid container spacing={4}>
          {jobPostings.map((job, index) => (
            <Grid item xs={12} key={index}>
              <Accordion
                sx={{
                  backgroundColor: theme.palette.cardColor.main,
                  color: "white",
                }}
              >
                <AccordionSummary
                  expandIcon={<ExpandMoreIcon />}
                  aria-controls={`job-${index}-content`}
                  id={`job-${index}-header`}
                >
                  <Typography variant="h6" sx={{ fontWeight: "bold" }}>
                    {job.title}
                  </Typography>
                </AccordionSummary>
                <AccordionDetails>
                  <Typography>{job.description}</Typography>
                  <Button
                    variant="contained"
                    sx={{
                      backgroundColor: "black",
                      color: "white",
                      border: `.1px solid ${theme.palette.darkred.main}`,
                      padding: theme.spacing(1.5, 4),
                      fontWeight: 600,
                      "&:hover": {
                        backgroundColor: theme.palette.darkred.main,
                        color: "black",
                      },
                      mb: 2,
                    }}
                    onClick={() => handleApplyClick()}
                  >
                    Apply Now
                  </Button>
                </AccordionDetails>
              </Accordion>
            </Grid>
          ))}
        </Grid>
      </Container>
    </>
  );
};

export default CareersJobsPage;
