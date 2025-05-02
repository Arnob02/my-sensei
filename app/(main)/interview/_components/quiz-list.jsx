"use client";

import { useState } from "react";
import { format } from "date-fns";
import { useRouter } from "next/navigation";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import QuizResult from "./quiz-result";

export default function QuizList({ assessments }) {
  const router = useRouter();
  const [selectedQuiz, setSelectedQuiz] = useState(null);

  return (
    <>
      <Card className="shadow-lg hover:shadow-2xl transition-shadow duration-500 transform hover:scale-105">
        <CardHeader>
          <div className="flex items-center justify-between">
            <div>
              <CardTitle className="text-3xl md:text-4xl font-bold text-gray-100">
                Recent Quizzes
              </CardTitle>
              <CardDescription className="text-lg text-gray-400">
                Review your past quiz performance
              </CardDescription>
            </div>
            <Button
              onClick={() => router.push("/interview/mock")}
              className="bg-gradient-to-r from-blue-500 to-indigo-600 text-white hover:scale-105 transition-all duration-300 py-2 px-4 rounded-lg shadow-md hover:shadow-xl"
            >
              Start New Quiz
            </Button>
          </div>
        </CardHeader>
        <CardContent>
          <div className="space-y-4">
            {assessments?.map((assessment, i) => (
              <Card
                key={assessment.id}
                className="cursor-pointer hover:bg-muted/50 transition-colors duration-500 ease-in-out shadow-md hover:scale-105 hover:shadow-xl"
                onClick={() => setSelectedQuiz(assessment)}
              >
                <CardHeader>
                  <CardTitle className="text-2xl font-bold text-gray-300">
                    Quiz {i + 1}
                  </CardTitle>
                  <CardDescription className="flex justify-between w-full text-sm text-gray-500">
                    <div>Score: {assessment.quizScore.toFixed(1)}%</div>
                    <div>
                      {format(
                        new Date(assessment.createdAt),
                        "MMMM dd, yyyy HH:mm"
                      )}
                    </div>
                  </CardDescription>
                </CardHeader>
                {assessment.improvementTip && (
                  <CardContent>
                    <p className="text-sm text-muted-foreground">
                      {assessment.improvementTip}
                    </p>
                  </CardContent>
                )}
              </Card>
            ))}
          </div>
        </CardContent>
      </Card>

      <Dialog open={!!selectedQuiz} onOpenChange={() => setSelectedQuiz(null)}>
        <DialogContent className="max-w-3xl max-h-[90vh] overflow-y-auto transition-transform duration-300 transform">
          <DialogHeader>
            <DialogTitle className="text-3xl font-bold text-gray-300">
              Quiz Result
            </DialogTitle>
          </DialogHeader>
          <QuizResult
            result={selectedQuiz}
            hideStartNew
            onStartNew={() => router.push("/interview/mock")}
          />
        </DialogContent>
      </Dialog>
    </>
  );
}
