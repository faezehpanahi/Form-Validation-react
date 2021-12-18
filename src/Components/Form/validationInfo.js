export default function validationInfo(values) {
  let errors = {};

  if (!values.username.trim()) {
    errors.username = "username required";
  }

  if (!values.email) {
    errors.email = "email required";
  } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(values.email)) {
    errors.email = "email assress is invalid";
  }

  if (!values.password) {
    errors.password = "password is required";
  } else if (values.password.length < 6) {
    errors.password = "password needs to be 6 characters or more";
  }

  if (!values.password2) {
    errors.password2 = "password is required";
  } else if (values.password2 !== values.password) {
    errors.password2 = "passwords do not match";
  }

  return errors;
}
