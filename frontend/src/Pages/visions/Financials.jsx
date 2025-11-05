import React from 'react';
import SectionHeader from '../../components/common/SectionHeader';

export default function Financials() {
  return (
    <div className="px-4 md:px-6 py-10">
      <SectionHeader eyebrow="Visions" title="Financials" subtitle="High-level projections and unit economics overview for strategic decision-making." />
      <div className="rounded-2xl border border-gray-100 dark:border-white/10 bg-white/70 dark:bg-white/5 p-6">
        <div className="grid md:grid-cols-2 gap-6">
          <div>
            <h3 className="font-semibold text-lg">Projections</h3>
            <p className="text-gray-600 dark:text-gray-300">Revenue growth, margin expansion, and capex plans across three-year horizon.</p>
          </div>
          <div>
            <h3 className="font-semibold text-lg">Unit Economics</h3>
            <p className="text-gray-600 dark:text-gray-300">Cost per kg, feed conversion, and herd-level productivity benchmarks.</p>
          </div>
        </div>
      </div>
    </div>
  );
}
