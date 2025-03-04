import { Routes, Route, BrowserRouter } from "react-router";
import { LoginForm } from "./Login";
export const IndexRouter = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/home" element={"aaa"} />
        <Route path="/login" element={<LoginForm />} />
      </Routes>
    </BrowserRouter>
  );
};
