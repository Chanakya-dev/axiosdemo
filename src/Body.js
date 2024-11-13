import React, { useEffect, useState } from "react";
import { Box, Typography } from "@mui/material";
import Paper from "@mui/material/Paper";
import Rating from "@mui/material/Rating";
import axios from "axios";

function Body() {
  const [movies, setMovies] = useState([]); 

  useEffect(() => {
    const fetchPopularMovies = async () => {
      try {
        const response = await axios.get(
          `https://api.themoviedb.org/3/discover/movie?api_key=${process.env.REACT_APP_TMDB_API_KEY}&language=en-US&page=2&with_genres=80`
        );
        setMovies(response.data.results); 
      } catch (error) {
        console.error("Error fetching popular movies:", error);
      }
    };

    fetchPopularMovies(); 
  }, []); 

  return (
    <Box sx={{ flex: 1, p: 2, position: "relative" }}>
     

      
      <Box
        sx={{
          position: "relative",
          top: "50px",
          display: "flex",
          flexWrap: "wrap",
          "& > :not(style)": {
            m: 1,
            width: 250,
            height: 430,
          },
        }}
      >
        {movies.map((movie, index) => (
          <Paper
            key={index}
            elevation={10}
            sx={{
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              padding: 2,
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
              style={{position:"relative",top:"10px"}}
              readOnly
            />
          </Paper>
        ))}
      </Box>
    </Box>
  );
}

export default Body;
