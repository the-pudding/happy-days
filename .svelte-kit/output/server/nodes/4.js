

export const index = 4;
let component_cache;
export const component = async () => component_cache ??= (await import('../entries/pages/demo/fonts/_page.svelte.js')).default;
export const imports = ["_app/immutable/nodes/4.92feda3c.js","_app/immutable/chunks/scheduler.ececd849.js","_app/immutable/chunks/index.d3dd717d.js","_app/immutable/chunks/each.e59479a4.js","_app/immutable/chunks/paths.f44acf94.js"];
export const stylesheets = ["_app/immutable/assets/4.694798f8.css"];
export const fonts = [];
