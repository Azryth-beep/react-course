export const heroes = [
  {
    id: 1,
    name: "Superman",
    alias: "Clark Kent",
    powers: ["Super strength", "Flight", "X-ray vision", "Heat vision"],
    origin: {
      planet: "Krypton",
      city: "Metropolis",
      backstory: "Sent to Earth as a baby, raised by the Kents."
    },
    affiliations: [
      { team: "Justice League", role: "Leader" },
      { team: "Daily Planet", role: "Reporter" }
    ],
    nemesis: {
      name: "Lex Luthor",
      type: "Human",
      motivation: "Power and control"
    },
    active: true,
    owner: "DC"
  },
  {
    id: 2,
    name: "Batman",
    alias: "Bruce Wayne",
    powers: ["Genius intellect", "Martial arts", "Stealth", "High-tech gadgets"],
    origin: {
      planet: "Earth",
      city: "Gotham",
      backstory: "Witnessed his parents' murder as a child, vowed to fight crime."
    },
    affiliations: [
      { team: "Justice League", role: "Member" },
      { team: "Wayne Enterprises", role: "CEO" }
    ],
    nemesis: {
      name: "Joker",
      type: "Human",
      motivation: "Chaos and anarchy"
    },
    active: true,
    owner: "DC"
  },
  {
    id: 3,
    name: "Wonder Woman",
    alias: "Diana Prince",
    powers: ["Super strength", "Flight", "Combat skill", "Lasso of Truth"],
    origin: {
      planet: "Themyscira",
      city: "Themyscira",
      backstory: "Amazonian princess, trained as a warrior from birth."
    },
    affiliations: [
      { team: "Justice League", role: "Member" },
      { team: "Amazons", role: "Princess" }
    ],
    nemesis: {
      name: "Ares",
      type: "God",
      motivation: "War and destruction"
    },
    active: true,
    owner: "DC"
  },
  {
    id: 4,
    name: "Spider-Man",
    alias: "Peter Parker",
    powers: ["Wall-crawling", "Spider-sense", "Super agility", "Web-shooting"],
    origin: {
      planet: "Earth",
      city: "New York",
      backstory: "Bitten by a radioactive spider, gained superpowers."
    },
    affiliations: [
      { team: "Avengers", role: "Member" },
      { team: "Daily Bugle", role: "Photographer" }
    ],
    nemesis: {
      name: "Green Goblin",
      type: "Human (mutated)",
      motivation: "Personal vendetta"
    },
    active: true,
    owner: "Marvel"
  },
  {
    id: 5,
    name: "Iron Man",
    alias: "Tony Stark",
    powers: ["Powered armor suit", "Genius intellect", "Flight", "Energy blasts"],
    origin: {
      planet: "Earth",
      city: "Malibu",
      backstory: "Billionaire inventor, built suit to escape captivity."
    },
    affiliations: [
      { team: "Avengers", role: "Leader" },
      { team: "Stark Industries", role: "CEO" }
    ],
    nemesis: {
      name: "Mandarin",
      type: "Human",
      motivation: "World domination"
    },
    active: false,
    owner: "Marvel"
  }
];
