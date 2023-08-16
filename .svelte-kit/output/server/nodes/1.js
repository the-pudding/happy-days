

export const index = 1;
let component_cache;
export const component = async () => component_cache ??= (await import('../entries/pages/_error.svelte.js')).default;
export const imports = ["_app/immutable/nodes/1.4deeff02.js","_app/immutable/chunks/scheduler.90e040a3.js","_app/immutable/chunks/index.5a788b58.js","_app/immutable/chunks/singletons.f718c154.js","_app/immutable/chunks/paths.c636e57f.js"];
export const stylesheets = [];
export const fonts = [];
