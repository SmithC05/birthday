import cakeImg from "@assets/generated_images/Birthday_cake_with_candles_70f9ef05.png";
import balloonsImg from "@assets/generated_images/Colorful_party_balloons_e83adef3.png";
import fireworksImg from "@assets/generated_images/Colorful_fireworks_display_a973102b.png";
import decorationsImg from "@assets/generated_images/Party_decorations_and_streamers_7db2a9a7.png";
import giftsImg from "@assets/generated_images/Wrapped_birthday_gifts_d2765e0f.png";
import candlesImg from "@assets/generated_images/Glowing_birthday_candles_closeup_c9367b5c.png";

const galleryImages = [
  { src: cakeImg, alt: "Birthday cake with candles" },
  { src: balloonsImg, alt: "Colorful party balloons" },
  { src: fireworksImg, alt: "Fireworks display" },
  { src: decorationsImg, alt: "Party decorations" },
  { src: giftsImg, alt: "Wrapped birthday gifts" },
  { src: candlesImg, alt: "Birthday candles" },
];

export default function GallerySection() {
  return (
    <section className="min-h-screen flex items-center justify-center py-16 px-4" data-testid="section-gallery">
      <div className="max-w-6xl w-full">
        <h2 
          className="text-4xl md:text-6xl font-bold text-center text-white mb-4 animate-glow"
          data-testid="text-gallery-title"
        >
          🎂 Birthday Memories 🎂
        </h2>
        <p 
          className="text-center text-white/80 mb-12 text-lg italic"
          data-testid="text-gallery-subtitle"
        >
          You can replace these with your own photos later!
        </p>
        
        <div className="grid grid-cols-2 md:grid-cols-3 gap-4 md:gap-6">
          {galleryImages.map((image, index) => (
            <div
              key={index}
              className="rounded-xl overflow-hidden transform transition-all duration-300 hover:scale-105 hover:shadow-2xl bg-white/10 backdrop-blur-sm"
              data-testid={`img-gallery-${index}`}
            >
              <img
                src={image.src}
                alt={image.alt}
                className="w-full h-48 md:h-64 object-cover"
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
