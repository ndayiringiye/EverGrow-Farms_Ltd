import React from 'react';
import SectionHeader from '../components/common/SectionHeader';

export default function DynamicPage({ eyebrow, title, subtitle, children }) {
  return (
    <div className="px-4 md:px-6 py-10">
      <SectionHeader eyebrow={eyebrow} title={title} subtitle={subtitle} />
      <div className="rounded-2xl border border-gray-100 dark:border-white/10 bg-white/70 dark:bg-white/5 p-6">
        {children || (
          <p className="text-gray-700 dark:text-gray-200">This is a placeholder for {title}. Replace with your content.</p>
        )}
      </div>
    </div>
  );
}
