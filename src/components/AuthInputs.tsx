import React, { useState } from "react";
import Button from "./Button";
import Input from "./Input";

const AuthInputs: React.FC = () => {
  const [enteredEmail, setEnteredEmail] = useState<string>("");
  const [enteredPassword, setEnteredPassword] = useState<string>("");
  const [submitted, setSubmmitted] = useState<boolean>(false);

  function handleInputChange(identifier: "email" | "password", value: string) {
    if (identifier === "email") {
      setEnteredEmail(value);
    } else {
      setEnteredPassword(value);
    }
  }

  function handleLogin() {
    setSubmmitted(true);
  }

  const emailNotValid = submitted && !enteredEmail.includes("@");
  const passwordNotValid = submitted && enteredPassword.trim().length < 6;

  return (
    <div className="w-full max-w-sm p-8 mx-auto rounded shadow-md bg-gradient-to-b from-stone-700 to-stone-800">
      <div className="flex flex-col gap-2 mb-6">
        <Input
          invalid={emailNotValid}
          label="Email"
          type="email"
          onChange={(event) => {
            handleInputChange("password", event.target.value);
          }}
        />
        <Input
          invalid={passwordNotValid}
          label="Password"
          type="password"
          onChange={(event) => {
            handleInputChange("email", event.target.value);
          }}
        />
      </div>
      <div className="flex justify-end gap-4">
        <button type="button" className="text-amber-400 hover:text-amber-500 ">
          Create a new account
        </button>
        <Button onClick={handleLogin}> Sign In</Button>
      </div>
    </div>
  );
};

export default AuthInputs;
