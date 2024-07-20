import React from "react";
import Styles from "./ProjectsCard.module.css";

const truncate = (str) => {
  const limit = 200;
  if (str.length > limit) {
    return str.slice(0, limit) + "...";
  }
  return str;
};

const ProjectsCard = (props) => {
  const { videoId, name, features = [], technologies = [], code, live } = props;

  return (
    <div
      className={`${Styles.card} ${
        props.darkMode ? Styles.dark : Styles.light
      }`}
    >
      <div className={Styles.cardVideo}>
        <iframe
          width="100%"
          height="100%"
          src={`https://www.youtube.com/embed/${videoId}`}
          title={name}
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
          className={Styles.videoIframe}
        ></iframe>
      </div>
      <div className={Styles.cardContent}>
        <h2 className={Styles.name}>{name}</h2>
        {features.length > 0 && (
          <>
            <p>Features:</p>
            <ul>
              {features.map((feature, index) => (
                <li key={index}>{truncate(feature)}</li>
              ))}
            </ul>
          </>
        )}
  
        <div className={Styles.link_container}>
          {code && (
            <a href={code} target="_blank" rel="noopener noreferrer">
              Code
            </a>
          )}
          {live && (
            <a href={live} target="_blank" rel="noopener noreferrer">
              Live
            </a>
          )}
        </div>
      </div>
    </div>
  );
};

export default ProjectsCard;
