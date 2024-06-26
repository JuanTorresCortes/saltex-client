import React, { useState } from "react";
import {
  Box,
  TextField,
  Button,
  Typography,
  Card,
  CardContent,
  Grid,
  useMediaQuery,
  useTheme,
} from "@mui/material";
import AdminNavBar from "../components/AdminNavBar";

const AdminDashboard = () => {
  const [jobTitle, setJobTitle] = useState("");
  const [jobDescription, setJobDescription] = useState("");
  const [projectName, setProjectName] = useState("");
  const [projectDescription, setProjectDescription] = useState("");
  const [projectImage, setProjectImage] = useState("");
  const [jobPostings, setJobPostings] = useState([
    {
      id: 1,
      title: "Construction Project Manager",
      description:
        "Manage and oversee construction projects from start to finish.",
    },
  ]);
  const [projects, setProjects] = useState([
    {
      name: "Education",
      description: "Description for Education",
      image: "education",
    },
  ]);

  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("sm"));

  const handleAddJobPosting = () => {
    const newJob = {
      id: jobPostings.length + 1,
      title: jobTitle,
      description: jobDescription,
    };
    setJobPostings([...jobPostings, newJob]);
    setJobTitle("");
    setJobDescription("");
  };

  const handleAddProject = () => {
    const newProject = {
      name: projectName,
      description: projectDescription,
      image: projectImage,
    };
    setProjects([...projects, newProject]);
    setProjectName("");
    setProjectDescription("");
    setProjectImage("");
  };

  const handleDeleteJobPosting = (id) => {
    const newJobPostings = jobPostings.filter((job) => job.id !== id);
    setJobPostings(newJobPostings);
  };
  const handleDeleteProject = (id) => {
    const newProjects = projects.filter((project) => project.id !== id);
    setProjects(newProjects);
  };

  return (
    <Box
      sx={{
        padding: isMobile ? "10px" : "20px",
        backgroundColor: "white",
        mt: 88,
        minHeight: "75vh",
        width: "100vw",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        color: "black",
        textAlign: "center",
        position: "relative",
      }}
    >
      <AdminNavBar />
      <Typography variant="h3" gutterBottom>
        Admin Dashboard
      </Typography>

      <Grid container spacing={3} sx={{ marginBottom: "20px" }}>
        <Grid item xs={12}>
          <Typography variant="h5">Create Job Posting</Typography>
          <TextField
            label="Job Title"
            variant="outlined"
            margin="normal"
            fullWidth
            value={jobTitle}
            onChange={(e) => setJobTitle(e.target.value)}
          />
          <TextField
            label="Job Description"
            variant="outlined"
            margin="normal"
            fullWidth
            value={jobDescription}
            onChange={(e) => setJobDescription(e.target.value)}
          />
          <Button
            variant="contained"
            color="primary"
            onClick={handleAddJobPosting}
            sx={{ marginTop: "10px" }}
          >
            Add Job Posting
          </Button>
        </Grid>

        <Grid item xs={12}>
          <Typography variant="h5">Job Postings</Typography>
          {jobPostings.map((job) => (
            <Card key={job.id} sx={{ marginBottom: "10px" }}>
              <CardContent>
                <Typography variant="h6">{job.title}</Typography>
                <Typography variant="body1">{job.description}</Typography>
              </CardContent>
              <Button onClick={() => handleDeleteJobPosting(job.id)}>
                Delete
              </Button>
            </Card>
          ))}
        </Grid>

        <Grid item xs={12}>
          <Typography variant="h5">Create a Project Post</Typography>
          <TextField
            label="Project Name"
            variant="outlined"
            margin="normal"
            fullWidth
            value={projectName}
            onChange={(e) => setProjectName(e.target.value)}
          />
          <TextField
            label="Project Description"
            variant="outlined"
            margin="normal"
            fullWidth
            value={projectDescription}
            onChange={(e) => setProjectDescription(e.target.value)}
          />
          <TextField
            label="Project Image"
            variant="outlined"
            margin="normal"
            fullWidth
            value={projectImage}
            onChange={(e) => setProjectImage(e.target.value)}
          />
          <Button
            variant="contained"
            color="primary"
            onClick={handleAddProject}
            sx={{ marginTop: "10px" }}
          >
            Add Project
          </Button>
        </Grid>

        <Grid item xs={12}>
          <Typography variant="h5">Projects</Typography>
          {projects.map((project, index) => (
            <Card key={index} sx={{ marginBottom: "10px" }}>
              <CardContent>
                <Typography variant="h6">{project.name}</Typography>
                <Typography variant="body1">{project.description}</Typography>
                <Typography variant="body2">Image: {project.image}</Typography>
              </CardContent>
              <Button onClick={() => handleDeleteProject(index)}>Delete</Button>
            </Card>
          ))}
        </Grid>
      </Grid>
    </Box>
  );
};

export default AdminDashboard;
