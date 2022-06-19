const colors = ["blue", "green", "yellow", "red"]; // add number
const specials = ["+4", "changeColor"]; // add color
const defaultCards = ["+2", "block", "changeDir"] // add color

let deck = [];

// adds 36+4 includes zeros
for (let i = 0; i < colors.length; i++) {
  // adds 4 zeros
  for (let j = 0; j < 10; j++) {
    const color = colors[i];
    const card = {
      color,
      number: j
    };
    deck.push(card);
  };
};

// adds 36
for (let i = 0; i < colors.length; i++) {
  for (let j = 1; j < 10; j++) {
    const color = colors[i];
    const card = {
      color,
      number: j
    };
    deck.push(card);
  };
};

// for 12 default cards
for (let i = 0; i < colors.length; i++) {
  for (let j = 0; j < defaultCards.length; j++) {
    const color = colors[i];
    const name = defaultCards[j];
    const card = {
      special: true,
      color,
      name
    };
    deck.push(card);
  };
};

// for 12 default cards
for (let i = 0; i < colors.length; i++) {
  for (let j = 0; j < defaultCards.length; j++) {
    const color = colors[i];
    const name = defaultCards[j];
    const card = {
      special: true,
      color,
      name
    };
    deck.push(card);
  };
};

deck.push({
  special: true,
  name: "shuffleAllHands"
});

// adds 4 (change color) + 4 (+4)
for (let i = 1; i < 5; i++) {
  for (let j = 0; j < specials.length; j++) {
    const card = {
      special: true,
      name: specials[j]
    };
    deck.push(card);
  };
};

export const unoDeck = deck;
