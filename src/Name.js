import React, { useEffect, useState } from "react";
import { Box, Typography } from "@mui/material";
import Stack from "@mui/material/Stack";
import Button from "@mui/material/Button";
import Paper from "@mui/material/Paper";
import Rating from "@mui/material/Rating";
import axios from "axios";

function Body() {
  const [movie, setMovie] = useState(null); // Holds a specific movie
  const [movieName, setMovieName] = useState("RRR"); // Example: dynamic movie name

  useEffect(() => {
    const fetchMovieByName = async () => {
      try {
        const response = await axios.get(
          `https://api.themoviedb.org/3/search/movie?api_key=${process.env.REACT_APP_TMDB_API_KEY}&query=${movieName}&language=en-US`
        );
        if (response.data.results.length > 0) {
          setMovie(response.data.results[0]); // Set movie based on search
        } else {
          console.log("Movie not found!");
        }
      } catch (error) {
        console.error("Error fetching movie:", error);
      }
    };

    fetchMovieByName(); // Call function to fetch the movie based on the name
  }, [movieName]); // Dependency: re-fetch when `movieName` changes

  return (
    <Box sx={{ flex: 1, p: 2, position: "relative" }}>
      <Typography
        variant="h4"
        sx={{ position: "relative", marginLeft: "470px" }}
        gutterBottom
      >
        Movie Details
      </Typography>

      {/* Movie Button */}
      <Stack
        spacing={1}
        direction="row"
        sx={{ marginLeft: "380px", marginBottom: "30px" }}
      >
        <Button variant="outlined" onClick={() => setMovieName("RRR")}>RRR</Button>
        <Button variant="outlined" onClick={() => setMovieName("SALAAR")}>SALAR</Button>
        <Button variant="outlined" onClick={() => setMovieName("PUSHPA 1")}>PUSHPA</Button>
      </Stack>

      {/* Movie details */}
      {movie && (
        <Paper
          elevation={10}
          sx={{
            width: 250,
            height: 430,
            margin: "20px auto",
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            padding: 2,
            marginLeft: "20px",
          }}
        >
          <img
            src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`}
            alt={movie.title}
            style={{ width: "100%", height: "500px", objectFit: "cover" }}
          />
          <Typography variant="h6" sx={{ position: "relative", top: "20px" }}>
            {movie.title}
          </Typography>
          <Rating
            name="tmdb-rating"
            value={movie.vote_average / 2}
            precision={0.5}
            readOnly
          />
        </Paper>
      )}
    </Box>
  );
}

export default Body;
