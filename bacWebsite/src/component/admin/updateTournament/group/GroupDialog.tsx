import {
  Button,
  Dialog,
  DialogActions,
  DialogContent,
  DialogTitle,
  Grid2,
} from "@mui/material";
import dayjs from "dayjs";
import { Field, FieldArray, Form, Formik } from "formik";
import React, { useContext } from "react";
import { updateTournamentContext } from "../../../../context/updateTournamentContext";
import { useTournamentTeamsDetail } from "../../../../query/teamQuery";
import {
  useIndividualTournament,
  useTournamentsMutation,
} from "../../../../query/tournamentQuery";
import FormikSelect from "../../../common/FormComponent/FormikSelect";
import FormikTextField from "../../../common/FormComponent/FormikTextField";
import { groupSchema } from "./groupValidation";
import FromikAutocomplete from "../../../common/FormComponent/FormikAutocomplete";

interface Props {
  open: boolean;
  title: string;
  event: object;
  isEdit: boolean;
  selectedEventId: string;
  handleClose: Function;
}

const GroupDialog: React.FC<Props> = ({
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

  const initialValue = event;

  const { updateGroupMutation } = useTournamentsMutation(
    getSelectedTournamentId()
  );

  const getTeamsOptions = () => {
    return tournamentTeamsDetail.map((team) => {
      return { key: team?._id, label: team?.name };
    });
  };

  const formatReqBody = (values) => {
    let groups = [];

    values?.groups?.forEach((group) => {
      const teams = group?.teams.map((team) => team?.key);
      groups.push({ ...group, teams: teams });
    });

    return { groups: groups };
  };

  const handleSubmit = (values, setSubmitting) => {
    console.log(formatReqBody(values), "----here");
    updateGroupMutation.mutate(formatReqBody(values), {
      onSuccess: (data) => {
        handleClose();
      },
    });
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
          validationSchema={groupSchema}
          validateOnChange
          onSubmit={(values, { setSubmitting }) => {
            handleSubmit(values, setSubmitting);
          }}>
          {({ values }) => (
            <Form noValidate>
              <DialogContent>
                <FieldArray
                  name="groups"
                  render={(arrayHelpers) => (
                    <Grid2 container spacing={2}>
                      {values.groups &&
                        values.groups.length > 0 &&
                        values.groups.map((friend, index) => (
                          <Grid2
                            container
                            spacing={2}
                            item
                            size={{ xs: 12 }}
                            key={index}>
                            <Grid2 container spacing={2} item size={{ xs: 10 }}>
                              <Grid2 item size={{ xs: 12 }}>
                                <FormikTextField
                                  name={`groups.${index}.name`}
                                  label={"Group Name"}
                                  required
                                />
                              </Grid2>
                              <Grid2 item size={{ xs: 12 }}>
                                <FromikAutocomplete
                                  name={`groups.${index}.teams`}
                                  label={"Teams List"}
                                  multiple
                                  sx={{ width: "100%" }}
                                  options={getTeamsOptions()}
                                />
                              </Grid2>
                            </Grid2>
                            <Grid2 item size={{ xs: 2 }}>
                              <Button
                                type="button"
                                variant="contained"
                                color="error"
                                onClick={() => arrayHelpers.remove(index)} // remove a friend from the list
                              >
                                Remove
                              </Button>
                            </Grid2>
                          </Grid2>
                        ))}

                      <Grid2 container>
                        <Button
                          type="button"
                          variant="outlined"
                          color="primary"
                          onClick={() =>
                            arrayHelpers.push({ name: "", teams: [] })
                          }>
                          {/* show this when user has removed all friends from the list */}
                          Add a group
                        </Button>
                      </Grid2>
                    </Grid2>
                  )}
                />
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
                      Update
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

export default GroupDialog;
