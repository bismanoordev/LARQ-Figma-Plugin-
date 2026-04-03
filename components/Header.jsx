const navItems = ["プロダクト", "テクノロジー", "LARQについて", "サポート"];

function Chevron() {
  return (
    <span className="inline-block h-2 w-2 rotate-45 border-r-2 border-b-2 border-[#153A5B]" />
  );
}

function SearchIcon() {
  return (
    <svg
      viewBox="0 0 24 24"
      aria-hidden="true"
      className="h-5 w-5 text-[#13395B]"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M21 21L16.65 16.65M18 11C18 14.866 14.866 18 11 18C7.13401 18 4 14.866 4 11C4 7.13401 7.13401 4 11 4C14.866 4 18 7.13401 18 11Z"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
      />
    </svg>
  );
}

const notoSansClass = "font-[family-name:var(--font-noto-sans-jp)]";
const interClass = "font-[family-name:var(--font-inter)]";

export default function Header() {
  return (
    <header className="sticky top-0 z-50 w-full border-b border-slate-200 bg-white/95 shadow-sm backdrop-blur">
      <div className="mx-auto flex h-16 max-w-7xl items-center justify-between px-4 sm:px-6 lg:px-8">
        <a
          href="#"
          className="text-2xl font-semibold tracking-[0.2em] text-[#13395B]"
        >
          LARQ
        </a>

        <div className="hidden items-center gap-4 lg:flex">
          <nav
            aria-label="Primary navigation"
            className="flex items-center gap-1"
          >
            {navItems.map((item) => (
              <button
                key={item}
                type="button"
                className={`inline-flex items-center gap-2 rounded-md px-3 py-2 text-sm font-medium text-[#153A5B] transition-colors hover:bg-slate-100 ${notoSansClass}`}
              >
                <Chevron />
                <span>{item}</span>
              </button>
            ))}
          </nav>

          <button
            type="button"
            className={`rounded bg-[#153A5B] px-4 py-2 text-sm font-medium text-white transition-colors hover:bg-[#0f2d47] ${interClass}`}
          >
            Store
          </button>

          <button
            type="button"
            aria-label="Search"
            className="rounded-md p-2 text-[#13395B] transition-colors hover:bg-slate-100"
          >
            <SearchIcon />
          </button>
        </div>

        <button
          type="button"
          aria-label="Open menu"
          className="inline-flex rounded-md p-2 text-[#13395B] hover:bg-slate-100 lg:hidden"
        >
          <svg
            viewBox="0 0 24 24"
            className="h-6 w-6"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M4 7H20M4 12H20M4 17H20"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
            />
          </svg>
        </button>
      </div>
    </header>
  );
}
