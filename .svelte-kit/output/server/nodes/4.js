

export const index = 4;
let component_cache;
export const component = async () => component_cache ??= (await import('../entries/pages/demo/fonts/_page.svelte.js')).default;
export const imports = ["_app/immutable/nodes/4.d6056f65.js","_app/immutable/chunks/scheduler.aed2d23e.js","_app/immutable/chunks/index.1ff649d2.js","_app/immutable/chunks/each.e59479a4.js","_app/immutable/chunks/paths.f84b75aa.js"];
export const stylesheets = ["_app/immutable/assets/4.694798f8.css"];
export const fonts = [];
