import React, { useState } from "react";
import {
  Drawer,
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
  Modal,
  Fade,
  Box,
} from "@mui/material";
import PostAddIcon from "@mui/icons-material/PostAdd";
import WorkIcon from "@mui/icons-material/Work";
import PersonAddIcon from "@mui/icons-material/PersonAdd";
import ExitToAppIcon from "@mui/icons-material/ExitToApp";
import FolderIcon from "@mui/icons-material/Folder";
import { useAuth } from "../Authentication/AdminAuthContext"; // Import the useAuth hook

import RegisterForm from "./RegisterForm";
import { useNavigate } from "react-router-dom";
import { registerUser } from "../API/api";

const AdminSideBarNav = () => {
  const [open, setOpen] = useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  const navigate = useNavigate();

  const { logout } = useAuth(); // Get the logout function from the context

  const handleLogout = () => {
    logout(); // Call the logout function
  };

  return (
    <Drawer
      variant="permanent"
      anchor="left"
      sx={{
        backgroundColor: "#242424",
        width: 240,
        flexShrink: 0,
        "& .MuiDrawer-paper": {
          width: 240,
          boxSizing: "border-box",
          mr: 1,
        },
      }}
    >
      <List>
        <ListItem button>
          <ListItemIcon>
            <WorkIcon />
          </ListItemIcon>
          <ListItemText primary="Create Job Posting" />
        </ListItem>
        <ListItem button>
          <ListItemIcon>
            <PostAddIcon />
          </ListItemIcon>
          <ListItemText primary="Create New Project Post" />
        </ListItem>
        <ListItem button onClick={handleOpen}>
          <ListItemIcon>
            <PersonAddIcon />
          </ListItemIcon>
          <ListItemText primary="Create New User" />
        </ListItem>
        <ListItem button>
          <ListItemIcon>
            <FolderIcon />
          </ListItemIcon>
          <ListItemText primary="Active Projects" />
        </ListItem>
        <ListItem button onClick={handleLogout}>
          {" "}
          {/* Add onClick event to handle logout */}
          <ListItemIcon>
            <ExitToAppIcon />
          </ListItemIcon>
          <ListItemText primary="Logout" />
        </ListItem>
      </List>
      {/* Register Form Modal */}
      <Modal
        aria-labelledby="registration-form-modal"
        aria-describedby="modal-to-register-new-users"
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
              outline: "none", // Removes the default focus outline
            }}
          >
            <RegisterForm />
          </Box>
        </Fade>
      </Modal>
    </Drawer>
  );
};

export default AdminSideBarNav;
