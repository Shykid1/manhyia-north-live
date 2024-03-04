import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell, { tableCellClasses } from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import { styled } from "@mui/material/styles";

import CustomDrawer from "../../../components/Navbar/SideBar"; // Assuming CustomDrawer.js is in the same directory
import CumulativeChart from "../../../components/charts/CumulativeChart";

const StyledTableCell = styled(TableCell)(({ theme }) => ({
  [`&.${tableCellClasses.head}`]: {
    backgroundColor: theme.palette.common.black,
    color: theme.palette.common.white,
  },
  [`&.${tableCellClasses.body}`]: {
    fontSize: 14,
  },
}));

const StyledTableRow = styled(TableRow)(({ theme }) => ({
  "&:nth-of-type(odd)": {
    backgroundColor: theme.palette.action.hover,
  },
  // hide last border
  "&:last-child td, &:last-child th": {
    border: 0,
  },
}));

function createData(Candidates, votes, shared) {
  return { Candidates, votes, shared };
}

const rows = [
  createData("John D. Mahama", 300, 45, 45),
  createData("Mahamudu Bawumia", 120, 27, 27),
  createData("Alan Chremantin", 100, 20, 20),
  createData("Abdul Hafis Mohammed", 25, 8, 8),
];

function VoteResults() {
  const mainContent = (
    <div className="flex-container   column gap-20 resultspage">
      <Card>
        <CardContent className="flex-container column gap-10">
          <div className="flex-container gap-5">
            <h4>Election Results Updates at</h4>
            <h4 style={{ color: "#12107A", fontWeight: "bold" }}>12:00 pm</h4>
          </div>
          <p>
            Collation still ongoing make sure to revisite againg for updates
          </p>
        </CardContent>
      </Card>

      <Card>
        <CardContent className="flex-container column gap-10">
          <div className="livecontainer gap-15 align-center flex-container">
            <div className="btnelements">Live Results</div>
            <div className="indicator"></div>
          </div>
          <div className="flex-container gap-20 resultsCard">
            <div className="flex-container column gap-20 " style={{width: { xs: `100%`, sm: `70%` } }} >
              <Card sx={{ width: { xs: 400, sm: 400 } }}>
                <CardContent sx={{ padding: 0 }}>
                  <center>
                    <p className="txtcoloryellow">PARLIAMENTARY VOTES</p>
                  </center>
                  <TableContainer
                    component={Paper}
                    sx={{ boxShadow: "none", width: { xs: `100%`, sm: 400 } }}
                  >
                    <Table
                      sx={{ width: { xs: `100%`, sm: 400 }, height: 493.63 }}
                      aria-label="customized table"
                    >
                      <TableHead>
                        <TableRow sx={{ backgroundColor: "#F7B329" }}>
                          <TableCell>Candidates</TableCell>
                          <TableCell align="right">Voted</TableCell>
                          <TableCell align="right">Shares%</TableCell>
                        </TableRow>
                      </TableHead>
                      <TableBody>
                        {rows.map((row) => (
                          <StyledTableRow key={`${row.Candidates}1`}>
                            <StyledTableCell component="th" scope="row">
                              {row.Candidates}
                            </StyledTableCell>
                            <StyledTableCell align="right">
                              {row.votes}
                            </StyledTableCell>
                            <StyledTableCell align="right">
                              {row.shared}
                            </StyledTableCell>
                          </StyledTableRow>
                        ))}
                      </TableBody>
                    </Table>
                  </TableContainer>
                </CardContent>
              </Card>
              <Card sx={{ width: { xs: 400, sm: 400 } }}>
                <CardContent sx={{ padding: 0 }}>
                  <center>
                    <p className="txtcoloryellow">PARLIAMENTARY VOTES</p>
                  </center>
                  <TableContainer
                    component={Paper}
                    sx={{ boxShadow: "none", width: { xs: `100%`, sm: 400 } }}
                  >
                    <Table
                      sx={{ width: { xs: `100%`, sm: 400 }, height: 493.63 }}
                      aria-label="customized table"
                    >
                      <TableHead>
                        <TableRow sx={{ backgroundColor: "#F7B329" }}>
                          <TableCell>Candidates</TableCell>
                          <TableCell align="right">Voted</TableCell>
                          <TableCell align="right">Shares%</TableCell>
                        </TableRow>
                      </TableHead>
                      <TableBody>
                        {rows.map((row) => (
                          <StyledTableRow key={`${row.Candidates}1`}>
                            <StyledTableCell component="th" scope="row">
                              {row.Candidates}
                            </StyledTableCell>
                            <StyledTableCell align="right">
                              {row.votes}
                            </StyledTableCell>
                            <StyledTableCell align="right">
                              {row.shared}
                            </StyledTableCell>
                          </StyledTableRow>
                        ))}
                      </TableBody>
                    </Table>
                  </TableContainer>
                </CardContent>
              </Card>
            </div>

            <div className="flex-container column gap-20" style={{width: { xs: `100%`, sm: `70%` } }}>
              <Card sx={{ width: { xs: 400, sm: 550 } }}>
                <CardMedia>
                  <img
                    src="/public/kumasimetro.png"
                    style={{ height: 300, minWidth: 250, objectFit: "contain" }}
                    className="mapimage"
                  />
                </CardMedia>
                <CardContent sx={{ padding: "20px 0px" }}>
                  <p style={{ fontSize: 15, textAlign: "center" }}>
                    MAP SHOWING VARIOUS POLLING STATIONS WON BY CANDIDATES
                  </p>
                </CardContent>
              </Card>

              <br />
              <Card sx={{ width: { xs: 400, sm: 550 } }}>
                <CardContent sx={{ padding: 0, display: 'flex',gap: 5 , flexDirection: 'column' }}>
                <p style={{padding:'10px 10px '}}>PRESIDENTIAL WIN MARGIN AS AT 12:00AM</p>
                  <div className="cumulativechart">
                    <CumulativeChart  />
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  );

  return <CustomDrawer mainContent={mainContent} />;
}

export default VoteResults;
