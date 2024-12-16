import { Route, Routes } from "react-router-dom";
import HomePage from "./pages/home/HomePage";
import LoginPage from "./pages/LoginPage";
import SingUp from "./pages/SignUp";
import Footer from "./component/Footer";

function App() {
  return (
    <>
   <Routes>
       <Route path='/' element={<HomePage/>} />
       <Route path='/login' element={<LoginPage/> }/>
       <Route path='/singup' element= {<SingUp/>} />
   </Routes>
   <Footer/>
   </>
  );
}

export default App
