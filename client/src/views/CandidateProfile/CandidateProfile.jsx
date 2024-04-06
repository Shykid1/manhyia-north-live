import { Box, Card, CardContent, CardHeader, Typography } from "@mui/material";
import { useState, useEffect } from "react";
import fetchCandidates from "../../utils/fetch";

const CandidateProfile = () => {
  const [candidate, setCandidate] = useState();

  useEffect(() => {
    fetchCandidates(setCandidate);
  }, []);
  return (
    <Card
      sx={{
        width: "100%",
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        textAlign: "center",
      }}
    >
      <CardHeader
        sx={{
          width: "100%",
          color: "white",
          bgcolor: "#4B91EC",
        }}
        title="Candidate Profile"
      />
      <Box
        element="div"
        sx={{
          width: { xs: 400, md: "100%" },
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "center",
          padding: "20px",
        }}
      >
        <div className="recorddetail flex-container column ">
          <img
            src={candidate.image}
            alt={candidate.fullname}
            className="knowthemimg margin-bottom-10"
          />
          <h4>{candidate.fullname} </h4>
          <h5>{candidate.party}</h5>
          <h5>{candidate.age}</h5>
        </div>
      </Box>
      <Box
        sx={{
          width: { xs: 400, md: "100%" },
          textAlign: "justify",
          alignItems: "center",
          padding: "20px",
        }}
      >
        <Typography variant="p" sx={{ textAlign: "justify", lineHeight: 2 }}>
          {candidate.biography}
        </Typography>
      </Box>

      <Card
        sx={{
          bgcolor: "#4B91EC",
          width: { xs: 400, md: "97%" },
          textAlign: "justify",
          alignItems: "center",
          color: "white",
        }}
      >
        <CardContent>
          <Typography variant="p" sx={{ textAlign: "justify", lineHeight: 2 }}>
            {candidate.manifesto}
          </Typography>
        </CardContent>
      </Card>
    </Card>
  );
};

export default CandidateProfile;
