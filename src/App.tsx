import React from "react";
import { AppBarComponent } from "./components/Appbar/AppBarComponent";
import {SideBar} from "./components/SideBar/SideBar";
import "./App.css";
import { PropsWithChildren, useState } from "react";
import {
  createTheme,
  ThemeProvider,
  CssBaseline,
  TextField,
} from "@mui/material";

const App: React.FC = (): JSX.Element => {
  const [themeMode, setThemeMode] = React.useState<"light" | "dark">("dark");
const [sideBarToggle, setSideBarToggle] = useState<boolean>(false);
  const theme = createTheme({
    palette: { mode: themeMode },
    typography: { fontSize: 14 },
  });
  const handleDrawerToggle = React.useCallback(() => {
    setSideBarToggle(!sideBarToggle);
  }, [sideBarToggle]);
  const onThemeChange = React.useCallback(() => {
   setThemeMode(themeMode === "light" ? "dark" : "light");
  }, [themeMode]);

  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <AppBarComponent
        handleDrawerToggle={handleDrawerToggle}
        onThemeChange={onThemeChange}
        themeMode={themeMode}
      />
      <SideBar isOpen={sideBarToggle} handleDrawerToggle={handleDrawerToggle}/>
    </ThemeProvider>
  );
};
export default App;
