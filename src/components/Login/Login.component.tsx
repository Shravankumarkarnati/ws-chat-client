import axios from "axios";
import React, { useContext, useState } from "react";
import useInput from "../../Hooks/useInput.hook";
import AppContext from "../../Model/context";
import Button from "../Button/button.component";
import TextInput from "../TextInput/TextInput.component";

interface LoginProps {}

const Login: React.FC<LoginProps> = () => {
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
  const { changeContext, ...context } = useContext(AppContext);

  const loginFormSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const values = { username, password };
    const registerUrl = `${process.env.REACT_APP_API_URL}/login`;
    const response = await axios.post(registerUrl, {
      data: values,
    });
    if (response.data.success) {
      changeContext!({
        ...context,
        currentPage: "Home",
        username: response.data.username,
      });
      setErrorMessage("");
      resetPassword();
      resetUsername();
    } else {
      setErrorMessage(response.data.message);
    }
  };
  return (
    <div className="flex flex-col justify-start items-center pt-20">
      <h1
        className="font-extrabold text-3xl md:text-4xl uppercase
                    text-indigo-600 tracking-widest leading-8 "
      >
        Login
      </h1>
      {errorMessage !== "" ? (
        <p className="mt-4 text-red-600">{errorMessage}</p>
      ) : null}
      <form method="POST" onSubmit={loginFormSubmit} className="mt-4">
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
        <Button
          type="submit"
          btnText="Submit"
          classNames={["mt-10", "bg-indigo-600", "text-white"]}
        />
      </form>
    </div>
  );
};
export default Login;
