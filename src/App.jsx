import { Route, Routes } from "react-router-dom";
import { useMode, ColorModeContext } from "./theme/theme";
import { CssBaseline, ThemeProvider } from "@mui/material";

import ErrorPage from "./pages/ErrorPage";
import ConfirmationPage from "./pages/ComingSoon/ConfirmationPage";
import EmailSignup from "./pages/ComingSoon/EmailSignup";
import Dashboard from "./dashboard/Dashboard";
import Services from "./pages/services";
import Invoices from "./pages/invoices";
import MemberSettings from "./pages/membersettings";
import MemberChat from "./pages/MemberChat/MemberChat";
import FAQ from "./pages/faq";

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
            <Route path="/dashboard" element={<Dashboard />} />
            <Route path="/services" element={<Services />} />
            <Route path="/invoices" element={<Invoices />} />
            <Route path="/faq" element={<FAQ />} />
            <Route path="/membersettings" element={<MemberSettings />} />
            <Route path="/MemberChat" element={<MemberChat />} />
          </Routes>
        </div>
      </ThemeProvider>
    </ColorModeContext.Provider>
  );
}

export default App;
