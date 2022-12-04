import { Navigate, Route, Routes } from "react-router-dom";
import { Header } from "../countries/components/Header";
import { Card, Home } from "../countries/pages";

export const AppRouter = () => {
  return (
    <>
      <Header />
      <Routes>
        <Route path="home" element={<Home />} />

        <Route path="home/:id" element={<Card />} />

        <Route path="/" element={<Navigate to="/home" />}></Route>
      </Routes>
    </>
  );
};
