import React from 'react';
import SectionHeader from '../../components/common/SectionHeader';
import FeatureCard from '../../components/common/FeatureCard';

export default function FundingPlan() {
  return (
    <div className="px-4 md:px-6 py-10">
      <SectionHeader eyebrow="Visions" title="Funding Plan" subtitle="Transparent capital deployment toward capacity expansion, technology, and training." />
      <div className="grid md:grid-cols-3 gap-4 md:gap-6">
        <FeatureCard title="Use of Funds" description="Infrastructure, breeding stock, feed mill upgrades, and distribution." />
        <FeatureCard title="Rounds & Structure" description="Seed, Series A/B with milestone-based tranches and governance." />
        <FeatureCard title="Investor Relations" description="Quarterly reporting, ESG metrics, and direct partnership access." />
      </div>
    </div>
  );
}
