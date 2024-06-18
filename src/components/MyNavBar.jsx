// import React, { useState, useEffect } from "react";
// import {
//   AppBar,
//   Toolbar,
//   IconButton,
//   Container,
//   Drawer,
//   List,
//   ListItem,
//   ListItemText,
//   useMediaQuery,
//   useTheme,
//   Box,
// } from "@mui/material";
// import MenuIcon from "@mui/icons-material/Menu";
// import logo from "../img/logo.png";
// import { Link as RouterLink, useNavigate, useLocation } from "react-router-dom";

// const MyNavBar = () => {
//   const [drawerOpen, setDrawerOpen] = useState(false);
//   const [activeLink, setActiveLink] = useState(null);
//   const theme = useTheme();
//   const isMobile = useMediaQuery(theme.breakpoints.down("md"));

//   const navigate = useNavigate();
//   const location = useLocation();

//   useEffect(() => {
//     setActiveLink(location.pathname.toUpperCase().substring(1) || "HOME");
//   }, [location]);

//   const handleLinkClick = (linkName) => {
//     setActiveLink(linkName);
//     if (linkName === "HOME") {
//       navigate("/");
//     } else {
//       navigate(`/${linkName.toLowerCase().replace(/\s/g, "")}`);
//     }
//     // navigate(`/${linkName.toLowerCase().replace(/\s/g, "")}`);
//     setDrawerOpen(false);
//   };

//   const toggleDrawer = (open) => (event) => {
//     if (
//       event.type === "keydown" &&
//       (event.key === "Tab" || event.key === "Shift")
//     ) {
//       return;
//     }
//     setDrawerOpen(open);
//   };

//   const list = () => (
//     <Box
//       role="presentation"
//       onClick={toggleDrawer(false)}
//       onKeyDown={toggleDrawer(false)}
//       sx={{ width: 250 }}
//     >
//       <List>
//         {["HOME", "PROJECTS", "SERVICES", "ABOUT", "CONTACT"].map((text) => (
//           <ListItem
//             button
//             key={text}
//             onClick={() => handleLinkClick(text)}
//             sx={{
//               color: activeLink === text ? theme.palette.darkred.main : "black",
//               "&:hover": {
//                 color: theme.palette.darkred.main,
//                 cursor: "pointer",
//               },
//             }}
//           >
//             <ListItemText primary={text} />
//           </ListItem>
//         ))}
//       </List>
//     </Box>
//   );

//   return (
//     <AppBar
//       position="fixed"
//       style={{
//         backgroundColor: "black",
//         boxShadow: "none",
//         borderBottom: `2px solid ${theme.palette.darkred.main}`,
//         borderTop: `2px solid ${theme.palette.darkred.main}`,
//       }}
//     >
//       <Container>
//         <Toolbar disableGutters>
//           <RouterLink to="/">
//             <img
//               src={logo}
//               alt="SalTex Steel Construction"
//               style={{ width: 175, height: 48 }}
//             />
//           </RouterLink>
//           {isMobile ? (
//             <>
//               <IconButton
//                 edge="start"
//                 color="inherit"
//                 aria-label="menu"
//                 onClick={toggleDrawer(true)}
//                 style={{ marginLeft: "auto" }}
//               >
//                 <MenuIcon />
//               </IconButton>
//               <Drawer
//                 anchor="right"
//                 open={drawerOpen}
//                 onClose={toggleDrawer(false)}
//               >
//                 {list()}
//               </Drawer>
//             </>
//           ) : (
//             <Box sx={{ marginLeft: "auto", display: "flex" }}>
//               {location.pathname !== "/" && (
//                 <RouterLink
//                   to="/"
//                   onClick={() => handleLinkClick("HOME")}
//                   style={{
//                     color:
//                       activeLink === "HOME"
//                         ? theme.palette.darkred.main
//                         : "white",
//                     textDecoration: "none",
//                     marginRight: 16,
//                     cursor: "pointer",
//                     "&:hover": {
//                       color: theme.palette.darkred.main,
//                     },
//                   }}
//                 >
//                   HOME
//                 </RouterLink>
//               )}
//               {["SERVICES", "ABOUT", "PROJECTS", "CONTACT"].map((text) => (
//                 <RouterLink
//                   key={text}
//                   to={`/${text.toLowerCase().replace(/\s/g, "")}`}
//                   onClick={() => handleLinkClick(text)}
//                   style={{
//                     color:
//                       activeLink === text
//                         ? theme.palette.darkred.main
//                         : "white",
//                     textDecoration: "none",
//                     marginRight: 16,
//                     cursor: "pointer",
//                     "&:hover": {
//                       color: theme.palette.darkred.main,
//                     },
//                   }}
//                 >
//                   {text}
//                 </RouterLink>
//               ))}
//             </Box>
//           )}
//         </Toolbar>
//       </Container>
//     </AppBar>
//   );
// };

