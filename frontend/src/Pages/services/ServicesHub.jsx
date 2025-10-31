import React, { useState } from 'react';
import SectionHeader from '../../components/common/SectionHeader';
import FeatureCard from '../../components/common/FeatureCard';
import StatStrip from '../../components/common/StatStrip';
import Modal from '../../components/common/Modal';
import FeedbackForm from '../../components/common/FeedbackForm';
import { Link } from 'react-router-dom';
import { PiggyBank, GraduationCap, Leaf, Factory, Shield } from 'lucide-react';

export default function ServicesHub() {
  const [openQuote, setOpenQuote] = useState(false);
  const [openFeedback, setOpenFeedback] = useState(false);
  return (
    <div className="px-4 md:px-6 py-10">
      <SectionHeader
        eyebrow="Our Services"
        title="Comprehensive Solutions for Sustainable Growth"
        subtitle="Explore our end-to-end services spanning pig farming operations, breeding excellence, world-class training, and sustainable impact products."
        align="center"
      />

      <div className="grid md:grid-cols-3 gap-4 md:gap-6">
        <FeatureCard icon={PiggyBank} title="Pig Farming" description="High-yield, biosecure production systems optimized for scale and sustainability." ctaText="Learn more" onCta={() => {}} />
        <FeatureCard icon={Shield} title="Breeding Program" description="Genetics, AI, and performance tracking to build resilient herds." ctaText="Discover" onCta={() => {}} />
        <FeatureCard icon={GraduationCap} title="Training Services" description="Hands-on workshops and e-learning programs designed for real farm results." ctaText="View programs" onCta={() => {}} />
        <FeatureCard icon={Leaf} title="Advisory" description="Expert advisory from farm setup to operational excellence and finance." ctaText="Talk to an advisor" onCta={() => setOpenQuote(true)} />
        <FeatureCard icon={Factory} title="Products" description="Quality pork, organic fertilizers, and value-added feed for the region." ctaText="Browse products" onCta={() => {}} />
        <FeatureCard icon={Leaf} title="Sustainability" description="Waste-to-value, carbon reduction, and green inputs for the future." ctaText="Our impact" onCta={() => {}} />
      </div>

      <div className="mt-10">
        <StatStrip stats={[
          { value: '50K+', label: 'Animals cared' },
          { value: '10+', label: 'Regional partners' },
          { value: '95%', label: 'Client satisfaction' },
          { value: '6', label: 'Countries served' },
        ]} />
      </div>

      <div className="mt-12 flex flex-col md:flex-row items-center justify-between gap-4 rounded-2xl border border-gray-100 dark:border-white/10 bg-white/70 dark:bg-white/5 p-6">
        <div>
          <h3 className="text-2xl font-bold">Have a project in mind?</h3>
          <p className="text-gray-600 dark:text-gray-300">Speak with our advisors to design a plan for your farm or enterprise.</p>
        </div>
        <div className="flex gap-3">
          <button onClick={() => setOpenQuote(true)} className="px-5 py-2 rounded-lg bg-green-600 text-white hover:bg-green-700">Get a quote</button>
          <button onClick={() => setOpenFeedback(true)} className="px-5 py-2 rounded-lg border border-gray-300 dark:border-white/20">Give feedback</button>
        </div>
      </div>

      <Modal open={openQuote} onClose={() => setOpenQuote(false)} title="Request a quote">
        <p className="mb-3 text-gray-600 dark:text-gray-300">Tell us briefly about your needs. Our team will contact you shortly.</p>
        <FeedbackForm onSubmitted={() => setOpenQuote(false)} />
      </Modal>

      <Modal open={openFeedback} onClose={() => setOpenFeedback(false)} title="Share your feedback">
        <FeedbackForm onSubmitted={() => setOpenFeedback(false)} />
      </Modal>
    </div>
  );
}
