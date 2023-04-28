import { Route, Routes } from "react-router-dom";
import "./App.css";

import LoginPage from "./pages/Login/LoginPage";
import ErrorPage from "./pages/ErrorPage";
import { useContext, useEffect } from "react";
import { AuthContext } from "./context/authContext";
import { ProtectedRoute } from "./components/PrivateRoute";
import ContractForm from "./pages/ContractForm/ContractForm";
import ComingSoon from "./pages/ComingSoon/ComingSoon";
import ConfirmationPage from "./pages/ComingSoon/ConfirmationPage";

function App() {
  const { status, userId } = useContext(AuthContext);

  useEffect(() => {
    console.log({ status, userId });
  }, [status]);

  return (
    <div className="App">
      <Routes>
        {/* <Route path="/login" element={<LoginPage />} /> */}
        {/* <Route path="/member" element={<ContractForm />} /> */}
        <Route path="/" element={<ComingSoon />} />
        <Route path="/confirmationPage" element={<ConfirmationPage />} />
        {/* <Route
          path="/test"
          element={
            <ProtectedRoute status={status}>
              <h1>Test Private</h1>
            </ProtectedRoute>
          }
        /> */}
        <Route path="*" element={<ErrorPage />} />
      </Routes>
    </div>
  );
}

export default App;
