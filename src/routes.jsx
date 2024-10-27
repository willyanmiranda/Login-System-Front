import { BrowserRouter, Routes, Route } from "react-router-dom";
import SignUpPage from "./pages/signUpPage/SignUpPage";
import SignInPage from "./pages/signInPage/signInPage";
const Rotas = () => {
  return (
    <>
        <BrowserRouter>
            <Routes>
                <Route path='/register' element={<SignUpPage/>} />
                <Route path='/login' element={<SignInPage/>} />
            </Routes>
        </BrowserRouter>
    </>
  )
}

export default Rotas;