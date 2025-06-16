import { Button, Grid2, IconButton, Typography } from "@mui/material";
import React, { useState } from "react";
import { useTournaments } from "../../../query/tournamentQuery";
import { DataGrid } from "@mui/x-data-grid";
import { format, compareAsc } from "date-fns";
import { Delete, Edit } from "@mui/icons-material";
import LastPageIcon from "@mui/icons-material/LastPage";
import { useNavigate } from "react-router";

interface Props {}

const TournamentTable: React.FC<Props> = () => {
  const [params, setParams] = useState({ page: 0, pageSize: 5 });

  const { data: tournamentsData, isLoading } = useTournaments(params);
  let navigate = useNavigate();

  const columns = [
    {
      field: "name",
      headerName: "Tournament Name",
      flex: 1,
    },
    {
      field: "startDate",
      headerName: "Date Start",
      width: 150,
      valueGetter: (param) => format(new Date(param), "MM/dd/yyyy"),
    },
    {
      field: "endDate",
      headerName: "Date End",
      width: 150,
      valueGetter: (param) => format(new Date(param), "MM/dd/yyyy"),
    },
    {
      field: "actions",
      headerName: "Actions",
      width: 150,
      renderCell: (params: GridRenderCellParams<any, Date>) => (
        <Grid2 container>
          <Grid2 item>
            <IconButton>
              <Edit />
            </IconButton>
          </Grid2>
          <Grid2 item>
            <IconButton>
              <Delete />
            </IconButton>
          </Grid2>
          <Grid2 item>
            <IconButton
              onClick={() => {
                navigate(`/nac/admin/${params?.row?._id}`);
              }}>
              <LastPageIcon />
            </IconButton>
          </Grid2>
        </Grid2>
      ),
    },
  ];

  return (
    <Grid2 container>
      <Grid2 item container size={{ xs: 12 }} sx={{ mb: "20px" }}>
        <Grid2 item size={{ xs: 6 }}>
          <Typography variant="h6">Tournaments Table</Typography>
        </Grid2>
        <Grid2
          item
          size={{ xs: 6 }}
          sx={{ display: "flex", justifyContent: "end" }}>
          <Button variant="contained">Create Tournament</Button>
        </Grid2>
      </Grid2>

      <Grid2 item size={{ xs: 12 }}>
        <DataGrid
          rows={tournamentsData}
          columns={columns}
          checkboxSelection={false}
          loading={isLoading}
          initialState={{
            pagination: {
              paginationModel: {
                pageSize: 5,
              },
            },
          }}
          getRowId={(row) => row?._id}
          disableRowSelectionOnClick
        />
      </Grid2>
    </Grid2>
  );
};

export default TournamentTable;
