import React from "react";
import HomeIcon from "@mui/icons-material/Home";
import SchoolIcon from "@mui/icons-material/School";
import PersonIcon from "@mui/icons-material/Person";
import DashboardIcon from "@mui/icons-material/Dashboard";
import LeaderboardIcon from "@mui/icons-material/Leaderboard";

import { PATHS } from "./paths";
import Home from "../pages/Home";
import Learn from "../pages/Learn";
import Login from "../pages/Login";
import Profile from "../pages/Profile";
import Register from "../pages/Register";
import Dashboard from "../pages/Dashboard";
import Statistics from "../pages/Statistics";

const { HOME, DASHBOARD, LEARN, LOGIN, PROFILE, STATISTICS, REGISTER } = PATHS;

export interface IRoute {
  path: string;
  component: React.ReactNode;
}
export interface ISidebarRoute {
  path: string;
  pathName: string;
  icon: React.ReactNode;
}

export const PRIVATE_ROUTES: IRoute[] = [
  {
    path: HOME,
    component: <Home />,
  },
  {
    path: LEARN,
    component: <Learn />,
  },
  {
    path: DASHBOARD,
    component: <Dashboard />,
  },
  {
    path: PROFILE,
    component: <Profile />,
  },
  {
    path: STATISTICS,
    component: <Statistics />,
  },
];

export const PUBLIC_ROUTES: IRoute[] = [
  {
    path: LOGIN,
    component: <Login />,
  },
  {
    path: REGISTER,
    component: <Register />,
  },
];

export const SIDEBAR_ROUTES: ISidebarRoute[] = [
  {
    path: HOME,
    icon: <HomeIcon />,
    pathName: "Home",
  },
  {
    path: DASHBOARD,
    icon: <DashboardIcon />,
    pathName: "Dashboard",
  },
  {
    path: STATISTICS,
    icon: <LeaderboardIcon />,
    pathName: "Statistics",
  },
  {
    path: LEARN,
    icon: <SchoolIcon />,
    pathName: "Learn",
  },
  {
    path: PROFILE,
    icon: <PersonIcon />,
    pathName: "Profile",
  },
];
