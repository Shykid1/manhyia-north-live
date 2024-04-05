import {
  Box,
  Button,
  Card,
  CardHeader,
  TextField,
  Typography,
} from "@mui/material";
import { useState } from "react";
import CustomDrawer from "../../../components/Navbar/SideBar";
import Paliamentary from "../../Paliamentary";
import instance from "../../../utils/instance";

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
      console.error("Error creating camdidate", error);
    }
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
              name="bio"
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
              varient="contained"
              sx={{ margin: 2 }}
              type="submit"
              disabled={isLoading}
            >
              {isLoading ? "Creating Candidate..." : "Create Candidate"}
            </Button>
          </Box>
        </Card>
      </div>
    </div>
  );

  return <CustomDrawer mainContent={mainContent} />;
};

export default DashPaliamentary;
