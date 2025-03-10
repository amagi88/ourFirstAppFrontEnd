import { Routes, Route, BrowserRouter } from "react-router";
import { LoginForm } from "./Login";
import { MyPage } from "./MyPage";
import LogoutButton from "./Logout";

export const IndexRouter = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/login" element={<LoginForm />} />
        <Route path="/home" element={<MyPage />} />
        <Route path="/logout" element={<LogoutButton />} />
      </Routes>
    </BrowserRouter>
  );
};
