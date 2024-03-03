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
// import DoughnutChart from "../../components/charts/DoughnutChart";
import CumulativeChart from "../../components/charts/CumulativeChart";
import AvatarList from "../../components/Avatar/AvatarList";
import { Link } from "react-router-dom";

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
  createData("Frozen yoghurt", 159, 6.0, 24),
  createData("Ice cream sandwich", 237, 9.0, 37),
  createData("Ice cream sandwich", 237, 9.0, 37),
  createData("Abdul Hafis Mohammed", 262, 16.0, 24),
  createData("Eclair", 262, 16.0, 24),
];


function DashboardContent() {
  return (
    <>
      <div className="flex-container gap-20 maincontentbody">
        <div className="flex-container column gap-15 center">
          <Card sx={{ width: { xs: "100%", sm: 400 } }}>
            <CardContent sx={{ padding: 0 }}>
              <center>
                <p className="txtcoloryellow">PRESIDENTIAL VOTES</p>
              </center>
              <TableContainer component={Paper} sx={{ boxShadow: "none" }}>
                <Table
                  sx={{ width: { xs: `100%`, sm: 400 }, height: 493.63 }}
                  aria-label="customized table"
                >
                  <TableHead>
                    <TableRow sx={{ backgroundColor: "#F7B329" }}>
                      <TableCell>Candidates</TableCell>
                      <TableCell align="right">Voted</TableCell>
                      <TableCell align="right">Shared</TableCell>
                    </TableRow>
                  </TableHead>
                  <TableBody>
                    {rows.map((row) => (
                      <StyledTableRow key={row.Candidates}>
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
          <Card sx={{ width: { xs:"100%", sm: 400 } }}>
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

        <Card sx={{ width: { xs: 300, sm: `70%` } }}>
          <CardContent>
            <div className="flex-container column gap-10">
              <div className="flex-container gap-10 mapsdisplay">
                <div
                  className="column flex-container gap-10 mapcards"
                  style={{ minWidth: 250 }}
                >
                  <Card>
                    <CardMedia>
                      <img src="kumasimetro.png" style={{height: 120, minWidth: 250 ,objectFit:'contain' }} className="mapimage" />
                    </CardMedia>
                    <CardContent>
                      <p style={{fontSize: 12, textAlign: 'center'}}>A map showing  submitted votes in various polling stations</p>
                    </CardContent>
                  </Card>
                  <Card>
                  <CardMedia>
                      <img src="kumasimap.png" style={{height: 120, minWidth: 250 ,objectFit:'contain' }} className="mapimage" />
                    </CardMedia>
                    <CardContent>
                      <center>
                      <p>KUMASI DEMOGRAPGY</p>
                        </center>
                    </CardContent>
                  </Card> 
                  <Card>
                  <CardMedia sx={{ height: 120 }} image="kumasimap.png"   />
                    <CardContent>
                    <center>
                      <p>KUMASI DEMOGRAPGY</p>
                        </center>
                    </CardContent>
                  </Card>
                  
                </div>
                <Card sx={{ width: { xs: `100%`, sm: `70%` } }}>
                  <CardContent className="flex-container column gap-10">
                    <div className="headlines space-between flex-container">
                      <p style={{fontSize:12}}>Report from polling station</p>
                      <Link to={'/view-reports'} style={{fontSize: 12}}>
                        View all
                      </Link>
                    </div>
                    <br />
                    <div >
                    <AvatarList avatarimage={'Bawumia.jpeg'} avatarname={'Bawimia'} avatarmessage={'Reporting live from Manhyia south polling station....'}/>
                  <AvatarList avatarimage={'Bawumia.jpeg'} avatarname={'Bawimia'} avatarmessage={'Reporting live from Manhyia south polling station....'}/>
                  <AvatarList avatarimage={'Bawumia.jpeg'} avatarname={'Bawimia'} avatarmessage={'Reporting live from Manhyia south polling station....'}/>
                  <AvatarList avatarimage={'Bawumia.jpeg'} avatarname={'Bawimia'} avatarmessage={'Reporting live from Manhyia south polling station....'}/>
                    </div>
                  
                  </CardContent>
                </Card>
              </div>
              <div className="cumulativechart">

              <CumulativeChart/>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
      {/* <br />
      <br />
      <br />
        <Footer/> */}
    </>
  );
}

export default DashboardContent;
