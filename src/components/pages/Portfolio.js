import React from "react";
import portfolioProjects from "../../portfolioProjects";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGlobe } from "@fortawesome/free-solid-svg-icons";
import { faGithub } from "@fortawesome/free-brands-svg-icons";
// add icons
const gitHub = <FontAwesomeIcon icon={faGithub} size="lg" />;
const globe = <FontAwesomeIcon icon={faGlobe} size="lg" />;

export default function Portfolio() {
  return (
    <div className="p-3 flex-row justify-center">
      <h3 className="text-center">Portfolio</h3>
      <div className="row flex-row justify-space-between my-4">
        {portfolioProjects.map((project) => (
          <div key={project.id} className="col-12 col-xl-6 ">
            <div className="m-2 mb-4 shadow project-card">
              <img
                src={project.image}
                className="card-img-top project-image"
              ></img>
              <div className="row card-body">
                <div className="col-6">
                  <h5 className="card-title p-2 m-0">{project.title}</h5>
                </div>
                <div className="col-6 text-end">
                  <a href={project.gitHub} className="btn" target="_blank">
                    GitHub {gitHub}
                  </a>
                  <a href={project.deployed} className="btn" target="_blank">
                    Web App {globe}
                  </a>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
