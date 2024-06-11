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
  Link,
} from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
import logo from "../img/logo.png";
import { useNavigate, useLocation } from "react-router-dom";

const MyNavBar = () => {
  const [drawerOpen, setDrawerOpen] = useState(false);
  const [activeLink, setActiveLink] = useState(null);
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("md"));

  const navigate = useNavigate();
  const location = useLocation();

  const handleLinkClick = (linkName) => {
    setActiveLink(linkName);
  };

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
        {["HOME", "PROJECTS", "SERVICES", "ABOUT", "CONTACT"].map((text) => (
          <ListItem
            button
            key={text}
            onClick={() => {
              navigate(`/${text.toLowerCase().replace(/\s/g, "")}`);
              handleLinkClick(text);
            }}
            sx={{
              color:
                activeLink === text ? theme.palette.darkblue.main : "black",
              "&:hover": {
                color: theme.palette.darkblue.main,
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
        borderBottom: `2px solid ${theme.palette.darkblue.main}`,
      }}
    >
      <Container>
        <Toolbar disableGutters>
          <a href="/">
            <img
              src={logo}
              alt="SalTex Steel Construction"
              style={{ width: 175, height: 48 }}
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
            <Box sx={{ marginLeft: "auto", display: "flex" }}>
              {location.pathname !== "/" && (
                <Link
                  key="HOME"
                  onClick={() => {
                    navigate("/");
                    handleLinkClick("HOME");
                  }}
                  sx={{
                    color:
                      activeLink === "HOME"
                        ? theme.palette.darkblue.main
                        : "white",
                    textDecoration: "none",
                    marginRight: 2,
                    "&:hover": {
                      color: theme.palette.darkblue.main,
                    },
                  }}
                >
                  Home
                </Link>
              )}
              {["PROJECTS", "SERVICES", "ABOUT", "CONTACT"].map((text) => (
                <Link
                  key={text}
                  onClick={() => {
                    navigate(`/${text.toLowerCase().replace(/\s/g, "")}`);
                    handleLinkClick(text);
                  }}
                  sx={{
                    color:
                      activeLink === text
                        ? theme.palette.darkblue.main
                        : "white",
                    textDecoration: "none",
                    marginRight: 2,
                    "&:hover": {
                      color: theme.palette.darkblue.main,
                    },
                  }}
                >
                  {text}
                </Link>
              ))}
            </Box>
          )}
        </Toolbar>
      </Container>
    </AppBar>
  );
};

export default MyNavBar;
