import { Grid2, Typography } from "@mui/material";
import React, { useContext } from "react";
import Footer from "../../common/Footer.tsx";
import { maxWidth } from "../../home/homePageConstant.js.ts";
import { updateTournamentContext } from "../../../context/updateTournamentContext.tsx";
import ScheduleTable from "./schedule/ScheduleTable.tsx";
import GroupTable from "./group/GroupTable.tsx";
interface Props {}

const UpdateTournament: React.FC<Props> = () => {
  const { getSelectedTournamentId } = useContext(updateTournamentContext);

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
        size={{ xs: 12 }}
        sx={{
          maxWidth: maxWidth,
          padding: "0px 20px",
        }}>
        <ScheduleTable />
        <GroupTable />
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

export default UpdateTournament;
