import React from "react";

interface RegisterProps {}

const Register: React.FC<RegisterProps> = () => {
  return (
    <div className="container h-full flex flex-col justify-start items-center pt-20">
      <h1
        className="font-extrabold text-3xl uppercase
                    text-indigo-600 tracking-widest leading-8"
      >
        Register
      </h1>
    </div>
  );
};
export default Register;
