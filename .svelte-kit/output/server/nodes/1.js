

export const index = 1;
let component_cache;
export const component = async () => component_cache ??= (await import('../entries/pages/_error.svelte.js')).default;
export const imports = ["_app/immutable/nodes/1.86c55a40.js","_app/immutable/chunks/scheduler.ececd849.js","_app/immutable/chunks/index.d3dd717d.js","_app/immutable/chunks/singletons.16f09b1a.js","_app/immutable/chunks/paths.f44acf94.js"];
export const stylesheets = [];
export const fonts = [];
