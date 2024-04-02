import { useState } from "react";
import {
  Box,
  Button,
  Card,
  CardHeader,
  IconButton,
  InputBase,
  Paper,
  Table,
  TableBody,
  TableCell,
  TableFooter,
  TableHead,
  TablePagination,
  TableRow,
  TextField,
  Typography,
  useTheme,
} from "@mui/material";
import SearchIcon from "@mui/icons-material/Search";
import FirstPageIcon from "@mui/icons-material/FirstPage";
import LastPageIcon from "@mui/icons-material/LastPage";
import KeyboardArrowLeft from "@mui/icons-material/KeyboardArrowLeft";
import KeyboardArrowRight from "@mui/icons-material/KeyboardArrowRight";
import PropTypes from "prop-types";
import CumulativeChart from "../../../components/charts/CumulativeChart";
import CustomDrawer from "../../../components/Navbar/SideBar";
import instance from "./instance";
import "./AgentInfo.css";

const AgentInfo = () => {
  const [formData, setFormData] = useState({
    image: "",
    firstname: "",
    lastname: "",
    othername: "",
    email: "",
    phone: "",
    pollingcode: "",
    password: "",
    role: "Agent",
  });
  const [generatedPasword, setGeneratedPassword] = useState("");
  const [isLoading, setIsLoading] = useState(false);

  function generateRandomPassword() {
    const characters =
      "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";
    const passwordLength = 10;
    let password = "";

    for (let i = 0; i < passwordLength; i++) {
      const randomIndex = Math.floor(Math.random() * characters.length);
      password += characters.charAt(randomIndex);
    }

    return password;
  }

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
    handleGeneratePassword();
  };

  const handleGeneratePassword = () => {
    const newPassword = generateRandomPassword();
    setGeneratedPassword(newPassword);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsLoading(true);

    try {
      const response = await instance.post("/auth/register/agent", formData);

      console.log(response.data);
      alert("Agent created successfully");
      setFormData({
        image: "",
        firstname: "",
        lastname: "",
        othername: "",
        email: "",
        password: "",
        phone: "",
        pollingcode: "",
      });
    } catch (error) {
      console.error("Error creating product:", error);
      alert("Error creating agent");
    } finally {
      setIsLoading(false);
    }
  };

  function TablePaginationActions(props) {
    const theme = useTheme();
    const { count, page, rowsPerPage, onPageChange } = props;

    const handleFirstPageButtonClick = (event) => {
      onPageChange(event, 0);
    };

    const handleBackButtonClick = (event) => {
      onPageChange(event, page - 1);
    };

    const handleNextButtonClick = (event) => {
      onPageChange(event, page + 1);
    };

    const handleLastPageButtonClick = (event) => {
      onPageChange(event, Math.max(0, Math.ceil(count / rowsPerPage) - 1));
    };

    return (
      <Box sx={{ flexShrink: 0, ml: 2.5 }}>
        <IconButton
          onClick={handleFirstPageButtonClick}
          disabled={page === 0}
          aria-label="first page"
        >
          {theme.direction === "rtl" ? <LastPageIcon /> : <FirstPageIcon />}
        </IconButton>
        <IconButton
          onClick={handleBackButtonClick}
          disabled={page === 0}
          aria-label="previous page"
        >
          {theme.direction === "rtl" ? (
            <KeyboardArrowRight />
          ) : (
            <KeyboardArrowLeft />
          )}
        </IconButton>
        <IconButton
          onClick={handleNextButtonClick}
          disabled={page >= Math.ceil(count / rowsPerPage) - 1}
          aria-label="next page"
        >
          {theme.direction === "rtl" ? (
            <KeyboardArrowLeft />
          ) : (
            <KeyboardArrowRight />
          )}
        </IconButton>
        <IconButton
          onClick={handleLastPageButtonClick}
          disabled={page >= Math.ceil(count / rowsPerPage) - 1}
          aria-label="last page"
        >
          {theme.direction === "rtl" ? <FirstPageIcon /> : <LastPageIcon />}
        </IconButton>
      </Box>
    );
  }

  TablePaginationActions.propTypes = {
    count: PropTypes.number.isRequired,
    onPageChange: PropTypes.func.isRequired,
    page: PropTypes.number.isRequired,
    rowsPerPage: PropTypes.number.isRequired,
  };

  function createData(name, email, phone, pollingStation, pollingCode) {
    return { name, email, phone, pollingStation, pollingCode };
  }

  const rows = [
    createData(
      "Abass Sarki",
      "abcd@example.com",
      "0123456789",
      "Manhyia",
      "ABCD1234"
    ),
    createData(
      "Abass Sarki",
      "abcd@example.com",
      "0123456789",
      "Manhyia",
      "ABCD1234"
    ),
    createData(
      "Abass Sarki",
      "abcd@example.com",
      "0123456789",
      "Manhyia",
      "ABCD1234"
    ),
    createData(
      "Abass Sarki",
      "abcd@example.com",
      "0123456789",
      "Manhyia",
      "ABCD1234"
    ),
    createData(
      "Abass Sarki",
      "abcd@example.com",
      "0123456789",
      "Manhyia",
      "ABCD1234"
    ),
    createData(
      "Abass Sarki",
      "abcd@example.com",
      "0123456789",
      "Manhyia",
      "ABCD1234"
    ),
    createData(
      "Abass Sarki",
      "abcd@example.com",
      "0123456789",
      "Manhyia",
      "ABCD1234"
    ),
    createData(
      "Abass Sarki",
      "abcd@example.com",
      "0123456789",
      "Manhyia",
      "ABCD1234"
    ),
    createData(
      "Abass Sarki",
      "abcd@example.com",
      "0123456789",
      "Manhyia",
      "ABCD1234"
    ),
    createData(
      "Yussif Yahuza",
      "abcd@example.com",
      "0123456789",
      "Manhyia",
      "ABCD1234"
    ),
  ];

  const [page, setPage] = useState(0);
  const [rowsPerPage, setRowsPerPage] = useState(7);
  const [searchQuery, setSearchQuery] = useState("");

  const emptyRows =
    page > 0 ? Math.max(0, (1 + page) * rowsPerPage - rows.length) : 0;

  const handleChangePage = (event, newPage) => {
    setPage(newPage);
  };

  const handleChangeRowsPerPage = (event) => {
    setRowsPerPage(parseInt(event.target.value, 10));
    setPage(0);
  };

  const filteredRows = rows.filter((row) =>
    row.name.toLowerCase().includes(searchQuery.toLowerCase())
  );

  const mainContent = (
    <div className="flex-container column gap-20 agentInfo">
      <div className="flex-container space-between agentInfo gap-20">
        <Card
          sx={{
            textAlign: "center",
            alignContent: "center",
            width: { xs: 450, sm: 400 },
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
          }}
        >
          <CardHeader
            sx={{
              bgcolor: "#4B91EC",
              color: "#ffff",
              fontSize: 12,
              padding: 2,
            }}
            title="AGENT INFORMATION"
          />
          <Typography variant="p" sx={{ margin: 2 }}>
            Enter the follwing details to create an Agent
          </Typography>
          <Box
            component={"form"}
            sx={{
              "& .MuiTextField-root": {
                m: 1,
                width: { xs: "40ch", sm: "35ch" },
              },
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
            }}
            onSubmit={handleSubmit}
          >
            <input
              accept="image/*"
              type="file"
              id="select-image"
              name="image"
              style={{ display: "none" }}
              onChange={handleChange}
            />
            <label htmlFor="select-image">
              <Button
                variant="contained"
                color="primary"
                component="span"
                sx={{ margin: 2 }}
              >
                Upload Image
              </Button>
            </label>
            <TextField
              id="outlined-firstname-input"
              label="Firstname"
              type="text"
              name="firstname"
              placeholder="Enter Firstname"
              required
              onChange={handleChange}
            />
            <TextField
              id="outlined-lastname-input"
              label="Lastname"
              type="text"
              name="lastname"
              placeholder="Enter Lastname"
              required
              onChange={handleChange}
            />
            <TextField
              id="outlined-othername-input"
              label="Othername"
              type="text"
              name="othername"
              placeholder="Enter Othername"
              onChange={handleChange}
            />
            <TextField
              id="outlined-email-input"
              label="Email"
              type="email"
              name="email"
              placeholder="Enter Email"
              required
              onChange={handleChange}
            />
            <TextField
              id="outlined-number-input"
              label="Phone-Number"
              type="text"
              name="phone"
              placeholder="Enter Phone-Number"
              required
              onChange={handleChange}
            />
            <TextField
              id="outlined-polling-input"
              label="Polling-Station Code"
              type="text"
              name="pollingcode"
              placeholder="Enter Polling-Station Code"
              required
              onChange={handleChange}
            />

            <Button
              variant="contained"
              sx={{ margin: 2 }}
              onClick={handleGeneratePassword}
            >
              Generate Password
            </Button>

            <TextField
              id="outlined-password-input"
              label="Password"
              type="text"
              value={generatedPasword}
              name="password"
              placeholder="Enter Password"
              readOnly
              required
              onChange={handleChange}
            />
            <Button
              variant="contained"
              sx={{ margin: 2 }}
              type="submit"
              disabled={isLoading}
            >
              {isLoading ? "Creating Agent..." : "Create and Send to Agent"}
            </Button>
          </Box>
        </Card>

        <Card
          sx={{
            textAlign: "center",
            alignContent: "center",
            width: { xs: 450, sm: 680 },
            overflow: "scroll",
            padding: 3,
          }}
        >
          <Paper
            component="form"
            sx={{
              p: "2px 4px",
              display: "flex",
              alignItems: "center",
              backgroundColor: "#efefef",
              width: "100%",
            }}
          >
            <InputBase
              sx={{
                ml: 1,
                flex: 1,
                backgroundColor: "#efefef",
                padding: "7px",
                borderRadius: "5px",
              }}
              placeholder="Search"
              inputProps={{ "aria-label": "search" }}
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
            />
            <IconButton
              type="button"
              sx={{ p: "10px", boxShadow: "none" }}
              aria-label="search"
            >
              <SearchIcon />
            </IconButton>
          </Paper>
          <Table
            sx={{ width: "100%", height: 493.63 }}
            stickyHeader
            aria-label="custom pagination table"
          >
            <TableHead sx={{ backgroundColor: "#F7B329" }}>
              <TableRow>
                <TableCell>Name</TableCell>
                <TableCell>Email</TableCell>
                <TableCell>Phone Number</TableCell>
                <TableCell>Polling Staion</TableCell>
                <TableCell>Polling Code</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {(rowsPerPage > 0
                ? filteredRows.slice(
                    page * rowsPerPage,
                    page * rowsPerPage + rowsPerPage
                  )
                : filteredRows
              ).map((row, index) => (
                <TableRow key={index}>
                  <TableCell>{row.name}</TableCell>
                  <TableCell>{row.email}</TableCell>
                  <TableCell>{row.phone}</TableCell>
                  <TableCell>{row.pollingStation}</TableCell>
                  <TableCell>{row.pollingCode}</TableCell>
                </TableRow>
              ))}
              {emptyRows > 0 && (
                <TableRow style={{ height: 53 * emptyRows }}>
                  <TableCell colSpan={5} />
                </TableRow>
              )}
            </TableBody>
            <TableFooter>
              <TableRow>
                <TablePagination
                  rowsPerPageOptions={[7, 10, 25, { label: "All", value: -1 }]}
                  colSpan={5}
                  count={filteredRows.length}
                  rowsPerPage={rowsPerPage}
                  page={page}
                  onPageChange={handleChangePage}
                  onRowsPerPageChange={handleChangeRowsPerPage}
                  ActionsComponent={TablePaginationActions}
                />
              </TableRow>
            </TableFooter>
          </Table>
        </Card>
      </div>
      <div className="flex-container space-between agentInfo gap-20">
        <Card
          sx={{
            textAlign: "center",
            alignContent: "center",
            width: { xs: 450, sm: 500 },
            overflowX: "scroll",
          }}
          className="Tablefooter"
        >
          <CardHeader
            sx={{
              bgcolor: "#4B91EC",
              color: "#ffff",
              fontSize: 12,
              width: "100%",
              // padding: 2,
            }}
            title="Uploaded Results from Agent"
          />
          <Table
            sx={{
              width: "100%",
              height: 493.63,
            }}
            stickyHeader
            aria-label="custom pagination table"
          >
            <TableHead sx={{ backgroundColor: "#F7B329" }}>
              <TableRow>
                <TableCell>Name</TableCell>
                <TableCell>Email</TableCell>
                <TableCell>Phone Number</TableCell>
                <TableCell>Polling Staion</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {(rowsPerPage > 0
                ? rows.slice(
                    page * rowsPerPage,
                    page * rowsPerPage + rowsPerPage
                  )
                : rows
              ).map((row, index) => (
                <TableRow key={index}>
                  <TableCell>{row.name}</TableCell>
                  <TableCell>{row.email}</TableCell>
                  <TableCell>{row.phone}</TableCell>
                  <TableCell>{row.pollingStation}</TableCell>
                </TableRow>
              ))}
              {emptyRows > 0 && (
                <TableRow style={{ height: 53 * emptyRows }}>
                  <TableCell colSpan={6} />
                </TableRow>
              )}
            </TableBody>
            <TableFooter className="Tablefooter">
              <TableRow className="Tablefooter">
                <TablePagination
                  className="Tablefooter"
                  rowsPerPageOptions={[7, 10, 25, { label: "All", value: -1 }]}
                  colSpan={4}
                  count={rows.length}
                  rowsPerPage={rowsPerPage}
                  page={page}
                  slotProps={{
                    select: {
                      inputProps: {
                        "aria-label": "rows per page",
                      },
                      native: true,
                    },
                  }}
                  onPageChange={handleChangePage}
                  onRowsPerPageChange={handleChangeRowsPerPage}
                  ActionsComponent={TablePaginationActions}
                />
              </TableRow>
            </TableFooter>
          </Table>
        </Card>

        <Card
          sx={{
            textAlign: "center",
            alignContent: "center",
            width: { xs: 450, sm: 570 },
            display: "flex",
            flexDirection: "column",
            justifyContent: "space-between",
            paddingBottom: 5,
          }}
        >
          <CardHeader
            sx={{
              bgcolor: "#4B91EC",
              color: "#ffff",
              fontSize: 12,
              width: "100%",
              // padding: 2,
            }}
            title="Votes Acceleration Graph"
          />
          <Box
            component={"form"}
            sx={{
              "& .MuiTextField-root": {
                m: 1,
                width: { xs: "40ch", sm: "35ch" },
              },
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
            }}
          >
            <div className="cumulativechart">
              <CumulativeChart />
            </div>
          </Box>
        </Card>
      </div>
    </div>
  );
  return <CustomDrawer mainContent={mainContent} />;
};

export default AgentInfo;
