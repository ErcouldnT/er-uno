<svelte:head>
  <title>Çağrı Uno!</title>
</svelte:head>

<script>
  import { onMount } from "svelte";

  let isim;
  let girisYapmis = false;

  onMount(() => {
    if (localStorage.isim) {
      isim = localStorage.isim;
      girisYapmis = true;
    };
  });

  const girisYap = () => {
    if (!isim) return;

    localStorage.isim = isim;
    girisYapmis = true;
    // isim = "";
  };

  const cikisYap = () => {
    localStorage.isim = "";
    girisYapmis = false;
    isim = "";
  };
</script>

<section class="flex flex-col text-center h-screen items-center justify-center">
  {#if !girisYapmis}
    <div class="text-3xl p-5 mb-3">Uno'ya Hoşgeldin!</div>
    <form class="flex flex-col items-center justify-center">
      <input bind:value={isim} autofocus class="text-2xl p-2 rounded-2xl text-blue-900" type="text" placeholder="İsim yaz">
      <button on:click|preventDefault={girisYap} class="bg-red-700 rounded-2xl mt-3 p-3 w-28">Giriş yap</button>
    </form>
  {:else}
    <h1 class="text-2xl">Oynamaya hazırsın, {isim}!</h1>
    <button on:click={cikisYap} class="bg-red-700 rounded-2xl mt-3 p-3 w-28">Çıkış yap</button>
  {/if}
</section>
