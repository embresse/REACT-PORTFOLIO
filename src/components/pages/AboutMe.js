import React from "react";
import image from "../../images/me.jpg";

export default function AboutMe() {
  return (
    <div className="p-3 row">
      <div className="col-6">
        <div className="card shadow">
          <img src={image}></img>
        </div>
      </div>
      <div className="col-6">
        <div>
          <h3>Background</h3>
          <p>
            A graduate of Virginia Tech who spent 5 years teaching ESL,
            exploring, taking on a variety of different professional endeavors,
            and currently taking on web development!
          </p>
          <h3>What I've learned so far..</h3>
          <p>
            HTML, CSS, JavaScript, MongoDB, JQuery, SQL, Node, Express, NoSQL,
            Handlebars, React, and more!
          </p>
        </div>
      </div>
    </div>
  );
}
