import React from "react";
import useForm from "./useForm";
import validate from "./validationInfo";

const Form = ({ submitForm }) => {
  const { handleChange, values, handleSubmit, errors } = useForm(
    submitForm,
    validate
  );

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
          {errors.username && <p>{errors.username}</p>}
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
          <p>{errors.email}</p>
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
          <p>{errors.password}</p>
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
          <p>{errors.password2}</p>
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
