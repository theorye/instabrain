import * as yup from "yup";

export function createAuthSchema(useLogin) {
  const schema = yup.object();
  const requirements = {
    username: yup.string().required(),
    password: yup.string().required()
  };

  return !useLogin
    ? schema.shape({
        ...requirements,
        email: yup.string().required(),
        fullname: yup.string().required()
      })
    : schema.shape({
        ...requirements
      });
}
