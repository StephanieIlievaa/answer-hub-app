import React from "react";
import {
  AppBar,
  IconButton,
  Toolbar,
  Switch as ThemeSwitch,
} from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
import { styled } from "@mui/material/styles";
import LightModeIcon from "@mui/icons-material/LightMode";
import DarkModeIcon from "@mui/icons-material/DarkMode";

const Div = styled("div")(({ theme }) => ({
  ...theme.typography.button,
  // backgroundColor: theme.palette.background.paper,
  padding: theme.spacing(1),
  borderRadius: "5px",
  fontWeight: theme.typography.fontWeightBold,
  display: "flex",
  flexDirection: "row",
}));
interface Props {
  handleDrawerToggle: () => void;
  onThemeChange: () => void;
  themeMode: "light" | "dark";
}
export const AppBarComponent: React.FC<Props> = ({
  handleDrawerToggle,
  onThemeChange,
}): JSX.Element => {
  return (
    <div>
      <AppBar position="static" variant="elevation">
        <Toolbar variant="dense">
          <IconButton color="inherit" onClick={handleDrawerToggle} edge="start">
            <MenuIcon />
          </IconButton>
          <Div>
            <img src="./idea.png" width="40" height="40" />
            <p>Answer Hub</p>
          </Div>
          <ThemeSwitch size="small" onChange={onThemeChange} />
        </Toolbar>
      </AppBar>
    </div>
  );
};
