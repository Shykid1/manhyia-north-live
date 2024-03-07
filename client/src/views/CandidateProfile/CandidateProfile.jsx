import { Box, Card, CardContent, CardHeader, Typography } from "@mui/material";

const CandidateProfile = () => {
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
            src="Mahama.jpeg"
            alt=""
            className="knowthemimg margin-bottom-10"
          />
          <h4>JOHN DRAMANI MAHAMA </h4>
          <h5>NDC</h5>
          <h5>65</h5>
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
          MR. JOHN DRAMANI MAHAMA WHO IS A POLITICAIN HAS SERVED AS A PRESIDENT
          OF GHANA FROM 24JULY 2012 TO 7 JANUARY 2017 HE PREVIOUSLY SERVED AS A
          VICE PRESIDENT OF GHANA FROM JANUARY 2009 TO JULY 2012 AND TOOK OVER
          OFFICE AS PRESIDENT ON 24 JULY 2012. BORN ON 29, 1958 MARIED TO HIS
          BEAUTIFUL WIFE MRS. LORDINA MAHAMA TOGETHER HAVING FIVE CHILDREN.BORN
          IN DAMONGO, STUDIED IN THE INSTITUTE OF SOCIAL SCIENCE UNIVERSITY OF
          GHANA THEN WENT AHEAD TO ATTAIN A POSTGRADUATE DEGREE IN COMMUNICATION
          STUDIES MORE....
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
            Former President John Dramani Mahama has outlined several key
            policies as part of his vision for Ghana. If he becomes president in
            2025, these policies aim to address various aspects of the
            country&apos;s development. Here are some of the significant
            policies:
            <br /> <br />
          </Typography>
          <ol>
            <li>
              24-Hour Economy Strategy: Mahama proposes implementing a 24-hour
              economy with three shifts of eight hours each. The goals are to
              maximize productivity and efficiency, transform Ghana into an
              import substitution and export-led economy, enhance access to
              public services, and create more well-paying jobs for unemployed
              Ghanaians1. This comprehensive strategy focuses on infrastructure
              development, digital transformation and human capital development
            </li>
            <li>
              Economic Stability and Growth: Mahama aims to stop the economic
              decline and restore stability and inclusive growth to the Ghanaian
              economy1. Achieving economic stability is crucial for sustainable
              development and improving the livelihoods of citizens.
            </li>
            <li>
              Banking Sector Reform: Recognizing the challenges faced by the
              banking and financial sector, Mahama plans to reform the Bank of
              Ghana and rejuvenate almost collapsed financial institutions.
              Additionally, he intends to provide opportunities for experienced
              banking professionals who were laid off, allowing them to secure
              their careers once more
            </li>
            <li>
              Local Participation and Job Creation: To generate more jobs for
              the youth, Mahama emphasizes local participation in various
              sectors, including banking, financial services,
              telecommunications, mining, oil and gas, agriculture,
              manufacturing, and construction
            </li>
            <li>
              Encouraging private sector investment and making Ghanaians owners
              of micro-enterprises are key components of this policy.
            </li>
            <li>
              Governance Advisory Council: Mahama plans to establish a
              Governance Advisory Council comprising representatives from civil
              society organizations, religious leaders, traditional leaders, and
              ordinary Ghanaians. This council will help improve political
              governance, curb corruption, and ensure respect for human rights.
              It will release an annual “State of Governance in Ghana” report
            </li>
            <li>
              Efficient Government: Mahama aims to run the leanest but most
              efficient government under the fourth republic. He plans to
              appoint not more than 60 ministers and deputy ministers, combining
              certain ministries and eliminating duplicating government
              agencies. Additionally, he intends to abolish the payment of
              ex-gratia and cut out waste and ostentation in government
            </li>
            <li>
              Constitution Review and Separation of Powers: Working with
              Parliament and stakeholders, Mahama seeks to complete the
              constitution review process and strengthen the separation of
              powers within the government
            </li>
          </ol>
          <Typography variant="p" sx={{ textAlign: "justify", lineHeight: 2 }}>
            These policies reflect Mahama&apos;s vision for Ghana&apos;s
            development and prosperity, addressing critical areas such as the
            economy, governance, and job creation. As with any political agenda,
            their implementation would depend on various factors and
            collaboration with relevant stakeholders.
          </Typography>
        </CardContent>
      </Card>
    </Card>
  );
};

export default CandidateProfile;
