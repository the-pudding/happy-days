

export const index = 1;
let component_cache;
export const component = async () => component_cache ??= (await import('../entries/pages/_error.svelte.js')).default;
export const imports = ["_app/immutable/nodes/1.98fd5625.js","_app/immutable/chunks/scheduler.90e040a3.js","_app/immutable/chunks/index.5a788b58.js","_app/immutable/chunks/singletons.03b1d2bd.js","_app/immutable/chunks/paths.761986fa.js"];
export const stylesheets = [];
export const fonts = [];
