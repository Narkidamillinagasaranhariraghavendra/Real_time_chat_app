

import { ThemeProvider } from "./context/ThemeContent";
import { WallpaperProvider } from "./context/WallpaperContext";
import { Route, Routes, Navigate } from "react-router-dom";
import ChatPage from "./pages/ChatPage";
import AuthPage from "./pages/AuthPage";
import { useAuth } from "@clerk/react";

function App() {
  const { isSignedIn, isLoaded } = useAuth();

  if (!isLoaded) return <p>loading...</p>;

  return (
    <div>
      <ThemeProvider>
        <WallpaperProvider>
          <Routes>
            <Route path="/" element={isSignedIn ? <Navigate to="/chat" replace /> : <Navigate to="/auth" replace />} />
            <Route path="/auth" element={!isSignedIn ? <AuthPage /> : <Navigate to="/chat" replace />} />
            <Route path="/chat" element={isSignedIn ? <ChatPage /> : <Navigate to="/auth" replace />} />
            <Route path="*" element={<Navigate to={isSignedIn ? "/chat" : "/auth"} replace />} />
          </Routes>
        </WallpaperProvider>
      </ThemeProvider>
    </div>
  );
}

export default App
