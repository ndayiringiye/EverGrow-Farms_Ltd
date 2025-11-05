import React from 'react';
import SectionHeader from '../../components/common/SectionHeader';
import FeatureCard from '../../components/common/FeatureCard';
import StatStrip from '../../components/common/StatStrip';

export default function WhyInvest() {
  return (
    <div className="px-4 md:px-6 py-10">
      <SectionHeader eyebrow="Visions" title="Why Invest in Evergrow Farms Ltd" subtitle="A resilient, scalable agribusiness transforming livestock value-chains across the region." />
      <div className="grid md:grid-cols-3 gap-4 md:gap-6">
        <FeatureCard title="Market Opportunity" description="Rapidly growing protein demand with supply deficits present a strong growth runway." />
        <FeatureCard title="Competitive Edge" description="Integrated operations, genetics, and training delivering consistent quality and margins." />
        <FeatureCard title="Governance & Team" description="Experienced leadership with transparent reporting and stakeholder alignment." />
      </div>
      <div className="mt-10">
        <StatStrip stats={[{value:'20%+', label:'Projected CAGR'}, {value:'350+', label:'Partner farms'}, {value:'8yrs', label:'Operational experience'}, {value:'A', label:'Risk rating'}]} />
      </div>
    </div>
  );
}
