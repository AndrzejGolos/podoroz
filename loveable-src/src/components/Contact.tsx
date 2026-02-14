import { useState, type FormEvent } from "react";
import { useLang } from "@/lib/language";
import { useReveal } from "@/lib/useReveal";

const Contact = () => {
  const [formData, setFormData] = useState({ name: "", email: "", message: "" });
  const { lang } = useLang();
  const sectionReveal = useReveal(0.2);

  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    const form = e.target as HTMLFormElement;
    fetch("/", {
      method: "POST",
      headers: { "Content-Type": "application/x-www-form-urlencoded" },
      body: new URLSearchParams(new FormData(form) as never).toString(),
    })
      .then(() => setSubmitted(true))
      .catch(() => alert(lang === "pl" ? "Błąd wysyłania. Spróbuj ponownie." : "Sending failed. Please try again."));
  };

  const fields = [
    { name: "name" as const, label: lang === "pl" ? "Imię" : "Name", type: "text" },
    { name: "email" as const, label: "Email", type: "email" },
  ];

  return (
    <section id="contact" className="px-6 py-24 md:py-32">
      <div
        ref={sectionReveal.ref}
        className={`mx-auto max-w-content reveal ${sectionReveal.visible ? "visible" : ""}`}
      >
        <p className="text-muted-foreground small-caps text-sm mb-16 tracking-widest">
          {lang === "pl" ? "Kontakt" : "Contact"}
        </p>

        {submitted ? (
          <p className="text-foreground text-base font-light mb-16">
            {lang === "pl" ? "Dziękujemy za wiadomość. Odezwiemy się wkrótce." : "Thank you for your message. We'll get back to you soon."}
          </p>
        ) : null}

        <form onSubmit={handleSubmit} name="contact" method="POST" data-netlify="true" className={`space-y-10 mb-16 ${submitted ? "hidden" : ""}`}>
          <input type="hidden" name="form-name" value="contact" />
          {fields.map((field) => (
            <div key={field.name}>
              <label className="block text-xs text-muted-foreground mb-2 tracking-wide">
                {field.label}
              </label>
              <input
                type={field.type}
                name={field.name}
                required
                value={formData[field.name]}
                onChange={(e) => setFormData((prev) => ({ ...prev, [field.name]: e.target.value }))}
                className="w-full bg-transparent border-0 border-b border-border pb-2 text-foreground text-base font-light focus:outline-none focus:border-foreground transition-colors duration-200 placeholder:text-muted-foreground/40"
              />
            </div>
          ))}

          <div>
            <label className="block text-xs text-muted-foreground mb-2 tracking-wide">
              {lang === "pl" ? "Wiadomość" : "Message"}
            </label>
            <textarea
              name="message"
              required
              rows={4}
              value={formData.message}
              onChange={(e) => setFormData((prev) => ({ ...prev, message: e.target.value }))}
              className="w-full bg-transparent border-0 border-b border-border pb-2 text-foreground text-base font-light focus:outline-none focus:border-foreground transition-colors duration-200 resize-none placeholder:text-muted-foreground/40"
            />
          </div>

          <button
            type="submit"
            className="bg-primary text-primary-foreground px-8 py-3 text-sm tracking-widest uppercase hover:opacity-80 transition-opacity duration-200"
          >
            {lang === "pl" ? "Wyślij" : "Send"}
          </button>
        </form>

        {/* Email */}
        <a
          href="mailto:zespolpodoroz@gmail.com"
          className="text-sm text-muted-foreground hover:text-foreground transition-colors duration-200"
        >
          zespolpodoroz@gmail.com
        </a>

        {/* Social */}
        <div className="flex items-center gap-6 mt-8">
          <a
            href="https://www.youtube.com/@zespol_podoroz"
            target="_blank"
            rel="noopener noreferrer"
            className="text-xs text-muted-foreground hover:text-foreground transition-colors duration-200 tracking-wide"
          >
            YouTube
          </a>
          <a
            href="https://www.facebook.com/zespol.podoroz"
            target="_blank"
            rel="noopener noreferrer"
            className="text-xs text-muted-foreground hover:text-foreground transition-colors duration-200 tracking-wide"
          >
            Facebook
          </a>
        </div>

        {lang === "pl" && (
          <p className="text-xs text-muted-foreground mt-8 font-light">
            We also speak English
          </p>
        )}
      </div>
    </section>
  );
};

export default Contact;
