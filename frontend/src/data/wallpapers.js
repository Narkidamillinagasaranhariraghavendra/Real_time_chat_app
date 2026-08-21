export const WALLPAPER_SECTIONS = [
  { id: "desktop", title: "Desktop" },
  { id: "abstract", title: "Abstract" },
];

export const WALLPAPERS = [
  
  {
    id: "iceland-coast",
    category: "desktop",
    label: "Iceland Coast",
    url: "/wallpapers/iceland-coast.jpg",
  },
  {
    id: "new-york-midtown",
    category: "desktop",
    label: "New York Midtown",
    url: "/wallpapers/new-york-midtown.jpg",
  },
  {
    id: "macos-graphic",
    category: "abstract",
    label: "macOS Graphic",
    url: "/wallpapers/macos-graphic.jpg",
  },
  
  {
    id: "radial-green",
    category: "abstract",
    label: "Radial Green",
    url: "/wallpapers/radial-green.jpg",
  },
  
];

export function frameStyleFromUrl(url) {
  return {
    backgroundImage: `url("${url}")`,
    backgroundSize: "cover",
    backgroundPosition: "center",
  };
}

export function getWallpaperById(id) {
  return WALLPAPERS.find((w) => w.id === id) ?? WALLPAPERS[0];
}