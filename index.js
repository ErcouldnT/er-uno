import { unoDeck } from "./uno.js";
import { handler } from './svelte/build/handler.js';
import express from 'express';
const app = express();
import http from 'http';
const server = http.createServer(app);
import { Server } from "socket.io";

const io = new Server(server, {
  // once development has finished, delete cors.
  cors: {
    origin: "*",
    methods: ["GET", "POST"]
  },
});

let players = [];
let isGameStarted = false;
let deck = [];
let revealCards = [];

const randomFirstPlayer = () => {
  const randomPlayer = players[Math.floor(Math.random() * players.length)];
  randomPlayer.isPlaying = true;
  return randomPlayer.isim;
};

const randomDeck = (array) => {
  for (let i = 0; i < array.length; i += 1) {
    const randomIndex = Math.floor(Math.random() * array.length);
    // Exchange a[i] and a[j]
    [array[randomIndex], array[i]] = [array[i], array[randomIndex]];
  };
  return array;
};

const gameCheck = () => {
  if (players.length === 0) {
    isGameStarted = false;
  };
};

const isEveryoneReady = () => {
  if (players.length > 1) {
    for (let i = 0; i < players.length; i++) {
      const player = players[i];
      if (player.hazir === false) {
        return false;
      };
    };
    return true;
  };
};

const isAlreadyPlayer = p => {
  for (let i = 0; i < players.length; i++) {
    const player = players[i];
    if (p.isim === player.isim) {
      return true;
    }
  };
  return false;
};

const deletePlayer = id => {
  players = players.filter(player => {
    return id !== player.id;
  });
};

const readyPlayer = id => {
  for (let i = 0; i < players.length; i++) {
    const player = players[i];
    if (id === player.id) {
      player.hazir = true;
    }
  }
};

const noReadyPlayer = id => {
  for (let i = 0; i < players.length; i++) {
    const player = players[i];
    if (id === player.id) {
      player.hazir = false;
    }
  }
};

io.on('connection', socket => {
  console.log('a user connected');

  io.emit("players", players);

  // todo: if isGameStarted && oyuncu players listesinde yoksa
  // oyunun bitmesini bekle mesajı gönder.

  socket.on("player", player => {
    if (!isAlreadyPlayer(player)) {
      players.push(player);
      io.emit("players", players);
      console.log(players);
    };
  });
  
  socket.on("ready", () => {
    readyPlayer(socket.id);
    io.emit("players", players);
    // Starts game when everyone is ready
    // GAME STARTER ------------------------
    if (isEveryoneReady()) {
      revealCards = [];
      deck = randomDeck(unoDeck.slice());
      // todo: herkesin elini özelden gönder.
      for (let i = 0; i < players.length; i++) {
        const player = players[i];
        player.hand = [];
        player.hand.push(deck.shift());
        player.hand.push(deck.shift());
        player.hand.push(deck.shift());
        player.hand.push(deck.shift());
        player.hand.push(deck.shift());
        player.hand.push(deck.shift());
        player.hand.push(deck.shift());
        io.to(player.id).emit("your-hand", player.hand);
      };
      // todo: ortaya açılan kartları gönder.
      revealCards.push(deck.pop());
      io.emit("reveal-cards", revealCards);
      io.emit("remaining", deck.length);
      isGameStarted = true;
      io.emit("game-started");
      io.emit("message", {
        isim: "Uno",
        message: "Herkese bol şans!"
      });

      // ilk oyuncuyu rastgele detect etme fonksiyonu çalıştır.
      const firstPlayer = randomFirstPlayer();
      io.emit("active-player", firstPlayer);
      io.emit("message", {
        isim: "Uno",
        message: firstPlayer + " oyuna başlıyor!"
      });
    };
    // GAME STARTER ------------------------
  });

  socket.on("yeni-kart-cek", () => {
    for (let i = 0; i < players.length; i++) {
      const player = players[i];
      if (player.id === socket.id) {
        player.hand.push(deck.pop());
        io.to(player.id).emit("your-hand", player.hand);
        // kart kalmamışsa revealDeck'ten kopyala shuffle et yeni deck yarat.
        if (deck.length === 0) {
          // shuffle et! ve revealDeck "son kart hariç" boşalt!
          const sonAtilanKart = revealCards.pop();
          // son kart olmadan yeni deck oluştur ve shuffle et
          deck = randomDeck(revealCards);
          // revealCards boşalt ve son kartı revealCards'a geri ekle
          revealCards = [ sonAtilanKart ];
          // socket ile tekrar frontend e göndermeye gerek yok.
        };
        io.emit("remaining", deck.length);
      };
    };
  });

  socket.on("ortaya-kart-at", card => {
    const lastReveal = revealCards[revealCards.length - 1];
    if (!(card.number === lastReveal.number || card.color === lastReveal.color)) {
      return;
    };

    for (let i = 0; i < players.length; i++) {
      const player = players[i];
      // (!) aynı karttan 2 adet varsa ikisini de atar ama 1 sayar...
      // let zatenAtildi = false;
      if (player.id === socket.id) {
        player.hand = player.hand?.filter((c) => {
          return !(c.number === card.number && c.color === card.color);
        });
        io.to(player.id).emit("your-hand", player.hand);
        revealCards.push(card);
        io.emit("reveal-cards", revealCards);
      };
    };
  });

  socket.on("pass-gec", () => {
    const index = players.findIndex(p => {
      return p.isPlaying === true;
    });
    players[index].isPlaying = false;

    if (players[index + 1]) {
      var nextPlayer = players[index + 1];
    } else {
      var nextPlayer = players[0];
    };
    nextPlayer.isPlaying = true;

    io.emit("active-player", nextPlayer.isim);
    io.emit("message", {
      isim: "Uno",
      message: "Sıradaki oyuncu " + nextPlayer.isim + "!"
    });

    console.log(players);
  });

  socket.on("unoCall", (isim) => {
    io.emit("unoCall");  // send isim, too (later)
    io.emit("message", {
      isim: "Uno",
      message: isim + " Uno!"
    });
  });
  
  // socket.on("no-uno-alert");

  socket.on("game-over", isim => {
    io.emit("game-over", isim);
  });

  socket.on("no-ready", () => {
    noReadyPlayer(socket.id);
    io.emit("players", players);
    console.log(players);
  });

  socket.on("cikis", () => {
    deletePlayer(socket.id);
    io.emit("players", players);
    console.log(players);
  });

  socket.on('disconnect', () => {
    console.log('user disconnected');
    deletePlayer(socket.id);
    io.emit("players", players);
    console.log(players);
    gameCheck();
  });

  socket.on("message", msg => {
    io.emit("message" ,msg);
  });
});

app.use(handler);

const port = process.env.PORT || 5000;
server.listen(port, () => {
  console.log(`Listening on http://localhost:${port}`);
});
