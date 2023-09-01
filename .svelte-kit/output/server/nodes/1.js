

export const index = 1;
let component_cache;
export const component = async () => component_cache ??= (await import('../entries/pages/_error.svelte.js')).default;
export const imports = ["_app/immutable/nodes/1.6483be61.js","_app/immutable/chunks/scheduler.ececd849.js","_app/immutable/chunks/index.8f6ff29f.js","_app/immutable/chunks/singletons.d160eccb.js","_app/immutable/chunks/paths.c0a4d4d6.js"];
export const stylesheets = [];
export const fonts = [];
