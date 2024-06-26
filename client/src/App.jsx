import { BrowserRouter, Route, Routes } from "react-router-dom";
import Navbar from "./components/Navbar/Navbar";
import Footer from "./components/Footer/Footer";
import Home from "./views/Home";
import Paliamentary from "./views/Paliamentary";
import Presidential from "./views/Presidential/Presidential";
import Login from "./views/Auth/Login";
import "./App.css";
import Dashboard from "./views/Dashboard/Dashboard";
import VoteResults from "./views/Dashboard/Results/Results";
import AgentInfo from "./views/Dashboard/AgentInfo/AgentInfo";
import DashPresidential from "./views/Dashboard/Presidential/DashPresidential";
import AgentForms from "./views/Dashboard/Forms/AgentForms";
import CandidateProfile from "./views/CandidateProfile/CandidateProfile";
import PrivatRoute from "./utils/privateRoutes";
import Candidates from "./views/Dashboard/Candidates/Candidates";

const App = () => {
  return (
    <BrowserRouter>
      <Navbar />

      <Routes>
        <Route path="/">
          <Route index element={<Home />} />
          <Route element={<PrivatRoute />}>
            <Route path="dashboard">
              <Route index element={<Dashboard />} />
              <Route path="results" element={<VoteResults />} />
              <Route path="agent-info" element={<AgentInfo />} />
              <Route path="candidates" element={<Candidates />} />
              <Route path="presidential" element={<DashPresidential />} />
              <Route path="votes" element={<AgentForms />} />
            </Route>
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
