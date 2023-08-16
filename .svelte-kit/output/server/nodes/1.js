

export const index = 1;
let component_cache;
export const component = async () => component_cache ??= (await import('../entries/pages/_error.svelte.js')).default;
export const imports = ["_app/immutable/nodes/1.dc090c1c.js","_app/immutable/chunks/scheduler.90e040a3.js","_app/immutable/chunks/index.5a788b58.js","_app/immutable/chunks/singletons.f710823e.js","_app/immutable/chunks/paths.d0c055d3.js"];
export const stylesheets = [];
export const fonts = [];
