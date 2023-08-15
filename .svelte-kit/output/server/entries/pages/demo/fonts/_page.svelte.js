import { c as create_ssr_component, d as add_attribute, e as escape, h as add_styles, f as each, v as validate_component } from "../../../../chunks/ssr.js";
import { groups, descending } from "d3";
import { b as base } from "../../../../chunks/paths.js";
const Demo_Fonts_Sample_svelte_svelte_type_style_lang = "";
const css$1 = {
  code: "h3.svelte-19ry7n{margin-top:0}div.svelte-19ry7n{width:calc(25em - 4px);padding:16px;background:var(--color-input-bg);color:var(--color-input-fg);margin:2px;display:-webkit-box;display:flex;-webkit-box-orient:vertical;-webkit-box-direction:normal;flex-direction:column;-webkit-box-pack:justify;justify-content:space-between}details.svelte-19ry7n{font-family:var(--mono)}summary.svelte-19ry7n{cursor:pointer}code.svelte-19ry7n{display:block;background:var(--color-input-fg);color:var(--color-input-bg);padding:16px;white-space:pre-wrap}button.svelte-19ry7n{font-family:var(--mono)}span.svelte-19ry7n{margin-left:16px}",
  map: null
};
const Demo_Fonts_Sample = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let fontSize;
  let { id = "" } = $$props;
  let { family = "" } = $$props;
  let { size = 16 } = $$props;
  let { text } = $$props;
  let source = "";
  let copied = "";
  const url = `${base}/assets/demo/fonts/${id}.css`;
  if ($$props.id === void 0 && $$bindings.id && id !== void 0)
    $$bindings.id(id);
  if ($$props.family === void 0 && $$bindings.family && family !== void 0)
    $$bindings.family(family);
  if ($$props.size === void 0 && $$bindings.size && size !== void 0)
    $$bindings.size(size);
  if ($$props.text === void 0 && $$bindings.text && text !== void 0)
    $$bindings.text(text);
  $$result.css.add(css$1);
  fontSize = `${size}px`;
  return `${$$result.head += `<!-- HEAD_svelte-1uevrx3_START --><link rel="external stylesheet"${add_attribute("href", url, 0)}><!-- HEAD_svelte-1uevrx3_END -->`, ""} <div style="${"font-family: '" + escape(family, true) + "';"}" class="svelte-19ry7n"><h3 class="svelte-19ry7n">${escape(family)}</h3> <p${add_styles({ "font-size": fontSize })}>${escape(text)}</p> <details class="svelte-19ry7n"><summary class="svelte-19ry7n" data-svelte-h="svelte-1p4cxwi">CSS Snippet</summary> <code class="svelte-19ry7n">${escape(source)}</code></details> <p><button class="svelte-19ry7n" data-svelte-h="svelte-v2s51m">Copy CSS to Clipboard</button><span class="svelte-19ry7n">${escape(copied)}</span></p> </div>`;
});
const fontData = [
  {
    id: "atkinson",
    family: "Atkinson",
    type: "sans-serif"
  },
  {
    id: "atlas",
    family: "Atlas Grotesk",
    type: "sans-serif"
  },
  {
    id: "baloo-bhai",
    family: "Baloo Bhai",
    type: "sans-serif"
  },
  {
    id: "canela",
    family: "Canela",
    type: "serif"
  },
  {
    id: "computer-modern",
    family: "Computer Modern",
    type: "serif"
  },
  {
    id: "cozette",
    family: "Cozette",
    type: "other"
  },
  {
    id: "inter",
    family: "Inter",
    type: "sans-serif"
  },
  {
    id: "jamboree",
    family: "Jamboree",
    type: "other"
  },
  {
    id: "jersey",
    family: "Jersey M54",
    type: "other"
  },
  {
    id: "lyon",
    family: "Lyon Display",
    type: "serif"
  },
  {
    id: "metropolis",
    family: "Metropolis",
    type: "sans-serif"
  },
  {
    id: "national",
    family: "National 2 Web",
    type: "sans-serif"
  },
  {
    id: "publico",
    family: "Publico Text",
    type: "serif"
  },
  {
    id: "recoleta",
    family: "Recoleta",
    type: "serif"
  },
  {
    id: "rubik",
    family: "Rubik",
    type: "sans-serif"
  },
  {
    id: "spacemono",
    family: "Space Mono",
    type: "mono"
  },
  {
    id: "tiempos",
    family: "Tiempos Text",
    type: "serif"
  }
];
const Demo_Fonts_svelte_svelte_type_style_lang = "";
const css = {
  code: "#info.svelte-1lzc8ku{text-align:center}article.svelte-1lzc8ku{margin:32px auto;max-width:75em}section.svelte-1lzc8ku{display:-webkit-box;display:flex;flex-wrap:wrap;margin-bottom:64px}label.svelte-1lzc8ku{display:block;margin-bottom:8px}",
  map: null
};
const Demo_Fonts = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let size = 18;
  let text = "The quick brown fox jumps over the lazy dog.";
  const grouped = groups(fontData, (d) => d.type);
  grouped.sort((a, b) => descending(a[1].length, b[1].length));
  $$result.css.add(css);
  return `<div id="info" class="svelte-1lzc8ku"><h1 data-svelte-h="svelte-1m2hcwq">Hosted Fonts on The Pudding</h1> <p data-svelte-h="svelte-895ja5"><em>Do not use fonts hosted by The Pudding without written permission.</em></p> <form><label for="size" class="svelte-1lzc8ku">font-size: ${escape(size)}px</label> <input id="size" type="range" min="12" max="48"${add_attribute("value", size, 0)}> <label for="text" class="svelte-1lzc8ku" data-svelte-h="svelte-16zo6eo">text sample</label> <input id="text" type="text" maxlength="100"${add_attribute("value", text, 0)}></form></div> <article class="svelte-1lzc8ku">${each(grouped, ([type, fonts]) => {
    return `<h2>${escape(type)}</h2> <section class="svelte-1lzc8ku">${each(fonts, ({ family, id }) => {
      return `${validate_component(Demo_Fonts_Sample, "Sample").$$render($$result, { id, family, size, text }, {}, {})}`;
    })} </section>`;
  })} </article>`;
});
const Page = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  return `${validate_component(Demo_Fonts, "DemoFonts").$$render($$result, {}, {}, {})}`;
});
export {
  Page as default
};
