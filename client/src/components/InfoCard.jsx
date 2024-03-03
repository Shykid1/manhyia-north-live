import { Card, CardContent, Table, TableCell, TableContainer, TableHead, TableRow, Typography } from "@mui/material"

const InfoCard = () => {
  return (
    <div>
      <Card sx={{ maxWidth: 700, bgcolor: "#F9F0F0" }}>
        <TableContainer>
          <Table sx={{bgcolor: '#022C06'}}>
            <TableHead sx={{bgcolor: '#022C06'}}>
              <TableRow sx={{bgcolor: '#022C06'}}>
                <TableCell sx={{bgcolor: '#022C06'}}></TableCell>
              </TableRow>
            </TableHead>
          </Table>
        </TableContainer>
        <CardContent sx={{alignItems: "center", textAlign: "center"}}>
          <Typography variant="h3" sx={{fontWeight: 500}}>
            Vote Information
          </Typography>
          <Typography variant="p" sx={{fontWeight: 500}}>
            ..........................................................................................................
          </Typography>
          <Typography variant="h4" >
            REGISTERED VOTERS :   67,856 
          </Typography>
          <Typography variant="h4" >
            Ballot CAST :   45,234
          </Typography>
          <Typography variant="h4" >
            voter Turnouts : 89 %
          </Typography>
          <Typography variant="p" sx={{fontWeight: 500}}>
            ..........................................................................................................
          </Typography>
          <Typography variant="h4" >
            updated information
          </Typography>
        </CardContent>
      </Card>
    </div>
  )
}

export default InfoCard
