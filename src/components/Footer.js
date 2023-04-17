import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEnvelope } from "@fortawesome/free-solid-svg-icons";
import { faGithub } from "@fortawesome/free-brands-svg-icons";

const mailIcon = <FontAwesomeIcon icon={faEnvelope} size="2xl" />;
const gitHub = <FontAwesomeIcon icon={faGithub} size="2xl" />;

export default function Footer() {
  return (
    <div className="fixed-bottom footer">
      <div>
        <ul className="nav justify-content-center">
          <li className="nav-item p-2">
            <a href="https://github.com/embresse" target="_blank">
              {gitHub}
            </a>
          </li>
          <li className="nav-item p-2">
            <a href="mailto: embresse@gmail.com" target="_blank">
              {mailIcon}
            </a>
          </li>
        </ul>
      </div>
    </div>
  );
}
