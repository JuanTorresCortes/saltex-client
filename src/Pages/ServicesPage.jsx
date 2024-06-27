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
// import MenuBookIcon from "@mui/icons-material/MenuBook";
// import PrecisionManufacturingIcon from "@mui/icons-material/PrecisionManufacturing";
// import BusinessIcon from "@mui/icons-material/Business";
// import LocalMallIcon from "@mui/icons-material/LocalMall";
// import SchoolIcon from "@mui/icons-material/School";
// import LocalHospitalIcon from "@mui/icons-material/LocalHospital";
// import CorporateFareIcon from "@mui/icons-material/CorporateFare";
// import HotelIcon from "@mui/icons-material/Hotel";
// import BuildIcon from "@mui/icons-material/Build";
// import WbSunnyIcon from "@mui/icons-material/WbSunny";
// import ForestIcon from "@mui/icons-material/Forest";
// import DeleteIcon from "@mui/icons-material/Delete";
// import CalendarTodayIcon from "@mui/icons-material/CalendarToday";
// import BuildCircleIcon from "@mui/icons-material/BuildCircle";
// import ConstructionIcon from "@mui/icons-material/Construction";
// import cityLine from "../img/cityLine.png";
// import hotel from "../img/hotel.png";
// import { useTheme } from "@mui/material/styles";
// // import education from "../img/education.png";
// // import healthcare from "../img/healthcare.png";
// // import industrial from "../img/industrial.png";
// // import office from "../img/office.png";
// // import retail from "../img/retail.png";
// // import religious from "../img/religious.png";
// // import restoration from "../img/restoration.png";
// import solar from "../img/solar.png";
// import workerGrinding from "../img/worker-grinding.png";
// import welder from "../img/welder.png";
// import welderOnTop from "../img/welder-on-top.png";
// import welderManufacturing from "../img/welder-manufacturing.png";
// import welderInLift from "../img/welder-in-lift.png";
// import MyNavBar from "../components/MyNavBar";
// import ActionBanner from "../components/ActionBanner";
// import services from "../data/services";

// const ServicesPage = () => {
//   const theme = useTheme();

//   return (
//     <Box
//       sx={{
//         width: "100vw",
//         minHeight: "75vh",
//         backgroundColor: theme.palette.darkgray.main,
//         display: "flex",
//         flexDirection: "column",
//         alignItems: "center",
//         justifyContent: "center",
//         color: "white",
//         textAlign: "center",
//         padding: "20px",
//         position: "relative",
//         overflow: "hidden",
//         mt: 308,
//       }}
//     >
//       <MyNavBar sx={{ backgroundColor: "rgba(0, 0, 0, 0.7)", mb: 5 }} />
//       {
//         <Box
//           sx={{
//             display: "flex",
//             flexDirection: "column",
//             justifyContent: "flex-end",
//             alignItems: "center",
//             position: "relative",
//             overflow: "hidden",
//           }}
//         >
//           <Box
//             sx={{
//               display: "grid",
//               gridTemplateColumns: "repeat(3, 1fr)",
//               gridTemplateRows: "repeat(2, 1fr)",
//               gap: ".005rem",
//               width: "100%",
//               height: "75vh",
//             }}
//           >
//             <img
//               src={workerGrinding}
//               alt="Worker Grinding"
//               style={{
//                 gridColumn: "1 / 2",
//                 gridRow: "1 / 2",
//                 width: "100%",
//                 height: "100%",
//                 objectFit: "cover",
//               }}
//             />
//             <img
//               src={solar}
//               alt="Welder"
//               style={{
//                 gridColumn: "2 / 3",
//                 gridRow: "1 / 2",
//                 width: "100%",
//                 height: "100%",
//                 objectFit: "cover",
//               }}
//             />
//             <img
//               src={welderOnTop}
//               alt="Welder On Top"
//               style={{
//                 gridColumn: "3 / 4",
//                 gridRow: "1 / 2",
//                 width: "100%",
//                 height: "100%",
//                 objectFit: "cover",
//               }}
//             />
//             <img
//               src={welderInLift}
//               alt="Pilar"
//               style={{
//                 gridColumn: "1 / 2",
//                 gridRow: "2 / 3",
//                 width: "100%",
//                 height: "100%",
//                 objectFit: "cover",
//               }}
//             />
//             <img
//               src={welder}
//               alt="Solar"
//               style={{
//                 gridColumn: "2 / 4",
//                 gridRow: "2 / 3",
//                 width: "100%",
//                 height: "100%",
//                 objectFit: "cover",
//               }}
//             />
//           </Box>
//           <Container
//             sx={{
//               backgroundColor: theme.palette.background.default,
//               padding: "20px",
//               opacity: 0.8,
//               position: "absolute",
//               bottom: 0,
//               width: "100%",
//               textAlign: "center",
//               mb: 1,
//               color: "white",
//             }}
//           >
//             <Typography variant="h2" gutterBottom>
//               Our Services
//             </Typography>
//             <Typography variant="body1" paragraph>
//               At SalTex Steel Construction, we offer a comprehensive range of
//               construction services tailored to meet the unique needs of each
//               project. Our expert team ensures the highest standards of quality,
//               safety, and efficiency in every job we undertake. From initial
//               planning and design to final construction and project management,
//               we are committed to delivering exceptional results on time and
//               within budget.
//             </Typography>
//           </Container>
//         </Box>
//       }

