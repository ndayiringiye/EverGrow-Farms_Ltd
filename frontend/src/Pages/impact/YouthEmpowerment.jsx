import React from 'react';
import SectionHeader from '../../components/common/SectionHeader';

export default function YouthEmpowerment() {
  return (
    <div className="px-4 md:px-6 py-10">
      <SectionHeader eyebrow="Impact" title="Youth Empowerment" subtitle="Training and entrepreneurship programs for the next generation." />
      <div className="rounded-2xl border border-gray-100 dark:border-white/10 bg-white/70 dark:bg-white/5 p-6">
        <p className="text-gray-700 dark:text-gray-200">We provide training, incubation, and access-to-market for youth-led agro-enterprises.</p>
      </div>
    </div>
  );
}
