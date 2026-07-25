
import React from 'react';

/**
 * Note: Modal component is currently deprecated as KnowledgeHub was moved to an inline display.
 * Keeping a shell if needed for future features.
 */
const Modal: React.FC<{ isOpen: boolean; onClose: () => void; children: React.ReactNode; title?: string; footer?: React.ReactNode }> = ({ isOpen, onClose, children, title, footer }) => {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-[100] flex items-center justify-center p-4 bg-black/90 backdrop-blur-md animate-fade-in" onClick={onClose}>
      <div className="bg-gray-900 w-full max-w-2xl rounded-[2rem] border border-white/10 shadow-2xl flex flex-col max-h-[90vh] overflow-hidden" onClick={e => e.stopPropagation()}>
        <header className="p-6 border-b border-white/5 flex items-center justify-between">
          <h2 className="text-2xl font-black text-white">{title}</h2>
          <button onClick={onClose} className="text-gray-400 hover:text-white transition-colors">
            <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M6 18L18 6M6 6l12 12"/></svg>
          </button>
        </header>
        <main className="p-8 overflow-y-auto custom-scrollbar">
          {children}
        </main>
        {footer && <footer className="p-6 bg-gray-950 border-t border-white/5">{footer}</footer>}
      </div>
    </div>
  );
};

export default Modal;