// export default MyNavBar;

// import React, { useState, useEffect } from "react";
// import {
//   AppBar,
//   Toolbar,
//   IconButton,
//   Container,
//   Drawer,
//   List,
//   ListItem,
//   ListItemText,
//   useMediaQuery,
//   useTheme,
//   Box,
//   Link as MuiLink,
// } from "@mui/material";
// import MenuIcon from "@mui/icons-material/Menu";
// import PhoneIcon from "@mui/icons-material/Phone";
// import logo from "../img/logo.png";
// import { Link as RouterLink, useNavigate, useLocation } from "react-router-dom";

// const MyNavBar = () => {
//   const [drawerOpen, setDrawerOpen] = useState(false);
//   const [activeLink, setActiveLink] = useState(null);
//   const theme = useTheme();
//   const isMobile = useMediaQuery(theme.breakpoints.down("md"));

//   const navigate = useNavigate();
//   const location = useLocation();

//   useEffect(() => {
//     setActiveLink(location.pathname.toUpperCase().substring(1) || "HOME");
//   }, [location]);

//   const handleLinkClick = (linkName) => {
//     setActiveLink(linkName);
//     if (linkName === "HOME") {
//       navigate("/");
//     } else {
//       navigate(`/${linkName.toLowerCase().replace(/\s/g, "")}`);
//     }
//     setDrawerOpen(false);
//   };

//   const toggleDrawer = (open) => (event) => {
//     if (
//       event.type === "keydown" &&
//       (event.key === "Tab" || event.key === "Shift")
//     ) {
//       return;
//     }
//     setDrawerOpen(open);
//   };

//   const list = () => (
//     <Box
//       role="presentation"
//       onClick={toggleDrawer(false)}
//       onKeyDown={toggleDrawer(false)}
//       sx={{ width: 250 }}
//     >
//       <List>
//         {["HOME", "PROJECTS", "SERVICES", "ABOUT", "CONTACT"].map((text) => (
//           <ListItem
//             button
//             key={text}
//             onClick={() => handleLinkClick(text)}
//             sx={{
//               color: activeLink === text ? theme.palette.darkred.main : "black",
//               "&:hover": {
//                 color: theme.palette.darkred.main,
//                 cursor: "pointer",
//               },
//             }}
//           >
//             <ListItemText primary={text} />
//           </ListItem>
//         ))}
//       </List>
//     </Box>
//   );

