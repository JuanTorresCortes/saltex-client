import React, { useState } from "react";
import {
  AppBar,
  Toolbar,
  IconButton,
  Container,
  Drawer,
  List,
  ListItem,
  ListItemText,
  useMediaQuery,
  useTheme,
  Box,
  Link as MuiLink,
} from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
import PhoneIcon from "@mui/icons-material/Phone";
import logo from "../img/logo.png";
import { useLocation } from "react-router-dom";

const MyNavBar = () => {
  const [drawerOpen, setDrawerOpen] = useState(false);
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("md"));
  const location = useLocation();
  const phoneNumber = "+8329017158";

  const toggleDrawer = (open) => (event) => {
    if (
      event.type === "keydown" &&
      (event.key === "Tab" || event.key === "Shift")
    ) {
      return;
    }
    setDrawerOpen(open);
  };

  const list = () => (
    <Box
      role="presentation"
      onClick={toggleDrawer(false)}
      onKeyDown={toggleDrawer(false)}
      sx={{ width: 250 }}
    >
      <List>
        {["HOME", "PORTFOLIO", "SERVICES", "ABOUT", "CONTACT"].map((text) => (
          <ListItem
            button
            key={text}
            component="a"
            href={text === "HOME" ? "/" : `/${text.toLowerCase()}`}
            sx={{
              color: location.pathname.toUpperCase().includes(text)
                ? theme.palette.darkred.main
                : "black",
              "&:hover": {
                color: theme.palette.darkred.main,
                cursor: "pointer",
              },
            }}
          >
            <ListItemText primary={text} />
          </ListItem>
        ))}
      </List>
    </Box>
  );

  return (
    <AppBar
      position="fixed"
      style={{
        backgroundColor: "black",
        boxShadow: "none",
        borderBottom: `1px solid ${theme.palette.darkred.main}`,
        borderTop: `1px solid ${theme.palette.darkred.main}`,
      }}
    >
      <Container>
        <Toolbar disableGutters>
          <a href="/" style={{ textDecoration: "none" }}>
            <Box
              component="img"
              src={logo}
              alt="SalTex Steel Construction"
              sx={{
                width: 170,
                height: "auto",
                cursor: "pointer",
                backgroundColor: "black",
                paddingTop: 0.7,
                "&:hover": {
                  transform: "scale(1.1)",
                  transition: "transform 0.3s ease-in-out",
                },
              }}
            />
          </a>
          {isMobile ? (
            <>
              <IconButton
                edge="start"
                color="inherit"
                aria-label="menu"
                onClick={toggleDrawer(true)}
                style={{ marginLeft: "auto" }}
              >
                <MenuIcon />
              </IconButton>
              <Drawer
                anchor="right"
                open={drawerOpen}
                onClose={toggleDrawer(false)}
              >
                {list()}
              </Drawer>
            </>
          ) : (
            <Box
              sx={{ marginLeft: "auto", display: "flex", alignItems: "center" }}
            >
              {location.pathname !== "/" && (
                <MuiLink
                  href="/"
                  sx={{
                    color:
                      location.pathname === "/"
                        ? theme.palette.darkred.main
                        : "white",
                    textDecoration: "none",
                    marginRight: 2,
                    cursor: "pointer",
                    "&:hover": {
                      color: theme.palette.darkred.main,
                    },
                  }}
                >
                  HOME
                </MuiLink>
              )}
              <MuiLink
                href="/services"
                sx={{
                  color: location.pathname.includes("services")
                    ? theme.palette.darkred.main
                    : "white",
                  textDecoration: "none",
                  marginRight: 2,
                  cursor: "pointer",
                  "&:hover": {
                    color: theme.palette.darkred.main,
                  },
                }}
              >
                SERVICES
              </MuiLink>
              <MuiLink
                href="/projects"
                sx={{
                  color: location.pathname.includes("projects")
                    ? theme.palette.darkred.main
                    : "white",
                  textDecoration: "none",
                  marginRight: 2,
                  cursor: "pointer",
                  "&:hover": {
                    color: theme.palette.darkred.main,
                  },
                }}
              >
                PORTFOLIO
              </MuiLink>
              <MuiLink
                href="/about"
                sx={{
                  color: location.pathname.includes("about")
                    ? theme.palette.darkred.main
                    : "white",
                  textDecoration: "none",
                  marginRight: 2,
                  cursor: "pointer",
                  "&:hover": {
                    color: theme.palette.darkred.main,
                  },
                }}
              >
                ABOUT
              </MuiLink>
              <MuiLink
                href="/contact"
                sx={{
                  color: location.pathname.includes("contact")
                    ? theme.palette.darkred.main
                    : "white",
                  textDecoration: "none",
                  marginRight: 2,
                  cursor: "pointer",
                  "&:hover": {
                    color: theme.palette.darkred.main,
                  },
                }}
              >
                CONTACT
              </MuiLink>
            </Box>
          )}
        </Toolbar>
      </Container>
    </AppBar>
  );
};

export default MyNavBar;
