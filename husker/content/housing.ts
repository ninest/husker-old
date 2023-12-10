import { Dorm, DormPricePoint, DormType } from "@/types/housing";

export const traditional: DormType = {
  slug: "traditional",
  name: "Traditional",
};
export const suite: DormType = {
  slug: "suite",
  name: "Suite",
};
export const hotel: DormType = {
  slug: "hotel",
  name: "Hotel",
};
export const apartment: DormType = {
  slug: "apartment",
  name: "Apartment",
};
export const leased: DormType = {
  slug: "leased",
  name: "Leased Properties",
};

export const economy: DormPricePoint = {
  slug: "economy",
  name: "Economy",
};
export const standard: DormPricePoint = {
  slug: "standard",
  name: "Standard",
};
export const enhanced: DormPricePoint = {
  slug: "enhanced",
  name: "Enhanced",
};

export const dorms: Dorm[] = [
  {
    type: traditional,
    slug: "hastings-hall",
    title: "Hastings Hall",
    pricesPoints: [economy, standard],
    links: [
      {
        name: "Northeastern Housing",
        description: "Dorm specifications",
        href: "https://northeastern.edu/housing/hastings-hall",
      },
    ],
    pages: [
      {
        name: "NEUDorms",
        description: "Images and videos from NEUDorms",
        href: "https://sites.google.com/view/neudorms/first-year/traditional/hastings-hall",
      },
    ],
  },
  {
    type: traditional,
    slug: "kerr-hall",
    title: "Kerr Hall",
    pricesPoints: [economy, standard],
    links: [
      {
        name: "Northeastern Housing",
        description: "Dorm specifications",
        href: "https://northeastern.edu/housing/kerr-hall",
      },
    ],
    pages: [
      {
        name: "NEUDorms",
        description: "Images and videos from NEUDorms",
        href: "https://sites.google.com/view/neudorms/first-year/traditional/kerr-hall",
      },
    ],
  },
  {
    type: traditional,
    slug: "light-hall",
    title: "Light Hall",
    pricesPoints: [economy, standard],
    links: [
      {
        name: "Northeastern Housing",
        description: "Dorm specifications",
        href: "https://www.northeastern.edu/housing/light-hall/",
      },
    ],
  },
  {
    type: traditional,
    slug: "melvin-hall",
    title: "Melvin Hall",
    pricesPoints: [economy, standard],
    links: [
      {
        name: "Northeastern Housing",
        description: "Dorm specifications",
        href: "https://northeastern.edu/housing/melvin-hall",
      },
    ],
    pages: [],
  },
  {
    type: traditional,
    slug: "smith-hall",
    title: "Smith Hall",
    pricesPoints: [economy, standard],
    links: [
      {
        name: "Northeastern Housing",
        description: "Dorm specifications",
        href: "https://northeastern.edu/housing/smith-hall",
      },
    ],
    pages: [
      {
        name: "NEUDorms",
        description: "Images and videos from NEUDorms",
        href: "https://sites.google.com/view/neudorms/first-year/traditional/smith-hall",
      },
    ],
  },
  {
    type: traditional,
    slug: "speare-hall",
    title: "Speare Hall",
    pricesPoints: [economy, standard],
    links: [
      {
        name: "Northeastern Housing",
        description: "Dorm specifications",
        href: "https://northeastern.edu/housing/speare-hall",
      },
    ],
    pages: [
      {
        name: "NEUDorms",
        description: "Images and videos from NEUDorms",
        href: "https://sites.google.com/view/neudorms/first-year/traditional/speare-hall",
      },
    ],
  },
  {
    type: traditional,
    slug: "white-hall",
    title: "White Hall",
    pricesPoints: [economy, standard],
    links: [
      {
        name: "Northeastern Housing",
        description: "Dorm specifications",
        href: "https://northeastern.edu/housing/white-hall",
      },
    ],
    pages: [
      // {
      //   name: "NEUDorms",
      //   description: "Images and videos from NEUDorms",
      //   href: "https://sites.google.com/view/neudorms/first-year/traditional/white-hall",
      // },
    ],
  },
  {
    type: traditional,
    slug: "stetson-east",
    title: "Stetson East",
    pricesPoints: [standard],
    links: [
      {
        name: "Stetson East Northeastern Housing",
        description: "Dorm specifications",
        href: "https://northeastern.edu/housing/stetson-hall-east",
      },
    ],
    pages: [
      {
        name: "Stetson East NEUDorms",
        description: "Images and videos from NEUDorms",
        href: "https://sites.google.com/view/neudorms/first-year/traditional/stetson-east",
      },
    ],
  },
  {
    type: traditional,
    slug: "stetson-west",
    title: "Stetson West",
    pricesPoints: [economy, standard],
    links: [
      {
        name: "Northeastern Housing",
        description: "Dorm specifications",
        href: "https://northeastern.edu/housing/stetson-hall-west",
      },
    ],
    pages: [
      {
        name: "NEUDorms",
        description: "Images and videos from NEUDorms",
        href: "https://sites.google.com/view/neudorms/first-year/traditional/stetson-west",
      },
    ],
  },
  {
    type: suite,
    slug: "153-hemenway-street",
    title: "153 Hemenway Street",
    pricesPoints: [economy, standard],
    links: [
      {
        name: "Northeastern Housing",
        description: "Dorm specifications",
        href: "https://northeastern.edu/housing/153-hemenway-street",
      },
    ],
    pages: [],
  },
  {
    type: suite,
    slug: "international-village",
    title: "International Village",
    pricesPoints: [enhanced],
    links: [
      {
        name: "Northeastern Housing",
        description: "Dorm specifications",
        href: "https://northeastern.edu/housing/international-village",
      },
    ],
    pages: [],
  },
  {
    type: suite,
    slug: "east-village",
    title: "East Village",
    pricesPoints: [enhanced],
    links: [
      {
        name: "Northeastern Housing",
        description: "Dorm specifications",
        href: "https://northeastern.edu/housing/east-village",
      },
    ],
    pages: [],
  },
  {
    type: suite,
    slug: "kennedy-hall",
    title: "Kennedy Hall",
    pricesPoints: [economy, standard],
    links: [
      {
        name: "Northeastern Housing",
        description: "Dorm specifications",
        href: "https://northeastern.edu/housing/kennedy-hall",
      },
    ],
    pages: [
      {
        name: "NEUDorms",
        description: "Images and videos from NEUDorms",
        href: "https://sites.google.com/view/neudorms/first-year/suite-style/kennedy-hall",
      },
    ],
  },
  {
    type: hotel,
    slug: "midtown-hotel",
    title: "Midtown Hotel",
    pricesPoints: [enhanced],
    links: [
      {
        name: "Northeastern Housing",
        description: "Dorm specifications",
        href: "https://northeastern.edu/housing/midtown-hotel",
      },
    ],
    pages: [
      {
        name: "NEUDorms",
        description: "Images and videos from NEUDorms",
        href: "https://sites.google.com/view/neudorms/hotels/midtown-hotel",
      },
    ],
  },
  {
    type: hotel,
    slug: "the-sheraton",
    title: "The Sheraton",
    pricesPoints: [enhanced],
    links: [
      {
        name: "Northeastern Housing",
        description: "Dorm specifications",
        href: "https://www.northeastern.edu/housing/39daltonstreet/",
      },
    ],
    pages: [],
  },
  {
    type: hotel,
    slug: "the-westin",
    title: "The Westin",
    pricesPoints: [enhanced],
    links: [
      {
        name: "Northeastern Housing",
        description: "Dorm specifications",
        href: "https://northeastern.edu/housing/westin",
      },
    ],
    pages: [
      {
        name: "NEUDorms",
        description: "Images and videos from NEUDorms",
        href: "https://sites.google.com/view/neudorms/hotels/the-westin",
      },
    ],
  },
  {
    type: apartment,
    slug: "st-stephen-street",
    title: "St. Stephen Street",
    pricesPoints: [economy, standard],
    links: [
      {
        name: "106",
        description: "Dorm specifications",
        href: "https://www.northeastern.edu/housing/106-st-stephen-street/",
      },
      {
        name: "110",
        description: "Dorm specifications",
        href: "https://www.northeastern.edu/housing/110-st-stephen-street/",
      },
      {
        name: "116",
        description: "Dorm specifications",
        href: "https://www.northeastern.edu/housing/116-st-stephen-street/",
      },
      {
        name: "122",
        description: "Dorm specifications",
        href: "https://northeastern.edu/housing/levine-hall",
      },
    ],
    pages: [],
  },

  {
    type: apartment,
    slug: "10-coventry",
    title: "10 Coventry",
    pricesPoints: [standard],
    links: [
      {
        name: "Northeastern Housing",
        description: "Dorm specifications",
        href: "https://northeastern.edu/housing/10-coventry",
      },
      {
        name: "Floor Plan",
        description: "Map",
        href: "https://www.northeastern.edu/housing/dnaesantoelrihtriseertn/10-coventry/",
      },
    ],
    pages: [],
  },

  {
    type: apartment,
    slug: "dav-a",
    title: "Davenport A",
    pricesPoints: [enhanced],
    links: [
      {
        name: "Northeastern Housing",
        description: "Dorm specifications",
        href: "https://www.northeastern.edu/housing/davenport-commons-a-b/",
      },
      {
        name: "Floor Plan",
        description: "Map",
        href: "https://www.northeastern.edu/housing/dnaesantoelrihtriseertn/davenport-commons-a/",
      },
    ],
    pages: [
      {
        name: "NEUDorms",
        description: "Images and videos from NEUDorms",
        href: "https://sites.google.com/view/neudorms/upperclassmen/davenport-commons/dav-a",
      },
    ],
  },
  {
    type: apartment,
    slug: "dav-b",
    title: "Davenport B",
    pricesPoints: [enhanced],
    links: [
      {
        name: "Northeastern Housing",
        description: "Dorm specifications",
        href: "https://www.northeastern.edu/housing/davenport-commons-a-b/",
      },
      {
        name: "Floor Plan",
        description: "Map",
        href: "https://www.northeastern.edu/housing/dnaesantoelrihtriseertn/davenport-commons-b/",
      },
    ],
    pages: [
      {
        name: "NEUDorms",
        description: "Images and videos from NEUDorms",
        href: "https://sites.google.com/view/neudorms/upperclassmen/davenport-commons/dav-b",
      },
    ],
  },

  {
    type: apartment,
    slug: "west-village-a",
    title: "West Village A",
    pricesPoints: [enhanced],
    links: [
      {
        name: "Northeastern Housing",
        description: "Dorm specifications",
        href: "https://www.northeastern.edu/housing/west-village-a/",
      },
    ],
    pages: [],
  },
  {
    type: apartment,
    slug: "west-village-b",
    title: "West Village B",
    pricesPoints: [enhanced],
    links: [
      {
        name: "Northeastern Housing",
        description: "Dorm specifications",
        href: "https://www.northeastern.edu/housing/west-village-b/",
      },
    ],
    pages: [],
  },
  {
    type: apartment,
    slug: "west-village-c",
    title: "West Village C",
    pricesPoints: [enhanced],
    links: [
      {
        name: "Northeastern Housing",
        description: "Dorm specifications",
        href: "https://www.northeastern.edu/housing/west-village-c/",
      },
    ],
    pages: [],
  },

  {
    type: apartment,
    slug: "west-village-e",
    title: "West Village E",
    pricesPoints: [enhanced],
    links: [
      {
        name: "Northeastern Housing",
        description: "Dorm specifications",
        href: "https://www.northeastern.edu/housing/west-village-e/",
      },
    ],
    pages: [],
  },
  {
    type: apartment,
    slug: "west-village-f",
    title: "West Village F",
    pricesPoints: [enhanced],
    links: [
      {
        name: "Northeastern Housing",
        description: "Dorm specifications",
        href: "https://www.northeastern.edu/housing/west-village-f/",
      },
      {
        name: "Floor Plans",
        description: "Map",
        href: "https://www.northeastern.edu/housing/dnaesantoelrihtriseertn/west-village-f/",
      },
    ],
    pages: [],
  },

  {
    type: apartment,
    slug: "west-village-g",
    title: "West Village G",
    pricesPoints: [enhanced],
    links: [
      {
        name: "Northeastern Housing",
        description: "Dorm specifications",
        href: "https://www.northeastern.edu/housing/west-village-g/",
      },
      {
        name: "Floor Plan",
        description: "Map",
        href: "https://www.northeastern.edu/housing/dnaesantoelrihtriseertn/west-village-g/",
      },
    ],
    pages: [
      {
        name: "NEUDorms",
        description: "Images and videos from NEUDorms",
        href: "https://sites.google.com/view/neudorms/upperclassmen/west-villages/west-village-g",
      },
    ],
  },

  {
    type: apartment,
    slug: "west-village-h",
    title: "West Village H",
    pricesPoints: [enhanced],
    links: [
      {
        name: "Northeastern Housing",
        description: "Dorm specifications",
        href: "https://www.northeastern.edu/housing/west-village-h/",
      },
    ],
    pages: [
      {
        name: "NEUDorms",
        description: "Images and videos from NEUDorms",
        href: "https://sites.google.com/view/neudorms/upperclassmen/west-villages/west-village-h-21",
      },
    ],
  },

  {
    type: apartment,
    slug: "319-huntington-ave",
    title: "319 Huntington Ave",
    pricesPoints: [economy],
    links: [
      {
        name: "Northeastern Housing",
        description: "Dorm specifications",
        href: "https://northeastern.edu/housing/319-huntington-ave",
      },
    ],
    pages: [],
  },

  {
    type: apartment,
    slug: "337-huntington-ave",
    title: "337 Huntington Ave",
    pricesPoints: [economy, standard],
    links: [
      {
        name: "Northeastern Housing",
        description: "Dorm specifications",
        href: "https://northeastern.edu/housing/337-huntington-ave",
      },
      {
        name: "Floor Plan",
        description: "Map",
        href: "https://www.northeastern.edu/housing/dnaesantoelrihtriseertn/the-fairwoods-at-337-huntington-ave/",
      },
    ],
    pages: [],
  },

  {
    type: apartment,
    slug: "407-huntington-ave",
    title: "407 Huntington Ave",
    pricesPoints: [economy, standard],
    links: [
      {
        name: "Northeastern Housing",
        description: "Dorm specifications",
        href: "https://northeastern.edu/housing/407-huntington-ave",
      },
    ],
    pages: [
      {
        name: "NEUDorms",
        description: "Images and videos from NEUDorms",
        href: "https://sites.google.com/view/neudorms/upperclassmen/407-huntington-ave",
      },
    ],
  },

  {
    type: apartment,
    slug: "780-columbus-ave",
    title: "780 Columbus Ave",
    pricesPoints: [standard],
    links: [
      {
        name: "Northeastern Housing",
        description: "Dorm specifications",
        href: "https://northeastern.edu/housing/780-columbus",
      },
    ],
    pages: [
      {
        name: "NEUDorms",
        description: "Images and videos from NEUDorms",
        href: "https://sites.google.com/view/neudorms/upperclassmen/780-columbus-ave",
      },
    ],
  },

  {
    type: apartment,
    slug: "burstein-hall",
    title: "Burstein Hall",
    pricesPoints: [economy, standard],
    links: [
      {
        name: "Northeastern Housing",
        description: "Dorm specifications",
        href: "https://northeastern.edu/housing/burstein-hall",
      },
      {
        name: "Floor Plan",
        description: "Map",
        href: "https://www.northeastern.edu/housing/dnaesantoelrihtriseertn/burstein-hall/",
      },
    ],
    pages: [],
  },

  {
    type: apartment,
    slug: "loftman-hall",
    title: "Loftman Hall",
    pricesPoints: [standard],
    links: [
      {
        name: "Northeastern Housing",
        description: "Dorm specifications",
        href: "https://northeastern.edu/housing/loftman-hall",
      },
      {
        name: "Floor Plan",
        description: "Map",
        href: "https://www.northeastern.edu/housing/dnaesantoelrihtriseertn/loftman-hall/",
      },
    ],
    pages: [],
  },

  {
    type: apartment,
    slug: "rubenstein-hall",
    title: "Rubenstein Hall",
    pricesPoints: [economy, standard],
    links: [
      {
        name: "Northeastern Housing",
        description: "Dorm specifications",
        href: "https://northeastern.edu/housing/rubenstein-hall",
      },
      {
        name: "Floor Plan",
        description: "Map",
        href: "https://www.northeastern.edu/housing/dnaesantoelrihtriseertn/rubenstein-hall/",
      },
    ],
  },
  {
    type: apartment,
    slug: "willis-hall",
    title: "Willis Hall",
    pricesPoints: [standard],
    links: [
      {
        name: "Northeastern Housing",
        description: "Dorm specifications",
        href: "https://northeastern.edu/housing/willis-hall",
      },
      {
        name: "Floor Plan",
        description: "Map",
        href: "https://www.northeastern.edu/housing/dnaesantoelrihtriseertn/willis-hall/",
      },
    ],
  },
  {
    type: apartment,
    slug: "lightview",
    title: "LightView",
    pricesPoints: [enhanced],
    links: [
      {
        name: "Northeastern Housing",
        description: "Dorm specifications",
        href: "https://www.northeastern.edu/housing/lightview/",
      },
      // No lightview floor plan?
      // {
      //   name: "Floor Plan",
      //   description: "Map",
      //   href: "https://www.northeastern.edu/housing/dnaesantoelrihtriseertn/willis-hall/",
      // },
    ],
  },

  {
    type: leased,
    slug: "84-the-fenway",
    title: "84 The Fenway",
    pricesPoints: [standard],
    links: [
      {
        name: "Northeastern Housing",
        description: "Dorm specifications",
        href: "https://www.northeastern.edu/housing/leased-properties/",
      },
    ],
  },
  {
    type: leased,
    slug: "douglass-park",
    title: "Douglass Park",
    pricesPoints: [standard],
    links: [
      {
        name: "Northeastern Housing",
        description: "Dorm specifications",
        href: "https://www.northeastern.edu/housing/leased-properties/",
      },
    ],
  },
  {
    type: leased,
    slug: "edwards-rodgers-hall",
    title: "Edwards and Rodgers Hall",
    pricesPoints: [standard],
    links: [
      {
        name: "Northeastern Housing",
        description: "Dorm specifications",
        href: "https://www.northeastern.edu/housing/edwards-rodgers-hall/",
      },
    ],
  },
];
