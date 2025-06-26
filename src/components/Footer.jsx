import { Box, Container, Typography, IconButton, Stack } from '@mui/material';
import GitHubIcon from '@mui/icons-material/GitHub';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import TwitterIcon from '@mui/icons-material/Twitter';
import { Link } from 'react-router-dom';
import React from 'react';
function Footer() {
    return (
<Box component="footer" sx={{ py: 3, color: 'white' }}>
<Container sx={{ textAlign: 'center' }}>
  <Typography variant="body1" gutterBottom>
    &copy; {new Date().getFullYear()} DAGIM AWULACHEW. All rights reserved.
  </Typography>
  <Stack direction="row" spacing={3} justifyContent="center">
    <Link href="https://github.com/DagiABAY" target="_blank" color="inherit">
      <IconButton>
        <GitHubIcon />
      </IconButton>
    </Link>
    <Link href="https://www.linkedin.com/in/dagim-awulachew-614288231/" target="_blank" color="inherit">
      <IconButton>
        <LinkedInIcon />
      </IconButton>
    </Link>
    <Link href="https://twitter.com/yourusername" target="_blank" color="inherit">
      <IconButton>
        <TwitterIcon />
      </IconButton>
    </Link>
  </Stack>
</Container>
</Box>

);
}

export default Footer;