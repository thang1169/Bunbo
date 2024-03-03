import { Box, Grid, Link, Paper, Typography } from '@mui/material'
import React from 'react'

export default function Header() {
  return (
    <Paper
      sx={{
        position: 'relative',
        backgroundColor: 'grey.800',
        color: '#fff',
        mb: 4,
        backgroundSize: 'cover',
        backgroundRepeat: 'no-repeat',
        backgroundPosition: 'center',
        backgroundImage: `url(${"https://wallpapers.com/images/hd/food-4k-3gsi5u6kjma5zkj0.jpg"})`,
        height:400
      }}
    >
      {/* Increase the priority of the hero background image */}
      {<img style={{ display: 'none' }} src={"https://wallpapers.com/images/hd/food-4k-3gsi5u6kjma5zkj0.jpg"} alt={"header"} />}
      <Box
        sx={{
          position: 'absolute',
          top: 0,
          bottom: 0,
          right: 0,
          left: 0,
          backgroundColor: 'rgba(0,0,0,.3)',
        }}
      />
      <Grid container>
        <Grid item md={12}>
          <Box
            sx={{
              position: 'relative',
              p: { xs: 3, md: 6 },
              pr: { md: 0 },
              mt: 7
            }}
          >
            <Typography component="h3" variant="h4" color="inherit" gutterBottom sx={{fontWeight: 700}}>
              PREMIMUM MEMBER EXCLUSIVE
            </Typography>
            <Typography variant="body1" color="inherit" paragraph sx={{mb: 7, fontSize:"35px"}}>
              15% of everything + extra gift card + coupon offers
            </Typography> 
            <Link sx={{textDecoration:"none", color:"#fff", cursor:"pointer", fontSize:"20px"}}>Not a member? Join now to shop</Link>         
          </Box>
        </Grid>
      </Grid>
    </Paper>
  )
}