//   return (
//     <AppBar
//       position="fixed"
//       style={{
//         backgroundColor: "black",
//         boxShadow: "none",
//         borderBottom: `2px solid ${theme.palette.darkred.main}`,
//         borderTop: `2px solid ${theme.palette.darkred.main}`,
//       }}
//     >
//       <Container>
//         <Toolbar disableGutters>
//           <RouterLink to="/">
//             <img
//               src={logo}
//               alt="SalTex Steel Construction"
//               style={{ width: 175, height: 48 }}
//             />
//           </RouterLink>
//           {isMobile ? (
//             <>
//               <IconButton
//                 edge="start"
//                 color="inherit"
//                 aria-label="menu"
//                 onClick={toggleDrawer(true)}
//                 style={{ marginLeft: "auto" }}
//               >
//                 <MenuIcon />
//               </IconButton>
//               <Drawer
//                 anchor="right"
//                 open={drawerOpen}
//                 onClose={toggleDrawer(false)}
//               >
//                 {list()}
//               </Drawer>
//             </>
//           ) : (
//             <Box
//               sx={{ marginLeft: "auto", display: "flex", alignItems: "center" }}
//             >
//               {location.pathname !== "/" && (
//                 <RouterLink
//                   to="/"
//                   onClick={() => handleLinkClick("HOME")}
//                   style={{
//                     color:
//                       activeLink === "HOME"
//                         ? theme.palette.darkred.main
//                         : "white",
//                     textDecoration: "none",
//                     marginRight: 16,
//                     cursor: "pointer",
//                     "&:hover": {
//                       color: theme.palette.darkred.main,
//                     },
//                   }}
//                 >
//                   HOME
//                 </RouterLink>
//               )}
//               {["SERVICES", "ABOUT", "PROJECTS", "CONTACT"].map((text) => (
//                 <RouterLink
//                   key={text}
//                   to={`/${text.toLowerCase().replace(/\s/g, "")}`}
//                   onClick={() => handleLinkClick(text)}
//                   style={{
//                     color:
//                       activeLink === text
//                         ? theme.palette.darkred.main
//                         : "white",
//                     textDecoration: "none",
//                     marginRight: 16,
//                     cursor: "pointer",
//                     "&:hover": {
//                       color: theme.palette.darkred.main,
//                     },
//                   }}
//                 >
//                   {text}
//                 </RouterLink>
//               ))}
//               <MuiLink
//                 href="tel:+12818888888"
//                 sx={{
//                   color: "white",
//                   textDecoration: "none",
//                   marginLeft: 2,
//                   display: "flex",
//                   alignItems: "center",
//                   cursor: "pointer",
//                   "&:hover": {
//                     color: theme.palette.darkred.main,
//                   },
//                 }}
//               >
//                 <PhoneIcon sx={{ marginRight: 0.5 }} />
//                 (281) 888-8888
//               </MuiLink>
//             </Box>
//           )}
//         </Toolbar>
//       </Container>
//     </AppBar>
//   );
// };

// export default MyNavBar;

import React, { useState, useEffect } from "react";
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
import { Link as RouterLink, useNavigate, useLocation } from "react-router-dom";

const MyNavBar = () => {
  const [drawerOpen, setDrawerOpen] = useState(false);
  const [activeLink, setActiveLink] = useState(null);
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("md"));

  const navigate = useNavigate();
  const location = useLocation();

  useEffect(() => {
    setActiveLink(location.pathname.toUpperCase().substring(1) || "HOME");
  }, [location]);

  const handleLinkClick = (linkName) => {
    setActiveLink(linkName);
    if (linkName === "HOME") {
      navigate("/");
    } else {
      navigate(`/${linkName.toLowerCase().replace(/\s/g, "")}`);
    }
    setDrawerOpen(false);
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
            onClick={() => handleLinkClick(text)}
            sx={{
              color: activeLink === text ? theme.palette.darkred.main : "black",
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
        borderBottom: `2px solid ${theme.palette.darkred.main}`,
        borderTop: `2px solid ${theme.palette.darkred.main}`,
      }}
    >
      <Container>
        <Toolbar disableGutters>
          <RouterLink to="/">
            <img
              src={logo}
              alt="SalTex Steel Construction"
              style={{ width: 175, height: 48 }}
            />
          </RouterLink>
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
                <RouterLink
                  to="/"
                  onClick={() => handleLinkClick("HOME")}
                  style={{ textDecoration: "none" }}
                >
                  <Box
                    sx={{
                      color:
                        activeLink === "HOME"
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
                  </Box>
                </RouterLink>
              )}
              {["SERVICES", "PROJECTS", "ABOUT", "CONTACT"].map((text) => (
                <RouterLink
                  key={text}
                  to={`/${text.toLowerCase().replace(/\s/g, "")}`}
                  onClick={() => handleLinkClick(text)}
                  style={{ textDecoration: "none" }}
                >
                  <Box
                    sx={{
                      color:
                        activeLink === text
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
                    {text}
                  </Box>
                </RouterLink>
              ))}
              <MuiLink
                href="tel:+12818888888"
                sx={{
                  color: "white",
                  textDecoration: "none",
                  marginLeft: 2,
                  display: "flex",
                  alignItems: "center",
                  cursor: "pointer",
                  "&:hover": {
                    color: theme.palette.darkred.main,
                  },
                }}
              >
                <PhoneIcon sx={{ marginRight: 0.5 }} />
                (281) 888-8888
              </MuiLink>
            </Box>
          )}
        </Toolbar>
      </Container>
    </AppBar>
  );
};

export default MyNavBar;
