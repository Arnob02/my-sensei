"use client";

import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
} from "recharts";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { useEffect, useState } from "react";
import { format } from "date-fns";

export default function PerformanceChart({ assessments }) {
  const [chartData, setChartData] = useState([]);

  useEffect(() => {
    if (assessments) {
      console.log("Assessments data:", assessments); // Log the raw data for debugging
      const formattedData = assessments.map((assessment) => ({
        date: format(new Date(assessment.createdAt), "MMM dd"),
        score: assessment.quizScore,
      }));
      console.log("Formatted Data:", formattedData); // Log the formatted data for debugging
      setChartData(formattedData);
    }
  }, [assessments]);

  if (!chartData.length) {
    return <div>No data available for performance trend.</div>;
  }

  return (
    <Card className="shadow-lg hover:shadow-2xl transition-shadow duration-300">
      <CardHeader className="pb-4">
        <CardTitle className="text-3xl md:text-4xl font-bold text-gray-100">
          Performance Trend
        </CardTitle>
        <CardDescription className="text-lg text-gray-400">
          Your quiz scores over time
        </CardDescription>
      </CardHeader>
      <CardContent>
        <div className="h-[400px]">
          {" "}
          {/* Increased height for visibility */}
          <ResponsiveContainer width="100%" height="100%">
            <LineChart data={chartData}>
              <CartesianGrid strokeDasharray="3 3" stroke="#444" />
              <XAxis
                dataKey="date"
                stroke="#888"
                tick={{ fontSize: 12, fill: "#bbb" }}
              />
              <YAxis
                domain={[0, 100]}
                stroke="#888"
                tick={{ fontSize: 12, fill: "#bbb" }}
              />
              <Tooltip
                content={({ active, payload }) => {
                  if (active && payload?.length) {
                    return (
                      <div className="bg-gray-800 text-white border rounded-lg p-3 shadow-md">
                        <p className="text-lg font-medium">
                          Score: {payload[0].value}%
                        </p>
                        <p className="text-sm text-gray-400">
                          {payload[0].payload.date}
                        </p>
                      </div>
                    );
                  }
                  return null;
                }}
              />
              <Line
                type="monotone"
                dataKey="score"
                stroke="#fff" // Ensure the line is white or another contrasting color
                strokeWidth={3}
                // dot={{ r: 4, fill: "#fff", strokeWidth: 2, stroke: "#ff6347" }}
                activeDot={{
                  r: 6,
                  fill: "#ff6347",
                  strokeWidth: 2,
                  stroke: "#fff",
                }}
              />
            </LineChart>
          </ResponsiveContainer>
        </div>
      </CardContent>
    </Card>
  );
}
