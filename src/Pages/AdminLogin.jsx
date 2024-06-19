import React, { useState } from "react";
import { Box, TextField, Button, Typography } from "@mui/material";
import { useNavigate } from "react-router-dom";
import { useAuth } from "../Authentication/AdminAuthContext";

const AdminLogin = () => {
  const [key, setKey] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();
  const { login } = useAuth();

  const handleLogin = (e) => {
    e.preventDefault();
    if (email === "email@gmail.com" && password === "password") {
      login();
      navigate("/admin-dashboard");
    } else {
      alert("Incorrect login credentials");
    }
  };

  return (
    <Box
      component="form"
      onSubmit={handleLogin}
      sx={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        minHeight: "48vh",
        width: "100vw",
        mt: 58,
        backgroundColor: "white",
      }}
    >
      <Typography variant="h4" gutterBottom>
        Admin Login
      </Typography>

      <TextField
        label="Email"
        variant="outlined"
        margin="normal"
        type="email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        required
      />
      <TextField
        label="Password"
        variant="outlined"
        margin="normal"
        type="password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
        required
      />
      <Button
        type="submit"
        variant="contained"
        color="primary"
        sx={{ marginTop: "20px" }}
      >
        Login
      </Button>
    </Box>
  );
};

export default AdminLogin;