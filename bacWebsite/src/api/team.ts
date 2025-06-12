import axios from "axios";
import { API_HOST } from "./apiConstant";

export default {
  getTournamentTeamsDetail: function (tournamentId: string) {
    return axios.get(`${API_HOST}/team/tournament/${tournamentId}/teamsDetail`);
  },
};
