import { Route, Routes } from "react-router-dom";
import { useMode, ColorModeContext } from "./theme/theme";
import { CssBaseline, ThemeProvider } from "@mui/material";

import ErrorPage from "./pages/ErrorPage";
import ConfirmationPage from "./pages/ComingSoon/ConfirmationPage";
import EmailSignup from "./pages/ComingSoon/EmailSignup";

function App() {
  const [theme, colorMode] = useMode();
  return (
    <ColorModeContext.Provider value={colorMode}>
      <ThemeProvider theme={theme}>
        <CssBaseline />
        <div className="App">
          <Routes>
            <Route path="/" element={<EmailSignup />} />
            <Route path="/confirmationPage" element={<ConfirmationPage />} />
            <Route path="*" element={<ErrorPage />} />
          </Routes>
        </div>
      </ThemeProvider>
    </ColorModeContext.Provider>
  );
}

export default App;
