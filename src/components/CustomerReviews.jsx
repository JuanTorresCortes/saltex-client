import React, { useContext } from "react";
import { AppContext } from "../context/AppContext";
import { Paper, Typography, Box, Button, Rating, Avatar } from "@mui/material";
import { useTheme } from "@mui/material/styles";
import { useNavigate } from "react-router-dom";

// Function to handle button click
const handleClickForReviews = () => {
  window.location.href = "/portfolio";
};

const CustomerReviews = () => {
  const { customerReviews } = useContext(AppContext);
  const theme = useTheme();

  return (
    <Box
      sx={{
        backgroundColor: "black",
        padding: 4,
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        //borderTop: `.1px solid ${theme.palette.darkred.main}`,
        //borderBottom: `.1px solid ${theme.palette.darkred.main}`,
      }}
    >
      <Box
        sx={{
          width: "100%",
          maxWidth: "1000px",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
        }}
      >
        <Box
          sx={{
            textAlign: "center",
            paddingBottom: 4,
          }}
        >
          <Typography variant="h4" sx={{ color: "white", fontWeight: "bold" }}>
            WHAT
            <br />
            OUR CLIENTS SAY
          </Typography>
          <Button
            variant="contained"
            sx={{
              backgroundColor: "black",
              color: "white",
              border: `.1px solid ${theme.palette.darkred.main}`,
              //padding: theme.spacing(1.5, 4),
              fontWeight: 600,
              "&:hover": {
                backgroundColor: theme.palette.darkred.main,
                color: "black",
              },
              mt: 2,
              mb: 2,
            }}
            onClick={() => handleClickForReviews()}
          >
            DISCOVER MORE
          </Button>
        </Box>

        <Box
          sx={{
            display: "flex",
            justifyContent: "space-evenly",
            flexDirection: { xs: "column", sm: "column", md: "row" },
            gap: 2,
            width: "100%",
          }}
        >
          {customerReviews.map((customerReview, i) => (
            <Paper
              key={i}
              elevation={3}
              sx={{
                backgroundColor: "#2b2b2b",
                color: "white",
                padding: 3,
                borderRadius: 2,
                flex: 1,
                border: "1px solid white",
                minHeight: "200px",
              }}
            >
              {/* Avatar and Name Section */}
              <Box sx={{ display: "flex", alignItems: "center", mb: 2 }}>
                {/* Circular Image */}
                <Avatar
                  src={customerReview.image}
                  alt={customerReview.client}
                  sx={{
                    width: 60,
                    height: 60,
                    mr: 2, // Add margin to the right
                    border: "2px solid white", // Add a border for better visibility
                  }}
                />
                <Box>
                  <Typography variant="body2" sx={{ fontWeight: "bold" }}>
                    {customerReview.client}
                  </Typography>
                  {customerReview.company && (
                    <Typography variant="body2">
                      {customerReview.company}
                    </Typography>
                  )}
                </Box>
              </Box>

              {/* Rating */}
              <Rating
                name={`rating-${i}`}
                value={customerReview.rating}
                readOnly
                precision={0.5}
                sx={{ mt: 2 }}
              />

              {/* Review Text */}
              <Typography
                variant="body1"
                sx={{
                  maxHeight: "none",
                  overflowY: "visible",
                  mt: 2,
                }}
              >
                {customerReview.text}
              </Typography>
            </Paper>
          ))}
        </Box>
      </Box>
    </Box>
  );
};

export default CustomerReviews;
