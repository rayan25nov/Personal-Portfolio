import React from "react";
import ProjectsCard from "./ProjectsCard";
import Styles from "./Projects.module.css";
import { Swiper, SwiperSlide } from "swiper/react";
// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { useSelector } from "react-redux";
import { selectDarkMode } from "../Features/ToggleModeSlice";

// import required modules
import { Keyboard, Pagination, Autoplay } from "swiper/modules";
import ProjectsData from "./data.json";

const Projects = () => {
  const darkMode = useSelector(selectDarkMode);
  return (
    <div
      className={`${Styles.container} ${darkMode ? Styles.dark : Styles.light}`}
      id="projects"
    >
      <h2 className={Styles.header}>Projects</h2>
      <div className={Styles.project_container}>
        <Swiper
          slidesPerView={3}
          spaceBetween={25}
          centeredSlides={false}
          autoplay={{
            delay: 3500,
            disableOnInteraction: false,
          }}
          loop={true}
          pagination={{
            clickable: true,
            el: `.swiper-pagination.${Styles.customPagination}`,
          }}
          keyboard={{
            enabled: true,
          }}
          breakpoints={{
            0: {
              slidesPerView: 1,
            },
            520: {
              slidesPerView: 2,
            },
            950: {
              slidesPerView: 3,
            },
          }}
          modules={[Keyboard, Pagination, Autoplay]}
          className={Styles.mySwiper}
        >
          {ProjectsData.map((Project, index) => (
            <SwiperSlide key={index} className={Styles.cardWrapper}>
              <ProjectsCard
                videoId={Project.videoId}
                name={Project.name}
                description={Project.description}
                darkMode={darkMode}
                features={Project.features}
                technologies={Project.technologies}
                code={Project.code}
                live={Project.live}
              />
            </SwiperSlide>
          ))}
          <div className={`swiper-pagination ${Styles.customPagination}`}></div>
        </Swiper>
      </div>
    </div>
  );
};

export default Projects;
