
import React from "react";
import { IconType } from "react-icons";

interface StatCardProps {
  icon: IconType; // from react-icons
  label: string;
  value: number;
}

export default function StatCard({ icon: Icon, label, value }: StatCardProps) {
  const IconComponent = Icon as React.ComponentType<{ className?: string }>;

  return (
    <div className="bg-white p-4 rounded-lg shadow flex items-center space-x-4">
      <IconComponent className="text-2xl text-blue-500" />
      <div>
        <p className="text-sm text-gray-500">{label}</p>
        <p className="text-xl font-bold">{value}</p>
      </div>
    </div>
  );
}
