import { FC } from "react";
import WindowIcon from "@mui/icons-material/Window";
import LogoutIcon from "@mui/icons-material/Logout";
import QuizIcon from "@mui/icons-material/Quiz";
import PlusIcon from "@mui/icons-material/PlusOne";
import "./Header.scss";
import { useNavigate } from "react-router-dom";

export const Header: FC = () => {
  const navigator = useNavigate();
  return (
    <header className="header">
      <div className="header-center">
        <div
          onClick={() => {
            navigator("/app/setup");
          }}
          className="header-center-home"
        >
          <WindowIcon />
          <span className="header-center-home_text">Home</span>
        </div>
        <div
          onClick={() => {
            navigator("/app/faq");
          }}
          className="header-center-faq"
        >
          <QuizIcon />
          <span className="header-center-faq_text">FAQ</span>
        </div>
        <div
          onClick={() => {
            navigator("/setup");
          }}
          className="header-center-faq"
        >
          <PlusIcon />
          <span className="header-center-faq_text">Create</span>
        </div>
      </div>
      <div className="header-logout">
        <span className="header-logout_text">my-email@gmail.com</span>
        <LogoutIcon />
      </div>
    </header>
  );
};
