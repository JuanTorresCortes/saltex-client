import React from "react";
import {
  Box,
  Container,
  Grid,
  Typography,
  Link,
  IconButton,
  Button,
} from "@mui/material";
import { Facebook, LinkedIn, Instagram } from "@mui/icons-material";
import logo from "../img/logo.png";
import { useTheme } from "@mui/material/styles";

const Footer = () => {
  const theme = useTheme();
  //const phoneNumber = "+8329017158";

  const handleClick = () => {
    window.location.href = `/contact`;
  };

  return (
    <Box component="footer" sx={{ bgcolor: "black", color: "white", py: 4 }}>
      <Container maxWidth="lg">
        <Grid container spacing={4}>
          <Grid item xs={12} md={4}>
            <Box
              sx={{
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
              }}
            >
              <img
                src={logo}
                alt="Saltex Steel Construction"
                style={{ maxWidth: "100px" }}
              />
              <Typography variant="body1" sx={{ mt: 2, textAlign: "center" }}>
                SalTex Steel Construction is a commercial general contractor
                located in the Houston area. We have experience in commercial,
                retail, office and industrial projects, from new interior
                build-outs to renovations to ground-up construction.
              </Typography>
            </Box>
          </Grid>
          <Grid item xs={12} md={2}>
            <Typography variant="h6">Quick Links</Typography>
            <Box>
              <Link
                href="/about"
                color="inherit"
                underline="none"
                sx={{
                  ":hover": {
                    color: theme.palette.darkred.main,
                    transition: "color 0.3s",
                  },
                }}
              >
                About
              </Link>
            </Box>
            <Box>
              <Link
                href="/services"
                color="inherit"
                underline="none"
                sx={{
                  ":hover": {
                    color: theme.palette.darkred.main,
                    transition: "color 0.3s",
                  },
                }}
              >
                Services
              </Link>
            </Box>
            <Box>
              <Link
                href="/portfolio"
                color="inherit"
                underline="none"
                sx={{
                  ":hover": {
                    color: theme.palette.darkred.main,
                    transition: "color 0.3s",
                  },
                }}
              >
                Portfolio
              </Link>
            </Box>
            <Box>
              <Link
                href="/contact"
                color="inherit"
                underline="none"
                sx={{
                  ":hover": {
                    color: theme.palette.darkred.main,
                    transition: "color 0.3s",
                  },
                }}
              >
                Contact Us
              </Link>
            </Box>
            <Box>
              <Link
                href="/careers-jobs"
                color="inherit"
                underline="none"
                sx={{
                  ":hover": {
                    color: theme.palette.darkred.main,
                    transition: "color 0.3s",
                  },
                }}
              >
                Careers/Jobs
              </Link>
            </Box>
          </Grid>
          <Grid item xs={12} md={3}>
            <Typography variant="h6">Address</Typography>
            <Typography variant="body1">
              18640 FM 1488 RD STE A-362 MAGNOLIA TX 77354-8516
            </Typography>
            <Typography variant="h6" sx={{ mt: 2 }}>
              Follow us
            </Typography>
            <Box>
              <IconButton
                color="inherit"
                href="#"
                sx={{
                  ":hover": {
                    color: theme.palette.darkred.main,
                    transition: "color 0.3s",
                  },
                }}
              >
                <Facebook />
              </IconButton>
              <IconButton
                color="inherit"
                href="#"
                sx={{
                  ":hover": {
                    color: theme.palette.darkred.main,
                    transition: "color 0.3s",
                  },
                }}
              >
                <LinkedIn />
              </IconButton>
              <IconButton
                color="inherit"
                href="#"
                sx={{
                  ":hover": {
                    color: theme.palette.darkred.main,
                    transition: "color 0.3s",
                  },
                }}
              >
                <Instagram />
              </IconButton>
            </Box>
          </Grid>
          <Grid item xs={12} md={3}>
            <Box
              sx={{
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
              }}
            >
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
                onClick={() => handleClick()}
              >
                contact us
              </Button>
              {/* <Typography variant="body1" sx={{ mt: 2 }}>
                <Link
                  href="tel:+8329017158"
                  sx={{
                    color: "white",
                    textDecoration: "none",
                    cursor: "pointer",
                    "&:hover": {
                      color: theme.palette.darkred.main,
                    },
                  }}
                >
                  <span role="img" aria-label="phone">
                    📞
                  </span>{" "}
                  {phoneNumber}
                </Link>
              </Typography> */}
            </Box>
          </Grid>
        </Grid>
        <Box sx={{ textAlign: "center", mt: 4 }}>
          <Typography variant="body2">
            &copy; {new Date().getFullYear()} Saltex Steel Construction
          </Typography>
        </Box>
      </Container>
    </Box>
  );
};

export default Footer;
