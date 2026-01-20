
import { useState, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Utensils, Gift } from "lucide-react";
import cakeImg from "@assets/stock_images/tower_cake.png";

type CakeStage = 'hidden' | 'lit' | 'blown' | 'cut';

export default function CakeCuttingSection() {
    const [stage, setStage] = useState<CakeStage>('hidden');
    const containerRef = useRef<HTMLDivElement>(null);

    const handleInteraction = () => {
        if (stage === 'hidden') {
            setStage('lit');
        } else if (stage === 'lit') {
            setStage('blown');
        } else if (stage === 'blown') {
            setStage('cut');
        }
    };

    const getInstructionText = () => {
        switch (stage) {
            case 'hidden': return "Tap to reveal the cake! 🎁";
            case 'lit': return "Make a wish & blow the candles! 🕯️";
            case 'blown': return "Cake cut pannu ma 🔪";
            case 'cut': return "Happy Birthday! 🥳";
        }
    };

    return (
        <section className="min-h-screen flex items-center justify-center py-16 px-4 bg-black/20" ref={containerRef}>
            <div className="flex flex-col items-center justify-center w-full max-w-sm mx-auto">
                <motion.div
                    key={stage}
                    initial={{ opacity: 0, y: -20 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="text-center mb-8 h-16 flex items-center justify-center"
                >
                    <h3 className="text-3xl md:text-4xl font-bold text-white font-handwriting animate-bounce drop-shadow-md">
                        {getInstructionText()}
                    </h3>
                </motion.div>

                <div
                    className="relative cursor-pointer group w-64 h-80 md:w-80 md:h-96 select-none"
                    onClick={handleInteraction}
                >
                    <AnimatePresence mode="wait">
                        {stage === 'hidden' ? (
                            <motion.div
                                key="gift-box"
                                initial={{ scale: 0.8, opacity: 0 }}
                                animate={{ scale: 1, opacity: 1, rotate: [0, -5, 5, -5, 5, 0] }}
                                exit={{ scale: 1.2, opacity: 0 }}
                                whileHover={{ scale: 1.1 }}
                                transition={{
                                    rotate: {
                                        repeat: Infinity,
                                        duration: 2,
                                        repeatDelay: 1
                                    }
                                }}
                                className="w-full h-full flex items-center justify-center"
                            >
                                <div className="bg-white/10 backdrop-blur-md p-12 rounded-full border-4 border-white/30 shadow-[0_0_50px_rgba(255,255,255,0.3)]">
                                    <Gift className="w-32 h-32 text-pink-300 drop-shadow-lg" />
                                </div>
                            </motion.div>
                        ) : stage !== 'cut' ? (
                            <motion.div
                                key="whole-cake"
                                initial={{ scale: 0.5, opacity: 0, y: 50 }}
                                animate={{ scale: 1, opacity: 1, y: 0 }}
                                exit={{ opacity: 0, scale: 1.1 }}
                                whileHover={{ scale: 1.02 }}
                                whileTap={{ scale: 0.98 }}
                                transition={{ type: "spring", stiffness: 200, damping: 20 }}
                                className="relative w-full h-full rounded-xl overflow-hidden shadow-2xl border-4 border-white/20 bg-white/5"
                            >
                                <img
                                    src={cakeImg}
                                    alt="Chocolate Tower Cake"
                                    className="w-full h-full object-cover"
                                />

                                {/* Single Candle on Top Tier */}
                                <AnimatePresence>
                                    {stage === 'lit' && (
                                        <motion.div
                                            key="single-candle"
                                            initial={{ opacity: 0, y: 10 }}
                                            animate={{ opacity: 1, y: 0 }}
                                            exit={{ opacity: 0, y: -10 }}
                                            transition={{ delay: 0.5 }}
                                            className="absolute z-20"
                                            style={{
                                                top: '5%',
                                                left: '50%',
                                                transform: 'translateX(-50%)'
                                            }}
                                        >
                                            {/* Realistic Flame using CSS class */}
                                            <div className="flame w-6 h-8 md:w-8 md:h-10 absolute -top-8 md:-top-10 left-1/2 -translate-x-1/2 origin-bottom" />
                                            {/* Candle Body */}
                                            <div className="w-3 h-10 md:w-4 md:h-14 bg-gradient-to-b from-yellow-100 to-yellow-400 rounded-sm shadow-md border-x border-black/10" />
                                        </motion.div>
                                    )}
                                </AnimatePresence>

                                {/* Smoke Effect when blown */}
                                {stage === 'blown' && (
                                    <div
                                        key="single-smoke"
                                        className="absolute z-20 smoke w-4 h-12"
                                        style={{
                                            top: '2%',
                                            left: '50%',
                                            transform: 'translateX(-50%)'
                                        }}
                                    />
                                )}

                                {/* Knife indicator - only shows when blown */}
                                {stage === 'blown' && (
                                    <motion.div
                                        initial={{ opacity: 0, x: 20, y: -20 }}
                                        animate={{ opacity: 1, x: 0, y: 0 }}
                                        transition={{
                                            repeat: Infinity,
                                            repeatType: "reverse",
                                            duration: 1.5
                                        }}
                                        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 z-30 text-white drop-shadow-lg"
                                    >
                                        <Utensils className="w-16 h-16 rotate-45 opacity-90 filter drop-shadow-[0_0_10px_rgba(0,0,0,0.5)]" />
                                    </motion.div>
                                )}
                            </motion.div>
                        ) : (
                            <motion.div
                                key="cut-cake"
                                className="relative w-full h-full"
                            >
                                {/* Left Half Tower */}
                                <motion.div
                                    initial={{ x: 0, rotate: 0 }}
                                    animate={{ x: -30, rotate: -5 }}
                                    transition={{ type: "spring", stiffness: 100 }}
                                    className="absolute left-0 top-0 w-[49%] h-full overflow-hidden rounded-l-xl shadow-xl"
                                >
                                    <img
                                        src={cakeImg}
                                        alt="Left Cake Half"
                                        className="w-[200%] h-full object-cover max-w-none ml-0"
                                    />
                                </motion.div>

                                {/* Right Half Tower */}
                                <motion.div
                                    initial={{ x: 0, rotate: 0 }}
                                    animate={{ x: 30, rotate: 5 }}
                                    transition={{ type: "spring", stiffness: 100 }}
                                    className="absolute right-0 top-0 w-[49%] h-full overflow-hidden rounded-r-xl shadow-xl"
                                >
                                    <img
                                        src={cakeImg}
                                        alt="Right Cake Half"
                                        className="w-[200%] h-full object-cover max-w-none -ml-[100%]"
                                    />
                                </motion.div>

                                {/* Message appearing from behind */}
                                <motion.div
                                    initial={{ scale: 0.5, opacity: 0, y: 20 }}
                                    animate={{ scale: 1, opacity: 1, y: 0 }}
                                    transition={{ delay: 0.3, type: "spring" }}
                                    className="absolute inset-0 flex items-center justify-center z-20 pointer-events-none"
                                >
                                    <div className="bg-white/90 backdrop-blur-md p-4 rounded-xl text-center shadow-xl transform rotate-[-5deg]">
                                        <p className="text-xl md:text-2xl font-bold text-primary">
                                            Happy Birthday! 🥳
                                        </p>
                                    </div>
                                </motion.div>
                            </motion.div>
                        )}
                    </AnimatePresence>
                </div>

                <motion.p
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    key={`hint-${stage}`}
                    className="text-white/80 text-sm mt-8 animate-pulse font-medium bg-black/20 px-6 py-2 rounded-full backdrop-blur-sm"
                >
                    {stage === 'hidden' ? "Tap to open!" : stage === 'lit' ? "Tap to blow candles 💨" : stage === 'blown' ? "Tap to cut the cake 🔪" : "Make a wish! ✨"}
                </motion.p>
            </div>
        </section>
    );
}
