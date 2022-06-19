<svelte:head>
  <title>Çağrı Uno!</title>
</svelte:head>

<script>
  import { onMount } from "svelte";
  import { flip } from "svelte/animate";
  import { dndzone } from "svelte-dnd-action";
  import { socket } from "$lib/realtime.js";
  import Card from "$lib/Card.svelte";
  import uno from "$lib/sound/uno-1.ogg";
  import unouno from "$lib/sound/uno-uno-1.ogg";
  import hadi from "$lib/sound/hadi-1.ogg";

  const playSound = function (file) {
    const audio = new Audio(file);
    audio.loop = false;
    audio.play(); 
  };

  const flipDurationMs = 300;
  function handleDndConsider(e) {
      items = e.detail.items;
  };
  function handleDndFinalize(e) {
      items = e.detail.items;
  };

  let isim;
  let girisYapmis = false;
  let hazir = false;
  let players = [];
  let isGameStarted = false;
  let yourHand = [];
  let items = [];
  let revealCards = [];
  let lastReveal;

  // Message
  let message;
  let messages = [];

  const mesajGonder = () => {
    if (!message) return;
    if (isim) {
      socket.emit("message", {
        isim,
        message,
        date: Date.now()
      });
      message = "";
    };
  };

  const clearChat = () => {
    messages = [];
  };

  // Game
  const remaining = {};

  const addCardIds = (array) => {
    for (let i = 0; i < array.length; i++) {
      const card = array[i];
      card.id = i + 1;
    };
    return array;
  };

  $: lastReveal = revealCards[revealCards.length - 1];
  $: items = addCardIds(yourHand);

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

    socket.on("remaining", number => {
      remaining.number = number;
    });

    socket.on("your-hand", hand => {
      yourHand = hand;
      console.log(yourHand);
    });

    socket.on("reveal-cards", cards => {
      revealCards = cards;
      console.log(revealCards);
    });

    socket.on("message", msg => {
      // console.log(msg);
      messages.push(msg);
      messages = [...messages];
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

    playSound(hadi);
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
    <div class="flex flex-row">
      <div>
        <!-- <p class="text-blue-100 left-0 top-0 relative">Kart çek</p> -->
        <Card {...remaining}/>
      </div>
      <Card {...lastReveal}/>
    </div>
    <div class="m-7">
      <section use:dndzone="{{items, flipDurationMs}}" on:consider="{handleDndConsider}" on:finalize="{handleDndFinalize}" class="flex flex-row">
        {#each items as card(card.id)}
          <div animate:flip="{{duration:flipDurationMs}}">
            <Card {...card}/>
          </div>
        {/each}
      </section>
      <p>Elindeki kartlar</p>
    </div>
  {/if}
    <div class="rounded border absolute left-1 top-1 w-28">
      <h1 class="text-xl p-1 border">Oyuncular</h1>
      {#each players as player}
        <p class={player.hazir ? "bg-green-700 border" : "bg-yellow-600 border"}>{player.isim}</p>
      {/each}
    </div>
    <div class="rounded border absolute left-1 bottom-1">
      {#if messages.length > 0}
        {#each messages as message}
          <p class="mx-1 text-left"><span class="font-semibold">{message.isim}</span>: {message.message}</p>
        {/each}
        <button class="bg-red-700 w-full" on:click={clearChat}>Temizle</button>
      {/if}
      <form on:submit|preventDefault={mesajGonder}>
        <input bind:value={message} class="w-full px-2 text-blue-900" placeholder="Mesaj gönder" type="text">
      </form>
    </div>
    <div class="rounded border absolute right-1 top-1 w-28">
      <h1 class="text-xl p-1 border">Uno!</h1>
    </div>
    <div class="rounded border absolute right-1 bottom-1 w-28">
      <h1 class="text-xl p-1 border">Puan</h1>
    </div>
</section>
