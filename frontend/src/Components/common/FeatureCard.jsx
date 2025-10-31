import React from 'react';

export default function FeatureCard({ icon: Icon, title, description, ctaText, onCta, className='' }) {
  return (
    <div className={`group rounded-2xl border border-gray-100 dark:border-white/10 bg-white/70 dark:bg-white/5 backdrop-blur p-6 hover:shadow-xl transition-all ${className}`}>
      {Icon && (
        <div className="w-12 h-12 rounded-xl bg-green-100 dark:bg-green-900/40 text-green-700 dark:text-green-300 flex items-center justify-center mb-4">
          <Icon size={24} />
        </div>
      )}
      <h3 className="text-xl font-semibold text-gray-900 dark:text-white">{title}</h3>
      <p className="mt-2 text-gray-600 dark:text-gray-300">{description}</p>
      {ctaText && (
        <button onClick={onCta} className="mt-4 inline-flex items-center text-green-700 dark:text-green-300 font-medium hover:underline">
          {ctaText}
        </button>
      )}
    </div>
  );
}
