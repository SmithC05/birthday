
import { motion } from "framer-motion";

const timelineEvents = [
    {
        year: "Childhood",
        title: "Where It All Began",
        description: "Back in 3rd to 5th Std at PTK Matric... Two little kids starting a friendship that would last a lifetime. 🏫✨",
        icon: "🌱"
    },
    {
        year: "Growing Up",
        title: "School Days",
        description: "From 6th to 12th at TNPMM Girls School... Even as we grew up, our bond only got stronger. Years of memories! 🎒💖",
        icon: "👯‍♀️"
    },
    {
        year: "Current",
        title: "Shining Bright",
        description: "Now rocking it in 2nd year at Alagappa Chettiar College! So proud of the amazing person you are becoming. 🎓🌟",
        icon: "👑"
    }
];

export default function TimelineSection() {
    return (
        <section
            className="min-h-screen py-20 px-4 relative overflow-hidden"
            data-testid="section-timeline"
        >
            <div className="max-w-4xl mx-auto">
                <motion.h2
                    initial={{ opacity: 0, y: -20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    className="text-4xl md:text-6xl font-bold text-center text-white mb-20 animate-glow"
                >
                    Your Journey ⏳
                </motion.h2>

                <div className="relative">
                    {/* Vertical Line */}
                    <div className="absolute left-1/2 transform -translate-x-1/2 w-1 h-full bg-gradient-to-b from-transparent via-white/50 to-transparent" />

                    <div className="space-y-12 md:space-y-24">
                        {timelineEvents.map((event, index) => (
                            <motion.div
                                key={index}
                                initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
                                whileInView={{ opacity: 1, x: 0 }}
                                transition={{ duration: 0.8, delay: index * 0.2 }}
                                viewport={{ once: true }}
                                className={`flex flex-col md:flex-row items-center gap-8 ${index % 2 === 0 ? "md:flex-row" : "md:flex-row-reverse"
                                    }`}
                            >
                                {/* Content Side */}
                                <div className="flex-1 text-center md:text-right">
                                    <div className={`p-6 bg-white/10 backdrop-blur-sm rounded-xl border border-white/20 hover:bg-white/20 transition-colors duration-300 ${index % 2 === 0 ? "md:text-right" : "md:text-left"
                                        }`}>
                                        <span className="inline-block px-3 py-1 bg-primary/80 rounded-full text-sm text-white mb-2 font-bold">
                                            {event.year}
                                        </span>
                                        <h3 className="text-2xl font-bold text-white mb-2">{event.title}</h3>
                                        <p className="text-white/80">{event.description}</p>
                                    </div>
                                </div>

                                {/* Center Icon */}
                                <div className="relative z-10 w-12 h-12 bg-white rounded-full flex items-center justify-center text-2xl shadow-lg border-4 border-primary/50">
                                    {event.icon}
                                </div>

                                {/* Empty Side for Balance */}
                                <div className="flex-1 hidden md:block" />
                            </motion.div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
}
