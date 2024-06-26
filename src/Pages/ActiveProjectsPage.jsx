// import React, { useEffect, useState } from "react";
// import {
//   Box,
//   Typography,
//   Card,
//   CardContent,
//   CircularProgress,
//   Grid,
// } from "@mui/material";
// import AdminNavBar from "../components/AdminNavBar";
// import { getActiveProjects } from "../API/api"; // Adjust the path to your API file

// const ActiveProjectsPage = () => {
//   const [projects, setProjects] = useState([]);
//   const [loading, setLoading] = useState(true);

//   useEffect(() => {
//     const fetchProjects = async () => {
//       try {
//         const projectsData = await getActiveProjects(); // Fetch active projects from the API
//         setProjects(projectsData);
//       } catch (error) {
//         console.error("Failed to fetch projects:", error);
//       } finally {
//         setLoading(false);
//       }
//     };

//     fetchProjects();
//   }, []);

//   return (
//     <Box
//       sx={{ display: "flex", flexDirection: "column", alignItems: "center" }}
//     >
//       <AdminNavBar />
//       <Box sx={{ width: "90%", mt: 4 }}>
//         <Typography variant="h4" gutterBottom>
//           Active Projects
//         </Typography>
//         {loading ? (
//           <CircularProgress />
//         ) : (
//           <Grid container spacing={3}>
//             {projects.map((project) => (
//               <Grid item xs={12} md={6} lg={4} key={project.id}>
//                 <Card sx={{ marginBottom: "20px" }}>
//                   <CardContent>
//                     <Typography variant="h6">{project.name}</Typography>
//                     <Typography variant="body1">
//                       {project.description}
//                     </Typography>
//                     <Typography variant="body2">
//                       Address: {project.address}
//                     </Typography>
//                     <Typography variant="body2">
//                       Status: {project.status}
//                     </Typography>
//                     <Typography variant="body2">
//                       Stage: {project.stage}
//                     </Typography>
//                     <Typography variant="body2">
//                       Start Date: {project.startDate}
//                     </Typography>
//                     <Typography variant="body2">
//                       Estimated Completion Date:{" "}
//                       {project.estimateCompletionDate}
//                     </Typography>
//                     <Typography variant="body2">
//                       End Date: {project.endDate}
//                     </Typography>
//                     <Typography variant="body2">
//                       Progress: {project.percent}%
//                     </Typography>
//                     <Typography variant="body2">Tasks:</Typography>
//                     <ul>
//                       {project.tasks.map((task) => (
//                         <li key={task.id}>
//                           <Typography variant="body2">
//                             {task.owner} - {task.name} - {task.status}
//                           </Typography>
//                         </li>
//                       ))}
//                     </ul>
//                   </CardContent>
//                 </Card>
//               </Grid>
//             ))}
//           </Grid>
//         )}
//       </Box>
//     </Box>
//   );
// };

// export default ActiveProjectsPage;

import React, { useEffect, useState } from "react";
import {
  Box,
  Typography,
  Card,
  CardContent,
  CircularProgress,
  Grid,
} from "@mui/material";
import AdminNavBar from "../components/AdminNavBar";
import { getActiveProjects } from "../API/api"; // Adjust the path to your API file

const ActiveProjectsPage = () => {
  const [projects, setProjects] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchProjects = async () => {
      try {
        const projectsData = await getActiveProjects(); // Fetch active projects from the API
        setProjects(projectsData);
      } catch (error) {
        console.error("Failed to fetch projects:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchProjects();
  }, []);

  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        mt: 62,
      }}
    >
      <AdminNavBar />
      <Box sx={{ width: "90%", mt: 4 }}>
        <Typography variant="h4" gutterBottom>
          Active Projects
        </Typography>
        {loading ? (
          <CircularProgress />
        ) : (
          <Grid container spacing={3}>
            {projects.map((project) => (
              <Grid item xs={12} md={6} lg={4} key={project.id}>
                <Card sx={{ marginBottom: "20px" }}>
                  <CardContent>
                    <Typography variant="h6">{project.name}</Typography>
                    <Typography variant="body1">
                      {project.description}
                    </Typography>
                    <Typography variant="body2">
                      Address: {project.address}
                    </Typography>
                    <Typography variant="body2">
                      Status: {project.status}
                    </Typography>
                    <Typography variant="body2">
                      Stage: {project.stage}
                    </Typography>
                    <Typography variant="body2">
                      Start Date: {project.startDate}
                    </Typography>
                    <Typography variant="body2">
                      Estimated Completion Date:{" "}
                      {project.estimateCompletionDate}
                    </Typography>
                    <Typography variant="body2">
                      End Date: {project.endDate}
                    </Typography>
                    <Typography variant="body2">
                      Progress: {project.percent}%
                    </Typography>
                    <Typography variant="body2">Tasks:</Typography>
                    <Grid container spacing={1}>
                      {project.tasks.map((task) => (
                        <Grid item xs={12} key={task.id}>
                          <Box
                            sx={{
                              border: "1px solid #ddd",
                              padding: 2,
                              borderRadius: 1,
                            }}
                          >
                            <Typography variant="body2">
                              <strong>{task.owner}:</strong> {task.name} -{" "}
                              {task.status}
                            </Typography>
                            <Typography variant="body2">
                              Description: {task.description}
                            </Typography>
                            <Typography variant="body2">
                              Start Date: {task.startDate}
                            </Typography>
                            <Typography variant="body2">
                              End Date: {task.endDate}
                            </Typography>
                          </Box>
                        </Grid>
                      ))}
                    </Grid>
                  </CardContent>
                </Card>
              </Grid>
            ))}
          </Grid>
        )}
      </Box>
    </Box>
  );
};

export default ActiveProjectsPage;
