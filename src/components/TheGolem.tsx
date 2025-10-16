import { ExternalLink, FileText, Camera } from 'lucide-react';
import { ImageWithFallback } from './figma/ImageWithFallback';

export function TheGolem() {
  const btsPhotos = [
    '/images/pic (5).jpg',
    '/images/pic (1).jpg',
    '/images/pic (19).jpg',
    '/images/pic (17).jpg',
    '/images/pic (15).jpg',
    '/images/pic (14).jpg',
    '/images/pic (4).jpg',
    '/images/pic (9).jpg',
    '/images/pic (3).jpg',
  ];

  return (
    <div className="min-h-screen bg-black text-white pt-20">

      {/* Hero Section */}
      <section className="relative h-screen flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0">
          <img
            src="https://filmfreeway-production-storage-01-connector.filmfreeway.com/press_kits/posters/003/230/713/original/a1bd6ac44d-poster.jpg?1751084110"
            alt="The Golem"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/70 to-black" />
        </div>
        <div className="relative z-10 text-center px-6">
          <h1 className="serif-font text-6xl md:text-8xl mb-6">The Golem</h1>
          <p className="text-xl text-white/70 max-w-3xl mx-auto mb-8">
            In 17th century Prague, a young boy facing persecution seeks help by reviving the ancient legend of the Golem
          </p>
          <div className="flex gap-4 justify-center">
            <a
              href="https://filmfreeway.com/TheGolem60"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-8 py-3 bg-white text-black hover:bg-white/90 transition-colors tracking-wider"
            >
              <ExternalLink size={18} />
              Watch Film
            </a>
          </div>
        </div>
      </section>

      {/* Film Synopsis */}
      <section className="py-24 px-6 bg-zinc-950">
        <div className="container mx-auto max-w-4xl">
          <div className="grid md:grid-cols-3 gap-12 mb-16">
            <div>
              <p className="text-white/40 mb-2 tracking-wider">YEAR</p>
              <p className="text-xl">2025</p>
            </div>
            <div>
              <p className="text-white/40 mb-2 tracking-wider">DURATION</p>
              <p className="text-xl">7 minutes 31 seconds</p>
            </div>
            <div>
              <p className="text-white/40 mb-2 tracking-wider">FORMAT</p>
              <p className="text-xl">16mm</p>
            </div>
          </div>
          <div className="prose prose-invert max-w-none">
            <p className="text-lg text-white/70 leading-relaxed mb-6">
              A young apprentice studies ancient alchemy and kabbalistic texts in secret when he hears a knock at the door and scrambles to hide the texts from his mentor.
            </p>
          </div>
        </div>
      </section>

 {/* Production Stills */}
      <section className="py-24 px-6 bg-black">
        <div className="container mx-auto max-w-7xl">
          <div className="flex items-center gap-3 mb-12">
            <Camera className="text-white/60" size={32} />
            <h2 className="serif-font text-4xl">Production Stills</h2>
          </div>
          <p className="text-lg text-white/60 mb-12 max-w-3xl">
            A selection of still frames and on-set captures highlighting the tone and visual style of <em>The Golem</em>.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              '/images/still1.jpg',
              '/images/still2.jpg',
              '/images/still3.jpg',
              '/images/still4.jpg',
              '/images/still5.jpg',
              '/images/still6.jpg',
            ].map((photo, index) => (
              <div
                key={index}
                className="group relative aspect-video overflow-hidden bg-zinc-900"
              >
                <ImageWithFallback
                  src={photo}
                  alt={`Production still ${index + 1}`}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity">
                  <div className="absolute bottom-0 left-0 right-0 p-4">
                    <h3 className="text-lg text-white">Production Still {index + 1}</h3>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Script Development Section */}
      <section className="py-24 px-6 bg-black">
        <div className="container mx-auto max-w-6xl">
          <div className="flex items-center gap-3 mb-12">
            <FileText className="text-white/60" size={32} />
            <h2 className="serif-font text-4xl">Script Development</h2>
          </div>
          <div className="grid md:grid-cols-2 gap-12">
            <div>
              <p className="text-white/70 mb-4">
                The story of <em>The Golem</em> was inspired by Jewish folklore and adapted into a short film exploring themes of fear, faith, and mythic protection.
              </p>
              <p className="text-white/70">
                The screenplay was refined over several drafts, focusing on mood, symbolism, and the balance between spiritual and emotional storytelling.
              </p>
            </div>
            <div className="space-y-6">
              <div className="p-6 bg-zinc-900 border border-white/10">
                <h4 className="text-lg mb-3">Final Script</h4>
                <p className="text-white/60">7 pages, written and revised between 2024–2025</p>
              </div>
              <div className="p-6 bg-zinc-900 border border-white/10">
                <h4 className="text-lg mb-3">Locations</h4>
                <p className="text-white/60">The Alchemy Museum, New Libeň Synagogue</p>
              </div>
            </div>
          </div>
        </div>
      </section>
      
     
      {/* Behind the Scenes */}
      <section className="py-24 px-6 bg-zinc-950">
        <div className="container mx-auto max-w-7xl">
          <div className="flex items-center gap-3 mb-12">
            <Camera className="text-white/60" size={32} />
            <h2 className="serif-font text-4xl">Behind the Scenes</h2>
          </div>
          <p className="text-lg text-white/60 mb-12 max-w-3xl">
            A visual journey through the production process, capturing the collaboration,
            creativity, and dedication that brought <em>The Golem</em> to life.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {btsPhotos.map((photo, index) => (
              <div
                key={index}
                className="group relative aspect-[4/5] overflow-hidden bg-zinc-900"
              >
                <ImageWithFallback
                  src={photo}
                  alt={`Behind the scenes ${index + 1}`}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity">
                  <div className="absolute bottom-0 left-0 right-0 p-6">
                    <h3 className="text-xl text-white">Behind the scenes {index + 1}</h3>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
