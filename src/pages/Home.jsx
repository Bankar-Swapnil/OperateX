import React from "react";
import Sidebar from "../component/sidebar";
import Navbar from "../component/Navbar";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import Stack from "@mui/material/Stack";
import "../style.css";
import ChartGeo from "../component/Chart";
import CountUp from "react-countup";
import Chart3d from "../component/Chart3d";

function Home() {
  return (
    <>
      <div className="bgcolor">
        <Navbar />
        <Box height={70} />
        <Box sx={{ display: "flex" }}>
          <Sidebar />
          <Box component="main" sx={{ flexGrow: 1, p: 3 }}>
            <Grid container spacing={2}>
              <Grid item xs={12} md={8}>
                <Stack spacing={2}>
                  <Card sx={{ backgroundColor: "#20282E", color: "white" }}>
                    <CardContent sx={{ textAlign: "center" }}>
                      <Typography>
                        <span>
                          {" "}
                          <CountUp delay={1} start={0} end={790} duration={4} />
                        </span>
                        <br />
                        Total Products
                      </Typography>
                    </CardContent>
                  </Card>
                  <Card sx={{ backgroundColor: "#20282E", color: "white" }}>
                    <CardContent sx={{ textAlign: "center" }}>
                      <Typography>
                        <span>
                          {" "}
                          <CountUp
                            delay={1}
                            start={0}
                            end={2379}
                            duration={4}
                          />
                        </span>
                        <br />
                        Total Orders
                      </Typography>
                    </CardContent>
                  </Card>
                  <Card
                    sx={{
                      height: "60vh",
                      backgroundColor: "#20282E",
                      color: "white",
                    }}
                  >
                    <CardContent>
                      <ChartGeo />
                    </CardContent>
                  </Card>
                </Stack>
              </Grid>
              <Grid item xs={12} md={4}>
                <Stack spacing={2}>
                  <Card sx={{ backgroundColor: "#20282E", color: "white" }}>
                    <CardContent sx={{ textAlign: "center" }}>
                      <Typography>
                        <span>
                          ${" "}
                          <CountUp
                            delay={1}
                            start={0}
                            end={9999999}
                            duration={4}
                          />
                          K
                        </span>
                        <br />
                        Total Income
                      </Typography>
                    </CardContent>
                  </Card>
                  <Card sx={{ backgroundColor: "#20282E", color: "white" }}>
                    <CardContent sx={{ textAlign: "center" }}>
                      <Typography>
                        <span>
                          ${" "}
                          <CountUp
                            delay={1}
                            start={0}
                            end={777777}
                            duration={4}
                          />
                          K
                        </span>
                        <br />
                        Total Profit
                      </Typography>
                    </CardContent>
                  </Card>
                  <Card
                    sx={{
                      height: "60vh",
                      backgroundColor: "#20282E",
                      color: "white",
                    }}
                  >
                    <CardContent>
                      <Typography variant="h5" align="center">
                        Popular Product
                      </Typography>
                      <Chart3d />
                    </CardContent>
                  </Card>
                </Stack>
              </Grid>
            </Grid>
          </Box>
        </Box>
      </div>
    </>
  );
}

export default Home;
