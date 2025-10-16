import { MapPin, Calendar } from 'lucide-react';
import { ImageWithFallback } from './figma/ImageWithFallback';

export function JewishMuseum() {
  const projects = [
    {
      id: 1,
      title: 'Voices of Memory',
      year: '2023',
      location: 'Main Exhibition Hall',
      description: 'An intimate documentary series capturing oral histories from Holocaust survivors and their descendants, preserving stories for future generations.',
      image: 'https://images.unsplash.com/photo-1562064729-6c3f058785fd?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtdXNldW0lMjBleGhpYml0aW9ufGVufDF8fHx8MTc2MDI0NjI4Nnww&ixlib=rb-4.1.0&q=80&w=1080',
      category: 'Documentary Series',
    },
    {
      id: 2,
      title: 'Artifacts of Faith',
      year: '2023',
      location: 'Permanent Collection',
      description: 'Cinematic documentation of sacred objects and their stories, exploring the material culture of Jewish life in Switzerland.',
      image: 'https://images.unsplash.com/photo-1594165808659-fe20f963ab53?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxoaXN0b3JpY2FsJTIwYXJ0aWZhY3RzfGVufDF8fHx8MTc2MDMwNTU1OHww&ixlib=rb-4.1.0&q=80&w=1080',
      category: 'Cultural Documentation',
    },
    {
      id: 3,
      title: 'Architecture of Heritage',
      year: '2022',
      location: 'Special Exhibition',
      description: 'Visual exploration of synagogue architecture across Switzerland, from historic preservation to contemporary design.',
      image: 'https://images.unsplash.com/photo-1720052473937-858c68dd0783?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxqZXdpc2glMjBzeW5hZ29ndWUlMjBpbnRlcmlvcnxlbnwxfHx8fDE3NjAzMDU0MDl8MA&ixlib=rb-4.1.0&q=80&w=1080',
      category: 'Architectural Film',
    },
    {
      id: 4,
      title: 'Community Portraits',
      year: '2024',
      location: 'Contemporary Gallery',
      description: 'A portrait series celebrating the diversity and vitality of Jewish communities in Basel and beyond.',
      image: 'https://images.unsplash.com/photo-1663043188237-01565028db93?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxkb2N1bWVudGFyeSUyMHBob3RvZ3JhcGh5fGVufDF8fHx8MTc2MDMwNTU1OXww&ixlib=rb-4.1.0&q=80&w=1080',
      category: 'Portrait Series',
    },
    {
      id: 5,
      title: 'Exhibition Installation',
      year: '2023',
      location: 'Rotating Gallery',
      description: 'Time-lapse and behind-the-scenes documentation of major exhibition installations, revealing the curatorial process.',
      image: 'https://images.unsplash.com/photo-1722239150558-25cf7731732b?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtdXNldW0lMjBhcnR3b3JrJTIwZGlzcGxheXxlbnwxfHx8fDE3NjAzMDU1NTd8MA&ixlib=rb-4.1.0&q=80&w=1080',
      category: 'Process Documentation',
    },
    {
      id: 6,
      title: 'Light and Shadow',
      year: '2024',
      location: 'Contemporary Wing',
      description: 'An artistic exploration of museum spaces through light, shadow, and architectural form, creating a meditation on memory and presence.',
      image: 'https://images.unsplash.com/photo-1641348653749-5e3429a72429?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxhcnQlMjBnYWxsZXJ5JTIwbGlnaHRpbmd8ZW58MXx8fHwxNzYwMzA1NTU5fDA&ixlib=rb-4.1.0&q=80&w=1080',
      category: 'Artistic Film',
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
            Since 2022, I have had the privilege of collaborating with the Jewish Museum of Switzerland 
            to create visual documentation that preserves and celebrates Jewish heritage, culture, and community. 
            These projects span documentary filmmaking, exhibition photography, and artistic interpretations 
            of museum spaces and collections.
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
                  <button className="px-6 py-2 border border-white/30 hover:bg-white hover:text-black transition-colors tracking-wider">
                    View Project
                  </button>
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
              "Aline's work captures not just images, but the soul of our institution and the stories 
              we preserve. Her sensitive approach to documenting Jewish heritage has created an invaluable 
              archive for future generations."
            </p>
            <footer className="text-white/60">
              <p>— Dr. Gabrielle Rosenstein</p>
              <p className="text-sm">Director, Jewish Museum of Switzerland</p>
            </footer>
          </blockquote>
        </div>
      </section>
    </div>
  );
}
