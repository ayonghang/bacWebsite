import { Box, Grid2, Typography } from "@mui/material";
import React from "react";
import { maxWidth } from "../../home/homePageConstant.js.ts";
import { DataGrid } from "@mui/x-data-grid";
import { useTournamentStanding } from "../../../query/tournamentQuery.ts";
import { getTournamentId } from "../../../util/getTournamentId.ts";
import { useTournamentTeamsDetail } from "../../../query/teamQuery.ts";
import { getTournamentDetail } from "../nacUtil.ts";

interface Props {}

const width = 80;

const NACHomePageOverallStanding: React.FC<Props> = () => {
  const { data: tournamentStanding, isLoading: standingIsLoading } =
    useTournamentStanding(getTournamentId());

  const {
    data: tournamentTeamsDetail,
    isLoading: tournamentTeamsDetailIsLoading,
  } = useTournamentTeamsDetail(getTournamentId());

  const columns = [
    {
      field: "clubName",
      headerName: "Club Name",
      flex: 1,
      renderCell: (params: any) => (
        <Box
          sx={{
            height: "100%",
            display: "flex",
            alignItems: "center",
          }}>
          <Grid2 container sx={{ display: "flex" }} spacing={2}>
            <Grid2 item sx={{ display: "flex" }}>
              <img
                src=""
                alt=""
                style={{ width: "30px", height: "30px", background: "gray" }}
              />
            </Grid2>
            <Grid2
              item
              sx={{
                alignItems: "center",
                display: { xs: "none", sm: "flex", md: "flex", lg: "flex" },
              }}>
              <Typography variant="body2">
                {getTournamentDetail(tournamentTeamsDetail, params?.id)?.name}
              </Typography>
            </Grid2>
          </Grid2>
        </Box>
      ),
    },
    {
      field: "matchPlayed",
      headerName: "MP",
      width: width,
    },
    {
      field: "win",
      headerName: "W",
      width: width,
    },
    {
      field: "draw",
      headerName: "D",
      width: width,
    },
    {
      field: "loss",
      headerName: "L",
      width: width,
    },
    {
      field: "goalFor",
      headerName: "GF",
      width: width,
    },
    {
      field: "goalAgainst",
      headerName: "GA",
      width: width,
    },
    {
      field: "goalDiff",
      headerName: "GD",
      width: width,
    },
    {
      field: "points",
      headerName: "Pts",
      width: width,
    },
  ];

  const rows = tournamentStanding;

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
        spacing={2}
        sx={{
          alignItems: "center",
          display: "flex",
          flexDirection: "row",
          maxWidth: maxWidth,
          padding: "10px 20px",
        }}></Grid2>
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
        <DataGrid
          rows={rows}
          getRowId={(row) => row?.teamId}
          columns={columns}
          checkboxSelection={false}
          disableColumnFilter
          disableColumnMenu={true}
          initialState={{
            pagination: {
              paginationModel: {
                pageSize: 16,
              },
            },
          }}
          loading={standingIsLoading || tournamentTeamsDetailIsLoading}
          hideFooterPagination={true}
          disableRowSelectionOnClick
        />
      </Grid2>
    </Grid2>
  );
};

export default NACHomePageOverallStanding;
