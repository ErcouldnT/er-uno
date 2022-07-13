<svelte:head>
  <title>Çağrı Uno!</title>
</svelte:head>

<script>
  import { onMount } from "svelte";
  import { flip } from "svelte/animate";
  import { dndzone } from "svelte-dnd-action";
  import { socket } from "$lib/realtime.js";
  import Card from "$lib/Card.svelte";
  import uno from "$lib/sound/uno-3.ogg";
  import unouno from "$lib/sound/uno-uno-1.ogg";
  import hadi from "$lib/sound/hadi-1.ogg";
  import chatAlert from "$lib/sound/chat_alart.mp3";

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
  let unocular = [];

  // Message
  let message;
  let messages = [];

  const mesajGonder = () => {
    if (!message) return;
    if (!isim) {
      return alert("Önce isim yazarak giriş yapmalısın.")
    };
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
  let pass = false;
  let tasAtti = false;
  let tasCekti = false;
  let activePlayer;  // oyun başladığında socket'ten gelecek!
  let unoCall = false;

  const passGec = () => {
    if (pass && activePlayer === isim) {
      socket.emit("pass-gec");
      pass = false;
      tasAtti = true;
      tasCekti = true;
    } else if (activePlayer === isim) {
      alert("Ortadan kart çek veya kart oyna!");
    };
  };

  const addCardIds = (array) => {
    for (let i = 0; i < array.length; i++) {
      const card = array[i];
      card.id = i + 1;
    };
    return array;
  };

  $: lastReveal = revealCards[revealCards.length - 1];
  $: items = addCardIds(yourHand);
  $: if (activePlayer === isim) {
    tasAtti = false;
    tasCekti = false;
    // if (yourHand.length > 1) {
    //   unoCall = false;
    // };
  };
  $: if (yourHand.length > 1) {
    unoCall = false;
  };
  // $: if (unoCall === false) {
  //   socket.emit("no-uno-call");
  // };

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
      playSound(chatAlert);
      messages.push(msg);
      messages = [...messages];
    });

    // socket.on("uno-alert", isim => {
    //   unocular.push(isim);
    //   unocular = [...unocular];
    //   playSound(uno);
    // });

    socket.on("active-player", player => {
      activePlayer = player;
    });

    socket.on("unoCall", () => {
      playSound(uno);
    });

    socket.on("game-over", winner => {
      if (winner === isim) {
        alert("Tebrikler, oyunu kazandın!");
      } else {
        alert(winner + " oyunu kazandı.");
      };
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

  const unoAlert = () => {
    if (yourHand.length !== 1) {
      return alert("Elinizde sadece bir kart kaldığında Uno diyebilirsiniz.");
    };

    // playSound(uno);
    socket.emit("unoCall", isim);
    unoCall = true;
  };

  const kurallar = () => {
    return alert("Her oyuncu elindeki kartı ıskarta destesinin en üstündeki kart ile eşleştirmek zorundadır. Bu eşleştirme sayıya, renge veya sembole dayalı olabilir. Eğer elde ıskarta destesindeki kartla eşleşen bir kart yoksa, çekme destesinden bir kart çekilmesi gerekmektedir. Çekilen kartla oynanabiliyorsa, aynı turda ortaya atılabilir. Aksi takdirde sıra bir sonraki oyuncuya geçer. Her oyuncu desteden istediği kadar kart çekebilir. Ayrıca istenirse aynı renkten iki kart atılabilir. Son bir kartı kalan oyuncu mutlaka uno diye bağırmalıdır aksi halde ceza olarak +1 kart çeker ve oyunu bitiremez. Oyuncular kendi arasında uno diyen oyuncunun elini tahmin edebiliyor ise oyunu bitirmemesi için yönlendirmede bulunabilirler. Bütün kartlarını bitiren ilk kişi oyunu kazanır.")
  };

  const yeniKartCek = () => {
    if (!tasCekti && activePlayer === isim) {
      socket.emit("yeni-kart-cek");
      tasCekti = true;
      pass = true;
      unoCall = false;
    };
  };

  const tekrarAtabilirMi = (kart) => {
    // şevval'den gelen direktifler doğrultusunda doldur.
    // farklı renkteki aynı sayı olan kartları peşpeşe atabilir.
    if (lastReveal.number === kart.number) {
      return true;
    } else {
      return false;
    };
  };

  const ortayaKartAt = (kart) => {
    const elindeVarMi = yourHand.find(c => kart.color === lastReveal.color || kart.number === lastReveal.number);

    if (yourHand.length === 1 && !unoCall && elindeVarMi && !tasAtti) {
      return alert("Uno çağrısı yapmadan oyunu bitiremezsin!");
    };

    if (activePlayer === isim && !tasAtti && elindeVarMi || tekrarAtabilirMi(kart)) {
      socket.emit("ortaya-kart-at", kart);
      tasAtti = true;
      tasCekti = true;
      pass = true;
    };

    if (yourHand.length <= 1 && unoCall) {
      socket.emit("game-over", isim);
      // socket puanları hesaplasın herkesin ekranına yaz.
    };
  };
</script>

<section class="flex flex-col text-center items-center justify-center">
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
    <div class="">
      <button on:click={passGec} class="{pass ? "bg-green-500" : "bg-red-500"} rounded-xl px-3 py-1 m-3 text-2xl">
        {activePlayer === isim ? "Sıra sende. Pas!" : activePlayer + " isimli oyuncu oynuyor"}
      </button>
    </div>
    <p>Ortadaki kartlar</p>
    <div class="flex flex-row">
      <div class="cursor-pointer" on:dblclick={yeniKartCek}>
        <!-- <p class="text-blue-100 left-0 top-0 relative">Kart çek</p> -->
        <Card {...remaining}/>
      </div>
      <Card {...lastReveal}/>
    </div>
    <div class="m-7 flex flex-row">
      {#each items as card}
        <div on:dblclick={ortayaKartAt(card)}>
          <Card {...card}/>
        </div>
      {/each}
      <!-- <section use:dndzone="{{items, flipDurationMs}}" on:consider="{handleDndConsider}" on:finalize="{handleDndFinalize}" class="flex flex-row">
      </section> -->
      <!-- <p>Elindeki kartlar</p> -->
    </div>
  {/if}
    <div class="rounded border absolute left-1 top-1 w-28">
      <h1 class="text-xl p-1 border">Oyuncular</h1>
      {#each players as player}
        <p class={player.hazir ? "bg-green-700 border" : "bg-yellow-600 border"}>{player.isim}</p>
      {/each}
    </div>
    <!-- <div class="rounded border absolute left-1 bottom-1">
      {#if messages.length > 0}
        {#each messages as message}
          <p class="mx-1 text-left"><span class="font-semibold">{message.isim}</span>: {message.message}</p>
        {/each}
        <button class="bg-red-700 w-full" on:click={clearChat}>Mesajları sil</button>
      {/if}
      <form on:submit|preventDefault={mesajGonder}>
        <input bind:value={message} class="w-full px-2 text-blue-900" placeholder="Mesaj gönder" type="text">
      </form>
    </div> -->
    <div class="rounded border absolute right-1 top-1 w-28">
      <button on:click={unoAlert} class="text-xl border w-full p-1 bg-green-600">Uno!</button>
      {#each unocular as unocu}
        <p class="border bg-red-600"><span class="font-semibold">{unocu}</span></p>
      {/each}
    </div>
    <!-- <div class="rounded border absolute right-1 bottom-1 w-28">
      <h1 on:click={kurallar} class="hover:bg-yellow-600 text-xl p-1 border cursor-pointer">Kurallar</h1>
    </div> -->
</section>
