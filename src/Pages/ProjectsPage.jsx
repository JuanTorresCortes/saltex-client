// import React from "react";
// import {
//   Container,
//   Typography,
//   Box,
//   Grid,
//   Card,
//   CardActions,
//   CardContent,
//   CardMedia,
//   Button,
// } from "@mui/material";
// import cityLine from "../img/cityLine.png";
// import hotel from "../img/hotel.png";

// const ProjectsPage = () => {
//   return (
//     <Box
//       sx={{
//         backgroundImage: `url(${cityLine})`,
//         backgroundPosition: "center center",
//         backgroundRepeat: "no-repeat",
//         backgroundSize: "cover",
//         minHeight: "100vh",
//         width: "100vw",
//         display: "flex",
//         flexDirection: "column",
//         alignItems: "center",
//         color: "white",
//         textAlign: "center",
//         pt: 55,
//       }}
//     >
//       <Container>
//         <Box sx={{ backgroundColor: "black" }}>
//           <Typography variant="h2" gutterBottom>
//             Our Projects
//           </Typography>
//           <Typography variant="body1" paragraph>
//             At SalTex Steel Construction, we take immense pride in the diverse
//             range of projects we have successfully completed. Each project is a
//             testament to our commitment to quality, innovation, and excellence.
//             From commercial buildings to residential complexes, our portfolio
//             showcases our ability to deliver exceptional results across various
//             sectors. Here are some highlights of our most notable projects.
//           </Typography>
//         </Box>

