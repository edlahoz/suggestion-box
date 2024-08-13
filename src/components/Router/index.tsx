import { BrowserRouter, Route, Routes, Navigate } from "react-router-dom";
import { Helmet } from "react-helmet-async";
import Suggestions from "@/pages/Suggestions";
import SuggestionDetails from "@/pages/Suggestions/SuggestionDetails";
import Login from "@/pages/Login";
import AuthenticatedRoute from "@/components/AuthenticatedRoute";

export default function Router() {
  return (
    <BrowserRouter>
      <Routes>
        <Route
          path="/"
          element={
            <>
              <Helmet>
                <title>Login</title>
              </Helmet>
              <Login />
            </>
          }
        />
        <Route
          path="/suggestions"
          element={
            <AuthenticatedRoute>
              <Helmet>
                <title>Suggestions</title>
              </Helmet>
              <Suggestions />
            </AuthenticatedRoute>
          }
        >
          <Route path=":suggestionId" element={<SuggestionDetails />} />
        </Route>
        <Route path="*" element={<Navigate to="/suggestions" replace />} />
      </Routes>
    </BrowserRouter>
  );
}
