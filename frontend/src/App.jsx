import { Route, Routes } from "react-router-dom";
import HomePage from "./pages/HomePage";
import LoginPage from "./pages/LoginPage";
import SingUp from "./pages/SingUp";

function App() {
  return (
   <Routes>
       <Route path='/' element={<HomePage/>} />
       <Route path='/login' element={<LoginPage/> }/>
       <Route path='/singup' element= {<SingUp/>} />
   </Routes>
  );
}

export default App
