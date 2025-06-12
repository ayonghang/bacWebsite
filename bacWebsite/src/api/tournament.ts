import axios from "axios";
import { API_HOST } from "./apiConstant";

export default {
  getIndividualTournament: function (tournamentId: string) {
    return axios.get(`${API_HOST}/tournament/${tournamentId}`);
  },
  getTournamentStanding: function (tournamentId: string) {
    return axios.get(`${API_HOST}/tournament/${tournamentId}/standing`);
  },
};
