import { motion, useTransform } from 'framer-motion';
import './ProjectCard.css';

const ProjectCard = ({
  index,
  title,
  description,
  link,
  color,
  tools,
  laptopImg,
  progress,
  range,
  targetScale,
  mobileImg,
}) => {
  const scale = useTransform(progress, range, [1, targetScale]);

  return (
    <div className="project-card-container w-100 vh-100 d-flex align-items-center justify-content-center position-sticky">
      <motion.div
        className="projectCard overflow-hidden mx-auto w-100 position-relative d-flex rounded-4"
        style={{
          scale,
          backgroundColor: color,
          top: `calc(-10% + ${index * 25}px)`,
        }}
      >
        <div className="text-container">
          <div className="title">
            <a
              href={link}
              target="_blank"
              className="text-decoration-none"
              rel="noopener noreferrer"
              style={{ color: 'inherit' }}
            >
              {title}
            </a>
          </div>
          <hr className="line line-top border-0"></hr>
          <div className="description">{description}</div>
          <hr className="line line-bottom border-0"></hr>
          <div className="tools">{tools}</div>
        </div>
        <div className="img-container position-relative d-flex flex-column justify-content-center align-items-center">
          <motion.div className="type-prompt w-100 fw-bold">
            Tap to view
            <motion.i
              className="fa fa-chevron-down mt-1"
              animate={{ y: [0, 5, 0] }}
              transition={{ repeat: Infinity, duration: 1 }}
            />
          </motion.div>
          <a href={link} target="_blank" rel="noopener noreferrer">
            <picture className="h-100">
              <source media="(max-width: 768px)" srcSet={mobileImg} />
              <source media="(min-width: 768px)" srcSet={laptopImg} />
              <motion.img
                className="project-img img-cover img-fluid rounded-3 cursor-pointer"
                src={laptopImg}
                alt=""
                whileHover={{
                  scale: 1.05,
                  boxShadow: '0px 4px 15px rgba(255, 255, 255, 0.3)',
                }}
                transition={{ duration: 0.3 }}
              />
            </picture>
          </a>
        </div>
      </motion.div>
    </div>
  );
};

export default ProjectCard;
