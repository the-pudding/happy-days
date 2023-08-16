

export const index = 3;
let component_cache;
export const component = async () => component_cache ??= (await import('../entries/pages/demo/elements/_page.svelte.js')).default;
export const imports = ["_app/immutable/nodes/3.6cb90e65.js","_app/immutable/chunks/scheduler.aed2d23e.js","_app/immutable/chunks/index.1ff649d2.js"];
export const stylesheets = ["_app/immutable/assets/3.83b17d31.css"];
export const fonts = [];
