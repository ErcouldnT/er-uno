import { c as create_ssr_component, b as add_attribute, a as each, e as escape } from "../../chunks/index-fa0ff56f.js";
import ioClient from "socket.io-client";
/* empty css                                                        */ioClient("/");
const Routes = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let isim;
  let players = [];
  let yourHand = [];
  let unocular = [];
  const addCardIds = (array) => {
    for (let i = 0; i < array.length; i++) {
      const card = array[i];
      card.id = i + 1;
    }
    return array;
  };
  addCardIds(yourHand);
  {
    if (yourHand.length > 1)
      ;
  }
  return `${$$result.head += `${$$result.title = `<title>\xC7a\u011Fr\u0131 Uno!</title>`, ""}`, ""}



<section class="${"flex flex-col text-center items-center justify-center"}">${`<div class="${"text-3xl p-5 mb-3"}">Uno&#39;ya Ho\u015Fgeldin!</div>
    <form class="${"flex flex-col items-center justify-center"}"><input autofocus class="${"text-2xl p-2 rounded-2xl text-blue-900"}" type="${"text"}" placeholder="${"\u0130sim yaz"}"${add_attribute("value", isim, 0)}>
      <button class="${"bg-red-700 rounded-2xl mt-3 p-3 w-28"}">Giri\u015F yap</button></form>`}
    <div class="${"rounded border absolute left-1 top-1 w-28"}"><h1 class="${"text-xl p-1 border"}">Oyuncular</h1>
      ${each(players, (player) => {
    return `<p${add_attribute("class", player.hazir ? "bg-green-700 border" : "bg-yellow-600 border", 0)}>${escape(player.isim)}</p>`;
  })}</div>
    
    <div class="${"rounded border absolute right-1 top-1 w-28"}"><button class="${"text-xl border w-full p-1 bg-green-600"}">Uno!</button>
      ${each(unocular, (unocu) => {
    return `<p class="${"border bg-red-600"}"><span class="${"font-semibold"}">${escape(unocu)}</span></p>`;
  })}</div>
    </section>`;
});
export { Routes as default };
