import { Navigate, Route, Routes } from "react-router-dom"
import { Home } from "../countries/pages/Home"

export const AppRouter = () => {
  return (
    <>
      <Routes>
        <Route path="home" element={<Home/>}></Route>
        <Route path="/" element={<Navigate to="/home"/>}></Route>
      </Routes>
    </>
  )
}
