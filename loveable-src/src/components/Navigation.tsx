import { useEffect, useState } from "react";
import { useLang } from "@/lib/language";

const sections = ["about", "music", "contact"] as const;

const Navigation = () => {
  const [scrolled, setScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState<string>("");
  const { lang, setLang } = useLang();

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 60);
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Track active section via Intersection Observer
  useEffect(() => {
    const observers: IntersectionObserver[] = [];

    sections.forEach((id) => {
      const el = document.getElementById(id);
      if (!el) return;

      const observer = new IntersectionObserver(
        ([entry]) => {
          if (entry.isIntersecting) {
            setActiveSection(id);
          }
        },
        { rootMargin: "-40% 0px -55% 0px" }
      );

      observer.observe(el);
      observers.push(observer);
    });

    return () => observers.forEach((o) => o.disconnect());
  }, []);

  const labels: Record<string, { pl: string; en: string }> = {
    about: { pl: "O nas", en: "About" },
    music: { pl: "Muzyka", en: "Music" },
    contact: { pl: "Kontakt", en: "Contact" },
  };

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled ? "bg-background/80 backdrop-blur-sm" : "bg-transparent"
      }`}
    >
      <div className="mx-auto flex max-w-site items-center justify-between px-6 py-4 md:px-8">
        {/* Links */}
        <div className="flex items-center gap-6 md:gap-8">
          <div className="hidden sm:flex items-center gap-6 text-sm text-muted-foreground">
            {sections.map((id, i) => (
              <span key={id} className="flex items-center gap-6">
                {i > 0 && <span className="text-stone-mid">·</span>}
                <a
                  href={`#${id}`}
                  className={`transition-colors duration-200 ${
                    activeSection === id
                      ? "text-foreground"
                      : "hover:text-foreground"
                  }`}
                >
                  {labels[id][lang]}
                </a>
              </span>
            ))}
          </div>

          <div className="flex items-center gap-2 text-xs text-muted-foreground">
            <button
              onClick={() => setLang("pl")}
              className={`transition-colors duration-200 ${lang === "pl" ? "text-foreground" : "hover:text-foreground"}`}
            >
              PL
            </button>
            <span>/</span>
            <button
              onClick={() => setLang("en")}
              className={`transition-colors duration-200 ${lang === "en" ? "text-foreground" : "hover:text-foreground"}`}
            >
              EN
            </button>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navigation;
