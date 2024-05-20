import React from "react";

const Info = () => {
  return (
    <div className="about_info grid">
      <div className="about_box">
        <i className="bx bx-award about_icon"></i>
        <h3 className="about_title">Experience</h3>
        <span className="about_subtitle">2+ Years of Learning.</span>
      </div>
      <div className="about_box">
        <i className="bx bx-briefcase-alt about_icon"></i>
        <h3 className="about_title">Completed</h3>
        <span className="about_subtitle">Academy based Projects.</span>
      </div>
      <div className="about_box">
        <i className="bx bxs-color about_icon"></i>
        <h3 className="about_title">Expertise</h3>
        <span className="about_subtitle">Web-Based Programming.</span>
      </div>
    </div>
  );
};

export default Info;
