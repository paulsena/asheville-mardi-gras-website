// Upcoming events. Times are ISO-8601 with the Asheville UTC offset
// (-04:00 during daylight time, -05:00 in winter). Past events hide automatically in the browser.

export interface AmgEvent {
  slug: string;
  title: string;
  start: string;
  end: string;
  venue: string;
  address?: string;
  summary: string;
  image: string;
  href: string;
  cta: string;
  tickets?: string;
}

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
    start: '2027-01-06T19:00:00-05:00',
    end: '2027-01-06T22:00:00-05:00',
    venue: 'Wicked Weed Funkatorium',
    address: '147 Coxe Ave, Asheville, NC 28801',
    summary:
      "Each year, deep in the heart of winter, the Mardi Gras season lights a spark as it begins in January with the Twelfth Night dance party and celebration. On this enchanted night, the King and Queen of Asheville's new Mardi Gras season will be crowned.",
    image: '/images/site/event-twelfth-night.webp',
    href: '/events/twelfth-night',
    cta: 'More Info',
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
];

export const parade = {
  year: 2027,
  theme: "The Roaring 20's",
  start: '2027-02-07T15:05:00-05:00',
  lineUp: '12:00pm line up begins',
  startLabel: '3:05 Parade Start',
  dateLabel: 'Sunday, February 7th, 2027',
  location: 'South Slope',
};
