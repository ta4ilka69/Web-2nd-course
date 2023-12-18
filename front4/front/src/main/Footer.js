import React from "react";
import { ReactComponent as Github } from "../resources/github.svg";
import { ReactComponent as Telegram } from "../resources/telegram.svg";

function Footer() {
  return (
    <div className="footer">
      <a href="https://github.com/ta4ilka69">
        <Github className="github" />
      </a>
      <p>Happy new 2024</p>
      <a href="https://t.me/ta4ilka">
        <Telegram className="telegram" />
      </a>
    </div>
  );
}
export default Footer;
