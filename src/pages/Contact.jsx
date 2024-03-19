import React from "react";
import Sidebar from "../component/sidebar";
import Box from "@mui/material/Box";
import Navbar from "../component/Navbar";
import Card from "@mui/material/Card";
import CardHeader from "@mui/material/CardHeader";
import CardContent from "@mui/material/CardContent";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";

function Contact() {
  return (
    <>
      <div className="bgcolor">
        <Navbar />
        <Box sx={{ display: "flex", backgroundColor: "black", color: "white" }}>
          <Sidebar />
          <Box component="main" sx={{ flexGrow: 1, p: 3 }}>
            <Card sx={{ m: 8, backgroundColor: "#20282E", color: "white" }}>
              <CardHeader
                title={"Contact Us"}
                subheader={
                  "We're here to help and answer any questions you might have."
                }
                sx={{ p: 5, bgcolor: "#f3f4f6" }}
              ></CardHeader>
              <CardContent sx={{ p: 5 }}>
                <div
                  style={{
                    display: "grid",
                    gridTemplateColumns: "1fr 1fr",
                    gap: "1rem",
                  }}
                >
                  <div
                    style={{
                      display: "flex",
                      flexDirection: "column",
                      gap: "0.5rem",
                    }}
                  >
                    <label htmlFor="first-name">First name</label>
                    <TextField
                      id="first-name"
                      placeholder="Enter your first name"
                      variant="outlined"
                    />
                  </div>
                  <div
                    style={{
                      display: "flex",
                      flexDirection: "column",
                      gap: "0.5rem",
                    }}
                  >
                    <label htmlFor="last-name">Last name</label>
                    <TextField
                      id="last-name"
                      placeholder="Enter your last name"
                      variant="outlined"
                    />
                  </div>
                </div>
                <div
                  style={{
                    display: "flex",
                    flexDirection: "column",
                    gap: "0.5rem",
                    marginTop: "1rem",
                  }}
                >
                  <label htmlFor="email">Email</label>
                  <TextField
                    id="email"
                    placeholder="Enter your email"
                    type="email"
                    variant="outlined"
                  />
                </div>
                <div
                  style={{
                    display: "flex",
                    flexDirection: "column",
                    gap: "0.5rem",
                    marginTop: "1rem",
                  }}
                >
                  <label htmlFor="message">Message</label>
                  <TextField
                    id="message"
                    placeholder="Enter your message"
                    multiline
                    rows={4}
                    variant="outlined"
                  />
                </div>
                <Button color="primary" variant="contained" sx={{ mt: 2 }}>
                  Submit
                </Button>
              </CardContent>
            </Card>
          </Box>
        </Box>
      </div>
    </>
  );
}

export default Contact;
