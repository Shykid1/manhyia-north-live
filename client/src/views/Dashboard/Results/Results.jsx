import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell, { tableCellClasses } from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import CustomDrawer from "../../../components/Navbar/SideBar"; // Assuming CustomDrawer.js is in the same directory

function VoteResults() {
  const mainContent = (
    <div className="flex-container   column gap-20 resultspage">
      <Card>
        <CardContent className="flex-container column gap-10">
          <div className="flex-container gap-5">
            <h4>Election Results Updates at</h4>
            <h4 style={{ color: "#12107A", fontWeight: "bold" }}>12:00 pm</h4>
          </div>
          <p>Collation still ongoing make sure to revisite againg for updates</p>
        </CardContent>
      </Card>
      <Card>
        <CardContent className="flex-container column gap-10">
            <div className="livecontainer ">
                <div className="elements">Live Results</div>

            </div>
        </CardContent>
      </Card>
    </div>
  );

  return <CustomDrawer mainContent={mainContent} />;
}

export default VoteResults;
