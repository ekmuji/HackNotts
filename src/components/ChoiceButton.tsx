"use client";

interface ChoiceButtonsProps {
  label: string;
  icon?: string;
  description?: string;
  onClick?: () => void;
}

export default function ChoiceButton({ label, icon, description, onClick }: ChoiceButtonsProps) {
  return (
    <button 
      onClick={onClick}
      className="flex items-center gap-4 w-full p-4 bg-glass-bg border border-glass-border rounded-xl cursor-pointer text-left transition-all duration-200 group hover:border-brand-400 hover:bg-glass-hover hover:-translate-y-0.5 active:translate-y-0"
    >
      {icon && <div className="text-2xl min-w-[32px] text-center">{icon}</div>}
      <div className="flex-1 flex flex-col">
        <span className="text-sm font-semibold text-gray-100">{label}</span>
        {description && <span className="text-xs text-brand-300 mt-0.5">{description}</span>}
      </div>
      <svg className="text-brand-400 opacity-0 -translate-x-2 transition-all duration-200 group-hover:opacity-100 group-hover:translate-x-0" width="16" height="16" viewBox="0 0 24 24" fill="none">
        <path d="M5 12h14M13 6l6 6-6 6" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"/>
      </svg>
    </button>
  );
}