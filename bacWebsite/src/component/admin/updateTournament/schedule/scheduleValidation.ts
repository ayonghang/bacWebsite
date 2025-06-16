import * as yup from "yup";

let scheduleSchema = yup.object().shape({
  teamA: yup.object().shape({
    teamId: yup.string().required("Required"),
    score: yup.number().required("Required"),
  }),
  teamB: yup.object().shape({
    teamId: yup.string().required("Required"),
    score: yup.number().required("Required"),
  }),
  fieldId: yup.string().required("Required"),
  gameStatus: yup.string().required("Required"),
  gameType: yup.string().required("Required"),
  referees: yup
    .array()
    .of(
      yup.object().shape({
        key: yup.string().required("Required"),
        label: yup.string().required("Required"),
      })
    )
    .min(3, "Three referee is required"),
  dateStart: yup
    .object()
    .required("Required")
    .test("InvalidDate", "Date start is invalid", (val) => !isNaN(val?.$D)),
  dateEnd: yup
    .object()
    .required("Required")
    .test("InvalidDate", "Date end is invalid", (val) => !isNaN(val?.$D)),
});

export { scheduleSchema };
