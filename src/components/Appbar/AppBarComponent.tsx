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
  backgroundColor: theme.palette.background.paper,
  padding: theme.spacing(1),
  borderRadius: "5px",
  fontWeight: theme.typography.fontWeightBold,
}));
interface Props {
  handleDrawerToggle: () => void;
  onThemeChange: () => void;
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
          <Div>Answer Hub</Div>
          <ThemeSwitch size="small" onChange={onThemeChange} />
        </Toolbar>
      </AppBar>
    </div>
  );
};
