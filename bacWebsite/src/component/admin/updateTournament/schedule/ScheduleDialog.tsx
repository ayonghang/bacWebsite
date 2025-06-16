import {
  Button,
  Dialog,
  DialogActions,
  DialogContent,
  DialogTitle,
  Grid2,
  Typography,
} from "@mui/material";
import dayjs from "dayjs";
import { Form, Formik } from "formik";
import React, { useContext } from "react";
import { updateTournamentContext } from "../../../../context/updateTournamentContext";
import { useTournamentTeamsDetail } from "../../../../query/teamQuery";
import {
  useIndividualTournament,
  useTournamentsMutation,
} from "../../../../query/tournamentQuery";
import FromikAutocomplete from "../../../common/FormComponent/FormikAutocomplete";
import FormikDateTimePicker from "../../../common/FormComponent/FormikDateTimePicker";
import FormikSelect from "../../../common/FormComponent/FormikSelect";
import FormikTextField from "../../../common/FormComponent/FormikTextField";
import { scheduleSchema } from "./scheduleValidation";

interface Props {
  open: boolean;
  title: string;
  event: object;
  isEdit: boolean;
  selectedEventId: string;
  handleClose: Function;
}

const ScheduleDialog: React.FC<Props> = ({
  open,
  title,
  event,
  isEdit,
  selectedEventId,
  handleClose,
}) => {
  const { getSelectedTournamentId } = useContext(updateTournamentContext);

  const { data: tournamentData, isLoading } = useIndividualTournament(
    getSelectedTournamentId()
  );

  const { data: tournamentTeamsDetail, isLoading: isTeamTournamentLoading } =
    useTournamentTeamsDetail(getSelectedTournamentId());

  const initialValue = isEdit
    ? event
    : {
        teamA: { teamId: "", score: 0 },
        teamB: { teamId: "", score: 0 },
        dateStart: dayjs(new Date()),
        dateEnd: dayjs(new Date()),
        fieldId: "",
        gameType: "",
        gameStatus: "PENDING",
        referees: [],
      };

  const { addScheduleGameMutation, updateScheduleGameMutation } =
    useTournamentsMutation(getSelectedTournamentId());

  const getTeamsOptions = () => {
    return tournamentTeamsDetail.map((team) => {
      return { key: team?._id, label: team?.name };
    });
  };

  const getFieldOptions = () => {
    return tournamentData?.fields.map((val) => {
      return { key: val?._id, label: val?.name };
    });
  };

  const getRefereeOptions = () => {
    return tournamentData?.referees.map((val) => {
      return { key: val?._id, label: val?.name };
    });
  };

  const formatReqBody = (values) => {
    const refs = values?.referees.map((ref) => ref?.key);

    const reqBody = {
      ...values,
      referees: refs,
    };

    return reqBody;
  };

  const handleSubmit = (values, setSubmitting) => {
    if (isEdit) {
      updateScheduleGameMutation.mutate(
        {
          id: selectedEventId,
          ...formatReqBody(values),
        },
        {
          onSuccess: (data) => {
            handleClose();
          },
        }
      );
    } else {
      addScheduleGameMutation.mutate(formatReqBody(values), {
        onSuccess: (data) => {
          handleClose();
        },
      });
    }
  };

  return (
    <Dialog
      open={open}
      onClose={handleClose}
      fullWidth={true}
      maxWidth={"lg"}
      aria-labelledby="schedule-dialog-title"
      aria-describedby="schedule-dialog-description">
      <DialogTitle id="schedule-dialog-title">{title}</DialogTitle>
      {!isTeamTournamentLoading && !isLoading && (
        <Formik
          initialValues={initialValue}
          validationSchema={scheduleSchema}
          validateOnChange
          onSubmit={(values, { setSubmitting }) => {
            handleSubmit(values, setSubmitting);
          }}>
          {(formikBag) => (
            <Form noValidate>
              <DialogContent>
                <Grid2 container spacing={2}>
                  <Grid2 item container spacing={2} size={{ xs: 12 }}>
                    <Grid2 item container spacing={2} size={{ xs: 6 }}>
                      <Grid2 item size={{ xs: 12 }}>
                        <Typography variant="subtitle">Team A</Typography>
                      </Grid2>
                      <Grid2 item size={{ xs: 10 }}>
                        <FormikSelect
                          name="teamA.teamId"
                          label="Team A"
                          required
                          options={getTeamsOptions()}
                        />
                      </Grid2>
                      <Grid2 item size={{ xs: 2 }}>
                        <FormikTextField
                          name="teamA.score"
                          label="score"
                          type="number"
                        />
                      </Grid2>
                    </Grid2>

                    <Grid2 item container spacing={2} size={{ xs: 6 }}>
                      <Grid2 item size={{ xs: 12 }}>
                        <Typography variant="subtitle">Team B</Typography>
                      </Grid2>
                      <Grid2 item size={{ xs: 10 }}>
                        <FormikSelect
                          name="teamB.teamId"
                          label="Team B"
                          required
                          options={getTeamsOptions()}
                        />
                      </Grid2>
                      <Grid2 item size={{ xs: 2 }}>
                        <FormikTextField
                          name="teamB.score"
                          label="score"
                          type="number"
                        />
                      </Grid2>
                    </Grid2>
                  </Grid2>

                  <Grid2 container spacing={2} item size={{ xs: 12 }}>
                    <Grid2 item size={{ xs: 6 }}>
                      <FormikDateTimePicker
                        name="dateStart"
                        label={"Date Start"}
                      />
                    </Grid2>
                    <Grid2 item size={{ xs: 6 }}>
                      <FormikDateTimePicker
                        name="dateEnd"
                        label={"Date Start"}
                      />
                    </Grid2>
                  </Grid2>

                  <Grid2 container spacing={2} item size={{ xs: 12 }}>
                    <Grid2 item size={{ xs: 6 }}>
                      <FormikSelect
                        name="fieldId"
                        required
                        label={"Field"}
                        options={getFieldOptions()}
                      />
                    </Grid2>
                    <Grid2 item size={{ xs: 6 }}>
                      <FormikSelect
                        name="gameStatus"
                        label={"Game Status"}
                        required
                        options={[
                          { key: "PENDING", label: "Pending" },
                          { key: "LIVE", label: "Live" },
                          { key: "ENDED", label: "Ended" },
                        ]}
                      />
                    </Grid2>
                  </Grid2>

                  <Grid2 container spacing={2} item size={{ xs: 12 }}>
                    <FormikSelect
                      name="gameType"
                      label={"Game Type"}
                      required
                      options={[
                        { key: "GROUP", label: "Group Stage" },
                        { key: "QF", label: "Quarter Final" },
                        { key: "SF", label: "Semi Final" },
                        { key: "F", label: "Finals" },
                      ]}
                    />
                  </Grid2>

                  <Grid2 container spacing={2} item size={{ xs: 12 }}>
                    <FromikAutocomplete
                      name="referees"
                      label={"Referee"}
                      multiple
                      sx={{ width: "100%" }}
                      options={getRefereeOptions()}
                    />
                  </Grid2>
                </Grid2>
              </DialogContent>

              <DialogActions>
                <Grid2
                  container
                  sx={{
                    width: "100%",
                    padding: "0px 10px",
                    marginBottom: "10px",
                  }}>
                  <Grid2 item size={{ xs: 6 }}>
                    <Button variant="text" onClick={handleClose}>
                      Cancel
                    </Button>
                  </Grid2>
                  <Grid2
                    item
                    size={{ xs: 6 }}
                    sx={{ display: "flex", justifyContent: "end" }}>
                    <Button variant="contained" color="primary" type="submit">
                      Add
                    </Button>
                  </Grid2>
                </Grid2>
              </DialogActions>
            </Form>
          )}
        </Formik>
      )}
    </Dialog>
  );
};

export default ScheduleDialog;
