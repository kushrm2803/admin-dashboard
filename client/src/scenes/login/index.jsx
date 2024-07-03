import React, { useState } from "react";
import {
  Box,
  TextField,
  Button,
  Typography,
  CircularProgress,
  Container,
} from "@mui/material";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import { useTheme } from "@mui/material";
import { useDispatch } from "react-redux";
import { setUser, setLogin } from "state/index.js";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState("");
  const navigate = useNavigate();
  const theme = useTheme();
  const dispatch = useDispatch();

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsLoading(true);
    setError("");

    try {
      const response = await axios.post(
        "http://localhost:5001/api/auth/login",
        { email, password }
      );

      if (response.status === 200 || response.status === 204) {
        const { currentuserId } = response.data;
        localStorage.setItem("isLoggedIn", "true");
        localStorage.setItem("currentuserId", currentuserId);
        dispatch(setLogin());
        dispatch(setUser());

        navigate("/dashboard");
      }
    } catch (error) {
      setError("Invalid email or password");
      console.error("Login error:", error);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <Container
      maxWidth="sm"
      sx={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        height: "100vh",
        backgroundColor: theme.palette.background.default,
      }}
    >
      <Box
        sx={{
          padding: "2rem",
          borderRadius: "0.5rem",
          boxShadow: `0px 3px 15px ${
            theme.palette.mode === "dark"
              ? "rgba(0, 0, 0, 0.2)"
              : "rgba(0, 0, 0, 0.1)"
          }`,
          maxWidth: "400px",
          width: "100%",
          backgroundColor: theme.palette.background.alt,
        }}
      >
        <Typography
          variant="h1"
          color={theme.palette.secondary.main}
          fontWeight="bold"
        >
          LOG-IN
        </Typography>
        <form onSubmit={handleSubmit}>
          <TextField
            type="email"
            label="Email"
            fullWidth
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
            margin="normal"
            variant="outlined"
            sx={{ marginBottom: "1rem" }}
            autoComplete="email"
          />
          <TextField
            type="password"
            label="Password"
            fullWidth
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
            margin="normal"
            variant="outlined"
            sx={{ marginBottom: "1rem" }}
            autoComplete="current-password"
          />
          {error && (
            <Typography
              variant="body2"
              color="error"
              sx={{ marginBottom: "1rem", textAlign: "center" }}
            >
              {error}
            </Typography>
          )}
          <Button
            type="submit"
            variant="contained"
            color="primary"
            fullWidth
            size="large"
            sx={{ marginTop: "1rem" }}
            disabled={isLoading}
          >
            {isLoading ? <CircularProgress size={24} /> : "Login"}
          </Button>
        </form>
      </Box>
    </Container>
  );
};

export default Login;
