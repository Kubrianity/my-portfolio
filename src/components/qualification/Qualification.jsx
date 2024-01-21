import React, { useState } from "react";
import "./qualification.css";
import { HiOutlineAcademicCap, HiOutlineBriefcase, HiOutlineCalendar } from "react-icons/hi";

const Qualification = () => {
  const [toggleState, setToggleState] = useState(1)

  const toggleTab = (index) => {
    setToggleState(index);
  };

  return (
  <section className="qualification section">
    <h2 className="section__title">My Qualification</h2>
    <div className="qualification__container container">
      <div className="qualification__tabs">
        <div className={toggleState === 1 ? "qualification__button button--flex qualification__active" 
          : "qualification__button button--flex"} onClick={() => toggleTab(1)}>
          <HiOutlineAcademicCap className="qualification__icon" />
          Education
        </div>
        <div className={toggleState === 2 ? "qualification__button button--flex qualification__active" 
          : "qualification__button button--flex"} onClick={() => toggleTab(2)}>
          <HiOutlineBriefcase className="qualification__icon" />
          Experience
        </div>
      </div>

        <div className="qualification__sections">
            <div className={toggleState === 1 ? "qualification__content qualification__content-active"
              : "qualification__content"}>
              <div className="qualification__data">
                <div>
                  <h3 className="qualification__title">The Web Developer Bootcamp</h3>
                  <span className="qualification__subtitle">Udemy</span>
                  <div className="qualification__calendar">
                    <HiOutlineCalendar className="qualification__calendar-icon" />
                    2023
                  </div>
                </div>
                <div>
                  <span className="qualification__rounder"></span>
                  <span className="qualification__line"></span>
                </div>
              </div>
              <div className="qualification__data">
                <div></div>
                <div>
                  <span className="qualification__rounder"></span>
                  <span className="qualification__line"></span>
                </div>
                <div>
                  <h3 className="qualification__title">Web Development and Design</h3>
                  <span className="qualification__subtitle">Andolu University</span>
                  <div className="qualification__calendar">
                    <HiOutlineCalendar className="qualification__calendar-icon" />
                    2020-2022
                  </div>
                </div>
              </div>
              <div className="qualification__data">
                <div>
                  <h3 className="qualification__title">International Relations</h3>
                  <span className="qualification__subtitle">Middle East Technical University</span>
                  <div className="qualification__calendar">
                    <HiOutlineCalendar className="qualification__calendar-icon" />
                    2012-2017
                  </div>
                </div>
                <div>
                  <span className="qualification__rounder"></span>
                  <span className="qualification__line"></span>
                </div>
              </div>
            </div>
            <div className={toggleState === 2 ? "qualification__content qualification__content-active"
                : "qualification__content"}>
                <div className="qualification__data">
                  <div>
                    <h3 className="qualification__title">Freelance Software Developer</h3>
                    <span className="qualification__subtitle">Lady BookHouse</span>
                    <div className="qualification__calendar">
                      <HiOutlineCalendar className="qualification__calendar-icon" />
                      2023 - Current
                    </div>
                  </div>
                  <div>
                    <span className="qualification__rounder"></span>
                    <span className="qualification__line"></span>
                  </div>
                </div>
                <div className="qualification__data">
                  <div></div>
                  <div>
                    <span className="qualification__rounder"></span>
                    <span className="qualification__line"></span>
                  </div>
                  <div>
                    <h3 className="qualification__title">Apprentice Software Developer</h3>
                    <span className="qualification__subtitle">Lonca Works</span>
                    <div className="qualification__calendar">
                      <HiOutlineCalendar className="qualification__calendar-icon" />
                      2022-2023
                    </div>
                  </div>
                </div>
                <div className="qualification__data">
                  <div>
                    <h3 className="qualification__title">ESC Volunteer</h3>
                    <span className="qualification__subtitle">Stowarzyszenie Aktywne Kobiety</span>
                    <span className="qualification__subtitle">Poland</span>
                    <div className="qualification__calendar">
                      <HiOutlineCalendar className="qualification__calendar-icon" />
                      2022-2023
                    </div>
                  </div>
                  <div>
                    <span className="qualification__rounder"></span>
                    <span className="qualification__line"></span>
                  </div>
                </div>
                <div className="qualification__data">
                  <div></div>
                  <div>
                    <span className="qualification__rounder"></span>
                    <span className="qualification__line"></span>
                  </div>
                  <div>
                    <h3 className="qualification__title">Tutor</h3>
                    <span className="qualification__subtitle">Private Tutor</span>
                    <div className="qualification__calendar">
                      <HiOutlineCalendar className="qualification__calendar-icon" />
                      2018-2021
                    </div>
                  </div>
                </div>
            </div>
        </div>
    </div>
  </section> 
);
}

export default Qualification;