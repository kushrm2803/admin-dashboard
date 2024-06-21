<<<<<<< HEAD

import { CssBaseline,ThemeProvider } from "@mui/material";
import {createTheme} from "@mui/material/styles";
import {useMemo} from "react";
import { useSelector } from "react-redux";
import { BrowserRouter,Routes,Route, Navigate } from "react-router-dom";
import {themeSettings} from "theme";
import Layout from "scenes/layout";
import Dashboard from "scenes/dashboard";
function App() {
  const mode = useSelector((state) => state.global.mode);
  const theme = useMemo(() => createTheme(themeSettings(mode)),[mode]);
  return (
    <div className="app">
      <BrowserRouter>
      <ThemeProvider theme={theme}>
        <CssBaseline/>
        <Routes>
          <Route element={<Layout/>}>
          <Route path="/" element={<Navigate to="/dashboard" replace/>} />
          <Route path="/dashboard" element={<Dashboard/>} />
          </Route>
        </Routes>

      </ThemeProvider>
      
      
      </BrowserRouter>
      
=======
import{ CssBaseline, ThemeProvider } from "amui/material";
import{ createTheme } from "amui/material/styles"; 
import { useMemo } from "react"; 
import { useSelector } from "react-redux";
import { themeSettings } from "theme";

function App() {
  const mode = useSelector ((state) => state.global.mode) ;
  const theme = useMemo(() => createTheme(themeSettings(mode)), [mode]);
  return (
    <div className="App">
      <ThemeProvider theme={theme}>
        <CssBaseline />
      </ThemeProvider>
>>>>>>> f751cbc049ea6ffcd12e46cd1db081e97e03d494
    </div>
  );
}

export default App;
