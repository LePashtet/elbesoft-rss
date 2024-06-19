import { ChangeEvent, FC, useState } from "react";
import { ChipIcon } from "../../components/ui/ChipIcon";
import { Input } from "../../components/ui/Input/Input.tsx";
import { Button } from "../../components/ui/Button/Button.tsx";

import "./Login.scss";
export const Login: FC = () => {
  const [email, setEmail] = useState<string>("");
  const [passowrd, setPassowrd] = useState<string>("");

  const handleInputEmailChange = (event: ChangeEvent<HTMLInputElement>) => {
    setEmail(event.target.value);
  };
  const handleInputPasswordChange = (event: ChangeEvent<HTMLInputElement>) => {
    setPassowrd(event.target.value);
  };

  return (
    <main className="login">
      <div className="login-block">
        <h1 className="login-block_text">
          {" "}
          <a href="/">News + Letter</a>
        </h1>
        <div className="login-block_form">
          <Input
            className="login-block_input"
            value={email}
            onChange={handleInputEmailChange}
            placeholder="Email"
          />
          <Input
            className="login-block_input"
            value={passowrd}
            onChange={handleInputPasswordChange}
            placeholder="Password"
            type="password"
          />
          <Button label="Log in" onClick={() => {}} />
        </div>
        <div className="login-block_chips">
          <ChipIcon label="google" />
          <ChipIcon label="telegram" />
        </div>
      </div>
    </main>
  );
};
