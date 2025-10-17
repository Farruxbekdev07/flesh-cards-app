import { useState } from "react";
import Box from "@mui/material/Box";
import Drawer from "@mui/material/Drawer";
import Toolbar from "@mui/material/Toolbar";
import CssBaseline from "@mui/material/CssBaseline";
import { BrowserRouter, Route, Routes } from "react-router-dom";

import "./App.css";
import { PATHS } from "./routes/paths";
import { DRAWER_WIDTH } from "./types";
import NotFound from "./pages/NotFound";
import { TemporaryDrawer } from "./components/Drawer";
import { PRIVATE_ROUTES, PUBLIC_ROUTES, type IRoute } from "./routes";
import Navbar from "./components/Navbar";

interface Props {
  window?: () => Window;
}

function App(props: Props) {
  const token = "token";
  const { window } = props;
  const [isClosing, setIsClosing] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  const handleDrawerClose = () => {
    setIsClosing(true);
    setMobileOpen(false);
  };

  const handleDrawerTransitionEnd = () => {
    setIsClosing(false);
  };

  const handleDrawerToggle = () => {
    if (!isClosing) {
      setMobileOpen(!mobileOpen);
    }
  };

  const container =
    window !== undefined ? () => window().document.body : undefined;

  return (
    <BrowserRouter>
      {token ? (
        <Box sx={{ display: "flex" }}>
          <CssBaseline />
          <Navbar handleDrawerToggle={handleDrawerToggle} />

          <Box
            component="nav"
            sx={{ width: { sm: DRAWER_WIDTH }, flexShrink: { sm: 0 } }}
            aria-label="sidebar navigation"
          >
            <Drawer
              container={container}
              variant="temporary"
              open={mobileOpen}
              onClose={handleDrawerClose}
              onTransitionEnd={handleDrawerTransitionEnd}
              sx={{
                display: { xs: "block", sm: "none" },
                "& .MuiDrawer-paper": {
                  width: DRAWER_WIDTH,
                  boxSizing: "border-box",
                },
              }}
              slotProps={{
                root: {
                  keepMounted: true,
                },
              }}
            >
              <TemporaryDrawer />
            </Drawer>

            <Drawer
              variant="permanent"
              sx={{
                display: { xs: "none", sm: "block" },
                "& .MuiDrawer-paper": {
                  width: DRAWER_WIDTH,
                  boxSizing: "border-box",
                },
              }}
              open
            >
              <TemporaryDrawer />
            </Drawer>
          </Box>

          <Box
            component="main"
            sx={{
              p: 3,
              flexGrow: 1,
              width: { sm: `calc(100% - ${DRAWER_WIDTH}px)` },
            }}
          >
            <Toolbar />
            <Routes>
              {PRIVATE_ROUTES.map(({ path, component }: IRoute) => (
                <Route key={path} path={path} element={component} />
              ))}
              <Route path={PATHS.NOTFOUND} element={<NotFound />} />
            </Routes>
          </Box>
        </Box>
      ) : (
        <Routes>
          {PUBLIC_ROUTES.map(({ path, component }: IRoute) => (
            <Route key={path} path={path} element={component} />
          ))}
          <Route path={PATHS.NOTFOUND} element={<NotFound />} />
        </Routes>
      )}
    </BrowserRouter>
  );
}

export default App;
