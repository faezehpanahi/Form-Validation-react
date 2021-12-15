import { createContext } from "react";

const ContextAPI = createContext({
  username: "",
  email: "",
  password: "",
  confirmPass: "",
  span_username: "",
  setName: () => {},
  handleUserValidation: () => {},
});

export default ContextAPI;
