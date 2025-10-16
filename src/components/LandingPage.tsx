import { ArrowDown } from 'lucide-react';
import { Link } from 'react-router-dom';

export function LandingPage() {
  return (
    <div className="min-h-screen bg-black text-white">
      {/* Video Background Section */}
      <section className="relative h-screen flex items-center justify-center overflow-hidden">
        {/* Video Background - using a dark overlay with animated gradient as placeholder */}
        <div className="absolute inset-0 z-0">
          <div className="absolute inset-0 bg-gradient-to-br from-black via-zinc-900 to-black animate-gradient" />
          <div className="absolute inset-0 opacity-20">
            <div className="absolute top-0 left-0 w-96 h-96 bg-purple-500/30 rounded-full blur-3xl animate-pulse" />
            <div className="absolute bottom-0 right-0 w-96 h-96 bg-blue-500/30 rounded-full blur-3xl animate-pulse delay-1000" />
          </div>
          {/* Note: Replace this with actual video element when video is available */}
          {/* <video autoPlay muted loop className="w-full h-full object-cover opacity-50">
            <source src="/path-to-video.mp4" type="video/mp4" />
          </video> */}
        </div>

        {/* Content */}
        <div className="relative z-10 text-center px-6">
          <h1 className="serif-font text-6xl md:text-8xl mb-6 tracking-wide">
            Bubba Meisa
          </h1>
          <p className="elegant-font text-2xl md:text-4xl text-white/80 mb-12">
            Productions
          </p>
          <p className="text-lg md:text-xl text-white/60 max-w-2xl mx-auto mb-12">
            Cinematic storytelling through the lens of artistic vision
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              to="/cinematography"
              className="px-8 py-3 bg-white text-black hover:bg-white/90 transition-colors tracking-wider"
            >
              View Work
            </Link>
            <Link
              to="/contact"
              className="px-8 py-3 border border-white text-white hover:bg-white hover:text-black transition-colors tracking-wider"
            >
              Get In Touch
            </Link>
          </div>
        </div>

        {/* Scroll Indicator */}
        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce">
          <ArrowDown className="text-white/60" size={32} />
        </div>
      </section>

      {/* About Aline Frances Section */}
      <section className="py-24 px-6 bg-zinc-950">
        <div className="container mx-auto max-w-6xl">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <img
                src="https://images.unsplash.com/photo-1512939755946-501bd2c2540d?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxmaWxtJTIwZGlyZWN0b3IlMjBwb3J0cmFpdHxlbnwxfHx8fDE3NjAzMDU0MDh8MA&ixlib=rb-4.1.0&q=80&w=1080"
                alt="Aline Frances"
                className="w-full h-[600px] object-cover"
              />
            </div>
            <div>
              <p className="text-white/40 tracking-widest mb-4">DIRECTOR • CINEMATOGRAPHER</p>
              <h2 className="serif-font text-5xl mb-6">Aline Frances</h2>
              <div className="space-y-4 text-white/70 leading-relaxed">
                <p>
                  Aline Frances is a visionary filmmaker and cinematographer specializing in
                  compelling visual narratives that bridge cultural heritage and contemporary
                  storytelling.
                </p>
                <p>
                  With extensive experience in documentary filmmaking, commercial production,
                  and artistic photography, Aline brings a unique perspective to every project,
                  combining technical excellence with profound emotional depth.
                </p>
                <p>
                  Her work has been featured in notable institutions including the Jewish Museum
                  of Switzerland, and her film "The Golem" has garnered critical acclaim for its
                  innovative approach to mythological storytelling.
                </p>
                <p>
                  Based between multiple creative hubs, Aline continues to push the boundaries
                  of visual media, creating work that resonates with audiences worldwide.
                </p>
              </div>
              <Link
                to="/contact"
                className="inline-block mt-8 px-8 py-3 border border-white text-white hover:bg-white hover:text-black transition-colors tracking-wider"
              >
                Learn More
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Featured Projects Preview */}
      <section className="py-24 px-6 bg-black">
        <div className="container mx-auto max-w-7xl">
          <h2 className="serif-font text-4xl md:text-5xl text-center mb-16">Featured Work</h2>
          <div className="grid md:grid-cols-3 gap-8">
            <Link to="/cinematography" className="group relative overflow-hidden aspect-[4/5]">
              <img
                src="https://images.unsplash.com/photo-1758851088217-df00ca346e24?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjaW5lbWF0b2dyYXBoeSUyMGZpbG0lMjByZWVsfGVufDF8fHx8MTc2MDMwNTQwNnww&ixlib=rb-4.1.0&q=80&w=1080"
                alt="Cinematography"
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black via-black/50 to-transparent flex items-end p-6">
                <h3 className="serif-font text-2xl">Cinematography Reel</h3>
              </div>
            </Link>

            <Link to="/the-golem" className="group relative overflow-hidden aspect-[4/5]">
              <img
                src="https://images.unsplash.com/photo-1689561524442-18f58efcab22?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxnb2xlbSUyMHNjdWxwdHVyZXxlbnwxfHx8fDE3NjAzMDU0MDd8MA&ixlib=rb-4.1.0&q=80&w=1080"
                alt="The Golem"
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black via-black/50 to-transparent flex items-end p-6">
                <h3 className="serif-font text-2xl">The Golem</h3>
              </div>
            </Link>

            <Link to="/jewish-museum" className="group relative overflow-hidden aspect-[4/5]">
              <img
                src="https://images.unsplash.com/photo-1562064729-6c3f058785fd?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtdXNldW0lMjBleGhpYml0aW9ufGVufDF8fHx8MTc2MDI0NjI4Nnww&ixlib=rb-4.1.0&q=80&w=1080"
                alt="Jewish Museum"
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black via-black/50 to-transparent flex items-end p-6">
                <h3 className="serif-font text-2xl">Jewish Museum of Switzerland</h3>
              </div>
            </Link>
          </div>
        </div>
      </section>

      <style>{`
        @keyframes gradient {
          0%, 100% { opacity: 1; }
          50% { opacity: 0.8; }
        }
        .animate-gradient {
          animation: gradient 8s ease-in-out infinite;
        }
        .delay-1000 {
          animation-delay: 2s;
        }
      `}</style>
    </div>
  );
}
