import { Navigate, Route, Routes } from "react-router-dom";
import HomePage from "./pages/home/HomePage";
import LoginPage from "./pages/LoginPage";
import SingUp from "./pages/SignUp";
import Footer from "./component/Footer";
import { Toaster } from "react-hot-toast";
import { useAuthStore } from "./store/authUser";
import { Loader, User } from "lucide-react";
import { useEffect } from "react";


function App() {
  const {user, isCheckingAuth, authCheck } = useAuthStore;
  console.log("auth user is here:",User);

  // useEffect(()=>{
  //   authCheck();
  // }, [authCheck]);

  if(isCheckingAuth) {
    return (
      <div className="h-screen">
        <div className="flex justify-center items-center bg-black h-full">
            < Loader className="animate-spin text-red-600 size-10"/>
        </div>
      </div>
    )
  }
  
  return (
    <>
   <Routes>
       <Route path='/' element={<HomePage/>} />
       <Route path='/login' element={ !user ? <LoginPage/> : < Navigate to={"/"}/> }/>
       <Route path='/singup' element= {!user ? <SingUp/> : <Navigate to={"/"}/>} />
   </Routes>
   <Footer/>
   <Toaster/>
   </>
  );
}

export default App
