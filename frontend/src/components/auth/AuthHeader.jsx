import { APP_NAME, AppLogo } from "../AppLogo";
import { ThemePresetPicker } from "../ThemePresentPicker";
import { ThemeToggle } from "../ThemeToggle";
import { WallpaperPicker } from "../WallpaperPicker";
import { Bell, Compass, Menu, Search, Settings, Video } from "lucide-react";

function AuthHeader() {
  return (
    <header className="sticky top-0 z-20 flex shrink-0 items-center gap-3 border-b border-black/8 bg-[#f8f8f8]/95 px-3 py-2.5 backdrop-blur-md dark:border-white/10 dark:bg-[#1a1b1f]/95">
      <div className="flex items-center gap-3">
        <button
          type="button"
          className="flex size-9 items-center justify-center rounded-full border border-black/6 bg-white/80 text-zinc-700 shadow-sm dark:border-white/10 dark:bg-white/5 dark:text-zinc-200"
          aria-label="Open menu"
        >
          <Menu className="size-4" />
        </button>

        <div className="flex items-center gap-2.5">
          <AppLogo size={26} className="rounded-[7px]" alt="" />
          <span className="text-sm font-semibold text-zinc-800 dark:text-zinc-100">{APP_NAME}</span>
        </div>
      </div>

      <div className="hidden flex-1 items-center justify-center md:flex">
        <div className="flex w-full max-w-[620px] items-center gap-3 rounded-full border border-black/8 bg-[#ececef] px-4 py-2.5 shadow-inner shadow-black/5 dark:border-white/10 dark:bg-[#2a2b30]">
          <Search className="size-4 text-zinc-500 dark:text-zinc-300" />
          <input
            aria-label="Search"
            value="Search"
            readOnly
            className="w-full border-0 bg-transparent text-sm text-zinc-700 outline-none placeholder:text-zinc-500 dark:text-zinc-200"
          />
          <button
            type="button"
            className="flex size-8 items-center justify-center rounded-full bg-white text-zinc-700 shadow-sm dark:bg-[#17181d] dark:text-zinc-200"
            aria-label="Voice search"
          >
            <Compass className="size-4" />
          </button>
        </div>
      </div>

      <div className="ml-auto flex shrink-0 items-center gap-2">
        <button type="button" className="flex size-9 items-center justify-center rounded-full bg-transparent text-zinc-700 dark:text-zinc-200" aria-label="Create">
          <Video className="size-4" />
        </button>
        <button type="button" className="flex size-9 items-center justify-center rounded-full bg-transparent text-zinc-700 dark:text-zinc-200" aria-label="Notifications">
          <Bell className="size-4" />
        </button>
        <button type="button" className="flex size-9 items-center justify-center rounded-full bg-transparent text-zinc-700 dark:text-zinc-200" aria-label="Settings">
          <Settings className="size-4" />
        </button>

        <div className="flex items-center gap-1.5">
          <WallpaperPicker />
          <ThemePresetPicker />
          <ThemeToggle />
        </div>
      </div>
    </header>
  );
}
export default AuthHeader;