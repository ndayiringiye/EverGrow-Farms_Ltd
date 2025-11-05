import React, { useState } from 'react';

export default function FeedbackForm({ onSubmitted }) {
  const [form, setForm] = useState({ name: '', email: '', message: '', service: '' });
  const [loading, setLoading] = useState(false);

  const submit = async (e) => {
    e.preventDefault();
    setLoading(true);
    try {
      await new Promise(r => setTimeout(r, 800));
      onSubmitted?.(form);
      setForm({ name: '', email: '', message: '', service: '' });
    } finally {
      setLoading(false);
    }
  };

  return (
    <form onSubmit={submit} className="space-y-3">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
        <input value={form.name} onChange={e=>setForm({ ...form, name:e.target.value })} required placeholder="Your name" className="w-full px-4 py-2 rounded-lg bg-white dark:bg-white/10 border border-gray-200 dark:border-white/10 outline-none" />
        <input type="email" value={form.email} onChange={e=>setForm({ ...form, email:e.target.value })} required placeholder="Email" className="w-full px-4 py-2 rounded-lg bg-white dark:bg-white/10 border border-gray-200 dark:border_white/10 outline-none" />
      </div>
      <select value={form.service} onChange={e=>setForm({ ...form, service:e.target.value })} className="w-full px-4 py-2 rounded-lg bg-white dark:bg-white/10 border border-gray-200 dark:border-white/10 outline-none">
        <option value="">Select service (optional)</option>
        <option>Pig Farming</option>
        <option>Breeding Program</option>
        <option>Training Services</option>
        <option>Advisory</option>
        <option>Products</option>
      </select>
      <textarea value={form.message} onChange={e=>setForm({ ...form, message:e.target.value })} rows={4} required placeholder="Your feedback / request" className="w-full px-4 py-2 rounded-lg bg-white dark:bg-white/10 border border-gray-200 dark:border-white/10 outline-none" />
      <button disabled={loading} className="w-full py-2 rounded-lg bg-green-600 hover:bg-green-700 text-white font-semibold disabled:opacity-60">{loading? 'Sending...' : 'Send feedback'}</button>
    </form>
  );
}
