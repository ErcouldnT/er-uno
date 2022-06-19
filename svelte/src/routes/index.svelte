<svelte:head>
  <title>Çağrı Uno!</title>
</svelte:head>

<script>
  import { onMount } from "svelte";
  import { socket } from "$lib/realtime.js";

  let isim;
  let girisYapmis = false;
  let hazir = false;
  let players = [];
  let isGameStarted = false;
  let yourHand = [];
  let revealCards = [];

  onMount(() => {
    if (localStorage.isim) {
      isim = localStorage.isim;
      girisYapmis = true;
    };

    // if (localStorage.hazir) {
    //   hazir = true;
    // };
    localStorage.hazir = "";

    socket.on("connect", () => {
      console.log("Socket connected.");

      if (isim && isim !== "") {
        socket.emit("player", {
          isim,
          hazir,
          id: socket.id
        });
      };
    });

    socket.on("players", playerList => {
      players = playerList;
      // console.log(players);
    });

    socket.on("game-started", () => {
      isGameStarted = true;
      console.log("Game is started!");
    });

    socket.on("your-hand", hand => {
      yourHand = hand;
      console.log(yourHand);
    });

    socket.on("reveal-cards", cards => {
      revealCards = cards;
      console.log(revealCards);
    });
  });

  const girisYap = () => {
    if (!isim) return;

    localStorage.isim = isim;
    girisYapmis = true;
    localStorage.hazir = "";
    hazir = false;
    // isim = "";

    if (isim && isim !== "") {
      socket.emit("player", {
        isim,
        hazir,
        id: socket.id
      });
    };  
  };

  const cikisYap = () => {
    localStorage.isim = "";
    girisYapmis = false;
    isim = "";
    socket.emit("cikis");
  };

  const toggleHazirOl = () => {
    if (hazir) {
      hazir = false;
      localStorage.hazir = "";
      socket.emit("no-ready");
    } else {
      hazir = true;
      localStorage.hazir = true;
      socket.emit("ready");
    };
  };
</script>

<section class="flex flex-col text-center h-screen items-center justify-center">
  {#if !girisYapmis}
    <div class="text-3xl p-5 mb-3">Uno'ya Hoşgeldin!</div>
    <form class="flex flex-col items-center justify-center">
      <input bind:value={isim} autofocus class="text-2xl p-2 rounded-2xl text-blue-900" type="text" placeholder="İsim yaz">
      <button on:click|preventDefault={girisYap} class="bg-red-700 rounded-2xl mt-3 p-3 w-28">Giriş yap</button>
    </form>
  {:else if girisYapmis && !isGameStarted}
    <h1 class="text-2xl p-3">Hoşgeldin, {isim}!</h1>
    <div class="p-2">
      <p class="">Oyuncuların gelmesini bekle</p>
      <p class="">Herkes hazır olduğunda oyun otomatik olarak başlayacak</p>
    </div>
    <button on:click={toggleHazirOl} class="{hazir ? "bg-green-700" : "bg-yellow-600"} rounded-2xl mt-3 p-3 w-28">{hazir ? "Hazırsın" : "Hazır ol"}</button>
    <button on:click={cikisYap} class="bg-red-700 rounded-2xl mt-3 p-3 w-28">Çıkış yap</button>
  {:else if isGameStarted}
    <p>Ortadaki kartlar</p>
    <p class="absolute bottom-40">Elindeki kartlar</p>
  {/if}
    <div class="rounded border absolute left-1 top-1 w-28">
      <h1 class="text-xl p-1 border">Oyuncular</h1>
      {#each players as player}
        <p class={player.hazir ? "bg-green-700 border" : "bg-yellow-600 border"}>{player.isim}</p>
      {/each}
    </div>
    <div class="rounded border absolute left-1 bottom-1 w-28">
      <h1 class="text-xl p-1 border">Chat</h1>
    </div>
    <div class="rounded border absolute right-1 top-1 w-28">
      <h1 class="text-xl p-1 border">Uno!</h1>
    </div>
    <div class="rounded border absolute right-1 bottom-1 w-28">
      <h1 class="text-xl p-1 border">Puan</h1>
    </div>
</section>
