import axios from "axios";
import React, { useState } from "react";
import { useDispatch } from "react-redux";
import useInput from "../../Hooks/useInput.hook";
import Button from "../Button/button.component";
import TextInput from "../TextInput/TextInput.component";
import { usePageChangeHandler } from "./../../Hooks/usePageChangeHandler";
import { logInAction } from "./../../redux/userReducer/actions";

interface RegisterProps {}

const Register: React.FC<RegisterProps> = () => {
  const {
    value: username,
    changeValue: changeUsername,
    resetField: resetUsername,
  } = useInput("");
  const {
    value: password,
    changeValue: changePassword,
    resetField: resetPassword,
  } = useInput("");

  const dispatch = useDispatch();
  const { homeChangePageHandler } = usePageChangeHandler();

  const [errorMessage, setErrorMessage] = useState("");

  const registerFormSubmit = async (
    event: React.FormEvent<HTMLFormElement>
  ) => {
    event.preventDefault();
    setErrorMessage("");
    const values = { username, password };
    const registerUrl = `${process.env.REACT_APP_API_URL}/register`;
    const response = await axios.post(registerUrl, {
      data: values,
    });
    if (response.data.success) {
      resetPassword();
      resetUsername();
      const { username, id } = response.data;
      dispatch(logInAction({ username, id }));
      homeChangePageHandler();
    } else {
      setErrorMessage(response.data.message);
      console.log(response.data.error, "409 error");
    }
  };

  return (
    <div className="flex flex-col justify-start items-center pt-20">
      <h1
        className="font-extrabold text-3xl md:text-4xl uppercase
        text-jade tracking-widest leading-8 "
      >
        Register
      </h1>
      {errorMessage !== "" ? (
        <p className="mt-4 text-red-600">{errorMessage}</p>
      ) : null}
      <form method="POST" onSubmit={registerFormSubmit} className="mt-4">
        <TextInput
          id="username"
          label="Username"
          value={username}
          changeValue={changeUsername}
        />
        <TextInput
          id="password"
          label="Password"
          type="password"
          value={password}
          changeValue={changePassword}
        />
        <Button type="submit" btnText="Submit" classNames={["mt-10", "px-8"]} />
      </form>
    </div>
  );
};
export default Register;
