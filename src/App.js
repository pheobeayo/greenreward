import { BrowserRouter, Routes, Route } from "react-router-dom";
import Signup from "./pages/sign-up/Signup";
import Signin from "./pages/sign-in/Signin";
import Home from "./pages/home/Home";
import Sustainable from "./pages/sustainable/Sustainable";
import Dashboard from "./pages/dashboard/Dashboard";
import Recyclingcentre from "./pages/reycling-centres/Recyclingcentre";
import Badge from "./pages/badge/Badge";
import VerificationBoard from "./pages/verification-board/VerificationBoard";



function App() {
  return (
   




        <BrowserRouter>
          <Routes>

            <Route path='/' element={<Home />} />
            <Route path="/sign-up" element={<Signup />} />
            <Route path="/sign-in" element={<Signin />} />
            <Route path="/sustainable-milestones" element={<Sustainable />} />
            <Route path='/dashboard' element={<Dashboard />} />
            <Route path="/recycling-centres" element={<Recyclingcentre />} />
            <Route path='/badge' element={<Badge />} />
            <Route path='/verification-board' element={<VerificationBoard />} />


          </Routes>
        </BrowserRouter>

        

     
  );
}

export default App;

