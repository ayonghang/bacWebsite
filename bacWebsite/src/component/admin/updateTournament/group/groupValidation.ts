import * as yup from "yup";

let groupSchema = yup.object().shape({
  groups: yup.array().of(
    yup.object().shape({
      name: yup.string().required("Required"),
      teams: yup.array().of(
        yup.object().shape({
          key: yup.string().required("Required"),
          label: yup.string().required("Required"),
        })
      ),
    })
  ),
});

export { groupSchema };
