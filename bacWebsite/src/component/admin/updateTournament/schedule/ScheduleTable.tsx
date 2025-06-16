import { Delete, Edit } from "@mui/icons-material";
import { Button, Grid2, IconButton, Typography } from "@mui/material";
import { DataGrid } from "@mui/x-data-grid";
import { format } from "date-fns";
import React, { useContext, useState } from "react";
import { updateTournamentContext } from "../../../../context/updateTournamentContext";
import {
  useIndividualTournament,
  useTournamentsMutation,
} from "../../../../query/tournamentQuery";
import ScheduleDialog from "./ScheduleDialog";
import { useTournamentTeamsDetail } from "../../../../query/teamQuery";
import dayjs from "dayjs";
import DecisionDialog from "../../../common/DecisionDialog";

interface Props {}

const ScheduleTable: React.FC<Props> = () => {
  const [isDialogOpen, setIsDialogOpen] = useState(false);
  const [isDeleteDialogOpen, setIsDeleteDialogOpen] = useState(false);
  const [selectedEvent, setSelectedEvent] = useState(null);

  const { getSelectedTournamentId } = useContext(updateTournamentContext);
  const { deleteScheduleGameMutation } = useTournamentsMutation(
    getSelectedTournamentId()
  );

  const { data: tournamentData, isLoading } = useIndividualTournament(
    getSelectedTournamentId()
  );
  const { data: tournamentTeamData, isLoading: teamDataLoading } =
    useTournamentTeamsDetail(getSelectedTournamentId());

  const getTeamDetail = (teamId) => {
    if (tournamentTeamData) {
      return tournamentTeamData.find((td) => td?._id === teamId);
    } else {
      return {};
    }
  };

  const formatEventDefaultValue = (event) => {
    let formattedVal = {
      ...event,
      dateStart: dayjs(event?.dateStart),
      dateEnd: dayjs(event?.dateEnd),
    };

    let formattedReferees = [];

    event?.referees.forEach((referee) => {
      const foundRefDetail = tournamentData?.referees.find(
        (FR) => referee === FR?._id
      );

      formattedReferees.push({
        key: foundRefDetail?._id,
        label: foundRefDetail?.name,
      });
    });

    formattedVal.referees = formattedReferees;

    return formattedVal;
  };

  const columns = [
    {
      field: "teamA",
      headerName: "Team A",
      flex: 1,
      valueGetter: (param) =>
        `${getTeamDetail(param?.teamId)?.name} (${param?.score})`,
    },
    {
      field: "teamB",
      headerName: "Team B",
      flex: 1,
      valueGetter: (param) =>
        `${getTeamDetail(param?.teamId)?.name} (${param?.score})`,
    },
    {
      field: "dateStart",
      headerName: "Date Start",
      width: 180,
      valueGetter: (param) => format(new Date(param), "MM/dd/yyyy h:mm a"),
    },
    {
      field: "dateEnd",
      headerName: "End Time",
      width: 180,
      valueGetter: (param) => format(new Date(param), "MM/dd/yyyy h:mm a"),
    },
    {
      field: "gameType",
      headerName: "Game Type",
      width: 100,
    },
    {
      field: "gameStatus",
      headerName: "Game Status",
      width: 120,
    },
    {
      field: "actions",
      headerName: "Actions",
      width: 150,
      renderCell: (params: GridRenderCellParams<any, Date>) => (
        <Grid2 container>
          <Grid2 item>
            <IconButton
              onClick={() => {
                setIsDialogOpen(true);
                setSelectedEvent(params?.row);
              }}>
              <Edit />
            </IconButton>
          </Grid2>
          <Grid2 item>
            <IconButton
              onClick={() => {
                setIsDeleteDialogOpen(true);
                setSelectedEvent(params?.row);
              }}>
              <Delete />
            </IconButton>
          </Grid2>
        </Grid2>
      ),
    },
  ];

  return (
    <Grid2 container>
      <ScheduleDialog
        open={isDialogOpen}
        title={selectedEvent ? "Edit Schedule Event" : "Add Schedule Event"}
        handleClose={() => {
          setIsDialogOpen(false);
          setSelectedEvent(null);
        }}
        event={formatEventDefaultValue(selectedEvent)}
        isEdit={selectedEvent ? true : false}
        selectedEventId={selectedEvent?._id}
      />

      <DecisionDialog
        isOpen={isDeleteDialogOpen}
        title={"Delete Schedule Event"}
        message={"This will permanently delete the schedule event."}
        confirmBtnText={"delete"}
        onConfirm={() => {
          deleteScheduleGameMutation.mutate(selectedEvent?._id, {
            onSuccess: (data) => {
              setIsDeleteDialogOpen(false);
              setSelectedEvent(null);
            },
          });
        }}
        handleClose={() => {
          setIsDeleteDialogOpen(false);
          setSelectedEvent(null);
        }}
      />

      <Grid2 item container size={{ xs: 12 }} sx={{ mb: "20px" }}>
        <Grid2 item size={{ xs: 6 }}>
          <Typography variant="h6">Tournaments Schedule Table</Typography>
        </Grid2>
        <Grid2
          item
          size={{ xs: 6 }}
          sx={{ display: "flex", justifyContent: "end" }}>
          <Button
            variant="contained"
            onClick={() => {
              setIsDialogOpen(true);
            }}>
            Add Schedule
          </Button>
        </Grid2>
      </Grid2>

      <Grid2 item size={{ xs: 12 }}>
        <DataGrid
          rows={tournamentData?.schedules}
          columns={columns}
          checkboxSelection={false}
          loading={isLoading || teamDataLoading}
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

export default ScheduleTable;
