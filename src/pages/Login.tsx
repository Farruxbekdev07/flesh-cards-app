import {
  Box,
  Paper,
  Button,
  Divider,
  Container,
  TextField,
  Typography,
  IconButton,
} from "@mui/material";
import { FiMoon } from "react-icons/fi";
import { FcGoogle } from "react-icons/fc";
import { NavLink } from "react-router-dom";
import { FaFacebook } from "react-icons/fa6";
import { AiOutlineSun } from "react-icons/ai";
import { Controller, useForm } from "react-hook-form";
import { useDispatch, useSelector } from "react-redux";
import { signInWithPopup, signInWithEmailAndPassword } from "firebase/auth";

import { getTheme } from "../styles/theme";
import { UserFormData } from "@/types/user";
import { toggleTheme } from "../redux/themeSlice";
import { auth, googleProvider } from "../services/firebase";

export default function Login() {
  const themeMode = useSelector((state: any) => state.theme.mode);
  const theme = getTheme(themeMode);
  const dispatch = useDispatch();

  const { control, handleSubmit } = useForm<UserFormData>({
    mode: "onBlur",
    defaultValues: {
      email: "",
      password: "",
    },
  });

  const handleToggleThemeMode = () => {
    dispatch(toggleTheme());
  };

  const handleGoogleLogin = async () => {
    try {
      await signInWithPopup(auth, googleProvider);
    } catch (err) {
      console.error(err);
    }
  };

  const handleEmailLogin = async (data: UserFormData) => {
    const { email, password } = data;
    try {
      await signInWithEmailAndPassword(auth, email, password);
    } catch (err) {
      console.error("Login xatolik:", err);
    }
  };

  return (
    <Box
      sx={{
        width: "100%",
        display: "flex",
        minHeight: "100vh",
        alignItems: "center",
        color: "text.primary",
        height: "fit-content",
        flexDirection: "column",
        justifyContent: "center",
        bgcolor: "background.default",
      }}
    >
      <IconButton
        onClick={handleToggleThemeMode}
        sx={{ position: "absolute", top: 16, left: 16 }}
      >
        {themeMode === "light" ? (
          <FiMoon size={24} />
        ) : (
          <AiOutlineSun size={24} />
        )}
      </IconButton>
      <Container
        sx={{
          margin: 0,
          width: 500,
          textAlign: "center",
          padding: "0 !important",
        }}
      >
        <Paper sx={{ borderRadius: 2, padding: 4 }}>
          <Box
            sx={{
              gap: 2,
              display: "flex",
              flexDirection: "column",
            }}
          >
            <Typography variant="h4" gutterBottom>
              Sign In
            </Typography>
            <Controller
              name="email"
              control={control}
              rules={{ required: "Please input your email!" }}
              render={({ field, fieldState: { error } }) => (
                <TextField
                  fullWidth
                  {...field}
                  label="Email"
                  error={!!error}
                  helperText={error?.message}
                />
              )}
            />
            <Controller
              name="password"
              control={control}
              rules={{ required: "Please input your password!" }}
              render={({ field, fieldState: { error } }) => (
                <TextField
                  fullWidth
                  {...field}
                  error={!!error}
                  label="Password"
                  helperText={error?.message}
                />
              )}
            />
            <Button
              variant="contained"
              sx={{ padding: "10px 0" }}
              onClick={handleSubmit(handleEmailLogin)}
            >
              Login
            </Button>
            <Typography>
              Don't have an account?{" "}
              <NavLink
                to={"/register"}
                style={{
                  color: theme.palette.primary.main,
                }}
              >
                Register
              </NavLink>
            </Typography>
            <Divider sx={{ my: 3 }}>or</Divider>
            <Button
              variant="outlined"
              sx={{ padding: "10px 0" }}
              onClick={handleGoogleLogin}
            >
              <FcGoogle size={24} />
              <Typography
                sx={{ ml: 1, textTransform: "capitalize", fontSize: 16 }}
              >
                Sign In With Google
              </Typography>
            </Button>
            <Button
              variant="outlined"
              sx={{ padding: "10px 0" }}
              onClick={handleGoogleLogin}
            >
              <FaFacebook
                size={24}
                style={{ color: theme.palette.primary.main }}
              />
              <Typography
                sx={{ ml: 1, textTransform: "capitalize", fontSize: 16 }}
              >
                Sign In With Facebook
              </Typography>
            </Button>
          </Box>
        </Paper>
      </Container>
    </Box>
  );
}
