import { CssBaseline, ThemeProvider } from "@mui/material";
import { useMemo } from "react";
import { createTheme } from "@mui/material/styles";
import { useSelector } from "react-redux";
import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";
import { themeSettings } from "./theme";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import Layout from "./pages/layout";
import Dashboard from "./pages/dashboard";
import Reports from "./pages/reports";
import Login from "./pages/login";
import { AuthProvider } from "./auth-context";
import ProtectedRoute from "./ProtectRoute";

function App() {
  const mode = useSelector((state) => state.global.mode);
  const theme = useMemo(() => createTheme(themeSettings(mode)), [mode]);

  return (
    <div className="app">
      <BrowserRouter>
        <AuthProvider>
          <ThemeProvider theme={theme}>
            <LocalizationProvider dateAdapter={AdapterDayjs}>
              <CssBaseline />
              <Routes>
                <Route path="/" element={<Layout />}>
                  <Route index element={<Navigate to="/login" replace />} />
                  <Route path="/login" element={<Login />} />
                  <Route path="/dashboard" element={<Dashboard />} />
                  <Route path="/reports" element={<Reports />} />
                  <ProtectedRoute path="/dashboard" element={<Dashboard />} />
                  <ProtectedRoute path="/reports" element={<Reports />} />
                </Route>
              </Routes>
            </LocalizationProvider>
          </ThemeProvider>
        </AuthProvider>
      </BrowserRouter>
    </div>
  );
}

export default App;
