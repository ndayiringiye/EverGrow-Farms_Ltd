import React from 'react';
import SectionHeader from '../../components/common/SectionHeader';
import FeatureCard from '../../components/common/FeatureCard';

export default function PigFarming() {
  return (
    <div className="px-4 md:px-6 py-10">
      <SectionHeader eyebrow="Investment" title="Pig Farming" subtitle="Production models engineered for performance and animal welfare." />
      <div className="grid md:grid-cols-3 gap-4 md:gap-6">
        <FeatureCard title="Production Model" description="Batch farrowing, all-in all-out systems for biosecurity and throughput." />
        <FeatureCard title="Biosecurity" description="Controlled access, sanitation, and health monitoring protocols." />
        <FeatureCard title="Feed & Nutrition" description="Optimized rations for each life stage to maximize growth and health." />
      </div>
    </div>
  );
}
