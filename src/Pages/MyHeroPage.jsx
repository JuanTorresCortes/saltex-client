import React, { useRef } from "react";
import { Box, Typography, Button, Container } from "@mui/material";
import { useTheme } from "@mui/material/styles";
import useMediaQuery from "@mui/material/useMediaQuery";
import houston from "../img/houston.webp"; // Ensure this path is correct
import ActionBanner from "../components/ActionBanner";
import ServicesSwiper from "../components/ServicesSwiper";
import ProjectsSwiper from "../components/ProjectsSwiper";
import { motion } from "framer-motion";
import "../TitleStyles.css";
import "../TransitionUpDown.css";
import MyHero from "../components/MyHero";
import CompanyStats from "../components/CompanyStats";
import CustomerReviews from "../components/CustomerReviews";

import TransitionUpDown from "../components/TransitionUpDown";

const MyHeroPage = () => {
  const theme = useTheme();
  const isSmallScreen = useMediaQuery(theme.breakpoints.down("sm"));

  return (
    <Box>
      <MyHero />

      <CompanyStats />

      <ServicesSwiper />

      <ProjectsSwiper />

      <CustomerReviews />

      <Container>
        <ActionBanner />
      </Container>
    </Box>
  );
};

export default TransitionUpDown(MyHeroPage);
