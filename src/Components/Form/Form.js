import React from "react";
import useForm from "./useForm";

const Form = () => {
  const { handleChange, values, handleSubmit } = useForm();

  return (
    <div className="form">
      <form className="form__form" onSubmit={handleSubmit}>
        <div className="form-inputs">
          <label htmlFor="username">Usename</label>
          <input
            type="text"
            id="username"
            name="username"
            className="form__input"
            placeholder="Enter username"
            value={values.username}
            onChange={handleChange}
          />
          {/* <span
            id="span-username"
            onChange={context.handleUserValidation}
          ></span> */}
        </div>

        <div className="form-inputs">
          <label htmlFor="email">Email</label>
          <input
            type="email"
            id="email"
            name="email"
            className="form__input"
            placeholder="Enter email"
            value={values.email}
            onChange={handleChange}
          />
          {/* <span id="span-email"></span> */}
        </div>

        <div className="form-inputs">
          <label htmlFor="password">Password</label>
          <input
            type="password"
            id="password"
            name="password"
            className="form__input"
            placeholder="Enter password"
            value={values.password}
            onChange={handleChange}
          />
          {/* <span id="span-pass"></span> */}
          {/* <div className="form__checkbox">
          <input type="checkbox" onclick="show_password()" />
          Show Password
        </div> */}
        </div>

        <div className="form-inputs">
          <label htmlFor="password2">Usename</label>
          <input
            type="password"
            id="password2"
            name="password2"
            className="form__input"
            placeholder="Enter password again"
            value={values.password2}
            onChange={handleChange}
          />
          {/* <span id="span-pass-repeat"></span> */}
          {/* <div className="form__checkbox">
          <input type="checkbox" onclick="show_password_confirm()" />
          Show Password
        </div> */}
        </div>

        <input
          type="submit"
          className="form__input form__input-submit"
          id="form-submit"
          value="Submit"
        />
      </form>
    </div>
  );
};

export default Form;
