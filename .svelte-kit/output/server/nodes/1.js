

export const index = 1;
let component_cache;
export const component = async () => component_cache ??= (await import('../entries/pages/_error.svelte.js')).default;
export const imports = ["_app/immutable/nodes/1.231cab83.js","_app/immutable/chunks/scheduler.ececd849.js","_app/immutable/chunks/index.86c39e87.js","_app/immutable/chunks/singletons.844f2622.js","_app/immutable/chunks/paths.d3d011e8.js"];
export const stylesheets = [];
export const fonts = [];
