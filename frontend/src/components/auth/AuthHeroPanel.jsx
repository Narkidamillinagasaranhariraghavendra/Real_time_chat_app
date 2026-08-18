import { APP_NAME } from "../AppLogo";
import { AuthHeroPattern } from "./AuthHeroPattern";
import { ArrowLeft, Clock3, Play, Volume2 } from "lucide-react";

export function AuthHeroPanel() {
  return (
    <section className="relative flex min-h-[540px] flex-col overflow-hidden bg-[#f5f5f5] px-4 pb-4 pt-4 dark:bg-[#121316] lg:px-6 lg:pb-6">
      <AuthHeroPattern />

      <div className="relative z-10 flex h-full flex-col overflow-hidden rounded-[28px] border border-black/10 bg-[#0b0d0f] shadow-[0_28px_80px_rgba(0,0,0,0.14)] dark:border-white/10">
        <div className="flex items-center justify-between gap-3 border-b border-white/8 bg-[#111416] px-4 py-3">
          <div className="flex items-center gap-3">
            <button type="button" className="flex size-7 items-center justify-center rounded-full bg-white/5 text-white/80">
              <ArrowLeft className="size-3.5" />
            </button>
            <div className="flex items-center gap-2 text-[11px] text-white/80">
              <span className="size-2.5 rounded-full bg-[#ff5f57]" />
              <span className="size-2.5 rounded-full bg-[#febc2e]" />
              <span className="size-2.5 rounded-full bg-[#28c840]" />
            </div>
          </div>

          <div className="flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-3 py-1.5 text-[11px] text-white/70">
            <span>{APP_NAME}</span>
          </div>
        </div>

        <div className="flex flex-1 flex-col bg-[#a6a7a5] p-0">
          <div className="flex items-center justify-between bg-[#17191d] px-4 py-2 text-[11px] text-white/70">
            <div className="flex items-center gap-2">
              <span className="rounded bg-white/5 px-2 py-1">Message</span>
              <span className="rounded bg-white/5 px-2 py-1">Frondend</span>
            </div>
            <div className="flex items-center gap-2">
              <span className="rounded-full bg-white/5 px-2 py-1">Preview</span>
            </div>
          </div>

          <div className="relative flex flex-1 items-center justify-center overflow-hidden bg-[#7c7f7b]">
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,_rgba(255,255,255,0.2),_transparent_45%)]" />
            <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(14,14,14,0.25),rgba(0,0,0,0.52))]" />

            <div className="relative z-10 w-[min(92%,28rem)] rounded-[26px] border border-white/10 bg-[#f6f5f3]/90 p-5 shadow-2xl backdrop-blur-sm">
              <div className="mb-4 flex items-center justify-between text-[11px] text-zinc-700">
                <span className="flex items-center gap-2 font-medium">
                  <span className="flex size-8 items-center justify-center rounded-full bg-[#f3f3f3] text-zinc-800 shadow-sm">
                    <Play className="ml-0.5 size-3.5 fill-current" />
                  </span>
                  Backdrop
                </span>
                <button type="button" className="flex size-7 items-center justify-center rounded-full bg-black/5 text-zinc-700">
                  ×
                </button>
              </div>

              <div className="grid grid-cols-2 gap-3 sm:grid-cols-3">
                {[
                  ["Sonoma Horizon", "#1f2a44"],
                  ["Redwoods", "#1e2d23"],
                  ["Utah Evening", "#462b2b"],
                  ["San Francisco", "#2a2b34"],
                  ["Iceland Coast", "#1d2a33"],
                  ["New York", "#213f43"],
                ].map(([label, color]) => (
                  <div key={label} className="overflow-hidden rounded-2xl border border-black/7 bg-white shadow-sm">
                    <div className="h-20" style={{ background: `linear-gradient(135deg, ${color}, rgba(255,255,255,0.28))` }} />
                    <div className="px-2 py-2 text-[10px] font-medium text-zinc-700">{label}</div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          <div className="flex items-center justify-between border-t border-white/10 bg-[#17191d] px-4 py-3 text-[11px] text-white/75">
            <div className="flex items-center gap-3">
              <button className="flex size-7 items-center justify-center rounded-full bg-white/5">
                <Play className="ml-0.5 size-3 fill-current" />
              </button>
              <div className="flex items-center gap-2">
                <Clock3 className="size-3.5" />
                <span>3:28:47 / 4:47:02</span>
              </div>
            </div>
            <div className="flex items-center gap-3">
              <Volume2 className="size-3.5" />
              <div className="h-1.5 w-20 rounded-full bg-white/10">
                <div className="h-full w-1/2 rounded-full bg-[#ff4d4d]" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}