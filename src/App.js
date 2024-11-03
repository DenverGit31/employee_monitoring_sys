import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/home";
import SignIn from "./pages/signIn";
import Departments from "./pages/departments";
import Setting from "./pages/setting";
import EmployeeAccounts from "./pages/EmployeeAccounts";
import WfhEmployees from "./pages/wfhEmployees";
function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<SignIn />} />
        <Route path="/Home" element={<Home />} />
        <Route path="/Departments" element={<Departments />} />
        <Route path="/Settings" element={<Setting />} />
        <Route path="/EmployeeAccounts" element={<EmployeeAccounts />} />
        <Route path="/WfhEmployees" element={<WfhEmployees />} />
      </Routes>
    </Router>
  );
}

export default App;
