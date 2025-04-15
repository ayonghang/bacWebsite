import { Grid2 } from "@mui/material";
import React from "react";
import Footer from "../common/Footer.tsx";
import { maxWidth } from "../home/homePageConstant.js.ts";
import NACHomePageHeader from "./home/NacHomePageHeader.tsx";
import NACHomePageNextGames from "./home/NACHomePageNextGames.tsx";
import NACHomePageOverallStanding from "./home/NACHomePageOverallStanding.tsx";
import SectionWrapper from "../common/SectionWrapper.tsx";
interface Props {}

const NACHomePage: React.FC<Props> = () => {
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

      {/* Top Header */}
      <NACHomePageHeader />

      {/* Next Game */}

      {/* NAC Overall Standing */}
      <SectionWrapper
        title={"Standing"}
        isWhiteBackground={true}
        sectionComponent={<NACHomePageOverallStanding />}
      />

      <Grid2
        size={{ xs: 12 }}
        sx={{
          maxWidth: maxWidth,
        }}>
        {/* Body of the content goes here  */}
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

export default NACHomePage;
