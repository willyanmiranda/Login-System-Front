import { BrowserRouter, Routes, Route } from "react-router-dom";
import SignUpPage from "./pages/signUpPage/SignUpPage";
const Rotas = () => {
  return (
    <>
        <BrowserRouter>
            <Routes>
                <Route path='/register' element={<SignUpPage/>} />
            </Routes>
        </BrowserRouter>
    </>
  )
}

export default Rotas;