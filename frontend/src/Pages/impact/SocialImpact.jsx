import React from 'react';
import SectionHeader from '../../components/common/SectionHeader';

export default function SocialImpact() {
  return (
    <div className="px-4 md:px-6 py-10">
      <SectionHeader eyebrow="Impact" title="Social Impact" subtitle="Livelihoods, inclusion, and rural upliftment through sustainable livestock." />
      <div className="rounded-2xl border border-gray-100 dark:border-white/10 bg-white/70 dark:bg-white/5 p-6">
        <p className="text-gray-700 dark:text-gray-200">Our programs create jobs, support women-owned enterprises, and strengthen rural economies.</p>
      </div>
    </div>
  );
}
