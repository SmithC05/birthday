
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Gift, Heart } from "lucide-react";

export default function SurpriseSection() {
  const [isRevealed, setIsRevealed] = useState(false);

  return (
    <section
      className="min-h-screen flex items-center justify-center py-16 px-4"
      data-testid="section-surprise"
    >
      <div className="max-w-4xl w-full text-center">
        <AnimatePresence mode="wait">
          {!isRevealed ? (
            <motion.div
              key="gift-reveal"
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 1.2, rotate: 10 }}
              className="cursor-pointer"
              onClick={() => setIsRevealed(true)}
            >
              <h2
                className="text-4xl md:text-5xl font-bold text-white mb-12 animate-pulse"
              >
                One Last Surprise For You... 🎁
              </h2>
              <motion.div
                whileHover={{ scale: 1.1, rotate: [0, -5, 5, -5, 5, 0] }}
                transition={{ duration: 0.5 }}
                className="inline-block bg-white/10 backdrop-blur-md p-16 rounded-full border-4 border-white/30 shadow-[0_0_60px_rgba(255,200,255,0.4)]"
              >
                <div className="relative">
                  <Gift className="w-40 h-40 text-pink-300 drop-shadow-2xl" />
                  <Heart className="w-12 h-12 text-red-400 absolute -top-4 -right-4 animate-bounce" />
                </div>
                <p className="text-white/80 mt-6 text-xl font-medium">Tap to Open</p>
              </motion.div>
            </motion.div>
          ) : (
            <motion.div
              key="message-card"
              initial={{ opacity: 0, scale: 0.9, y: 50 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              transition={{ duration: 0.8, type: "spring", bounce: 0.4 }}
              className="bg-white/10 backdrop-blur-md rounded-3xl p-8 md:p-16 border border-white/20 shadow-2xl relative overflow-hidden group"
            >
              {/* Decorative Elements */}
              <div className="absolute top-0 left-0 w-full h-2 bg-gradient-to-r from-pink-300 via-purple-300 to-indigo-300" />
              <Gift className="w-16 h-16 text-white/50 absolute top-4 left-4 -rotate-12 transition-transform duration-700 group-hover:rotate-12" />
              <Gift className="w-16 h-16 text-white/50 absolute bottom-4 right-4 rotate-12 transition-transform duration-700 group-hover:-rotate-12" />

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.3 }}
              >
                <h2
                  className="text-3xl md:text-5xl font-bold text-white mb-12 animate-glow"
                  data-testid="text-surprise-title"
                >
                  ✨ To My Bestest Friend ✨
                </h2>

                <div className="relative z-10 px-2 md:px-12 space-y-8">
                  <p className="text-2xl md:text-4xl font-handwriting text-white drop-shadow-lg leading-relaxed">
                    "You are my bestest friend in the whole wide world, and you will be forever..." 💖
                  </p>

                  <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 1 }}
                    className="w-24 h-1 bg-white/30 mx-auto rounded-full"
                  />

                  <p className="text-lg md:text-xl text-white/90 leading-relaxed font-light italic">
                    Through all the laughs, the tears, the school days and now college... seeing you grow has been my favorite adventure. Use this year to shine even brighter. I'll always be cheering for you!
                  </p>
                </div>
              </motion.div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </section>
  );
}
