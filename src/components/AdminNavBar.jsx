// import React, { useState } from "react";
// import {
//   AppBar,
//   Toolbar,
//   IconButton,
//   Typography,
//   Menu,
//   MenuItem,
//   Modal,
//   Fade,
//   Box,
//   useMediaQuery,
//   useTheme,
//   ListItemIcon,
//   ListItemText,
// } from "@mui/material";
// import PostAddIcon from "@mui/icons-material/PostAdd";
// import WorkIcon from "@mui/icons-material/Work";
// import PersonAddIcon from "@mui/icons-material/PersonAdd";
// import ExitToAppIcon from "@mui/icons-material/ExitToApp";
// import FolderIcon from "@mui/icons-material/Folder";
// import MenuIcon from "@mui/icons-material/Menu";
// import { useAuth } from "../Authentication/AdminAuthContext";
// import RegisterForm from "./RegisterForm";
// import { useNavigate } from "react-router-dom";
// import logo from "../img/logo.png"; // Make sure to replace with the correct path to your logo

// const AdminNavBar = () => {
//   const [anchorEl, setAnchorEl] = useState(null);
//   const [open, setOpen] = useState(false);
//   const theme = useTheme();
//   const isMobile = useMediaQuery(theme.breakpoints.down("sm"));

//   const handleMenuOpen = (event) => setAnchorEl(event.currentTarget);
//   const handleMenuClose = () => setAnchorEl(null);
//   const handleOpen = () => setOpen(true);
//   const handleClose = () => setOpen(false);

//   const navigate = useNavigate();
//   const { logout } = useAuth();

//   const handleLogout = () => {
//     logout();
//     handleMenuClose();
//   };

//   return (
//     <>
//       <AppBar
//         position="static"
//         sx={{ backgroundColor: "#242424", width: "92%" }}
//       >
//         <Toolbar>
//           <img
//             src={logo}
//             alt="Logo"
//             style={{ width: "100px", marginRight: "20px" }}
//           />
//           <Typography variant="h6" sx={{ flexGrow: 1 }}>
//             Admin Panel
//           </Typography>
//           {isMobile ? (
//             <>
//               <IconButton
//                 edge="start"
//                 color="inherit"
//                 aria-label="menu"
//                 onClick={handleMenuOpen}
//               >
//                 <MenuIcon />
//               </IconButton>
//               <Menu
//                 anchorEl={anchorEl}
//                 keepMounted
//                 open={Boolean(anchorEl)}
//                 onClose={handleMenuClose}
//               >
//                 <MenuItem onClick={handleMenuClose}>
//                   <ListItemIcon>
//                     <WorkIcon />
//                   </ListItemIcon>
//                   <ListItemText primary="Create Job Posting" />
//                 </MenuItem>
//                 <MenuItem onClick={handleMenuClose}>
//                   <ListItemIcon>
//                     <PostAddIcon />
//                   </ListItemIcon>
//                   <ListItemText primary="Create New Project Post" />
//                 </MenuItem>
//                 <MenuItem onClick={handleOpen}>
//                   <ListItemIcon>
//                     <PersonAddIcon />
//                   </ListItemIcon>
//                   <ListItemText primary="Create New User" />
//                 </MenuItem>
//                 <MenuItem onClick={handleMenuClose}>
//                   <ListItemIcon>
//                     <FolderIcon />
//                   </ListItemIcon>
//                   <ListItemText primary="Active Projects" />
//                 </MenuItem>
//                 <MenuItem onClick={handleLogout}>
//                   <ListItemIcon>
//                     <ExitToAppIcon />
//                   </ListItemIcon>
//                   <ListItemText primary="Logout" />
//                 </MenuItem>
//               </Menu>
//             </>
//           ) : (
//             <>
//               <IconButton
//                 color="inherit"
//                 aria-label="create job posting"
//                 onClick={() => navigate("/create-job-posting")}
//                 sx={{ display: "flex", flexDirection: "column" }}
//               >
//                 <WorkIcon />
//                 <Typography variant="caption">Create Job Posting</Typography>
//               </IconButton>
//               <IconButton
//                 color="inherit"
//                 aria-label="create new project post"
//                 onClick={() => navigate("/create-project-post")}
//                 sx={{ display: "flex", flexDirection: "column" }}
//               >
//                 <PostAddIcon />
//                 <Typography variant="caption">
//                   Create New Project Post
//                 </Typography>
//               </IconButton>
//               <IconButton
//                 color="inherit"
//                 aria-label="create new user"
//                 onClick={handleOpen}
//                 sx={{ display: "flex", flexDirection: "column" }}
//               >
//                 <PersonAddIcon />
//                 <Typography variant="caption">Create New User</Typography>
//               </IconButton>
//               <IconButton
//                 color="inherit"
//                 aria-label="active projects"
//                 onClick={() => navigate("/active-projects")}
//                 sx={{ display: "flex", flexDirection: "column" }}
//               >
//                 <FolderIcon />
//                 <Typography variant="caption">Active Projects</Typography>
//               </IconButton>
//               <IconButton
//                 color="inherit"
//                 aria-label="logout"
//                 onClick={handleLogout}
//                 sx={{ display: "flex", flexDirection: "column" }}
//               >
//                 <ExitToAppIcon />
//                 <Typography variant="caption">Logout</Typography>
//               </IconButton>
//             </>
//           )}
//         </Toolbar>
//       </AppBar>
//       {/* Register Form Modal */}
//       <Modal
//         aria-labelledby="registration-form-modal"
//         aria-describedby="modal-to-register-new-users"
//         open={open}
//         onClose={handleClose}
//         closeAfterTransition
//       >
//         <Fade in={open}>
//           <Box
//             sx={{
//               position: "absolute",
//               top: "50%",
//               left: "50%",
//               transform: "translate(-50%, -50%)",
//               width: 800,
//               bgcolor: "background.paper",
//               boxShadow: 24,
//               p: 14,
//               outline: "none",
//             }}
//           >
//             <RegisterForm />
//           </Box>
//         </Fade>
//       </Modal>
//     </>
//   );
// };

