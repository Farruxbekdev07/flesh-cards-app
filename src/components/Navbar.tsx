import React from "react";
import { FiMoon } from "react-icons/fi";
import { AiOutlineSun } from "react-icons/ai";
import MenuIcon from "@mui/icons-material/Menu";
import { useDispatch, useSelector } from "react-redux";
import { AppBar, Box, IconButton, Toolbar, Typography } from "@mui/material";

import { DRAWER_WIDTH } from "@/types";
import { toggleTheme } from "@/redux/themeSlice";

interface Props {
  handleDrawerToggle: () => void;
}

export default function Navbar({ handleDrawerToggle }: Props) {
  const themeMode = useSelector((state: any) => state.theme.mode);
  const dispatch = useDispatch();

  const handleToggleThemeMode = () => {
    dispatch(toggleTheme());
  };

  return (
    <AppBar
      position="fixed"
      sx={{
        ml: { sm: `${DRAWER_WIDTH}px` },
        width: {
          sm: `calc(100% - ${DRAWER_WIDTH}px)`,
        },
      }}
    >
      <Toolbar>
        <IconButton
          edge="start"
          color="inherit"
          aria-label="open drawer"
          onClick={handleDrawerToggle}
          sx={{ mr: 2, display: { sm: "none" } }}
        >
          <MenuIcon />
        </IconButton>
        <Box
          sx={{
            width: "100%",
            display: "flex",
            justifyContent: "space-between",
          }}
        >
          <Typography variant="h6" noWrap component="div">
            Responsive drawer
          </Typography>
          <IconButton onClick={handleToggleThemeMode}>
            {themeMode === "light" ? (
              <FiMoon size={24} />
            ) : (
              <AiOutlineSun size={24} />
            )}
          </IconButton>
        </Box>
      </Toolbar>
    </AppBar>
  );
}
