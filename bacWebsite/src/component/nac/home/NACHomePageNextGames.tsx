import { Grid2, Paper, Skeleton, Typography } from "@mui/material";
import React, { useState } from "react";
import { maxWidth } from "../../home/homePageConstant.js.ts";
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";
import DateRangeIcon from "@mui/icons-material/DateRange";
import AccessAlarmIcon from "@mui/icons-material/AccessAlarm";
import PlaceIcon from "@mui/icons-material/Place";
import { useIndividualTournament } from "../../../query/tournamentQuery.ts";
import { getTournamentId } from "../../../util/getTournamentId.ts";
import { useTournamentTeamsDetail } from "../../../query/teamQuery.ts";
import { format } from "date-fns";
import { getTournamentDetail, getTournamentFieldDetail } from "../nacUtil.ts";

interface Props {}

const NACHomePageNextGames: React.FC<Props> = () => {
  const [isHoveringViewMore, setIsHoveringViewMore] = useState(false);

  const { data: tournamentData, isLoading: loadingTournamentData } =
    useIndividualTournament(getTournamentId());
  const { data: teamDetailData, isLoading: loadingTeamDetailData } =
    useTournamentTeamsDetail(getTournamentId());

  const findNextTournament = () => {
    let unfinishedTournaments = [];

    if (tournamentData?.schedules) {
      unfinishedTournaments = tournamentData?.schedules.filter(
        (event: { gameStatus: string }) => event?.gameStatus === "PENDING"
      );

      unfinishedTournaments.sort(
        (
          eventA: { dateStart: string | number | Date },
          eventB: { dateStart: string | number | Date }
        ) => new Date(eventA?.dateStart) - new Date(eventB?.dateStart)
      );
    }

    return unfinishedTournaments;
  };

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
        sx={{
          justifyContent: "center",
          //background: "#332F2F",
          background: `linear-gradient(90deg,rgba(51, 47, 47, 1) 0%, rgba(17, 24, 31, 1) 25%, rgba(51, 47, 47, 1) 100%)`,
        }}>
        <Grid2
          item
          container
          size={{ xs: 12 }}
          sx={{
            maxWidth: maxWidth,
            alignItems: "center",
            display: "flex",
            flexDirection: "row",
            padding: "10px 20px",
          }}>
          <Grid2
            item
            size={{ xs: 12 }}
            sx={{
              display: "flex",
              alignItems: "center",
            }}>
            <div
              style={{
                background: "#b10000",
                width: "5px",
                height: "15px",
                marginRight: "5px",
              }}></div>
            <Typography variant={"h6"} sx={{ color: "white" }}>
              Next Games
            </Typography>
          </Grid2>
        </Grid2>
      </Grid2>

      {loadingTournamentData || loadingTeamDetailData ? (
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
            marginTop: "20px",
          }}>
          <Grid2
            item
            size={{
              xs: 12,
              sm: 6,
              md: 6,
              lg: 6,
            }}
            spacing={2}
            sx={{ justifyContent: "center", textAlign: "center" }}>
            <Paper elevation={2} sx={{ width: "100%", padding: "20px 0px" }}>
              <Skeleton variant="rectangular" height={"1rem"} />
              <Skeleton
                variant="rectangular"
                height={"0.75rem"}
                sx={{ mt: "10px" }}
              />
              <Skeleton
                variant="rectangular"
                height={"0.875rem"}
                sx={{ mt: "10px" }}
              />
            </Paper>
          </Grid2>
          <Grid2
            item
            size={{
              xs: 12,
              sm: 6,
              md: 6,
              lg: 6,
            }}
            sx={{ justifyContent: "center", textAlign: "center" }}>
            <Paper elevation={2} sx={{ width: "100%", padding: "20px 0px" }}>
              <Skeleton variant="rectangular" height={"1rem"} />
              <Skeleton
                variant="rectangular"
                height={"0.75rem"}
                sx={{ mt: "10px" }}
              />
              <Skeleton
                variant="rectangular"
                height={"0.875rem"}
                sx={{ mt: "10px" }}
              />
            </Paper>
          </Grid2>
        </Grid2>
      ) : (
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
            marginTop: "20px",
          }}>
          {findNextTournament().map(
            (
              event: {
                title:
                  | string
                  | number
                  | boolean
                  | React.ReactElement<
                      any,
                      string | React.JSXElementConstructor<any>
                    >
                  | Iterable<React.ReactNode>
                  | React.ReactPortal
                  | null
                  | undefined;
                dateStart: string | number | Date;
                fieldId: string;
                teamA: { teamId: string };
                teamB: { teamId: string };
              },
              i: number
            ) => (
              <>
                {i < 2 && (
                  <Grid2
                    item
                    size={{
                      xs: 12,
                      sm: 6,
                      md: 6,
                      lg: 6,
                    }}
                    sx={{ justifyContent: "center", textAlign: "center" }}>
                    <Paper
                      elevation={2}
                      sx={{ width: "100%", padding: "20px 0px" }}>
                      <Typography variant="body1">{event?.title}</Typography>

                      <Typography
                        variant="caption"
                        sx={{
                          color: "#afb1b3",
                          display: "flex",
                          justifyContent: "center",
                          alignItems: "center",
                        }}>
                        <DateRangeIcon
                          sx={{
                            fontSize: "15px",
                            marginRight: "5px",
                          }}
                        />{" "}
                        {format(new Date(event?.dateStart), "MM/dd/yyyy")}
                        {"   "}
                        <AccessAlarmIcon
                          sx={{
                            fontSize: "15px",
                            marginLeft: "8px",
                            marginRight: "5px",
                          }}
                        />{" "}
                        {format(new Date(event?.dateStart), "hh:mm aaa")}
                      </Typography>
                      <Typography
                        variant="caption"
                        sx={{
                          color: "#afb1b3",
                          display: "flex",
                          justifyContent: "center",
                          alignItems: "center",
                        }}>
                        {
                          getTournamentFieldDetail(
                            tournamentData?.fields,
                            event?.fieldId
                          )?.name
                        }
                        <PlaceIcon
                          sx={{
                            fontSize: "15px",
                            marginLeft: "8px",
                            marginRight: "5px",
                          }}
                        />{" "}
                        {
                          getTournamentFieldDetail(
                            tournamentData?.fields,
                            event?.fieldId
                          )?.address?.address
                        }{" "}
                        {
                          getTournamentFieldDetail(
                            tournamentData?.fields,
                            event?.fieldId
                          )?.address?.city
                        }
                        ,{" "}
                        {
                          getTournamentFieldDetail(
                            tournamentData?.fields,
                            event?.fieldId
                          )?.address?.state
                        }{" "}
                        {
                          getTournamentFieldDetail(
                            tournamentData?.fields,
                            event?.fieldId
                          )?.address?.zipCode
                        }
                      </Typography>
                      <Grid2 container spacing={1}>
                        <Grid2
                          item
                          size={{ xs: 5 }}
                          sx={{
                            display: "flex",
                            justifyContent: "end",
                            alignItems: "center",
                          }}>
                          <Typography variant="body2" sx={{ textAlign: "end" }}>
                            {
                              getTournamentDetail(
                                teamDetailData,
                                event?.teamA?.teamId
                              )?.acronym
                            }
                          </Typography>
                        </Grid2>
                        <Grid2 item size={{ xs: 2 }}>
                          <Typography variant="h6">VS</Typography>
                        </Grid2>
                        <Grid2
                          item
                          size={{ xs: 5 }}
                          sx={{
                            display: "flex",
                            justifyContent: "start",
                            alignItems: "center",
                          }}>
                          <Typography
                            variant="body2"
                            sx={{ textAlign: "start" }}>
                            {
                              getTournamentDetail(
                                teamDetailData,
                                event?.teamB?.teamId
                              )?.acronym
                            }
                          </Typography>
                        </Grid2>
                      </Grid2>
                    </Paper>
                  </Grid2>
                )}
              </>
            )
          )}
        </Grid2>
      )}

      <Grid2
        item
        size={{ xs: 12 }}
        sx={{
          maxWidth: maxWidth,
          alignItems: "center",
          display: "flex",
          flexDirection: "row",
          justifyContent: "center",
          cursor: "pointer",
          marginTop: "20px",
          marginBottom: "50px",
        }}
        onMouseEnter={() => setIsHoveringViewMore(true)}
        onMouseLeave={() => setIsHoveringViewMore(false)}>
        <Typography
          variant="body2"
          sx={{ color: isHoveringViewMore ? "#b10000" : "#afb1b3" }}>
          VIEW MORE
        </Typography>
        <ArrowForwardIosIcon
          sx={{
            fontSize: "12px",
            color: isHoveringViewMore ? "#b10000" : "#afb1b3",
            visibility: isHoveringViewMore ? "visible" : "hidden",
          }}
        />
      </Grid2>
    </Grid2>
  );
};

export default NACHomePageNextGames;
