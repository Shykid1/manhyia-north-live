import CustomDrawer from '../../components/Navbar/SideBar'; // Assuming CustomDrawer.js is in the same directory
import DashboardContent from './DashContent';

function Dashboard() {
  const mainContent = (
    <>
    <DashboardContent/>
     
    </>
  );

  return (
    <CustomDrawer mainContent={mainContent} />
  );
}

export default Dashboard;
