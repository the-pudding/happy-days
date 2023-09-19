

export const index = 1;
let component_cache;
export const component = async () => component_cache ??= (await import('../entries/pages/_error.svelte.js')).default;
export const imports = ["_app/immutable/nodes/1.6359ae1c.js","_app/immutable/chunks/scheduler.ececd849.js","_app/immutable/chunks/index.86c39e87.js","_app/immutable/chunks/singletons.fb7322e5.js","_app/immutable/chunks/paths.3d9fed02.js"];
export const stylesheets = [];
export const fonts = [];
