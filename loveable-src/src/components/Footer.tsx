import signet from "@/assets/signet.png";
import { useLang } from "@/lib/language";

const Footer = () => {
  const { lang } = useLang();

  return (
    <footer className="px-6 pb-12 pt-16">
      <div className="mx-auto max-w-content flex flex-col items-center gap-4">
        <img src={signet} alt="Podorож" className="w-8 h-auto opacity-40" />
        <p className="text-sm text-muted-foreground font-light">
          © 2026 Podoroж
        </p>
      </div>
    </footer>
  );
};

export default Footer;
