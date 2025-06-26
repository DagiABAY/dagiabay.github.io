import React from "react";
import {
  Grid,
  Box,
  Typography,
  Container,
  Card,
  CardMedia,
  CardContent,
} from "@mui/material";

import p2 from "../assets/p2.png";
import p1 from "../assets/p1.png";
import p3 from "../assets/p3.png";

import p4 from "../assets/p4.png";

import gp3 from "../assets/gp3.png";
import ussd from "../assets/ussd.png";

import school from "../assets/school.png";
import mob from "../assets/mob.png";
import wso2 from "../assets/wso22.png";

export default function Projects() {
    return (
      <Box sx={{ display: "flex", flexDirection: "column", minHeight: "100vh" }}>
        
        {/* TEAM PROJECTS Section */}
        <Grid>
          <Box
            sx={{
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              pt: 1,
              pb: 2,
            }}
          >
            <Typography
              variant="h4"
              sx={{
                color: "white",
                textAlign: "center",
                pt: 6,
                pb: 0,
              }}
            >
              TEAM{" "}
              <Box component="span" sx={{ color: "primary.main", fontWeight: "bold" }}>
                PROJECTS
              </Box>
            </Typography>
            <Typography
              variant="h6"
              sx={{
                color: "white",
                textAlign: "center",
                pt: 0,
                pb: 6,
              }}
            >
              Here are some of the team's projects
            </Typography>
          </Box>
  
          {/* Project Cards */}
          <Grid container spacing={4} justifyContent="center" sx={{ pb: 6 }}>
            <Card sx={{ maxWidth: 345 }}>
              <CardMedia component="img" height="300" width={300} image={mob} alt="Mobile Banking Application" />
              <CardContent>
                <Typography variant="h6" component="div" sx={{ color: "primary.main", fontWeight: "bold" }}>
                  Mobile Banking Application
                </Typography>
              </CardContent>
            </Card>
            <Card sx={{ maxWidth: 345 }}>
              <CardMedia component="img" height="300" width={300} image={ussd} alt="USSD Banking Application" />
              <CardContent>
                <Typography variant="h6" component="div" sx={{ color: "primary.main", fontWeight: "bold" }}>
                  USSD Banking Application
                </Typography>
              </CardContent>
            </Card>
            <Card sx={{ maxWidth: 345 }}>
              <CardMedia component="img" height="300" width={300} image={school} alt="School Payment System" />
              <CardContent>
                <Typography variant="h6" component="div" sx={{ color: "primary.main", fontWeight: "bold" }}>
                  School Payment System
                </Typography>
              </CardContent>
            </Card>
          </Grid>
  
          <Grid container spacing={4} justifyContent="center" sx={{ pb: 6 }}>
            <Card sx={{ maxWidth: 345 }}>
              <CardMedia component="img" height="300" width={300} image={wso2} alt="System Integration Project" />
              <CardContent>
                <Typography variant="h6" component="div" sx={{ color: "primary.main", fontWeight: "bold" }}>
                  Integration with Different Systems
                </Typography>
              </CardContent>
            </Card>
            <Card sx={{ maxWidth: 345 }}>
              <CardMedia component="img" height="300" width={300} image={gp3} alt="Overall Monitoring System" />
              <CardContent>
                <Typography variant="h6" component="div" sx={{ color: "primary.main", fontWeight: "bold" }}>
                  Overall Monitoring System
                </Typography>
              </CardContent>
            </Card>
          </Grid>
        </Grid>
  
        {/* MY WORKS Section */}
        <Grid>
          <Box
            sx={{
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              pt: 2,
              pb: 2,
            }}
          >
            <Typography
              variant="h4"
              sx={{
                color: "white",
                textAlign: "center",
                pt: 6,
                pb: 0,
              }}
            >
              MY{" "}
              <Box component="span" sx={{ color: "primary.main", fontWeight: "bold" }}>
                WORKS
              </Box>
            </Typography>
            <Typography
              variant="h6"
              sx={{
                color: "white",
                textAlign: "center",
                pt: 0,
                pb: 6,
              }}
            >
              Here are some of my personal projects
            </Typography>
          </Box>
  
          {/* Project Cards */}
          <Grid container spacing={4} justifyContent="center" sx={{ pb: 6 }}>
            <Card sx={{ maxWidth: 345 }}>
              <CardMedia component="img" height="300" width={300} image={p4} alt="Event Scheduler Application" />
              <CardContent>
                <Typography variant="h6" component="div" sx={{ color: "primary.main", fontWeight: "bold" }}>
                  Event Scheduler Application
                </Typography>
              </CardContent>
            </Card>
            <Card sx={{ maxWidth: 345 }}>
              <CardMedia component="img" height="300" width={300} image={p3} alt="Weather Application" />
              <CardContent>
                <Typography variant="h6" component="div" sx={{ color: "primary.main", fontWeight: "bold" }}>
                  Weather Application
                </Typography>
              </CardContent>
            </Card>
            <Card sx={{ maxWidth: 345 }}>
              <CardMedia component="img" height="300" width={300} image={p2} alt="MovieRocket Application" />
              <CardContent>
                <Typography variant="h6" component="div" sx={{ color: "primary.main", fontWeight: "bold" }}>
                  MovieRocket Application
                </Typography>
              </CardContent>
            </Card>
            <Card sx={{ maxWidth: 345 }}>
              <CardMedia component="img" height="300" width={300} image={p1} alt="BMI Calculator App" />
              <CardContent>
                <Typography variant="h6" component="div" sx={{ color: "primary.main", fontWeight: "bold" }}>
                  BMI Calculator App
                </Typography>
              </CardContent>
            </Card>
          </Grid>
        </Grid>
      </Box>
    );
  }