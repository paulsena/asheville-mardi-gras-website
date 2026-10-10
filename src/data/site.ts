// Shared contact info and outbound links, carried over from the Wix site.

export const site = {
  name: 'Asheville Mardi Gras',
  tagline: 'Official Home of Asheville Mardi Gras',
  email: 'ashevillemardigras@gmail.com',
  kreweEmail: 'amgkrewes@gmail.com',
  facebook: 'https://www.facebook.com/Avlmardigras',
  facebookShare: 'https://www.facebook.com/share/1Ac5di1mJU/',
  secondLineFacebook: 'https://www.facebook.com/AshevilleSecondLine/',
  funkatorium: {
    name: 'Wicked Weed Funkatorium',
    address: '147 Coxe Ave, Asheville, NC 28801',
    url: 'https://www.wickedweedbrewing.com/location/funkatorium/',
  },
};

export const links = {
  newsletterSignup: 'https://www.zeffy.com/en-US/embed/newsletter-form/subscribe-to-get-notified-about-new-events-111516',
  volunteerSignup: 'https://www.zeffy.com/en-US/embed/newsletter-form/sign-up-for-our-volunteer-email-list-2',
  membershipCheckout: 'https://www.zeffy.com/en-US/ticketing/asheville-mardi-gras-membership',
  donate: 'https://www.zeffy.com/en-US/donation-form/support-asheville-mardi-gras',
  cookoffTickets: 'https://www.zeffy.com/en-US/ticketing/cajun-cookoff-2',
  twelfthNightTickets:
    'https://www.eventbrite.com/e/asheville-mardi-gras-twelfth-night-tickets-1976349819512?aff=oddtdtcreator',
  twelfthNightVolunteer: 'https://signup.com/go/pRjEBki',
  paradeVolunteer: 'https://signup.com/client/invitation2/secure/12887100021/true#/invitation',
  kreweList: 'https://docs.google.com/document/d/1R7ev8ZWE8PrfZwspzSHdFEVXq2UtrZGiK5EEhaatKT0/edit?usp=sharing',
  paradeTerms: 'https://drive.google.com/file/d/1TgM-U2JDwODo58n6EH9gjYJnMjiwcXM_/view?usp=sharing',
  kreweRegistration: 'https://forms.gle/8MFma9XMdjNTNcpi7',
  chefMarkDragon: 'http://www.chefmarkdragon.com',
};

// When hosting is chosen, point this at a form service (Formspree, Netlify Forms, etc.).
// Until then, forms fall back to opening the visitor's email app addressed to site.email.
export const FORM_ENDPOINT = '';

export const nav = [
  { href: '/events', label: 'Events' },
  { href: '/parade', label: 'Parade' },
  { href: '/krewes', label: 'Krewes' },
  { href: '/get-involved', label: 'Get Involved' },
  { href: '/gallery', label: 'Gallery' },
  { href: '/contact', label: 'Contact' },
];
