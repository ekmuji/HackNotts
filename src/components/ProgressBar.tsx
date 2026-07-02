"use client";

interface ProgressBarProps {
  progress: number;
}

const bands = [
  { label: "Poor",      min: 300, max: 579, color: "#ef4444", glow: "rgba(239,68,68,0.4)" },
  { label: "Fair",      min: 580, max: 669, color: "#f97316", glow: "rgba(249,115,22,0.4)" },
  { label: "Good",      min: 670, max: 739, color: "#eab308", glow: "rgba(234,179,8,0.4)"  },
  { label: "Very Good", min: 740, max: 799, color: "#10b981", glow: "rgba(16,185,129,0.4)" },
  { label: "Excellent", min: 800, max: 850, color: "#8b5cf6", glow: "rgba(139,92,246,0.5)" },
];

export default function ProgressBar({ progress }: ProgressBarProps) {
  const clamped = Math.min(850, Math.max(300, progress));
  const pct = ((clamped - 300) / 550) * 100;
  const band = bands.find(b => clamped >= b.min && clamped <= b.max) ?? bands[0];

  return (
    <div className="w-full">
      <div className="flex justify-between items-baseline mb-3">
        <div>
          <span className="block text-xs font-bold tracking-widest uppercase text-brand-300 mb-1">Credit Score</span>
          <div className="font-display text-5xl font-black transition-colors duration-300" style={{ color: band.color, textShadow: `0 0 24px ${band.glow}` }}>
            {clamped}
          </div>
        </div>
        <div className="text-xs font-bold px-3 py-1 rounded-full border transition-colors duration-300" style={{ color: band.color, background: band.color + "18", borderColor: band.color + "35" }}>
          {band.label}
        </div>
      </div>

      <div className="w-full h-3 bg-brand-900 rounded-full overflow-hidden mb-3 border border-white/5 relative shadow-inner">
        <div 
          className="h-full rounded-full transition-all duration-500 ease-out" 
          style={{ width: `${pct}%`, background: band.color, boxShadow: `0 0 16px ${band.glow}` }} 
        />
      </div>

      <div className="flex justify-between text-[0.7rem] font-medium text-gray-500">
        {bands.map(b => (
          <span key={b.label} className="transition-colors duration-300" style={{ color: clamped >= b.min && clamped <= b.max ? b.color : undefined }}>
            {b.label}
          </span>
        ))}
      </div>
    </div>
  );
}