//         <Grid container spacing={4}>
//           {/* Example project cards */}
//           <Grid item xs={12} sm={6} md={4}>
//             <Card sx={{ maxWidth: 345, backgroundColor: "rgba(0, 0, 0, 0.7)" }}>
//               <CardMedia
//                 component="img"
//                 alt="green iguana"
//                 height="140"
//                 image={hotel}
//               />
//               <CardContent>
//                 <Typography
//                   style={{ borderBottom: "1px solid rgb(255,0,0)" }}
//                   gutterBottom
//                   variant="h5"
//                   component="div"
//                   sx={{ color: "white" }}
//                 >
//                   Lizard
//                 </Typography>
//                 <Typography
//                   variant="body2"
//                   color="text.secondary"
//                   sx={{ color: "white" }}
//                 >
//                   Lizards are a widespread group of squamate reptiles, with over
//                   6,000 species, ranging across all continents except Antarctica
//                 </Typography>
//               </CardContent>
//               <CardActions>
//                 <Button size="small">Learn More</Button>
//               </CardActions>
//             </Card>
//           </Grid>
//           <Grid item xs={12} sm={6} md={4}>
//             <Card sx={{ maxWidth: 345, backgroundColor: "rgba(0, 0, 0, 0.7)" }}>
//               <CardMedia
//                 component="img"
//                 alt="green iguana"
//                 height="140"
//                 image={hotel}
//               />
//               <CardContent>
//                 <Typography
//                   style={{ borderBottom: "1px solid rgb(255,0,0)" }}
//                   gutterBottom
//                   variant="h5"
//                   component="div"
//                   sx={{ color: "white" }}
//                 >
//                   Lizard
//                 </Typography>
//                 <Typography
//                   variant="body2"
//                   color="text.secondary"
//                   sx={{ color: "white" }}
//                 >
//                   Lizards are a widespread group of squamate reptiles, with over
//                   6,000 species, ranging across all continents except Antarctica
//                 </Typography>
//               </CardContent>
//               <CardActions>
//                 <Button size="small">Learn More</Button>
//               </CardActions>
//             </Card>
//           </Grid>
//           <Grid item xs={12} sm={6} md={4}>
//             <Card sx={{ maxWidth: 345, backgroundColor: "rgba(0, 0, 0, 0.7)" }}>
//               <CardMedia
//                 component="img"
//                 alt="green iguana"
//                 height="140"
//                 image={hotel}
//               />
//               <CardContent>
//                 <Typography
//                   style={{ borderBottom: "1px solid rgb(255,0,0)" }}
//                   gutterBottom
//                   variant="h5"
//                   component="div"
//                   sx={{ color: "white" }}
//                 >
//                   Lizard
//                 </Typography>
//                 <Typography
//                   variant="body2"
//                   color="text.secondary"
//                   sx={{ color: "white" }}
//                 >
//                   Lizards are a widespread group of squamate reptiles, with over
//                   6,000 species, ranging across all continents except Antarctica
//                 </Typography>
//               </CardContent>
//               <CardActions>
//                 <Button size="small">Learn More</Button>
//               </CardActions>
//             </Card>
//           </Grid>
//           <Grid item xs={12} sm={6} md={4}>
//             <Card sx={{ maxWidth: 345, backgroundColor: "rgba(0, 0, 0, 0.7)" }}>
//               <CardMedia
//                 component="img"
//                 alt="green iguana"
//                 height="140"
//                 image={hotel}
//               />
//               <CardContent>
//                 <Typography
//                   style={{ borderBottom: "1px solid rgb(255,0,0)" }}
//                   gutterBottom
//                   variant="h5"
//                   component="div"
//                   sx={{ color: "white" }}
//                 >
//                   Lizard
//                 </Typography>
//                 <Typography
//                   variant="body2"
//                   color="text.secondary"
//                   sx={{ color: "white" }}
//                 >
//                   Lizards are a widespread group of squamate reptiles, with over
//                   6,000 species, ranging across all continents except Antarctica
//                 </Typography>
//               </CardContent>
//               <CardActions>
//                 <Button size="small">Learn More</Button>
//               </CardActions>
//             </Card>
//           </Grid>
//           <Grid item xs={12} sm={6} md={4}>
//             <Card sx={{ maxWidth: 345, backgroundColor: "rgba(0, 0, 0, 0.7)" }}>
//               <CardMedia
//                 component="img"
//                 alt="green iguana"
//                 height="140"
//                 image={hotel}
//               />
//               <CardContent>
//                 <Typography
//                   style={{ borderBottom: "1px solid rgb(255,0,0)" }}
//                   gutterBottom
//                   variant="h5"
//                   component="div"
//                   sx={{ color: "white" }}
//                 >
//                   Lizard
//                 </Typography>
//                 <Typography
//                   variant="body2"
//                   color="text.secondary"
//                   sx={{ color: "white" }}
//                 >
//                   Lizards are a widespread group of squamate reptiles, with over
//                   6,000 species, ranging across all continents except Antarctica
//                 </Typography>
//               </CardContent>
//               <CardActions>
//                 <Button size="small">Learn More</Button>
//               </CardActions>
//             </Card>
//           </Grid>
//           <Grid item xs={12} sm={6} md={4}>
//             <Card sx={{ maxWidth: 345, backgroundColor: "rgba(0, 0, 0, 0.7)" }}>
//               <CardMedia
//                 component="img"
//                 alt="green iguana"
//                 height="140"
//                 image={hotel}
//               />
//               <CardContent>
//                 <Typography
//                   style={{ borderBottom: "1px solid rgb(255,0,0)" }}
//                   gutterBottom
//                   variant="h5"
//                   component="div"
//                   sx={{ color: "white" }}
//                 >
//                   Lizard
//                 </Typography>
//                 <Typography
//                   variant="body2"
//                   color="text.secondary"
//                   sx={{ color: "white" }}
//                 >
//                   Lizards are a widespread group of squamate reptiles, with over
//                   6,000 species, ranging across all continents except Antarctica
//                 </Typography>
//               </CardContent>
//               <CardActions>
//                 <Button size="small">Learn More</Button>
//               </CardActions>
//             </Card>
//           </Grid>
//           <Grid item xs={12} sm={6} md={4}>
//             <Card sx={{ maxWidth: 345, backgroundColor: "rgba(0, 0, 0, 0.7)" }}>
//               <CardMedia
//                 component="img"
//                 alt="green iguana"
//                 height="140"
//                 image={hotel}
//               />
//               <CardContent>
//                 <Typography
//                   style={{ borderBottom: "1px solid rgb(255,0,0)" }}
//                   gutterBottom
//                   variant="h5"
//                   component="div"
//                   sx={{ color: "white" }}
//                 >
//                   Lizard
//                 </Typography>
//                 <Typography
//                   variant="body2"
//                   color="text.secondary"
//                   sx={{ color: "white" }}
//                 >
//                   Lizards are a widespread group of squamate reptiles, with over
//                   6,000 species, ranging across all continents except Antarctica
//                 </Typography>
//               </CardContent>
//               <CardActions>
//                 <Button size="small">Learn More</Button>
//               </CardActions>
//             </Card>
//           </Grid>
//           <Grid item xs={12} sm={6} md={4}>
//             <Card sx={{ maxWidth: 345, backgroundColor: "rgba(0, 0, 0, 0.7)" }}>
//               <CardMedia
//                 component="img"
//                 alt="green iguana"
//                 height="140"
//                 image={hotel}
//               />
//               <CardContent>
//                 <Typography
//                   style={{ borderBottom: "1px solid rgb(255,0,0)" }}
//                   gutterBottom
//                   variant="h5"
//                   component="div"
//                   sx={{
//                     color: "white",
//                   }}
//                 >
//                   Lizard
//                 </Typography>
//                 <Typography
//                   variant="body2"
//                   color="text.secondary"
//                   sx={{ color: "white" }}
//                 >
//                   Lizards are a widespread group of squamate reptiles, with over
//                   6,000 species, ranging across all continents except Antarctica
//                 </Typography>
//               </CardContent>
//               <CardActions>
//                 <Button size="small">Learn More</Button>
//               </CardActions>
//             </Card>
//           </Grid>
//           <Grid item xs={12} sm={6} md={4}>
//             <Card sx={{ maxWidth: 345, backgroundColor: "rgba(0, 0, 0, 0.7)" }}>
//               <CardMedia
//                 component="img"
//                 alt="green iguana"
//                 height="140"
//                 image={hotel}
//               />
//               <CardContent>
//                 <Typography
//                   style={{ borderBottom: "1px solid rgb(255,0,0)" }}
//                   gutterBottom
//                   variant="h5"
//                   component="div"
//                   sx={{ color: "white" }}
//                 >
//                   Lizard
//                 </Typography>
//                 <Typography
//                   variant="body2"
//                   color="text.secondary"
//                   sx={{ color: "white" }}
//                 >
//                   Lizards are a widespread group of squamate reptiles, with over
//                   6,000 species, ranging across all continents except Antarctica
//                 </Typography>
//               </CardContent>
//               <CardActions>
//                 <Button size="small">Learn More</Button>
//               </CardActions>
//             </Card>
//           </Grid>
//         </Grid>
//       </Container>
//     </Box>
//   );
// };

