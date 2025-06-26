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



import exp1 from '../assets/anima/crypto.json';
import bank from "../assets/anima/bank.json";
import animationData2 from "../assets/anima/2.json";
import animationData3 from "../assets/anima/3.json";

import { useTypewriter } from "../components/useTypewriter";


export default function ExpPage() {
  const typewriterText = useTypewriter([
    "Software Developer",
    "Full Stack Developer",
    "Integration Engineer",
    "Mobile Developer",
    "Web Developer",
  ]);


  const exp1Options = {
    loop: true,
    autoplay: true,
    animationData: exp1,
    rendererSettings: {
      preserveAspectRatio: 'xMidYMid slice',
    },
  };

  const exp2Options= {
    loop: true,
    autoplay: true,
    animationData: bank,
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

            <Typography variant="h3" sx={{ fontWeight: 'bold', color: 'primary.main' }}>
              Cryptographer
            </Typography>
            <Box sx={{ mt: 2, fontSize: '1.5rem' }}>
              Information Network Security Agency (INSA)

              <span style={{ color: '#888' }}>|</span>
            </Box>
            <Box sx={{ mt: 0, fontSize: '1.5rem' }}>

              07/09/2022 – 10/01/2023

              <span style={{ color: '#888' }}>|</span>
            </Box>
            <Typography variant="body1" sx={{ mt: 0, lineHeight: 1.8, color: 'white' }}>
              👉 Developed and implemented cryptographic algorithms to safeguard sensitive information.

            </Typography>
            <Typography variant="body1" sx={{ mt: 0, lineHeight: 1.8, color: 'white' }}>
              👉Conducted vulnerability assessments and designed risk mitigation strategies.

            </Typography>
            <Typography variant="body1" sx={{ mt: 0, lineHeight: 1.8, color: 'white' }}>
              👉 Ensured compliance with security standards and regulations through system analysis

            </Typography>
            <Typography variant="body1" sx={{ mt: 0, lineHeight: 1.8, color: 'white' }}>
              👉Analyzed and tested cryptographic protocols to identify and mitigate potential vulnerabilities.

            </Typography>
            <Typography variant="body1" sx={{ mt: 0, lineHeight: 1.8, color: 'white' }}>
              👉Worked on the development and optimization of encryption and decryption processes to ensure data integrity
              and confidentiality.
            </Typography>
            <Typography variant="body1" sx={{ mt: 0, lineHeight: 1.8, color: 'white' }}>
              👉 Collaborated with a team of cybersecurity experts to enhance the agency's overall security infrastructure.

            </Typography>
            <Typography variant="body1" sx={{ mt: 0, lineHeight: 1.8, color: 'white' }}>
              👉 Conducted research on emerging cryptographic technologies and their applications in national security.

            </Typography>
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
          <Lottie options={exp1Options} height='60vh' width='50%' />;

        </Container>

      </Box>

      <Box sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center', flexGrow: 1, marginTop: 20 }}>
        <Container sx={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', flexWrap: 'wrap' }}>

          <Lottie options={exp2Options} height='60vh' width='50%' />;

          <Box sx={{ maxWidth: 500, color: 'white' }}>

            <Typography variant="h3" sx={{ fontWeight: 'bold', color: 'primary.main' }}>
            Digital Integration and Development Officer
            </Typography>
            <Box sx={{ mt: 2, fontSize: '1.5rem' }}>
              NIB International Bank S.C
              <span style={{ color: '#888' }}>|</span>
            </Box>
            <Box sx={{ mt: 0, fontSize: '1.5rem' }}>

              08/05/2023 – Current
              <span style={{ color: '#888' }}>|</span>
            </Box>
            <Typography variant="body1" sx={{ mt: 0, lineHeight: 1.8, color: 'white' }}>
              👉  Developed and integrated a mobile banking app, enhancing customer accessibility and enabling convenient
              access to banking services through smartphones

            </Typography>
            <Typography variant="body1" sx={{ mt: 0, lineHeight: 1.8, color: 'white' }}>
              👉  Implemented a USSD application, allowing customers to perform transactions and inquiries via
              basic mobile phones, significantly expanding the bank's reach

            </Typography>
            <Typography variant="body1" sx={{ mt: 0, lineHeight: 1.8, color: 'white' }}>
              👉  Led various integrations with third-party services using WSO2 and Spring Boot, ensuring secure and efficient
              communication between the bank’s systems and external platforms.

            </Typography>
            <Typography variant="body1" sx={{ mt: 0, lineHeight: 1.8, color: 'white' }}>
              👉 Developed a school payment system for the bank, utilizing React for the frontend and Spring Boot for the
              backend, streamlining payment processes for educational institutions.

            </Typography>
            <Typography variant="body1" sx={{ mt: 0, lineHeight: 1.8, color: 'white' }}>
              👉 Collaborated closely with the Themeous banking solution to write custom inquiries and versions, enhancing
              the bank’s capabilities in handling complex financial transactions.
            </Typography>
            <Typography variant="body1" sx={{ mt: 0, lineHeight: 1.8, color: 'white' }}>
              👉 Played a key role in the bank's digital transformation efforts, modernizing legacy systems, improving customer
              engagement, and ensuring high reliability and performance of digital services

            </Typography>
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

        </Container>

      </Box>
      {/* Footer */}

    </Box>
  );
}
