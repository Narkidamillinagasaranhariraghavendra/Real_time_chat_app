import { AuthActionPanel } from "../components/auth/AuthActionPanel";
import AuthHeader from "../components/auth/AuthHeader";
import { AuthHeroPanel } from "../components/auth/AuthHeroPanel";
import { useWallpaper } from "../context/wallpaper";

function AuthPage() {
  const { frameStyle } = useWallpaper();

  return (
    <div
      className="box-border flex min-h-dvh flex-col bg-[#f3f3f5] p-0 text-[#111827] dark:bg-[#0b0b0d] dark:text-white"
      style={frameStyle}
    >
      <div className="mx-auto flex w-full max-w-[1600px] flex-1 flex-col overflow-hidden bg-[#f5f5f7] dark:bg-[#111214]">
        <AuthHeader />

        <main className="grid flex-1 grid-cols-1 xl:grid-cols-[minmax(0,1fr)_380px]">
          <AuthHeroPanel />
          <AuthActionPanel />
        </main>
      </div>
    </div>
  );
}
export default AuthPage;