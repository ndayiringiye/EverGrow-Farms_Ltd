import React from 'react';

export default function SectionHeader({ eyebrow, title, subtitle, align = 'left' }) {
  return (
    <div className={`mb-8 ${align === 'center' ? 'text-center' : ''}`}>
      {eyebrow && <div className="text-sm font-semibold text-green-600 dark:text-green-400 tracking-wider uppercase">{eyebrow}</div>}
      {title && <h2 className="mt-2 text-3xl md:text-4xl font-extrabold text-gray-900 dark:text-white">{title}</h2>}
      {subtitle && <p className="mt-3 text-gray-600 dark:text-gray-300 max-w-3xl ${align==='center'?'mx-auto':''}">{subtitle}</p>}
    </div>
  );
}
