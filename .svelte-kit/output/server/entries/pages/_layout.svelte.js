import { c as create_ssr_component, v as validate_component } from "../../chunks/ssr.js";
const app = "";
const wordmark = `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 192.6 50"><path class="st0" d="M150.1 9.5c1.5 0 2.8 1.3 2.8 2.8s-1.3 2.8-2.8 2.8-2.8-1.3-2.8-2.8 1.3-2.8 2.8-2.8zM147.2 17.3h5.6v18.2h-5.6V17.3zM77.1 9.5h-8.9v26h5.6v-8.1h3.3c4.9 0 8.9-4 8.9-8.9s-3.9-9-8.9-9zm0 12.3h-3.3v-6.6h3.3c1.8 0 3.3 1.5 3.3 3.3s-1.4 3.3-3.3 3.3zM105.7 17.6h-5.6v8.9c0 1.8-1.5 3.3-3.3 3.3s-3.3-1.5-3.3-3.3v-8.9h-5.6v8.9c0 4.9 4 8.9 8.9 8.9s8.9-4 8.9-8.9v-8.9zM164.1 17.6c-4.9 0-8.9 4-8.9 8.9v8.9h5.6v-8.9c0-1.8 1.5-3.3 3.3-3.3s3.3 1.5 3.3 3.3v8.9h5.6v-8.9c0-4.9-4-8.9-8.9-8.9zM119.7 16.2v1.4h-3.3c-4.9 0-8.9 4-8.9 8.9s4 8.9 8.9 8.9h8.9V9.5l-5.6 3.3v3.4zm.1 8.4V29.8h-3.3c-1.8 0-3.3-1.5-3.3-3.3s1.5-3.3 3.3-3.3h3.3v1.4zM139.3 16.2v1.4H136c-4.9 0-8.9 4-8.9 8.9s4 8.9 8.9 8.9h8.9V9.5l-5.6 3.3v3.4zm.1 8.4V29.8H136c-1.8 0-3.3-1.5-3.3-3.3s1.5-3.3 3.3-3.3h3.3v1.4h.1zM183.7 17.6c-4.9 0-8.9 4-8.9 8.9s4 8.9 8.9 8.9h3.3v5.1c0 1.8-1.5 3.3-3.3 3.3s-3.3-1.5-3.3-3.3V38l-5.6 3.3c.4 4.5 4.2 8.1 8.9 8.1 4.9 0 8.9-4 8.9-8.9V17.6h-8.9zm3.3 5.8V30h-3.3c-1.8 0-3.3-1.5-3.3-3.3s1.5-3.3 3.3-3.3h3.3zM28.6 17.6c-1.2 0-2.3.2-3.3.6V9.5l-5.6 3.3v22.6h5.6v-8.9c0-1.8 1.5-3.3 3.3-3.3s3.3 1.5 3.3 3.3v8.9h5.6v-8.9c0-4.9-4-8.9-8.9-8.9zM17.8 9.5H0v5.6h6.1v20.3h5.6V15.1h6.1V9.5zM48.3 30.2c-.4 0-1.2-.1-1.8-.4l5.2-2.1 5.6-2.3-1-2.3-.1-.2c-.1-.3-.3-.6-.5-1-.1-.1-.1-.2-.2-.3 0 0 0-.1-.1-.1l-.1-.1-.1-.1c-1.6-2.2-4-3.5-6.7-3.7h-.6c-4.9 0-8.9 4-8.9 8.9 0 .4 0 .9.1 1.4V28.2c0 .3.1.5.2.8v.2c.1.3.2.7.4 1v.2c.1.3.3.5.4.8 0 .1.1.1.1.2.1.2.3.4.4.6v.1s0 .1.1.1l.1.1c1.7 2.1 4.4 3.4 7.2 3.4h6.1v-5.2c.4-.3-3.5-.3-5.8-.3zm7.9-7.3zm-11.6 2.8l-.2.1c.2-1.9 1.8-3.5 3.7-3.5.9 0 1.8.4 2.4.9L46.2 25l-1.6.7z"/></svg>`;
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
