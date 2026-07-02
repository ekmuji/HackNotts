"use client";

import Link from "next/link";
import { usePathname, useRouter } from "next/navigation";

export default function Navbar() {
  const pathname = usePathname();
  const router = useRouter();
  const isActive = (path: string) => pathname === path;

  const handleLogout = () => {
    localStorage.removeItem("token");
    router.push("/login");
  };

  return (
    <nav className="fixed top-0 left-0 right-0 h-16 bg-brand-950/60 backdrop-blur-xl border-b border-glass-border z-50 flex items-center justify-between px-6">
      <Link href="/home" className="flex items-center gap-2 text-white">
        <div className="text-brand-400">
          <svg width="20" height="20" viewBox="0 0 24 24" fill="none">
            <path d="M3 10C3 6.686 5.686 4 9 4h6c3.314 0 6 2.686 6 6v4c0 3.314-2.686 6-6 6H9c-3.314 0-6-2.686-6-6v-4z" stroke="currentColor" strokeWidth="1.5"/>
            <path d="M3 10h18M7 15h2m4 0h4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/>
          </svg>
        </div>
        <span className="font-display font-bold tracking-tight">CreditIQ</span>
      </Link>

      <div className="hidden md:flex gap-2">
        {["/home", "/teach", "/quiz", "/leaderboard"].map((path) => (
          <Link key={path} href={path} className={`px-4 py-1.5 rounded-lg text-sm font-medium transition-all ${isActive(path) ? "bg-brand-500/20 text-brand-300" : "text-gray-400 hover:text-white hover:bg-glass-hover"}`}>
            {path.replace('/', '').charAt(0).toUpperCase() + path.slice(2)}
          </Link>
        ))}
      </div>

      <button onClick={handleLogout} className="flex items-center gap-2 text-sm font-medium text-gray-400 hover:text-white transition-colors">
        <svg width="16" height="16" viewBox="0 0 24 24" fill="none">
          <path d="M9 21H5a2 2 0 01-2-2V5a2 2 0 012-2h4M16 17l5-5-5-5M21 12H9" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
        </svg>
        <span className="hidden sm:inline">Log out</span>
      </button>
    </nav>
  );
}