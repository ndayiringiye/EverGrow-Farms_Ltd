import React from 'react';

export default function StatStrip({ stats = [] }) {
  return (
    <div className="grid grid-cols-2 md:grid-cols-4 gap-4 rounded-xl bg-white/70 dark:bg-white/5 backdrop-blur p-4 border border-gray-100 dark:border-white/10">
      {stats.map((s, i) => (
        <div key={i} className="text-center">
          <div className="text-2xl md:text-3xl font-extrabold text-gray-900 dark:text-white">{s.value}</div>
          <div className="text-sm text-gray-600 dark:text-gray-300">{s.label}</div>
        </div>
      ))}
    </div>
  );
}
