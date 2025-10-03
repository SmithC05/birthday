import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Trophy, Star, ChevronDown } from "lucide-react";

interface Question {
  question: string;
  options: string[];
  correct: number;
  explanation: string;
}

export default function BirthdayQuizSection() {
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [selectedAnswer, setSelectedAnswer] = useState<number | null>(null);
  const [score, setScore] = useState(0);
  const [showResult, setShowResult] = useState(false);
  const [quizCompleted, setQuizCompleted] = useState(false);

  const questions: Question[] = [
    {
      question: "Where did Keerthana study from Pre-KG to 5th standard?",
      options: ["TNPM School", "PTK School", "Alagappa School", "Government School"],
      correct: 1,
      explanation: "PTK School is where Keerthana and her friend studied together from Pre-KG to 5th!"
    },
    {
      question: "What is Keerthana known for in school?",
      options: ["Only Dancing", "Only Singing", "Dancing, Singing & Being a Topper", "Only Studies"],
      correct: 2,
      explanation: "Keerthana is a multi-talented star - an amazing dancer, talented singer, AND academic topper!"
    },
    {
      question: "Where is Keerthana currently studying?",
      options: ["TNPM School", "PTK School", "Alagappa Chettiyar College, Karaikudi", "Chennai College"],
      correct: 2,
      explanation: "She's currently in her 2nd year at Alagappa Chettiyar College in Karaikudi!"
    },
    {
      question: "What makes Keerthana special?",
      options: ["Just her talents", "Just her academics", "Her beautiful soul, talents & friendship", "Just her dancing"],
      correct: 2,
      explanation: "Keerthana is special because of her beautiful soul, amazing talents, and wonderful friendship!"
    }
  ];

  const handleAnswerSelect = (answerIndex: number) => {
    setSelectedAnswer(answerIndex);
    setShowResult(true);
    
    if (answerIndex === questions[currentQuestion].correct) {
      setScore(prev => prev + 1);
    }

    setTimeout(() => {
      if (currentQuestion < questions.length - 1) {
        setCurrentQuestion(prev => prev + 1);
        setSelectedAnswer(null);
        setShowResult(false);
      } else {
        setQuizCompleted(true);
      }
    }, 3000);
  };

  const resetQuiz = () => {
    setCurrentQuestion(0);
    setSelectedAnswer(null);
    setScore(0);
    setShowResult(false);
    setQuizCompleted(false);
  };

  const scrollToNext = () => {
    const cardSection = document.querySelector('[data-testid="section-card"]');
    if (cardSection) {
      cardSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const getScoreMessage = () => {
    const percentage = (score / questions.length) * 100;
    if (percentage === 100) return "🏆 Perfect! You know Keerthana so well!";
    if (percentage >= 75) return "⭐ Great job! You're a wonderful friend!";
    if (percentage >= 50) return "👍 Good effort! You know her pretty well!";
    return "💖 That's okay! Friendship is about making new memories!";
  };

  return (
    <section className="min-h-screen flex flex-col items-center justify-center py-16 px-4 relative" data-testid="section-quiz">
      <div className="max-w-4xl w-full flex-1 flex flex-col justify-center">
        <h2 className="text-4xl md:text-6xl font-bold text-white text-center mb-12 animate-glow">
          🧩 Keerthana Birthday Quiz 🧩
        </h2>

        {!quizCompleted ? (
          <Card className="bg-white/10 backdrop-blur-md border-2 border-birthday-pink/50 p-8">
            <div className="mb-6">
              <div className="flex justify-between items-center mb-4">
                <span className="text-birthday-pink font-semibold">
                  Question {currentQuestion + 1} of {questions.length}
                </span>
                <span className="text-white/70">Score: {score}</span>
              </div>
              <div className="w-full bg-white/20 rounded-full h-2 mb-6">
                <div 
                  className="bg-birthday-pink h-2 rounded-full transition-all duration-300"
                  style={{ width: `${((currentQuestion + 1) / questions.length) * 100}%` }}
                ></div>
              </div>
            </div>

            <h3 className="text-2xl font-bold text-white mb-6" style={{ fontFamily: 'Pacifico, cursive' }}>
              {questions[currentQuestion].question}
            </h3>

            <div className="space-y-3 mb-6">
              {questions[currentQuestion].options.map((option, index) => (
                <Button
                  key={index}
                  onClick={() => handleAnswerSelect(index)}
                  disabled={showResult}
                  className={`w-full text-left justify-start p-4 h-auto ${
                    showResult
                      ? index === questions[currentQuestion].correct
                        ? "bg-green-500 hover:bg-green-500"
                        : index === selectedAnswer
                        ? "bg-red-500 hover:bg-red-500"
                        : "bg-white/10 hover:bg-white/10"
                      : "bg-white/10 hover:bg-white/20"
                  }`}
                >
                  {option}
                </Button>
              ))}
            </div>

            {showResult && (
              <div className="animate-fade-in">
                <p className="text-white/80 text-center">
                  {questions[currentQuestion].explanation}
                </p>
              </div>
            )}
          </Card>
        ) : (
          <Card className="bg-white/10 backdrop-blur-md border-2 border-birthday-pink/50 p-8 text-center">
            <Trophy className="w-16 h-16 text-joy-yellow mx-auto mb-6" />
            <h3 className="text-3xl font-bold text-white mb-4" style={{ fontFamily: 'Pacifico, cursive' }}>
              Quiz Complete! 🎉
            </h3>
            <p className="text-2xl text-birthday-pink font-semibold mb-4">
              {getScoreMessage()}
            </p>
            <p className="text-xl text-white mb-6">
              Final Score: {score} out of {questions.length}
            </p>
            <Button
              onClick={resetQuiz}
              className="bg-birthday-pink hover:bg-birthday-pink/80 text-white"
            >
              <Star className="mr-2 h-4 w-4" />
              Take Quiz Again
            </Button>
          </Card>
        )}
      </div>

      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2">
        <button
          onClick={scrollToNext}
          className="flex flex-col items-center text-white/70 hover:text-white transition-colors duration-300 animate-bounce"
        >
          <span className="text-sm mb-2">Create a birthday card</span>
          <ChevronDown className="w-6 h-6" />
        </button>
      </div>
    </section>
  );
}