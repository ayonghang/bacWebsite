import { Box, Grid2, Typography } from "@mui/material";
import { DataGrid } from "@mui/x-data-grid";
import React from "react";

interface Props {}

const NACStandingGroupStage: React.FC<Props> = () => {
  const columns = [
    {
      field: "clubName",
      headerName: "Club Name",
      flex: 1,
      renderCell: (params) => (
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
              <Typography variant="body2">Baltimore Athletic Club</Typography>
            </Grid2>
          </Grid2>
        </Box>
      ),
    },
    {
      field: "matchPlayed",
      headerName: "MP",
      width: 50,
    },
    {
      field: "win",
      headerName: "W",
      width: 50,
    },
    {
      field: "draw",
      headerName: "D",
      width: 50,
    },
    {
      field: "lost",
      headerName: "L",
      width: 50,
    },
    {
      field: "goalDifference",
      headerName: "GD",
      width: 50,
    },
    {
      field: "points",
      headerName: "Pts",
      width: 50,
    },
  ];

  const rows = [
    {
      id: 1,
      clubName: "Baltimore Athletic Club",
      matchPlayed: 0,
      win: 0,
      draw: 0,
      lost: 0,
      goalDifference: 0,
      points: 0,
    },
    {
      id: 2,
      clubName: "Baltimore Athletic Club",
      matchPlayed: 0,
      win: 0,
      draw: 0,
      lost: 0,
      goalDifference: 0,
      points: 0,
    },
    {
      id: 3,
      clubName: "Baltimore Athletic Club",
      matchPlayed: 0,
      win: 0,
      draw: 0,
      lost: 0,
      goalDifference: 0,
      points: 0,
    },
    {
      id: 4,
      clubName: "Baltimore Athletic Club",
      matchPlayed: 0,
      win: 0,
      draw: 0,
      lost: 0,
      goalDifference: 0,
      points: 0,
    },
  ];

  return (
    <Grid2 container>
      {[1, 2, 3, 4].map((val) => (
        <Grid2
          container
          item
          size={{ xs: 12 }}
          rowSpacing={1}
          sx={{ marginTop: "20px" }}>
          <Grid2 item size={{ xs: 12 }}>
            <Typography variant="h6">GROUP {val}</Typography>
          </Grid2>
          <Grid2 item size={{ xs: 12 }}>
            <DataGrid
              rows={rows}
              columns={columns}
              checkboxSelection={false}
              initialState={{
                pagination: {
                  paginationModel: {
                    pageSize: 4,
                  },
                },
              }}
              hideFooter={true}
              disableRowSelectionOnClick
            />
          </Grid2>
        </Grid2>
      ))}
    </Grid2>
  );
};

export default NACStandingGroupStage;
