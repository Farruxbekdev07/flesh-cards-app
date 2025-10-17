import React from "react";
import SchoolIcon from "@mui/icons-material/School";
import DashboardIcon from "@mui/icons-material/Dashboard";
import LeaderboardIcon from "@mui/icons-material/Leaderboard";
import FolderOutlinedIcon from "@mui/icons-material/FolderOutlined";

import { PATHS } from "./paths";
import Home from "@/pages/Home";
import Learn from "@/pages/Learn";
import Login from "@/pages/Login";
import Profile from "@/pages/Profile";
import Register from "@/pages/Register";
import Settings from "@/pages/Settings";
import Dashboard from "@/pages/Dashboard";
import Statistics from "@/pages/Statistics";
import Vocabulary from "@/pages/Vocabulary";

const {
  HOME,
  LEARN,
  LOGIN,
  PROFILE,
  REGISTER,
  SETTINGS,
  DASHBOARD,
  STATISTICS,
  VOCABULARY,
} = PATHS;

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
  {
    path: SETTINGS,
    component: <Settings />,
  },
  {
    path: VOCABULARY,
    component: <Vocabulary />,
  },
];

export const PUBLIC_ROUTES: IRoute[] = [
  {
    path: HOME,
    component: <Home />,
  },
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
    path: VOCABULARY,
    icon: <FolderOutlinedIcon />,
    pathName: "Vocabulary",
  },
];
