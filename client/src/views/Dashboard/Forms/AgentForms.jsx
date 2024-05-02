import {
  Box,
  Button,
  Card,
  CardHeader,
  TextField,
  Table,
  TableBody,
  TableRow,
  TableCell,
  TableHead,
} from "@mui/material";
import { useState } from "react";
import CustomDrawer from "../../../components/Navbar/SideBar";
import SpringModal from "../../../components/modal";
import LiveGhanaMap from "../../../components/maps/LiveGhanamap";

function AgentForms() {
  const [showWarning, setShowWarning] = useState(false);
  const [hasSubmitted, setHasSubmitted] = useState(false);

  const handleSubmit = () => {
    // Perform your submit logic here
    setHasSubmitted(true);
    setShowWarning(true);
  };

  const presidential = [
    "John Dramani Mahama",
    "Dr. Mahamudu Bawumia",
    "Alan John Kwadwo Kyeremanten",
    "Nana Kwame Bediako",
  ];

  const mainContent = (
    <div
      className="flex-container column gap-20 fomscontainer"
      style={{ overflowX: "hidden" }}
    >
      <Box component={"form"} sx={{ width: "100%" }}>
        <Card sx={{ width: { xs: "100%", sm: "100%" }, boxShadow: "none" }}>
          <CardHeader
            sx={{
              bgcolor: "#4B91EC",
              color: "#ffff",
              fontSize: 12,
              width: "100%",
              // padding: 2,
            }}
            title="Provide the information below"
          />
          <Box
            sx={{
              "& .MuiTextField-root": {
                m: 1,
                width: { xs: "90%", sm: "97%" },
              },
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              paddingTop: 4,
              paddingBottom: 4,
            }}
          >
            <TextField
              id="outlined-electoralName-input"
              label="Electoral Name"
              type="text"
              placeholder="Electoral Name"
              multiline
              required
            />

            <TextField
              id="outlined-email-input"
              label="Electral Code"
              type="email"
              placeholder="Enter Electoral Code"
              multiline
              required
            />
            <TextField
              id="outlined-number-input"
              label="Polling Name"
              type="text"
              placeholder="Enter Polling Name"
              multiline
              required
            />
            <TextField
              id="outlined-polling-input"
              label="Number of Votes"
              type="text"
              placeholder="Enter Votes"
              multiline
              required
            />
          </Box>
        </Card>
        <Card sx={{ width: { xs: "100%", sm: "100%" }, boxShadow: "none" }}>
          <CardHeader
            sx={{
              bgcolor: "#4B91EC",
              color: "#ffff",
              fontSize: 12,
              width: "100%",
              // padding: 2,
            }}
            title="Enter Presidential Votes"
          />
          <Box
            sx={{
              "& .MuiTextField-root": {
                m: 1,
                width: { xs: "100%", sm: "100%" },
              },
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              paddingTop: 4,
              paddingBottom: 4,
            }}
          >
            <Table sx={{ width: "100%", height: 493.63 }} stickyHeader>
              <TableHead sx={{ backgroundColor: "#F7B329" }}>
                <TableRow>
                  <TableCell>Candidate Name</TableCell>
                  <TableCell align="center">Votes</TableCell>
                  <TableCell align="center">Percentage</TableCell>
                </TableRow>
              </TableHead>
              <TableBody>
                {presidential.map((candidate) => (
                  <TableRow key={candidate}>
                    <TableCell>
                      <TextField
                        id="outlined-electoralname-input"
                        type="text"
                        value={candidate}
                        disabled
                      />
                    </TableCell>
                    <TableCell>
                      <TextField
                        id="outlined-electoralname-input"
                        label="Votes"
                        type="text"
                        placeholder="Votes"
                        multiline
                        required
                      />
                    </TableCell>
                    <TableCell>
                      <TextField
                        id="outlined-electoralname-input"
                        label="percentage"
                        type="text"
                        placeholder="percentage"
                        multiline
                        required
                      />
                    </TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </Box>
        </Card>
        <Card sx={{ width: { xs: "100%", sm: "100%" }, boxShadow: "none" }}>
          <CardHeader
            sx={{
              bgcolor: "#4B91EC",
              color: "#ffff",
              fontSize: 12,
              width: "100%",
              // padding: 2,
            }}
            title="Enter Palimentary Votes"
          />
          <Box
            sx={{
              "& .MuiTextField-root": {
                m: 1,
                width: { xs: "100%", sm: "100%" },
              },
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              paddingTop: 4,
              paddingBottom: 4,
            }}
          >
            <Table sx={{ width: "100%", height: 493.63 }} stickyHeader>
              <TableHead sx={{ backgroundColor: "#F7B329" }}>
                <TableRow>
                  <TableCell>Candidate Name</TableCell>
                  <TableCell align="center">Votes</TableCell>
                  <TableCell align="center">Percentage</TableCell>
                </TableRow>
              </TableHead>
              <TableBody>
                <TableRow>
                  <TableCell>Abdul Hafis Mohammed</TableCell>
                  <TableCell>
                    <TextField
                      id="outlined-electoralame-input"
                      label="Votes"
                      type="text"
                      placeholder="Votes"
                      multiline
                      required
                    />
                  </TableCell>
                  <TableCell>
                    <TextField
                      id="outlined-electoralame-input"
                      label="percentage"
                      type="text"
                      placeholder="percentage"
                      multiline
                      required
                    />
                  </TableCell>
                </TableRow>
                <TableRow>
                  <TableCell>Abdul Hafis Mohammed</TableCell>
                  <TableCell>
                    <TextField
                      id="outlined-electoralame-input"
                      label="Votes"
                      type="text"
                      placeholder="Votes"
                      multiline
                      required
                    />
                  </TableCell>
                  <TableCell>
                    <TextField
                      id="outlined-electoralame-input"
                      label="percentage"
                      type="text"
                      placeholder="percentage"
                      multiline
                      required
                    />
                  </TableCell>
                </TableRow>
                <TableRow>
                  <TableCell>Abdul Hafis Mohammed</TableCell>
                  <TableCell>
                    <TextField
                      id="outlined-electoralame-input"
                      label="Votes"
                      type="text"
                      placeholder="Votes"
                      multiline
                      required
                    />
                  </TableCell>
                  <TableCell>
                    <TextField
                      id="outlined-electoralame-input"
                      label="percentage"
                      type="text"
                      placeholder="percentage"
                      multiline
                      required
                    />
                  </TableCell>
                </TableRow>
              </TableBody>
            </Table>
          </Box>
        </Card>
        <Button
          variant="contained"
          sx={{ margin: 2, width: "97% " }}
          onClick={handleSubmit}
        >
          Upload
        </Button>
        <div style={{ visibility: "hidden" }}>
          <SpringModal showWarning={showWarning} />
        </div>
      </Box>

      <Card sx={{ width: { xs: "100%", sm: "100%" }, boxShadow: "none" }}>
        <CardHeader
          sx={{
            bgcolor: "#4B91EC",
            color: "#ffff",
            fontSize: 12,
            width: "100%",
            // padding: 2,
          }}
          title="Feedback"
        />
        <Box
          component={"form"}
          sx={{
            "& .MuiTextField-root": {
              m: 1,
              width: { xs: "90%", sm: "97%" },
            },
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            paddingTop: 4,
            paddingBottom: 4,
          }}
        >
          <TextField
            id="outlined-email-input"
            label="Agent Name"
            type="text"
            placeholder="Agent Name"
            multiline
            required
          />
          <TextField
            id="outlined-remarks-input"
            label="Remarks"
            type="text"
            placeholder="Remarks"
            multiline
            required
          />

          <TextField
            id="outlined-polling-input"
            label="Challenges"
            type="text"
            placeholder="Challenges"
            multiline
            required
          />
          <Button variant="contained" sx={{ margin: 2, width: "97% " }}>
            submit
          </Button>
        </Box>
      </Card>

      <LiveGhanaMap
        AhafoRegion={200}
        AshantiRegion={50}
        CentralRegion={100}
        EasternRegion={15}
        NorthRegion={150}
        UpperEast={78}
        UpperWest={45}
        AccraTema={90}
        WesternRegion={279}
        voltaRegion={9}
      />
    </div>
  );

  return <CustomDrawer mainContent={mainContent} />;
}

export default AgentForms;
