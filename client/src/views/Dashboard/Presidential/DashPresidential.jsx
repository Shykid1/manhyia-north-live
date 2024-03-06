import CustomDrawer from "../../../components/Navbar/SideBar";
import Presidential from "../Presidential/Pesdential";

const DashPresidential = () => {
  const mainContent = <Presidential />;

  return <CustomDrawer mainContent={mainContent} />;
};

export default DashPresidential;
