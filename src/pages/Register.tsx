import {
  Box,
  Paper,
  Button,
  Container,
  TextField,
  Typography,
  IconButton,
} from "@mui/material";
import { FiMoon } from "react-icons/fi";
import { NavLink } from "react-router-dom";
import { AiOutlineSun } from "react-icons/ai";
import { Controller, useForm } from "react-hook-form";
import { useDispatch, useSelector } from "react-redux";
import { createUserWithEmailAndPassword } from "firebase/auth";

import { getTheme } from "../styles/theme";
import { auth } from "../services/firebase";
import { UserFormData } from "@/types/user";
import { toggleTheme } from "../redux/themeSlice";

export default function Register() {
  const themeMode = useSelector((state: any) => state.theme.mode);
  const theme = getTheme(themeMode);
  const dispatch = useDispatch();

  const { control, handleSubmit } = useForm<UserFormData>({
    mode: "onBlur",
    defaultValues: {
      name: "",
      email: "",
      password: "",
    },
  });

  const handleToggleThemeMode = () => {
    dispatch(toggleTheme());
  };

  const handleRegister = async (data: UserFormData) => {
    const { email, password } = data;
    try {
      await createUserWithEmailAndPassword(auth, email, password);
    } catch (err) {
      console.error("Register xatolik:", err);
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
              Sign Up
            </Typography>

            <Controller
              name="name"
              control={control}
              rules={{ required: "Please input your name!" }}
              render={({ field, fieldState: { error } }) => (
                <TextField
                  fullWidth
                  {...field}
                  label="Name"
                  error={!!error}
                  helperText={error?.message}
                />
              )}
            />
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
              onClick={handleSubmit(handleRegister)}
            >
              Register
            </Button>
            <Typography>
              Already have an account?{" "}
              <NavLink
                to={"/login"}
                style={{
                  color: theme.palette.primary.main,
                }}
              >
                Login here
              </NavLink>
            </Typography>
          </Box>
        </Paper>
      </Container>
    </Box>
  );
}