//       <Container>
//         <Grid container spacing={4} sx={{ mt: 2, padding: "30px" }}>
//           {services.map((service) => (
//             <Grid item xs={12} sm={6} md={4} key={service.title}>
//               <Card
//                 sx={{ maxWidth: 345, backgroundColor: "rgba(0, 0, 0, 0.7)" }}
//               >
//                 <CardMedia
//                   component="img"
//                   alt={`${service.title} image`}
//                   height="140"
//                   image={service.image}
//                 />
//                 <CardContent>
//                   <Box
//                     sx={{ display: "flex", justifyContent: "center", mb: 2 }}
//                   >
//                     {service.icon}
//                   </Box>
//                   <Typography
//                     style={{ borderBottom: "1px solid rgb(255,0,0)" }}
//                     gutterBottom
//                     variant="h5"
//                     component="div"
//                     sx={{ color: "white" }}
//                   >
//                     {service.title}
//                   </Typography>
//                   <Typography
//                     variant="body2"
//                     color="text.secondary"
//                     sx={{ color: "white" }}
//                   >
//                     {service.description}
//                   </Typography>
//                 </CardContent>
//                 {/* <CardActions>
//                   <Button
//                     size="small"
//                     variant="outline"
//                     sx={{
//                       borderColor: theme.palette.darkred.main,
//                       color: theme.palette.darkred.main,
//                       "&:hover": {
//                         borderColor: theme.palette.darkred.main,
//                         backgroundColor: "rgba(255, 0, 0, 0.1)",
//                       },
//                     }}
//                   >
//                     Learn More
//                   </Button>
//                 </CardActions> */}
//               </Card>
//             </Grid>
//           ))}
//         </Grid>
//       </Container>
//       <ActionBanner />
//     </Box>
//   );
// };

// export default ServicesPage;

import React from "react";
import {
  Container,
  Typography,
  Box,
  Grid,
  Card,
  CardContent,
  CardMedia,
} from "@mui/material";
import { useTheme } from "@mui/material/styles";
import workerGrinding from "../img/worker-grinding.png";
import solar from "../img/solar.png";
import welderOnTop from "../img/welder-on-top.png";
import welderInLift from "../img/welder-in-lift.png";
import welder from "../img/welder.png";
import MyNavBar from "../components/MyNavBar";
import ActionBanner from "../components/ActionBanner";
import services from "../data/services";

// Import icons
import MenuBookIcon from "@mui/icons-material/MenuBook";
import PrecisionManufacturingIcon from "@mui/icons-material/PrecisionManufacturing";
import BusinessIcon from "@mui/icons-material/Business";
import LocalMallIcon from "@mui/icons-material/LocalMall";
import SchoolIcon from "@mui/icons-material/School";
import LocalHospitalIcon from "@mui/icons-material/LocalHospital";
import CorporateFareIcon from "@mui/icons-material/CorporateFare";
import HotelIcon from "@mui/icons-material/Hotel";
import BuildIcon from "@mui/icons-material/Build";
import WbSunnyIcon from "@mui/icons-material/WbSunny";
import ForestIcon from "@mui/icons-material/Forest";
import DeleteIcon from "@mui/icons-material/Delete";
import CalendarTodayIcon from "@mui/icons-material/CalendarToday";
import BuildCircleIcon from "@mui/icons-material/BuildCircle";
import ConstructionIcon from "@mui/icons-material/Construction";

const iconMapping = {
  MenuBookIcon: <MenuBookIcon sx={{ color: "white", fontSize: 40 }} />,
  PrecisionManufacturingIcon: (
    <PrecisionManufacturingIcon sx={{ color: "white", fontSize: 40 }} />
  ),
  BusinessIcon: <BusinessIcon sx={{ color: "white", fontSize: 40 }} />,
  LocalMallIcon: <LocalMallIcon sx={{ color: "white", fontSize: 40 }} />,
  SchoolIcon: <SchoolIcon sx={{ color: "white", fontSize: 40 }} />,
  LocalHospitalIcon: (
    <LocalHospitalIcon sx={{ color: "white", fontSize: 40 }} />
  ),
  CorporateFareIcon: (
    <CorporateFareIcon sx={{ color: "white", fontSize: 40 }} />
  ),
  HotelIcon: <HotelIcon sx={{ color: "white", fontSize: 40 }} />,
  BuildIcon: <BuildIcon sx={{ color: "white", fontSize: 40 }} />,
  WbSunnyIcon: <WbSunnyIcon sx={{ color: "white", fontSize: 40 }} />,
  ForestIcon: <ForestIcon sx={{ color: "white", fontSize: 40 }} />,
  DeleteIcon: <DeleteIcon sx={{ color: "white", fontSize: 40 }} />,
  CalendarTodayIcon: (
    <CalendarTodayIcon sx={{ color: "white", fontSize: 40 }} />
  ),
  BuildCircleIcon: <BuildCircleIcon sx={{ color: "white", fontSize: 40 }} />,
  ConstructionIcon: <ConstructionIcon sx={{ color: "white", fontSize: 40 }} />,
};

