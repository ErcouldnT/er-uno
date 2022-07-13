import { c as create_ssr_component, e as escape, a as each, v as validate_component } from "../../chunks/index-fa0ff56f.js";
/* empty css                                                        */const css = {
  code: `@import url(https://fonts.googleapis.com/css?family=Source+Sans+Pro:900);.blue.svelte-v85807.svelte-v85807{--tw-text-opacity:1;color:rgb(59 130 246 / var(--tw-text-opacity))}.red.svelte-v85807.svelte-v85807{--tw-text-opacity:1;color:rgb(239 68 68 / var(--tw-text-opacity))}.yellow.svelte-v85807.svelte-v85807{--tw-text-opacity:1;color:rgb(253 224 71 / var(--tw-text-opacity))}.green.svelte-v85807.svelte-v85807{--tw-text-opacity:1;color:rgb(34 197 94 / var(--tw-text-opacity))}.wrapper.svelte-v85807.svelte-v85807{transform:scale(var(--scale))}.card.svelte-v85807.svelte-v85807{width:116px;height:178px;float:left;background:#fff;border-radius:5px;display:table;box-sizing:border-box;padding:5px;margin:10px;font-family:'Source Sans Pro', sans-serif;font-size:100px;text-shadow:1px  1px 0 #000000,\r
      -1px -1px 0 #000000,\r
      -1px  1px 0 #000000,\r
      1px -1px 0 #000000,\r
      1px  0   0 #000000,\r
      -1px  0   0 #000000,\r
      0   -1px 0 #000000,\r
      0    1px 0 #000000,\r
      4px  4px 0 #000000;box-shadow:0 0 10px #aaaaaa;text-align:center;position:relative}.card.svelte-v85807 .inner.svelte-v85807{display:table-cell;vertical-align:middle;border-radius:5px;overflow:hidden}.card.svelte-v85807.svelte-v85807:before,.card.svelte-v85807.svelte-v85807:after{display:inline-block;position:absolute;line-height:0;font-size:20px;color:#ffffff;text-shadow:1px  1px 0 #000000,\r
      -1px -1px 0 #000000,\r
      -1px  1px 0 #000000,\r
      1px -1px 0 #000000,\r
      1px  0   0 #000000,\r
      -1px  0   0 #000000,\r
      0   -1px 0 #000000,\r
      0    1px 0 #000000,\r
      2px  2px 0 #000000}.card.svelte-v85807.svelte-v85807:before{top:15px;left:10px}.card.svelte-v85807.svelte-v85807:after{bottom:15px;right:10px;-webkit-transform:rotate(180deg)\r
  }.card.blue.svelte-v85807.svelte-v85807{color:#0063B3}.card.green.svelte-v85807.svelte-v85807{color:#18A849}.card.red.svelte-v85807.svelte-v85807{color:#C72A18}.card.yellow.svelte-v85807.svelte-v85807{color:#E6CA1E}.card.num-0.svelte-v85807.svelte-v85807:before,.card.num-0.svelte-v85807.svelte-v85807:after{content:"0"}.card.num-1.svelte-v85807.svelte-v85807:before,.card.num-1.svelte-v85807.svelte-v85807:after{content:"1"}.card.num-2.svelte-v85807.svelte-v85807:before,.card.num-2.svelte-v85807.svelte-v85807:after{content:"2"}.card.num-3.svelte-v85807.svelte-v85807:before,.card.num-3.svelte-v85807.svelte-v85807:after{content:"3"}.card.num-4.svelte-v85807.svelte-v85807:before,.card.num-4.svelte-v85807.svelte-v85807:after{content:"4"}.card.num-5.svelte-v85807.svelte-v85807:before,.card.num-5.svelte-v85807.svelte-v85807:after{content:"5"}.card.num-6.svelte-v85807.svelte-v85807:before,.card.num-6.svelte-v85807.svelte-v85807:after{content:"6"}.card.num-7.svelte-v85807.svelte-v85807:before,.card.num-7.svelte-v85807.svelte-v85807:after{content:"7"}.card.num-8.svelte-v85807.svelte-v85807:before,.card.num-8.svelte-v85807.svelte-v85807:after{content:"8"}.card.num-9.svelte-v85807.svelte-v85807:before,.card.num-9.svelte-v85807.svelte-v85807:after{content:"9"}`,
  map: null
};
const Card = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let { number } = $$props;
  let { color } = $$props;
  if ($$props.number === void 0 && $$bindings.number && number !== void 0)
    $$bindings.number(number);
  if ($$props.color === void 0 && $$bindings.color && color !== void 0)
    $$bindings.color(color);
  $$result.css.add(css);
  return `${number && !color ? `<div class="${"card svelte-v85807"}"><span class="${"inner svelte-v85807"}">${escape(number)}</span></div>
  <p>Yeni kart</p>` : `<div class="${"bg-white border p-10 max-w-0 shadow-lg flex justify-center items-center"}"><p class="${"text-6xl font-bold " + escape(color) + " svelte-v85807"}">${escape(number)}</p></div>
  `}`;
});
const Cards = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let cards = [];
  const colors = ["blue", "green", "red", "yellow"];
  for (let i = 0; i < colors.length; i++) {
    const color = colors[i];
    for (let i2 = 0; i2 <= 9; i2++) {
      cards.push({ color, number: i2 });
    }
  }
  return `${$$result.head += `${$$result.title = `<title>Uno Cards</title>`, ""}`, ""}



<section>${each(cards, (card) => {
    return `<div>${validate_component(Card, "Card").$$render($$result, Object.assign(card), {}, {})}
    </div>`;
  })}</section>`;
});
export { Cards as default };
