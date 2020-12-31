import axios from "axios";
import React, { useState } from "react";
import { useDispatch } from "react-redux";
import useInput from "../../Hooks/useInput.hook";
import Button from "../Button/button.component";
import TextInput from "../TextInput/TextInput.component";
import { socket } from "./../../App";
import { usePageChangeHandler } from "./../../Hooks/usePageChangeHandler";
import { logInAction } from "./../../redux/userReducer/actions";

interface LoginProps {}

const Login: React.FC<LoginProps> = () => {
  const dispatch = useDispatch();
  const { homeChangePageHandler } = usePageChangeHandler();

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

  const [errorMessage, setErrorMessage] = useState("");

  const onLoginDispatch = (username: string, id: string) => {
    dispatch(logInAction({ username, id }));
    homeChangePageHandler();
  };

  const loginFormSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setErrorMessage("");
    const values = { username, password };
    const registerUrl = `${process.env.REACT_APP_API_URL}/login`;
    const response = await axios.post(registerUrl, {
      data: values,
    });
    if (response.data.success) {
      resetPassword();
      resetUsername();
      onLoginDispatch(response.data.username, response.data.id);
      socket.emit("login", {
        // username: response.data.username,
        id: response.data.id,
      });
    } else {
      setErrorMessage(response.data.message);
    }
  };
  return (
    <div className="flex flex-col justify-start items-center pt-20">
      <h1
        className="font-extrabold text-3xl md:text-4xl uppercase
                    text-jade tracking-widest leading-8 "
      >
        Login
      </h1>
      {errorMessage !== "" ? (
        <p className="mt-4 text-red-600">{errorMessage}</p>
      ) : null}
      <form onSubmit={loginFormSubmit} className="mt-4">
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

export default Login;
