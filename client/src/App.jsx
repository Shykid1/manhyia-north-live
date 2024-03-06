import { BrowserRouter, Route, Routes } from "react-router-dom";
import Navbar from "./components/Navbar/Navbar";
import Footer from "./components/Footer/Footer";
import Home from "./views/Home";
import Paliamentary from "./views/Paliamentary";
import Presidential from "./views/Presidential";
import Login from "./views/Auth/Login";
import "./App.css";
import Dashboard from "./views/Dashboard/Dashboard";
import VoteResults from "./views/Dashboard/Results/Results";
import AgentInfo from "./views/Dashboard/AgentInfo/AgentInfo";
import DashPaliamentary from "./views/Dashboard/Paliamentary/DashPaliamentary";
import DashboardPresidential from "./views/Dashboard/Presidential/Pesdential";
import AgentForms from "./views/Dashboard/Forms/AgentForms";
import CandidateProfile from "./views/CandidateProfile/CandidateProfile";

const App = () => {
  return (
    <BrowserRouter>
      <Navbar />

      <Routes>
        <Route path="/">
          <Route index element={<Home />} />
          <Route path="dashboard">
            <Route index element={<Dashboard />} />
            <Route path="results" element={<VoteResults />} />
            <Route path="agent-info" element={<AgentInfo />} />
            <Route path="paliamentary" element={<DashPaliamentary />} />
            <Route path="presidential" element={<DashboardPresidential />} />
            <Route path="votes" element={<AgentForms />} />
          </Route>
          <Route path="presidential" element={<Presidential />} />
          <Route path="paliamentary" element={<Paliamentary />} />
          <Route path="login" element={<Login />} />
          <Route path="candidate-profile" element={<CandidateProfile />} />
        </Route>
      </Routes>
      <Footer />
    </BrowserRouter>
  );
};

export default App;
