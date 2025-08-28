import React, { useEffect, useState } from "react";
// @ts-ignore
import {
  ResponsiveContainer,
  LineChart,
  Line,
  CartesianGrid,
  XAxis,
  YAxis,
  Tooltip,
  Legend,
  BarChart,
  Bar,
} from "recharts";

import toast, { Toaster } from "react-hot-toast";

type MetricPoint = {
  date: string; // ISO or short
  completionRate: number; // 0-100
  tasksCompleted: number;
};

const MOCK_DATA: MetricPoint[] = [
  { date: "2025-08-01", completionRate: 72, tasksCompleted: 43 },
  { date: "2025-08-04", completionRate: 80, tasksCompleted: 51 },
  { date: "2025-08-07", completionRate: 76, tasksCompleted: 47 },
  { date: "2025-08-10", completionRate: 88, tasksCompleted: 60 },
  { date: "2025-08-13", completionRate: 91, tasksCompleted: 64 },
  { date: "2025-08-16", completionRate: 85, tasksCompleted: 59 },
  { date: "2025-08-19", completionRate: 93, tasksCompleted: 70 },
  { date: "2025-08-22", completionRate: 89, tasksCompleted: 66 },
  { date: "2025-08-25", completionRate: 95, tasksCompleted: 75 },
];

export default function MetricsDashboard() {
  const [data, setData] = useState<MetricPoint[]>([]);
  const [, setLoading] = useState(false);
  const [chartType, setChartType] = useState<"line" | "bar">("line");

  useEffect(() => {
    // simulate fetch
    setLoading(true);
    const t = setTimeout(() => {
      setData(MOCK_DATA);
      setLoading(false);
      toast.success("Metrics loaded");
    }, 700);
    return () => clearTimeout(t);
  }, []);

  const handleRefresh = () => {
    toast.promise(
      new Promise<void>((res) => setTimeout(res, 700)),
      {
        loading: "Refreshing metrics...",
        success: "Metrics refreshed",
        error: "Could not refresh",
      }
    );
    // in real app you'd re-fetch and setData
  };

  return (
    <div className="p-6 max-w-5xl mx-auto">
      <Toaster />
      <div className="flex items-center justify-between mb-6">
        <h2 className="text-2xl font-semibold">Your Productivity metrics</h2>
        <div className="flex gap-3">
          <button
            onClick={() => setChartType((c) => (c === "line" ? "bar" : "line"))}
            className="px-3 py-1 rounded-lg border hover:shadow-sm"
          >
            Toggle to {chartType === "line" ? "Bar" : "Line"}
          </button>
          <button
            onClick={handleRefresh}
            className="px-3 py-1 rounded-lg bg-black text-white hover:opacity-90"
          >
            Refresh
          </button>
          <button 
            onClick={() => window.history.back()}
          className="px-3 py-1 rounded-lg border hover:shadow-sm">
            Back
            
            </button>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div className="bg-white/80 dark:bg-gray-800 p-4 rounded-2xl shadow">
          <h3 className="text-lg font-medium mb-2">Completion rate (last month)</h3>
          <div style={{ width: "100%", height: 260 }}>
            <ResponsiveContainer>
              {chartType === "line" ? (
                <LineChart data={data} margin={{ top: 10, right: 20, left: 0, bottom: 0 }}>
                  <CartesianGrid strokeDasharray="3 3" />
                  <XAxis dataKey="date" />
                  <YAxis domain={[0, 100]} />
                  <Tooltip />
                  <Legend />
                  <Line type="monotone" dataKey="completionRate" stroke="#8884d8" strokeWidth={3} />
                </LineChart>
              ) : (
                <BarChart data={data} margin={{ top: 10, right: 20, left: 0, bottom: 0 }}>
                  <CartesianGrid strokeDasharray="3 3" />
                  <XAxis dataKey="date" />
                  <YAxis domain={[0, 100]} />
                  <Tooltip />
                  <Legend />
                  <Bar dataKey="completionRate" barSize={20} />
                </BarChart>
              )}
            </ResponsiveContainer>
          </div>
        </div>

        <div className="bg-white/80 dark:bg-gray-800 p-4 rounded-2xl shadow">
          <h3 className="text-lg font-medium mb-2">Tasks completed (trend)</h3>
          <div style={{ width: "100%", height: 260 }}>
            <ResponsiveContainer>
              <LineChart data={data} margin={{ top: 10, right: 20, left: 0, bottom: 0 }}>
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis dataKey="date" />
                <YAxis />
                <Tooltip />
                <Legend />
                <Line type="monotone" dataKey="tasksCompleted" stroke="#82ca9d" strokeWidth={3} />
              </LineChart>
            </ResponsiveContainer>
          </div>

          <div className="mt-4 flex items-center justify-between text-sm text-gray-600">
            <span>Average completion: {Math.round((data.reduce((s, d) => s + d.completionRate, 0) / (data.length || 1)))}%</span>
            <span>Total tasks: {data.reduce((s, d) => s + d.tasksCompleted, 0)}</span>
          </div>
        </div>
      </div>

      <div className="mt-6 text-sm text-gray-500">
        Tip: connect this component to your real metrics API. Replace the mock data with an axios/fetch call inside the useEffect and handle errors with toast.error.
      </div>
    </div>
  );
}
