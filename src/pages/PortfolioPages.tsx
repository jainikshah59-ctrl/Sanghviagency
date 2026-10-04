import { useMemo, useState } from 'react';
import { MapPin, Star } from 'lucide-react';
import { galleryItems, projects, testimonials } from '../data/site';
import ProjectCard from '../components/ProjectCard';
import { ContentContainer, PageHeading, SafeImage, SectionHeading } from '../components/shared';

const filters = ['All Projects', 'Industrial', 'Residential', 'Commercial', 'Warehouses'] as const;

export function ProjectsPage() {
  const [filter, setFilter] = useState<(typeof filters)[number]>('All Projects');
  const filteredProjects = useMemo(
    () => filter === 'All Projects' ? projects : projects.filter((project) => project.sector === filter),
    [filter],
  );

  return (
    <main className="page-main">
      <section className="page-hero-surface">
        <ContentContainer>
          <PageHeading eyebrow="Steel supply portfolio" title="Projects Portfolio" subtitle="500+ projects supplied across residential, commercial, industrial, and infrastructure sectors." />
          <div className="portfolio-summary"><span>500+</span><p>Projects supplied<br />across Gujarat</p><span className="portfolio-summary-line" /><p>Residential · Commercial<br />Industrial · Infrastructure</p></div>
        </ContentContainer>
      </section>
      <section className="page-section portfolio-section">
        <ContentContainer>
          <div className="filter-row" role="group" aria-label="Filter projects by sector">
            {filters.map((item) => <button className={filter === item ? 'filter-chip active' : 'filter-chip'} type="button" key={item} aria-pressed={filter === item} onClick={() => setFilter(item)}>{item}</button>)}
          </div>
          <p className="portfolio-result-count" aria-live="polite">Showing {filteredProjects.length} featured supply entries</p>
          <SectionHeading eyebrow="Selected Projects" title="Steel Supply Across Real Requirements." intro="Representative residential, commercial, industrial and warehouse supply entries from the project portfolio." />
          <div className="project-grid portfolio-grid">
            {filteredProjects.map((project) => <ProjectCard key={project.title} project={project} index={projects.indexOf(project)} />)}
          </div>
        </ContentContainer>
      </section>
      <section className="page-section testimonials-section">
        <ContentContainer>
          <SectionHeading eyebrow="Customer Voices" title="Trust Is Built in Every Delivery." intro="Feedback from the five source testimonials, shown without added claims or altered ratings."
          <div className="testimonials-grid">
            {testimonials.map((testimonial) => (
              <blockquote className="testimonial-card" key={testimonial.name}>
                <div className="testimonial-stars" aria-label={`${testimonial.stars} out of 5 stars`}>{Array.from({ length: testimonial.stars }, (_, i) => <Star key={i} size={14} fill="currentColor" />)}</div>
                <p>“{testimonial.quote}”</p>
                <footer><strong>{testimonial.name}</strong><span>{testimonial.role}</span></footer>
              </blockquote>
            ))}
          </div>
        </ContentContainer>
      </section>
    </main>
  );
}

export function GalleryPage() {
  return (
    <main className="page-main">
      <section className="page-hero-surface">
        <ContentContainer>
          <PageHeading eyebrow="Warehouse · Inventory · Logistics" title="Photo Gallery" subtitle="Take a visual tour of our warehouse, steel inventory, loading logistics, and supply operations." />
        </ContentContainer>
      </section>
      <section className="page-section gallery-section">
        <ContentContainer>
          <div className="gallery-grid">
            {galleryItems.map((item, index) => (
              <figure className={`gallery-card gallery-card-${index + 1}`} key={item.title}>
                <div className="gallery-image-frame"><SafeImage src={item.image} alt={item.alt} fallbackSrc={item.fallbackImage ?? '/images/construction.jpg'} loading="lazy" /><span className="gallery-index">0{index + 1}</span></div>
                <figcaption><span>{item.title}</span><span className="gallery-view"><MapPin size={13} />Sanghvi Agency source image</span></figcaption>
              </figure>
            ))}
          </div>
        </ContentContainer>
      </section>
    </main>
  );
}
