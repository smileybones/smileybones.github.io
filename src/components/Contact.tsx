import { Mail, Phone, MapPin, Linkedin, Instagram, Download, ExternalLink } from 'lucide-react';
import { ImageWithFallback } from './figma/ImageWithFallback';

export function Contact() {
  return (
    <div className="min-h-screen bg-black text-white pt-20">
      {/* Hero Section */}
      <section className="py-24 px-6 bg-zinc-950">
        <div className="container mx-auto max-w-4xl text-center">
          <p className="text-white/60 tracking-widest mb-4">GET IN TOUCH</p>
          <h1 className="serif-font text-5xl md:text-7xl mb-6">Let's Work Together</h1>
          <p className="text-lg text-white/70 max-w-2xl mx-auto">
            Available for film production, cinematography, and photography projects worldwide
          </p>
        </div>
      </section>

      {/* Contact Information & Form */}
      <section className="py-24 px-6 bg-black">
        <div className="container mx-auto max-w-6xl">
          <div className="grid md:grid-cols-2 gap-16">
            {/* Contact Info */}
            <div>
              <h2 className="serif-font text-3xl mb-8">Contact Information</h2>
              <div className="space-y-6 mb-12">
                <div className="flex items-start gap-4">
                  <Mail className="text-white/60 mt-1" size={24} />
                  <div>
                    <p className="text-white/40 mb-1">Email</p>
                    <a href="mailto:aline@bubbameisa.com" className="text-lg hover:text-white/80 transition-colors">
                      aline@bubbameisa.com
                    </a>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <Phone className="text-white/60 mt-1" size={24} />
                  <div>
                    <p className="text-white/40 mb-1">Phone</p>
                    <a href="tel:+41123456789" className="text-lg hover:text-white/80 transition-colors">
                      +41 (0) 12 345 6789
                    </a>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <MapPin className="text-white/60 mt-1" size={24} />
                  <div>
                    <p className="text-white/40 mb-1">Location</p>
                    <p className="text-lg">Basel, Switzerland</p>
                    <p className="text-white/60">Available for travel</p>
                  </div>
                </div>
              </div>

              <h3 className="text-xl mb-4">Follow My Work</h3>
              <div className="flex gap-4">
                <a
                  href="#"
                  className="w-12 h-12 border border-white/30 flex items-center justify-center hover:bg-white hover:text-black transition-colors"
                  aria-label="Instagram"
                >
                  <Instagram size={20} />
                </a>
                <a
                  href="#"
                  className="w-12 h-12 border border-white/30 flex items-center justify-center hover:bg-white hover:text-black transition-colors"
                  aria-label="LinkedIn"
                >
                  <Linkedin size={20} />
                </a>
                <a
                  href="#"
                  className="w-12 h-12 border border-white/30 flex items-center justify-center hover:bg-white hover:text-black transition-colors"
                  aria-label="Vimeo"
                >
                  <ExternalLink size={20} />
                </a>
              </div>
            </div>

            {/* Contact Form */}
            <div>
              <h2 className="serif-font text-3xl mb-8">Send a Message</h2>
              <form className="space-y-6">
                <div>
                  <label htmlFor="name" className="block mb-2 text-white/80">
                    Name
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    className="w-full px-4 py-3 bg-zinc-900 border border-white/10 focus:border-white/30 outline-none transition-colors"
                    placeholder="Your name"
                  />
                </div>
                <div>
                  <label htmlFor="email" className="block mb-2 text-white/80">
                    Email
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    className="w-full px-4 py-3 bg-zinc-900 border border-white/10 focus:border-white/30 outline-none transition-colors"
                    placeholder="your.email@example.com"
                  />
                </div>
                <div>
                  <label htmlFor="subject" className="block mb-2 text-white/80">
                    Subject
                  </label>
                  <input
                    type="text"
                    id="subject"
                    name="subject"
                    className="w-full px-4 py-3 bg-zinc-900 border border-white/10 focus:border-white/30 outline-none transition-colors"
                    placeholder="Project inquiry"
                  />
                </div>
                <div>
                  <label htmlFor="message" className="block mb-2 text-white/80">
                    Message
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    rows={6}
                    className="w-full px-4 py-3 bg-zinc-900 border border-white/10 focus:border-white/30 outline-none transition-colors resize-none"
                    placeholder="Tell me about your project..."
                  />
                </div>
                <button
                  type="submit"
                  className="w-full px-8 py-3 bg-white text-black hover:bg-white/90 transition-colors tracking-wider"
                >
                  Send Message
                </button>
              </form>
            </div>
          </div>
        </div>
      </section>

      {/* Resume Section */}
      <section className="py-24 px-6 bg-zinc-950">
        <div className="container mx-auto max-w-6xl">
          <div className="grid md:grid-cols-2 gap-16">
            <div>
              <div className="relative aspect-[3/4] mb-8">
                <ImageWithFallback
                  src="https://images.unsplash.com/photo-1512939755946-501bd2c2540d?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxmaWxtJTIwZGlyZWN0b3IlMjBwb3J0cmFpdHxlbnwxfHx8fDE3NjAzMDU0MDh8MA&ixlib=rb-4.1.0&q=80&w=1080"
                  alt="Aline Frances"
                  className="w-full h-full object-cover"
                />
              </div>
              <button className="flex items-center gap-2 px-6 py-3 border border-white text-white hover:bg-white hover:text-black transition-colors tracking-wider w-full justify-center">
                <Download size={20} />
                Download Resume (PDF)
              </button>
            </div>

            <div>
              <h2 className="serif-font text-4xl mb-8">Aline Frances</h2>
              <p className="text-lg text-white/70 mb-8 leading-relaxed">
                Film Director, Cinematographer & Photographer based in Basel, Switzerland
              </p>

              <div className="space-y-8">
                <div>
                  <h3 className="text-2xl mb-4">Experience</h3>
                  <div className="space-y-6">
                    <div>
                      <p className="text-lg">Director of Photography</p>
                      <p className="text-white/60">Freelance • 2018 - Present</p>
                      <p className="text-white/50 mt-2">
                        Cinematography for documentaries, commercials, and narrative films
                      </p>
                    </div>
                    <div>
                      <p className="text-lg">Filmmaker in Residence</p>
                      <p className="text-white/60">Jewish Museum of Switzerland • 2022 - Present</p>
                      <p className="text-white/50 mt-2">
                        Documentary series and exhibition photography
                      </p>
                    </div>
                    <div>
                      <p className="text-lg">Lead Cinematographer</p>
                      <p className="text-white/60">The Golem Feature Film • 2023 - 2024</p>
                      <p className="text-white/50 mt-2">
                        Principal cinematography for award-winning feature
                      </p>
                    </div>
                  </div>
                </div>

                <div>
                  <h3 className="text-2xl mb-4">Education</h3>
                  <div className="space-y-4">
                    <div>
                      <p className="text-lg">Master of Fine Arts in Film Production</p>
                      <p className="text-white/60">Zurich University of the Arts • 2016</p>
                    </div>
                    <div>
                      <p className="text-lg">BA in Visual Communication</p>
                      <p className="text-white/60">Basel School of Design • 2013</p>
                    </div>
                  </div>
                </div>

                <div>
                  <h3 className="text-2xl mb-4">Awards & Recognition</h3>
                  <ul className="space-y-2 text-white/60">
                    <li>• Best Cinematography - International Film Festival Basel (2024)</li>
                    <li>• Audience Award - Jewish Film Festival (2024)</li>
                    <li>• Swiss Film Prize Nomination (2023)</li>
                    <li>• Locarno Film Festival Selection (2022)</li>
                  </ul>
                </div>

                <div>
                  <h3 className="text-2xl mb-4">Skills</h3>
                  <div className="flex flex-wrap gap-3">
                    {[
                      'Cinematography',
                      'Directing',
                      'Documentary',
                      'Color Grading',
                      'Film Photography',
                      'Digital Photography',
                      'Lighting Design',
                      'Post-Production',
                    ].map((skill) => (
                      <span
                        key={skill}
                        className="px-4 py-2 bg-white/10 border border-white/20 text-sm"
                      >
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Availability */}
      <section className="py-16 px-6 bg-black">
        <div className="container mx-auto max-w-4xl text-center">
          <div className="inline-block px-6 py-2 bg-green-500/20 border border-green-500/30 text-green-400 mb-6">
            Currently Available for New Projects
          </div>
          <h3 className="serif-font text-3xl mb-4">Open for Collaborations</h3>
          <p className="text-white/60 max-w-2xl mx-auto">
            I'm always interested in challenging projects, creative collaborations, 
            and opportunities to tell meaningful stories through film and photography.
          </p>
        </div>
      </section>
    </div>
  );
}
