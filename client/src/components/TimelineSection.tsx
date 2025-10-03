import { useState, useEffect } from "react";
import { Card } from "@/components/ui/card";
import { GraduationCap, Music, Trophy, Heart, Star, ChevronDown } from "lucide-react";

export default function TimelineSection() {
  const [visibleItems, setVisibleItems] = useState<number[]>([]);

  const timelineEvents = [
    {
      year: "Pre-KG to 5th Std",
      title: "PTK School Days",
      description: "Where our beautiful friendship began! From Pre-KG to 5th standard, we shared countless memories together.",
      icon: <GraduationCap className="w-6 h-6" />,
      color: "bg-birthday-pink",
      achievements: ["Childhood Friends", "School Memories", "Growing Together"]
    },
    {
      year: "6th to 12th Std",
      title: "TNPM School",
      description: "Continuing her academic journey with excellence and grace.",
      icon: <Trophy className="w-6 h-6" />,
      color: "bg-celebration-purple",
      achievements: ["Academic Excellence", "Leadership Skills", "Brilliant Student"]
    },
    {
      year: "Throughout School",
      title: "The Multi-Talented Star",
      description: "Shining bright as a dancer, singer, and topper in everything she touched!",
      icon: <Star className="w-6 h-6" />,
      color: "bg-joy-yellow",
      achievements: ["Amazing Dancer 💃", "Talented Singer 🎤", "Academic Topper 🏆"]
    },
    {
      year: "Present",
      title: "Alagappa Chettiyar College, Karaikudi",
      description: "Currently in 2nd year, continuing to excel and inspire everyone around her.",
      icon: <GraduationCap className="w-6 h-6" />,
      color: "bg-party-blue",
      achievements: ["College Student", "Bright Future", "Inspiring Others"]
    },
    {
      year: "Always",
      title: "Our Amazing Keerthana",
      description: "A wonderful friend, brilliant student, talented performer, and beautiful soul who lights up every room!",
      icon: <Heart className="w-6 h-6" />,
      color: "bg-birthday-pink",
      achievements: ["Beautiful Soul ✨", "Amazing Friend 💖", "Inspiring Person 🌟"]
    }
  ];

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const index = parseInt(entry.target.getAttribute('data-index') || '0');
            setVisibleItems(prev => [...new Set([...prev, index])]);
          }
        });
      },
      { threshold: 0.3 }
    );

    const timelineItems = document.querySelectorAll('.timeline-item');
    timelineItems.forEach(item => observer.observe(item));

    return () => observer.disconnect();
  }, []);

  const scrollToNext = () => {
    const nextSection = document.querySelector('[data-testid="section-gallery"]');
    if (nextSection) {
      nextSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section className="min-h-screen py-16 px-4 relative" data-testid="section-timeline">
      <div className="max-w-4xl mx-auto">
        <h2 className="text-4xl md:text-6xl font-bold text-white text-center mb-16 animate-glow">
          🌟 Keerthana's Journey 🌟
        </h2>

        <div className="relative">
          {/* Timeline Line */}
          <div className="absolute left-8 md:left-1/2 transform md:-translate-x-1/2 w-1 bg-gradient-to-b from-birthday-pink via-celebration-purple to-party-blue h-full"></div>

          {timelineEvents.map((event, index) => (
            <div
              key={index}
              data-index={index}
              className={`timeline-item mb-12 flex items-center ${
                index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'
              } ${
                visibleItems.includes(index) ? 'animate-fade-in' : 'opacity-0'
              }`}
            >
              {/* Timeline Dot */}
              <div className={`absolute left-6 md:left-1/2 transform md:-translate-x-1/2 w-6 h-6 ${event.color} rounded-full border-4 border-white shadow-lg flex items-center justify-center text-white z-10`}>
                {event.icon}
              </div>

              {/* Content Card */}
              <div className={`ml-16 md:ml-0 ${index % 2 === 0 ? 'md:mr-8 md:text-right' : 'md:ml-8'} md:w-1/2`}>
                <Card className="bg-white/10 backdrop-blur-md border-2 border-white/20 p-6 hover:bg-white/15 transition-all duration-300">
                  <div className="mb-4">
                    <span className="text-birthday-pink font-bold text-lg">{event.year}</span>
                    <h3 className="text-2xl font-bold text-white mb-2" style={{ fontFamily: 'Pacifico, cursive' }}>
                      {event.title}
                    </h3>
                    <p className="text-white/80 mb-4">{event.description}</p>
                  </div>

                  <div className="flex flex-wrap gap-2">
                    {event.achievements.map((achievement, achIndex) => (
                      <span
                        key={achIndex}
                        className="px-3 py-1 bg-birthday-pink/20 text-birthday-pink rounded-full text-sm border border-birthday-pink/30"
                      >
                        {achievement}
                      </span>
                    ))}
                  </div>
                </Card>
              </div>
            </div>
          ))}
        </div>

        {/* Fun Facts Section */}
        <div className="mt-16 text-center">
          <Card className="bg-white/5 backdrop-blur-sm border-2 border-birthday-pink/30 p-8">
            <h3 className="text-3xl font-bold text-birthday-pink mb-6" style={{ fontFamily: 'Pacifico, cursive' }}>
              What Makes Keerthana Special? ✨
            </h3>
            <div className="grid md:grid-cols-3 gap-6">
              <div className="text-center">
                <Music className="w-12 h-12 text-celebration-purple mx-auto mb-3" />
                <h4 className="text-xl font-bold text-white mb-2">Talented Performer</h4>
                <p className="text-white/70">Amazing dancer and singer who lights up every stage!</p>
              </div>
              <div className="text-center">
                <Trophy className="w-12 h-12 text-joy-yellow mx-auto mb-3" />
                <h4 className="text-xl font-bold text-white mb-2">Academic Excellence</h4>
                <p className="text-white/70">Always a topper, inspiring others with her dedication!</p>
              </div>
              <div className="text-center">
                <Heart className="w-12 h-12 text-birthday-pink mx-auto mb-3" />
                <h4 className="text-xl font-bold text-white mb-2">Beautiful Soul</h4>
                <p className="text-white/70">A wonderful friend with the kindest heart!</p>
              </div>
            </div>
          </Card>
        </div>
      </div>

      {/* Scroll Down Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2">
        <button
          onClick={scrollToNext}
          className="flex flex-col items-center text-white/70 hover:text-white transition-colors duration-300 animate-bounce"
        >
          <span className="text-sm mb-2">Continue exploring</span>
          <ChevronDown className="w-6 h-6" />
        </button>
      </div>
    </section>
  );
}