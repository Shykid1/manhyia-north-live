import {
  Box,
  Button,
  Card,
  CardHeader,
  TextField,
  Typography,
} from "@mui/material";
import CustomDrawer from "../../../components/Navbar/SideBar";
import Paliamentary from "../../Paliamentary";

const DashPaliamentary = () => {
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
          >
            <input
              type="file"
              accept="image/*"
              id="select-image"
              name="image"
              style={{ display: "none" }}
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
            />
            <TextField
              id="outlined-age-input"
              label="Age"
              type="text"
              name="age"
              placeholder="Enter Age"
              required
            />
            <TextField
              id="outlined-party-input"
              label="Political Party"
              type="text"
              name="party"
              placeholder="Enter Political Party"
              required
            />
            <TextField
              id="outlined-bio-input"
              label="BIO"
              type="text"
              name="bio"
              placeholder="Enter Biography"
              multiline
              required
            />
            <TextField
              id="outlined-manifesto-input"
              label="Manifesto"
              type="text"
              name="manifesto"
              placeholder="Enter Manifesto"
              multiline
              required
            />
            <TextField
              id="outlined-candidacy-input"
              label="Candidacy"
              type="text"
              name="candidacy"
              placeholder="Enter Candidate Type"
              multiline
              required
            />
          </Box>
        </Card>
      </div>
    </div>
  );

  return <CustomDrawer mainContent={mainContent} />;
};

export default DashPaliamentary;
