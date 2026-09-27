"use client";

import Image from "next/image";
import Link from "next/link";
import PageMotion from "./components/page-motion";
import { useEffect, useRef, useState } from "react";

type IconName =
  | "arrow"
  | "pin"
  | "people"
  | "heart"
  | "leaf"
  | "calendar"
  | "chevron"
  | "compass"
  | "close"
  | "menu"
  | "check"
  | "globe";
function Icon({ name, size = 22 }: { name: IconName; size?: number }) {
  const paths: Record<IconName, React.ReactNode> = {
    arrow: <path d="M4 12h15M13 5l7 7-7 7" />,
    pin: (
      <>
        <path d="M20 10c0 6-8 11-8 11S4 16 4 10a8 8 0 1 1 16 0Z" />
        <circle cx="12" cy="10" r="2.5" />
      </>
    ),
    people: (
      <>
        <circle cx="9" cy="7" r="3" />
        <path d="M3 21v-3a6 6 0 0 1 12 0v3M16 4a3 3 0 0 1 0 6M18 13a5 5 0 0 1 3 5v3" />
      </>
    ),
    heart: (
      <path d="M20.8 4.6a5.5 5.5 0 0 0-7.8 0l-1 1-1-1a5.5 5.5 0 0 0-7.8 7.8L12 21l8.8-8.6a5.5 5.5 0 0 0 0-7.8Z" />
    ),
    leaf: <path d="M20 3C9 1 1 8 5 16s16 4 15-13ZM4 21 16 9" />,
    calendar: (
      <>
        <rect x="3" y="5" width="18" height="16" rx="2" />
        <path d="M7 2v6m10-6v6M3 11h18m-13 5h3" />
      </>
    ),
    chevron: <path d="m7 10 5 5 5-5" />,
    compass: (
      <>
        <circle cx="12" cy="12" r="9" />
        <path d="m16 8-2 6-6 2 2-6Z" />
      </>
    ),
    close: <path d="m6 6 12 12M6 18 18 6" />,
    menu: <path d="M3 6h18M3 12h18M3 18h18" />,
    check: <path d="m5 12 4 4L19 6" />,
    globe: (
      <>
        <circle cx="12" cy="12" r="9" />
        <ellipse cx="12" cy="12" rx="4" ry="9" />
        <path d="M3 12h18" />
      </>
    ),
  };
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.6"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
    >
      {paths[name]}
    </svg>
  );
}

const tours = [
  {
    id: "classic",
    name: "The heart of Myanmar",
    subtitle: "Golden temples. Timeless traditions.",
    image: "bagan",
    days: 8,
    category: "Culture & discovery",
    places: ["Yangon", "Bagan", "Mandalay"],
    tag: "THE CLASSIC JOURNEY",
    description:
      "A thoughtful introduction to Myanmar, from Yangon's tea shops and sacred landmarks to the temple plains of Bagan and Mandalay's living craft traditions.",
    itinerary: [
      "Begin in Yangon with its markets, neighbourhoods and Shwedagon Pagoda.",
      "Explore Bagan's temple architecture and meet local lacquerware makers.",
      "Finish in Mandalay with craft workshops and a gentle introduction to the city's cultural heritage.",
    ],
  },
  {
    id: "inle",
    name: "A slower side of Myanmar",
    subtitle: "Lake life, local flavours & little moments.",
    image: "inle",
    days: 10,
    category: "Nature & connection",
    places: ["Yangon", "Bagan", "Nyaungshwe"],
    tag: "TAKE THE SCENIC ROUTE",
    description:
      "Take time to notice the everyday. Pair Bagan's remarkable heritage with the landscapes around Inle Lake, its weaving traditions and waterside communities.",
    itinerary: [
      "Settle into Yangon and share a local food walk.",
      "Spend unhurried days exploring Bagan's cultural landscape.",
      "Continue to Nyaungshwe for Inle Lake, seasonal produce and traditional weaving, where access permits.",
    ],
  },
  {
    id: "yangon",
    name: "Yangon, beyond the postcards",
    subtitle: "Follow your curiosity. Find your people.",
    image: "yangon",
    days: 5,
    category: "Culture & discovery",
    places: ["Yangon", "Dala", "Yangon"],
    tag: "A LITTLE CLOSER TO LOCAL",
    description:
      "Look beyond the landmarks with a city-focused journey through tea shops, markets and neighbourhood stories. Optional Dala visits depend on current local access.",
    itinerary: [
      "Explore central Yangon on foot with a local guide.",
      "Discover market flavours, religious heritage and independent businesses.",
      "Consider a locally guided Dala visit if conditions allow, then return to Yangon.",
    ],
  },
];
type Tour = (typeof tours)[number];

