import axios from "axios";
import { API_HOST } from "./apiConstant";
import { createSearchParams, URLSearchParamsInit } from "react-router";

export default {
  getAllTournaments: function (params: URLSearchParamsInit | undefined) {
    let queryParams = createSearchParams(params);
    return axios.get(`${API_HOST}/tournament?${queryParams}`);
  },
  getIndividualTournament: function (tournamentId: string) {
    return axios.get(`${API_HOST}/tournament/${tournamentId}`);
  },
  getTournamentStanding: function (tournamentId: string) {
    return axios.get(`${API_HOST}/tournament/${tournamentId}/standing`);
  },
  addTournamentGame: function (tournamentId: string, reqBody: object) {
    return axios.post(`${API_HOST}/tournament/${tournamentId}/event`, reqBody);
  },
  updateTournamentGame: function (
    tournamentId: string,
    eventId: string,
    reqBody: object
  ) {
    return axios.put(
      `${API_HOST}/tournament/${tournamentId}/event/${eventId}/schedule`,
      reqBody
    );
  },
  deleteTournamentGame: function (tournamentId: string, eventId: string) {
    return axios.delete(
      `${API_HOST}/tournament/${tournamentId}/event/${eventId}/schedule`
    );
  },
  updateTournamentGroup: function (tournamentId: string, reqBody: object) {
    return axios.put(`${API_HOST}/tournament/${tournamentId}/groups`, reqBody);
  },
};
