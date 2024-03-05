import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Navbar from './components/Navbar/Navbar'
import Footer from './components/Footer/Footer'
import Home from './views/Home'
import Paliamentary from './views/Paliamentary'
import Presidential from './views/Presidential'
import Login from './views/Auth/Login'
import './App.css'
import Dashboard from './views/Dashboard/Dashboard'
import VoteResults from './views/Dashboard/Results/Results'
import AgentInfo from './views/Dashboard/AgentInfo/AgentInfo'
import DashboardPaliamentary from './views/Dashboard/palimentary/Palimentary'

const App = () => {
  return (
    
    <BrowserRouter>
      
      <Navbar />

        <Routes>
          <Route path="/" >
            <Route index element={<Home />} />
            <Route path="dashboard" >
              <Route index element={<Dashboard />} />
              <Route path="results" element={<VoteResults />} />
              <Route path="agent-info" element={<AgentInfo />} />
              <Route path="palimentary" element={<DashboardPaliamentary />} />
            </Route>
            <Route path="presidential" element={<Presidential />} />
            <Route path="paliamentary" element={<Paliamentary />} />
            <Route path="login" element={<Login />} />
          </Route>
        </Routes>
      <Footer/>
    </BrowserRouter>
  )
}

export default App
