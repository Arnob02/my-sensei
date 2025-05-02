import { Brain, Target, Trophy } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

export default function StatsCards({ assessments }) {
  const getAverageScore = () => {
    if (!assessments?.length) return 0;
    const total = assessments.reduce(
      (sum, assessment) => sum + assessment.quizScore,
      0
    );
    return (total / assessments.length).toFixed(1);
  };

  const getLatestAssessment = () => {
    if (!assessments?.length) return null;
    return assessments[0];
  };

  const getTotalQuestions = () => {
    if (!assessments?.length) return 0;
    return assessments.reduce(
      (sum, assessment) => sum + assessment.questions.length,
      0
    );
  };

  return (
    <div className="grid gap-4 md:grid-cols-3">
      {/* Average Score Card */}
      <Card className="transition-transform duration-300 transform hover:scale-105 hover:shadow-2xl hover:bg-gradient-to-r hover:from-blue-500 hover:to-indigo-600 hover:text-white">
        <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
          <CardTitle className="text-sm font-medium text-gray-100">
            Average Score
          </CardTitle>
          <Trophy className="h-5 w-5 text-gray-100 transition-transform duration-200 hover:scale-110" />
        </CardHeader>
        <CardContent>
          <div className="text-4xl font-extrabold text-gray-100 drop-shadow-md">
            {getAverageScore()}%
          </div>
          <p className="text-xs text-gray-300">Across all assessments</p>
        </CardContent>
      </Card>

      {/* Questions Practiced Card */}
      <Card className="transition-transform duration-300 transform hover:scale-105 hover:shadow-2xl hover:bg-gradient-to-r hover:from-green-500 hover:to-teal-600 hover:text-white">
        <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
          <CardTitle className="text-sm font-medium text-gray-100">
            Questions Practiced
          </CardTitle>
          <Brain className="h-5 w-5 text-gray-100 transition-transform duration-200 hover:scale-110" />
        </CardHeader>
        <CardContent>
          <div className="text-4xl font-extrabold text-gray-100 drop-shadow-md">
            {getTotalQuestions()}
          </div>
          <p className="text-xs text-gray-300">Total questions</p>
        </CardContent>
      </Card>

      {/* Latest Score Card */}
      <Card className="transition-transform duration-300 transform hover:scale-105 hover:shadow-2xl hover:bg-gradient-to-r hover:from-purple-500 hover:to-pink-600 hover:text-white">
        <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
          <CardTitle className="text-sm font-medium text-gray-100">
            Latest Score
          </CardTitle>
          <Target className="h-5 w-5 text-gray-100 transition-transform duration-200 hover:scale-110" />
        </CardHeader>
        <CardContent>
          <div className="text-4xl font-extrabold text-gray-100 drop-shadow-md">
            {getLatestAssessment()?.quizScore.toFixed(1) || 0}%
          </div>
          <p className="text-xs text-gray-300">Most recent quiz</p>
        </CardContent>
      </Card>
    </div>
  );
}
