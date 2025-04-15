import { Box, Grid2, Typography } from "@mui/material";
import React from "react";
import { maxWidth } from "../../home/homePageConstant.js.ts";
import { DataGrid } from "@mui/x-data-grid";

interface Props {}

const NACHomePageOverallStanding: React.FC<Props> = () => {
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
            <Grid2 item sx={{ display: "flex", alignItems: "center" }}>
              <Typography variant="body2">Baltimore Athletic Club</Typography>
            </Grid2>
          </Grid2>
        </Box>
      ),
    },
    {
      field: "matchPlayed",
      headerName: "MP",
      width: 150,
    },
    {
      field: "win",
      headerName: "W",
      width: 150,
    },
    {
      field: "draw",
      headerName: "D",
      width: 150,
    },
    {
      field: "lost",
      headerName: "L",
      width: 150,
    },
    {
      field: "goalDifference",
      headerName: "GD",
      width: 150,
    },
    {
      field: "points",
      headerName: "Pts",
      width: 150,
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
    {
      id: 5,
      clubName: "Baltimore Athletic Club",
      matchPlayed: 0,
      win: 0,
      draw: 0,
      lost: 0,
      goalDifference: 0,
      points: 0,
    },
    {
      id: 6,
      clubName: "Baltimore Athletic Club",
      matchPlayed: 0,
      win: 0,
      draw: 0,
      lost: 0,
      goalDifference: 0,
      points: 0,
    },
    {
      id: 7,
      clubName: "Baltimore Athletic Club",
      matchPlayed: 0,
      win: 0,
      draw: 0,
      lost: 0,
      goalDifference: 0,
      points: 0,
    },
    {
      id: 8,
      clubName: "Baltimore Athletic Club",
      matchPlayed: 0,
      win: 0,
      draw: 0,
      lost: 0,
      goalDifference: 0,
      points: 0,
    },
    {
      id: 9,
      clubName: "Baltimore Athletic Club",
      matchPlayed: 0,
      win: 0,
      draw: 0,
      lost: 0,
      goalDifference: 0,
      points: 0,
    },
    {
      id: 10,
      clubName: "Baltimore Athletic Club",
      matchPlayed: 0,
      win: 0,
      draw: 0,
      lost: 0,
      goalDifference: 0,
      points: 0,
    },
    {
      id: 11,
      clubName: "Baltimore Athletic Club",
      matchPlayed: 0,
      win: 0,
      draw: 0,
      lost: 0,
      goalDifference: 0,
      points: 0,
    },
    {
      id: 12,
      clubName: "Baltimore Athletic Club",
      matchPlayed: 0,
      win: 0,
      draw: 0,
      lost: 0,
      goalDifference: 0,
      points: 0,
    },
    {
      id: 13,
      clubName: "Baltimore Athletic Club",
      matchPlayed: 0,
      win: 0,
      draw: 0,
      lost: 0,
      goalDifference: 0,
      points: 0,
    },
    {
      id: 14,
      clubName: "Baltimore Athletic Club",
      matchPlayed: 0,
      win: 0,
      draw: 0,
      lost: 0,
      goalDifference: 0,
      points: 0,
    },
    {
      id: 15,
      clubName: "Baltimore Athletic Club",
      matchPlayed: 0,
      win: 0,
      draw: 0,
      lost: 0,
      goalDifference: 0,
      points: 0,
    },
    {
      id: 16,
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
          columns={columns}
          checkboxSelection={false}
          initialState={{
            pagination: {
              paginationModel: {
                pageSize: 16,
              },
            },
          }}
          hideFooterPagination={true}
          disableRowSelectionOnClick
        />
      </Grid2>
    </Grid2>
  );
};

export default NACHomePageOverallStanding;
