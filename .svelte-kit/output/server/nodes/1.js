

export const index = 1;
let component_cache;
export const component = async () => component_cache ??= (await import('../entries/pages/_error.svelte.js')).default;
export const imports = ["_app/immutable/nodes/1.c553e76f.js","_app/immutable/chunks/scheduler.aed2d23e.js","_app/immutable/chunks/index.3ecacae0.js","_app/immutable/chunks/singletons.1622c75c.js","_app/immutable/chunks/paths.2b61a81e.js"];
export const stylesheets = [];
export const fonts = [];