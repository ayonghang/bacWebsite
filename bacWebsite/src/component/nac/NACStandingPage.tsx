import { Grid2 } from "@mui/material";
import Tab from "@mui/material/Tab";
import Tabs from "@mui/material/Tabs";
import React, { useState } from "react";
import Footer from "../common/Footer.tsx";
import { maxWidth } from "../home/homePageConstant.js.ts";
import NACStandingGroupStage from "./standing/NACStandingGroupStage.tsx";
import NACStandingKnockoutStage from "./standing/NACStandingKnockoutStage.tsx";

interface Props {}

const GROUP_STAGE_TAB = "groupStage";
const KNOCK_OUT_ROUND_TAB = "knockOutRound";

const NACStandingPage: React.FC<Props> = () => {
  const [value, setValue] = useState(GROUP_STAGE_TAB);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <Grid2
      container
      sx={{
        minHeight: "100vh",
        justifyContent: "center",
        display: "flex",
        background: "#f6f6f6",
      }}>
      <Grid2
        size={{ xs: 12 }}
        sx={{
          height: { xs: "130px", sm: "130px", md: "150px", lg: "150px" },
        }}></Grid2>

      <Grid2
        item
        container
        size={{ xs: 12 }}
        sx={{ display: "flex", justifyContent: "center" }}>
        <Grid2
          item
          size={{ xs: 12 }}
          sx={{
            maxWidth: maxWidth,
            marginTop: "40px",
          }}>
          <Tabs
            value={value}
            onChange={handleChange}
            slotProps={{
              indicator: {
                style: {
                  backgroundColor: "#11181f",
                },
              },
            }}
            sx={{
              "&.Mui-selected": {
                color: "#11181f",
              },
            }}>
            <Tab value={GROUP_STAGE_TAB} label="Group Stage" />
            <Tab value={KNOCK_OUT_ROUND_TAB} label="Knock out rounds" />
          </Tabs>
        </Grid2>

        {/* Tab content */}
        <Grid2
          item
          size={{ xs: 12 }}
          sx={{
            maxWidth: maxWidth,
            marginTop: "20px",
            padding: { xs: "0px 20px" },
          }}>
          {value === GROUP_STAGE_TAB && <NACStandingGroupStage />}

          {value === KNOCK_OUT_ROUND_TAB && <NACStandingKnockoutStage />}
        </Grid2>
      </Grid2>

      <Grid2
        size={{ xs: 12 }}
        sx={{
          justifyContent: "center",
          alignContent: "center",
          display: "flex",
          padding: "60px 0px",
          background: "#11181f",
          marginTop: "60px",
        }}>
        <Grid2
          size={{ xs: 12 }}
          sx={{
            maxWidth: maxWidth,
            padding: { xs: "0px 20px", sm: "0px 15px", md: "0px 10px" },
          }}>
          <Footer />
        </Grid2>
      </Grid2>
    </Grid2>
  );
};

export default NACStandingPage;
