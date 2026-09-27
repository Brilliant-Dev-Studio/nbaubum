# N Bau Bum Myanmar

Travel website built with Next.js 16 and React 19, using the supplied logo's royal blue and gold palette. Includes responsive tour discovery, itinerary dialogs with schematic directional route maps, a downloadable custom-trip brief, a Yangon walking-tour feature and practical travel guidance.

## Development

```bash
npm run dev
```

Open http://localhost:3000. Page content is in `app/page.tsx`; responsive styles are in `app/globals.css`. Photos and fonts are hosted locally. Font licenses are included in `public/fonts`, and photography credits are linked in the footer.

## Validation

```bash
npm run lint
npm run build
```

If an execution sandbox blocks Turbopack's worker port, use `npm run build -- --webpack`.

## Content to confirm before launch

- Official booking phone number and email address.
- Operator-approved itineraries, departure dates, prices, inclusions and cancellation terms. Current tours are explicitly marked as itinerary inspiration.
- Walking-tour schedule, meeting point and accessibility.
- Real customer reviews; no invented testimonials are displayed.
- Payment provider, supported methods and verified recipient details. No payment collection is implemented.
- The planner downloads a text brief to the visitor's device. It does not transmit personal data or create a reservation. Connect a booking backend once business details are available.

Government entry and travel advice was reviewed on 27 September 2026 at https://www.gov.uk/foreign-travel-advice/myanmar and its entry-requirements page. UK passport rules are explicitly scoped to British travellers. The official Myanmar eVisa portal did not respond during research; the site links to it without claiming independently verified current requirements for other passports. Review changing advice before publication and regularly thereafter.

## Photography

- `bagan-hero.webp` and `bagan-hero-mobile.webp`: gusjer, [Bagan panorama2](https://commons.wikimedia.org/wiki/File:Bagan_panorama2.jpg), [CC BY 2.0](https://creativecommons.org/licenses/by/2.0/). Separate desktop (3840px) and mobile (1200px) crops from the 11199px original.
- `bagan.webp`: Corto Maltese 1999, [Bagan, Burma](https://commons.wikimedia.org/wiki/File:Bagan,_Burma.jpg), [CC BY 2.0](https://creativecommons.org/licenses/by/2.0/).
- `inle.webp`: Vyacheslav Argenberg, [Inle Lake, Fisherman in boat, Myanmar](https://commons.wikimedia.org/wiki/File:Inle_Lake,_Fisherman_in_boat,_Myanmar.jpg), [CC BY 4.0](https://creativecommons.org/licenses/by/4.0/).
- `yangon.webp`: Bjorn Christian Torrissen, [Shwedagon Pagoda 2017](https://commons.wikimedia.org/wiki/File:Shwedagon_Pagoda_2017.jpg), [CC BY-SA 4.0](https://creativecommons.org/licenses/by-sa/4.0/).
- `balloons.webp`: Christopher Michel, [Hot air balloon over a pagoda in Bagan](https://commons.wikimedia.org/wiki/File:Hot_air_balloon_over_a_pagoda_in_Bagan.jpg), [CC BY 2.0](https://creativecommons.org/licenses/by/2.0/).

Images were resized, converted to WebP and cropped in the layout. The adapted Shwedagon image remains available under CC BY-SA 4.0. The supplied logo is retained at `public/logo.jpg`; a cropped emblem is used for navigation and the favicon.
