import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Login from "./pages/Login";
import Register from "./pages/Register";
import Home from "./pages/Home";
import NotFound from "./pages/NotFound";
import PrivateRoute from "./PrivateRoute";
import Browse from "./pages/Browse";
import AppShell from "./layouts/AppShell";
import ApartmentDetails from "./pages/ApartmentDetails";
import CreateReview from "./pages/CreateReview";

const AppRouter = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        {/* <Route
          path="/browse"
          element={<PrivateRoute children={<Browse />} />}
        /> */}
        <Route
          path="/browse"
          element={
            <PrivateRoute>
              <AppShell>
                <Browse />
              </AppShell>
            </PrivateRoute>
          }
        />
        <Route
          path="/apartments/:id"
          element={
            <PrivateRoute>
              <AppShell>
                <ApartmentDetails />
              </AppShell>
            </PrivateRoute>
          }
        />

        <Route
          path="/apartments/:id/review"
          element={
            <PrivateRoute>
              <CreateReview />
            </PrivateRoute>
          }
        />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </Router>
  );
};

export default AppRouter;
