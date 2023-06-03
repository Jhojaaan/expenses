import { Route, Routes } from "react-router-dom";
import { LoginPage } from "../auth/index";
// import Dashboard from "../Components/Dashboard/Dashboard";
import { Principal } from "../Components/Principal/Principal";
import { useContext } from "react";
import { AuthContext } from "../authContext";


export const AppRouter = () => {
    // const authStatus = 'not-authenticated';
    const { authStatus, updateAuthStatus } = useContext(AuthContext);
    console.log(authStatus)
  return (
    <Routes>
      
        
        {
            (authStatus === 'not-authenticated') 
            ? <Route path="/*"  element={<LoginPage/>}/>
            : <Route path="/*" element={<Principal/>}/>
        } 
        
        
    </Routes>

    
  )
}
