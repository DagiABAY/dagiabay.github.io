import React from "react";
import { Grid, Box, Typography, Container } from "@mui/material";
import {
    DiJavascript1,
    DiReact,
    DiNodejs,
    DiMongodb,
    DiPython,
    DiGit,
    DiJava,
    DiAndroid,
    DiVisualstudio,
} from "react-icons/di";
import {
    SiKotlin,
    SiFlutter,
    //   SiAmazonaws,
    SiOracle,
    SiMysql,
    SiTensorflow,
    SiDocker,
    SiSpringboot,
    SiVsco,
    SiMacos,
    SiPostman,
    SiIntellijidea,

    SiLinux,
    SiKubernetes,
    SiVscodium,
    SiVisa,
} from "react-icons/si";
import Lottie from "react-lottie";

import flutter from "../assets/anima/flutter.json";
import java from "../assets/anima/java.json";
import node from "../assets/anima/node.json";
import js from "../assets/anima/js1.json";
import py from "../assets/anima/py.json";
import react from "../assets/anima/r2.json";
import about from "../assets/anima/about.json";

const iconStyle = { fontSize: "3.5rem", color: "#fff" };

const createLottieOptions = (animationData) => ({
    loop: true,
    autoplay: true,
    animationData,
    rendererSettings: {
        preserveAspectRatio: "xMidYMid slice",
    },
});

export default function AboutPage() {
    const lottieAnimations = [
        createLottieOptions(java),
        createLottieOptions(py),
        createLottieOptions(react),
        createLottieOptions(node),
    ];
    const lottieAnimations2 = [
        createLottieOptions(flutter),
        createLottieOptions(js),
    ];

    const icons = [
        <SiMysql style={iconStyle} />,
        <DiGit style={iconStyle} />,
        <DiMongodb style={iconStyle} />,
        <SiDocker style={iconStyle} />,
        <DiAndroid style={iconStyle} />,
        <SiOracle style={iconStyle} />,
        <SiKotlin style={iconStyle} />,
        <SiTensorflow style={iconStyle} />,
    ];

    const tools = [
        <DiVisualstudio style={{ fontSize: "3.5rem", color: "#0096FF " }} />,
        <SiMacos style={iconStyle} />,
        <SiPostman style={{ fontSize: "3.5rem", color: "#ff4b33" }} />,
        <SiIntellijidea style={{ fontSize: "3.5rem", color: "#60B5FF" }} />,
        <SiLinux style={iconStyle} />,
        <SiKubernetes style={iconStyle} />,

    ];
  const aboutAnimation = {
    loop: true,
    autoplay: true,
    animationData: about,
    rendererSettings: {
      preserveAspectRatio: 'xMidYMid slice',
    },
  };
    return (
        <Box sx={{ display: 'flex', flexDirection: 'column', minHeight: '100vh' }}>
            <Container sx={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', flexWrap: 'wrap' }}>
                <Box sx={{ maxWidth: 500, color: 'white' }}>
                    <Typography variant="h4" gutterBottom sx={{ fontWeight: '', color: 'primary.main' }}>
                        About Me
                    </Typography>

                    <Typography variant="h6" sx={{ mt: 4, lineHeight: 1.8, color: 'white' }}>
                        My interest
                        in programming began at an early age and has driven me to acquire skills in various programming languages and
                        frameworks, including React, Spring Boot, Flutter, Python, and Django. I hold a BSc in Information Technology from
                        Bahir Dar University with a GPA of{'  '}
                        <Box component="span" sx={{ color: 'primary.main', fontWeight: 'bold' }}>
                            3.94.
                        </Box>{' '}

                    </Typography>

                    <Typography variant="h6" sx={{ mt: 4, lineHeight: 1.8, color: 'white' }}>
                        I am eager to further my education in a challenging academic environment
                        where I can deepen my understanding of computer science and software engineering. My goal is to contribute to
                        innovative projects and research while continuing to develop my skills and knowledge in the field. Thank you for
                        considering my application. I look forward to the opportunity to discuss how my background and aspirations align
                        with your program
                    </Typography>



                </Box>
                <Lottie options={aboutAnimation} height='80vh' width='55%' />;


            </Container>
            <Grid>
                <Box sx={{ display: "flex", flexDirection: "column", alignItems: "center", paddingTop: "20px", paddingBottom: "20px" }}>
                    <Typography variant="h4" sx={{ color: 'white', alignItems: 'center', paddingTop: "50px", paddingBottom: "50px" }}>
                        MY{' '}
                        <Box component="span" sx={{ color: 'primary.main', fontWeight: 'bold' }}>
                            SKILLS
                        </Box>{' '}

                    </Typography>
                </Box>


                <Grid container spacing={4} justifyContent="center" sx={{ paddingBottom: "50px" }}>

                    {lottieAnimations.map((options, index) => (
                        <Grid item xs={6} sm={4} md={3} key={`lottie-${index}`} sx={{ display: "flex", justifyContent: "center" }}>
                            <Lottie options={options} height={250} width={250} />

                        </Grid>

                    ))}
                </Grid>
                <Grid container spacing={4} justifyContent="center" sx={{ paddingBottom: "50px" }}>

                    {lottieAnimations2.map((options, index) => (
                        <Grid item xs={6} sm={4} md={3} key={`lottie-${index}`} sx={{ display: "flex", justifyContent: "center" }}>
                            <Lottie options={options} height={150} width={160} />

                        </Grid>

                    ))}
                    <SiSpringboot style={{ fontSize: "10.0rem", color: "green" }} />
                </Grid>
                <Grid container spacing={4} justifyContent="center" sx={{ paddingBottom: "50px" }}>
                    {icons.map((icon, index) => (
                        <Grid item xs={6} sm={4} md={3} key={`icon-${index}`} sx={{ display: "flex", justifyContent: "center" }}>
                            <Box
                                sx={{
                                    display: "flex",
                                    justifyContent: "center",
                                    alignItems: "center",
                                    width: "100px",
                                    height: "100px",
                                    borderRadius: "50%",
                                    boxShadow: 3,
                                }}
                            >
                                {icon}
                            </Box>
                        </Grid>
                    ))}
                </Grid>


                <Box sx={{ display: "flex", flexDirection: "column", alignItems: "center", paddingTop: "20px", paddingBottom: "20px" }}>
                    <Typography variant="h4" sx={{ color: 'white', alignItems: 'center', paddingTop: "50px", paddingBottom: "50px" }}>

                        <Box component="span" sx={{ color: 'primary.main', fontWeight: 'bold' }}>
                            TOOLS
                        </Box>{' '}

                    </Typography>
                </Box>

                <Grid container spacing={4} justifyContent="center" sx={{ paddingBottom: "50px" }}>
                    {tools.map((icon, index) => (
                        <Grid item xs={6} sm={4} md={3} key={`icon-${index}`} sx={{ display: "flex", justifyContent: "center" }}>
                            <Box
                                sx={{
                                    display: "flex",
                                    justifyContent: "center",
                                    alignItems: "center",
                                    width: "100px",
                                    height: "100px",
                                    borderRadius: "50%",
                                    boxShadow: 3,
                                }}
                            >
                                {icon}
                            </Box>
                        </Grid>
                    ))}
                </Grid>
            </Grid>
        </Box>
    );
}
