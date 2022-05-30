import React, { useEffect } from "react";
import { QuestionContainer } from "./components/Questions/QuestionContainer";
import { AppBarComponent } from "./components/Appbar/AppBarComponent";
import { SideBar } from "./components/SideBar/SideBar";
import "./App.css";
import { useState } from "react";
import { createTheme, ThemeProvider, CssBaseline } from "@mui/material";

const App: React.FC = (): JSX.Element => {
  const [themeMode, setThemeMode] = React.useState<"light" | "dark">("dark");
  const [sideBarToggle, setSideBarToggle] = useState<boolean>(false);
  const [users, setUsers] = useState<any>([]);

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

  useEffect(() => {
    fetch("https://questions-dev.herokuapp.com/questions")
      .then((response) => response.json())
      .then((json) => setUsers(json));
  }, []);

  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <AppBarComponent
        handleDrawerToggle={handleDrawerToggle}
        onThemeChange={onThemeChange}
        themeMode={themeMode}
      />
      <SideBar isOpen={sideBarToggle} handleDrawerToggle={handleDrawerToggle} />
      <QuestionContainer users={users} />
    </ThemeProvider>
  );
};
export default App;
