import logo from "@/assets/logo.png";
import { useLang } from "@/lib/language";

const Hero = () => {
  const { lang } = useLang();

  return (
    <section className="relative flex min-h-screen flex-col items-center justify-center px-6">
      {/* Band logo */}
      <div className="animate-fade-in mb-6" style={{ animationDelay: "200ms" }}>
        <img
          src={logo}
          alt="Podorож"
          className="w-64 md:w-80 lg:w-96 h-auto"
        />
      </div>

      {/* Subtitle */}
      <p
        className="animate-fade-in text-muted-foreground text-sm md:text-base font-light tracking-wide"
        style={{ animationDelay: "600ms" }}
      >
        {lang === "pl"
          ? "Wielogłosowe pieśni z Ukrainy, Białorusi i Podlasia"
          : "Polyphonic songs from Ukraine, Belarus and Podlasie"}
      </p>
    </section>
  );
};

export default Hero;
