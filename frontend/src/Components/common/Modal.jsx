import React from 'react';

export default function Modal({ open, onClose, title, children, footer }) {
  if (!open) return null;
  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center">
      <div className="absolute inset-0 bg-black/50" onClick={onClose} />
      <div className="relative w-[95%] max-w-lg rounded-2xl bg-white dark:bg-[#0f224a] text-gray-900 dark:text-white shadow-2xl p-6">
        {title && <h3 className="text-xl font-bold mb-3">{title}</h3>}
        <div className="max-h-[70vh] overflow-y-auto pr-1">
          {children}
        </div>
        {footer && (
          <div className="mt-4 flex justify-end gap-2">
            {footer}
          </div>
        )}
      </div>
    </div>
  );
}
