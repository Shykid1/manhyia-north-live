import {Card, CardContent, CardMedia, Paper, Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Typography } from '@mui/material'
import { ProgressBar } from 'react-bootstrap'

const CardComponent = () => {
  return (
    <div>
      <Card sx={{ maxWidth: 345, bgcolor: "#F9F0F0" }}>
        <CardMedia
          sx={{borderRadius: '100%', bgcolor: "#F9F0F0", objectFit: 'contain' }}
          component="img"
          height="194"
          image='/Mahama.jpeg'
          title='Mahama'
        />

        <CardContent sx={{alignContent: "center", textAlign: "center"}}>
          <Typography variant="p" sx={{fontWeight: 900}}>
            JOHN DRAMANI MAHAMA
          </Typography>

          <TableContainer component={Paper} sx={{my: 2}}>
            <Table sx={{ minWidth: 300 }} aria-label="Votes Table">
              <TableHead>
                <TableRow>
                  <TableCell align='center' sx={{fontWeight: 700}}>Total Votes</TableCell>
                  <TableCell align='center' sx={{fontWeight: 700}}>Percentage</TableCell>
                </TableRow>
              </TableHead>
              
              <TableBody>
                <TableRow>
                  <TableCell align='center'>6,214,889</TableCell>
                  <TableCell align='center'>53.36%</TableCell>
                </TableRow>
              </TableBody>
            </Table>
          </TableContainer>

          <ProgressBar variant='success' now={53.63} />
        </CardContent>
      </Card>
    </div>
  )
}

export default CardComponent
