import { Grid2 } from "@mui/material";
import React from "react";
import TournamentTable from "./TournamentTable";
interface Props {}

const TournamentSection: React.FC<Props> = () => {
  return (
    <Grid2 container>
      <Grid2 item xs={12}>
        <TournamentTable />
      </Grid2>
    </Grid2>
  );
};

export default TournamentSection;
