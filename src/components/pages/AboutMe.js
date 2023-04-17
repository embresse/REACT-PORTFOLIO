import React from "react";
import image from "../../images/me.jpg";

export default function AboutMe() {
  return (
    <div className="p-3 row">
      <div className="col-6">
        <div className="card">
          <img src={image}></img>
        </div>
      </div>
      <div className="col-6">
        <div>
          <p>
            A graduate of Virginia Tech who spent 5 years teaching ESL, exploring, taking on a variety of different professional endeavors, and currently taking on web development!
          </p>
          <h3>SKILLS</h3>
          <p>
            HTML, CSS, JavaScript, MongoDB, JQuery, SQL, Node, Express, NoSQL,
            Handlebars, React, and more!
          </p>
        </div>
      </div>
    </div>
  );
}
