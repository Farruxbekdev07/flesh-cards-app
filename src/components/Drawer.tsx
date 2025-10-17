// packages
import List from "@mui/material/List";
import { NavLink } from "react-router-dom";
import Divider from "@mui/material/Divider";
import Toolbar from "@mui/material/Toolbar";
import ListItem from "@mui/material/ListItem";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import ListItemButton from "@mui/material/ListItemButton";

import { SIDEBAR_ROUTES } from "@/routes";

export function TemporaryDrawer() {
  return (
    <div>
      <Toolbar />
      <Divider />
      <List>
        {SIDEBAR_ROUTES.map(({ path, icon, pathName }) => (
          <NavLink
            to={path}
            style={{ textDecoration: "none", color: "inherit" }}
          >
            <ListItem key={pathName} disablePadding>
              <ListItemButton>
                <ListItemIcon>{icon}</ListItemIcon>
                <ListItemText primary={pathName} />
              </ListItemButton>
            </ListItem>
          </NavLink>
        ))}
      </List>
    </div>
  );
}
