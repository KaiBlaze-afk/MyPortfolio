import React from "react";
import "./Qualification.css";

const Qualification = () => {
  return (
    <section className="section qualification">
      <h2 className="section__title">Qualification</h2>
      <span className="section__subtitle">My personal journey.</span>

      <div className="qualification_container container">
        <div className="qualification_tabs">
          <div className="qualification_button button--flex">
            <i className="uil uil-graduation-cap qualification_icon"></i>
            Education
          </div>
        </div>
        <div className="qualification_section">
          <div className="qualification_content qualification_content-active">
            <div className="qualification_data">
              <div>
                <h3 className="qualification_title">Bachlor's in CS</h3>
                <span className="qualification_subtitle">
                  Bapuji Institute of Engineering and Technology.
                </span>
                <div className="qualification_calender">
                  <i className="uil uil-calender--alt">2022 - 2026</i>
                </div>
              </div>
              <div>
                <span className="qualification_rounder"></span>
                <span className="qualification_line"></span>
              </div>
            </div>
            
            <div className="qualification_data">
              <div></div>
              <div>
                <span className="qualification_rounder"></span>
                <span className="qualification_line"></span>
              </div>
              <div>
                <h3 className="qualification_title">Web Design</h3>
                <span className="qualification_subtitle">
                  Bapuji Institute of Engineering and Technology.
                </span>
                <div className="qualification_calender">
                  <i className="uil uil-calender--alt">2022 - 2023</i>
                </div>
              </div>
            </div>

            

            <div className="qualification_data">
              <div>
                <h3 className="qualification_title">Figma</h3>
                <span className="qualification_subtitle">
                  Self Learning through Youtube.
                </span>
                <div className="qualification_calender">
                  <i className="uil uil-calender--alt">2022 - 2023</i>
                </div>
              </div>
              <div>
                <span className="qualification_rounder"></span>
                <span className="qualification_line"></span>
              </div>
            </div>
          </div>
          
          <div className="qualification_data">
              <div></div>
              <div>
                <span className="qualification_rounder"></span>
                <span className="qualification_line"></span>
              </div>
              <div>
                <h3 className="qualification_title">AWS Clouds</h3>
                <span className="qualification_subtitle">
                  Udemy - Online courses
                </span>
                <div className="qualification_calender">
                  <i className="uil uil-calender--alt">2023 - 2024</i>
                </div>
              </div>
            </div>

          <div className="qualification_content">
            <div className="qualification_data">
              <div>
                <h3 className="qualification_title">Android apps</h3>
                <span className="qualification_subtitle">
                  Bapuji Institute of Engineering and Technology.
                </span>
                <div className="qualification_calender">
                  <i className="uil uil-calender--alt">2024 - 2025</i>
                </div>
              </div>
              <div>
                <span className="qualification_rounder"></span>
                <span className="qualification_line"></span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Qualification;
