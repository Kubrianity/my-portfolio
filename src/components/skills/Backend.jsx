import React from "react";
import { HiCheckBadge } from "react-icons/hi2";

const Backend = () => {
  return(
    <div className="skills__content">
    <h3 className="skills__title">Backend Technologies</h3>
    <div className="skills__box">
      <div className="skills__group">
        <div className="skills__data">
          <HiCheckBadge />
          <div>
            <h3 className="skills__name">Node.js</h3>
          </div>
        </div>
        <div className="skills__data">
          <HiCheckBadge />
          <div>
            <h3 className="skills__name">Express.js</h3>
          </div>
        </div>
          <div className="skills__data">
            <HiCheckBadge />
            <div>
              <h3 className="skills__name">MongoDB</h3>
            </div>
          </div>
      </div>
      <div className="skills__group">
        <div className="skills__data">
          <HiCheckBadge />
          <div>
            <h3 className="skills__name">MySQL</h3>
          </div>
        </div>
        <div className="skills__data">
          <HiCheckBadge />
          <div>
            <h3 className="skills__name">PostgreSQL</h3>
          </div>
        </div>
          <div className="skills__data">
            <HiCheckBadge />
            <div>
              <h3 className="skills__name">Java/Spring</h3>
            </div>
          </div>
      </div>
    </div>
    </div>
  );
}

export default Backend;