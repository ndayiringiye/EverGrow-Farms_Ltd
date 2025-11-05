import React from 'react';
import SectionHeader from '../../components/common/SectionHeader';

export default function TrainingServices() {
  return (
    <div className="px-4 md:px-6 py-10">
      <SectionHeader eyebrow="Investment" title="Training Services" subtitle="Hands-on training and e-learning designed for real-world farm outcomes." />
      <div className="rounded-2xl border border-gray-100 dark:border-white/10 bg-white/70 dark:bg-white/5 p-6">
        <p className="text-gray-700 dark:text-gray-200">Programs include biosecurity, animal handling, feed formulation, and farm business management.</p>
      </div>
    </div>
  );
}
