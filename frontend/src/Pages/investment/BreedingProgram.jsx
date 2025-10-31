import React from 'react';
import SectionHeader from '../../components/common/SectionHeader';

export default function BreedingProgram() {
  return (
    <div className="px-4 md:px-6 py-10">
      <SectionHeader eyebrow="Investment" title="Breeding Program" subtitle="Genetics and performance tracking to build resilient, productive herds." />
      <div className="rounded-2xl border border-gray-100 dark:border-white/10 bg-white/70 dark:bg-white/5 p-6">
        <ul className="list-disc pl-6 text-gray-700 dark:text-gray-200 space-y-2">
          <li>AI and genetics selection</li>
          <li>Performance recording</li>
          <li>Data-driven selection</li>
        </ul>
      </div>
    </div>
  );
}
