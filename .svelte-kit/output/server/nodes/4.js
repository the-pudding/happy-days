

export const index = 4;
let component_cache;
export const component = async () => component_cache ??= (await import('../entries/pages/demo/fonts/_page.svelte.js')).default;
export const imports = ["_app/immutable/nodes/4.adef5c56.js","_app/immutable/chunks/scheduler.90e040a3.js","_app/immutable/chunks/index.5a788b58.js","_app/immutable/chunks/each.e59479a4.js","_app/immutable/chunks/paths.d0c055d3.js"];
export const stylesheets = ["_app/immutable/assets/4.694798f8.css"];
export const fonts = [];
