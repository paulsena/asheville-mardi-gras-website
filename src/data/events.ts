// Upcoming events. Times are ISO-8601 with the Asheville UTC offset
// (-04:00 during daylight time, -05:00 in winter). Past events hide automatically in the browser.
import { links } from './site';

interface EventDetails {
  slug: string;
  title: string;
  venue: string;
  address?: string;
  summary: string;
  image: string;
  imageAlt?: string;
  photoCredit?: { name: string; href: string };
  href: string;
  cta: string;
  tickets?: string;
}

// Tentative events stay visible until an exact date is announced.
export type AmgEvent = EventDetails & (
  | { start: string; end: string; dateTbd?: never }
  | { start?: never; end?: never; dateTbd: { season: string; year: number } }
);

export const events: AmgEvent[] = [
  {
    slug: 'cajun-cookoff',
    title: 'Cajun Cookoff',
    start: '2026-10-11T14:00:00-04:00',
    end: '2026-10-11T17:00:00-04:00',
    venue: 'Wicked Weed Funkatorium',
    address: '147 Coxe Ave, Asheville, NC 28801',
    summary:
      'Asheville Mardi Gras parade fundraiser featuring live music and tastings from local restaurants and private chefs!',
    image: '/images/site/event-cajun-cookoff.webp',
    href: '/events/cajun-cookoff',
    cta: 'More Info',
    tickets: 'https://www.zeffy.com/en-US/ticketing/cajun-cookoff-2',
  },
  {
    slug: 'twelfth-night',
    title: 'Twelfth Night Masquerade Party',
    start: '2027-01-09T19:00:00-05:00',
    end: '2027-01-09T22:00:00-05:00',
    venue: 'Wicked Weed Funkatorium',
    address: '147 Coxe Ave, Asheville, NC 28801',
    summary:
      "Each year, deep in the heart of winter, the Mardi Gras season lights a spark as it begins in January with the Twelfth Night dance party and celebration. On this enchanted night, the King and Queen of Asheville's new Mardi Gras season will be crowned.",
    image: '/images/site/event-twelfth-night.webp',
    href: '/events/twelfth-night',
    cta: 'More Info',
    tickets: links.twelfthNightTickets,
  },
  {
    slug: 'parade-2027',
    title: '2027 Asheville Mardi Gras Parade – The Roaring 20s',
    start: '2027-02-07T15:05:00-05:00',
    end: '2027-02-07T18:00:00-05:00',
    venue: 'South Slope',
    address: 'South Slope Brewing District, Asheville, NC 28801',
    summary: "This year's theme is the roaring 20s. Come on out and join us for some revelry!",
    image: '/images/site/event-parade-2027.webp',
    href: '/parade',
    cta: 'Parade Info',
  },
  {
    slug: 'queens-ball',
    title: "The Queen's Ball",
    start: '2027-02-07T18:30:00-05:00',
    end: '2027-02-07T22:30:00-05:00',
    venue: 'Wicked Weed Funkatorium',
    address: '147 Coxe Ave, Asheville, NC 28801',
    summary:
      'A post parade celebration of the Asheville Mardi Gras participants and Royals! Celebrate the completion of another successful parade.',
    image: '/images/site/event-queens-ball.webp',
    href: '/parade#queens-ball',
    cta: 'Learn more',
  },
  {
    slug: 'amg-member-picnic',
    title: 'AMG Member Picnic',
    dateTbd: { season: 'Spring', year: 2027 },
    venue: 'Location TBD',
    summary: 'Join us for the AMG Member Picnic in Spring 2027! Date, time, and location TBD. Check back for details.',
    image: '/images/site/event-member-picnic.webp',
    imageAlt: 'A picnic basket and blanket with waffles and berries beneath blooming spring trees.',
    photoCredit: {
      name: 'Svitlana',
      href: 'https://unsplash.com/photos/picnic-spread-in-blooming-orchard-NjQ_gzJfeiw',
    },
    href: '/events/amg-member-picnic',
    cta: 'More Info',
  },
];

export const parade = {
  year: 2027,
  theme: "The Roaring 20's",
  banner: {
    src: '/images/site/parade-banner-2027.webp',
    alt: 'Asheville Mardi Gras presents Roaring Twenties 2027, with mountain scenery, an Art Deco border, beads, and a Mardi Gras mask.',
  },
  start: '2027-02-07T15:05:00-05:00',
  lineUp: '12:00pm line up begins',
  startLabel: '3:05 Parade Start',
  dateLabel: 'Sunday, February 7th, 2027',
  location: 'South Slope',
};
