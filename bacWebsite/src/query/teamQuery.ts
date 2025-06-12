import { useQuery } from "@tanstack/react-query";
import API from "../api/API";
import { makeAPICall } from "../util/makeAPiCall";

const useTournamentTeamsDetail = (tournamentId: string) =>
  useQuery({
    queryKey: ["tournament", tournamentId, "teamsDetail"],
    queryFn: () => makeAPICall(API.getTournamentTeamsDetail(tournamentId)),
  });

export { useTournamentTeamsDetail };
