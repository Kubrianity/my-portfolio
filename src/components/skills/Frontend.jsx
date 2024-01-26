import React from "react";
import { HiCheckBadge } from "react-icons/hi2";

const Frontend = () => {
  return (
    <div className="skills__content">
      <h3 className="skills__title">Frontend Technologies</h3>
      <div className="skills__box">
        <div className="skills__group">
          <div className="skills__data">
            <HiCheckBadge />
            <div>
              <h3 className="skills__name">HTML5</h3>
            </div>
          </div>
          <div className="skills__data">
            <HiCheckBadge />
            <div>
              <h3 className="skills__name">CSS3/SASS</h3>
            </div>
          </div>
          <div className="skills__data">
            <HiCheckBadge />
            <div>
              <h3 className="skills__name">Bootstrap</h3>
            </div>
          </div>
          <div className="skills__data">
            <HiCheckBadge />
            <div>
              <h3 className="skills__name">Tailwind</h3>
            </div>
          </div>
      </div>
      <div className="skills__group">
        <div className="skills__data">
          <HiCheckBadge />
          <div>
            <h3 className="skills__name">JavaScript</h3>
          </div>
        </div>
        <div className="skills__data">
          <HiCheckBadge />
          <div>
            <h3 className="skills__name">Vue.js</h3>
          </div>
        </div>
        <div className="skills__data">
          <HiCheckBadge />
          <div>
            <h3 className="skills__name">React.js</h3>
          </div>
        </div>
        <div className="skills__data">
          <HiCheckBadge />
          <div>
            <h3 className="skills__name">Next.js</h3>
          </div>
        </div>
      </div>
      </div>
    </div>
  );
}

export default Frontend;