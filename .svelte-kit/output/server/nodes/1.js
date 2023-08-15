

export const index = 1;
let component_cache;
export const component = async () => component_cache ??= (await import('../entries/pages/_error.svelte.js')).default;
export const imports = ["_app/immutable/nodes/1.ee242cd2.js","_app/immutable/chunks/scheduler.aed2d23e.js","_app/immutable/chunks/index.3ecacae0.js","_app/immutable/chunks/singletons.71dffe26.js","_app/immutable/chunks/paths.1ac41a6a.js"];
export const stylesheets = [];
export const fonts = [];