// export default AdminNavBar;

import React, { useState } from "react";
import {
  AppBar,
  Toolbar,
  IconButton,
  Typography,
  Menu,
  MenuItem,
  Modal,
  Fade,
  Box,
  useMediaQuery,
  useTheme,
  ListItemIcon,
  ListItemText,
} from "@mui/material";
import PostAddIcon from "@mui/icons-material/PostAdd";
import WorkIcon from "@mui/icons-material/Work";
import PersonAddIcon from "@mui/icons-material/PersonAdd";
import ExitToAppIcon from "@mui/icons-material/ExitToApp";
import FolderIcon from "@mui/icons-material/Folder";
import MenuIcon from "@mui/icons-material/Menu";
import { useAuth } from "../Authentication/AdminAuthContext";
import RegisterForm from "../components/RegisterForm";
import JobPostingForm from "../components/JobPostingForm";
import ProjectPostForm from "../components/ProjectPostForm";
import { useNavigate } from "react-router-dom";
import logo from "../img/logo.png"; // Make sure to replace with the correct path to your logo

const AdminNavBar = () => {
  const [anchorEl, setAnchorEl] = useState(null);
  const [open, setOpen] = useState(false);
  const [modalContent, setModalContent] = useState(null);
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("sm"));

  const handleMenuOpen = (event) => setAnchorEl(event.currentTarget);
  const handleMenuClose = () => setAnchorEl(null);
  const handleOpen = (content) => {
    setModalContent(content);
    setOpen(true);
  };
  const handleClose = () => setOpen(false);

  const navigate = useNavigate();
  const { logout } = useAuth();

  const handleLogout = () => {
    logout();
    handleMenuClose();
  };

  return (
    <>
      <AppBar
        position="static"
        sx={{ backgroundColor: "#242424", width: "92%" }}
      >
        <Toolbar>
          <img
            src={logo}
            alt="Logo"
            style={{ width: "100px", marginRight: "20px" }}
          />
          {isMobile ? (
            <>
              <IconButton
                edge="start"
                color="inherit"
                aria-label="menu"
                onClick={handleMenuOpen}
              >
                <MenuIcon />
              </IconButton>
              <Menu
                anchorEl={anchorEl}
                keepMounted
                open={Boolean(anchorEl)}
                onClose={handleMenuClose}
              >
                <MenuItem onClick={() => navigate("/active-projects")}>
                  <ListItemIcon>
                    <FolderIcon />
                  </ListItemIcon>
                  <ListItemText primary="Active Projects" />
                </MenuItem>
                <MenuItem onClick={() => handleOpen(<ProjectPostForm />)}>
                  <ListItemIcon>
                    <PostAddIcon />
                  </ListItemIcon>
                  <ListItemText primary="Create New Project Post" />
                </MenuItem>
                <MenuItem onClick={() => handleOpen(<JobPostingForm />)}>
                  <ListItemIcon>
                    <WorkIcon />
                  </ListItemIcon>
                  <ListItemText primary="Create Job Posting" />
                </MenuItem>
                <MenuItem onClick={() => handleOpen(<RegisterForm />)}>
                  <ListItemIcon>
                    <PersonAddIcon />
                  </ListItemIcon>
                  <ListItemText primary="Create New User" />
                </MenuItem>
                <MenuItem onClick={handleLogout}>
                  <ListItemIcon>
                    <ExitToAppIcon />
                  </ListItemIcon>
                  <ListItemText primary="Logout" />
                </MenuItem>
              </Menu>
            </>
          ) : (
            <>
              <IconButton
                color="inherit"
                aria-label="active projects"
                onClick={() => navigate("/active-projects")}
                sx={{ display: "flex", flexDirection: "column" }}
              >
                <FolderIcon />
                <Typography variant="caption">Active Projects</Typography>
              </IconButton>
              <IconButton
                color="inherit"
                aria-label="create new project post"
                onClick={() => handleOpen(<ProjectPostForm />)}
                sx={{ display: "flex", flexDirection: "column" }}
              >
                <PostAddIcon />
                <Typography variant="caption">
                  Create New Project Post
                </Typography>
              </IconButton>
              <IconButton
                color="inherit"
                aria-label="create job posting"
                onClick={() => handleOpen(<JobPostingForm />)}
                sx={{ display: "flex", flexDirection: "column" }}
              >
                <WorkIcon />
                <Typography variant="caption">Create Job Posting</Typography>
              </IconButton>
              <IconButton
                color="inherit"
                aria-label="create new user"
                onClick={() => handleOpen(<RegisterForm />)}
                sx={{ display: "flex", flexDirection: "column" }}
              >
                <PersonAddIcon />
                <Typography variant="caption">Create New User</Typography>
              </IconButton>
              <IconButton
                color="inherit"
                aria-label="logout"
                onClick={handleLogout}
                sx={{ display: "flex", flexDirection: "column" }}
              >
                <ExitToAppIcon />
                <Typography variant="caption">Logout</Typography>
              </IconButton>
            </>
          )}
        </Toolbar>
      </AppBar>
      {/* Modal for Forms */}
      <Modal
        aria-labelledby="form-modal"
        aria-describedby="modal-to-create-data"
        open={open}
        onClose={handleClose}
        closeAfterTransition
      >
        <Fade in={open}>
          <Box
            sx={{
              position: "absolute",
              top: "50%",
              left: "50%",
              transform: "translate(-50%, -50%)",
              width: 800,
              bgcolor: "background.paper",
              boxShadow: 24,
              p: 14,
              outline: "none",
            }}
          >
            {modalContent}
          </Box>
        </Fade>
      </Modal>
    </>
  );
};

export default AdminNavBar;
