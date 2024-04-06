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
import { useEffect, useState } from "react";
import CustomDrawer from "../../../components/Navbar/SideBar";
import instance from "../../../utils/instance";
import fetchCandidates from "../../../utils/fetch";

const DashPaliamentary = () => {
  const [isLoading, setIsLoading] = useState(false);

  const [formData, setFormData] = useState({
    image: "",
    fullname: "",
    party: "",
    age: "",
    bio: "",
    manifesto: "",
    candidacy: "",
  });

  const [candidates, setCandidates] = useState([]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsLoading(true);
    try {
      const response = await instance.post("/candidate/create", formData);
      console.log(response.data);
      alert("Candidate created successfully");
    } catch (error) {
      console.error("Error creating candidate", error);
      alert("Error creating candidate");
    } finally {
      setIsLoading(false);
    }
  };

  //Get all Candidates
  useEffect(() => {
    fetchCandidates(setCandidates);
  }, []);

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

  const [page, setPage] = useState(0);
  const [rowsPerPage, setRowsPerPage] = useState(7);
  const [searchQuery, setSearchQuery] = useState("");

  const emptyRows =
    page > 0 ? Math.max(0, (1 + page) * rowsPerPage - candidates.length) : 0;

  const handleChangePage = (event, newPage) => {
    setPage(newPage);
  };

  const handleChangeRowsPerPage = (event) => {
    setRowsPerPage(parseInt(event.target.value, 10));
    setPage(0);
  };

  const mainContent = (
    <div className="flex-container column gap-20">
      <div className="flex-container space-between gap-20">
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
            title="PARLIAMENTARY INFORMATION"
          />
          <Typography variant="p" sx={{ margin: 2 }}>
            Enter the follwing details to create a parliamentary candidate
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
              type="file"
              accept="image/*"
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
              id="outlined-fullname-input"
              label="Fullname"
              type="text"
              name="fullname"
              placeholder="Enter Fullname"
              required
              onChange={handleChange}
            />
            <TextField
              id="outlined-age-input"
              label="Age"
              type="text"
              name="age"
              placeholder="Enter Age"
              required
              onChange={handleChange}
            />
            <TextField
              id="outlined-party-input"
              label="Political Party"
              type="text"
              name="party"
              placeholder="Enter Political Party"
              required
              onChange={handleChange}
            />
            <TextField
              id="outlined-bio-input"
              label="BIO"
              type="text"
              name="biography"
              placeholder="Enter Biography"
              multiline
              required
              onChange={handleChange}
            />
            <TextField
              id="outlined-manifesto-input"
              label="Manifesto"
              type="text"
              name="manifesto"
              placeholder="Enter Manifesto"
              multiline
              required
              onChange={handleChange}
            />
            <TextField
              id="outlined-candidacy-input"
              label="Candidacy"
              type="text"
              name="candidacy"
              placeholder="Enter Candidate Type"
              multiline
              required
              onChange={handleChange}
            />
            <Button
              variant="contained"
              sx={{ margin: 2 }}
              type="submit"
              disabled={isLoading}
            >
              {isLoading ? "Creating Candidate..." : "Create Candidate"}
            </Button>
          </Box>
        </Card>

        <Card
          sx={{
            textAlign: "center",
            alignContent: "center",
            width: { xs: 450, m: 680 },
            overflow: "scroll",
            padding: 3,
          }}
        >
          <CardHeader
            sx={{
              bgcolor: "#4B91EC",
              color: "#ffff",
              fontSize: 12,
              padding: 2,
            }}
            title="Presidential Candidates"
          />
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
            <TableHead sx={{ backgroundColor: "#f7b329" }}>
              <TableRow>
                <TableCell>Full Name</TableCell>
                <TableCell>Party</TableCell>
                <TableCell>Age</TableCell>
                <TableCell>Manifesto</TableCell>
                <TableCell>Biography</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {(rowsPerPage > 0
                ? candidates.slice(
                    page * rowsPerPage,
                    page * rowsPerPage + rowsPerPage
                  )
                : candidates
              ).map((candidate) => (
                <TableRow key={candidate._id}>
                  <TableCell>{candidate.fullname}</TableCell>
                  <TableCell>{candidate.party}</TableCell>
                  <TableCell>{candidate.age}</TableCell>
                  <TableCell>{candidate.manifesto}</TableCell>
                  <TableCell>{candidate.biography}</TableCell>
                </TableRow>
              ))}
              {emptyRows > 0 && (
                <TableRow syle={{ height: 53 * emptyRows }}>
                  <TableCell colSpan={5} />
                </TableRow>
              )}
            </TableBody>
            <TableFooter>
              <TableRow>
                <TablePagination
                  rowsPerPageOptions={[7, 10, 25, { label: "All", value: -1 }]}
                  colSpan={5}
                  //count={filteredRows.length}
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
            width: { xs: 450, m: 680 },
            overflow: "scroll",
            padding: 3,
          }}
        >
          <CardHeader
            sx={{
              bgcolor: "#4B91EC",
              color: "#ffff",
              fontSize: 12,
              padding: 2,
            }}
            title="Parliamentary Candidates"
          />
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
            <TableHead sx={{ backgroundColor: "#f7b329" }}>
              <TableRow>
                <TableCell>Full Name</TableCell>
                <TableCell>Party</TableCell>
                <TableCell>Age</TableCell>
                <TableCell>Manifesto</TableCell>
                <TableCell>Biography</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {(rowsPerPage > 0
                ? candidates.slice(
                    page * rowsPerPage,
                    page * rowsPerPage + rowsPerPage
                  )
                : candidates
              ).map((candidate) => (
                <TableRow key={candidate._id}>
                  <TableCell>{candidate.fullname}</TableCell>
                  <TableCell>{candidate.party}</TableCell>
                  <TableCell>{candidate.age}</TableCell>
                  <TableCell>{candidate.manifesto}</TableCell>
                  <TableCell>{candidate.biography}</TableCell>
                </TableRow>
              ))}
              {emptyRows > 0 && (
                <TableRow syle={{ height: 53 * emptyRows }}>
                  <TableCell colSpan={5} />
                </TableRow>
              )}
            </TableBody>
            <TableFooter>
              <TableRow>
                <TablePagination
                  rowsPerPageOptions={[7, 10, 25, { label: "All", value: -1 }]}
                  colSpan={5}
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
    </div>
  );

  return <CustomDrawer mainContent={mainContent} />;
};

export default DashPaliamentary;
