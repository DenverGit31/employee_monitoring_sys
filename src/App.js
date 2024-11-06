import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Dashboard from "./pages/dasboard";
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
        <Route path="/Dashboard" element={<Dashboard />} />
        <Route path="/Departments" element={<Departments />} />
        <Route path="/Settings" element={<Setting />} />
        <Route path="/EmployeeAccounts" element={<EmployeeAccounts />} />
        <Route path="/WfhEmployees" element={<WfhEmployees />} />
      </Routes>
    </Router>
  );
}

export default App;
