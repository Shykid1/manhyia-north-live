import { useEffect, useState } from 'react';
import { Box, Button, Card, CardHeader, TextField, Typography } from '@mui/material'
import CustomDrawer from "../../../components/Navbar/SideBar";
import './AgentInfo.css'

const AgentInfo = () => {
  const [selectedImage, setSelectedImage] = useState(null);
  const [imageUrl, setImageUrl] = useState(null);
  
  useEffect(() => {
    if (selectedImage) {
      setImageUrl(URL.createObjectURL(selectedImage));
    }
  }, [selectedImage]);

  const mainContent = (
    <div className="flex-container   column gap-20">
      <div>
        <Card sx={{maxWidth: 350, textAlign: "center", alignContent: "center"}}>
          <CardHeader 
            sx={{bgcolor: "#4B91EC", color: "#ffff"}} 
            title="AGENT INFORMATION"
          />
          <Typography variant='p' sx={{fontSize: 12, padding: 4}}>
            Enter the follwing details to create an Agent
          </Typography>
          <Box 
            component={"form"}
            sx={{
              '& .MuiTextField-root': { m: 1, width: '25ch' }
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
              <Box mt={2} textAlign="center" sx={{padding: 2}}>
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

            <Button 
              variant="contained"
              sx={{margin: 2}}
            >
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
            <Button 
              variant="contained"
              sx={{margin: 2}}
            >
              Create and Send to Agent
            </Button>
          </Box>
        </Card>

        <Card>

        </Card>
      </div>
    </div>
  )
  return <CustomDrawer mainContent={mainContent} />
}

export default AgentInfo
