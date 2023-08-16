

export const index = 1;
let component_cache;
export const component = async () => component_cache ??= (await import('../entries/pages/_error.svelte.js')).default;
export const imports = ["_app/immutable/nodes/1.2f33a36c.js","_app/immutable/chunks/scheduler.90e040a3.js","_app/immutable/chunks/index.5a788b58.js","_app/immutable/chunks/singletons.73bb6f98.js","_app/immutable/chunks/paths.0d63c3bb.js"];
export const stylesheets = [];
export const fonts = [];
