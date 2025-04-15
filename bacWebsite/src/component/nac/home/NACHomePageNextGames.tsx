import React from "react";
import { Box, Button, Divider, Grid2, Typography } from "@mui/material";
import { maxWidth } from "../../home/homePageConstant.js.ts";
import bacLogo from "../../../assets/bacLogo.png";
interface Props {}

const NACHomePageNextGames: React.FC<Props> = () => {
  return (
    <Grid2
      size={{ xs: 12 }}
      container
      item
      sx={{
        width: "100%",
        overflow: "hidden",
        display: "flex",
        justifyContent: "center",
      }}>
      <Grid2
        item
        container
        size={{ xs: 12 }}
        sx={{
          justifyContent: "center",
          //background: "#332F2F",
          background: `linear-gradient(90deg,rgba(51, 47, 47, 1) 0%, rgba(17, 24, 31, 1) 25%, rgba(51, 47, 47, 1) 100%)`,
        }}>
        <Grid2
          item
          container
          size={{ xs: 12 }}
          sx={{
            maxWidth: maxWidth,
            alignItems: "center",
            display: "flex",
            flexDirection: "row",
            padding: "10px 20px",
          }}>
          <Grid2 item size={{ xs: 6 }}>
            <Typography variant="h6" sx={{ color: "white" }}>
              Next Game
            </Typography>
          </Grid2>
          <Grid2
            item
            size={{ xs: 6 }}
            sx={{ justifyContent: "end", display: "flex" }}>
            <img src={bacLogo} style={{ width: "20px", height: "20px" }} />
          </Grid2>
        </Grid2>
      </Grid2>

      <Grid2
        item
        container
        size={{ xs: 12 }}
        spacing={2}
        sx={{
          alignItems: "center",
          display: "flex",
          flexDirection: "row",
          maxWidth: maxWidth,
          padding: "10px 20px",
        }}>
        {[1, 2].map((val, i) => (
          <Grid2
            item
            size={{ xs: i === 2 ? 12 : 6, sm: i === 2 ? 12 : 6, md: 6, lg: 6 }}
            sx={{ justifyContent: "center", textAlign: "center" }}>
            <Typography variant="body1">Group A</Typography>
            <Typography variant="caption" sx={{ color: "#afb1b3" }}>
              Field 1 - 12/26/1995 12:00 AM
            </Typography>
            <Typography variant="body2">
              BAC <b>VS</b> Himalayan FC
            </Typography>
          </Grid2>
        ))}
      </Grid2>
    </Grid2>
  );
};

export default NACHomePageNextGames;
