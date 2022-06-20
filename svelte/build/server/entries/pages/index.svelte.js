import { c as create_ssr_component, b as add_attribute, a as each, e as escape } from "../../chunks/index-fa0ff56f.js";
import ioClient from "socket.io-client";
/* empty css                                                        */ioClient("/");
const Routes = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let isim;
  let players = [];
  let yourHand = [];
  let unocular = [];
  let message;
  let messages = [];
  const addCardIds = (array) => {
    for (let i = 0; i < array.length; i++) {
      const card = array[i];
      card.id = i + 1;
    }
    return array;
  };
  addCardIds(yourHand);
  return `${$$result.head += `${$$result.title = `<title>\xC7a\u011Fr\u0131 Uno!</title>`, ""}`, ""}



<section class="${"flex flex-col text-center h-screen items-center justify-center"}">${`<div class="${"text-3xl p-5 mb-3"}">Uno&#39;ya Ho\u015Fgeldin!</div>
    <form class="${"flex flex-col items-center justify-center"}"><input autofocus class="${"text-2xl p-2 rounded-2xl text-blue-900"}" type="${"text"}" placeholder="${"\u0130sim yaz"}"${add_attribute("value", isim, 0)}>
      <button class="${"bg-red-700 rounded-2xl mt-3 p-3 w-28"}">Giri\u015F yap</button></form>`}
    <div class="${"rounded border absolute left-1 top-1 w-28"}"><h1 class="${"text-xl p-1 border"}">Oyuncular</h1>
      ${each(players, (player) => {
    return `<p${add_attribute("class", player.hazir ? "bg-green-700 border" : "bg-yellow-600 border", 0)}>${escape(player.isim)}</p>`;
  })}</div>
    <div class="${"rounded border absolute left-1 bottom-1"}">${messages.length > 0 ? `${each(messages, (message2) => {
    return `<p class="${"mx-1 text-left"}"><span class="${"font-semibold"}">${escape(message2.isim)}</span>: ${escape(message2.message)}</p>`;
  })}
        <button class="${"bg-red-700 w-full"}">Temizle</button>` : ``}
      <form><input class="${"w-full px-2 text-blue-900"}" placeholder="${"Mesaj g\xF6nder"}" type="${"text"}"${add_attribute("value", message, 0)}></form></div>
    <div class="${"rounded border absolute right-1 top-1 w-28"}"><button class="${"text-xl border w-full p-1 bg-green-600"}">Uno!</button>
      ${each(unocular, (unocu) => {
    return `<p class="${"border bg-red-600"}"><span class="${"font-semibold"}">${escape(unocu)}</span></p>`;
  })}</div>
    <div class="${"rounded border absolute right-1 bottom-1 w-28"}"><h1 class="${"hover:bg-yellow-600 text-xl p-1 border cursor-pointer"}">Kurallar</h1></div></section>`;
});
export { Routes as default };
