import { c as create_ssr_component, e as escape, a as each, v as validate_component } from "../../chunks/index-fa0ff56f.js";
/* empty css                                                        */const css = {
  code: `@import url(https://fonts.googleapis.com/css?family=Source+Sans+Pro:900);.card.svelte-1iqr3nc.svelte-1iqr3nc{width:116px;height:178px;float:left;background:#fff;border-radius:5px;display:table;box-sizing:border-box;padding:5px;margin:10px;font-family:'Source Sans Pro', sans-serif;font-size:100px;text-shadow:1px  1px 0 #000000,\r
      -1px -1px 0 #000000,\r
      -1px  1px 0 #000000,\r
      1px -1px 0 #000000,\r
      1px  0   0 #000000,\r
      -1px  0   0 #000000,\r
      0   -1px 0 #000000,\r
      0    1px 0 #000000,\r
      4px  4px 0 #000000;box-shadow:0 0 10px #aaaaaa;text-align:center;position:relative}.card.svelte-1iqr3nc .inner.svelte-1iqr3nc{display:table-cell;vertical-align:middle;border-radius:5px;overflow:hidden}.card.svelte-1iqr3nc .mark.svelte-1iqr3nc{display:inline-block;vertical-align:middle;background:#ffffff;margin:auto;padding:0 26px;border-radius:100px 60px / 120px 60px;line-height:1.4}.card.svelte-1iqr3nc.svelte-1iqr3nc:before,.card.svelte-1iqr3nc.svelte-1iqr3nc:after{display:inline-block;position:absolute;line-height:0;font-size:20px;color:#ffffff;text-shadow:1px  1px 0 #000000,\r
      -1px -1px 0 #000000,\r
      -1px  1px 0 #000000,\r
      1px -1px 0 #000000,\r
      1px  0   0 #000000,\r
      -1px  0   0 #000000,\r
      0   -1px 0 #000000,\r
      0    1px 0 #000000,\r
      2px  2px 0 #000000}.card.svelte-1iqr3nc.svelte-1iqr3nc:before{top:15px;left:10px}.card.svelte-1iqr3nc.svelte-1iqr3nc:after{bottom:15px;right:10px;-webkit-transform:rotate(180deg)\r
  }.card.blue.svelte-1iqr3nc.svelte-1iqr3nc{color:#0063B3}.card.blue.svelte-1iqr3nc .inner.svelte-1iqr3nc{background:#0063B3}.card.green.svelte-1iqr3nc.svelte-1iqr3nc{color:#18A849}.card.green.svelte-1iqr3nc .inner.svelte-1iqr3nc{background:#18A849}.card.red.svelte-1iqr3nc.svelte-1iqr3nc{color:#C72A18}.card.red.svelte-1iqr3nc .inner.svelte-1iqr3nc{background:#C72A18}.card.yellow.svelte-1iqr3nc.svelte-1iqr3nc{color:#E6CA1E}.card.yellow.svelte-1iqr3nc .inner.svelte-1iqr3nc{background:#E6CA1E}.card.num-0.svelte-1iqr3nc.svelte-1iqr3nc:before,.card.num-0.svelte-1iqr3nc.svelte-1iqr3nc:after{content:"0"}.card.num-1.svelte-1iqr3nc.svelte-1iqr3nc:before,.card.num-1.svelte-1iqr3nc.svelte-1iqr3nc:after{content:"1"}.card.num-2.svelte-1iqr3nc.svelte-1iqr3nc:before,.card.num-2.svelte-1iqr3nc.svelte-1iqr3nc:after{content:"2"}.card.num-3.svelte-1iqr3nc.svelte-1iqr3nc:before,.card.num-3.svelte-1iqr3nc.svelte-1iqr3nc:after{content:"3"}.card.num-4.svelte-1iqr3nc.svelte-1iqr3nc:before,.card.num-4.svelte-1iqr3nc.svelte-1iqr3nc:after{content:"4"}.card.num-5.svelte-1iqr3nc.svelte-1iqr3nc:before,.card.num-5.svelte-1iqr3nc.svelte-1iqr3nc:after{content:"5"}.card.num-6.svelte-1iqr3nc.svelte-1iqr3nc:before,.card.num-6.svelte-1iqr3nc.svelte-1iqr3nc:after{content:"6"}.card.num-7.svelte-1iqr3nc.svelte-1iqr3nc:before,.card.num-7.svelte-1iqr3nc.svelte-1iqr3nc:after{content:"7"}.card.num-8.svelte-1iqr3nc.svelte-1iqr3nc:before,.card.num-8.svelte-1iqr3nc.svelte-1iqr3nc:after{content:"8"}.card.num-9.svelte-1iqr3nc.svelte-1iqr3nc:before,.card.num-9.svelte-1iqr3nc.svelte-1iqr3nc:after{content:"9"}.card.num-6.svelte-1iqr3nc .mark.svelte-1iqr3nc:after,.card.num-9.svelte-1iqr3nc .mark.svelte-1iqr3nc:after{display:block;content:"";position:relative;top:-25px;left:5px;width:80%;border:1px solid #000000;height:4px;box-shadow:1px 1px 0 #000000}.card.num-6.blue.svelte-1iqr3nc .mark.svelte-1iqr3nc:after,.card.num-9.blue.svelte-1iqr3nc .mark.svelte-1iqr3nc:after{background:#0063B3}.card.num-6.green.svelte-1iqr3nc .mark.svelte-1iqr3nc:after,.card.num-9.green.svelte-1iqr3nc .mark.svelte-1iqr3nc:after{background:#18A849}.card.num-6.red.svelte-1iqr3nc .mark.svelte-1iqr3nc:after,.card.num-9.red.svelte-1iqr3nc .mark.svelte-1iqr3nc:after{background:#C72A18}.card.num-6.yellow.svelte-1iqr3nc .mark.svelte-1iqr3nc:after,.card.num-9.yellow.svelte-1iqr3nc .mark.svelte-1iqr3nc:after{background:#E6CA1E}`,
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
  return `${number && !color ? `<div class="${"card svelte-1iqr3nc"}"><span class="${"inner svelte-1iqr3nc"}">${escape(number)}</span></div>
  <p>Yeni kart</p>` : `<div class="${"card num-" + escape(number) + " " + escape(color) + " svelte-1iqr3nc"}"><span class="${"inner svelte-1iqr3nc"}"><span class="${"mark svelte-1iqr3nc"}">${escape(number)}</span></span></div>`}`;
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
