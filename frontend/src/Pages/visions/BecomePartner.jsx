import React, { useState } from 'react';
import SectionHeader from '../../components/common/SectionHeader';
import Modal from '../../components/common/Modal';
import FeedbackForm from '../../components/common/FeedbackForm';

export default function BecomePartner() {
  const [open, setOpen] = useState(false);
  return (
    <div className="px-4 md:px-6 py-10">
      <SectionHeader eyebrow="Visions" title="Become a Partner" subtitle="Join our network of farms, distributors, and community organizations." />
      <div className="rounded-2xl border border-gray-100 dark:border-white/10 bg-white/70 dark:bg_white/5 p-6">
        <p className="text-gray-600 dark:text-gray-300">We collaborate with strategic partners across the value-chain to scale sustainable livestock production and livelihoods.</p>
        <button onClick={()=>setOpen(true)} className="mt-4 px-5 py-2 rounded-lg bg-green-600 text-white hover:bg-green-700">Apply to partner</button>
      </div>
      <Modal open={open} onClose={()=>setOpen(false)} title="Partner with us">
        <FeedbackForm onSubmitted={()=>setOpen(false)} />
      </Modal>
    </div>
  );
}
