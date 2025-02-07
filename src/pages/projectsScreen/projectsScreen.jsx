import React, { useRef } from 'react';
import './projectsScreen.css';
import { useScroll } from 'framer-motion';
import projects from '@data/projectsData';
import ProjectCard from '@components/projectCard/ProjectCard';

const ProjectsScreen = React.forwardRef(({}, ref) => {
  const containerRef = useRef(null);

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ['start start', 'end end'],
  });

  return (
    <div ref={containerRef} className="projectsScreen w-100">
      <div className="container-sm">
        <div ref={ref} className="projects-container">
          <div className="projects-title w-100 text-center position-relative pb-5">
            PROJECTS
          </div>
          <div className="cards-container">
            {projects.map((project, index) => {
              const targetScale = 1 - (projects.length - index) * 0.05;
              return (
                <ProjectCard
                  key={index}
                  index={index}
                  {...project}
                  progress={scrollYProgress}
                  range={[index * 0.25, 1]}
                  targetScale={targetScale}
                />
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
});

export default ProjectsScreen;
