import { useQuery } from "@tanstack/react-query";
import API from "../api/API";
import { makeAPICall } from "../util/makeAPiCall";

const useIndividualTournament = (tournamentId: string) =>
  useQuery({
    queryKey: ["individual", "tournament", tournamentId],
    queryFn: () => makeAPICall(API.getIndividualTournament(tournamentId)),
  });

const useTournamentStanding = (tournamentId: string) =>
  useQuery({
    queryKey: ["tournament", tournamentId, "standing"],
    queryFn: () => makeAPICall(API.getTournamentStanding(tournamentId)),
  });

const useTournamentTeamsDetail = (tournamentId: string) =>
  useQuery({
    queryKey: ["tournament", tournamentId, "teamsDetail"],
    queryFn: () => makeAPICall(API.getTournamentStanding(tournamentId)),
  });

export { useIndividualTournament, useTournamentStanding };
