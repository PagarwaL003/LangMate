import { PaletteIcon } from "lucide-react";
import { useThemeStore } from "../store/useThemeStore";
import { THEMES } from "../constants/index.js";
const ThemeSelector = () => {
  const { theme, setTheme } = useThemeStore();

  return (
    <div className="dropdown dropdown-end">
      {/* Dropdown trigger */}
      <button className="btn btn-ghost btn-circle" tabIndex={0}>
        <PaletteIcon className="size-5" />
      </button>

      <div
        tabIndex={0}
        className="w-56 pl-1 mt-2 overflow-y-auto border shadow-2xl dropdown-content bg-base-200 backdrop-blur-lg rounded-2xl border-base-content/10 max-h-80"
      >
        <div className="space-y-1">
          {THEMES.map((themeOption) => (
            <button
              key={themeOption.name}
              className={`flex items-center w-full gap-3 px-4 py-3 transition-colors rounded-xl
                ${
                  theme === themeOption.name
                    ? "bg-primary/10 text-primary"
                    : "hover:bg-base-content/5"
                }
              `}
              onClick={() => setTheme(themeOption.name)}
            >
              <PaletteIcon className="size-4" />
              <span className="text-sm font-medium">{themeOption.label}</span>
              <div className="flex gap-1 ml-auto">
                {themeOption.colors.map((color, i) => (
                  <span
                    className="rounded-full size-2"
                    key={i}
                    style={{ backgroundColor: color }}
                  />
                ))}
              </div>
            </button>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ThemeSelector;
