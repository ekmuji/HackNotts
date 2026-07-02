"use client";

import { useState, useCallback } from "react";
import ChoiceButton from "@/components/ChoiceButton";
import ProgressBar from "@/components/ProgressBar";

const ACTIONS = [
  { label: "Payment History",        icon: "📅", description: "On-time vs missed payments" },
  { label: "Paid for Credit Cards",  icon: "💳", description: "Cards cleared this month" },
  { label: "Applied for Loan",       icon: "🏦", description: "Hard inquiry on your report" },
  { label: "Opened New Credit",      icon: "✨", description: "Lowers avg account age" },
  { label: "Credit Utilization",     icon: "📊", description: "Balance vs credit limit" },
  { label: "Length of Credit History",icon: "⏳", description: "Age of your oldest account" },
];

export default function Simulator() {
  const [progress, setProgress] = useState(650);
  const [explanation, setExplanation] = useState("");
  const [coach, setCoach] = useState({ text: "", loading: false });
  const [saving, setSaving] = useState(false);

  // Simulated Client-Side Action Logic
  const applyAction = useCallback((label: string, delta: number, msg: string) => {
    setSaving(true);
    const next = Math.min(850, Math.max(300, progress + delta));
    setProgress(next);
    setExplanation(msg);
    
    // Trigger Coach
    setCoach({ text: "", loading: true });
    setTimeout(() => {
      setCoach({ text: `Because you adjusted your ${label.toLowerCase()}, your score shifted. This highlights how lenders assess risk in real time.`, loading: false });
      setSaving(false);
    }, 1500);
  }, [progress]);

  return (
    <div className="max-w-2xl mx-auto">
      <div className="mb-8 relative">
        <span className="text-xs font-bold tracking-widest text-brand-400 uppercase mb-2 block">CreditIQ</span>
        <h1 className="font-display text-4xl font-black text-white mb-2">Credit Simulator</h1>
        <p className="text-gray-400 text-sm">Make financial decisions and watch your score respond in real time.</p>
        
        {saving && (
          <span className="absolute top-2 right-0 text-xs font-semibold text-brand-300 flex items-center gap-2 animate-pulse">
            <span className="w-1.5 h-1.5 bg-brand-400 rounded-full"></span> Saving
          </span>
        )}
      </div>

      <div className="bg-gradient-to-br from-brand-600/10 to-cyan-500/5 border border-brand-400/20 backdrop-blur-xl rounded-3xl p-8 mb-8 relative overflow-hidden shadow-card">
        <div className="absolute -top-10 -right-10 w-40 h-40 bg-brand-400/15 rounded-full blur-3xl pointer-events-none" />
        <ProgressBar progress={progress} />
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-3 mb-6">
        {ACTIONS.map((action, i) => (
          <ChoiceButton 
            key={action.label} 
            label={action.label} 
            icon={action.icon} 
            description={action.description}
            onClick={() => applyAction(action.label, (i % 2 === 0 ? 25 : -15), `${action.label} updated!`)} 
          />
        ))}
      </div>

      {explanation && (
        <div className="flex items-center gap-3 p-4 bg-amber-500/10 border border-amber-500/20 rounded-xl text-amber-400 text-sm mb-4 animate-in fade-in slide-in-from-bottom-2">
          <span className="text-lg">📈</span>
          <span>{explanation}</span>
        </div>
      )}

      {(coach.loading || coach.text) && (
        <div className="relative overflow-hidden bg-gradient-to-br from-brand-600/10 to-cyan-500/5 border border-brand-400/20 rounded-xl p-5 backdrop-blur-md animate-in fade-in slide-in-from-bottom-4">
          <div className="flex items-center gap-3 mb-3">
            <div className="w-8 h-8 rounded-full bg-gradient-to-br from-brand-500 to-cyan-500 flex items-center justify-center text-sm shadow-glow">🤖</div>
            <span className="text-xs font-bold uppercase tracking-widest text-brand-300">AI Coach</span>
          </div>
          {coach.loading ? (
            <div className="flex gap-1.5 items-center h-6">
              <span className="w-2 h-2 rounded-full bg-brand-400 animate-bounce"></span>
              <span className="w-2 h-2 rounded-full bg-brand-400 animate-bounce delay-100"></span>
              <span className="w-2 h-2 rounded-full bg-brand-400 animate-bounce delay-200"></span>
            </div>
          ) : (
            <p className="text-sm text-gray-300 leading-relaxed">{coach.text}</p>
          )}
        </div>
      )}
    </div>
  );
}