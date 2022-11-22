import { Navigate, Route, Routes } from "react-router-dom";
import { Card } from "../countries/pages/Card";
import { Home } from "../countries/pages/Home";

export const AppRouter = () => {
  return (
    <>
      <Routes>
        <Route path="home" element={<Home />} />

        <Route path="home/:id" element={<Card />} />
        <Route path="/" element={<Navigate to="/home" />}></Route>
      </Routes>
    </>
  );
};
