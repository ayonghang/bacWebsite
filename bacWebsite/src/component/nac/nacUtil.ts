export const getTournamentDetail = (
  tournamentTeamsDetail: Array<any>,
  id: string
) => {
  let foundTeam = {};

  if (tournamentTeamsDetail) {
    tournamentTeamsDetail.forEach((team: any) => {
      if (team?._id === id) {
        foundTeam = team;
      }
    });
  }

  return foundTeam;
};

export const getTournamentFieldDetail = (
  fieldDetails: Array<any>,
  fieldId: string
) => {
  let foundFieldDetail = {};

  if (fieldDetails) {
    fieldDetails.forEach((field: any) => {
      if (field?._id === fieldId) {
        foundFieldDetail = field;
      }
    });
  }

  return foundFieldDetail;
};
