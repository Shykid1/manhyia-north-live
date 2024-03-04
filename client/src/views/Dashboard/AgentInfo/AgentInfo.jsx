import { useEffect, useState } from "react";
import {
  Box,
  Button,
  Card,
  CardContent,
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
import CustomDrawer from "../../../components/Navbar/SideBar";
import "./AgentInfo.css";

const AgentInfo = () => {
  const [selectedImage, setSelectedImage] = useState(null);
  const [imageUrl, setImageUrl] = useState(null);

  useEffect(() => {
    if (selectedImage) {
      setImageUrl(URL.createObjectURL(selectedImage));
    }
  }, [selectedImage]);

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

  const emptyRows =
    page > 0 ? Math.max(0, (1 + page) * rowsPerPage - rows.length) : 0;

  const handleChangePage = (event, newPage) => {
    setPage(newPage);
  };

  const handleChangeRowsPerPage = (event) => {
    setRowsPerPage(parseInt(event.target.value, 10));
    setPage(0);
  };

  const mainContent = (
    <div className="flex-container gap-20 agentInfo">
      <Card sx={{ width: "100%" }}>
        <CardContent
          sx={{
            display: "flex",
            flexDirection: "row",
            flexWrap: "wrap",
            width: "100%",
            paddingLeft: 3,
            paddingRight: 3,
            gap: 3,
          }}
          className="flex-container"
        >
          <Card
            sx={{
              textAlign: "center",
              alignContent: "center",
              width: { xs: 400, sm: 400 },
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
                padding: 4,
              }}
              title="AGENT INFORMATION"
            />
            <Typography variant="p" sx={{}}>
              Enter the follwing details to create an Agent
            </Typography>
            <Box
              component={"form"}
              sx={{
                "& .MuiTextField-root": { m: 1, width: "25ch" },
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
              }}
            >
              <input
                accept="image/*"
                type="file"
                id="select-image"
                style={{ display: "none" }}
                onChange={(e) => setSelectedImage(e.target.files[0])}
              />
              {imageUrl && selectedImage && (
                <Box mt={2} textAlign="center" sx={{ padding: 2 }}>
                  <img src={imageUrl} alt={selectedImage.name} height="100px" />
                </Box>
              )}
              <label htmlFor="select-image">
                <Button variant="contained" color="primary" component="span">
                  Upload Image
                </Button>
              </label>
              <TextField
                id="outlined-firstname-input"
                label="Firstname"
                type="text"
                placeholder="Enter Firstname"
                multiline
                required
              />
              <TextField
                id="outlined-lastname-input"
                label="Lastname"
                type="text"
                placeholder="Enter Lastname"
                multiline
                required
              />
              <TextField
                id="outlined-email-input"
                label="Email"
                type="email"
                placeholder="Enter Email"
                multiline
                required
              />
              <TextField
                id="outlined-number-input"
                label="Phone-Number"
                type="text"
                placeholder="Enter Phone-Number"
                multiline
                required
              />
              <TextField
                id="outlined-polling-input"
                label="Polling-Station Code"
                type="text"
                placeholder="Enter Polling-Station Code"
                multiline
                required
              />

              <Button variant="contained" sx={{ margin: 2 }}>
                Generate Password
              </Button>

              <TextField
                id="outlined-password-input"
                label="Password"
                type="password"
                placeholder="Enter Password"
                multiline
                required
              />
              <Button variant="contained" sx={{ margin: 2 }}>
                Create and Send to Agent
              </Button>
            </Box>
          </Card>

          <Card
            sx={{
              textAlign: "center",
              alignContent: "center",
              width: { xs: 400, sm: 550 },
            }}
          >
            <Paper
              component="form"
              sx={{
                p: "2px 4px",
                display: "flex",
                alignItems: "center",
              }}
            >
              <InputBase
                sx={{ ml: 1, flex: 1 }}
                placeholder="Search"
                inputProps={{ "aria-label": "search" }}
              />
              <IconButton type="button" sx={{ p: "10px" }} aria-label="search">
                <SearchIcon />
              </IconButton>
            </Paper>

            <Table
              sx={{ width: { xs: `100%`, sm: "100%" }, height: 493.63 }}
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
                    <TableCell>{row.pollingCode}</TableCell>
                  </TableRow>
                ))}
                {emptyRows > 0 && (
                  <TableRow style={{ height: 53 * emptyRows }}>
                    <TableCell colSpan={6} />
                  </TableRow>
                )}
              </TableBody>
              <TableFooter sx={{ width: "100%" }}>
                <TableRow sx={{ width: "100%" }}>
                  <TablePagination
                    rowsPerPageOptions={[
                      7,
                      10,
                      25,
                      { label: "All", value: -1 },
                    ]}
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
        </CardContent>
      </Card>
    </div>
  );
  return <CustomDrawer mainContent={mainContent} />;
};

export default AgentInfo;
