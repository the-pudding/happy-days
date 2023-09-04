

export const index = 1;
let component_cache;
export const component = async () => component_cache ??= (await import('../entries/pages/_error.svelte.js')).default;
export const imports = ["_app/immutable/nodes/1.08e4883c.js","_app/immutable/chunks/scheduler.ececd849.js","_app/immutable/chunks/index.8f6ff29f.js","_app/immutable/chunks/singletons.c8b225e9.js","_app/immutable/chunks/paths.2ee23b1c.js"];
export const stylesheets = [];
export const fonts = [];
