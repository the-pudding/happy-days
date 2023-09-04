

export const index = 1;
let component_cache;
export const component = async () => component_cache ??= (await import('../entries/pages/_error.svelte.js')).default;
export const imports = ["_app/immutable/nodes/1.2b7a7c8c.js","_app/immutable/chunks/scheduler.ececd849.js","_app/immutable/chunks/index.86c39e87.js","_app/immutable/chunks/singletons.e29ea3cd.js","_app/immutable/chunks/paths.769bdb1f.js"];
export const stylesheets = [];
export const fonts = [];
