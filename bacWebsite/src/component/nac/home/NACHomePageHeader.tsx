import React from "react";
import { Button, Divider, Grid2, Typography } from "@mui/material";
import { maxWidth } from "../../home/homePageConstant.js.ts";
import backgroundImage from "../../../assets/AviPlayer.jpg";
interface Props {}

const NACHomePageHeader: React.FC<Props> = () => {
  return (
    <Grid2
      size={{ xs: 12 }}
      item
      sx={{
        position: "relative",
        width: "100%",
        height: `calc(90vh)`,
        overflow: "hidden",
        display: "flex",
      }}>
      <img
        src={backgroundImage}
        style={{ objectFit: "cover", width: "100%" }}
      />
      <Grid2
        size={{ xs: 12 }}
        container
        sx={{
          position: "absolute",
          top: "0px",
          right: "0px",
          justifyContent: "center",
          padding: "20px",
          height: "100%",
          background: "#0707076e",
        }}>
        <Grid2
          item
          container
          size={{ xs: 12 }}
          sx={{
            maxWidth: maxWidth,
            height: "100%",
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            textAlign: { xs: "center", sm: "center", md: "left", lg: "left" },
            alignItems: {
              xs: "center",
              sm: "center",
              md: "start",
              lg: "start",
            },
          }}>
          <Grid2 item size={{ xs: 12 }}>
            <Typography
              variant="body1"
              sx={{ color: "#83161c", fontSize: "30px" }}>
              2025 NAC{" "}
              <span style={{ fontSize: "12px", color: "#fefdfe" }}>
                Hosted by
              </span>
            </Typography>
          </Grid2>
          <Grid2 item size={{ xs: 12 }}>
            <Typography
              variant="body1"
              sx={{ color: "#fefdfe", fontSize: "30px", fontWeight: 700 }}>
              Baltimore Athletic Club
            </Typography>
          </Grid2>
          <Grid2
            item
            size={{ xs: 12, sm: 7, md: 4, lg: 4 }}
            sx={{ margin: "10px 0px" }}>
            <Divider sx={{ borderWidth: "1px", borderColor: "#fefdfe" }} />
          </Grid2>
          <Grid2 item size={{ xs: 12, sm: 7, md: 4, lg: 4 }}>
            <Typography variant="body1" sx={{ color: "#fefdfe" }}>
              We're excited to have you join us for this year's competition. Get
              ready for an unforgettable experience filled with energy,
              teamwork, and fierce competition.
            </Typography>
            <Typography variant="body1" sx={{ color: "#fefdfe" }}>
              Registration is open until <b>June 20th</b>, so make sure your
              team is signed up in time.
            </Typography>
          </Grid2>
          <Grid2
            item
            size={{ xs: 12, sm: 7, md: 4, lg: 4 }}
            sx={{ marginTop: "20px" }}>
            <Button
              variant="contained"
              sx={{
                color: "#fefdfe",
                background: "#e01a22",
                borderRadius: "0px",
              }}>
              Register
            </Button>
          </Grid2>
        </Grid2>
      </Grid2>
    </Grid2>
  );
};

export default NACHomePageHeader;
