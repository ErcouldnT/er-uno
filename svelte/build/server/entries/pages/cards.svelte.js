import { c as create_ssr_component, v as validate_component } from "../../chunks/index-1259f1f6.js";
const Card = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  return `<div></div>`;
});
const Cards = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  return `<section>${validate_component(Card, "Card").$$render($$result, {}, {}, {})}</section>`;
});
export { Cards as default };
