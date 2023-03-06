import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import { AuthLayout } from "@/components/layouts/AuthLayout";
import { AppLayout } from "./components/layouts/AppLayout";
import { Signin } from "@/views/auth/Signin";
import { Signup } from "@/views/auth/Signup";
import { Components } from "@/views/Components";

export const App = () => {
  return (
    <BrowserRouter>
      <AppLayout>
        <Routes>
          <Route element={<AuthLayout />}>
            <Route path="/" element={<Navigate to="/signin" />} />
            <Route path="/signin" element={<Signin />} />
            <Route path="/signup" element={<Signup />} />
          </Route>

          <Route path="/components" element={<Components />} />
        </Routes>
      </AppLayout>
    </BrowserRouter>
  );
};
