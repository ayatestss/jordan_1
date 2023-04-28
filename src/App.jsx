import { Route, Routes } from "react-router-dom";
import "./App.css";

import ErrorPage from "./pages/ErrorPage";
import ComingSoon from "./pages/ComingSoon/ComingSoon";
import ConfirmationPage from "./pages/ComingSoon/ConfirmationPage";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<ComingSoon />} />
        <Route path="/confirmationPage" element={<ConfirmationPage />} />
        <Route path="*" element={<ErrorPage />} />
      </Routes>
    </div>
  );
}

export default App;
