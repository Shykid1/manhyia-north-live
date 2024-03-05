import CustomDrawer from "../../../components/Navbar/SideBar";
import Paliamentary from "../../Paliamentary";

const DashPaliamentary = () => {
  const mainContent = <Paliamentary />;

  return <CustomDrawer mainContent={mainContent} />;
};

export default DashPaliamentary;
