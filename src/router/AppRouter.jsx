import { Navigate, Route, Routes } from "react-router-dom";
import { Header } from "../countries/components/Header";
import { Card, Home } from "../countries/pages";

export const AppRouter = () => {
  return (
    <>
      <Header />
      <Routes>
        <Route path="/Countries-App/" element={<Home />} />

        <Route path="Countries-App/:id" element={<Card />} />

        <Route path="*" element={<Navigate to="/Countries-App" />}></Route>
      </Routes>
    </>
  );
};
