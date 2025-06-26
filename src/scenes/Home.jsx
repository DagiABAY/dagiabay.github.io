import React from "react";
import {
  AppBar,
  Toolbar,
  Typography,
  Box,
  Button,
  Container,
  Stack,
  IconButton,
  Link,
  CssBaseline,
} from "@mui/material";
import GitHubIcon from "@mui/icons-material/GitHub";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import TwitterIcon from "@mui/icons-material/Twitter";
import '../App.css';
import Lottie from "react-lottie";



import animationData1 from '../assets/anima/1.json';
import animationData2 from "../assets/anima/2.json";
import animationData3 from "../assets/anima/3.json";

import { useTypewriter } from "../components/useTypewriter";
import backgroundImage from '../assets/img2.png';
import pro1 from '../assets/pro.png';
import pro2 from '../assets/pro2.png';
import pro3 from '../assets/pro3.png';

export default function HomePage() {
  const typewriterText = useTypewriter([
    "Software Developer",
    "Full Stack Developer",
    "Integration Engineer",
    "Mobile Application Developer",
    "Web Application Developer",
    "Backend Developer",
    "Frontend Developer",
    "React Developer",
    "Flutter Developer",
    "Java Developer",
    "API Developer",
  ]);


  const defaultOptions1 = {
    loop: true,
    autoplay: true,
    animationData: animationData1,
    rendererSettings: {
      preserveAspectRatio: 'xMidYMid slice',
    },
  };

  const defaultOptions2 = {
    loop: true,
    autoplay: true,
    animationData: animationData2,
    rendererSettings: {
      preserveAspectRatio: 'xMidYMid slice',
    },
  };

  const defaultOptions3 = {
    loop: true,
    autoplay: true,
    animationData: animationData3,
    rendererSettings: {
      preserveAspectRatio: 'xMidYMid slice',
    },
  };

  return (
    <Box sx={{ display: 'flex', flexDirection: 'column', minHeight: '100vh' }}>
      <CssBaseline />

      <Box sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center', flexGrow: 1 }}>
        <Container sx={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', flexWrap: 'wrap' }}>
          <Box sx={{ maxWidth: 500, color: 'white' }}>
            <Typography variant="h4" gutterBottom>
              Hi there!{' '}
              <span role="img" aria-labelledby="wave" className="waving-hand">
                👋🏻
              </span>
              {' '}I'm
            </Typography>

            <Typography variant="h3" sx={{ fontWeight: 'bold', color: 'primary.main' }}>
              DAGIM AWULACHEW
            </Typography>
            <Box sx={{ mt: 2, fontSize: '1.5rem' }}>
              {typewriterText}
              <span style={{ color: '#888' }}>|</span>
            </Box>


          </Box>
          {/* <Box
            sx={{
              width: '50%',
              height: '50vh',
              backgroundImage: `url(${backgroundImage})`,
              backgroundSize: 'cover',
              backgroundPosition: 'center',
            }}
          /> */}
          <Lottie options={defaultOptions1} height='60vh' width='50%' />;

        </Container>

      </Box>

      <Box sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center', pl: 10, pr: 5, pt: 20 }}>
        <Container sx={{ display: 'flex', justifyContent: 'space-between', flexWrap: 'wrap' }}>
          <Box sx={{ maxWidth: 500, color: 'white' }}>

            <Typography variant="h4" sx={{ color: 'white' }}>
              LET ME{' '}
              <Box component="span" sx={{ color: 'primary.main', fontWeight: 'bold' }}>
                INTRODUCE
              </Box>{' '}
              MYSELF
            </Typography>

            <Typography variant="body1" sx={{ mt: 4, lineHeight: 1.8, color: 'white' }}>
              I’m a passionate software developer with experience in full stack development,
              integration engineering, and mobile app development. I love building meaningful
              applications and solving real-world problems with technology. I specialize in
              React, Spring Boot, Flutter, and API integration.
            </Typography>
            <Typography variant="body1" sx={{ mt: 4, lineHeight: 1.8, color: 'white' }}>
              I bring a robust academic foundation, holding a BSc in Information Technology from Bahir Dar University,
              combined with hands-on experience in cutting-edge technologies.
            </Typography>
            <Typography variant="body1" sx={{ mt: 4, lineHeight: 1.8, color: 'white' }}>
              I have also gained valuable work experience,
              having worked as a Cryptographer at the Information Network Security Agency (INSA)
              and as a Digital Integration and Development Officer at NIB Bank.
              These roles have helped me refine my technical skills while working on security protocols
              and integrating digital solutions for banking services.


            </Typography>
          </Box>
          {/* <Box
            sx={{
              width: '45%',
              height: '50',
              backgroundImage: `url(${pro1})`,
              backgroundSize: 'cover',
              backgroundPosition: 'center',
            }}
          /> */}
          <Lottie options={defaultOptions3} height='80vh' width='55%' />;


        </Container>

        {/* Find Me On */}
        <Typography variant="h3" sx={{ mt: 4, color: 'white', fontWeight: 'bold' }}>
          Find me on
        </Typography>
        <Stack direction="row" spacing={2} sx={{ mt: 1, color: 'white' }}>
          <Link href="https://github.com/DagiABAY" target="_blank" >
            <IconButton color="inherit">
              <GitHubIcon />
            </IconButton>
          </Link>
          <Link href="https://www.linkedin.com/in/dagim-awulachew-614288231/" target="_blank" color="inherit">
            <IconButton color="inherit">
              <LinkedInIcon />
            </IconButton>
          </Link>

        </Stack>
      </Box>
      {/* Footer */}

    </Box>
  );
}
