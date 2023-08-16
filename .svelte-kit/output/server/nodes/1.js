

export const index = 1;
let component_cache;
export const component = async () => component_cache ??= (await import('../entries/pages/_error.svelte.js')).default;
export const imports = ["_app/immutable/nodes/1.236558bf.js","_app/immutable/chunks/scheduler.aed2d23e.js","_app/immutable/chunks/index.1ff649d2.js","_app/immutable/chunks/singletons.3ab0331c.js","_app/immutable/chunks/paths.16339431.js"];
export const stylesheets = [];
export const fonts = [];
