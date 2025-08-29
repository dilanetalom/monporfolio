import Portfolio from "./pages/Porfolio";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "@fontsource/montserrat"; // Poids par défaut 400
import "@fontsource/montserrat/500.css"; // Poids 500
import "@fontsource/montserrat/700.css";
import CustomCursor from "./components/CustomCursor";
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

function App() {
  return (
   <>
   <CustomCursor />
      <ToastContainer position="top-right" autoClose={3000} />
   <Router>
    <Routes>
      <Route path="/" element={<Portfolio/>} />
    </Routes>
   </Router>
   </>
  );
}

export default App;