const guides = [
  {
    title: "Visas & entry requirements",
    icon: "globe" as IconName,
    text: "UK government guidance checked on 27 September 2026 states that British travellers need a visa before travel and a passport valid for at least 6 months after arrival. Rules differ by nationality. Confirm your eligibility, documents and permitted entry points with Myanmar's official eVisa portal or your nearest embassy before booking. An eVisa does not guarantee entry.",
    link: "https://evisa.moip.gov.mm/",
    label: "Official Myanmar eVisa portal",
    source:
      "https://www.gov.uk/foreign-travel-advice/myanmar/entry-requirements",
  },
  {
    title: "When is the best time to visit?",
    icon: "calendar" as IconName,
    text: "November to February is generally cooler and drier in central Myanmar. March to May can be very hot, while the monsoon usually runs from May to October. Conditions vary by region; lake levels, transport and activity availability are seasonal.",
  },
  {
    title: "A little respect goes a long way",
    icon: "heart" as IconName,
    text: "Do dress modestly at religious sites, remove shoes and socks where required, and ask before photographing people. Don't touch anyone's head, point your feet at Buddha images, or photograph military facilities. Follow your guide's advice and respect people's wish for privacy.",
  },
  {
    title: "Currency & everyday essentials",
    icon: "compass" as IconName,
    text: "The local currency is the Myanmar kyat (MMK). Exchange rates change, and card acceptance, ATMs and international transfers can be unreliable. Confirm lawful exchange options and a practical cash plan before arrival. Myanmar uses UTC+6:30; Burmese is the official language and Nay Pyi Taw is the capital.",
  },
  {
    title: "Is now the right time to visit?",
    icon: "pin" as IconName,
    text: "Travel can support local guides, artisans and family businesses. However, Myanmar is experiencing armed conflict and serious security risks, and many governments advise against travel to all or parts of the country. These example routes are not confirmation of safe access. Check your government's advice, insurance exclusions and current local conditions before deciding.",
    link: "https://www.gov.uk/foreign-travel-advice/myanmar",
    label: "Read current government travel advice",
  },
  {
    title: "Booking & payment",
    icon: "check" as IconName,
    text: "Start by saving your trip preferences in our planner. A trip is only confirmed after availability, itinerary, price, cancellation terms and payment instructions have been agreed in writing. Online payments are not available on this website yet. Never send money before receiving verified company payment details.",
  },
];

function RouteMap({ tour }: { tour: Tour }) {
  return (
    <div className="route-map">
      <div className="map-caption">
        <span>YOUR JOURNEY, AT A GLANCE</span>
        <span>Illustrative route</span>
      </div>
      <svg
        viewBox="0 0 500 250"
        role="img"
        aria-label={`Route: ${tour.places.join(" to ")}. Schematic, not to scale.`}
      >
        <defs>
          <pattern
            id="map-grid"
            width="25"
            height="25"
            patternUnits="userSpaceOnUse"
          >
            <path
              d="M25 0H0v25"
              fill="none"
              stroke="#dadfd4"
              strokeWidth=".6"
            />
          </pattern>
          <marker
            id="direction"
            markerWidth="7"
            markerHeight="7"
            refX="5"
            refY="3.5"
            orient="auto"
          >
            <path d="m0 0 7 3.5L0 7Z" fill="#303d84" />
          </marker>
        </defs>
        <rect width="500" height="250" rx="12" fill="#edf0e7" />
        <rect width="500" height="250" fill="url(#map-grid)" />
        <path
          d="M315-10c-25 60-90 42-60 103s-15 100-50 170"
          fill="none"
          stroke="#c5dce2"
          strokeWidth="20"
        />
        <path
          d="M100 176Q155 80 240 90"
          fill="none"
          stroke="#303d84"
          strokeWidth="2.5"
          strokeDasharray="6 5"
          markerEnd="url(#direction)"
        />
        <path
          d="M264 91Q328 60 389 113"
          fill="none"
          stroke="#303d84"
          strokeWidth="2.5"
          strokeDasharray="6 5"
          markerEnd="url(#direction)"
        />
        {[
          { x: 95, y: 180 },
          { x: 250, y: 90 },
          { x: 400, y: 120 },
        ].map((p, i) => (
          <g key={i}>
            <circle
              cx={p.x}
              cy={p.y}
              r="10"
              fill={i === 2 ? "#f5b51b" : "#303d84"}
              stroke="white"
              strokeWidth="3"
            />
            <text
              x={p.x}
              y={p.y + 28}
              textAnchor="middle"
              fill="#202943"
              fontSize="13"
              fontWeight="600"
            >
              {tour.places[i]}
            </text>
            <text
              x={p.x}
              y={p.y + 45}
              textAnchor="middle"
              fill="#68716a"
              fontSize="10"
            >
              {i === 0 ? "START" : i === 2 ? "FINISH" : "EXPLORE"}
            </text>
          </g>
        ))}
      </svg>
      <p>
        Route and transport are subject to access, conditions and local
        confirmation.
      </p>
    </div>
  );
}

