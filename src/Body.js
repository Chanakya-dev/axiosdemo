import React, { useEffect, useState } from "react";
import { Box, Typography } from "@mui/material";
import Stack from "@mui/material/Stack";
import Button from "@mui/material/Button";
import Paper from "@mui/material/Paper";
import Rating from "@mui/material/Rating";
import axios from "axios";

function Body() {
  const [popularMovie, setPopularMovie] = useState(null);

  useEffect(() => {
    const fetchPopularMovie = async () => {
      try {
        const response = await axios.get(
          `https://api.themoviedb.org/3/movie/popular?api_key=${process.env.REACT_APP_TMDB_API_KEY}&language=en-US&page=1`
        );
        setPopularMovie(response.data.results[0]);
      } catch (error) {
        console.error("Error fetching movie:", error);
      }
    };

    fetchPopularMovie();
  }, []);

  return (
    <Box sx={{ flex: 1, p: 2, position: "relative" }}>
      <Typography
        variant="h4"
        sx={{ position: "relative", marginLeft: "470px" }}
        gutterBottom
      >
        Milestones Of Tollywood
      </Typography>

      <Stack
        spacing={1}
        direction="row"
        sx={{ marginLeft: "380px", marginBottom: "30px" }}
      >
        <Button variant="outlined">ACTION</Button>
        <Button variant="outlined">DRAMA</Button>
        <Button variant="outlined">ROMANCE</Button>
        <Button variant="outlined">HORROR</Button>
        <Button variant="outlined">SUSPENSE THRILLER</Button>
      </Stack>

      {/* TMDB Popular Movie */}
      {popularMovie && (
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
            src={`https://image.tmdb.org/t/p/w500${popularMovie.poster_path}`}
            alt={popularMovie.title}
            style={{ width: "100%", height: "500px", objectFit: "cover" }}
          />
          <Typography variant="h6" sx={{ position: "relative", top: "20px" }}>
            {popularMovie.title}
          </Typography>
          <Rating
            name="tmdb-rating"
            value={popularMovie.vote_average / 2}
            precision={0.5}
            readOnly
          />
        </Paper>
      )}

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
        <Paper
          elevation={10}
          sx={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            padding: 2,
          }}
        >
          <img
            src="rrr.jpg"
            alt="RRR"
            style={{ width: "100%", height: "500px", objectFit: "cover" }}
          />
          <Typography variant="h6" sx={{ position: "relative", top: "20px" }}>
            RRR
          </Typography>
          <Rating name="read-only" value={5} readOnly />
        </Paper>

        <Paper
          elevation={10}
          sx={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            padding: 2,
          }}
        >
          <img
            src="salar.jpg"
            alt="salar"
            style={{ width: "100%", height: "500px", objectFit: "cover" }}
          />
          <Typography variant="h6" sx={{ position: "relative", top: "20px" }}>
            SALAR
          </Typography>
          <Rating name="read-only" value={5} readOnly />
        </Paper>

        <Paper
          elevation={10}
          sx={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            padding: 2,
          }}
        >
          <img
            src="kalki.jpg"
            alt="RRR"
            style={{ width: "100%", height: "500px", objectFit: "cover" }}
          />
          <Typography variant="h6" sx={{ position: "relative", top: "20px" }}>
            KALKI 2898 AD
          </Typography>
          <Rating name="read-only" value={4} readOnly />
        </Paper>

        <Paper
          elevation={10}
          sx={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            padding: 2,
          }}
        >
          <img
            src="pushpa.jpg"
            alt="pushpa"
            style={{ width: "100%", height: "500px", objectFit: "cover" }}
          />
          <Typography variant="h6" sx={{ position: "relative", top: "20px" }}>
            PUSHPA: THE RISE
          </Typography>
          <Rating name="read-only" value={3} readOnly />
        </Paper>

        <Paper
          elevation={10}
          sx={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            padding: 2,
          }}
        >
          <img
            src="bahubali.jpg"
            alt="bahubali"
            style={{ width: "100%", height: "500px", objectFit: "cover" }}
          />
          <Typography variant="h6" sx={{ position: "relative", top: "20px" }}>
            BAHUBALI
          </Typography>
          <Rating name="read-only" value={4} readOnly />
        </Paper>
      </Box>
    </Box>
  );
}

export default Body;