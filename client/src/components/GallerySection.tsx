import dancerImg from "@assets/stock_images/happy_birthday_dance_96952491.jpg";
import topperImg from "@assets/stock_images/happy_birthday_toppe_35038cd3.jpg";
import cuteGirlImg from "@assets/stock_images/cute_girl_birthday_p_279d8993.jpg";
import wishesImg from "@assets/stock_images/birthday_wishes_cele_27ece448.jpg";
import cakeImg from "@assets/stock_images/happy_birthday_cake__c327eb54.jpg";
import confettiImg from "@assets/stock_images/birthday_party_confe_1edb04f2.jpg";

const galleryImages = [
  { src: dancerImg, alt: "Happy Birthday Dancer" },
  { src: topperImg, alt: "Happy Birthday Topper" },
  { src: cuteGirlImg, alt: "Cute Girl Birthday" },
  { src: wishesImg, alt: "Birthday Wishes" },
  { src: cakeImg, alt: "Happy Birthday Cake" },
  { src: confettiImg, alt: "Birthday Party Celebration" },
];

export default function GallerySection() {
  return (
    <section className="min-h-screen flex items-center justify-center py-16 px-4" data-testid="section-gallery">
      <div className="max-w-6xl w-full">
        <h2 
          className="text-4xl md:text-6xl font-bold text-center text-white mb-12 animate-glow"
          data-testid="text-gallery-title"
        >
          🎂 Birthday Memories 🎂
        </h2>
        
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
