import React from "react";
import useInput from "../../Hooks/useInput.hook";
import Button from "../Button/button.component";
import TextInput from "../TextInput/TextInput.component";

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

  const registerFormSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const values = { username, password };
    console.log(values);
    resetPassword();
    resetUsername();
  };

  return (
    <div className="flex flex-col justify-start items-center pt-20">
      <h1
        className="font-extrabold text-3xl md:text-4xl uppercase
                    text-indigo-600 tracking-widest leading-8 "
      >
        Register
      </h1>
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
        <Button
          type="submit"
          btnText="Submit"
          classNames={["mt-10", "bg-indigo-600", "text-white"]}
        />
      </form>
    </div>
  );
};
export default Register;
