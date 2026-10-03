import { ArrowUpRight, MapPin } from 'lucide-react';
import { Link } from 'react-router-dom';
import type { projects } from '../data/site';

type Project = (typeof projects)[number];

export default function ProjectCard({ project, index = 0 }: { project: Project; index?: number }) {
  return (
    <article className="project-card">
      <Link className={`project-card-media project-art-${index % 6}`} to="/projects" aria-label={`View ${project.title} supply entry in the Sanghvi Agency portfolio`}>
        {project.image ? (
          <img src={project.image} alt={project.alt} loading="lazy" />
        ) : (
          <div className="project-material-art" aria-hidden="true">
            <span className="material-beam material-beam-one" />
            <span className="material-beam material-beam-two" />
            <span className="material-beam material-beam-three" />
          </div>
        )}
        <span className="project-media-wash" aria-hidden="true" />
        <span className="project-media-kicker">{project.image ? `Illustrative supply image · ${project.sector}` : 'Decorative steel illustration · no project photo supplied'}</span>
        <span className="project-hover-action"><span>View Project</span><ArrowUpRight size={17} /></span>
      </Link>
      <div className="project-card-copy">
        <div className="project-card-title-line">
          <h3>{project.title}</h3>
          <span className="project-index">0{index + 1}</span>
        </div>
        <p className="project-location"><MapPin size={13} aria-hidden="true" />{project.location}</p>
        <p className="project-supply">{project.supply}</p>
      </div>
    </article>
  );
}
