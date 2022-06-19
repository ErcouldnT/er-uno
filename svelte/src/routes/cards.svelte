<svelte:head>
  <title>Uno Cards</title>
</svelte:head>

<script>
  import Card from "$lib/Card.svelte";

  let cards = [];
  
  const colors = ["blue", "green", "red", "yellow"];

  for (let i = 0; i < colors.length; i++) {
    const color = colors[i];
    for (let i = 0; i <= 9; i++) {
      cards.push({
        color,
        number: i
      });
    };
  };
</script>

<section>
  {#each cards as card}
    <div>
      <Card {...card}/>
    </div>
  {/each}
</section>