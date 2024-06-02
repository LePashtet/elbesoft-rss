import { ChipIcon } from "../../components/ui/ChipIcon";
import "./Login.scss";
import { Input } from "../../components/ui/Input.tsx";
import { Button } from "../../components/ui/Button.tsx";
export const Login = () => {
  return (
    <main className="login">
      <div className="login-block">
        <h1 className="login-block_text">
          {" "}
          <a href="/">News + Letter</a>
        </h1>
        <div className="login-block_form">
          <Input value="" onChange={() => {}} placeholder="Email" />
          <Input value="" onChange={() => {}} placeholder="Password" />
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