// export default ProjectsPage;

import React from "react";
import {
  Container,
  Typography,
  Box,
  Grid,
  Card,
  CardActions,
  CardContent,
  CardMedia,
  Button,
} from "@mui/material";
import cityLine from "../img/cityLine.png";
import hotel from "../img/hotel.png";

const projects = [
  {
    title: "Project One",
    description: "Description for Project One.",
    image: hotel,
  },
  {
    title: "Project Two",
    description: "Description for Project Two.",
    image: hotel,
  },
  {
    title: "Project Three",
    description: "Description for Project Three.",
    image: hotel,
  },
  {
    title: "Project Four",
    description: "Description for Project Four.",
    image: hotel,
  },
  {
    title: "Project Five",
    description: "Description for Project Five.",
    image: hotel,
  },
  {
    title: "Project Six",
    description: "Description for Project Six.",
    image: hotel,
  },
];

const ProjectsPage = () => {
  return (
    <Box
      sx={{
        backgroundImage: `url(${cityLine})`,
        backgroundPosition: "center center",
        backgroundRepeat: "no-repeat",
        backgroundSize: "cover",
        minHeight: "100vh",
        width: "100vw",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        color: "white",
        textAlign: "center",
        pt: 22,
      }}
    >
      <Container>
        <Box
          sx={{ backgroundColor: "rgba(0, 0, 0, 0.7)", p: 3, borderRadius: 2 }}
        >
          <Typography variant="h2" gutterBottom>
            Our Projects
          </Typography>
          <Typography variant="body1" paragraph>
            At SalTex Steel Construction, we take immense pride in the diverse
            range of projects we have successfully completed. Each project is a
            testament to our commitment to quality, innovation, and excellence.
            From commercial buildings to residential complexes, our portfolio
            showcases our ability to deliver exceptional results across various
            sectors. Here are some highlights of our most notable projects.
          </Typography>
        </Box>

        <Grid container spacing={4} sx={{ mt: 2 }}>
          {projects.map((project) => (
            <Grid item xs={12} sm={6} md={4} key={project.title}>
              <Card
                sx={{ maxWidth: 345, backgroundColor: "rgba(0, 0, 0, 0.7)" }}
              >
                <CardMedia
                  component="img"
                  alt={`${project.title} image`}
                  height="140"
                  image={project.image}
                />
                <CardContent>
                  <Typography
                    style={{ borderBottom: "1px solid rgb(255,0,0)" }}
                    gutterBottom
                    variant="h5"
                    component="div"
                    sx={{ color: "white" }}
                  >
                    {project.title}
                  </Typography>
                  <Typography
                    variant="body2"
                    color="text.secondary"
                    sx={{ color: "white" }}
                  >
                    {project.description}
                  </Typography>
                </CardContent>
                <CardActions>
                  <Button size="small">Learn More</Button>
                </CardActions>
              </Card>
            </Grid>
          ))}
        </Grid>
      </Container>
    </Box>
  );
};

export default ProjectsPage;
