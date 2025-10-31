import React from 'react';
import SectionHeader from '../../components/common/SectionHeader';

export default function EnvironmentalImpact() {
  return (
    <div className="px-4 md:px-6 py-10">
      <SectionHeader eyebrow="Impact" title="Environmental Impact" subtitle="Waste-to-value and carbon reduction embedded in our operations." />
      <div className="rounded-2xl border border-gray-100 dark:border-white/10 bg-white/70 dark:bg-white/5 p-6">
        <ul className="list-disc pl-6 text-gray-700 dark:text-gray-200 space-y-2">
          <li>Biogas and organic fertilizers</li>
          <li>Efficient water use</li>
          <li>Reduced emissions targets</li>
        </ul>
      </div>
    </div>
  );
}
