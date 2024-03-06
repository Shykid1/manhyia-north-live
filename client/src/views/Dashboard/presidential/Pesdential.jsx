
import InfoCard from "../../../components/InfoCard";
import CardComponent from "../../../components/CardComponent";
import CustomDrawer from "../../../components/Navbar/SideBar";
import BasicBreadcrumbs from "../../../components/BreadCrumbs";

const Presidential = () => {
  const mainContent = (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        gap: 30,
      }}
    >
      <BasicBreadcrumbs linkpath = '/dashboard/presidential' routername='Presidential'/>
      <div
        className=""
        style={{
          display: "flex",
          justifyContent: "center",
          alignContent: "center",
          alignItems: "center",
        }}
      >
        <br />
        <br />
        <br />
        <InfoCard />
      </div>
      <div className="">
        <div
          style={{
            height: 40,
            width: "100%",
            background: "#022C06",
            color: "#fff",
            display: 'flex',
            alignContent: "center",
            justifyItems: 'center',
            borderRadius: 10,
          }}
        > <h5 style={{padding: 10}}>POLLING STATIONS</h5></div>
        <div
          className=""
          style={{
            display: "flex",
            flexWrap: "wrap",
            flexDirection: "row",
            gap: 30,
            justifyContent: "center",
            padding: 7,
          }}
        >
          <CardComponent />
          <CardComponent />
          <CardComponent />
          <CardComponent />
          <CardComponent />
          <CardComponent />
          <CardComponent />
          <CardComponent />
        </div>
      </div>
    </div>
  );
  return <CustomDrawer mainContent={mainContent} />;
};

export default Presidential;
