import { c as create_ssr_component, v as validate_component } from "../../chunks/ssr.js";
import { w as wordmark } from "../../chunks/wordmark.js";
const app = "";
const Header_svelte_svelte_type_style_lang = "";
const css = {
  code: "header.svelte-1ivhnn6.svelte-1ivhnn6{background:#28212F}.wordmark.svelte-1ivhnn6.svelte-1ivhnn6{max-width:10em;margin:0 auto;padding:1em 0}.wordmark.svelte-1ivhnn6 a.svelte-1ivhnn6{border:none;display:block;color:white}.wordmark.svelte-1ivhnn6 a.svelte-1ivhnn6:hover{background-color:transparent}.wordmark svg path{fill:currentColor}",
  map: null
};
const Header = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  $$result.css.add(css);
  return `<header class="svelte-1ivhnn6"><div class="wordmark svelte-1ivhnn6"><a href="https://pudding.cool" aria-label="The Pudding" target="_self" class="svelte-1ivhnn6"><!-- HTML_TAG_START -->${wordmark}<!-- HTML_TAG_END --></a></div> </header>`;
});
const Layout = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  return `${validate_component(Header, "Header").$$render($$result, {}, {}, {})} <main id="content">${slots.default ? slots.default({}) : ``}</main>`;
});
export {
  Layout as default
};
