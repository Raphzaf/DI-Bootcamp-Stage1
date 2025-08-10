import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import HomePage from "../pages/HomePage";
import StoryPage from "../pages/StoryPage";
import LoginPage from "../features/auth/LoginPage";
import SignupPage from "../features/auth/SignupPage";
import { useSelector } from "react-redux";
import type { RootState } from "./store";

function Protected({ children }: { children: JSX.Element }) {
  const token = useSelector((s: RootState) => s.auth.accessToken);
  if (!token) return <Navigate to="/login" replace />;
  return children;
}

export default function AppRouter() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Protected><HomePage/></Protected>} />
        <Route path="/story/:id" element={<Protected><StoryPage/></Protected>} />
        <Route path="/login" element={<LoginPage/>} />
        <Route path="/signup" element={<SignupPage/>} />
      </Routes>
    </BrowserRouter>
  );
}