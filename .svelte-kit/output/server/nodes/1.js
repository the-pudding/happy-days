

export const index = 1;
let component_cache;
export const component = async () => component_cache ??= (await import('../entries/pages/_error.svelte.js')).default;
export const imports = ["_app/immutable/nodes/1.8f169b44.js","_app/immutable/chunks/scheduler.90e040a3.js","_app/immutable/chunks/index.5a788b58.js","_app/immutable/chunks/singletons.091219f0.js","_app/immutable/chunks/paths.3ffd80e0.js"];
export const stylesheets = [];
export const fonts = [];
