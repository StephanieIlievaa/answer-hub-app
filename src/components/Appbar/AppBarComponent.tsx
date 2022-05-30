import React from "react";
import { AppBar, IconButton, Toolbar } from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
import { styled } from "@mui/material/styles";
import Brightness4Icon from "@mui/icons-material/Brightness4";
import Brightness7Icon from "@mui/icons-material/Brightness7";
import { useTheme } from "@mui/material/styles";

const Div = styled("div")(({ theme }) => ({
  ...theme.typography.button,

  padding: theme.spacing(1),
  borderRadius: "5px",
  fontWeight: theme.typography.fontWeightBold,
  display: "flex",
  flexDirection: "row",
}));
interface Props {
  handleDrawerToggle: () => void;
  onThemeChange: () => void;
  themeMode: string;
}
export const AppBarComponent: React.FC<Props> = ({
  handleDrawerToggle,
  onThemeChange,
  themeMode,
}): JSX.Element => {
  const theme = useTheme();
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
          <IconButton sx={{ ml: 1 }} onClick={onThemeChange} color="inherit">
            {theme.palette.mode === "dark" ? (
              <Brightness7Icon />
            ) : (
              <Brightness4Icon />
            )}
          </IconButton>
        </Toolbar>
      </AppBar>
    </div>
  );
};
