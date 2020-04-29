const NOOKPEDIA_API_ROOT = `https://nookipedia.com/api`;

const bugNames = [
  "Agrias Butterfly",
  "Ant",
  "Atlas Moth",
  "Bagworm",
  "Banded Dragonfly",
  "Bell Cricket",
  "Blue Weevil Beetle",
  "Brown Cicada",
  "Centipede",
  "Cicada Shell",
  "Citrus Long-Horned Beetle",
  "Common Bluebottle",
  "Common Butterfly",
  "Cricket",
  "Cyclommatus Stag",
  "Damselfly",
  "Darner Dragonfly",
  "Diving Beetle",
  "Drone Beetle",
  "Dung Beetle",
  "Earth-Boring Dung Beetle",
  "Emperor Butterfly",
  "Evening Cicada",
  "Firefly",
  "Flea",
  "Fly",
  "Giant cicada",
  "Giant Stag",
  "Giant Water Bug",
  "Giraffe Stag",
  "Golden Stag",
  "Goliath Beetle",
  "Grasshopper",
  "Great Purple Emperor",
  "Hermit Crab",
  "Honeybee",
  "Horned Atlas",
  "Horned Dynastid",
  "Horned Elephant",
  "Horned Hercules",
  "Jewel Beetle",
  "Ladybug",
  "Long Locust",
  "Madagascan Sunset Moth",
  "Man-Faced Stink Bug",
  "Mantis",
  "Migratory Locust",
  "Miyama Stag",
  "Mole Cricket",
  "Monarch Butterfly",
  "Mosquito",
  "Moth",
  "Orchid Mantis",
  "Paper Kite Butterfly",
  "Peacock Butterfly",
  "Pill Bug",
  "Pondskater",
  "Queen Alexandra's Birdwing",
  "Rainbow Stag",
  "Rajah Brooke's Birdwing",
  "Red Dragonfly",
  "Rice Grasshopper",
  "Robust Cicada",
  "Rosalia Batesi Beetle",
  "Saw Stag",
  "Scarab Beetle",
  "Scorpion",
  "Snail",
  "Spider",
  "Stinkbug",
  "Tarantula",
  "Tiger Beetle",
  "Tiger Butterfly",
  "Violin Beetle",
  "Walker Cicada",
  "Walking Leaf",
  "Walking Stick",
  "Wasp",
  "Wharf Roach",
  "Yellow Butterfly",
];

const bugs = [];

const headers = () => {
  return {
    "Content-Type": "application/json",
    Accept: "application/json",
    Authorization: token(),
  };
};

const timer = (method) => {
  let count = 0;
  setInterval(method(bugNames, count), 60 * 1000);
};

const getBugs = (array, count) => {
  if (bugs.length > 80) {
    bugs = [];
  }

  if (count > 80) {
    clearInterval(timer);
  }

  count++;

  const bug = getSeedData(critter, array[count]);
  bugs.push(bug);
};

const getSeedData = (type, item) => {
  return fetch(
    `${NOOKPEDIA_API_ROOT}/${type}/${item}/?api_key=1df0466a-0645-4a04-a2e4-4c1b69b92c4b`,
    { headers: headers() }
  ).then((res) => res.json());
};

timer(getBugs);

export const seeds = {
  bugs: {
    bugs,
  },
};