const ServicesPage = () => {
  const theme = useTheme();

  return (
    <Box
      sx={{
        width: "100vw",
        minHeight: "75vh",
        backgroundColor: theme.palette.darkgray.main,
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        color: "white",
        textAlign: "center",
        padding: "20px",
        position: "relative",
        overflow: "hidden",
        mt: 285,
      }}
    >
      <MyNavBar sx={{ backgroundColor: "rgba(0, 0, 0, 0.7)", mb: 5 }} />
      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          justifyContent: "flex-end",
          alignItems: "center",
          position: "relative",
          overflow: "hidden",
        }}
      >
        <Box
          sx={{
            display: "grid",
            gridTemplateColumns: "repeat(3, 1fr)",
            gridTemplateRows: "repeat(2, 1fr)",
            gap: ".005rem",
            width: "100%",
            height: "75vh",
          }}
        >
          <img
            src={workerGrinding}
            alt="Worker Grinding"
            style={{
              gridColumn: "1 / 2",
              gridRow: "1 / 2",
              width: "100%",
              height: "100%",
              objectFit: "cover",
            }}
          />
          <img
            src={solar}
            alt="Solar"
            style={{
              gridColumn: "2 / 3",
              gridRow: "1 / 2",
              width: "100%",
              height: "100%",
              objectFit: "cover",
            }}
          />
          <img
            src={welderOnTop}
            alt="Welder On Top"
            style={{
              gridColumn: "3 / 4",
              gridRow: "1 / 2",
              width: "100%",
              height: "100%",
              objectFit: "cover",
            }}
          />
          <img
            src={welderInLift}
            alt="Welder In Lift"
            style={{
              gridColumn: "1 / 2",
              gridRow: "2 / 3",
              width: "100%",
              height: "100%",
              objectFit: "cover",
            }}
          />
          <img
            src={welder}
            alt="Welder"
            style={{
              gridColumn: "2 / 4",
              gridRow: "2 / 3",
              width: "100%",
              height: "100%",
              objectFit: "cover",
            }}
          />
        </Box>
        <Container
          sx={{
            backgroundColor: theme.palette.background.default,
            padding: "20px",
            opacity: 0.8,
            position: "absolute",
            bottom: 0,
            width: "100%",
            textAlign: "center",
            mb: 1,
            color: "white",
          }}
        >
          <Typography variant="h2" gutterBottom>
            Our Services
          </Typography>
          <Typography variant="body1" paragraph>
            At SalTex Steel Construction, we offer a comprehensive range of
            construction services tailored to meet the unique needs of each
            project. Our expert team ensures the highest standards of quality,
            safety, and efficiency in every job we undertake. From initial
            planning and design to final construction and project management, we
            are committed to delivering exceptional results on time and within
            budget.
          </Typography>
        </Container>
      </Box>

      <Container>
        <Grid container spacing={4} sx={{ mt: 2, padding: "30px" }}>
          {services.map((service) => (
            <Grid item xs={12} sm={6} md={4} key={service.title}>
              <Card
                sx={{ maxWidth: 345, backgroundColor: "rgba(0, 0, 0, 0.7)" }}
              >
                <CardMedia
                  component="img"
                  alt={`${service.title} image`}
                  height="140"
                  image={service.image}
                />
                <CardContent>
                  <Box
                    sx={{ display: "flex", justifyContent: "center", mb: 2 }}
                  >
                    {iconMapping[service.icon]}
                  </Box>
                  <Typography
                    style={{ borderBottom: "1px solid rgb(255,0,0)" }}
                    gutterBottom
                    variant="h5"
                    component="div"
                    sx={{ color: "white" }}
                  >
                    {service.title}
                  </Typography>
                  <Typography
                    variant="body2"
                    color="text.secondary"
                    sx={{ color: "white" }}
                  >
                    {service.description}
                  </Typography>
                </CardContent>
              </Card>
            </Grid>
          ))}
        </Grid>
        <Box>
          <ActionBanner />
        </Box>
      </Container>
    </Box>
  );
};

export default ServicesPage;
