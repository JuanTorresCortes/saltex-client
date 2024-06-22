import React, { useState } from "react";
import {
  Box,
  Typography,
  Card,
  CardContent,
  Button,
  Dialog,
  DialogActions,
  DialogContent,
  DialogContentText,
  DialogTitle,
  TextField,
} from "@mui/material";
import MyNavBar from "../components/MyNavBar";

const jobPostings = [
  {
    id: 1,
    title: "Construction Project Manager",
    description:
      "Manage and oversee construction projects from start to finish.",
  },
  {
    id: 2,
    title: "Site Engineer",
    description:
      "Supervise construction site activities and ensure project quality and safety.",
  },
  {
    id: 3,
    title: "Safety Officer",
    description:
      "Implement and enforce safety protocols on construction sites.",
  },
];

const JobPostings = () => {
  const [open, setOpen] = useState(false);
  const [selectedJob, setSelectedJob] = useState(null);

  const handleClickOpen = (job) => {
    setSelectedJob(job);
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
    setSelectedJob(null);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    // Handle form submission logic here
    handleClose();
  };

  return (
    <Box sx={{ mt: 58, padding: "20px" }}>
      <MyNavBar sx={{ backgroundColor: "rgba(0, 0, 0, 0.7)", mb: 5 }} />
      <Typography variant="h3" gutterBottom sx={{ color: "white" }}>
        Job Postings
      </Typography>
      {jobPostings.map((job) => (
        <Card key={job.id} sx={{ marginBottom: "20px" }}>
          <CardContent>
            <Typography variant="h5">{job.title}</Typography>
            <Typography variant="body1">{job.description}</Typography>
            <Button
              variant="contained"
              color="primary"
              sx={{ marginTop: "10px" }}
              onClick={() => handleClickOpen(job)}
            >
              Apply Now
            </Button>
          </CardContent>
        </Card>
      ))}

      <Dialog open={open} onClose={handleClose}>
        <DialogTitle>Apply for {selectedJob?.title}</DialogTitle>
        <DialogContent>
          <DialogContentText>
            To apply for this job, please fill out the form below with your
            details and resume.
          </DialogContentText>
          <Box component="form" onSubmit={handleSubmit} sx={{ mt: 2 }}>
            <TextField
              autoFocus
              margin="dense"
              label="Full Name"
              type="text"
              fullWidth
              required
            />
            <TextField
              margin="dense"
              label="Email Address"
              type="email"
              fullWidth
              required
            />
            <TextField
              margin="dense"
              label="Resume"
              type="file"
              fullWidth
              InputLabelProps={{
                shrink: true,
              }}
              required
            />
            <DialogActions>
              <Button onClick={handleClose} color="secondary">
                Cancel
              </Button>
              <Button type="submit" color="primary">
                Submit
              </Button>
            </DialogActions>
          </Box>
        </DialogContent>
      </Dialog>
    </Box>
  );
};

export default JobPostings;
