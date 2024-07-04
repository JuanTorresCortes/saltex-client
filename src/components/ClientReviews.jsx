import React from "react";
import { Paper, Typography, Box, Button, Rating } from "@mui/material";
import { useTheme } from "@mui/material/styles";
import { useNavigate } from "react-router-dom";

const reviews = [
  {
    client: "Mark Zuckerberg",
    company: "Facebook",
    text: `"The quality of work and communication throughout the project was excellent. I would highly recommend SalTex for any construction and engineering services."`,
    author: "Google",
    rating: 5,
  },
  {
    client: "Elon Musk",
    company: "SpaceX",
    text: `"The construction work was top-notch and completed on time with great attention to detail. I Highly recommend SalTex Steel Construction for any commercial construction project."`,
    author: "Yelp",
    rating: 4.5,
  },
  {
    client: "Jeff Bezos",
    company: "Amazon",
    text: `"SalTex Steel Construction has been a great partner for us. They have provided excellent service and have been very responsive to our needs. I highly recommend them for any construction project."`,
    author: "LinkedIn",
    rating: 4,
  },
];

const ClientReviews = () => {
  const theme = useTheme();
  const navigate = useNavigate();

  return (
    <Box
      sx={{
        backgroundColor: "black",
        padding: 4,
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
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
        <Box sx={{ textAlign: "center", paddingBottom: 4 }}>
          <Typography variant="h4" sx={{ color: "white", fontWeight: "bold" }}>
            WHAT
            <br />
            OUR CLIENTS SAY
          </Typography>
          <Button
            variant="outlined"
            sx={{
              mb: 2,
              mt: 2,
              borderColor: theme.palette.darkred.main,
              color: theme.palette.darkred.main,
              backgroundColor: "black",
              "&:hover": {
                borderColor: theme.palette.darkred.main,
                backgroundColor: "#141424",
              },
            }}
            onClick={() => navigate("/projects")}
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
          {reviews.map((review, i) => (
            <Paper
              key={i}
              elevation={3}
              sx={{
                backgroundColor: "black",
                color: "white",
                padding: 3,
                borderRadius: 2,
                flex: 1,
                border: "1px solid white",
                minHeight: "200px",
              }}
            >
              <Rating
                name={`rating-${i}`}
                value={review.rating}
                readOnly
                precision={0.5}
                sx={{ mt: 2 }}
              />
              <Typography
                variant="body1"
                sx={{
                  maxHeight: "none",
                  overflowY: "visible",
                }}
              >
                {review.text}
              </Typography>
              <Typography variant="body2" align="right" sx={{ mt: 2 }}>
                {review.author}
              </Typography>
              <Typography variant="body2" align="right" sx={{ mt: 2 }}>
                {review.client}, {review.company}
              </Typography>
            </Paper>
          ))}
        </Box>
      </Box>
    </Box>
  );
};

export default ClientReviews;
