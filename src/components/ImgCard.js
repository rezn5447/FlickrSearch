import React, { Component } from 'react';

const ImgCard = ({ name, tags, photo }) => (
  <div className="row">
    <div className="col s12 m7">
      <div className="card">
        <div className="card-image">
          <img src="images/sample-1.jpg" />
          <span className="card-title">Card Title</span>
        </div>
        <div className="card-content">
          <p>
            I am a very simple card. I am good at containing small bits of
            information. I am convenient because I require little markup to use
            effectively.
          </p>
        </div>
        <div className="card-action">
          <a href="#">This is a link</a>
        </div>
      </div>
    </div>
  </div>
);

export default ImgCard;
// <nav>
//   <div className="nav-wrapper">
//     <a href="#" className="brand-logo">Logo</a>
//     <ul id="nav-mobile" className="right hide-on-med-and-down">
//       <li><a href="sass.html">Sass</a></li>
//       <li><a href="badges.html">Components</a></li>
//       <li><a href="collapsible.html">JavaScript</a></li>
//     </ul>
//   </div>
// </nav>
