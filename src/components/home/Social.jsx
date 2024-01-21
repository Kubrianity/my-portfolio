import React from "react";
import { FiGithub, FiLinkedin} from "react-icons/fi";

const Social = () => {
  return (
    <div className="home__social">
      <a href="https://www.github.com/Kubrianity" className="home__social-icon" target="_blank" rel="noreferrer">
        <FiGithub />
      </a>
      <a href="https://www.linkedin.com/in/kubry/" className="home__social-icon" target="_blank" rel="noreferrer">
        <FiLinkedin />
      </a>
    </div> 
  ); 
}

export default Social;