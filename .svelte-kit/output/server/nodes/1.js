

export const index = 1;
let component_cache;
export const component = async () => component_cache ??= (await import('../entries/pages/_error.svelte.js')).default;
export const imports = ["_app/immutable/nodes/1.8cf63107.js","_app/immutable/chunks/scheduler.ececd849.js","_app/immutable/chunks/index.86c39e87.js","_app/immutable/chunks/singletons.b317592b.js","_app/immutable/chunks/paths.bfaac380.js"];
export const stylesheets = [];
export const fonts = [];
