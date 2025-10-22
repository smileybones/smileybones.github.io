import { MapPin, Calendar } from 'lucide-react';
import { ImageWithFallback } from './figma/ImageWithFallback';
import { Link } from 'react-router-dom';

export function JewishMuseum() {
  const projects = [
    {
      id: 1,
      title: 'The Rebbitzen Project',
      year: '2023',
      location: 'Main Exhibition Hall',
      description: "Since so much of the museum's collection represents the duties of men and boys, yet so much of daily life is made possible by women, I took on the responsibility of showing a holistic picture of Jewish life. Exhibited in their permanent collection alongside objects pertaining to Rabbis, The Jewish Museum will showcase my portraits of Rebbitzins and the blurb created describing their personal role and contributions to their community.",
      image: 'https://images.unsplash.com/photo-1562064729-6c3f058785fd?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtdXNldW0lMjBleGhpYml0aW9ufGVufDF8fHx8MTc2MDI0NjI4Nnww&ixlib=rb-4.1.0&q=80&w=1080',
      category: 'Project',
    },
    {
      id: 2,
      title: 'Forgotten Jewish Villages of Alsace',
      year: '2023',
      location: 'Research & Archive',
      description: 'Together with two specialists in the history of rural Judaism, my time at the museum was spent documenting the traces of Jewish rural life in the 18th and 19th centuries in Alsace.',
      image: 'https://images.unsplash.com/photo-1594165808659-fe20f963ab53?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxoaXN0b3JpY2FsJTIwYXJ0aWZhY3RzfGVufDF8fHx8MTc2MDMwNTU1OHww&ixlib=rb-4.1.0&q=80&w=1080',
      category: 'Research',
    },
    {
      id: 3,
      title: 'Jewish Museum Promotional Video',
      year: '2023',
      location: 'Media & Outreach',
      description: 'Planned and produced a promotional video for the museum\'s new space to update museum visitors and donors. https://www.youtube.com/watch?v=ny5VUeFSGLQ',
      image: 'https://images.unsplash.com/photo-1720052473937-858c68dd0783?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxqZXdpc2glMjBzeW5hZ29ndWUlMjBpbnRlcmlvcnxlbnwxfHx8fDE3NjAzMDU0MDl8MA&ixlib=rb-4.1.0&q=80&w=1080',
      category: 'Media',
    },
  ];

  return (
    <div className="min-h-screen bg-black text-white pt-20">
      {/* Hero Section */}
      <section className="relative h-[60vh] flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0">
          <img
            src="https://images.unsplash.com/photo-1657920863237-8805ecf70ef3?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtdXNldW0lMjBpbnRlcmlvciUyMGFyY2hpdGVjdHVyZXxlbnwxfHx8fDE3NjAyODc2MDN8MA&ixlib=rb-4.1.0&q=80&w=1080"
            alt="Jewish Museum"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-black/70" />
        </div>
        <div className="relative z-10 text-center px-6">
          <p className="text-white/60 tracking-widest mb-4">INSTITUTIONAL COLLABORATION</p>
          <h1 className="serif-font text-5xl md:text-7xl mb-6">Jewish Museum of Switzerland</h1>
          <p className="text-lg text-white/70 max-w-3xl mx-auto">
            A multi-year collaboration documenting exhibitions, collections, and community stories
          </p>
        </div>
      </section>

      {/* Introduction */}
      <section className="py-16 px-6 bg-zinc-950">
        <div className="container mx-auto max-w-4xl text-center">
          <p className="text-lg text-white/70 leading-relaxed">
            Besides carrying out regular internship work, photographing the architecture, events and items in the collection, Aline Chalfin took on three projects which required considerable organizational and social skills:
          </p>
        </div>
      </section>

      {/* Projects Grid */}
      <section className="py-24 px-6 bg-black">
        <div className="container mx-auto max-w-7xl">
          <div className="space-y-32">
            {projects.map((project, index) => (
              <div
                key={project.id}
                className={`grid md:grid-cols-2 gap-12 items-center ${
                  index % 2 === 1 ? 'md:grid-flow-dense' : ''
                }`}
              >
                <div className={index % 2 === 1 ? 'md:col-start-2' : ''}>
                  <div className="relative aspect-[4/3] overflow-hidden group">
                    <ImageWithFallback
                      src={project.image}
                      alt={project.title}
                      className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
                  </div>
                </div>
                <div className={index % 2 === 1 ? 'md:col-start-1 md:row-start-1' : ''}>
                  <div className="inline-block px-4 py-1 bg-white/10 text-sm tracking-wider mb-4">
                    {project.category}
                  </div>
                  <h3 className="serif-font text-4xl mb-4">{project.title}</h3>
                  <div className="flex items-center gap-6 text-white/60 mb-6">
                    <div className="flex items-center gap-2">
                      <Calendar size={16} />
                      <span>{project.year}</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <MapPin size={16} />
                      <span>{project.location}</span>
                    </div>
                  </div>
                  <p className="text-lg text-white/70 leading-relaxed mb-6">
                    {project.description}
                  </p>
                  {project.title === 'The Rebbitzen Project' ? (
                    <Link
                      to="/rebbitzen"
                      className="inline-block px-6 py-2 border border-white/30 hover:bg-white hover:text-black transition-colors tracking-wider"
                    >
                      View Project
                    </Link>
                  ) : (
                    <button className="px-6 py-2 border border-white/30 hover:bg-white hover:text-black transition-colors tracking-wider">
                      View Project
                    </button>
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Impact Section */}
      <section className="py-24 px-6 bg-zinc-950">
        <div className="container mx-auto max-w-6xl">
          <h2 className="serif-font text-4xl mb-16 text-center">Project Impact</h2>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="serif-font text-5xl mb-4">50+</div>
              <p className="text-white/60">Hours of Documentary Footage</p>
            </div>
            <div className="text-center">
              <div className="serif-font text-5xl mb-4">6</div>
              <p className="text-white/60">Major Exhibition Projects</p>
            </div>
            <div className="text-center">
              <div className="serif-font text-5xl mb-4">200+</div>
              <p className="text-white/60">Stories Preserved</p>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonial */}
      <section className="py-24 px-6 bg-black">
        <div className="container mx-auto max-w-4xl text-center">
          <blockquote className="mb-8">
            <p className="elegant-font text-2xl md:text-3xl text-white/80 leading-relaxed mb-8">
              “Aline Chalfin was an unforgettable intern. She was hugely motivated to learn all facets of Jewish cultural life in Switzerland and museum work in particular. Her social skills are outstanding. She immediately gained my trust and that of the employees and made meaningful friendships with people of all ages within and outside of the museum. Despite not speaking Swiss German, she was approachable, courteous, flexible, friendly and helpful. She brought creativity and good ideas to the team, but also hard work and attention to detail. I am sure that her talent, her enthusiasm and energy will pave her an outstanding career.”
            </p>
          </blockquote>
        </div>
      </section>
    </div>
  );
}
