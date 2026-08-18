import { useClerk } from "@clerk/react";
import { Button } from "@heroui/react";
import { ArrowRightIcon, ShieldCheckIcon, SparklesIcon } from "lucide-react";
import { AppLogo } from "../AppLogo";
import { AuthCardShell } from "./AuthCardShell";

const AFTER_AUTH = "/";

const continueButtonClassName = [
  "group relative h-13 overflow-hidden rounded-2xl text-[15px] font-semibold",
  "shadow-xl shadow-accent/45 dark:shadow-accent/35",
  "after:pointer-events-none after:absolute after:inset-0 after:rounded-2xl",
  "after:shadow-[inset_0_1px_0_rgba(255,255,255,0.25)]",
  "dark:after:shadow-[inset_0_1px_0_rgba(255,255,255,0.15)]",
].join(" ");

const recommendationCards = [
  {
    title: "The new iMessage experience",
    meta: "Google · 2.4M views",
    tag: "Technology",
  },
  {
    title: "Build a real-time chat app",
    meta: "Midnight Dev · 9.2K views",
    tag: "Development",
  },
  {
    title: "Designing clean auth flows",
    meta: "Product Lab · 15K views",
    tag: "UX",
  },
];

export function AuthActionPanel() {
  const clerk = useClerk();

  return (
    <aside className="flex flex-col bg-[#f4f4f5] px-4 py-4 dark:bg-[#121316] lg:px-5 lg:py-5">
      <div className="mb-4 flex gap-2 overflow-hidden rounded-full bg-[#e5e5e7] p-1 dark:bg-[#1d1f22]">
        {['All', 'From Coders', 'React routers'].map((tab, index) => (
          <button
            key={tab}
            type="button"
            className={[
              "rounded-full px-4 py-2 text-xs font-medium",
              index === 0
                ? "bg-white text-zinc-900 shadow-sm dark:bg-[#2d2f35] dark:text-white"
                : "text-zinc-600 dark:text-zinc-300",
            ].join(" ")}
          >
            {tab}
          </button>
        ))}
      </div>

      <div className="flex flex-col gap-4">
        {recommendationCards.map((item, index) => (
          <div
            key={item.title}
            className="flex gap-3 rounded-2xl bg-white p-3 shadow-[0_8px_24px_rgba(15,23,42,0.06)] dark:bg-[#191b1f]"
          >
            <div
              className="h-20 w-28 shrink-0 rounded-xl"
              style={{
                background:
                  index === 0
                    ? "linear-gradient(135deg, #3b82f6, #22c55e)"
                    : index === 1
                      ? "linear-gradient(135deg, #f59e0b, #ef4444)"
                      : "linear-gradient(135deg, #8b5cf6, #0ea5e9)",
              }}
            />
            <div className="min-w-0 flex-1">
              <div className="mb-2 inline-flex rounded-full bg-zinc-100 px-2 py-1 text-[9px] font-medium uppercase tracking-[0.15em] text-zinc-600 dark:bg-white/5 dark:text-zinc-300">
                {item.tag}
              </div>
              <h3 className="text-sm font-semibold leading-5 text-zinc-900 dark:text-white">{item.title}</h3>
              <p className="mt-1 text-[11px] text-zinc-500 dark:text-zinc-400">{item.meta}</p>
            </div>
          </div>
        ))}
      </div>

      <div className="mt-5">
        <AuthCardShell>
          <div className="mb-8 flex flex-col items-center text-center">
            <div className="relative mb-5">
              <div
                aria-hidden
                className="absolute -inset-3.5 rounded-[20px] bg-linear-to-br from-accent/22 via-accent/8 to-transparent opacity-90 blur-xl dark:from-accent/28 dark:via-accent/10"
              />
              <div className="relative rounded-2xl bg-linear-to-b from-white to-[#f2f2f7] p-2 shadow-lg shadow-black/8 ring-1 ring-black/8 dark:from-[#2c2c2e] dark:to-[#1a1a1c] dark:shadow-black/50 dark:ring-white/12">
                <AppLogo size={52} className="rounded-xl" alt="" />
              </div>
            </div>

            <div className="flex items-center justify-center gap-1.5 text-accent">
              <SparklesIcon className="size-3.5" strokeWidth={2} aria-hidden />
              <span className="text-[11px] font-semibold uppercase tracking-[0.18em]">
                Secure entry
              </span>
            </div>
          </div>

          <Button
            fullWidth
            size="lg"
            variant="primary"
            className={continueButtonClassName}
            onPress={() => {
              clerk.openSignIn({ fallbackRedirectUrl: AFTER_AUTH, forceRedirectUrl: AFTER_AUTH });
            }}
          >
            <span className="relative z-1 flex items-center justify-center gap-2">
              Continue
              <ArrowRightIcon className="size-4 transition-transform group-hover:translate-x-0.5" aria-hidden />
            </span>
          </Button>

          <div className="mt-8 flex items-center justify-center gap-2 border-t border-black/6 pt-6 text-[11px] text-[#8E8E93] dark:border-white/8 dark:text-[#636366]">
            <ShieldCheckIcon className="size-3.5 shrink-0 text-[#34C759] dark:text-[#30D158]" strokeWidth={2} aria-hidden />
            <span>Protected session · TLS encryption</span>
          </div>
        </AuthCardShell>
      </div>
    </aside>
  );
}