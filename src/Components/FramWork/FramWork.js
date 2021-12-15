import React, { Fragment, useState } from "react";
import ContextAPI from "../../context/context";
import Form from "../Form/Form";
import Header from "../Header/Header";

const FramWork = () => {
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [pasword, setPassword] = useState("");
  const [confirmPass, setConfirmPass] = useState("");
  const [span_username, setSpan_username] = useState("");

  const setName = (event) => {
    setUsername(event.target.value);
  };

  const handleUserValidation = () => {
    const userName = {
      error_massege: "username is not valid",
      patern: /^[a-zA-Z0-9_-]{5,15}$/,
    };

    if (username.value === "" || !userName.patern.test(username.value)) {
      const span = userName.error_massege;
      setSpan_username(span);
    } else {
      setSpan_username("span");
    }
  };

  return (
    <ContextAPI.Provider
      value={{
        username: username,
        email: email,
        password: pasword,
        confirmPass: confirmPass,
        setName: setName,
        handleUserValidation: handleUserValidation,
      }}
    >
      <Fragment>
        <Header />
        <Form />
      </Fragment>
    </ContextAPI.Provider>
  );
};

export default FramWork;
