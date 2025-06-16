import { Delete, Edit } from "@mui/icons-material";
import {
  Box,
  Button,
  Chip,
  Grid2,
  IconButton,
  Stack,
  Typography,
} from "@mui/material";
import { DataGrid } from "@mui/x-data-grid";
import { format } from "date-fns";
import React, { useContext, useState } from "react";
import { updateTournamentContext } from "../../../../context/updateTournamentContext";
import {
  useIndividualTournament,
  useTournamentsMutation,
} from "../../../../query/tournamentQuery";
import ScheduleDialog from "../schedule/ScheduleDialog";
import { useTournamentTeamsDetail } from "../../../../query/teamQuery";
import dayjs from "dayjs";
import DecisionDialog from "../../../common/DecisionDialog";
import GroupDialog from "./GroupDialog";

interface Props {}

const GroupTable: React.FC<Props> = () => {
  const [isDialogOpen, setIsDialogOpen] = useState(false);

  const { getSelectedTournamentId } = useContext(updateTournamentContext);

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

  const formatEventDefaultValue = () => {
    const tournamentGroupData = tournamentData?.groups;

    let formattedGroupValue = [];

    tournamentGroupData?.forEach((group) => {
      const detailTeams = group.teams.map((teamId) => {
        return { key: teamId, label: getTeamDetail(teamId)?.name };
      });
      const FG = { ...group, teams: detailTeams };

      formattedGroupValue.push(FG);
    });

    return { groups: formattedGroupValue };
  };

  const columns = [
    {
      field: "name",
      headerName: "Group Name",
      flex: 1,
    },
    {
      field: "teams",
      headerName: "Team B",
      flex: 1,
      renderCell: (param) => (
        <Box sx={{ display: "block ruby", alignItems: "center" }}>
          <Stack direction="row" spacing={1}>
            {param?.formattedValue.map((val) => (
              <Chip
                variant="outlined"
                sx={{ padding: "0px 10px" }}
                label={getTeamDetail(val)?.name}
                size="small"
              />
            ))}
          </Stack>
        </Box>
      ),
    },
  ];

  return (
    <Grid2 container sx={{ mt: "50px" }}>
      <GroupDialog
        open={isDialogOpen}
        title={"Update Group"}
        handleClose={() => {
          setIsDialogOpen(false);
        }}
        event={formatEventDefaultValue()}
      />

      <Grid2 item container size={{ xs: 12 }} sx={{ mb: "20px" }}>
        <Grid2 item size={{ xs: 6 }}>
          <Typography variant="h6">Group Stage Table</Typography>
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
            Update Group
          </Button>
        </Grid2>
      </Grid2>

      <Grid2 item size={{ xs: 12 }}>
        <DataGrid
          rows={tournamentData?.groups}
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

export default GroupTable;
