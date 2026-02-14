import memberAmelia from "@/assets/member-amelia.jpg";
import memberAndrzej from "@/assets/member-andrzej.jpg";
import memberEwa from "@/assets/member-ewa.jpg";
import memberMysza from "@/assets/member-mysza.jpg";
import memberWojciak from "@/assets/member-wojciak.jpg";
import { useLang } from "@/lib/language";
import { useReveal } from "@/lib/useReveal";

const members = [
  { name: "Ewa Karasińska", photo: memberEwa, position: "top", scale: 1 },
  { name: "Ewa Mysza Starzyk", photo: memberMysza, position: "70% 20%", scale: 1.5 },
  { name: "Amelia Pietroczuk", photo: memberAmelia, position: "top", scale: 1 },
  { name: "Andrzej Gołoś", photo: memberAndrzej, position: "30% 55%", scale: 1.5 },
  { name: "Wójciak", photo: memberWojciak, position: "top", scale: 1 },
];

const About = () => {
  const { lang } = useLang();
  const textReveal = useReveal(0.2);
  const membersReveal = useReveal(0.15);

  return (
    <section id="about" className="px-6 py-24 md:py-32">
      <div
        ref={textReveal.ref}
        className={`mx-auto max-w-content reveal ${textReveal.visible ? "visible" : ""}`}
      >
        <p className="text-muted-foreground small-caps text-sm mb-12 tracking-widest">
          {lang === "pl" ? "O nas" : "About"}
        </p>

        <div className="space-y-8 text-foreground text-base md:text-lg leading-[1.8] font-light">
          {lang === "pl" ? (
            <>
              <p>
                Podorож to po ukraińsku podróż, wędrówka. Nasza podróż w obecnym składzie zaczęła się
                w roku 2023, ale każde z nas próbowało wcześniej podążać tym szlakiem kilka, kilkanaście,
                kilkadziesiąt lat. Śpiewamy pieśni przede wszystkim z Ukrainy, ale także z Białorusi
                i polskiego Podlasia.
              </p>
              <p>
                Wielogłosowa pieśń to nie tylko podróż przez wschodniosłowiańskie obyczaje i obrzędy.
                To także kontakt z głębokim ludzkim doświadczeniem — uniwersalnym, jak uniwersalna jest
                radość i ból, śmierć i miłość.
              </p>
              <p>
                Nie wychowaliśmy się w tej tradycji ani w tym języku, ale fascynuje nas kunsztowność
                melodii, archaiczność wielu z nich. Przekonaliśmy się też, że wschodniosłowiańska pieśń
                wybrzmi, o ile najpierw powstanie wspólnota wzajemnie rozumiejących się ludzi. Być może
                to najcenniejsze doświadczenie z naszej wspólnej podróży.
              </p>
            </>
          ) : (
            <>
              <p>
                Podoroж means journey in Ukrainian. Our journey in the present line-up began in 2023,
                though each of us had been following this path for several, a dozen, or even dozens
                of years before that. We sing songs mainly from Ukraine, but also from Belarus and
                the Polish region of Podlasie.
              </p>
              <p>
                Polyphonic singing is not only a journey through East Slavic customs and rituals.
                It is also a way of connecting with deeply human experiences — as universal as joy
                and sorrow, death and love.
              </p>
              <p>
                We did not grow up in this tradition or language, yet we are fascinated by the
                intricacy of the melodies and the archaic nature of many of them. We have also
                discovered that East Slavic song truly comes alive only when a community of people
                who understand one another is first formed. Perhaps this is the most precious
                experience of our shared journey.
              </p>
            </>
          )}
        </div>
      </div>

      {/* Members */}
      <div
        ref={membersReveal.ref}
        className={`mx-auto max-w-site mt-20 md:mt-28 reveal ${membersReveal.visible ? "visible" : ""}`}
      >
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-4 md:gap-6">
          {members.map((member, i) => (
            <div
              key={member.name}
              className="flex flex-col items-center"
              style={{
                transitionDelay: membersReveal.visible ? `${i * 100}ms` : "0ms",
                opacity: membersReveal.visible ? 1 : 0,
                transform: membersReveal.visible ? "translateY(0)" : "translateY(16px)",
                transition: "opacity 0.6s ease-out, transform 0.6s ease-out",
              }}
            >
              <div className="w-full aspect-[3/4] overflow-hidden mb-3 group">
                <img
                  src={member.photo}
                  alt={member.name}
                  className="w-full h-full object-cover grayscale"
                  style={{ objectPosition: member.position, transform: `scale(${member.scale})` }}
                  loading="lazy"
                />
              </div>
              <span className="text-xs text-muted-foreground tracking-wide text-center">
                {member.name}
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default About;
