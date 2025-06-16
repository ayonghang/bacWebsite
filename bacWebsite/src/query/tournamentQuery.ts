import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
import API from "../api/API";
import { makeAPICall } from "../util/makeAPiCall";
import { toast } from "react-toastify";

const useTournaments = (params) =>
  useQuery({
    queryKey: ["all", "tournament"],
    queryFn: () => makeAPICall(API.getAllTournaments(params)),
  });

const useIndividualTournament = (tournamentId: string) =>
  useQuery({
    queryKey: ["individual", "tournament"],
    queryFn: () => makeAPICall(API.getIndividualTournament(tournamentId)),
  });

const useTournamentStanding = (tournamentId: string) =>
  useQuery({
    queryKey: ["tournament", tournamentId, "standing"],
    queryFn: () => makeAPICall(API.getTournamentStanding(tournamentId)),
  });

const useTournamentsMutation = (tournamentId) => {
  const queryClient = useQueryClient();

  const addScheduleGameMutation = useMutation({
    mutationFn: (reqBody) =>
      makeAPICall(API.addTournamentGame(tournamentId, reqBody)),
    mutationKey: "addTournamentGame",
    onSuccess: (data) => {
      queryClient.invalidateQueries({ queryKey: ["individual", "tournament"] });
      toast.success("Successfully added event to the tournament");
    },
    onError: (err, variables) => {
      const errorMessage = err?.originalError?.response?.data?.error
        ? err?.originalError?.response?.data?.error
        : "Error occurred when adding the tournament event";
      toast.error(errorMessage);
    },
  });

  const updateScheduleGameMutation = useMutation({
    mutationFn: (reqBody) =>
      makeAPICall(API.updateTournamentGame(tournamentId, reqBody?.id, reqBody)),
    mutationKey: "updateTournamentGame",
    onSuccess: (data) => {
      queryClient.invalidateQueries({ queryKey: ["individual", "tournament"] });
      toast.success("Successfully updated event to the tournament");
    },
    onError: (err, variables) => {
      const errorMessage = err?.originalError?.response?.data?.error
        ? err?.originalError?.response?.data?.error
        : "Error occurred when updating the tournament event";
      toast.error(errorMessage);
    },
  });

  const deleteScheduleGameMutation = useMutation({
    mutationFn: (eventId) =>
      makeAPICall(API.deleteTournamentGame(tournamentId, eventId)),
    mutationKey: "deleteTournamentGame",
    onSuccess: (data) => {
      queryClient.invalidateQueries({
        queryKey: ["individual", "tournament"],
      });
      toast.success("Successfully deleted event to the tournament");
    },
    onError: (err, variables) => {
      const errorMessage = err?.originalError?.response?.data?.error
        ? err?.originalError?.response?.data?.error
        : "Error occurred when deleting the tournament event";
      toast.error(errorMessage);
    },
  });

  const updateGroupMutation = useMutation({
    mutationFn: (reqBody) =>
      makeAPICall(API.updateTournamentGroup(tournamentId, reqBody)),
    mutationKey: "updateGroupMutation",
    onSuccess: (data) => {
      queryClient.invalidateQueries({
        queryKey: ["individual", "tournament"],
      });
      toast.success("Successfully updated tournament group");
    },
    onError: (err, variables) => {
      const errorMessage = err?.originalError?.response?.data?.error
        ? err?.originalError?.response?.data?.error
        : "Error occurred when updating tournament group";
      toast.error(errorMessage);
    },
  });

  return {
    addScheduleGameMutation,
    updateScheduleGameMutation,
    deleteScheduleGameMutation,
    updateGroupMutation,
  };
};

export {
  useTournaments,
  useIndividualTournament,
  useTournamentStanding,
  useTournamentsMutation,
};
