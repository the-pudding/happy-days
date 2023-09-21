

export const index = 3;
let component_cache;
export const component = async () => component_cache ??= (await import('../entries/pages/demo/elements/_page.svelte.js')).default;
export const imports = ["_app/immutable/nodes/3.7ba10385.js","_app/immutable/chunks/scheduler.ececd849.js","_app/immutable/chunks/index.d3dd717d.js"];
export const stylesheets = ["_app/immutable/assets/3.83b17d31.css"];
export const fonts = [];
