import React from "react";

const Project = () => {
  return (
    <div className="projects-section">
      <div className="first">
        <h1>Color-I-Sing</h1>
        <p>
          Color I Sing is a digital coloring book that lets your voice be the
          paint brush. Using the Web Audio and Canvas APIs, this program
          analyses your voice and colors in the page based on the notes you
          sing. Users can share their creations via social media or save them to
          their account. You can try is out here:{" "}
          <a href="http:////colorising.herokuapp.com/">Color-I-Sing</a> and
          check out the code here:{" "}
          <a href="https://github.com/genius-geminis/color-i-sing"></a>
        </p>
      </div>
      <div className="second">
        <h1>Do Your remember</h1>
        <p>
          A classic spin on a childhood memory game using the Vue-framework. and
          check out the code here:{" "}
          <a href="https://github.com/Kistinagrg/stackathon-"></a>
        </p>
      </div>
      <div>
        <h1 className="third">Grace Shopper</h1>
        <p>
          A mock e-commerce website. You can try is out here:{" "}
          <a href="https://afternoon-sea-61444.herokuapp.com/">Grace Shopper</a>
        </p>
      </div>
    </div>
  );
};

export default Project;