export default function Home() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [destination, setDestination] = useState("All of Myanmar");
  const [duration, setDuration] = useState("Any duration");
  const [style, setStyle] = useState("Every kind of adventure");
  const [filters, setFilters] = useState({
    destination: "All of Myanmar",
    duration: "Any duration",
    style: "Every kind of adventure",
  });
  const [activeTour, setActiveTour] = useState<Tour | null>(null);
  const [plannerOpen, setPlannerOpen] = useState(false);
  const [saved, setSaved] = useState(false);
  const [plannedJourney, setPlannedJourney] = useState(
    "A tailor-made Myanmar adventure",
  );
  const tourDialog = useRef<HTMLDialogElement>(null);
  const plannerDialog = useRef<HTMLDialogElement>(null);

  useEffect(() => {
    if (activeTour) tourDialog.current?.showModal();
    else tourDialog.current?.close();
  }, [activeTour]);
  useEffect(() => {
    if (plannerOpen) plannerDialog.current?.showModal();
    else plannerDialog.current?.close();
  }, [plannerOpen]);
  useEffect(() => {
    if (!activeTour && !plannerOpen) return;
    const previous = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    return () => {
      document.body.style.overflow = previous;
    };
  }, [activeTour, plannerOpen]);

  const filteredTours = tours.filter(
    (t) =>
      (filters.destination === "All of Myanmar" ||
        t.places.includes(filters.destination)) &&
      (filters.duration === "Any duration" ||
        (filters.duration === "Up to 7 days" ? t.days <= 7 : t.days > 7)) &&
      (filters.style === "Every kind of adventure" ||
        t.category === filters.style),
  );
  const openPlanner = () => {
    setSaved(false);
    setPlannerOpen(true);
    setMenuOpen(false);
  };

  function savePlan(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const form = new FormData(event.currentTarget);
    const text = `N BAU BUM MYANMAR - MY TRIP PLAN\n\n${Array.from(
      form.entries(),
    )
      .map(([key, value]) => `${key}: ${value}`)
      .join(
        "\n",
      )}\n\nThis is a saved trip brief, not a booking. Contact details and departure availability are awaiting confirmation. No payment has been taken.`;
    const url = URL.createObjectURL(new Blob([text], { type: "text/plain" }));
    const anchor = document.createElement("a");
    anchor.href = url;
    anchor.download = "my-myanmar-trip-plan.txt";
    anchor.click();
    URL.revokeObjectURL(url);
    setSaved(true);
  }

  return (
    <>
      <a href="#main" className="skip-link">
        Skip to content
      </a>
      <PageMotion />
      <div className="announcement">
        <span>Locally rooted. Thoughtfully travelled.</span>
        <span className="announcement-right">
          Tourism for peace, love & understanding{" "}
          <Icon name="heart" size={13} />
        </span>
      </div>
      <header className="header">
        <a href="#" className="brand" aria-label="N Bau Bum Myanmar home">
          <Image
            src="/images/logo-mark.webp"
            width={52}
            height={52}
            alt="N Bau Bum company emblem"
          />
          <span>
            N BAU BUM<small>M Y A N M A R</small>
          </span>
        </a>
        <nav
          className={menuOpen ? "nav is-open" : "nav"}
          aria-label="Main navigation"
        >
          <a href="#journeys" onClick={() => setMenuOpen(false)}>
            Our journeys <Icon name="chevron" size={14} />
          </a>
          <a href="#discover" onClick={() => setMenuOpen(false)}>
            Discover Myanmar
          </a>
          <a href="#about" onClick={() => setMenuOpen(false)}>
            Our story
          </a>
          <a href="#travel-guide" onClick={() => setMenuOpen(false)}>
            Travel essentials
          </a>
        </nav>
        <button className="button button-blue header-cta" onClick={openPlanner}>
          Plan your trip <Icon name="arrow" size={17} />
        </button>
        <button
          className="menu-toggle"
          aria-label={menuOpen ? "Close menu" : "Open menu"}
          aria-expanded={menuOpen}
          onClick={() => setMenuOpen(!menuOpen)}
        >
          <Icon name={menuOpen ? "close" : "menu"} />
        </button>
      </header>

      <main id="main">
        <section className="destination-hero" aria-labelledby="hero-title">
          <nav className="hero-breadcrumb" aria-label="Breadcrumb">
            <ol>
              <li>
                <Link href="/">Home</Link>
              </li>
              <li>
                <a href="#journeys">Destinations</a>
              </li>
              <li aria-current="page">Myanmar</li>
            </ol>
          </nav>
          <h1 id="hero-title">Myanmar tours &amp; holidays</h1>
          <div className="destination-banner">
            <picture>
              <source
                media="(max-width: 650px)"
                srcSet="/images/bagan-golden-sunrise-mobile.webp"
              />
              <Image
                src="/images/bagan-golden-sunrise.webp"
                alt="Golden sunbeams break through clouds over misty Bagan, with a hot-air balloon above the landscape"
                fill
                loading="eager"
                fetchPriority="high"
                quality={90}
                sizes="(max-width: 650px) calc(100vw - 40px), (max-width: 1660px) calc(100vw - 60px), 1600px"
                className="destination-hero-image"
              />
            </picture>
          </div>
          <div className="destination-intro">
            <p>
              <strong>
                Beyond the golden pagodas, a world of warm hearts.
              </strong>{" "}
              Discover our home through the eyes of the people who know it best.
              Small groups, real encounters, and stories that stay with you.
            </p>
            <a href="#journeys" className="button button-gold">
              Find your Myanmar <Icon name="arrow" size={20} />
            </a>
          </div>
        </section>

        <div className="finder-wrap">
          <form
            className="trip-finder"
            onSubmit={(event) => {
              event.preventDefault();
              setFilters({ destination, duration, style });
              document.getElementById("journeys")?.scrollIntoView({
                behavior: window.matchMedia("(prefers-reduced-motion: reduce)")
                  .matches
                  ? "instant"
                  : "smooth",
              });
            }}
          >
            <div className="finder-intro">
              <Icon name="compass" size={28} />
              <strong>
                Your journey
                <br />
                starts here.
              </strong>
            </div>
            <label>
              <span>WHERE WOULD YOU LIKE TO GO?</span>
              <select
                value={destination}
                onChange={(e) => setDestination(e.target.value)}
              >
                <option>All of Myanmar</option>
                <option>Bagan</option>
                <option>Yangon</option>
                <option>Mandalay</option>
                <option>Nyaungshwe</option>
              </select>
            </label>
            <label>
              <span>HOW LONG HAVE YOU GOT?</span>
              <select
                value={duration}
                onChange={(e) => setDuration(e.target.value)}
              >
                <option>Any duration</option>
                <option>Up to 7 days</option>
                <option>8 days or more</option>
              </select>
            </label>
            <label>
              <span>YOUR WAY TO TRAVEL</span>
              <select value={style} onChange={(e) => setStyle(e.target.value)}>
                <option>Every kind of adventure</option>
                <option>Culture & discovery</option>
                <option>Nature & connection</option>
              </select>
            </label>
            <button type="submit" className="button button-blue">
              Explore trips <Icon name="arrow" size={18} />
            </button>
          </form>
        </div>

        <section
          className="values container"
          aria-label="Our travel philosophy"
        >
          {[
            {
              icon: "people" as IconName,
              title: "Local hearts. Local knowledge.",
              text: "See our home with the people who live here.",
            },
            {
              icon: "compass" as IconName,
              title: "Small groups. Bigger connections.",
              text: "More shared moments. More room to explore.",
            },
            {
              icon: "leaf" as IconName,
              title: "Travel that gives back.",
              text: "Meaningful choices that put communities first.",
            },
          ].map((v) => (
            <div className="value" key={v.title}>
              <span className="value-icon">
                <Icon name={v.icon} size={28} />
              </span>
              <div>
                <h3>{v.title}</h3>
                <p>{v.text}</p>
              </div>
            </div>
          ))}
        </section>

        <section id="journeys" className="journeys section-space container">
          <div className="section-heading">
            <div>
              <p className="eyebrow">GO BEYOND THE ORDINARY</p>
              <h2>Find a journey that feels like you.</h2>
              <p>
                Different paths. One extraordinary country. Let curiosity lead
                the way.
              </p>
            </div>
            <button
              className="text-link"
              onClick={() => {
                setFilters({
                  destination: "All of Myanmar",
                  duration: "Any duration",
                  style: "Every kind of adventure",
                });
                setDestination("All of Myanmar");
                setDuration("Any duration");
                setStyle("Every kind of adventure");
              }}
            >
              View all journeys <Icon name="arrow" size={18} />
            </button>
          </div>
          <div className="tour-grid" aria-live="polite">
            {filteredTours.map((tour) => (
              <article className="tour-card" key={tour.id}>
                <button
                  className="tour-image-button"
                  onClick={() => setActiveTour(tour)}
                  aria-label={`Explore ${tour.name}`}
                >
                  <Image
                    src={`/images/${tour.image}.webp`}
                    alt={
                      tour.id === "classic"
                        ? "The ancient temples of Bagan"
                        : tour.id === "inle"
                          ? "A fisherman on the calm waters of Inle Lake"
                          : "The golden Shwedagon Pagoda in Yangon"
                    }
                    fill
                    sizes="(max-width: 650px) 100vw, (max-width: 960px) 50vw, 33vw"
                  />
                </button>
                <div className="tour-body">
                  <p className="tour-category">{tour.category}</p>
                  <h3>
                    <button onClick={() => setActiveTour(tour)}>
                      {tour.name}
                    </button>
                  </h3>
                  <p>{tour.subtitle}</p>
                  <div className="tour-meta">
                    <span>{tour.days} DAYS</span>
                    <span className="meta-dot" /> SMALL GROUP
                  </div>
                  <div className="tour-route">
                    <Icon name="pin" size={15} />
                    {tour.places.join(" → ")}
                  </div>
                  <div className="tour-bottom">
                    <span>
                      Make it your journey
                      <small>Dates & prices on request</small>
                    </span>
                    <button
                      className="text-link"
                      onClick={() => setActiveTour(tour)}
                    >
                      Explore trip <Icon name="arrow" size={17} />
                    </button>
                  </div>
                </div>
              </article>
            ))}
          </div>
          {filteredTours.length === 0 && (
            <div className="empty-state">
              <Icon name="compass" size={38} />
              <h3>Your journey can be one of a kind.</h3>
              <p>
                No example trips match these filters. Let&apos;s design one
                around you.
              </p>
              <button className="button button-blue" onClick={openPlanner}>
                Create a custom journey <Icon name="arrow" size={17} />
              </button>
            </div>
          )}
          <p className="itinerary-note">
            A little inspiration for your next chapter. Routes are examples; all
            journeys depend on current travel advice and local access.
          </p>
        </section>

        <section id="discover" className="discover">
          <div className="container discover-inner">
            <div className="discover-photos">
              <div className="story-image">
                <Image
                  src="/images/balloons.webp"
                  alt="A hot air balloon above Bagan's temples and the Ayeyarwady River"
                  fill
                  sizes="(max-width: 700px) 90vw, 45vw"
                />
              </div>
              <div className="photo-stamp">
                <Icon name="heart" size={27} />
                <span>
                  More than a place.
                  <br />
                  <strong>A feeling.</strong>
                </span>
              </div>
              <span className="image-caption">
                THE BEAUTY IS IN THE CONNECTION.
              </span>
            </div>
            <div className="discover-copy">
              <p className="eyebrow">MINGALABAR. WELCOME TO OUR HOME.</p>
              <h2>
                A country that stays
                <br />
                with you.
              </h2>
              <p>
                It might be the hush of a thousand ancient temples. A cup of
                sweet tea shared with a stranger. Or a smile that needs no
                translation.
              </p>
              <p>
                Myanmar is a tapestry of cultures, landscapes and everyday
                kindness. We invite you to look a little closer, listen a little
                longer, and discover the stories behind the sights.
              </p>
              <div className="discover-facts">
                <div>
                  <strong>Living heritage</strong>
                  <span>Traditions with a story to tell</span>
                </div>
                <div>
                  <strong>Everyday connection</strong>
                  <span>Moments that mean more</span>
                </div>
              </div>
              <a className="text-link" href="#travel-guide">
                Get to know Myanmar <Icon name="arrow" size={18} />
              </a>
            </div>
          </div>
        </section>

        <section className="experiences container section-space">
          <div className="section-heading">
            <div>
              <p className="eyebrow">YOUR PACE. YOUR PEOPLE. YOUR MYANMAR.</p>
              <h2>There&apos;s more than one way to explore.</h2>
            </div>
          </div>
          <div className="experience-grid">
            <article className="walking-card">
              <Image
                src="/images/yangon.webp"
                alt="Sunlight on the golden shrines of Shwedagon Pagoda"
                fill
                sizes="(max-width: 700px) 100vw, 55vw"
              />
              <div className="walking-shade" />
              <div className="experience-content">
                <span className="pill">A WARM WELCOME, ON US</span>
                <h3>First steps. New perspectives.</h3>
                <p>
                  Our free Yangon walking tour is an invitation to slow down,
                  find the tea shops, and hear the city&apos;s stories.
                </p>
                <button
                  className="button button-white"
                  onClick={() =>
                    setActiveTour({
                      id: "walk",
                      name: "A walk through Yangon",
                      subtitle: "A local introduction to our city.",
                      image: "yangon",
                      days: 1,
                      category: "Walking tour",
                      places: ["Sule Pagoda", "Pansodan Street", "Strand Road"],
                      tag: "FREE WALKING TOUR",
                      description:
                        "A proposed free walking introduction to central Yangon. Discover neighbourhood history, heritage streets and tea-shop culture. Dates, meeting point and accessibility must be confirmed before attending. Food, transport and attraction entry are not included.",
                      itinerary: [
                        "Start near Sule Pagoda; exact meeting point to be confirmed.",
                        "Walk toward Pansodan Street for architecture and everyday city stories.",
                        "Finish near Strand Road. Allow approximately 2 hours; route depends on weather and local conditions.",
                      ],
                    })
                  }
                >
                  Discover our free walking tour <Icon name="arrow" size={18} />
                </button>
              </div>
            </article>
            <article className="custom-card">
              <div className="custom-decoration">
                <Icon name="compass" size={130} />
              </div>
              <p className="eyebrow">DREAM IT. WE&apos;LL HELP SHAPE IT.</p>
              <h3>
                Your kind of adventure.
                <br />
                Made just for you.
              </h3>
              <p>
                A family discovery, a photography escape, or simply a little
                more time in the places you love. Let&apos;s make it personal.
              </p>
              <button className="button button-blue" onClick={openPlanner}>
                Create your own journey <Icon name="arrow" size={18} />
              </button>
              <span className="custom-note">
                Your interests. Your pace. Our local knowledge.
              </span>
            </article>
          </div>
        </section>

        <section id="about" className="about">
          <div className="container about-inner">
            <div>
              <p className="eyebrow">N BAU BUM MYANMAR</p>
              <h2>
                From our home.
                <br />
                <span>With heart.</span>
              </h2>
            </div>
            <div>
              <p className="about-lead">
                We believe the best journeys bring people closer.
              </p>
              <p>
                Our purpose is in our name and our promise: tourism for peace,
                love and understanding. We create space for genuine encounters,
                thoughtful exploration and a deeper appreciation of Myanmar.
              </p>
              <p>
                To us, tourism means listening to communities, respecting their
                choices and keeping more of travel&apos;s benefits close to
                home. Local guides, independent businesses and cultural respect
                belong at the centre of every journey.
              </p>
              <a href="#travel-guide" className="text-link">
                Travel with understanding <Icon name="arrow" size={18} />
              </a>
            </div>
          </div>
        </section>

        <section
          id="travel-guide"
          className="travel-guide container section-space"
        >
          <div className="guide-intro">
            <p className="eyebrow">A LITTLE KNOW-HOW GOES A LONG WAY</p>
            <h2>
              Come curious.
              <br />
              Travel prepared.
            </h2>
            <p>
              The practical things, so you can focus on the meaningful ones.
            </p>
            <div className="advice-note">
              <Icon name="globe" size={24} />
              <p>
                Good journeys start with good information. Always check current
                official advice before making travel plans.
              </p>
            </div>
          </div>
          <div className="accordions">
            {guides.map((guide) => (
              <details key={guide.title}>
                <summary>
                  <Icon name={guide.icon} size={21} />
                  <span>{guide.title}</span>
                  <span className="accordion-plus">+</span>
                </summary>
                <div className="accordion-content">
                  <p>{guide.text}</p>
                  {guide.link && (
                    <a href={guide.link} target="_blank" rel="noreferrer">
                      {guide.label} ↗
                    </a>
                  )}
                  {guide.source && (
                    <p>
                      <a href={guide.source} target="_blank" rel="noreferrer">
                        Source: UK government entry guidance ↗
                      </a>
                    </p>
                  )}
                </div>
              </details>
            ))}
          </div>
        </section>

        <section id="reviews" className="reviews container">
          <span className="quote-mark">“</span>
          <div>
            <p className="eyebrow">THE STORIES WE BRING HOME</p>
            <h2>Every journey leaves a story.</h2>
            <p>
              Our traveller review collection is coming soon. Real experiences,
              shared in our travellers&apos; own words.
            </p>
          </div>
          <a href="#contact" className="text-link">
            Stay connected <Icon name="arrow" size={18} />
          </a>
        </section>

        <section className="closing-cta">
          <div className="container">
            <div>
              <p className="eyebrow">
                A GOOD JOURNEY BEGINS WITH A CONVERSATION
              </p>
              <h2>Let&apos;s find your Myanmar.</h2>
              <p>
                Bring your curiosity. We&apos;ll bring our local perspective.
              </p>
            </div>
            <button className="button button-gold" onClick={openPlanner}>
              Start planning together <Icon name="arrow" size={20} />
            </button>
          </div>
        </section>
      </main>

      <footer id="contact">
        <div className="container footer-main">
          <div className="footer-brand">
            <a href="#" className="brand">
              <Image
                src="/images/logo-mark.webp"
                width={52}
                height={52}
                alt="N Bau Bum emblem"
              />
              <span>
                N BAU BUM<small>M Y A N M A R</small>
              </span>
            </a>
            <p>
              Tourism for peace, love
              <br />
              and understanding.
            </p>
            <span>Travel Company Limited</span>
          </div>
          <div>
            <h3>Find your journey</h3>
            <a href="#journeys">Small group tours</a>
            <button onClick={openPlanner}>Customize your tour</button>
            <a href="#discover">Discover Myanmar</a>
            <a href="#reviews">Traveller stories</a>
          </div>
          <div>
            <h3>A little preparation</h3>
            <a href="#travel-guide">Visas & entry information</a>
            <a href="#travel-guide">When to visit</a>
            <a href="#travel-guide">Culture & currency</a>
            <a href="#travel-guide">Booking & payment</a>
          </div>
          <div className="footer-contact">
            <h3>Let&apos;s connect</h3>
            <p>
              Booking phone & email
              <br />
              <span>Official contact details coming soon.</span>
            </p>
            <button className="text-link" onClick={openPlanner}>
              Save your trip ideas <Icon name="arrow" size={16} />
            </button>
            <p className="payment-note">
              Payments open after booking confirmation.
              <br />
              Online checkout is not yet available.
            </p>
          </div>
        </div>
        <div className="container footer-bottom">
          <span>
            © {new Date().getFullYear()} N Bau Bum Myanmar. Travel with
            understanding.
          </span>
          <details className="photo-credits">
            <summary>Photography credits</summary>
            <p>
              Destination photography via Wikimedia Commons. Images cropped and
              resized for this site.
            </p>
            <a
              href="https://commons.wikimedia.org/wiki/File:Bagan_Myanmar_24288504713.jpg"
              target="_blank"
              rel="noreferrer"
            >
              Golden Bagan hero: Andrea Pepoli · CC BY 2.0
            </a>
            <a
              href="https://commons.wikimedia.org/wiki/File:Bagan,_Burma.jpg"
              target="_blank"
              rel="noreferrer"
            >
              Bagan tour photo: Corto Maltese 1999 · CC BY 2.0
            </a>
            <a
              href="https://commons.wikimedia.org/wiki/File:Bagan_panorama2.jpg"
              target="_blank"
              rel="noreferrer"
            >
              Bagan panorama: gusjer · CC BY 2.0
            </a>
            <a
              href="https://commons.wikimedia.org/wiki/File:Inle_Lake,_Fisherman_in_boat,_Myanmar.jpg"
              target="_blank"
              rel="noreferrer"
            >
              Inle Lake: Vyacheslav Argenberg · CC BY 4.0
            </a>
            <a
              href="https://commons.wikimedia.org/wiki/File:Shwedagon_Pagoda_2017.jpg"
              target="_blank"
              rel="noreferrer"
            >
              Shwedagon: Bjørn Christian Tørrissen · CC BY-SA 4.0
            </a>
            <a
              href="https://commons.wikimedia.org/wiki/File:Hot_air_balloon_over_a_pagoda_in_Bagan.jpg"
              target="_blank"
              rel="noreferrer"
            >
              Bagan balloon: Christopher Michel · CC BY 2.0
            </a>
            <a
              href="https://creativecommons.org/licenses/by/2.0/"
              target="_blank"
              rel="noreferrer"
            >
              CC BY 2.0 license
            </a>
            <a
              href="https://creativecommons.org/licenses/by/4.0/"
              target="_blank"
              rel="noreferrer"
            >
              CC BY 4.0 license
            </a>
            <a
              href="https://creativecommons.org/licenses/by-sa/4.0/"
              target="_blank"
              rel="noreferrer"
            >
              CC BY-SA 4.0 license (including adapted Shwedagon image)
            </a>
          </details>
          <span>
            Made with a local heart <Icon name="heart" size={13} />
          </span>
        </div>
      </footer>

      <dialog
        ref={tourDialog}
        className="modal tour-modal"
        aria-label="Journey details"
        onCancel={() => setActiveTour(null)}
        onClick={(e) => {
          if (e.target === e.currentTarget) setActiveTour(null);
        }}
      >
        <button
          className="modal-close"
          aria-label="Close trip details"
          onClick={() => setActiveTour(null)}
        >
          <Icon name="close" />
        </button>
        {activeTour && (
          <div className="modal-content">
            <p className="eyebrow">
              {activeTour.id === "walk"
                ? "YANGON ON FOOT"
                : `${activeTour.days} DAYS · SMALL GROUP · ITINERARY INSPIRATION`}
            </p>
            <h2>{activeTour.name}</h2>
            <p>{activeTour.description}</p>
            <RouteMap tour={activeTour} />
            <h3>A taste of the journey</h3>
            <ol className="itinerary">
              {activeTour.itinerary.map((stop, i) => (
                <li key={stop}>
                  <span>{i + 1}</span>
                  <p>{stop}</p>
                </li>
              ))}
            </ol>
            <div className="modal-bottom">
              <p>
                {activeTour.id === "walk"
                  ? "Free tour · Schedule to be confirmed"
                  : "Dates, availability & prices on request"}
              </p>
              <button
                className="button button-blue"
                onClick={() => {
                  setPlannedJourney(
                    activeTour.id === "walk"
                      ? "Free Yangon walking tour"
                      : activeTour.name,
                  );
                  setActiveTour(null);
                  openPlanner();
                }}
              >
                Plan a journey like this <Icon name="arrow" size={17} />
              </button>
            </div>
          </div>
        )}
      </dialog>

      <dialog
        ref={plannerDialog}
        className="modal planner-modal"
        aria-label="Plan your Myanmar journey"
        onCancel={() => setPlannerOpen(false)}
        onClick={(e) => {
          if (e.target === e.currentTarget) setPlannerOpen(false);
        }}
      >
        <button
          className="modal-close"
          aria-label="Close trip planner"
          onClick={() => setPlannerOpen(false)}
        >
          <Icon name="close" />
        </button>
        <div className="modal-content">
          <p className="eyebrow">LET&apos;S START WITH YOU</p>
          <h2>Your Myanmar, your way.</h2>
          <p>
            Create a trip brief to keep for your conversation with our team.
            Saving downloads your plan; it doesn&apos;t send a booking request.
          </p>
          <form onSubmit={savePlan} className="planner-form">
            <label>
              Your name
              <input
                name="Name"
                autoComplete="name"
                placeholder="How should we call you?"
                required
                maxLength={100}
              />
            </label>
            <div className="form-row">
              <label>
                Preferred travel month
                <input
                  type="month"
                  name="Preferred month"
                  required
                  min={new Date().toISOString().slice(0, 7)}
                />
              </label>
              <label>
                Travellers
                <input
                  type="number"
                  name="Travellers"
                  min="1"
                  max="30"
                  defaultValue="2"
                  required
                />
              </label>
            </div>
            <label>
              What kind of journey?
              <select
                name="Journey"
                value={plannedJourney}
                onChange={(event) => setPlannedJourney(event.target.value)}
              >
                <option>A tailor-made Myanmar adventure</option>
                <option>The heart of Myanmar</option>
                <option>A slower side of Myanmar</option>
                <option>Yangon, beyond the postcards</option>
                <option>Free Yangon walking tour</option>
              </select>
            </label>
            <label>
              Tell us what you love
              <textarea
                name="Interests"
                rows={3}
                placeholder="Culture, food, photography, a slower pace..."
                maxLength={2000}
              />
            </label>
            <button className="button button-blue" type="submit">
              Save my trip plan <Icon name="arrow" size={18} />
            </button>
            {saved && (
              <div className="save-success" role="status">
                <Icon name="check" />
                <span>
                  Your trip brief has been downloaded. Keep it for when booking
                  contacts are available. No booking has been made.
                </span>
              </div>
            )}
          </form>
        </div>
      </dialog>
    </>
  );
}
